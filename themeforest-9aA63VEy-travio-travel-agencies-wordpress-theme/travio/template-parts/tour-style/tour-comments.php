<?php
global $post;
$post_id  = get_the_ID();
$comments = get_comments(
	array(
		'post_id' => get_the_ID(),
		'order'   => 'ASC',
		'status'  => 'approve',
	)
);


?>
<div class="tour-details__review-score">
	<?php
	if ( $comments ) :
		$travio_total_ratting       = travio_get_average_ratting_name( get_the_ID() );
		$travio_accommodation_width = ( $travio_total_ratting['accommodation'] * 100 ) / 5;
		$travio_comfort_width       = ( $travio_total_ratting['comfort'] * 100 ) / 5;
		$travio_hospitality_width   = ( $travio_total_ratting['hospitality'] * 100 ) / 5;
		$travio_transport_width     = ( $travio_total_ratting['transport'] * 100 ) / 5;
		$travio_food_width          = ( $travio_total_ratting['food'] * 100 ) / 5;
		$travio_review_score        = travio_get_average_rate( get_the_ID() );
		if ( $travio_review_score >= 4 ) :
			$travio_review_score_txt = esc_html__( 'Super', 'travio' );
		elseif ( $travio_review_score >= 3 ) :
			$travio_review_score_txt = esc_html__( 'Avarage', 'travio' );
		elseif ( $travio_review_score >= 2 ) :
			$travio_review_score_txt = esc_html__( 'Poor', 'travio' );
		else :
			$travio_review_score_txt = null;
		endif;
		$travio_total_ratting_avg = travio_get_average_rate_fraction( get_the_ID() );
		?>
<div class="review-box">
  <div class="text">
	<div class="total-rating">
	  <h2><?php echo esc_html( round( $travio_total_ratting_avg, 1 ) ); ?></h2>
	  <span><?php echo esc_html( $travio_review_score_txt ); ?></span>
	</div>
  </div>
  <div class="progress-content">
	<div class="progress-box">
	  <p><?php esc_html_e( 'Accommodation', 'travio' ); ?></p>
	  <div class="bar">
		<div class="bar-inner count-bar counted" data-percent="<?php echo esc_attr( round( $travio_accommodation_width ) ); ?>%" style="width: <?php echo esc_attr( round( $travio_accommodation_width ) ); ?>%;"></div>
		<div class="count-text"><?php echo esc_html( round( $travio_accommodation_width ) ); ?>%</div>
	  </div>
	</div>
	<div class="progress-box">
	  <p><?php esc_html_e( 'Transport', 'travio' ); ?></p>
	  <div class="bar">
		<div class="bar-inner count-bar counted" data-percent="<?php echo esc_attr( round( $travio_transport_width ) ); ?>%" style="width: <?php echo esc_attr( round( $travio_transport_width ) ); ?>%;"></div>
		<div class="count-text"><?php echo esc_html( round( $travio_transport_width ) ); ?>%</div>
	  </div>
	</div>
	<div class="progress-box">
	  <p><?php esc_html_e( 'Comfort', 'travio' ); ?></p>
	  <div class="bar">
		<div class="bar-inner count-bar counted" data-percent="<?php echo esc_attr( round( $travio_comfort_width ) ); ?>%" style="<?php echo esc_attr( round( $travio_comfort_width ) ); ?>%;"></div>
		<div class="count-text"><?php echo esc_html( round( $travio_comfort_width ) ); ?>%</div>
	  </div>
	</div>
	<div class="progress-box">
	  <p><?php esc_html_e( 'Hospitality', 'travio' ); ?></p>
	  <div class="bar">
		<div class="bar-inner count-bar counted" data-percent="<?php echo esc_attr( round( $travio_hospitality_width ) ); ?>%" style="width: <?php echo esc_attr( round( $travio_hospitality_width ) ); ?>%;"></div>
		<div class="count-text"><?php echo esc_html( round( $travio_hospitality_width ) ); ?>%</div>
	  </div>
	</div>
	<div class="progress-box">
	  <p><?php esc_html_e( 'Food', 'travio' ); ?></p>
	  <div class="bar">
		<div class="bar-inner count-bar counted" data-percent="<?php echo esc_attr( round( $travio_food_width ) ); ?>%" style="width: <?php echo esc_attr( round( $travio_food_width ) ); ?>%;"></div>
		<div class="count-text"><?php echo esc_html( round( $travio_food_width ) ); ?>%</div>
	  </div>
	</div>
  </div>
</div>

		<?php
endif;
	?>
