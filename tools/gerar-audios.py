#!/usr/bin/env python3
"""Gera audio/<id>.mp3 a partir de falas.json, com a voz masculina da Microsoft (pt-BR-AntonioNeural), via edge-tts.

Uso (dentro do ambiente virtual com edge-tts instalado):
    python tools/gerar-audios.py            # gera só o que falta
    python tools/gerar-audios.py --forcar   # regera tudo
"""
import asyncio, json, pathlib, sys
import edge_tts

RAIZ = pathlib.Path(__file__).resolve().parent.parent
VOZ = "pt-BR-AntonioNeural"
VELOCIDADE = "-5%"  # um pouco mais devagar, bom para estudo


async def um(id_, texto, sem, forcar):
    arq = RAIZ / "audio" / f"{id_}.mp3"
    if arq.exists() and arq.stat().st_size > 1000 and not forcar:
        return id_, "pulado"
    async with sem:
        for tentativa in range(1, 5):
            tmp = arq.with_suffix(".tmp")
            try:
                await edge_tts.Communicate(texto, VOZ, rate=VELOCIDADE).save(str(tmp))
                if tmp.stat().st_size < 1000:
                    raise RuntimeError("arquivo vazio")
                tmp.replace(arq)
                return id_, "ok"
            except Exception as e:  # noqa: BLE001
                if tmp.exists():
                    tmp.unlink()
                await asyncio.sleep(2 * tentativa)
        return id_, "falhou"


async def main():
    forcar = "--forcar" in sys.argv
    falas = json.loads((RAIZ / "falas.json").read_text(encoding="utf-8"))
    (RAIZ / "audio").mkdir(exist_ok=True)
    sem = asyncio.Semaphore(3)
    res = await asyncio.gather(*[um(i, t, sem, forcar) for i, t in falas.items()])
    ok = [i for i, r in res if r == "ok"]
    pul = [i for i, r in res if r == "pulado"]
    fal = [i for i, r in res if r == "falhou"]
    total = sum(f.stat().st_size for f in (RAIZ / "audio").glob("*.mp3"))
    print(f"Gerados: {len(ok)} | já existiam: {len(pul)} | falharam: {len(fal)} | tamanho total: {total/1e6:.1f} MB")
    if fal:
        print("Falharam:", ", ".join(fal))
        sys.exit(1)


asyncio.run(main())
