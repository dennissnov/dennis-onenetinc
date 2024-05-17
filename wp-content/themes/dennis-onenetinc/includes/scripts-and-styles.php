<?php

use WpTailwindCssThemeBoilerplate\AssetResolver;

add_action('wp_enqueue_scripts', function () {

	// Register Google Fonts
	wp_register_style('custom-google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', [], null);

	// registers scripts and stylesheets
	wp_register_style('app', AssetResolver::resolve('css/app.css'), [], false);
	wp_register_script('app', AssetResolver::resolve('js/app.js'), [], false, true);

	// enqueue global assets
	wp_enqueue_style('custom-google-fonts');
	wp_enqueue_script('jquery');
	wp_enqueue_style('app');
	wp_enqueue_script('app');
});
