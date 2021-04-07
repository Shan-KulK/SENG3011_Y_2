<?php
$header_on_of_user  = travio_get_options( 'header_on_of_user' );
$header_button_text = travio_get_options( 'header_button_text' );
$header_button_url  = travio_get_options( 'header_button_url' );

$sticky_header_on = travio_get_options( 'sticky_header_on' );

?>

<!-- main header -->
<header class="main-header style-three style-five">
	<!-- header-lower -->
	<div class="header-lower">
		<div class="outer-box">
			<div class="menu-area pull-left clearfix">
				<?php do_action( 'travio_header_logo' ); ?>
				<!--Mobile Navigation Toggler-->
				<div class="mobile-nav-toggler">
					<i class="icon-bar"></i>
					<i class="icon-bar"></i>
					<i class="icon-bar"></i>
				</div>
				<?php do_action( 'travio_header_menu' ); ?>
			</div>
			<ul class="menu-right-content pull-right clearfix">
				<?php do_action( 'travio_search_popup' ); ?>
				<?php if ( ! empty( $header_on_of_user ) ) { ?>
				<li class="user-link">
					<a href="<?php echo esc_url( $header_on_of_user ); ?>"><i class="icon-Profile"></i></a>
				</li>
				<?php } ?>
				<?php if ( ! empty( $header_button_text ) && ! empty( $header_button_url ) ) { ?>
				<li class="btn-box">
					<a href="<?php echo esc_url( $header_button_url ); ?>" class="theme-btn"><?php echo esc_html( $header_button_text ); ?></a>
				</li>
				<?php } ?>
			</ul>
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
					<?php if ( $header_on_of_user ) { ?>
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
<!-- main-header end -->
