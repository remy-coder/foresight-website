const fs = require('fs');

['src/App.tsx', 'src/App-RemyDP.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');

  content = content.replace(/<footer[\s\S]*?<\/footer>/, (footer) => {
    // 1 & 2. Reduce top padding to 40px, bottom padding to 30px
    footer = footer.replace(/pt-\d+\s+pb-\d+\s+md:pt-\d+\s+md:pb-\d+/, 'pt-[40px] pb-[30px] md:pt-[40px] md:pb-[30px]');
    
    // 3. Reduce spacing between footer columns by 30%
    footer = footer.replace(/gap-12 md:gap-16/, 'gap-8 md:gap-11');
    footer = footer.replace(/gap-8 md:gap-12/, 'gap-6 md:gap-8'); // if it was already scaled down
    
    // 4. Reduce font size of footer links to 13px
    footer = footer.replace(/text-sm/g, 'text-[13px]');
    
    // 5. Reduce logo size by 20%
    footer = footer.replace(/h-14 md:h-18/g, 'h-11 md:h-14');
    
    // 6. Reduce spacing between phone, donate, newsletter buttons by 40%
    // They are in a div with space-y-4 mb-10 (or similar).
    // The columns also use space-y-4 for links, but reducing link spacing might also look better and is often paired.
    // Wait, the user specifically said: "Reduce spacing between the phone, donate and newsletter buttons in footer by 40%".
    // Let's target only that div. We do:
    footer = footer.replace(/<div className="space-y-4 mb-10">/, '<div className="space-y-2.5 mb-10">');
    // If it's a different mb:
    footer = footer.replace(/<div className="space-y-4([^"]*)">/g, (m, g1) => {
      // If g1 includes mb-10 or just in general is the buttons wrapper:
      // The buttons wrapper is right above the <div className="flex gap-4"> for social icons
      return \`<div className="space-y-2.5\${g1}">\`;
    });

    return footer;
  });

  fs.writeFileSync(file, content, 'utf-8');
});
