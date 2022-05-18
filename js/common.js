$(function(){
  function splitLocation(el){
    let href = el.attr("href").split("/");
    href = href[href.length-1].split(".");
    href = href[0];
    return href;
  }

  let currentHref = splitLocation($(location));

  $("#lnb a").each(function(){
    if( splitLocation($(this)) == currentHref ) {
      $(this).addClass("on");
    }
  });
});
