import os

path = r'C:\Users\Windows 10 21H1\.gemini\antigravity\scratch\trandhquan-personal-library\src\pages\home.js'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

new_card = '''        <a class="collection-card" href="#/investing">
          <span style="color: #F59E0B;">Investments</span>
          <h3>Bodie's Investments</h3>
          <p>Portfolio theory, asset pricing, derivative markets, and applied portfolio management strategies based on the classic textbook.</p>
        </a>
'''
c = c.replace('<div class="collection-grid">', '<div class="collection-grid">\n' + new_card)

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated home.js')
