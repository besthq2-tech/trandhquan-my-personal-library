import os
import subprocess
import re
import glob

videos = {
    "ch1": "ukntjd7iOS8",
    "ch3": "aLK_nkgx8wo",
    "ch4": "Y9hWwxPV1bs",
    "ch5": "O4QBTXeWmBc",
    "ch6": "y5KMF4sUHEg",
    "ch7": "YdjQ6cwgQMk",
    "ch8": "LxjnpUxUFUE",
    "ch9": "zdfHKXwK3Z8",
    "ch10": "hmgVyFP9A9Y",
    "ch11": "8OrCdgHcMVM",
    "ch12": "ao8hPGhVuNU",
    "ch13": "hOT3-eQ78ug",
    "ch14": "uNrB2uG_9gs",
    "ch15": "nTPBBAdTPwE",
    "ch16": "tmXh_vj88sE"
}

out_dir = "transcripts"
os.makedirs(out_dir, exist_ok=True)

for ch, vid in videos.items():
    print(f"Processing {ch} ({vid})...")
    
    # Check if already processed
    clean_path = os.path.join(out_dir, f"{ch}.txt")
    if os.path.exists(clean_path):
        print(f"{ch} already done.")
        continue

    # Download vtt
    url = f"https://www.youtube.com/watch?v={vid}"
    cmd = ["python", "-m", "yt_dlp", "--write-auto-sub", "--skip-download", "--sub-lang", "en", "-o", f"{out_dir}/{ch}.%(ext)s", url]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    # Find the downloaded vtt file
    vtt_files = glob.glob(f"{out_dir}/{ch}*.vtt")
    if not vtt_files:
        print(f"Failed to download {ch}")
        continue
    
    vtt_file = vtt_files[0]
    
    # Clean vtt
    try:
        text = open(vtt_file, 'r', encoding='utf-8').read()
    except:
        text = ""
        
    clean = re.sub(r'<[^>]+>', '', text)
    lines = [l.strip() for l in clean.split('\n') if l.strip() and not l.startswith('00:') and not '-->' in l and not l.startswith('WEBVTT') and not l.startswith('Kind:') and not l.startswith('Language:') and not l.startswith('Style:')]
    
    unique_lines = []
    for x in lines:
        if x not in unique_lines:
            unique_lines.append(x)
            
    # Group into sentences / paragraphs roughly
    full_text = ' '.join(unique_lines)
    
    with open(clean_path, 'w', encoding='utf-8') as f:
        f.write(full_text)
        
    # Remove vtt to save space
    os.remove(vtt_file)
    print(f"{ch} finished.")

print("All done.")
