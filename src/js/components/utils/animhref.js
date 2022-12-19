import { isMobile, isTablet, isDesktop } from "../../functions/check-viewport";
import $ from 'jquery';



function animhref() {

  if (isDesktop() || isTablet()) {
    setTimeout(function () {
      return $('html').addClass('page-is-load');
    }, 1);
    $(document).on('click', '[href]', function () {
      if ($(this).attr('target') === '_blank') return;
      var href = $(this).attr('href');
      if (href.includes('#')) return;
      if (href.includes('mailto:')) return ;
      if (href.includes('tel:')) return ;
      $('html').addClass('relocation');
      setTimeout(function () {
        return location.href = href;
      }, 400);
      return false;


    });
  }






}


export default animhref;
