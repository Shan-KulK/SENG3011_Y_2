<?php
$header_style = get_post_meta( get_the_ID(), 'travio_core_header_style', true );
if ( ! $header_style ) {
	$header_style = travio_get_options( 'header_style' );
}
?>

<?php if ( $header_style == '5' ) : ?>
	<?php get_template_part( 'components/header/header-style/header-style-elementor' ); ?>
<?php elseif ( $header_style == '4' ) : ?>
	<?php get_template_part( 'components/header/header-style/header-style-four' ); ?>
<?php elseif ( $header_style == '3' ) : ?>
	<?php get_template_part( 'components/header/header-style/header-style-one' ); ?>
<?php elseif ( $header_style == '2' ) : ?>
	<?php get_template_part( 'components/header/header-style/header-style-two' ); ?>
<?php else : ?>
	<?php get_template_part( 'components/header/header-style/header-style-three' ); ?>
	<?php
endif;
