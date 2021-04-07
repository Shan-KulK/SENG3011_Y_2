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


<section class="destination-details">
	<div class="auto-container">
		<div class="row clearfix">
			<div class="col-lg-8 col-md-12 col-sm-12 content-side">
				<div class="destination-details-content blog-details-content">
				<?php
				the_content();
				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
				?>
				</div>
			</div>
			<?php if ( is_active_sidebar( 'sidebar-4' ) ) { ?>
			<div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
				<div class="default-sidebar destination-sidebar ml-20">
				<?php dynamic_sidebar( 'sidebar-4' ); ?>
				</div>
			</div>
			<?php } ?>
		</div>
	</div>
</section>
<!-- tour-details end -->

<?php
get_footer();



