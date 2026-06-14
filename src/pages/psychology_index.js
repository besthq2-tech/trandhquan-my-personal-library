
const psychIndexHTML = `
<div class="page-shell">
  <header class="section-header">
    <div class="eyebrow" style="color: #4ECDC4;">COURSE SYLLABUS</div>
    <h1 style="font-size: 3rem; margin-bottom: 0.5rem;">Developmental Psychology</h1>
    <p class="lede" style="max-width: 600px;">A journey through the human lifespan, from infancy to late adulthood. Understand the cognitive, physical, and socioemotional changes that shape who we are.</p>
  </header>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 3rem;">
    
    <a href="#/psychology/ch1" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🌱</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FF6B6B;">CH1: Human Development</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">The foundation of how we grow and change.</p>
    </a>
    
    <a href="#/psychology/ch3" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🏃‍♂️</span>
      <h3 style="margin:0; font-size:1.1rem; color: #A8E6CF;">CH3: Physical, Perceptual, Motor</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">How babies learn to move and perceive.</p>
    </a>
    
    <a href="#/psychology/ch4" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🧩</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FFD3B6;">CH4: Cognitive - Early Childhood</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">The explosive growth of the infant mind.</p>
    </a>
    
    <a href="#/psychology/ch5" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">💞</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FF8B94;">CH5: Socioemotional - Infancy</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">Attachment and the first bonds of love.</p>
    </a>
    
    <a href="#/psychology/ch6" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🎒</span>
      <h3 style="margin:0; font-size:1.1rem; color: #A8D8EA;">CH6: Cognitive & Physical Childhood</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">Growing up and going to school.</p>
    </a>
    
    <a href="#/psychology/ch7" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🤝</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FCBAD3;">CH7: Socioemotional Childhood</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">Friendships, self-esteem, and peer groups.</p>
    </a>
    
    <a href="#/psychology/ch8" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🧠</span>
      <h3 style="margin:0; font-size:1.1rem; color: #00B8A9;">CH8: Cognitive Adolescence</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">Abstract thinking and the teenage brain.</p>
    </a>
    
    <a href="#/psychology/ch9" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🎭</span>
      <h3 style="margin:0; font-size:1.1rem; color: #F6416C;">CH9: Socioemotional Adolescence</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">Identity crisis and independence.</p>
    </a>
    
    <a href="#/psychology/ch10" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🎓</span>
      <h3 style="margin:0; font-size:1.1rem; color: #3B82F6;">CH10: Cognitive - Young Adulthood</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">Postformal thought and peak performance.</p>
    </a>
    
    <a href="#/psychology/ch11" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">💼</span>
      <h3 style="margin:0; font-size:1.1rem; color: #F59E0B;">CH11: Middle Adulthood</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">Generativity vs. Stagnation.</p>
    </a>
    
    <a href="#/psychology/ch12" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🏖️</span>
      <h3 style="margin:0; font-size:1.1rem; color: #10B981;">CH12: Work, Leisure, & Retirement</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">Redefining identity outside the workplace.</p>
    </a>
    
    <a href="#/psychology/ch13" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">⚖️</span>
      <h3 style="margin:0; font-size:1.1rem; color: #8B5CF6;">CH13: Biosychosocial Middle Adulthood</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">The intersection of biology, psychology, and society.</p>
    </a>
    
    <a href="#/psychology/ch14" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🦉</span>
      <h3 style="margin:0; font-size:1.1rem; color: #EC4899;">CH14: Cognitive Later In Life</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">Wisdom vs. cognitive decline.</p>
    </a>
    
    <a href="#/psychology/ch15" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">👵</span>
      <h3 style="margin:0; font-size:1.1rem; color: #14B8A6;">CH15: Social Aspects of Later Life</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">Integrity, looking back, and staying connected.</p>
    </a>
    
    <a href="#/psychology/ch16" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🕊️</span>
      <h3 style="margin:0; font-size:1.1rem; color: #64748B;">CH16: Dying and Bereavement</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-2);">The final stage of the lifespan.</p>
    </a>
    
  </div>
</div>
`;
export default psychIndexHTML;
