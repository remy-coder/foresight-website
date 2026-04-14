const fs = require('fs');

['src/App.tsx', 'src/App-RemyDP.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');

  content = content.replace(/<footer[\s\S]*?<\/footer>/, (footer) => {
    // 1 & 2. Reduce top/bottom padding
    footer = footer.replace(/pt-\d+\s+pb-\d+\s+md:pt-\d+\s+md:pb-\d+/, 'pt-[40px] pb-[30px] md:pt-[40px] md:pb-[30px]');
    
    // 3. Reduce columns spacing
    footer = footer.replace(/gap-12 md:gap-16/, 'gap-8 md:gap-11');
    footer = footer.replace(/gap-8 md:gap-12/, 'gap-6 md:gap-8');
    
    // 4. Reduce font size of footer links
    footer = footer.replace(/text-sm font-display font-medium/g, 'text-[13px] font-display font-medium');
    
    // 5. Reduce logo size by 20%
    footer = footer.replace(/h-14 md:h-18/g, 'h-11 md:h-14');
    
    // 6. Reduce spacing between buttons by 40%
    footer = footer.replace(/<div className="space-y-4 mb-10">/g, '<div className="space-y-2.5 mb-10">');
    footer = footer.replace(/<div className="space-y-4 mb-8">/g, '<div className="space-y-2.5 mb-8">');

    return footer;
  });

  fs.writeFileSync(file, content, 'utf-8');
  console.log('Processed ' + file);
});
