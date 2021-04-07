<?php
$post_thumb_class = 'no-post-thumb';
if ( has_post_thumbnail() ) :
	$post_thumb_class = '';
endif;
$is_sticky_class = '';
if ( is_sticky() ) :
	$is_sticky_class = 'sticky-post-class';
endif;
$the_title_content    = get_the_title();
$the_title_class_have = 'have-title-post';
if ( $the_title_content != '' ) :
	$the_title_class_have = '';
endif;

?>

<div class="news-block-one  <?php echo esc_attr( $the_title_class_have . ' ' . $post_thumb_class . ' ' . $is_sticky_class ); ?> ">
	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="inner-box">

			<?php if ( has_post_thumbnail() ) : ?>
				<figure class="image-box">
					<?php travio_post_thumbnail(); ?>
					<span class="post-date"><i class="icon-Calendar"></i><?php travio_posted_on(); ?></span>
				</figure>
			<?php endif; ?>
			<div class="lower-content">
				<?php
				if ( is_sticky() ) {
					echo '<div class="sticky_post_icon " title="' . esc_attr__( 'Sticky Post', 'travio' ) . '"><i class="fas fa-map-pin"></i></div>';
				}
				?>
				<div class="category"><?php travio_category_list(); ?></div>
				<h2><a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a></h2>
				<ul class="post-info clearfix">
					<li><?php travio_posted_by(); ?></li>
					<li> - <?php travio_posted_on(); ?></li>
				</ul>
				<?php if ( ! empty( get_the_excerpt() ) ) : ?>
					<?php
					if ( get_option( 'rss_use_excerpt' ) ) {
						the_excerpt();
					} else {
						the_excerpt();
					}
					?>
				<?php endif; ?>
				<?php
				wp_link_pages(
					array(
						'before' => '<div class="page-links">',
						'after'  => '</div>',
					)
				);
				?>
				<div class="btn-box">
					<a class="theme-btn-two" href="<?php echo esc_url( get_permalink() ); ?>">
						<?php esc_html_e( 'See Details', 'travio' ); ?>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
