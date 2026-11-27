Preciso que você finalize e publique o app "Treino Verbena" que está nesta pasta (/home/andre/Documentos/000/Andre/Projetos/P001/treino-verbena). Leia primeiro docs/LEIA-ME.md. Não mexa em nada fora desta pasta. Faça tudo e me diga o resultado em português simples, no fim.

1) Vozes. Crie um ambiente virtual em ~/.local/share/edge-tts-venv, instale o pacote edge-tts nele e rode `python tools/gerar-audios.py` (voz pt-BR-AntonioNeural da Microsoft). O script lê falas.json e grava audio/<id>.mp3. Se algum falhar, rode de novo até terminar. Confira: 104 arquivos MP3 em audio/, nenhum vazio, tamanho total (diga quantos MB). Se tiver ffprobe, confira a duração de 3 arquivos (devem ter alguns segundos ou minutos, não zero).

2) Teste local. Suba `python3 -m http.server 8000` nesta pasta, abra http://localhost:8000 e confirme que o app abre e que um áudio toca (por exemplo audio/intro.mp3 responde 200 e tem conteúdo). Depois pare o servidor.

3) Publicação gratuita. Faça `git init` (se ainda não for repositório), branch main, commit com tudo (inclusive audio/*.mp3) e crie o repositório PÚBLICO Jastech7/treino-verbena com `gh repo create`, enviando (push) o commit. Ative o GitHub Pages pela branch main, pasta raiz (`gh api` em repos/Jastech7/treino-verbena/pages). Espere o site ficar no ar (consulte o status até concluir) e confirme que https://jastech7.github.io/treino-verbena/ , .../manifest.webmanifest, .../sw.js e .../audio/intro.mp3 respondem 200.

4) Ao final, faça commit e envio (push) de qualquer ajuste, e me diga: o link do app, quantos áudios foram gerados, o tamanho total e se algo falhou. Se qualquer passo falhar, pare e me explique o erro em vez de improvisar.
