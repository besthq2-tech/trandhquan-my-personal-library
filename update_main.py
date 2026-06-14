import os

path = r'C:\Users\Windows 10 21H1\.gemini\antigravity\scratch\trandhquan-personal-library\src\main.js'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# Add imports
imports = "import investingIndexHTML from './pages/investing_index.js';\n"
for i in range(1, 29):
    imports += f"import investingCh{i}HTML, {{ investingCh{i}Pages }} from './pages/investing_ch{i}.js';\n"

c = c.replace("import { initScrollAnimations } from './animations.js';", imports + "import { initScrollAnimations } from './animations.js';")

# Add nav
nav = '''
        <details class="nav-section" data-default-open="false">
          <summary><span>Investments</span><span class="chev">⌄</span></summary>
          <div class="nav-children" style="padding-left: 8px;">
            <a class="nav-link" href="#/investing" data-link-route="/investing">
              <span class="nav-index">03</span><span>Investing Index</span>
            </a>
            <details class="nav-section" style="border-top: none;">
              <summary><span>Chapters 1-14</span><span class="chev">⌄</span></summary>
              <div class="nav-children">
'''
for i in range(1, 15):
    nav += f'                <a class="nav-link" href="#/investing/ch{i}" data-link-route="/investing/ch{i}"><span class="nav-index">{i:02d}</span><span>Chapter {i}</span></a>\n'
nav += '''              </div>
            </details>
            <details class="nav-section" style="border-top: none;">
              <summary><span>Chapters 15-28</span><span class="chev">⌄</span></summary>
              <div class="nav-children">
'''
for i in range(15, 29):
    nav += f'                <a class="nav-link" href="#/investing/ch{i}" data-link-route="/investing/ch{i}"><span class="nav-index">{i:02d}</span><span>Chapter {i}</span></a>\n'
nav += '''              </div>
            </details>
          </div>
        </details>
'''
c = c.replace('<details open class="nav-section" data-default-open="true">', nav + '\n        <details open class="nav-section" data-default-open="true">')

# Add to routes
r_add = "    '/investing': investingIndexHTML,\n"
for i in range(1, 29):
    r_add += f"    '/investing/ch{i}': investingCh{i}HTML,\n"
c = c.replace("'/cognitive/ch12': cognitiveCh12HTML", "'/cognitive/ch12': cognitiveCh12HTML,\n" + r_add.rstrip(',\n'))

# Add to initBookPagination calls
init_add = ""
for i in range(1, 29):
    init_add += f"        if (hash === '/investing/ch{i}') initBookPagination(investingCh{i}Pages);\n"
c = c.replace("if (hash === '/cognitive/ch12') initBookPagination(cognitiveCh12Pages);", "if (hash === '/cognitive/ch12') initBookPagination(cognitiveCh12Pages);\n" + init_add)

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated main.js")
