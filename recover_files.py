import glob, json, os, re

logs = glob.glob(r'C:\Users\Windows 10 21H1\.gemini\antigravity\brain\*\.system_generated\logs\transcript_full.jsonl')
found = set()

for log in logs:
    try:
        lines = open(log, 'r', encoding='utf-8').readlines()
        for line in reversed(lines):
            try:
                data = json.loads(line)
                if 'tool_calls' in data:
                    for tc in data['tool_calls']:
                        if 'default_api:write_to_file' in tc.get('name', '') or 'write_to_file' in tc.get('name', ''):
                            args = tc.get('args', {})
                            if isinstance(args, str):
                                try:
                                    args = json.loads(args)
                                except: pass
                            if isinstance(args, dict):
                                path = args.get('TargetFile', '')
                                if 'psychology_ch' in path and path not in found:
                                    content = args.get('CodeContent', '')
                                    if content:
                                        content = content.replace('\\`', '`')
                                        with open(path, 'w', encoding='utf-8') as f:
                                            f.write(content)
                                        found.add(path)
                                        print(f"Recovered {path}")
            except Exception as e:
                pass
    except Exception as e:
        pass

print(f'Recovered {len(found)} files.')
