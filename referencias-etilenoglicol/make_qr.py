"""Gera o QR code do site.

Uso:
    pip install qrcode[pil]
    python make_qr.py https://SEU-SERVICO.onrender.com
"""
import sys

import qrcode
from qrcode.constants import ERROR_CORRECT_H

if len(sys.argv) != 2:
    sys.exit("Uso: python make_qr.py https://SEU-SERVICO.onrender.com")

url = sys.argv[1]

qr = qrcode.QRCode(error_correction=ERROR_CORRECT_H, box_size=12, border=4)
qr.add_data(url)
qr.make(fit=True)
qr.make_image(fill_color="black", back_color="white").save("qrcode.png")
print(f"QR code salvo em qrcode.png -> {url}")
