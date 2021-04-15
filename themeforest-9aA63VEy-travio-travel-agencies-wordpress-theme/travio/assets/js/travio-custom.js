(function ($) {
  var style = document.createElement("style");
  document.head.appendChild(style);

  /* Tour Search Date picker only month */
  $("#monthPicker").datepicker({
    viewMode: "years",
    format: "MM",
  });


  /* Blog Page Pagination class addition */
  $(".blogpagination .nav-links").addClass("post-pagination");

  /* Blog Page Pagination change default [span] to [a] tag addition */
  $(".blogpagination .nav-links span").each(function () {
    $(this).replaceWith(
      $('<a class="active" href="#">' + this.innerHTML + "</a>")
    );
  });

  /* Pagination H2 tag remove */
  $(".blogpagination h2").remove();

  var ajaxurl = ajax_obj.ajax_url;
  var travio_nonce = ajax_obj.travio_nonce;
  function searchPosts() {
    var chkArray = [];
    // Look for all checkboxes that have a specific class and was checked
    $(".travio_category:checked").each(function () {
      chkArray.push($(this).val());
    });
    var travio_category;
    travio_category = chkArray.join(",");

    var chkArrayR = [];
    // Look for all checkboxes that have a specific class and was checked
    $(".travio_ratting:checked").each(function () {
      chkArrayR.push($(this).val());
    });
    var travio_ratting;
    travio_ratting = chkArrayR.join(",");

    var chkArrayD = [];
    // Look for all checkboxes that have a specific class and was checked
    $(".travio_duration:checked").each(function () {
      chkArrayD.push($(this).val());
    });
    var travio_duration;
    travio_duration = chkArrayD.join(",");

    reviewrat = $("input[name='rattingreview']:checked").val();
    var paged = $(".ajax_page_number").text();

    return $.post(ajaxurl, {
      action: "travio_adv_search",
      paged: paged,
      travio_nonce: travio_nonce,
      tour_location: $("#tour_location").val(),
      when: $(".when").val(),
      tourtype: $("#tourtype").val(),
      pric_start: $("#min-val").val(),
      pric_end: $("#max-val").val(),
      sort_by_order: $("#sort-by").val(),
      travio_category: travio_category,
      reviewrat: reviewrat,
      travio_ratting: travio_ratting,
      travio_duration: travio_duration,
    })
      .done(function (s) {
        $("#tour_search_loop_wapper").html(s);
        $(".pagination-wrapper").remove();
      })
      .always(function () {});
  }

  $("#tour_location").on("keyup", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $(".when").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $("#tourtype").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $("#sort-by").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $("#search_button").on("click", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $("#filter_button").on("click", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $(".reviewrat").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $(".travio_category:checkbox").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $(".travio_duration:checkbox").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $("#range-slider-price").on("click", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  jQuery(document).on("click", ".blogpagination_ajax a", function (e) {
    e.preventDefault();
    var paged = /[\?&]paged=(\d+)/.test(this.href) && RegExp.$1;
    $(".ajax_page_number").text(paged);
    searchPosts();
  });



    // the selector will match all input controls of type :checkbox
    // and attach a click event handler 
    $("input:checkbox").on('click', function() {
      // in the handler, 'this' refers to the box clicked on
      var $box = $(this);
      if ($box.is(":checked")) {
        // the name of the box is retrieved using the .attr() method
        // as it is assumed and expected to be immutable
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        // the checked state of the group/box on the other hand will change
        // and the current value is retrieved using .prop() method
        $(group).prop("checked", false);
        $box.prop("checked", true);
      } else {
        $box.prop("checked", false);
      }
    });




    $(document).ready(function () {

      // login 
        $( "#travio-login" ).submit(function( event ) {

        event.preventDefault();

          var login = 'action=signup_paragon&param=login&' + jQuery(this).serialize();
          jQuery.ajax({
              type   : "POST",
              url    : travio_login_object.ajaxurl,
              data   :  login,
                beforeSend: function() {
                   // setting a timeout
                jQuery("#travio-ajax-loader").removeClass('travio-ajax-loader');
            },
              success: function(data){
              console.log( data );
              jQuery("#travio-ajax-loader").addClass('travio-ajax-loader');
               if(data.status==2){
                 jQuery(".result").removeClass('alert alert-warning');
                 jQuery(".result").html(data.message).addClass('alert alert-success');
                 window.location.href = travio_login_object.redirect_url;
              }else{
                  jQuery(".result").html(data.message).addClass('alert alert-warning');
              }
              }
          });
      }); //end login

    
       // register 
      $( "#travio-registration" ).submit(function( event ) {

        event.preventDefault();

          var signupForm = 'action=signup_paragon&param=register&' + jQuery(this).serialize();
          jQuery.ajax({
              type   : "POST",
              url    : travio_login_object.ajaxurl,
              data   :  signupForm,
               beforeSend: function() {
                   // setting a timeout
                jQuery("#travio-ajax-loader").removeClass('travio-ajax-loader');
            },
              success: function(data){
                  jQuery("#travio-ajax-loader").addClass('travio-ajax-loader');
                  if(data.status==2){
                  jQuery(".result").removeClass('alert alert-warning');
                  jQuery(".result").html(data.message).addClass('alert alert-success');
                  window.location.href = travio_login_object.redirect_url;
              }else{
                  jQuery(".result").html(data.message).addClass('alert alert-warning');
              }
              }
          });
      }); //end register

              // reset 
        $( "#travio-forgotForm" ).submit(function( event ) {

        event.preventDefault();

          var reset = 'action=signup_paragon&param=reset&' + jQuery(this).serialize();
          jQuery.ajax({
              type   : "POST",
              url    : travio_login_object.ajaxurl,
              data   :  reset,
                beforeSend: function() {
                   // setting a timeout
                jQuery("#travio-ajax-loader").removeClass('travio-ajax-loader');
            },
              success: function(data){
                  jQuery("#travio-ajax-loader").addClass('travio-ajax-loader');
                  if(data.status==2){
                  jQuery(".result").removeClass('alert alert-warning');
                  jQuery(".result").html(data.message).addClass('alert alert-success');
                  window.location.href = travio_login_object.redirecturl; 
              }else{
                  jQuery(".result").html(data.message).addClass('alert alert-warning');
              }
              }
          });
      }); //end reset
      
  });


})(jQuery);
