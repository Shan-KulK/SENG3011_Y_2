(function($) {
	
	"use strict";
	

    //  howMany = $('12');
      var listButton = $('button.list-view');
      var gridButton = $('button.grid-view');
      var  wrapper = $('div.wrapper');

      listButton.on('click',function(){
          
        gridButton.removeClass('on');
        listButton.addClass('on');
        wrapper.removeClass('grid').addClass('list');
        
      });

      gridButton.on('click',function(){
          
        listButton.removeClass('on');
        gridButton.addClass('on');
        wrapper.removeClass('list').addClass('grid');
        
      });


})(window.jQuery);