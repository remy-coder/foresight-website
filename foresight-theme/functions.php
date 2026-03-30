<?php
function foresight_enqueue_assets() {
    // This loads your CSS
    wp_enqueue_style('foresight-styles', get_template_directory_uri() . '/style.css');
    
    // Add Google Fonts (Inter)
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
}
add_action('wp_enqueue_scripts', 'foresight_enqueue_assets');