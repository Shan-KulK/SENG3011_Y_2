<?php
$post_thumb_class = 'no-post-thumb';
if ( has_post_thumbnail() ) :
	$post_thumb_class = '';
endif;
$is_sticky_class = '';
if ( is_sticky() ) :
	$is_sticky_class = 'sticky_post_class';
endif;
$blog_grid_date = travio_get_options( 'blog_grid_date' );
?>
<div class="col-lg-6 col-md-6 col-sm-12 news-block">
	<div class="news-block-one">
		<div class="inner-box">
			<figure class="image-box">
				<?php the_post_thumbnail( 'travio-blog-grid' ); ?>
				<span class="post-date"><i class="icon-Calendar"></i><?php travio_posted_on(); ?></span>
			</figure>
			<div class="lower-content">
				<div class="category"><?php travio_category_list(); ?></div>
				<h3><a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a></h3>
				<ul class="post-info clearfix">
					<li><?php travio_posted_by(); ?></li>
					<li> - <?php travio_posted_on(); ?></li>
				</ul>
				<p>
					<?php
					$content = substr( get_the_excerpt(), 0, 60 );
					echo esc_html( $content . '.' );
					?>
				</p>
				<div class="btn-box"><a class="theme-btn-two" href= "<?php echo esc_url( get_permalink() ); ?>"><?php esc_html_e( 'See Details', 'travio' ); ?></a></div>
			</div>
		</div>
	</div>
</div>
