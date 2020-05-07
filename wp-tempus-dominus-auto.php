<?php

/**
 * Plugin Name: WP Tempus Dominus Auto
 * Description: Shim between Bootstrap 4.x, JQuery 3.x, WordPress 5.x, and Tempus Dominus
 * Version: 1.0
 * Author: Toby Inkster
 * Author URI: http://toby.ink/
 */

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_script( 'wp-tempus-dominus-auto', plugins_url( '/js/wp-tempus-dominus-auto.js', __FILE__ ), array('jquery'), 100 );
} );

