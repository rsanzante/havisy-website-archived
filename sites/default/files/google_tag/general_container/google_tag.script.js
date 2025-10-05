(function ($, Drupal) {
  loadScript();
  $(document).on('eu_cookie_compliance.changeStatus', function (ev) {
    loadScript();
  });
  function loadScript(){
    if (Drupal.eu_cookie_compliance && Drupal.eu_cookie_compliance.hasAgreedWithCategory("analytics")) {
      console.log('Loaded analytics script');
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0];var j=d.createElement(s);var dl=l!='dataLayer'?'&l='+l:'';j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'';j.async=true;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KM797QB');
    };
  }
}(jQuery, Drupal));