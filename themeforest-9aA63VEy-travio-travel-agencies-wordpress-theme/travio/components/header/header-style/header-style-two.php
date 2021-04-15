<?php
$header_top_on_of   = travio_get_options( 'header_top_on_of' );
$header_on_of_user  = travio_get_options( 'header_on_of_user' );
$header_button_text = travio_get_options( 'header_button_text' );
$header_button_url  = travio_get_options( 'header_button_url' );

$header_email   = travio_get_options( 'header_email' );
$header_phone   = travio_get_options( 'header_phone' );
$header_address = travio_get_options( 'header_address' );

$sticky_header_on = travio_get_options( 'sticky_header_on' );

?>

<header class="main-header style-two">
	<!-- header-top -->
	<?php if ( $header_top_on_of ) { ?>
	<div class="header-top">
		<div class="auto-container">
			<div class="top-inner clearfix">
				<ul class="top-info pull-left">
					<li><a href="mailto:<?php echo esc_attr( $header_email ); ?>"><?php echo esc_html( $header_email ); ?></a></li>
					<li><a href="tel:<?php echo esc_attr( $header_phone ); ?>"><?php echo esc_html( $header_phone ); ?></a></li>
					<li><?php echo esc_html( $header_address ); ?></li>
				</ul>
				<?php if ( ! empty( $header_button_text ) && ! empty( $header_button_url ) ) { ?>
				<div class="btn-box pull-right">
					<a href="<?php echo esc_url( $header_button_url ); ?>" class="theme-btn"><?php echo esc_html( $header_button_text ); ?></a>
				</div>
				<?php } ?>
			</div>
		</div>
	</div>
	<?php } ?>
	<!-- header-lower -->
	<div class="header-lower">
		<div class="auto-container">
			<div class="outer-box">
				<div class="logo-box">
					<div class="bg-layer"></div>
					<figure class="logo">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<img src="<?php echo esc_url( TRAVIO_IMG_URL . 'logo-3.png' ); ?>" alt="<?php esc_attr_e( 'Logo', 'travio' ); ?>">
						</a>
					</figure>
				</div>
				<div class="menu-area clearfix">
					<!--Mobile Navigation Toggler-->
					<div class="mobile-nav-toggler">
						<i class="icon-bar"></i>
						<i class="icon-bar"></i>
						<i class="icon-bar"></i>
					</div>
					<?php do_action( 'travio_header_menu' ); ?>
				</div>
				<ul class="menu-right-content clearfix">
					<?php do_action( 'travio_search_popup' ); ?>
					<?php if ( $header_on_of_user ) { ?>
					<li class="user-link">
						<a href="<?php echo esc_url( $header_on_of_user ); ?>"><i class="icon-Profile"></i></a>
					</li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>

	<!--sticky Header-->
	<?php if ( $sticky_header_on ) { ?>
	<div class="sticky-header">
		<div class="auto-container">
			<div class="outer-box">
				<?php do_action( 'travio_header_sticky_logo' ); ?>
				<div class="menu-area">
					<nav class="main-menu clearfix">
						<!--Keep This Empty / Menu will come through Javascript-->

					</nav>
				</div>
				<ul class="menu-right-content clearfix">
					<?php do_action( 'travio_search_popup_sticky' ); ?>
					<?php if ( ! empty( $header_on_of_user ) ) { ?>
					<li class="user-link">
						<a href="<?php echo esc_url( $header_on_of_user ); ?>"><i class="icon-Profile"></i></a>
					</li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
	<?php } ?>
</header>
