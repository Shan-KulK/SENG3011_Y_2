<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package travio
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param  array $classes Classes for the body element.
 * @return array
 */
function travio_body_classes( $classes ) {

	$theme_base_css       = travio_get_options( 'theme_base_css' );
	$theme_base_css_class = 'base-theme';
	if ( $theme_base_css == 1 ) :
		$theme_base_css_class = '';
	endif;

	$classes[] = $theme_base_css_class;

	return $classes;
}
add_filter( 'body_class', 'travio_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function travio_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'travio_pingback_header' );
/**
 * Add kses wp.
 */
function travio_kses_allowed_html( $travio_tags, $travio_context ) {
	switch ( $travio_context ) {
		case 'travio_kses':
			$travio_tags = array(
				'div'    => array(
					'class' => array(),
				),
				'ul'     => array(
					'class' => array(),
				),
				'li'     => array(),
				'span'   => array(
					'class' => array(),
				),
				'a'      => array(
					'href'  => array(),
					'class' => array(),
				),
				'i'      => array(
					'class' => array(),
				),
				'p'      => array(),
				'em'     => array(),
				'br'     => array(),
				'strong' => array(),
				'h1'     => array(),
				'h2'     => array(),
				'h3'     => array(),
				'h4'     => array(),
				'h5'     => array(),
				'h6'     => array(),
				'del'    => array(),
				'ins'    => array(),
			);
			return $travio_tags;
		case 'travio_img':
			$travio_tags = array(
				'img' => array(
					'class'  => array(),
					'height' => array(),
					'width'  => array(),
					'src'    => array(),
					'alt'    => array(),
				),
			);
			return $travio_tags;
		default:
			return $travio_tags;

	}
}

add_filter( 'wp_kses_allowed_html', 'travio_kses_allowed_html', 10, 2 );
