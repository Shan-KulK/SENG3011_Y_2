<?php
class Travio_Int {

	/**
	 * top bar search compatibility.
	 */
	public static function travio_search_popup() {
		$header_on_of_search = travio_get_options( 'header_on_of_search' );
		?>
		<?php if ( $header_on_of_search == 1 ) : ?>
			<li class="search-box-outer">
				<div class="dropdown">
					<button class="search-box-btn" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-search"></i></button>
					<div class="dropdown-menu search-panel" aria-labelledby="dropdownMenu3">
						<div class="form-container">
							<form method="post" action="<?php echo esc_url( home_url( '/' ) ); ?>">
								<div class="form-group">
									<input type="search" id="<?php echo esc_attr( uniqid( 'search-form-' ) ); ?>" placeholder="<?php esc_attr_e( 'Search...', 'travio' ); ?>" value="<?php echo get_search_query(); ?>" name="s" required="required" />
									<button type="submit" class="search-btn"><span class="fas fa-search"></span></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</li>
		<?php endif; ?>
		<?php
	}

	public static function travio_search_popup_sticky() {
		$header_on_of_search = travio_get_options( 'header_on_of_search' );
		?>
		<?php if ( $header_on_of_search == 1 ) : ?>
			<li class="search-box-outer">
				<div class="dropdown">
					<button class="search-box-btn" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-search"></i></button>
					<div class="dropdown-menu search-panel" aria-labelledby="dropdownMenu4">
						<div class="form-container">
							<form method="post" action="<?php echo esc_url( home_url( '/' ) ); ?>">
								<div class="form-group">
									<input type="search" id="<?php echo esc_attr( uniqid( 'search-form-' ) ); ?>" placeholder="<?php esc_attr_e( 'Search...', 'travio' ); ?>" value="<?php echo get_search_query(); ?>" name="s" required="required" />
									<button type="submit" class="search-btn"><span class="fas fa-search"></span></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</li>
		<?php endif; ?>
		<?php
	}

	/**
	 * preloader compatibility.
	 */
	public static function travio_preloader() {
		 $preloader_on_off = travio_get_options( 'preloader_on_off' );
		?>
		<?php if ( $preloader_on_off ) : ?>
		<div class="loader-wrap">
			<div class="preloader">
				<div class="preloader-close"><?php esc_html_e( 'Preloader Close', 'travio' ); ?></div>
				<div id="handle-preloader" class="handle-preloader">
					<div class="animation-preloader">
						<div class="spinner"></div>
					</div>  
				</div>
			</div>
		</div>
		<?php endif; ?>
		<?php
	}
	/**
	 * back to top compatibility.
	 */
	public static function travio_back_to_top() {
		$back_to_top_on_off = travio_get_options( 'back_to_top_on_off' );
		?>
		<?php if ( $back_to_top_on_off === '1' ) : ?>
			<button class="scroll-top scroll-to-target" data-target="html">
				<span class="fal fa-angle-up"></span>
			</button>
		<?php endif; ?>
		<?php
	}
	/**
	 * header logo compatibility.
	 */
	public static function travio_header_logo() {
		?>
		<div class="logo-box">
			<figure class="logo">
				<?php
				if ( has_custom_logo() ) {
					the_custom_logo();
				} else {
					?>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<img src="<?php echo esc_url( TRAVIO_IMG_URL . 'logo-3.png' ); ?>" alt="<?php esc_attr_e( 'Logo', 'travio' ); ?>">
					</a>	
					<?php
				}
				?>
			</figure>
		</div>
		<?php
	}

	/**
	 * header logo compatibility.
	 */
	public static function travio_header_sticky_logo() {
		?>
		<div class="logo-box">
			<figure class="logo">
				<?php
				if ( has_custom_logo() ) {
					the_custom_logo();
				} else {
					?>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<img src="<?php echo esc_url( TRAVIO_IMG_URL . 'logo.png' ); ?>" alt="<?php esc_attr_e( 'Logo', 'travio' ); ?>">
					</a>	
					<?php
				}
				?>
			</figure>
		</div>
		<?php
	}


