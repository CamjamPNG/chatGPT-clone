import qrcode
import image

qr = qrcode.QRCode(version=15, box_size=10, border=5)
data = "https://youtu.be/13l645ujkig"

qr.add_data(data)
qr.make(fit=True)
img = qr.make_image(fill="black", back_color="white")
img.save("TheBoys.png")