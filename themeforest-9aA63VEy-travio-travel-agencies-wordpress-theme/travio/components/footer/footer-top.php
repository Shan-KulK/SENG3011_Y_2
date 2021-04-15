<?php
$footer_left_widget_elementor = travio_get_options( 'footer_left_widget_elementor' );
if ( class_exists( '\\Elementor\\Plugin' ) ) {
	if ( isset( $footer_left_widget_elementor ) && ! empty( $footer_left_widget_elementor ) ) :
		$pluginElementor = \Elementor\Plugin::instance();
		?>
<div class="footer-top pt-130">
	<div class="vector-bg"></div>
	<div class="auto-container">
		<?php
			$travio_all_save_element = $pluginElementor->frontend->get_builder_content( $footer_left_widget_elementor );
			echo do_shortcode( $travio_all_save_element );
		?>
	</div>
</div>
		<?php
	endif;
}
