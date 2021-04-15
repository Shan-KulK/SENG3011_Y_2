<?php
add_filter( 'template_include', 'template_include' );
function template_include( $template ) {
	global $post;
	if ( is_post_type_archive( 'tour' ) ) {
		$theme_files     = array( 'archive-tour.php' );
		$exists_in_theme = locate_template( $theme_files, false );
		if ( $exists_in_theme != '' ) {
			return $exists_in_theme;
		}
	}
	return $template;
}

add_action( 'comment_post', 'travio_comment_ratings', 10, 3 );

/**
 * Add Comment Rate field.
 */

function travio_comment_ratings( $comment_id, $comment_approved, $commentdata ) {

	$accommodation = sanitize_text_field( $_POST['accommodation'] );
	$comfort       = sanitize_text_field( $_POST['comfort'] );
	$hospitality   = sanitize_text_field( $_POST['hospitality'] );
	$food          = sanitize_text_field( $_POST['food'] );
	$transport     = sanitize_text_field( $_POST['transport'] );

	add_comment_meta( $comment_id, 'accommodation', $accommodation );
	add_comment_meta( $comment_id, 'comfort', $comfort );
	add_comment_meta( $comment_id, 'hospitality', $hospitality );
	add_comment_meta( $comment_id, 'food', $food );
	add_comment_meta( $comment_id, 'transport', $transport );

	if ( ( isset( $_POST['review_title'] ) ) && ( $_POST['review_title'] != '' ) ) {
		add_comment_meta( $comment_id, 'review_title', $_POST['review_title'] );
	}

	$comment_post_id = $commentdata['comment_post_ID'];

	$total_rate = (int) $accommodation + (int) $comfort + (int) $hospitality + (int) $food + (int) $transport;
	$average    = ( $total_rate * 100 ) / 6;
	$average    = round( $average );

	$aservice = get_comment_meta( $comment_id, 'accommodation', true );
	if ( $aservice ) {
		$average = travio_get_average_rate( $comment_post_id );
		update_post_meta( $comment_post_id, 'travio_avarage_rate', $average );
	} else {
		update_post_meta( $comment_post_id, 'travio_avarage_rate', $average );
	}
}


function travio_get_average_ratting_name( $post_id ) {

	$travio_accommodation_array = array();
	$travio_comfort_array       = array();
	$travio_hospitality_array   = array();
	$travio_food_array          = array();
	$travio_transport_array     = array();

	$travio_comments = get_comments( array( 'post_id' => $post_id ) );

	if ( count( $travio_comments ) > 0 ) {

		foreach ( $travio_comments as $travio_comment ) {

			$travio_accommodation = get_comment_meta( $travio_comment->comment_ID, 'accommodation', true );
			$travio_comfort       = get_comment_meta( $travio_comment->comment_ID, 'comfort', true );
			$travio_hospitality   = get_comment_meta( $travio_comment->comment_ID, 'hospitality', true );
			$travio_food          = get_comment_meta( $travio_comment->comment_ID, 'food', true );
			$travio_transport     = get_comment_meta( $travio_comment->comment_ID, 'transport', true );

			$travio_accommodation_array[] = (int) $travio_accommodation;
			$travio_comfort_array[]       = (int) $travio_comfort;
			$travio_hospitality_array[]   = (int) $travio_hospitality;
			$travio_food_array[]          = (int) $travio_food;
			$travio_transport_array[]     = (int) $travio_transport;

		}

		$total_average['accommodation'] = array_sum( $travio_accommodation_array ) / count( $travio_comments );
		$total_average['comfort']       = array_sum( $travio_comfort_array ) / count( $travio_comments );
		$total_average['hospitality']   = array_sum( $travio_hospitality_array ) / count( $travio_comments );
		$total_average['food']          = array_sum( $travio_food_array ) / count( $travio_comments );
		$total_average['transport']     = array_sum( $travio_transport_array ) / count( $travio_comments );

		return $total_average;
	} else {
		return false;
	}
}

function travio_avg_ratting() {
	$travio_review_score_txt = '';
	$travio_review_score     = travio_get_average_rate( get_the_ID() );
	if ( $travio_review_score ) {
		if ( $travio_review_score >= 4 ) :
			$travio_review_score_txt = esc_html__( 'Super', 'travio' );
	  elseif ( $travio_review_score >= 3 ) :
		  $travio_review_score_txt = esc_html__( 'Avarage', 'travio' );
	  elseif ( $travio_review_score >= 2 ) :
		  $travio_review_score_txt = esc_html__( 'Poor', 'travio' );
	  else :
		  $travio_review_score_txt = esc_html__( 'Super', 'travio' );
	  endif;
	}
	?>
	<?php if ( $travio_review_score ) { ?>
<div class="tour-one__stars">
  <i class="fa fa-star"></i>
		<?php echo esc_html( round( $travio_review_score, 1 ) . ' ' . $travio_review_score_txt ); ?>
</div><!-- /.tour-one__stars -->
<?php } else { ?>
<div class="tour-one__stars">
  <i class="fa fa-star inactive"></i>
</div><!-- /.tour-one__stars -->
		<?php
}
}

