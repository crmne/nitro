/* bootstrap-tab.js v2.0.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * Copyright 2012 Twitter, Inc.
 * Licensed under the Apache License, Version 2.0
 */
!function(c){var d=function(a){this.element=c(a)};d.prototype={constructor:d,show:function(){var a=this.element,e=a.closest("ul:not(.dropdown-menu)"),b=a.attr("data-target"),f;b||(b=(b=a.attr("href"))&&b.replace(/.*(?=#[^\s]*$)/,""));a.parent("li").hasClass("active")||(f=e.find(".active a").last()[0],a.trigger({type:"show",relatedTarget:f}),b=c(b),this.activate(a.parent("li"),e),this.activate(b,b.parent(),function(){a.trigger({type:"shown",relatedTarget:f})}))},activate:function(a,e,b){function f(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
a.addClass("active");g?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade");a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active");b&&b()}var d=e.find("> .active"),g=b&&c.support.transition&&d.hasClass("fade");g?d.one(c.support.transition.end,f):f();d.removeClass("in")}};c.fn.tab=function(a){return this.each(function(){var e=c(this),b=e.data("tab");b||e.data("tab",b=new d(this));if("string"==typeof a)b[a]()})};c.fn.tab.Constructor=d;c(function(){c("body").on("click.tab.data-api",
'[data-toggle="tab"], [data-toggle="pill"]',function(a){a.preventDefault();c(this).tab("show")})})}(window.jQuery);