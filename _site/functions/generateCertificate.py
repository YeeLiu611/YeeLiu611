from PIL import Image, ImageDraw, ImageFont
import sys

TEMPLATE_PATH = "assets/certificate_template.png"
FONT_PATH = "assets/font.ttf"

def generate_certificate(name, certificate_number, output_path):
    image = Image.open(TEMPLATE_PATH)
    draw = ImageDraw.Draw(image)
    font = ImageFont.truetype(FONT_PATH, 50)

    draw.text((500, 300), name, font=font, fill="black")
    draw.text((500, 400), certificate_number, font=font, fill="black")

    image.save(output_path)

if __name__ == "__main__":
    name, certificate_number, output_path = sys.argv[1], sys.argv[2], sys.argv[3]
    generate_certificate(name, certificate_number, output_path)