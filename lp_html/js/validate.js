(function( $ ){
 
$(function() {
 
  $('.rf').each(function(){
    // Îáúÿâëÿåì ïåðåìåííûå (ôîðìà è êíîïêà îòïðàâêè)
	var form = $(this),
        btn = form.find('.button');
 
    // Äîáàâëÿåì êàæäîìó ïðîâåðÿåìîìó ïîëþ, óêàçàíèå ÷òî ïîëå ïóñòîå
	form.find('.req').addClass('empty_field');
 
    // Ôóíêöèÿ ïðîâåðêè ïîëåé ôîðìû
    function checkInput(){
      form.find('.req').each(function(){
        if($(this).val() != ''){
          // Åñëè ïîëå íå ïóñòîå óäàëÿåì êëàññ-óêàçàíèå
		$(this).removeClass('empty_field');
        } else {
          // Åñëè ïîëå ïóñòîå äîáàâëÿåì êëàññ-óêàçàíèå
		$(this).addClass('empty_field');
        }
      });
    }
 
    // Ôóíêöèÿ ïîäñâåòêè íåçàïîëíåííûõ ïîëåé
    function lightEmpty(){
      form.find('.empty_field').css({'background':'#fdafa4'});
      // ×åðåç ïîëñåêóíäû óäàëÿåì ïîäñâåòêó
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },1500);
    }
 
    // Ïðîâåðêà â ðåæèìå ðåàëüíîãî âðåìåíè
    setInterval(function(){
      // Çàïóñêàåì ôóíêöèþ ïðîâåðêè ïîëåé íà çàïîëíåííîñòü
	  checkInput();
      // Ñ÷èòàåì ê-âî íåçàïîëíåííûõ ïîëåé
      var sizeEmpty = form.find('.empty_field').size();
      // Âåøàåì óñëîâèå-òðèãåð íà êíîïêó îòïðàâêè ôîðìû
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },1500);
 
    // Ñîáûòèå êëèêà ïî êíîïêå îòïðàâèòü
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // ïîäñâå÷èâàåì íåçàïîëíåííûå ïîëÿ è ôîðìó íå îòïðàâëÿåì, åñëè åñòü íåçàïîëíåííûå ïîëÿ
		lightEmpty();
        return false
      } else {
        // Âñå õîðîøî, âñå çàïîëíåíî, îòïðàâëÿåì ôîðìó
        form.submit();
      }
    });
  });
});
 
})( jQuery );