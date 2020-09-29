<?php

/**
 * Plugin Name: WP Tempus Dominus Auto
 * Description: Shim between Bootstrap 4.x, JQuery 3.x, WordPress 5.x, and Tempus Dominus
 * Version: 1.0
 * Author: Toby Inkster
 * Author URI: https://toby.ink/
 * License: GPL v3 or later
 * License URL: https://www.gnu.org/licenses/gpl-3.0.en.html
 */

/* wp-tempus-dominus-auto
 * Copyright (c) 2020 Toby Inkster
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_script( 'wp-tempus-dominus-auto', plugins_url( '/js/wp-tempus-dominus-auto.js', __FILE__ ), array('jquery'), 100 );
} );

