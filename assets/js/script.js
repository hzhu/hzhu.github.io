function getViewportHeight(){
  var height = window.innerHeight;
  var mode = document.compatMode;
  if ((mode || !$.support.boxModel)){
    height = (mode == 'CSS1Compat') ? document.documentElement.clientHeight : document.body.clientHeight;
  }
  return height;
}
