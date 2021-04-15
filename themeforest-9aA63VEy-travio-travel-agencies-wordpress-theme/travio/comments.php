<?php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package travio
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<?php
// You can start editing here -- including this comment!
if ( have_comments() ) :
	$comment_close = '';
	if ( ! comments_open() ) :
		$comment_close = 'comment-close';
	endif;
	?>
	<div id="comments-area" class="comment-box <?php echo esc_attr( $comment_close ); ?>">
		<div class="group-title">
			<h2>
				<?php
				$travio_comment_count = get_comments_number();
				if ( '1' === $travio_comment_count ) {
					printf(
						/* translators: 1: title. */
						esc_html__( 'One Comment', 'travio' )
					);
				} else {
					printf( // WPCS: XSS OK.
						/* translators: 1: comment count number, 2: title. */
						esc_html( _nx( '%1$s Comment', '%1$s Comments ', $travio_comment_count, 'comments title', 'travio' ), 'travio' ),
						number_format_i18n( $travio_comment_count )
					);
				}
				?>
			</h2>
		</div>

		<?php
		if ( have_comments() ) :
			the_comments_navigation();
			?>
			<div class="comment-list comments-form-area">
				<?php
				wp_list_comments(
					array(
						'style'      => 'div',
						'callback'   => 'travio_comments',
						'short_ping' => true,
					)
				);
				?>
			</div>
			<?php
			the_comments_navigation();
			// If comments are closed and there are comments, let's leave a little note, shall we?
			if ( ! comments_open() ) :
				?>
				<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'travio' ); ?></p>
				<?php
			endif;
		endif;
		?>
	</div>
	<?php
endif; // Check for have_comments().


if ( comments_open() ) :
	?>

	<div class="comments-form-area">
			<?php
			$user                 = wp_get_current_user();
			$travio_user_identity = $user->display_name;
			$req                  = get_option( 'require_name_email' );
			$aria_req             = $req ? " aria-required='true'" : '';

			$formargs = array(
				'class_form'           => 'form-inner',
				'title_reply_before'   => '<div class="group-title"><h2>',
				'title_reply_after'    => '</h2></div>',
				'title_reply'          => esc_html__( 'Leave a Comment', 'travio' ),
				'title_reply_to'       => esc_html__( 'Leave a Comment to %s', 'travio' ),
				'cancel_reply_link'    => esc_html__( 'Cancel Reply', 'travio' ),
				'label_submit'         => esc_html__( 'Submit now', 'travio' ),
				'comment_notes_before' => '<p class="email-not-publish">' .
					esc_html__( 'Your email address will not be published.', 'travio' ) . ( $req ? '<span class="required">*</span>' : '' ) .
					'</p>',
				'submit_button'        => '<button type="submit" name="%1$s" id="%2$s" class="%3$s theme-btn">%4$s</button>',
				'submit_field'         => '<div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">%1$s %2$s</div></div>',
				'comment_field'        => '<div class="row default-form"><div class="col-lg-12 col-md-12 col-sm-12 form-group"><textarea id="comment" name="comment" placeholder="' . esc_attr__( 'Write Comment *', 'travio' ) . '"  >' .
					'</textarea></div>',
				'must_log_in'          => '<div>' .
					sprintf(
						wp_kses( __( 'You must be <a href="%s">logged in</a> to post a comment.', 'travio' ), array( 'a' => array( 'href' => array() ) ) ),
						wp_login_url( apply_filters( 'the_permalink', get_permalink() ) )
					) . '</div>',
				'logged_in_as'         => '<div class="logged-in-as">' .
					sprintf(
						wp_kses( __( 'Logged in as <a href="%1$s">%2$s</a>. <a href="%3$s" title="%4$s">Log out?</a>', 'travio' ), array( 'a' => array( 'href' => array() ) ) ),
						esc_url( admin_url( 'profile.php' ) ),
						$travio_user_identity,
						wp_logout_url( apply_filters( 'the_permalink', get_permalink() ) ),
						esc_attr__( 'Log out of this account', 'travio' )
					) . '</div>',

				'comment_notes_after'  => '',
				'fields'               => apply_filters(
					'comment_form_default_fields',
					array(
						'author' =>
						'<div class="row clearfix"><div class="col-lg-6 col-md-6 col-sm-12 form-group">'
							. '<input id="author"  name="author" placeholder="' . esc_attr__( 'Your Name *', 'travio' ) . '" type="text" value="' . esc_attr( $commenter['comment_author'] ) .
							'" size="30"' . $aria_req . ' /></div>',
						'email'  =>
						'<div class="col-lg-6 col-md-6 col-sm-12 form-group">'
							. '<input id="email" name="email" type="text"  placeholder="' . esc_attr__( 'Email address *', 'travio' ) . '" value="' . esc_attr( $commenter['comment_author_email'] ) .
							'" size="30"' . $aria_req . ' /></div></div>',
					)
				),
			);
			?>
			<?php
			comment_form( $formargs );
			?>
	</div>
<?php endif; ?>
