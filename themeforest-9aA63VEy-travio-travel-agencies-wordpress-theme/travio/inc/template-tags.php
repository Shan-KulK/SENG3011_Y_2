<?php

/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package travio
 */

if ( ! function_exists( 'travio_posted_on' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function travio_posted_on() {
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time>';
		}

		$time_string = sprintf(
			$time_string,
			esc_attr( get_the_date( DATE_W3C ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( DATE_W3C ) ),
			esc_html( get_the_modified_date() )
		);

		$posted_on = sprintf(
			/* translators: %s: post date. */
			esc_html_x( ' %s', 'post date', 'travio' ),
			$time_string
		);

		printf( $posted_on );
	}
endif;


if ( ! function_exists( 'travio_tag_list' ) ) :

	function travio_tag_list() {
		if ( 'post' === get_post_type() ) {
			$tags_list = get_the_tag_list( ' ', ', ' );
			if ( $tags_list ) {
				printf( $tags_list ); // WPCS: XSS OK.
			}
		}
	}

endif;

if ( ! function_exists( 'travio_category_list' ) ) :
	function travio_category_list() {
		if ( 'post' === get_post_type() ) {
			$category_list = get_the_category_list( ' ' );
			if ( $category_list ) {
				printf( $category_list ); // WPCS: XSS OK.
			}
		}
	}
endif;

if ( ! function_exists( 'travio_posted_by' ) ) :
	/**
	 * Prints HTML with meta information for the current author.
	 */
	function travio_posted_by() {
		$byline = sprintf(
			/* translators: %s: post author. */
			esc_html_x( '%s', 'post author', 'travio' ),
			'<span>' . esc_html__( 'By ', 'travio' ) . '</span><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a>'
		);
		printf( $byline );
	}
endif;
if ( ! function_exists( 'travio_comments_count' ) ) :

	function travio_comments_count() {
		if ( get_comments_number( get_the_ID() ) == 0 ) {
			$comments_count = '<a href="' . esc_url( get_permalink() ) . '" >' . get_comments_number( get_the_ID() ) . ' Comments' . '</a>';
		} elseif ( get_comments_number( get_the_ID() ) > 1 ) {
			$comments_count = '<a href="' . esc_url( get_permalink() ) . '" >' . get_comments_number( get_the_ID() ) . ' Comments' . '</a>';
		} else {
			$comments_count = '<a href="' . esc_url( get_permalink() ) . '#comments" >' . get_comments_number( get_the_ID() ) . ' Comment' . '</a>';
		}
		echo sprintf( esc_html( '%s' ), $comments_count ); // WPCS: XSS OK.
	}

endif;

if ( ! function_exists( 'travio_post_thumbnail' ) ) :
	/**
	 * Displays an optional post thumbnail.
	 *
	 * Wraps the post thumbnail in an anchor element on index views, or a div
	 * element when on single views.
	 */
	function travio_post_thumbnail() {
		if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
			return;
		}
		if ( is_singular() ) :
			?>
			<?php the_post_thumbnail(); ?>
		<?php else : ?>
			<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
				<?php
				the_post_thumbnail(
					'post-thumbnail',
					array(
						'alt' => the_title_attribute(
							array(
								'echo' => false,
							)
						),
					)
				);
				?>
			</a>
			<?php
		endif; // End is_singular().
	}
endif;

if ( ! function_exists( 'travio_comments' ) ) {

	function travio_comments( $comment, $args, $depth ) {
		extract( $args, EXTR_SKIP );
		$args['reply_text'] = esc_html__( 'Reply', 'travio' );
		$class              = '';
		if ( $depth > 1 ) {
			$class = '';
		}
		if ( $depth == 1 ) {
			$child_html_el     = '<ul><li>';
			$child_html_end_el = '</li></ul>';
		}

		if ( $depth >= 2 ) {
			$child_html_el     = '<li>';
			$child_html_end_el = '</li>';
		}
		$comment_class_ping = 'yes-ping';
		if ( $comment->comment_type != 'trackback' && $comment->comment_type != 'pingback' ) :
			$comment_class_ping = '';
		endif;
		?>
		<div class="comment <?php echo esc_attr( $comment_class_ping ); ?>" id="comment-<?php comment_ID(); ?>">
			<?php if ( $comment->comment_type != 'trackback' && $comment->comment_type != 'pingback' ) { ?>
				<figure class="thumb-box">
					<?php print get_avatar( $comment, 165, null, null, array( 'class' => array() ) ); ?>
				</figure>
			<?php } ?>
			<div class="comment-inner">
				<div class="comment-info clearfix">
				<h5><?php echo get_comment_author(); ?> </h5>
				<span class="post-date"><?php echo get_the_date(); ?></span>
				</div>
				<?php comment_text(); ?>
				<?php
				$replyBtn = 'reply-btn';
				echo preg_replace(
					'/comment-reply-link/',
					'comment-reply-link ' . $replyBtn,
					get_comment_reply_link(
						array_merge(
							$args,
							array(
								'reply_text' => '<i class="fas fa-share"></i>' . esc_html__( 'Reply', 'travio' ),
								'depth'      => $depth,
								'max_depth'  => $args['max_depth'],
							)
						)
					)
				);
				?>
			</div>
		<?php
	}
}
