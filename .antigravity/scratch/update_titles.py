import os
import re

files = [
    'src/pages/planos/brasiliaprev.jsx',
    'src/pages/planos/brasiliaprev-2025.jsx',
    'src/pages/planos/pga.jsx',
    'src/pages/planos/regiusprev.jsx',
    'src/pages/planos/cv-03.jsx',
    'src/pages/planos/bd-01.jsx',
    'src/pages/planos/cd-05.jsx',
    'src/pages/planos/cd-metro.jsx',
    'src/pages/planos/cd-02.jsx'
]

pattern = re.compile(r'Conhe[çc][aã] os planos da (\s*<span[^>]*>)Previd[eê]ncia BRB(</span>)', re.IGNORECASE)
replacement = r'Conheça os Planos da \1Previdência BRB\2'

repo_root = '/Users/jeancarlo/www/rai_brb'

for file_path in files:
    full_path = os.path.join(repo_root, file_path)
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = pattern.sub(replacement, content)
        
        if new_content != content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_path}")
        else:
            print(f"No changes in {file_path}")
    else:
        print(f"File not found: {file_path}")
