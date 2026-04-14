import fs from 'fs';

['src/App.tsx', 'src/App-RemyDP.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');

  // Explicitly target the problem strings
  content = content.replace(/max-h-\[60vh\]/g, '');
  content = content.replace(/min-h-\[60vh\]/g, 'min-h-screen');

  fs.writeFileSync(file, content, 'utf-8');
});
