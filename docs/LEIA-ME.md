# Treino Verbena · Normas em Foco

Aplicação gratuita (PWA, funciona offline depois do primeiro acesso) com 9 mini-aulas (resumo dos Vídeos 2 e 3) e 12 questões reais da Verbena/UFG, com voz masculina (Microsoft, Antônio) e autópsia de cada alternativa.

## Estrutura
- `index.html`, `style.css`, `app.js`: a aplicação.
- `dados.js`: questões e mini-aulas (GERADO por `tools/mk.js`; não editar à mão).
- `falas.json`: texto de cada áudio (GERADO por `tools/mk.js`).
- `audio/`: os MP3 das vozes (gerados por `tools/gerar-audios.py`).
- `sw.js` e `manifest.webmanifest`: instalação no celular e modo offline.
- `fontes/`: o conteúdo editável (questões, explicações, aulas). `tools/mk.js` transforma `fontes/` em `dados.js` e `falas.json`.

## Rodar no computador
`python3 -m http.server 8000` dentro desta pasta e abrir http://localhost:8000

## Mudar o conteúdo
1. Edite os arquivos de `fontes/`.
2. `node tools/mk.js` (gera `dados.js` e `falas.json`).
3. `python tools/gerar-audios.py` (gera só os áudios que faltam; use `--forcar` para refazer todos).
4. Troque `VERSAO` em `sw.js` (ex.: `treino-v1.1`) para os celulares receberem a atualização.

## Trilha pedagógica
Questões 1–4: o app guia (Ler → Núcleo → Decidir → Autópsia). 5–8: meio a meio (dicas e núcleo opcional). 9–12: sozinho.
Cores: âmbar = núcleo da ideia; vermelho = armadilha; verde = o que confere; azul = o que manda no enunciado.

## Avisos
- Enunciados e alternativas seguem a prova (ajustes só de hifenização, espaços e um erro de digitação em Jussara 2024, q. 9: “terceira pessoal” → “terceira pessoa”).
- As explicações são nossas, não da banca. Confira a legislação vigente.
