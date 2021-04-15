<?php
class Travio_Style {
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_style' ) );
	}
	public function enqueue_style() {
		wp_enqueue_style( 'font-awesome-all', TRAVIO_CSS_URL . 'font-awesome-all.css', false, '1' );
		wp_enqueue_style( 'flaticon', TRAVIO_CSS_URL . 'flaticon.css', false, '1' );
		wp_enqueue_style( 'owl', TRAVIO_CSS_URL . 'owl.css', false, '1' );
		wp_enqueue_style( 'bootstrap', TRAVIO_CSS_URL . 'bootstrap.css', false, time() );
		wp_enqueue_style( 'jquery-fancybox', TRAVIO_CSS_URL . 'jquery.fancybox.min.css', false, '1' );
		wp_enqueue_style( 'animate', TRAVIO_CSS_URL . 'animate.css', false, '1' );
		wp_enqueue_style( 'nice-select', TRAVIO_CSS_URL . 'nice-select.css', false, time() );
		wp_enqueue_style( 'jquery-ui', TRAVIO_CSS_URL . 'jquery-ui.css', false, time() );
		wp_enqueue_style( 'nouislider', TRAVIO_CSS_URL . 'nouislider.min.css', false, time() );
		wp_enqueue_style( 'nouislider-pips', TRAVIO_CSS_URL . 'nouislider.pips.css', false, time() );
		wp_enqueue_style( 'blog-page', TRAVIO_CSS_URL . 'blog-page.css', false, time() );
		wp_enqueue_style( 'travio-color', TRAVIO_CSS_URL . 'color.css', false, time() );
		wp_enqueue_style( 'travio-style', get_stylesheet_uri(), null, time() );
		wp_enqueue_style( 'travio-theme-style', TRAVIO_CSS_URL . 'theme-style.css', false, time() );
		wp_enqueue_style( 'travio-responsive', TRAVIO_CSS_URL . 'responsive.css', false, time() );

		if ( function_exists( 'travio_daynamic_styles' ) ) {
			wp_add_inline_style( 'travio-style', travio_daynamic_styles() );
		}
	}
}
$travio_style = new Travio_Style();

function travio_custom_css() {
	$travio_custom_inline_style = '';

	if ( function_exists( 'travio_get_custom_styles' ) ) {
		$travio_custom_inline_style = travio_get_custom_styles();
	}

	wp_add_inline_style( 'travio-style', $travio_custom_inline_style );
}
add_action( 'wp_enqueue_scripts', 'travio_custom_css', 20 );

