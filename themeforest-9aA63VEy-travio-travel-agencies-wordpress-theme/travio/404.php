<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package travio
 */

get_header();
?>
<section class="error-section centred">
	<div class="auto-container">
		<div class="inner-box">
			<h1><?php esc_html_e( '404', 'travio' ); ?></h1>
			<h2><?php echo wp_kses_post( 'Oops! That page is not found.', 'travio' ); ?></h2>
			<div class="btn-box">
				<a href="<?php esc_url( home_url( '/' ) ); ?>" class="theme-btn"><?php esc_html_e( 'Go To Home', 'travio' ); ?></a>
			</div>
		</div>
	</div>
</section>
<?php
get_footer();
