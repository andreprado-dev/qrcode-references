# Referências: intoxicação por etilenoglicol

Site em Flask com a lista de referências (busca, botão para abrir o artigo e botão para copiar a referência). Feito para ser acessado por QR code.

## Estrutura

```
app.py              # aplicação Flask
refs.py             # lista de referências (edite aqui)
templates/index.html
static/style.css
static/app.js       # busca e botão de copiar
requirements.txt
render.yaml         # configuração do Render
make_qr.py          # gera o qrcode.png
```

## Rodar localmente

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Abra http://127.0.0.1:5000

## Publicar (GitHub + Render)

1. Crie um repositório vazio no GitHub e envie o projeto:
   ```bash
   git init
   git add .
   git commit -m "Site de referências"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/referencias-etilenoglicol.git
   git push -u origin main
   ```
2. No Render: **New +** → **Web Service** → conecte o repositório.
   (O `render.yaml` já traz as configurações; se preferir preencher na mão:
   Build `pip install -r requirements.txt`, Start `gunicorn app:app`.)
3. Escolha o plano **Free** e aguarde o deploy. O endereço será algo como
   `https://referencias-etilenoglicol.onrender.com`.

> No plano gratuito o Render "dorme" após alguns minutos sem acessos, e o primeiro acesso depois disso pode levar ~30-60 s. Vale abrir o link antes de apresentar.

## Gerar o QR code

Depois que o Render mostrar o endereço final:

```bash
pip install "qrcode[pil]"
python make_qr.py https://SEU-SERVICO.onrender.com
```

Isso cria o `qrcode.png`, pronto para colocar no trabalho.

## Atualizar referências

Edite `refs.py`, faça `git commit` e `git push`: o Render publica de novo sozinho. O QR code continua o mesmo.
