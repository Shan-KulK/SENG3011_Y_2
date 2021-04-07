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


$tour_details_banner = get_post_meta( get_the_ID(), 'travio_metabox_tour_details_banner', true );

if ( $tour_details_banner ) {
	$image_url = wp_get_attachment_image_url( $tour_details_banner, 'full' );
} else {
	$image_url = get_the_post_thumbnail_url( get_the_ID(), 'full' );
}
$package_price       = get_post_meta( get_the_ID(), 'travio_metabox_package_price', true );
$tour_package_member = get_post_meta( get_the_ID(), 'travio_metabox_tour_package_member', true );
?>

<!-- Page Title -->
<section class="page-title style-three" style="background-image: url(<?php echo esc_url( $image_url ); ?>);">
	<div class="auto-container">
		<div class="inner-box">
			<div class="rating">
				<span>
				<?php
				$travio_comments = get_comments(
					array(
						'post_id' => get_the_ID(),
						'status'  => 'approve',
					)
				);
				if ( ! empty( $travio_comments ) ) {
					$travio_count_comments = count( $travio_comments );
					$travio_average        = travio_get_average_rate( get_the_ID() );
					if ( $travio_average ) {
						for ( $x = 1; $x <= $travio_average; $x++ ) {
							echo '<i class="fas fa-star"></i>';
						}
					}
					$inactive_comment_rate = 5 - $travio_average;
					if ( $inactive_comment_rate > 0 ) {
						for ( $x = 1; $x <= $inactive_comment_rate; $x++ ) {
							echo '<i class="fas fa-star inactive"></i>';
						}
					}
					if ( $travio_count_comments != 1 ) {
						echo ' ' . esc_html( $travio_count_comments ) . esc_html__( ' Reviews', 'travio' );
					} else {
						echo ' ' . esc_html( $travio_count_comments ) . esc_html__( ' Review', 'travio' );
					}
				}
				?>
				</span>
			</div>
			<h2><?php the_title(); ?></h2>
			<h3>$<?php echo esc_html( $package_price ); ?><span> / <?php echo esc_html( $tour_package_member ); ?></span></h3>
		</div>
	</div>
</section>
<!-- End Page Title -->

<!-- tour-details -->
<section class="tour-details">
	<div class="auto-container">
		<div class="row clearfix">
			<div class="col-lg-8 col-md-12 col-sm-12 content-side">
				<div class="tour-details-content">
					<?php the_content(); ?>
					<?php get_template_part( 'template-parts/tour-style/tour', 'comments' ); ?>
				</div>
			</div>
			<?php if ( is_active_sidebar( 'sidebar-3' ) ) { ?>
			<div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
				<div class="default-sidebar tour-sidebar ml-20">
				<?php dynamic_sidebar( 'sidebar-3' ); ?>
				</div>
			</div>
			<?php } ?>
		</div>
	</div>
</section>
<!-- tour-details end -->

<?php
get_footer();
