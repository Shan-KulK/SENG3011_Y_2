<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package travio
 */
	$preloader_on_off = travio_get_options( 'preloader_on_off' );
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<?php wp_head(); ?>
</head>

<!-- page wrapper -->

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div class="boxed_wrapper">
	<?php
		do_action( 'travio_preloader' );
		get_template_part( 'components/header/header' );
		do_action( 'travio_mobile_menu' );
		do_action( 'travio_breadcrumb' );
	?>
