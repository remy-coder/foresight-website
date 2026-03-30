<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script> <?php wp_head(); ?>
</head>
<body <?php body_class('bg-[#050b18] text-white'); ?>>
<header class="p-6 flex justify-between items-center">
    <div class="font-bold text-2xl">FORESIGHT</div>
    <nav class="hidden md:flex gap-6">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/impact">Impact</a>
    </nav>
    <a href="/donate" class="bg-orange-500 px-6 py-2 rounded-full font-bold">Donate</a>
</header>