<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package travio
 */
get_header();

if ( is_active_sidebar( 'sidebar-1' ) ) :
	$blog_post_list_class = 'col-lg-8';
else :
	$blog_post_list_class = 'col-lg-12';
endif;
	$blog_single_breadcrumb_class  = 'blog-single-breadcrumb-active';
	$blog_single_breadcrumb_switch = travio_get_options( 'blog_single_breadcrumb_switch' );
if ( $blog_single_breadcrumb_switch == 1 ) :
	$blog_single_breadcrumb_class = '';
	endif;
?>
<!-- sidebar-page-container -->
<section class="sidebar-page-container <?php echo esc_attr( $blog_single_breadcrumb_class ); ?>">
	<div class="auto-container">
		<div class="row clearfix">
			<div class="<?php echo esc_attr( $blog_post_list_class ); ?>  col-md-12 col-sm-12 content-side">
				<div class="blog-details-content">
					<?php
					if ( have_posts() ) :
						while ( have_posts() ) :
							the_post();
							get_template_part( 'template-parts/single/content' );
						endwhile;
					endif;
					?>
				</div>
			</div>
			<?php if ( is_active_sidebar( 'sidebar-1' ) ) { ?>
				<div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
					<div class="blog-sidebar default-sidebar ml-20">
					<?php get_sidebar(); ?>
					</div>
				</div>
			<?php } ?>
		</div>
	</div>
</section>
<?php
get_footer();