<div class="comment-box">
	<div class="tour-details__review-comment">
		<?php

			$comments = get_comments(
				array(
					'post_id'            => get_the_ID(),
					'order'              => 'ASC',
					'status'             => 'approve',
					'include_unapproved' => array( is_user_logged_in() ? get_current_user_id() : wp_get_unapproved_comment_author_email() ),
				)
			);

			foreach ( $comments as $comment ) {
				$total_rate = array();
				?>
		<div class="tour-details__review-comment-single">
			<div class="tour-details__review-comment-top">
				<?php echo get_avatar( $comment, $size = '95' ); ?>
			<h3><?php echo get_comment_author_link(); ?></h3>
			<p>
				<?php
				if ( ! $comment->comment_approved == $comment->comment_agent ) {
					esc_html_e( 'Your comment is awaiting moderation', 'travio' );
				} else {
					comment_time( 'd M Y' );
				}
				?>
			</p>
			</div><!-- /.tour-details__review-comment-top -->
			<div class="tour-details__review-comment-content">
			<h3><?php echo get_comment_meta( $comment->comment_ID, 'review_title', true ); ?></h3>
				<?php comment_text(); ?>
			</div><!-- /.tour-details__review-comment-content -->
			<div class="tour-details__review-form-stars">
			<div class="text">
			<ul class="list clearfix">
				<?php
					$comment_accommodation = (int) get_comment_meta( $comment->comment_ID, 'accommodation', true );
					$comment_comfort       = (int) get_comment_meta( $comment->comment_ID, 'comfort', true );
					$comment_hospitality   = (int) get_comment_meta( $comment->comment_ID, 'hospitality', true );
					$comment_food          = (int) get_comment_meta( $comment->comment_ID, 'food', true );
					$comment_transport     = (int) get_comment_meta( $comment->comment_ID, 'transport', true );
				?>
				<li>
				<h5><?php esc_html_e( 'Accommodation', 'travio' ); ?></h5>
				<p>
					<?php
					if ( $comment_accommodation ) {
						for ( $x = 1; $x <= $comment_accommodation; $x++ ) {
							echo '<i class="fa fa-star active"></i>';
						}
					}
					$inactive_comment_rate = 5 - $comment_accommodation;
					if ( $inactive_comment_rate > 0 ) {
						for ( $x = 1; $x <= $inactive_comment_rate; $x++ ) {
							echo '<i class="fa fa-star "></i>';
						}
					}
					?>
				</p>
				</li>
				<li>
				<h5><?php esc_html_e( 'Comfort', 'travio' ); ?></h5>
				<p>
					<?php
					if ( $comment_comfort ) {
						for ( $x = 1; $x <= $comment_comfort; $x++ ) {
							echo '<i class="fa fa-star active"></i>';
						}
					}
						$inactive_comment_rate = 5 - $comment_comfort;
					if ( $inactive_comment_rate > 0 ) {
						for ( $x = 1; $x <= $inactive_comment_rate; $x++ ) {
							echo '<i class="fa fa-star "></i>';
						}
					}
					?>
				</p>
				</li>
				<li>
				<h5><?php esc_html_e( 'Hospitality', 'travio' ); ?></h5>
				<p>
					<?php
					if ( $comment_hospitality ) {
						for ( $x = 1; $x <= $comment_hospitality; $x++ ) {
							echo '<i class="fa fa-star active"></i>';
						}
					}
						$inactive_comment_rate = 5 - $comment_hospitality;
					if ( $inactive_comment_rate > 0 ) {
						for ( $x = 1; $x <= $inactive_comment_rate; $x++ ) {
							echo '<i class="fa fa-star "></i>';
						}
					}
					?>
				</p>
				</li>
				<li>
				<h5><?php esc_html_e( 'Food', 'travio' ); ?></h5>
				<p>
					<?php
					if ( $comment_food ) {
						for ( $x = 1; $x <= $comment_food; $x++ ) {
							echo '<i class="fa fa-star active"></i>';
						}
					}
						$inactive_comment_rate = 5 - $comment_food;
					if ( $inactive_comment_rate > 0 ) {
						for ( $x = 1; $x <= $inactive_comment_rate; $x++ ) {
							echo '<i class="fa fa-star "></i>';
						}
					}
					?>
				</p>
				</li>
				<li>
				<h5><?php esc_html_e( 'Transport', 'travio' ); ?></h5>
				<p>
					<?php
					if ( $comment_transport ) {
						for ( $x = 1; $x <= $comment_transport; $x++ ) {
							echo '<i class="fa fa-star active"></i>';
						}
					}
						$inactive_comment_rate = 5 - $comment_transport;
					if ( $inactive_comment_rate > 0 ) {
						for ( $x = 1; $x <= $inactive_comment_rate; $x++ ) {
							echo '<i class="fa fa-star "></i>';
						}
					}
					?>
				</p>
				</li>
				</ul>
			</div>
			</div>
		</div>
		<?php } ?>
	</div>



  <?php
	$action_url = get_option( 'siteurl' ) . '/wp-comments-post.php';
	?>
	<form action="<?php echo esc_url( $action_url ); ?>" method="post" id="commentform">
			<div class="tour-details__review-form-stars">
				<div class="text">
					<h2><?php esc_html_e( 'Leave Your Comments', 'travio' ); ?></h2>
					<ul class="list clearfix">
						<li>
							<h5><?php esc_html_e( 'Accommodation', 'travio' ); ?></h5>
							<input type="radio" id="st1" name="accommodation" value="5" />
							<label for="st1"></label>
							<input type="radio" id="st2" name="accommodation" value="4" />
							<label for="st2"></label>
							<input type="radio" id="st3" name="accommodation" value="3" />
							<label for="st3"></label>
							<input type="radio" id="st4" name="accommodation" value="2" />
							<label for="st4"></label>
							<input type="radio" id="st5" name="accommodation" value="1" required />
							<label for="st5"></label>
						</li>
						<li>
						<h5><?php esc_html_e( 'Transport', 'travio' ); ?></h5>
							<input type="radio" name="transport" id="lct1" value="5">
							<label for="lct1"></label>
							<input type="radio" name="transport" id="lct2" value="4">
							<label for="lct2"></label>
							<input type="radio" name="transport" id="lct3" value="3">
							<label for="lct3"></label>
							<input type="radio" name="transport" id="lct4" value="2">
							<label for="lct4"></label>
							<input type="radio" name="transport" id="lct5" value="1" required>
							<label for="lct5"></label>
						</li>
						<li>
							<h5><?php esc_html_e( 'Comfort', 'travio' ); ?></h5>
							<input type="radio" name="comfort" id="cst1" value="5">
							<label for="cst1"></label>
							<input type="radio" name="comfort" id="cst2" value="4">
							<label for="cst2"></label>
							<input type="radio" name="comfort" id="cst3" value="3">
							<label for="cst3"></label>
							<input type="radio" name="comfort" id="cst4" value="2">
							<label for="cst4"></label>
							<input type="radio" name="comfort" id="cst5" value="1" required>
							<label for="cst5"></label>
						</li>
						<li>
							<h5><?php esc_html_e( 'Hospitality', 'travio' ); ?></h5>
							<input type="radio" name="hospitality" id="hst1" value="5">
							<label for="hst1"></label>
							<input type="radio" name="hospitality" id="hst2" value="4">
							<label for="hst2"></label>
							<input type="radio" name="hospitality" id="hst3" value="3">
							<label for="hst3"></label>
							<input type="radio" name="hospitality" id="hst4" value="2">
							<label for="hst4"></label>
							<input type="radio" name="hospitality" id="hst5" value="1" required>
							<label for="hst5"></label>
						</li>
						<li>
							<h5><?php esc_html_e( 'Food', 'travio' ); ?></h5>
							<input type="radio" name="food" id="fdt1" value="5">
							<label for="fdt1"></label>
							<input type="radio" name="food" id="fdt2" value="4">
							<label for="fdt2"></label>
							<input type="radio" name="food" id="fdt3" value="3">
							<label for="fdt3"></label>
							<input type="radio" name="food" id="fdt4" value="2">
							<label for="fdt4"></label>
							<input type="radio" name="food" id="fdt5" value="1" required>
							<label for="fdt5"></label>
					
						</li>
					</ul>
				</div>
			</div>
			<div class="comment-form">
				<div class="row clearfix">
					<div class="col-lg-6 col-md-6 col-sm-12 form-group">
					<input id="author" type="text" name="author" required placeholder="<?php esc_attr_e( 'Your Name', 'travio' ); ?>" required="">
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 form-group">
					<input id="email" required type="email" name="email" placeholder="<?php esc_attr_e( 'Email Address', 'travio' ); ?>">
					</div>
					<div class="col-lg-12 col-md-12 col-sm-12 form-group">
					<input type="text" name="review_title" placeholder="<?php esc_attr_e( 'Review Title', 'travio' ); ?>">
					</div>
					<div class="col-lg-12 col-md-12 col-sm-12 form-group">
					<textarea id="comment" required name="comment" placeholder="<?php esc_attr_e( 'Write Message', 'travio' ); ?>"></textarea>
					</div>
					<div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
					<button name="submit" type="submit" id="submit" class="theme-btn"><?php esc_html_e( 'Submit Now', 'travio' ); ?></button>
					<input type="hidden" name="comment_post_ID" value="<?php echo esc_attr( $post_id ); ?>" id="comment_post_ID">
					<input type="hidden" name="comment_parent" id="comment_parent" value="0">
					</div>
				</div>
			</div>
	</form>
</div>
</div>
