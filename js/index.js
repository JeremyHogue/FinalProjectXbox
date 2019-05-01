$(function(){
  $('#console-box').append('console is ready...');
  
  $('li').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
    $(this).toggleClass('selected').siblings().removeClass('selected');
; 
  });
  
});

function githubPage() {
  location.replace("https://github.com/JeremyHogue/FinalProjectXbox");
}

function giftCard() {
  location.replace("https://www.microsoft.com/en-us/p/xbox-gift-card-digital-code/cfq7ttc0k63h/001B?icid=GiftCardsCat-Hero1-shopgiftcard-101717&activetab=pivot%3aoverviewtab");
}