import json
with open(r'C:\Users\Windows 10 21H1\.gemini\antigravity\brain\2672c847-5bbd-4093-8df9-cb68a5b931dd\.system_generated\logs\transcript_full.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        if 'CodeContent' in line:
            print(line[:200])
