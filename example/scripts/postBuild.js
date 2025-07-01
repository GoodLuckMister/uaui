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

// Replace all src/href starting with "/_expo/" to "_expo/"
html = html.replace(/(["'=])\/_expo\//g, '$1_expo/');

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Fixed asset paths in', indexFile);
