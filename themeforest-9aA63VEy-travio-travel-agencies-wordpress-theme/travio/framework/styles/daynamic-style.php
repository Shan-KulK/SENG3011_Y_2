<?php
function travio_daynamic_styles() {
	ob_start();
	$travio_daynamic_styles_array = array();

	if ( is_page() ) {
		$featured_img_url = get_the_post_thumbnail_url( get_the_ID(), 'full' );
		if ( $featured_img_url ) {
			$page_breadcrumb_bg             = '
                .page-breadcrumb {
                    background-image: url(' . esc_url( $featured_img_url ) . ');
                }
                ';
			$travio_daynamic_styles_array[] = $page_breadcrumb_bg;
		}
	}
	$travio_daynamic_styles_array_expolord = implode( ' ', $travio_daynamic_styles_array );
	$travio_custom_css                     = ob_get_clean();
	return $travio_daynamic_styles_array_expolord;
}



function travio_get_custom_styles() {
	global $travio_options;
	$redix_opt_prefix = 'travio_';

	if ( ( isset( $travio_options[ $redix_opt_prefix . 'main_color' ] ) ) && ( ! empty( $travio_options[ $redix_opt_prefix . 'main_color' ] ) ) ) {
		$travio_main_color = $travio_options[ $redix_opt_prefix . 'main_color' ];
	}

	ob_start();
	if ( ( isset( $travio_options[ $redix_opt_prefix . 'main_color' ] ) ) && ( ! empty( $travio_options[ $redix_opt_prefix . 'main_color' ] ) ) ) {
		?>


/* template-color */

.scroll-top{
  background-color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.handle-preloader{
	background-color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.preloader-close{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.main-menu .navigation > li.current-menu-parent > a,
.main-menu .navigation > li:hover > a{
  color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.main-header .menu-right-content .user-link a:hover{
  background: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.main-header .search-box-btn:hover{
  background: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.main-menu .navigation > li > ul > li > a:hover,
.main-menu .navigation > li > .megamenu li > a:hover{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.main-menu .navigation > li > ul, 
.main-menu .navigation > li > .megamenu,
.main-menu .navigation > li > ul > li > ul{
	border-top: 3px solid <?php echo esc_attr( $travio_main_color ); ?>
}

.main-menu .navigation > li > ul > li > ul > li > a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.main-header .search-box-outer .dropdown-menu{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.theme-btn{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.feature-block-one .inner-box .lower-content .icon-box{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.image_block_1 .image-box .video-content .video-btn a{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.border-animation{
	border: 1px solid <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-block-one .inner-box .image-box:before{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-block-one .inner-box .lower-content .rating span i{
	color: #ffab01;
}

.tour-block-one .inner-box .lower-content h3 a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-block-one .inner-box .lower-content h4{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-block-one .inner-box .lower-content .btn-box a:hover{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
	border-color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.content_block_2 .content-box .price h4{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.place-block-one .inner-box .text h3 a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.testimonial-block-one .inner-box .rating-box li{
	color: #ffab01;
}

.testimonial-section .owl-theme .owl-dots .owl-dot.active span,
.testimonial-section .owl-theme .owl-dots .owl-dot span:hover{
	border-color: <?php echo esc_attr( $travio_main_color ); ?>;
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.video-section .inner-box .video-btn a{
	border: 5px solid <?php echo esc_attr( $travio_main_color ); ?>;
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.theme-btn-two:hover{
	border-color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.news-block-one .inner-box .image-box{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.news-block-one .inner-box .image-box .post-date i{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.news-block-one .inner-box .lower-content .category a:hover{
  background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.news-block-one .inner-box .lower-content h3 a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.news-block-one .inner-box .lower-content .post-info li a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.footer-top .logo-widget .social-links li a:hover{
  background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.footer-top .links-widget .links-list li a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.footer-top .links-widget .links-list li a:before{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.footer-top .gallery-widget .image-list li .image-box{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.footer-top .contact-widget .info-list li i{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.footer-top .contact-widget .info-list li a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.footer-bottom .copyright p a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.footer-bottom .footer-nav li a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.header-top .top-info li a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.offer-block-one .inner-box .content-box h3 a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.offer-block-one .inner-box .content-box h4{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.offer-section .owl-theme .owl-dots .owl-dot.active span,
.offer-section .owl-theme .owl-dots .owl-dot span:hover{
  background: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.video-style-two .inner-container .inner-box .video-btn a{
	border: 5px solid <?php echo esc_attr( $travio_main_color ); ?>;
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.funfact-style-two .pattern-layer:before{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.banner-carousel .owl-nav .owl-prev:hover,
.banner-carousel .owl-nav .owl-next:hover{
  background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.content_block_3 .content-box .text a{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-block-two .inner-box .content-box h3 a:hover{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-block-two .inner-box .content-box .btn-box a:hover{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-block-two .inner-box .image-box:before{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-block-two .inner-box .content-box .rating span i{
	color: #ffab01;
}

.tour-block-two .inner-box .content-box h4{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.dots-style-one .owl-dots .owl-dot.active span,
.dots-style-one .owl-dots .owl-dot span:hover{
	background-color: <?php echo esc_attr( $travio_main_color ); ?>;
	border-color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.deals-style-two .single-deals-box .inner-box .content-box h3 a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.deals-style-two .single-deals-box .inner-box .content-box h4{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.deals-style-two .owl-nav .owl-prev:hover,
.deals-style-two .owl-nav .owl-next:hover{
  background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.single-feed-box .inner-box .link a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.destination-details-content .country-details .details-list li i{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.destination-details-content .country-details .details-list li a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.destination-details-content .comment-box .comment-form .form-group input:focus,
.destination-details-content .comment-box .comment-form .form-group textarea:focus{
  border-color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.default-sidebar .search-form .form-group input:focus{
  border-color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.default-sidebar .search-form .form-group input:focus + button,
.default-sidebar .search-form .form-group button:hover{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.default-sidebar .downloads-widget .download-links li a:hover{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.default-sidebar .downloads-widget .download-links li a:hover i{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.default-sidebar .post-widget .post .post-thumb{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.default-sidebar .post-widget .post h4 a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.default-sidebar .advice-widget .inner-box:before{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tours-page-section .item-shorting .right-column .menu-box button.on{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
	border-color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.pagination .page-numbers:hover,
.pagination .page-numbers.current{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.custom-check-box .custom-control.material-checkbox .material-control-input:checked ~ .material-control-indicator{
	background: <?php echo esc_attr( $travio_main_color ); ?> !important;
	border-color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.range-slider .ui-slider .ui-slider-range{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.range-slider .ui-state-default,
.range-slider .ui-widget-content .ui-state-default{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.custom-check-box .custom-controls-stacked .description i{
	color: #ffab01;
}

.page-title.style-three .inner-box .rating span i{
	color: #ffab01;
}

.page-title.style-three .inner-box h3{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-details-content .inner-box .text .info-list li i{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-details-content .overview-inner .overview-list li ul.included-list li:before{
	color: #2ccd9d;
}

.tour-details-content .overview-inner .overview-list li ul.excluded-list li:before{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-details-content .tour-plan .single-box span{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-details-content .tour-plan .single-box h4{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.progress-box .bar-inner{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-details-content .review-box .text h2{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.tour-details-content .comment-box .comment-form .form-group input:focus,
.tour-details-content .comment-box .comment-form .form-group textarea:focus{
	border-color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.tour-details-content .comment-box .text .list li i.active{
	color: #ffab01;
}

.tour-sidebar .tour-form .form-group input:focus,
.tour-sidebar .tour-form .form-group textarea:focus{
  border-color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.team-block-one .inner-box .lower-content h3 a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.team-block-one .inner-box .lower-content .social-links li a:hover{
  background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.booking-process-content .process-label li.current{
  background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.booking-process-content .processing-form .form-group input:focus,
.booking-process-content .processing-form .form-group textarea:focus{
  border-color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.process-sidebar .content-box .info li i{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.process-sidebar .content-box .price h4{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.booking-process-2 .booking-process-content .process-label li:first-child{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.booking-process-3 .booking-process-content .process-label li:first-child,
.booking-process-3 .booking-process-content .process-label li:nth-child(2){
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.booking-process-content .confirm-box .inner-box .icon-box{
	color: #39cabb;
}

.booking-process-content .confirm-box .inner-box p a{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.accordion-box .block .acc-btn.active{
  background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.faq-sidebar .sidebar-inner .faq-form .form-group input:focus,
.faq-sidebar .sidebar-inner .faq-form .form-group textarea:focus{
  border-color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.register-section .inner-box .form-inner .social-links li a:hover{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.register-section .inner-box .form-inner .form-group input:focus{
  border-color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.register-section .inner-box .form-inner .custom-check-box .custom-controls-stacked .description a{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
  border-bottom: 1px solid <?php echo esc_attr( $travio_main_color ); ?>;
}

.register-section .inner-box .form-inner .other-text a{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.register-section .inner-box .form-inner .forgor-password a{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.error-section .inner-box h1{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.blog-sidebar .category-widget .category-list li a i{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.blog-sidebar .category-widget .category-list li a:hover{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.news-block-one .inner-box .lower-content h2 a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.news-block-one .inner-box .lower-content .post-info li.comment a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.blog-details-content .post-share-option .social-links li:first-child a{
	background: #466ca9;
}

.blog-details-content .post-share-option .social-links li:nth-child(2) a{
	background: #dd4b39;
}

.blog-details-content .post-share-option .social-links li:last-child a{
	background: #55acee;
}

.blog-details-content .comment-box .comment .reply-btn:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.blog-details-content .comments-form-area .form-inner .form-group input:focus,
.blog-details-content .comments-form-area .form-inner .form-group textarea:focus{
  border-color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

.single-info-box .inner-box .icon-box{
	color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.single-info-box .inner-box p a:hover{
  color: <?php echo esc_attr( $travio_main_color ); ?>;
}

.single-info-box .inner-box:hover .icon-box{
	background: <?php echo esc_attr( $travio_main_color ); ?>;
}

.content_block_5 .content-box .social-links li:first-child a{
	background: #466ca9;
}

.content_block_5 .content-box .social-links li:nth-child(2) a{
  background: #dd4b39;
}

.content_block_5 .content-box .social-links li:last-child a{
  background: #55acee;
}

.contact-section .form-inner .form-group input:focus,
.contact-section .form-inner .form-group textarea:focus{
	border-color: <?php echo esc_attr( $travio_main_color ); ?> !important;
}

		<?php
	}

	$travio_custom_css = ob_get_clean();

	return $travio_custom_css;
}

