const fs = require('fs');
const path = require('path');

// Adjust the folder if your output is not 'dist'
const buildDir = path.join(__dirname, '..', 'dist');
const indexFile = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexFile)) {
  console.error('index.html not found:', indexFile);
  process.exit(1);
}

let html = fs.readFileSync(indexFile, 'utf8');

html = html.replace(/(src|href)=["']\/([^"']+)["']/g, '$1="$2"');

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Fixed asset paths in', indexFile);
