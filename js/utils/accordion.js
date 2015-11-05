var $ = require('jquery');

module.exports = function(targ){
    "use strict";
    var acc = $(targ);
    var accWidth = acc.width();
    var accHeight = acc.height();
    var accChildren = acc.find('.accordion-child');
    var accNum = accChildren.length;
    var accWin = acc.find('.accordion-window');

    accWin.css({'left':0, 'width': function(){return accWidth * accNum;}});
    accChildren.css({'width':accWidth, 'height':accHeight});
    acc.find('.js-accordionNext').on('click', function(){
      var oldPos = accWin.css('left').replace("px","");
      if(oldPos > (accWidth * accNum * -1 + accWidth)){
        accWin.css('left', function(){
          return parseInt(accWin.css('left').replace("px","")) - accWidth;
        });
      }
      // focus search input
      $(this).closest('.accordion-child').next('.accordion-child').find('.search').focus();
    });
    acc.find('.js-accordionPrev').on('click', function(){
      var oldPos = accWin.css('left').replace("px","");
      if(oldPos < (0)){
        accWin.css('left', function(){
          return parseInt(accWin.css('left').replace("px","")) + accWidth;
        });
      }
    });
}