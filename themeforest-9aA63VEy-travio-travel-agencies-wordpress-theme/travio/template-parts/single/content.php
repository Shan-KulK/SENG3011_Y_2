<?php
/**
 * Template part for displaying posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package travio
 */

$blog_single_social      = travio_get_options( 'blog_single_social' );
$single_post_thumb_class = 'no-single-post-thumb';
if ( has_post_thumbnail() ) :
	$single_post_thumb_class = '';
endif;
$the_title_content    = get_the_title();
$the_title_class_have = 'have-title-post';
if ( $the_title_content != '' ) :
	$the_title_class_have = '';
endif;
?>

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

<div class="news-block-one" <?php echo esc_attr( $the_title_class_have . ' ' . $post_thumb_class . ' ' . $is_sticky_class ); ?>>
	<div class="inner-box">
		<div class="lower-content">
			<div class="category"><?php travio_category_list(); ?></div>
			<h2><?php the_title(); ?></h2>
			<ul class="post-info clearfix">
				<li><?php travio_posted_by(); ?></li>
				<li>-</li>
				<li class="comment"><?php travio_comments_count(); ?></li>
			</ul>
		</div>
		<?php if ( has_post_thumbnail() ) { ?>
		<figure class="image-box">
			<?php the_post_thumbnail(); ?>
			<span class="post-date"><i class="icon-Calendar"></i><?php travio_posted_on(); ?></span>
		</figure>
		<?php } ?>
	</div>
</div>
<div class="text">
	<?php the_content(); ?>
	<?php
	wp_link_pages(
		array(
			'before' => '<div class="page-links">',
			'after'  => '</div>',
		)
	);
	?>
</div>
<?php if ( $blog_single_social ) { ?>
<div class="post-share-option clearfix">
	<div class="text pull-left">
		<h3><?php esc_html_e( 'We Are Social On:', 'travio' ); ?></h3>
	</div>
	<?php do_action( 'travio_blog_social' ); ?>
</div>
<?php } ?>
<?php
// If comments are open or we have at least one comment, load up the comment template.
if ( comments_open() || get_comments_number() ) :
	comments_template();
endif;
