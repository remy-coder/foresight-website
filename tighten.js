const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(file, 'utf-8');

// 1. Hero Image Visibility
content = content.replace(/brightness-\[0\.35\]/g, 'brightness-[0.7]');
// The background overlay for Hero -> "from-gray-900/40 via-gray-900/60 to-[#FAFAFA]"
// We'll replace it to be 30% black
content = content.replace(/from-gray-900\/40 via-gray-900\/60/g, 'from-black/40 via-black/30');


// 2. Scaling Down Typography (h1 and h2)
function downscaleHeading(match) {
    let replaced = match
        .replace(/text-8xl/g, 'text-6xl')
        .replace(/text-7xl/g, 'text-6xl')
        .replace(/text-6xl/g, 'text-5xl')
        .replace(/text-5xl/g, 'text-4xl')
        .replace(/text-4xl/g, 'text-3xl')
        .replace(/text-3xl/g, 'text-2xl')
        .replace(/text-2xl/g, 'text-xl');
    return replaced;
}
content = content.replace(/<h[12][^>]*>[\s\S]*?<\/h[12]>/g, downscaleHeading);


// P Tags Body Text
function downscaleParagraph(match) {
    let replaced = match
        .replace(/text-lg|text-xl|text-2xl/g, '')
        .replace(/md:text-xl|md:text-2xl|md:text-lg|sm:text-lg|lg:text-xl/g, '')
        .replace(/  +/g, ' '); // cleanup multiple spaces if any
    
    // ensure text-base exists if it had something removed
    if (match !== replaced && !replaced.includes('text-base') && replaced.includes('className="')) {
        replaced = replaced.replace(/className="/, 'className="text-base ');
    }
    return replaced;
}
content = content.replace(/<p[^>]*>[\s\S]*?<\/p>/g, downscaleParagraph);


// 3. Reduce Scrolling Padding in sections
function downscalePadding(match) {
    let replaced = match
        .replace(/py-48/g, 'py-24')
        .replace(/py-32/g, 'py-20')
        .replace(/py-24/g, 'py-12')
        .replace(/py-20/g, 'py-10')
        .replace(/py-16/g, 'py-8')
        .replace(/py-12/g, 'py-6')
        .replace(/pt-48/g, 'pt-24')
        .replace(/pb-32/g, 'pb-20')
        .replace(/pt-40/g, 'pt-20')
        .replace(/pb-24/g, 'pb-12')
        .replace(/pt-32/g, 'pt-20')
        .replace(/pb-20/g, 'pb-10')
        .replace(/mb-48/g, 'mb-24')
        .replace(/mb-32/g, 'mb-16')
        .replace(/mb-24/g, 'mb-12')
        .replace(/mb-20/g, 'mb-10')
        .replace(/mb-16/g, 'mb-8');
    return replaced;
}

// target classNames inside div/section/header/footer tags where py- or mb- happens
// A simpler way is to just globally replace these ONLY inside classNames.
content = content.replace(/className="[^"]*"/g, (match) => {
    // Only downscale padding/margin vertically if it's large padding
    return downscalePadding(match);
});


// 4. Button Polish
function buttonPolish(match) {
    let replaced = match
        .replace(/px-16/g, 'px-10')
        .replace(/py-8/g, 'py-4')
        .replace(/px-10/g, 'px-8')
        .replace(/py-5/g, 'py-3')
        .replace(/px-8 py-4/g, 'px-6 py-3'); // already somewhat small, but maybe shrink it
    return replaced;
}
content = content.replace(/<button[^>]*>[\s\S]*?<\/button>/g, buttonPolish);
// also handle links styled as buttons
content = content.replace(/<a[^>]*class(?:Name)?="[^"]*(?:bg-accent|hover:bg-white\/5|btn)[^"]*"[^>]*>[\s\S]*?<\/a>/g, buttonPolish);

fs.writeFileSync(file, content, 'utf-8');
console.log('Successfully completed regex replacements.');
