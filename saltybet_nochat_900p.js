document.styleSheets[3].insertRule("#stream{max-width:65%!important;max-height:65%!important;}");

document.styleSheets[3].insertRule("#chat-wrapper{visibility:hidden!important;height:0px!important;width:0px!important;}");

document.styleSheets[3].insertRule("#sbettorswrapper{width:35%!important;max-height:65%!important;float:left!important;z-index:1000;}");

document.styleSheets[3].insertRule("#bottomcontent,#footer{width:100%!important;}");

window.dispatchEvent(new Event('resize'));