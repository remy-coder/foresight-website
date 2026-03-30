<?php get_header(); ?>
<div class="p-20 text-center">
    <?php if (have_posts()) : while (have_posts()) : the_post(); the_content(); endwhile; endif; ?>
</div>
<?php get_footer(); ?>