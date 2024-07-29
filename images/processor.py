from PIL import Image

def make_white_transparent(input_image_path, output_image_path):
    # 打开图片
    image = Image.open(input_image_path).convert("RGBA")
    datas = image.getdata()

    new_data = []
    for item in datas:
        # 检查是否是白色区域（你可以调整容差来处理略有不同的白色）
        if item[:3] == (255, 255, 255):
            # 将白色区域变成透明
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    image.putdata(new_data)
    image.save(output_image_path, "PNG")

# 使用示例
input_path = "logo2.jpg"
output_path = "logo3.jpg"
make_white_transparent(input_path, output_path)