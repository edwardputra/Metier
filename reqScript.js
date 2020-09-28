$(document).ready(function() {
  var owl = $("#owl-slide");
  owl.owlCarousel({
    navigation : true,
    autoPlay : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : false,
    items : 1,
    itemsDesktop : [1260,1],
    itemsDesktopSmall : [1024,1],
    itemsTablet : [1023,1],
    itemsTabletSmall : [767,1],
    itemsMobile : [639,1],
    loop : true
  });

  // Custom Navigation Events
  $(".nextcustom").click(function(){
    owl.trigger('owl.next');
  })
  $(".prevcustom").click(function(){
    owl.trigger('owl.prev');
  })
});