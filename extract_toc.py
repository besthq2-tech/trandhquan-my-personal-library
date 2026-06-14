import PyPDF2
import sys

def get_toc(pdf_path):
    try:
        with open(pdf_path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            outlines = reader.outline
            
            def print_outline(outline_list, level=0):
                for item in outline_list:
                    if isinstance(item, list):
                        print_outline(item, level + 1)
                    else:
                        title = item.title
                        print("  " * level + str(title))
            
            print_outline(outlines)
    except Exception as e:
        print(f"Error: {e}")

get_toc(r"C:\Users\Windows 10 21H1\Downloads\Documents\Cognitive Psychology_Strenberg 6th .pdf")