	/**
	 * header menu compatibility.
	 */
	public static function travio_header_menu() {
		?>
		<nav class="main-menu navbar-expand-md navbar-light pull-left">
			<div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
				<?php
				if ( has_nav_menu( 'primary' ) ) {
					wp_nav_menu(
						array(
							'theme_location' => 'primary',
							'depth'          => 3, // 1 = no dropdowns, 2 = with dropdowns.
							'menu_class'     => 'navigation clearfix',
							'container'      => 'ul',
						)
					);
				} else {
					wp_nav_menu(
						array(
							'menu_class' => 'navigation clearfix',
							'container'  => 'ul',
						)
					);
				}
				?>
			</div>
		</nav>
		<?php
	}

	/**
	 * mobile menu compatibility.
	 */
	public static function travio_mobile_menu() {
		$mobile_menu_social  = travio_get_options( 'mobile_menu_social' );
		$mobile_menu_contact = travio_get_options( 'mobile_menu_contact' );
		$mobile_menu_logo    = travio_get_options( 'mobile_menu_logo' );
		?>
		<!-- Mobile Menu  -->
		<div class="mobile-menu">
			<div class="menu-backdrop"></div>
			<div class="close-btn"><i class="fas fa-times"></i></div>
			<nav class="menu-box">
				<div class="nav-logo">
					<?php if ( isset( $mobile_menu_logo['url'] ) && $mobile_menu_logo['url'] != '' ) : ?>
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( $mobile_menu_logo['url'] ); ?>" alt="<?php esc_attr_e( 'Logo', 'travio' ); ?>"></a>
					<?php else : ?>
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( TRAVIO_IMG_URL . 'logo.png' ); ?>" alt="<?php esc_attr_e( 'Logo', 'travio' ); ?>"></a>
					<?php endif; ?>
				</div>
				<div class="menu-outer">
					<!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
				</div>
				<?php if ( $mobile_menu_contact ) : ?>
					<div class="contact-info">
						<?php echo wp_kses( $mobile_menu_contact, 'travio_kses' ); ?>
					</div>
				<?php endif ?>
				<?php if ( $mobile_menu_social ) : ?>
					<div class="social-links">
						<?php echo wp_kses( $mobile_menu_social, 'travio_kses' ); ?>
					</div>
				<?php endif ?>
			</nav>
		</div><!-- End Mobile Menu -->
		<?php
	}
	/**
	 * All header and breadcrumb.
	 */
	public static function travio_breadcrumb() {
		$breadcrumb_title = 'travio';
		$breadcrumb_class = 'breadcrumb_no_bg';
		if ( is_front_page() && is_home() ) :
			$breadcrumb_title = ''; // deafult blog
			$breadcrumb_class = 'deafult-home-breadcrumb';
		elseif ( is_front_page() && ! is_home() ) :
			$breadcrumb_title = ''; // custom home or deafult
			$breadcrumb_class = 'custom-home-breadcrumb';
		elseif ( is_home() ) :
			$blog_breadcrumb_switch = travio_get_options( 'blog_breadcrumb_switch' );
			if ( $blog_breadcrumb_switch == '1' ) :

				$blog_breadcrumb_content = travio_get_options( 'blog_breadcrumb_content' );

				$blog_style = get_query_var( 'blog_style' );
				if ( ! $blog_style ) {
					$blog_style = travio_get_options( 'blog_style' );
				}
				if ( $blog_style == 1 ) :
					$blog_breadcrumb_content = travio_get_options( 'blog_breadcrumb_content' );
				elseif ( $blog_style == 2 ) :
					$blog_breadcrumb_content = travio_get_options( 'blog_breadcrumb_content' );
				elseif ( $blog_style == 3 ) :
					$blog_breadcrumb_content = travio_get_options( 'blog_breadcrumb_content' );
				endif;

				$breadcrumb_title = $blog_breadcrumb_content;
			else :
				$breadcrumb_title = '';
			endif;
			$breadcrumb_class = 'blog-breadcrumb';
		elseif ( is_archive() ) :
			if ( is_post_type_archive( 'tour' ) ) {
				$breadcrumb_class = 'style-two blog-breadcrumb';
				$breadcrumb_title = esc_html__( 'Tours', 'travio' );
			} else {
				$breadcrumb_class = 'blog-breadcrumb';
				$breadcrumb_title = get_the_archive_title();
			}

		elseif ( is_single() ) :
			if ( get_post_type( get_the_ID() ) == 'post' ) :
				$blog_single_breadcrumb_switch = travio_get_options( 'blog_single_breadcrumb_switch' );
				if ( $blog_single_breadcrumb_switch == '1' ) :
					// redux
					$blog_single_breadcrumb_content = travio_get_options( 'blog_single_breadcrumb_content' );
					$breadcrumb_title               = $blog_single_breadcrumb_content;
					$breadcrumb_class               = 'blog-single-breadcrumb';
				else :
					$breadcrumb_title = '';
				endif;
			else :
				// post type
				$breadcrumb_title = ucfirst( get_post_type() ) . esc_html__( ' Details', 'travio' );
				$breadcrumb_class = get_post_type() . '-single-breadcrumb';
			endif;
		elseif ( is_404() ) :
			$breadcrumb_title = esc_html__( 'Error Page', 'travio' );
			$breadcrumb_class = 'blog-breadcrumb';
		elseif ( is_search() ) :
			if ( have_posts() ) :
				$breadcrumb_title = esc_html__( 'Search Results for: ', 'travio' ) . get_search_query();
				$breadcrumb_class = 'blog-breadcrumb';
			else :
				$breadcrumb_title = esc_html__( 'Nothing Found', 'travio' );
				$breadcrumb_class = 'blog-breadcrumb';
			endif;
		elseif ( ! is_home() && ! is_front_page() && ! is_search() && ! is_404() ) :
			$breadcrumb_title = get_the_title();
			$breadcrumb_class = 'page-breadcrumb';
		endif;
		$breadcrumb_active_class = 'breadcrumb-not-active';
		if ( function_exists( 'bcn_display' ) ) :
			$breadcrumb_active_class = '';
		endif;
		?>
		<?php

		if ( is_page() ) {
			$travio_show_breadcrumb = get_post_meta( get_the_ID(), 'travio_core_show_breadcrumb', true );
		} else {
			$travio_show_breadcrumb = 'on';
		}
		$header_menu_style            = travio_get_options( 'header_menu_style' );
		$breadcrumb_class_with_header = 'breadcrumb-class-with-header-one';
		if ( $header_menu_style == '2' ) :
			$breadcrumb_class_with_header = '';
		endif;
		?>
		<?php if ( $travio_show_breadcrumb != 'off' ) : ?>
			<?php
			if ( isset( $breadcrumb_title ) && ! empty( $breadcrumb_title ) ) :
				if ( ! is_singular( 'tour' ) ) {
					?>
				<section class="page-title centred <?php echo esc_attr( $breadcrumb_class . ' ' . $breadcrumb_active_class . ' ' . $breadcrumb_class_with_header ); ?>">
					<div class="auto-container">
						<div class="content-box">
							<h1><?php echo wp_kses( $breadcrumb_title, 'travio_kses' ); ?></h1>
						</div>
						<?php
						if ( is_post_type_archive( 'tour' ) ) {
							tour_search();
						}
						?>
					</div>
				</section>
					<?php
				}
		endif;
			?>
		<?php endif; ?>
		<?php
	}
	/**
	 * travio search popup compatibility.
	 */
	public static function travio_blog_social() {
		?>
		<ul class="social-links pull-right clearfix">
			<li><a onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" href="https://twitter.com/home?status=<?php echo urlencode( get_the_title() ); ?>-<?php echo esc_url( get_permalink() ); ?>"><i class="fab fa-facebook-f"></i></a></li>
			<li><a onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" href="https://www.pinterest.com/pin/find/?url=<?php echo get_the_permalink(); ?>"><i class="fab fa-google-plus-g"></i></a></li>
			<li><a onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" href="https://www.instagram.com/p/B8Jp8UbAHmd/?utm_source=<?php echo esc_url( get_permalink() ); ?>"><i class="fab fa-twitter"></i></a></li>
		</ul>
		<?php
	}

}
$travio_int = new Travio_Int();
