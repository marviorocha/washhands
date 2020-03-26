<?php
require_once(ABSPATH.'wp-load.php');

global $wpdb;
global $post;
/*
Loading css style
*/



function player_script() {

    //  wp_enqueue_style( 'materialize-icon',  plugins_url('station-pro') . '/lib/player/css/podcast.min.css');
 
 }

add_action('wp_print_styles', 'player_script');
 
 
?>
