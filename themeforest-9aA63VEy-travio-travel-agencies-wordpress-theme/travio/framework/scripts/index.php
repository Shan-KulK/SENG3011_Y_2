<?php
class Travio_Scripts {

	public function __construct() {
		 add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}
	public function enqueue_scripts() {
		wp_enqueue_script( 'popper', TRAVIO_JS_URL . 'popper.min.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'bootstrap', TRAVIO_JS_URL . 'bootstrap.min.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'owl', TRAVIO_JS_URL . 'owl.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'wow', TRAVIO_JS_URL . 'wow.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'jquery-fancybox', TRAVIO_JS_URL . 'jquery.fancybox.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'appear', TRAVIO_JS_URL . 'appear.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'scrollbar', TRAVIO_JS_URL . 'scrollbar.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'jquery-nice-select', TRAVIO_JS_URL . 'jquery.nice-select.min.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'product-filter', TRAVIO_JS_URL . 'product-filter.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'nouislider', TRAVIO_JS_URL . 'nouislider.min.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'jquery-ui-datepicker' );
		wp_enqueue_script( 'travio-custom', TRAVIO_JS_URL . 'travio-custom.js', array( 'jquery' ), time(), true );
		wp_enqueue_script( 'travio-scripts', TRAVIO_JS_URL . 'script.js', array( 'jquery' ), time(), true );

		$travio_nonce = wp_create_nonce( 'travio_adv_search' );
		$ajax_var     = array(
			'ajax_url'     => esc_url( admin_url( 'admin-ajax.php' ) ),
			'site_url'     => esc_url( site_url() ),
			'travio_nonce' => $travio_nonce,
		);
		wp_localize_script( 'travio-custom', 'ajax_obj', $ajax_var );

		wp_localize_script(
			'travio-custom',
			'travio_login_object',
			array(
				'ajaxurl'      => admin_url( 'admin-ajax.php' ),
				'redirect_url' => esc_url( home_url( '/' ) ),
			)
		);

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

	}
}
$travio_scripts = new Travio_Scripts();
