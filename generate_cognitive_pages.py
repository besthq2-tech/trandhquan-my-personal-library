import os

out_dir = "src/pages"
os.makedirs(out_dir, exist_ok=True)

chapters = [
    {"id": "ch1", "num": 1, "emoji": "🧠", "title": "Introduction to Cognitive Psychology", "desc": "The foundations of cognition and how we study the mind.", "colors": ("#FF6B6B", "#4ECDC4")},
    {"id": "ch2", "num": 2, "emoji": "🧬", "title": "Cognitive Neuroscience", "desc": "Anatomy and mechanisms of the brain.", "colors": ("#A8E6CF", "#DCEDC1")},
    {"id": "ch3", "num": 3, "emoji": "👁️", "title": "Visual Perception", "desc": "From sensation to representation and making sense of what we see.", "colors": ("#FFD3B6", "#FFAAA5")},
    {"id": "ch4", "num": 4, "emoji": "🎯", "title": "Attention and Consciousness", "desc": "Attending to signals, search, and automatic vs. controlled processes.", "colors": ("#FF8B94", "#FFD3B6")},
    {"id": "ch5", "num": 5, "emoji": "💾", "title": "Memory: Models and Research Methods", "desc": "Tasks, traditional models, and working memory.", "colors": ("#A8D8EA", "#AA96DA")},
    {"id": "ch6", "num": 6, "emoji": "⚙️", "title": "Memory Processes", "desc": "Encoding, retrieval, and the constructive nature of memory.", "colors": ("#FCBAD3", "#FFFFD2")},
    {"id": "ch7", "num": 7, "emoji": "🗺️", "title": "The Landscape of Memory", "desc": "Mental images, maps, and propositions.", "colors": ("#00B8A9", "#F8F3D4")},
    {"id": "ch8", "num": 8, "emoji": "🗂️", "title": "Organization of Knowledge in the Mind", "desc": "Declarative vs. procedural knowledge, concepts, and categories.", "colors": ("#F6416C", "#FFDE7D")},
    {"id": "ch9", "num": 9, "emoji": "💬", "title": "Language", "desc": "Comprehension, reading, and deciphering text.", "colors": ("#3B82F6", "#93C5FD")},
    {"id": "ch10", "num": 10, "emoji": "🌍", "title": "Language in Context", "desc": "Language and thought, bilingualism, and social context.", "colors": ("#F59E0B", "#FCD34D")},
    {"id": "ch11", "num": 11, "emoji": "💡", "title": "Problem Solving and Creativity", "desc": "The problem-solving cycle, obstacles, aids, and expertise.", "colors": ("#10B981", "#6EE7B7")},
    {"id": "ch12", "num": 12, "emoji": "⚖️", "title": "Decision Making and Reasoning", "desc": "Heuristics, biases, deductive, and inductive reasoning.", "colors": ("#8B5CF6", "#C4B5FD")}
]

# Generate Index Page
index_cards = ""
for ch in chapters:
    index_cards += f'''
    <a href="#/cognitive/{ch["id"]}" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">{ch["emoji"]}</span>
      <h3 style="margin:0; font-size:1.1rem; color: {ch["colors"][0]};">CH{ch["num"]}: {ch["title"]}</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">{ch["desc"]}</p>
    </a>
    '''

index_html = f'''
const cognitiveIndexHTML = `
<div class="page-shell">
  <header class="section-header">
    <div class="eyebrow" style="color: #4ECDC4;">COURSE SYLLABUS</div>
    <h1 style="font-size: 3rem; margin-bottom: 0.5rem;">Cognitive Psychology</h1>
    <p class="lede" style="max-width: 600px;">Explore the inner workings of the human mind. Understand how we perceive, remember, think, and make decisions through the lens of Cognitive Psychology.</p>
  </header>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 3rem;">
    {index_cards}
  </div>
</div>
`;
export default cognitiveIndexHTML;
'''

with open(os.path.join(out_dir, "cognitive_index.js"), "w", encoding="utf-8") as f:
    f.write(index_html)

# Generate Chapter Pages
for ch in chapters:
    page_content = f'''
export const cognitive{ch['id'].capitalize()}Pages = [
  `
  <div class="book-page">
    <div class="page-content" style="max-width: 700px; margin: 0 auto;">
      <div class="eyebrow" style="color: var(--text-2);">CHAPTER {ch["num"]}</div>
      <h1 style="font-size: 2.5rem; background: -webkit-linear-gradient(45deg, {ch["colors"][0]}, {ch["colors"][1]}); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">{ch["title"]}</h1>
      
      <div class="insight-box" style="padding: 20px; background: rgba(78, 205, 196, 0.1); border-left: 4px solid {ch["colors"][0]}; border-radius: 8px; margin: 2rem 0;">
        <h3 style="margin-top:0;">💡 The Core Idea</h3>
        <p>{ch["desc"]}</p>
      </div>
      <p>Content to be fully developed based on the textbook.</p>
    </div>
  </div>
  `
];

const cognitive{ch['id'].capitalize()}HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb">
    <a href="#/home">Home</a> / 
    <a href="#/cognitive">Cognitive</a> / 
    <span>Chapter {ch["num"]}: {ch["title"]}</span>
  </div>
  
  <div class="article" id="bookContent">
    <!-- Pages will be injected here by initBookPagination -->
  </div>
  
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="font-family: var(--font-mono); font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 4px;">
      Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center; border: 1px solid var(--line); border-radius: 4px; padding: 2px; background: var(--paper);"> <span id="pageTotal"></span>
    </div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;
export default cognitive{ch['id'].capitalize()}HTML;
'''
    with open(os.path.join(out_dir, f"cognitive_{ch['id']}.js"), "w", encoding="utf-8") as f:
        f.write(page_content)

print("Generated 13 files successfully.")
