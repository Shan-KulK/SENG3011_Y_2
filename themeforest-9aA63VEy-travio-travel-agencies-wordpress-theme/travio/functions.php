<?php
/**
 * travio functions and definitions [travio]
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package travio  TRAVIO_THEME_URI TRAVIO
 */
defined( 'TRAVIO_THEME_URI' ) or define( 'TRAVIO_THEME_URI', get_template_directory_uri() );
define( 'TRAVIO_THEME_DRI', get_template_directory() );
define( 'TRAVIO_IMG_URL', TRAVIO_THEME_URI . '/assets/images/' );
define( 'TRAVIO_CSS_URL', TRAVIO_THEME_URI . '/assets/css/' );
define( 'TRAVIO_JS_URL', TRAVIO_THEME_URI . '/assets/js/' );
define( 'TRAVIO_FRAMEWORK_DRI', TRAVIO_THEME_DRI . '/framework/' );

require_once TRAVIO_FRAMEWORK_DRI . 'styles/index.php';
require_once TRAVIO_FRAMEWORK_DRI . 'styles/daynamic-style.php';
require_once TRAVIO_FRAMEWORK_DRI . 'scripts/index.php';
require_once TRAVIO_FRAMEWORK_DRI . 'redux/redux-config.php';
require_once TRAVIO_FRAMEWORK_DRI . 'plugin-list.php';
require_once TRAVIO_FRAMEWORK_DRI . 'tgm/class-tgm-plugin-activation.php';
require_once TRAVIO_FRAMEWORK_DRI . 'tgm/config-tgm.php';
require_once TRAVIO_FRAMEWORK_DRI . 'dashboard/class-travio-dashboard.php';
require_once TRAVIO_FRAMEWORK_DRI . 'classes/travio-int.php';
require_once TRAVIO_FRAMEWORK_DRI . 'classes/travio-act.php';



/**
 * Theme option compatibility.
 */
if ( ! function_exists( 'travio_get_options' ) ) :
	function travio_get_options( $key ) {
		global $travio_options;
		$opt_pref = 'travio_';
		if ( empty( $travio_options ) ) {
			$travio_options = get_option( $opt_pref . 'options' );
		}
		$index = $opt_pref . $key;
		if ( ! isset( $travio_options[ $index ] ) ) {
			return false;
		}
		return $travio_options[ $index ];
	}
endif;

if ( ! function_exists( 'travio_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function travio_setup() {
		/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on love us, use a find and replace
		* to change 'travio' to the name of your theme in all the template files.
		*/
		load_theme_textdomain( 'travio', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
		add_theme_support( 'title-tag' );

		/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary', 'travio' ),
			)
		);

		function travio_upload_mimes( $existing_mimes ) {
			$existing_mimes['webp'] = 'image/webp';
			return $existing_mimes;
		}
		add_filter( 'mime_types', 'travio_upload_mimes' );

		/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'travio_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		add_image_size( 'travio-recent-post-size', 90, 90, true );
		add_image_size( 'travio-blog-grid', 370, 270, true );
		add_image_size( 'travio-tour-list', 190, 227, true );
	}
endif;
add_action( 'after_setup_theme', 'travio_setup' );
/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function travio_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'travio_content_width', 640 );
}
add_action( 'after_setup_theme', 'travio_content_width', 0 );
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function travio_widgets_init() {

	register_sidebar(
		array(
			'name'          => esc_html__( 'Blog Sidebar', 'travio' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'travio' ),
			'before_widget' => '<div id="%1$s" class="sidebar-widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<div class="widget-title"><h3>',
			'after_title'   => '</h3></div>',
		)
	);

	register_sidebar(
		array(
			'name'          => esc_html__( 'Tour Sidebar', 'travio' ),
			'id'            => 'sidebar-2',
			'description'   => esc_html__( 'Add widgets here.', 'travio' ),
			'before_widget' => '<div id="%1$s" class="%2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<div class="widget-title"><h3>',
			'after_title'   => '</h3></div>',
		)
	);

	register_sidebar(
		array(
			'name'          => esc_html__( 'Tour Details Sidebar', 'travio' ),
			'id'            => 'sidebar-3',
			'description'   => esc_html__( 'Add widgets here.', 'travio' ),
			'before_widget' => '<div id="%1$s" class="%2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<div class="widget-title"><h3>',
			'after_title'   => '</h3></div>',
		)
	);

	register_sidebar(
		array(
			'name'          => esc_html__( 'Destinations Sidebar', 'travio' ),
			'id'            => 'sidebar-4',
			'description'   => esc_html__( 'Add widgets here.', 'travio' ),
			'before_widget' => '<div id="%1$s" class="%2$s sidebar-widget">',
			'after_widget'  => '</div>',
			'before_title'  => '<div class="widget-title"><h3>',
			'after_title'   => '</h3></div>',
		)
	);

}
add_action( 'widgets_init', 'travio_widgets_init' );

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

require get_template_directory() . '/inc/helpers.php';

/**
 * google font compatibility.
 */
function travio_google_font() {
	global $travio_options;
	$enable_google_fonts = isset( $travio_options['enable_google_fonts'] ) && $travio_options['enable_google_fonts'] == 0;

	$protocol   = is_ssl() ? 'https' : 'http';
	$display    = 'swap';
	$variants   = ':wght@400;500;600;700;800;900';
	$query_args = array(
		'family'  => 'Playfair+Display|Work+Sans' . $variants,
		'family'  => 'Work+Sans' . $variants . '&family=Playfair+Display' . $variants,
		'display' => $display,
	);
	$font_url   = add_query_arg( $query_args, $protocol . '://fonts.googleapis.com/css2' );
	if ( $enable_google_fonts != 1 ) {
		wp_enqueue_style( 'travio-google-fonts', $font_url, array(), null );
	}
}
add_action( 'init', 'travio_google_font' );


function travio_elementor_library() {
	$pageslist = get_posts(
		array(
			'post_type'      => 'elementor_library',
			'posts_per_page' => -1,
		)
	);
	$pagearray = array();
	if ( ! empty( $pageslist ) ) {
		foreach ( $pageslist as $page ) {
			$pagearray[ $page->ID ] = $page->post_title;
		}
	}
	return $pagearray;
}

add_filter( 'comment_form_fields', 'travio_custom_field' );
function travio_custom_field( $fields ) {
	$comment_field = $fields['comment'];
	unset( $fields['comment'] );
	unset( $fields['cookies'] );
	$fields['comment'] = $comment_field;
	return $fields;
}

function travio_add_query_vars_filter( $vars ) {
	 $vars[] = 'blog_style';
	return $vars;
}
add_filter( 'query_vars', 'travio_add_query_vars_filter' );

function travio_add_query_vars_filter_header( $vars ) {
	$vars[] = 'header_type';
	return $vars;
}
add_filter( 'query_vars', 'travio_add_query_vars_filter_header' );




