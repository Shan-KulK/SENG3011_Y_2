<?php
$footer_copyright = travio_get_options( 'footer_copyright' );
$footer_link      = travio_get_options( 'footer_link' );

?>
<footer class="main-footer bg-color-2">
	<?php
	get_template_part( 'components/footer/footer-top' );
	?>
	<div class="footer-bottom">
		<div class="auto-container">
			<div class="bottom-inner clearfix">
				<div class="copyright pull-left">
					<p>
						<?php
						if ( $footer_copyright != '' ) :
							echo wp_kses( $footer_copyright, 'travio_kses' );
							else :
								echo esc_html__( '&copy; Copyright 2021 by TRAVIO', 'travio' );
							endif;
							?>
					</p>
				</div>
				<?php if ( $footer_link ) : ?>
				<ul class="footer-nav pull-right">
					<?php echo wp_kses( $footer_link, 'travio_kses' ); ?>
				</ul>
				<?php endif; ?>
			</div>
		</div>
	</div>
</footer>
<?php
do_action( 'travio_back_to_top' );
?>
</div>
<?php wp_footer(); ?>
</body>

</html>
