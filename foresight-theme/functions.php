<?php
function foresight_scripts()
{
    // Loads your Tailwind/Antigravity CSS
    wp_enqueue_style('foresight-main-style', get_template_directory_uri() . '/main.css');

    // Loads Framer Motion (via CDN since it's now a PHP site)
    wp_enqueue_script('framer-motion', 'https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'foresight_scripts');
?>