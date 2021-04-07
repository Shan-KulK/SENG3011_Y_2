<?php
class Travio_Act {

	public function __construct() {
		$this->travio_register_action();
	}
	private function travio_register_action() {
		add_action( 'travio_search_popup', array( 'Travio_Int', 'travio_search_popup' ) );
		add_action( 'travio_search_popup_sticky', array( 'Travio_Int', 'travio_search_popup_sticky' ) );
		add_action( 'travio_preloader', array( 'Travio_Int', 'travio_preloader' ) );
		add_action( 'travio_back_to_top', array( 'Travio_Int', 'travio_back_to_top' ) );
		add_action( 'travio_header_logo', array( 'Travio_Int', 'travio_header_logo' ) );
		add_action( 'travio_header_sticky_logo', array( 'Travio_Int', 'travio_header_sticky_logo' ) );
		add_action( 'travio_header_menu', array( 'Travio_Int', 'travio_header_menu' ) );
		add_action( 'travio_mobile_menu', array( 'Travio_Int', 'travio_mobile_menu' ) );
		add_action( 'travio_breadcrumb', array( 'Travio_Int', 'travio_breadcrumb' ) );
		add_action( 'travio_blog_social', array( 'Travio_Int', 'travio_blog_social' ) );
	}
}
$travio_act = new Travio_Act();
