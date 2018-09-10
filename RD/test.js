$(document).ready(function(){
 
  function setEqualHeight (columns){
    var tallestcolumn = 0;
    columns.each(function(){
      currentHeight = $(this).height();
      if(currentHeight > tallestcolumn){
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
  }
  setEqualHeight($('#div1,#div2,#div3,#div4'));
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