function travio_get_save_button() {
	?>
<a href="<?php echo esc_url( '#' ); ?>"><i class="fa fa-heart"></i></a>
	<?php
}

function travio_get_average_rate( $post_id ) {

	$travio_comments = get_comments( array( 'post_id' => $post_id ) );

	if ( ! empty( $travio_comments ) ) {

		$tropo_average = array();
		foreach ( $travio_comments as $comment ) {

			$travio_accommodation = get_comment_meta( $comment->comment_ID, 'accommodation', true );
			$tirpo_comfort        = get_comment_meta( $comment->comment_ID, 'comfort', true );
			$tirpo_hospitality    = get_comment_meta( $comment->comment_ID, 'hospitality', true );
			$tirpo_food           = get_comment_meta( $comment->comment_ID, 'food', true );
			$tirpo_transport      = get_comment_meta( $comment->comment_ID, 'transport', true );

			$travio_total_rate[] = (int) $travio_accommodation;
			$travio_total_rate[] = (int) $tirpo_comfort;
			$travio_total_rate[] = (int) $tirpo_hospitality;
			$travio_total_rate[] = (int) $tirpo_food;
			$travio_total_rate[] = (int) $tirpo_transport;
			$tropo_average[]     = array_sum( $travio_total_rate ) / count( $travio_total_rate );
		}
		$travio_total_average = array_sum( $tropo_average ) / count( $travio_comments );
		return round( $travio_total_average );
	} else {
		return false;
	}
}


function travio_get_average_rate_fraction( $post_id ) {

	$travio_comments = get_comments( array( 'post_id' => $post_id ) );

	if ( ! empty( $travio_comments ) ) {

		$tropo_average = array();
		foreach ( $travio_comments as $comment ) {

			$travio_accommodation = get_comment_meta( $comment->comment_ID, 'accommodation', true );
			$tirpo_comfort        = get_comment_meta( $comment->comment_ID, 'comfort', true );
			$tirpo_hospitality    = get_comment_meta( $comment->comment_ID, 'hospitality', true );
			$tirpo_food           = get_comment_meta( $comment->comment_ID, 'food', true );
			$tirpo_transport      = get_comment_meta( $comment->comment_ID, 'transport', true );

			$travio_total_rate[] = (int) $travio_accommodation;
			$travio_total_rate[] = (int) $tirpo_comfort;
			$travio_total_rate[] = (int) $tirpo_hospitality;
			$travio_total_rate[] = (int) $tirpo_food;
			$travio_total_rate[] = (int) $tirpo_transport;

			$tropo_average[] = array_sum( $travio_total_rate ) / count( $travio_total_rate );
		}
		$travio_total_average = array_sum( $tropo_average ) / count( $travio_comments );
		return $travio_total_average;
	} else {
		return false;
	}
}


add_action( 'pre_get_posts', 'travio_advanced_search_query' );
function travio_advanced_search_query( $query ) {

	if ( isset( $_REQUEST['advance-search'] ) && $_REQUEST['advance-search'] == 'tour' ) {

		if ( ! is_admin() && $query->is_main_query() ) {
			$query->set( 'post_type', 'tour' );
			$tax_arg = array();
			if ( isset( $_GET['when'] ) && ! empty( $_GET['when'] ) ) {
				$tax_arg[] = array(
					'taxonomy' => 'month',
					'terms'    => array( $_GET['when'] ),
					'field'    => 'slug',
				);
			}
			if ( isset( $_GET['tourtype'] ) && ! empty( $_GET['tourtype'] ) ) {
				$tax_arg[] = array(
					'taxonomy' => 'type',
					'terms'    => array( $_GET['tourtype'] ),
					'field'    => 'slug',
				);
			}
			if ( ! empty( $tax_arg ) ) {
				$tax_query = array(
					'relation' => 'AND',
					$tax_arg,
				);
				$query->set( 'tax_query', $tax_query );
			}
		}
	}
}

