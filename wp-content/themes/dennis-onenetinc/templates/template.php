<?php
/*
 * Template Name: Dennis Main Template
 * Template Post Type: post, page, whatever
 */
get_header();

?>
<?php while (have_posts()) : the_post(); ?>
    <?php get_template_part('templates/components/section-1') ?>
    <?php get_template_part('templates/components/section-2') ?>
<?php 
endwhile; // end of the loop. 
get_footer();
?>