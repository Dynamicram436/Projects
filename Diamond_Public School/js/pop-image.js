var zz_custom_myWidth;
var zz_custom_myHeight;
var zz_custom_expHeight = 600;
var zz_custom_expWidth = 600;
var zz_is_ad_closed = false;
function zz_custom_changeSize() {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0];
  zz_custom_myWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  zz_custom_myHeight = w.innerHeight || e.clientHeight || g.clientHeight;
}
function zz_custom_wad_obmg(f) {
  var s = f ? "block" : "none";
  var p = document.getElementsByTagName("embed");
  for (i = 0; i < p.length; i++) {
    p[i].style.display = s;
  }
  p = document.getElementsByTagName("object");
  for (i = 0; i < p.length; i++) {
    p[i].style.display = s;
  }
}
function zz_custom_wad_doboxes(f) {
  if (!zz_is_ad_closed) {
    zz_custom_changeSize();
    if (f == undefined) {
      f = true;
    }
    var s = f ? "block" : "none";
    var bs = document.getElementById("zz_custom_overlay");
    var wb = document.getElementById("zz_custom_ol_content");
    if (f) {
      if (navigator.appName == "Microsoft Internet Explorer") {
        wb.style.position = "absolute";
        bs.style.position = "absolute";
        wb.style.top = "0px";
        wb.style.left = "0px";
      }
      bs.style.width = zz_custom_myWidth + "px";
      bs.style.height = zz_custom_myHeight + "px";
      wb.style.top = (zz_custom_myHeight - zz_custom_expHeight) / 2 + "px";
      wb.style.left = (zz_custom_myWidth - zz_custom_expWidth) / 2 + "px";
    }
    bs.style.display = s;
    wb.style.display = s;
  }
}
function zz_custom_lb_go() {
  zz_custom_wad_off();
  window.location.href = lb_url;
}
function zz_custom_scrollfix() {
  var sx = window.pageXOffset
    ? window.pageXOffset
    : document.documentElement.scrollLeft
    ? document.documentElement.scrollLeft
    : document.body.scrollLeft;
  var sy = window.pageYOffset
    ? window.pageYOffset
    : document.documentElement.scrollTop
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
  var bs = document.getElementById("zz_custom_overlay");
  var wb = document.getElementById("zz_custom_ol_content");
  bs.style.top = sy + "px";
  wb.style.top = sy + (zz_custom_myHeight - zz_custom_expHeight) / 2 + "px";
  bs.style.left = sx + "px";
  wb.style.left = sx + (zz_custom_myWidth - zz_custom_expWidth) / 2 + "px";
}
function zz_custom_wad_off() {
  window.onscroll = null;
  zz_custom_wad_doboxes(false);
  zz_custom_wad_obmg(true);
  zz_is_ad_closed = true;
}
function zz_custom_wad_display() {
  zz_custom_wad_doboxes(true);
  zz_custom_wad_obmg(true);
  if (navigator.appName == "Microsoft Internet Explorer")
    window.onscroll = zz_custom_scrollfix;
  setTimeout(zz_custom_wad_off, 15000);
}

//window.onresize = zz_custom_wad_doboxes;zz_custom_wad_display();

window.onload = zz_custom_wad_doboxes;
zz_custom_wad_display();
