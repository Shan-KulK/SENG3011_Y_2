<?php
$travio_currency = travio_get_options( 'travio_currency' );
if ( $travio_currency ) {
	$travio_currency_output = $travio_currency;
} else {
	$travio_currency_output = '$';
}
$package_price       = get_post_meta( get_the_ID(), 'travio_metabox_package_price', true );
$package_day         = get_post_meta( get_the_ID(), 'travio_metabox_package_day', true );
$package_location    = get_post_meta( get_the_ID(), 'travio_metabox_package_location', true );
$tour_package_member = get_post_meta( get_the_ID(), 'travio_metabox_tour_package_member', true );
?>
<div class="col-lg-6 col-md-6 col-sm-12 tour-block">
	<div class="tour-block-one">
		<div class="inner-box">
			<figure class="image-box">
				<?php the_post_thumbnail(); ?>
				<a href="<?php esc_url( the_permalink() ); ?>"><i class="fas fa-link"></i></a>
			</figure>
			<div class="lower-content">
				<div class="rating"><span>
				<?php
				$travio_comments = get_comments(
					array(
						'post_id' => get_the_ID(),
						'status'  => 'approve',
					)
				);
				if ( ! empty( $travio_comments ) ) {
					$travio_count_comments = count( $travio_comments );
					$travio_average        = travio_get_average_rate( get_the_ID() );
					if ( $travio_average ) {
						for ( $x = 1; $x <= $travio_average; $x++ ) {
							echo '<i class="fas fa-star"></i>';
						}
					}
					$inactive_comment_rate = 5 - $travio_average;
					if ( $inactive_comment_rate > 0 ) {
						for ( $x = 1; $x <= $inactive_comment_rate; $x++ ) {
							echo '<i class="fas fa-star inactive"></i>';
						}
					}
					if ( $travio_count_comments != 1 ) {
						echo ' ' . esc_html( $travio_count_comments ) . esc_html__( ' Reviews', 'travio' );
					} else {
						echo ' ' . esc_html( $travio_count_comments ) . esc_html__( ' Review', 'travio' );
					}
				}
				?>
				</span></div>
				<h3><a href="<?php esc_url( the_permalink() ); ?>"><?php the_title(); ?></a></h3>
				<h4><?php echo esc_html( $travio_currency_output ); ?><?php echo esc_html( $package_price ); ?><span> / <?php echo esc_html( $tour_package_member ); ?></span></h4>
				<ul class="info clearfix">
					<li><i class="far fa-clock"></i><?php echo esc_html( $package_day ); ?></li>
					<li><i class="far fa-map"></i><?php echo esc_html( $package_location ); ?></li>
				</ul>
				<?php the_excerpt(); ?>
				<div class="btn-box">
					<a href="<?php esc_url( the_permalink() ); ?>"><?php esc_html_e( 'See Details', 'travio' ); ?></a>
				</div>
			</div>
		</div>
	</div>
</div>