add_action( 'wp_ajax_travio_adv_search', 'travio_ajax_adv_search' );
add_action( 'wp_ajax_nopriv_travio_adv_search', 'travio_ajax_adv_search' );

function travio_ajax_adv_search() {
	if ( ! wp_verify_nonce( $_REQUEST['travio_nonce'], 'travio_adv_search' ) ) {
		wp_send_json_error(
			array(
				'message' => esc_html__( 'Nonce verification failed!', 'travio' ),
			)
		);
	}

	$tour_location = $_POST['tour_location'] != '' ? sanitize_text_field( $_POST['tour_location'] ) : '';
	$paged         = $_POST['paged'] != '' ? sanitize_text_field( $_POST['paged'] ) : 1;
	// Start the Query
	$query_args = array(
		'post_type'   => 'tour', // your CPT
		'post_status' => 'publish',
		's'           => $tour_location, // looks into everything with the keyword from your 'name field'
		'paged'       => $paged,
	);

	if ( isset( $_POST['sort_by_order'] ) && $_POST['sort_by_order'] != '' ) {
		if ( $_POST['sort_by_order'] == 'bydate' ) {
			$query_args['orderby'] = 'date';
			$query_args['order']   = 'DESC';
		} else {
			$query_args['meta_key'] = 'travio_metabox_package_price';
			$query_args['orderby']  = 'meta_value_num';
			$query_args['order']    = 'DESC';
		}
	}

	$tax_array = array();

	if ( isset( $_POST['tourtype'] ) && $_POST['tourtype'] != '' ) {
		$tax_array[] = array(
			'taxonomy' => 'type',
			'terms'    => sanitize_text_field( $_POST['tourtype'] ),
			'field'    => 'slug',
		);
	}

	if ( isset( $_POST['travio_category'] ) && $_POST['travio_category'] != '' ) {

		$travio_category = sanitize_text_field( $_POST['travio_category'] );
		$slugs           = explode( ',', $travio_category );
		$tax_array[]     = array(
			'taxonomy' => 'categories',
			'terms'    => $slugs,
			'field'    => 'slug',
		);
	}

	if ( isset( $_POST['travio_duration'] ) && $_POST['travio_duration'] != '' ) {

		$travio_duration = sanitize_text_field( $_POST['travio_duration'] );
		$slugs           = explode( ',', $travio_duration );
		$tax_array[]     = array(
			'taxonomy' => 'durations',
			'terms'    => $slugs,
			'field'    => 'slug',
		);
	}

	if ( isset( $_POST['when'] ) && $_POST['when'] != '' ) {
		$tax_array[] = array(
			'taxonomy' => 'month',
			'terms'    => sanitize_text_field( $_POST['when'] ),
			'field'    => 'slug',
		);
	}

	if ( ! empty( $tax_array ) ) {
		$query_args['tax_query'] = array(
			'relation' => 'AND',
			$tax_array,
		);
	}

	$meta_array = array();

	if ( isset( $_POST['pric_start'] ) && $_POST['pric_start'] != '' ) {
		$pric_start = sanitize_text_field( $_POST['pric_start'] );
		$pric_end   = sanitize_text_field( $_POST['pric_end'] );

		$meta_array[] = array(
			'key'     => 'travio_metabox_package_price',
			'value'   => array( $pric_start, $pric_end ),
			'compare' => 'BETWEEN',
		);

	}

	if ( isset( $_POST['reviewrat'] ) && $_POST['reviewrat'] != '' ) {
		$meta_array[] = array(
			'key'     => 'travio_avarage_rate',
			'value'   => sanitize_text_field( $_POST['reviewrat'] ),
			'compare' => 'LIKE',
		);
	}

	if ( ! empty( $meta_array ) ) {
		$query_args['meta_query'] = array(
			'relation' => 'AND',
			$meta_array,
		);
	}

	global $wp_query;
	$search_query = new WP_Query( $query_args );
	$wp_query->query( $search_query->query_vars );
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();
			get_template_part( 'template-parts/tour-style/archive', 'list' );
		endwhile;
		?>

<div class="blogpagination_ajax">
		<?php
		$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
		echo paginate_links(
			array(
				'base'      => '%_%',
				'format'    => '?paged=%#%',
				'total'     => $wp_query->max_num_pages,
				'current'   => $paged,
				'prev_text' => '<i class="fa fa-arrow-left"></i>',
				'next_text' => '<i class="fa fa-arrow-right"></i>',
			)
		);
		?>
  <span class="ajax_page_number"></span>
</div>
		<?php
  else :
	  echo esc_html__( 'Sorry, nothing matched your search criteria', 'travio' );
  endif;
  wp_die();
}
