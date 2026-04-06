import os
import glob

files = glob.glob('frontend/src/**/*.jsx', recursive=True) + glob.glob('frontend/src/**/*.js', recursive=True)
for file in files:
    with open(file, 'r') as f:
        content = f.read()
    if 'http://127.0.0.1:5001' in content:
        content = content.replace('http://127.0.0.1:5001', '')
        with open(file, 'w') as f:
            f.write(content)
        print(f"Updated {file}")
