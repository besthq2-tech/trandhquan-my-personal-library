import PyPDF2
reader = PyPDF2.PdfReader(r"C:\Users\Windows 10 21H1\Downloads\Documents\Bodie's Investments, 10th Edition.pdf")

def print_outline(outline, level=0):
    for item in outline:
        if isinstance(item, list):
            print_outline(item, level + 1)
        else:
            print("  " * level + item.title)

if reader.outline:
    print_outline(reader.outline)
else:
    print("No outline found.")
