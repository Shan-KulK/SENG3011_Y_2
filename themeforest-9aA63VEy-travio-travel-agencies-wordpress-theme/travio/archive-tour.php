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

<!-- tours-page-section -->
<section class="tours-page-section">
	<div class="auto-container">
		<div class="row clearfix">
			<div class="col-lg-8 col-md-12 col-sm-12 content-side">
				<?php if ( ! is_search() ) { ?>
				<div class="item-shorting clearfix">
					<div class="left-column pull-left">
						<h3><?php esc_html_e( 'Showing 1-6 of 20 Results', 'travio' ); ?></h3>
					</div>
					<div class="right-column pull-right clearfix">
						<div class="menu-box">
							<button class="list-view on"><i class="icon-List"></i></button>
							<button class="grid-view"><i class="icon-Grid"></i></button>
						</div>
					</div>
				</div>
				<?php } ?>
				<div class="wrapper list">
					<div class="tour-grid-content">
						<div class="row clearfix">
							<?php
							if ( have_posts() ) :
								while ( have_posts() ) :
									the_post();
									get_template_part( 'template-parts/tour-style/archive', 'grid' );
								endwhile;
							else :
								get_template_part( 'template-parts/content', 'none' );
							endif;
							?>
						</div>
					</div>
					<div class="tour-list-content list-item" id="tour_search_loop_wapper">
						<?php
						if ( have_posts() ) :
							while ( have_posts() ) :
								the_post();
								get_template_part( 'template-parts/tour-style/archive', 'list' );
							endwhile;
						else :
							get_template_part( 'template-parts/content', 'none' );
						endif;
						?>
					</div>
				</div>
				<?php
				$pagination_blog = get_the_posts_pagination();
				if ( $pagination_blog ) :
					?>
					<div class="pagination-wrapper ">
					<?php
						the_posts_pagination(
							array(
								'mid_size'  => 2,
								'prev_text' => '<i class="icon-Left-Arrow"></i>',
								'next_text' => '<i class="icon-Right-Arrow"></i>',
							)
						);
					?>
					</div>
				<?php endif; ?>
			</div>
			<?php if ( is_active_sidebar( 'sidebar-2' ) ) { ?>
			<div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
				<div class="default-sidebar tour-sidebar ml-20">
					<?php dynamic_sidebar( 'sidebar-2' ); ?>
				</div>
			</div>
			<?php } ?>
		</div>
	</div>
</section>
<!-- tours-page-section end -->
<?php
get_footer();
