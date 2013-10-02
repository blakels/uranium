(function(b){function n(c,g,i){var f={},e="[data-ur-set='"+g+"']",w="data-ur-"+g+"-component";b(c).find("["+w+"]").each(function(){if(!b(this).data("urCompInit")){var c=b(this).attr("data-ur-id")?b(this):b(this).closest(e);if(c[0]&&!c.data("urInit")){b(this).data("urCompInit",!0);var g=c.attr("data-ur-id");g||(g=F(),c.attr("data-ur-id",g));f[g]=f[g]||{};if(c.is(e))f[g].set=c[0];i?i(f[g],this):(c=b(this).attr(w),f[g][c]=f[g][c]||[],f[g][c].push(this))}}});return f}var F=function(){var b=0;return function(){return++b}}(),
C={toggler:function(c){c=n(c,"toggler");b.each(c,function(c,i){i.button||b.error("no button found for toggler with id="+c);i.content||b.error("no content found for toggler with id="+c);var f=b(i.button).attr("data-ur-state")||"disabled";b(i.button).add(i.content).attr("data-ur-state",f);b(i.button).click(function(f){f.stopPropagation();f=b(i.button).attr("data-ur-state")=="enabled"?"disabled":"enabled";b(i.button).add(i.content).attr("data-ur-state",f)});b(i.set).data("urInit",!0)})},tabs:function(c){var g=
n(c,"tabs",function(c,f){var e=b(f).attr("data-ur-tab-id");c.tabs=c.tabs||{};c.tabs[e]=c.tabs[e]||{};var g=b(f).attr("data-ur-tabs-component");c.tabs[e][g]=c.tabs[e][g]||[];c.tabs[e][g].push(f)});b.each(g,function(c,f){f.closeable=b(f.set).attr("data-ur-closeable")=="true";b.each(f.tabs,function(){var f=b(this.button).attr("data-ur-state")||"disabled";b(this.button).add(this.content).attr("data-ur-state",f)});b.each(f.tabs,function(c,i){b(i.button).click(function(){var c=b(this).attr("data-ur-state")==
"enabled";b.each(f.tabs,function(){b(this.button).add(this.content).attr("data-ur-state","disabled")});(!c||!g.closeable)&&b(i.button).add(i.content).attr("data-ur-state","enabled")})});b(f.set).data("urInit",!0)})},inputClear:function(c){c=n(c,"input-clear");b.each(c,function(c,i){var f=b("<div class='data-ur-input-clear-ex'></div>").hide();b(i.set).append(f);f.bind("ontouchstart"in window?"touchstart":"click",function(){e[0].value="";e[0].focus()}).bind("touchend",function(){e[0].blur()});var e=
b(i.set).find("input");e.bind("focus",function(){e[0].value!=""&&f.show()}).bind("keydown",function(){f.show()}).bind("blur",function(){setTimeout(function(){f.hide()},150)});b(i.set).data("urInit",!0)})},geoCode:function(c){c=n(c,"reverse-geocode",function(c,i){c.elements=c.elements||{};c.elements[b(i).attr("data-ur-reverse-geocode-component")]=i});b.each(c,function(c,i){function f(c,f,g){var e=0,i=null,p=null,o=null;switch(b(c).attr("data-ur-reverse-geocode-component")){case "rg-city":p="locality";
break;case "rg-street":p="street_number";break;case "rg-zip":p="postal_code";break;case "rg-state":p="administrative_area_level_1";break;case "rg-country":p="country"}for(var o=f[0],d=null,k=o.address_components.length,a=0;a<k;a++)for(var j=o.address_components[a].types.length,h=0;h<j;h++)if(d=o.address_components[a].types[h],p==d){switch(d){case "street_number":e=a;i=a+1;break;case "locality":e=a;break;case "postal_code":e=a;break;case "administrative_area_level_1":e=a;break;case "country":e=a}break}if(g===
"input")c.value=i===null?f[0].address_components[e].long_name:f[0].address_components[e].long_name+" "+f[0].address_components[i].long_name;else if(g==="select"){f=f[0].address_components[e];g=0;for(e=c.length;g<e;g++)if(c[g].value===f.long_name||c[g].value.toUpperCase()===f.short_name)c.selectedIndex=g}}var e=this.set;b(e).attr("data-ur-callback");var w=b(e).attr("data-ur-error-callback"),n,u,B;this.setup_callbacks=function(){B=this;var c=b(this.elements).filter("[data-ur-reverse-geocode-component='rg-button']");
c.length>0?b(c).bind("click",function(b){return function(){b.geocodeInit()}}(this)):(console.warn("no button for triggering reverse geocoding present"),this.geocodeInit())};this.geoSuccess=function(b){b={lat:b.coords.latitude,lng:b.coords.longitude};this.codeLatLng(b.lat,b.lng)};this.geoError=function(b){console.error("Ur geolocation error -- Error Getting Your Coordinates!");switch(b.code){case b.TIMEOUT:console.error("Ur geolocation error -- Timeout");break;case b.POSITION_UNAVAILABLE:console.error("Ur geolocation error -- Position unavailable");
break;case b.PERMISSION_DENIED:console.error("Ur geolocation error -- Permission denied");break;case b.UNKNOWN_ERROR:console.error("Ur geolocation error -- Unknown error")}w!==void 0&&eval(w)};this.geoDenied=function(){console.error("Ur geolocation error -- User Denied Geolocation")};this.codeLatLng=function(b,c){var e=new google.maps.LatLng(b,c),g=this;n.geocode({latLng:e},function(b,c){if(c==google.maps.GeocoderStatus.OK)if(b[1]){u=b;var e=B.elements;for(elm in e)e[elm].localName==="input"?f(e[elm],
u,"input"):e[elm].localName==="select"&&f(e[elm],u,"select");g.callback!==void 0&&eval(g.callback);return b}else console.error("Geocoder failed due to: "+c)})};this.geocodeInit=function(){navigator.geolocation&&(n=new google.maps.Geocoder,navigator.geolocation.getCurrentPosition(function(b){return function(c){b.geoSuccess(c)}}(this),function(b){return function(c){b.geoError(c)}}(this),this.geoDenied))};UrGeocode=function(b){return function(){b.setup_callbacks()}}(this);e=document.createElement("script");
e.type="text/javascript";e.src="https://maps.googleapis.com/maps/api/js?sensor=true&callback=UrGeocode";b("head").append(e);b(i.set).data("urInit",!0)})},zoom:function(c){function g(b,c){return Math.max(Math.min(c[0],b),c[1])}function i(c){function e(){d.canvasWidth=d.canvasWidth||d.container.offsetWidth;d.canvasHeight=d.canvasHeight||d.container.offsetHeight;d.width=d.width||parseInt(k.attr("width"))||parseInt(k.css("width"))||d.img.width;d.height=d.height||parseInt(k.attr("height"))||parseInt(k.css("height"))||
d.img.height;d.bigWidth=parseInt(k.attr("data-ur-width"))||d.img.naturalWidth;d.bigHeight=parseInt(k.attr("data-ur-height"))||d.img.naturalHeight;if(k.attr("data-ur-width")&&k.attr("data-ur-height")||k.attr("src")==k.attr("data-ur-src"))d.prescale=!0;d.ratio=d.bigWidth/d.width;h=(d.canvasWidth-d.bigWidth)/2;l=(d.canvasHeight-d.bigHeight)/2}function i(a){if(a.target==d.img){x=!1;r=a.pageX;s=a.pageY;m=!0;var b=a.originalEvent.touches;if(b)r=b[0].pageX,s=b[0].pageY;b=d.img.style;window.WebKitCSSMatrix?
(b=new WebKitCSSMatrix(b.webkitTransform),v=b.m41,y=b.m42):(b=b.MozTransform||b.msTransform||b.transform||"translate(0, 0)",b=b.replace(/.*?\(|\)/,"").split(","),v=parseInt(b[0]),y=parseInt(b[1]));a.preventDefault();a.stopPropagation()}}function n(a){if(m&&a.target==d.img){a.preventDefault();a.stopPropagation();var b=a.pageX,c=a.pageY;if(a=a.originalEvent.touches)b=a[0].pageX,c=a[0].pageY;b-=r;c-=s;if(Math.abs(b)>5||Math.abs(c)>5)x=!0;b=g(v+b,[-h,h]);c=g(y+c,[-l,l]);o(b,c,d.ratio)}}function D(a){x||
d.zoomOut();a.preventDefault();a.stopPropagation();m=!1;x=!0}function A(){if(d.state=="enabled-in"){k.css({webkitTransitionDelay:"",MozTransitionDelay:"",OTransitionDelay:"",transitionDelay:""});d.img.src=k.attr("data-ur-src");f.indexOf(d.img.getAttribute("data-ur-src"))==-1&&setTimeout(function(){f.indexOf(d.img.getAttribute("data-ur-src"))==-1&&a.attr("data-ur-state","enabled")},16);d.state="enabled";d.container.setAttribute("data-ur-state",d.state);var c="ontouchstart"in window,e=b(d.container);
e.on(c?"touchstart":"mousedown",i);e.on(c?"touchmove":"mousemove",n);e.on(c?"touchend":"mouseup",D)}else if(d.state=="enabled-out")d.state="disabled",d.container.setAttribute("data-ur-state",d.state),c="ontouchstart"in window,e=b(d.container),e.unbind(c?"touchstart":"mousedown",i),e.unbind(c?"touchmove":"mousemove",n),e.unbind(c?"touchend":"mouseup",D)}function p(a,b){j.attr("data-ur-state","enabled");d.state="enabled-in";d.container.setAttribute("data-ur-state",d.state);o(a?a:0,b?b:0,d.ratio)}function o(a,
b,d){var z="";a!=void 0&&(z=I+a+"px, "+b+"px"+u);d!=void 0&&(z+=w?" scale("+d+")":" scale3d("+d+", "+d+", 1)");return k.css({webkitTransform:z,MozTransform:z,msTransform:z,transform:z})}var d=this;this.container=c.set;this.img=c.img[0];this.prescale=!1;this.canvasWidth=this.canvasHeight=this.bigWidth=this.bigHeight=this.width=this.height=0;this.ratio=1;this.state="disabled";this.button=c.button;this.idler=c.loading;var k=b(this.img),a=b(this.idler),j=b(this.button),h,l,t,q,v=0,y=0,r=0,s=0,m=!1,x=
!0;f.push(k.attr("src"));this.zoomIn=function(b){if(d.state=="disabled"){if(!d.width)e(),d.img.style.width=d.width+"px",d.img.style.height=d.height+"px";var c=b.pageX,f=b.pageY;if(b.touches)c=b.touches[0].pageX,f=b.touches[0].pageY;t=b.offsetX;q=b.offsetY;if(t==void 0||q==void 0)b=d.img.getBoundingClientRect(),t=c-b.left,q=f-b.top;d.prescale?(c=g(d.bigWidth/2-d.ratio*t,[-h,h]),f=g(d.bigHeight/2-d.ratio*q,[-l,l]),p(c,f)):(d.state="enabled-in",d.img.src=k.attr("data-ur-src"),setTimeout(function(){d.prescale||
a.attr("data-ur-state","enabled")},0))}};this.zoomOut=function(){if(d.state=="enabled")j.attr("data-ur-state","disabled"),d.state="enabled-out",d.container.setAttribute("data-ur-state",d.state),o(0,0,1)};d.container.getAttribute("data-ur-touch")!="disabled"&&b(d.container).click(d.zoomIn);k.load(function(){k.attr("src")==k.attr("data-ur-src")&&f.push(k.attr("src"));a.attr("data-ur-state","disabled");if(!d.prescale&&d.state=="enabled-in"){d.prescale=!0;e();var b=g(d.bigWidth/2-d.ratio*t,[-h,h]),c=
g(d.bigHeight/2-d.ratio*q,[-l,l]);k.css({webkitTransitionDelay:"0.3s",MozTransitionDelay:"0.3s",OTransitionDelay:"0.3s",transitionDelay:"0.3s"});p(b,c)}});this.zoom=function(){if(d.state=="disabled"){if(!d.width)e(),d.img.style.width=d.width+"px",d.img.style.height=d.height+"px";d.prescale?p(0,0):(d.state="enabled-in",d.img.src=k.attr("data-ur-src"),setTimeout(function(){f.indexOf(d.img.getAttribute("data-ur-src"))==-1&&a.attr("data-ur-state","enabled")},0))}else d.zoomOut()};b(d.button).click(d.zoom);
b.each(["webkitTransitionEnd","transitionend","oTransitionEnd"],function(a,b){k.on(b,A)});this.reset=function(){d.prescale=!1;d.width=d.height=0;k.css({width:"",height:""});o();d.state="enabled-out";A();a.attr("data-ur-state","disabled");j.attr("data-ur-state","disabled")}}var c=n(c,"zoom"),f=[],e=/Android [12]|Opera/.test(navigator.userAgent),w=e,I=e?"translate(":"translate3d(",u=e?")":", 0)";b.each(c,function(c,f){Uranium.zoom[c]=new i(this);b(f.set).data("urInit",!0)})},carousel:function(c){function g(b){b.preventDefault();
b.stopPropagation()}function i(c){function e(){var a=b("<a>").css({webkitTransform:"translate3d(0, 0, 0)",MozTransform:"translate3d(0, 0, 0)",msTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)"}),c=a.css("webkitTransform"),d=a.css("MozTransform"),e=a.css("msTransform"),a=a.css("transform");return c!="none"&&c||d!="none"&&d||e!="none"&&e||a!="none"&&a}function i(){var b=/Android [12]/.test(navigator.userAgent),c=/iP(hone|od) OS 6/.test(navigator.userAgent);if(b&&j.attr("data-ur-android3d")!=
"enabled"||c)if(a.options.transform3d=!1,b)b=parseFloat(j.attr("data-ur-speed")),a.options.speed=b>1?b:1.3;j.attr("data-ur-speed",a.options.speed);a.options.verticalScroll=j.attr("data-ur-vertical-scroll")!="disabled";j.attr("data-ur-vertical-scroll",a.options.verticalScroll?"enabled":"disabled");a.options.touch=j.attr("data-ur-touch")!="disabled";j.attr("data-ur-touch",a.options.touch?"enabled":"disabled");a.options.infinite=j.attr("data-ur-infinite")!="disabled"&&a.items.length>1;j.attr("data-ur-infinite",
a.options.infinite?"enabled":"disabled");a.options.center=j.attr("data-ur-center")=="enabled";j.attr("data-ur-center",a.options.center?"enabled":"disabled");b=parseInt(j.attr("data-ur-fill"));if(b>0)a.options.fill=b;j.attr("data-ur-fill",a.options.fill);b=parseInt(j.attr("data-ur-clones"));if(!isNaN(b))a.options.cloneLength=b;j.attr("data-ur-clones",a.options.cloneLength);a.options.autoscroll=j.attr("data-ur-autoscroll")=="enabled";j.attr("data-ur-autoscroll",a.options.autoscroll?"enabled":"disabled");
b=parseInt(j.attr("data-ur-autoscroll-delay"));if(b>=0)a.options.autoscrollDelay=b;j.attr("data-ur-autoscroll-delay",a.options.autoscrollDelay);a.options.autoscrollForward=j.attr("data-ur-autoscroll-dir")!="prev";j.attr("data-ur-autoscroll-dir",a.options.autoscrollForward?"next":"prev")}function n(){if(a.options.infinite){if(a.options.fill)a.options.cloneLength=a.options.fill;else{for(var b=j.width(),c=0,d=0,e=0;b>0;)b-=h.eq(e).outerWidth(!0),c++,e=(e+1)%h.length;b=j.width();for(e=h.length-1;b>0;)b-=
h.eq(e).outerWidth(!0),d++,e--,e==-1&&(e=h.length-1);a.options.cloneLength=Math.max(a.options.cloneLength,c,d)}j.attr("data-ur-clones",a.options.cloneLength);for(e=0;e<a.options.cloneLength;e++)b=e%h.length,c=h.eq(b).clone(!0).attr("data-ur-clone",b).attr("data-ur-state","inactive"),h.parent().append(c);b=h.length;for(e=0;e<a.options.cloneLength;e++)--b==-1&&(b=h.length-1),c=h.eq(b).clone(!0).attr("data-ur-clone",b).attr("data-ur-state","inactive"),h.parent().prepend(c);m=h.length-1}else a.options.cloneLength=
0}function u(){if(a.dots){var c=b(a.dots).find("[data-ur-carousel-component='dot']");if(c.length!=a.count){c.remove();for(var c=b("<div data-ur-carousel-component='dot'>"),d=document.createDocumentFragment(),e=0;e<a.count;e++){var f=c.clone().attr("data-ur-state",e==a.itemIndex?"active":"inactive");d.appendChild(f[0])}b(a.dots).append(d)}}}function B(a){var b=a.originalEvent.touches;return b&&b.length>0?{x:b[0].clientX,y:b[0].clientY}:{x:a.clientX,y:a.clientY}}function C(c){if(c!==void 0){a.itemIndex=
c;if(a.itemIndex<0)a.itemIndex=0;else if(a.itemIndex>m)a.itemIndex=m;c=a.itemIndex;a.options.infinite&&(c=(a.count+a.itemIndex-a.options.cloneLength)%a.count);b(a.counter).html(c+1+" of "+a.count);h.attr("data-ur-state","inactive");h.eq(a.itemIndex).attr("data-ur-state","active");b(a.dots).find("[data-ur-carousel-component='dot']").attr("data-ur-state","inactive").eq(c).attr("data-ur-state","active");a.options.infinite?(b(a.button.prev).attr("data-ur-state","enabled"),b(a.button.next).attr("data-ur-state",
"enabled")):(b(a.button.prev).attr("data-ur-state",a.itemIndex==0?"disabled":"enabled"),b(a.button.next).attr("data-ur-state",a.itemIndex==a.count-Math.max(a.options.fill,1)?"disabled":"enabled"))}}function F(b){a.options.verticalScroll||g(b);a.autoscrollStop();a.flag.touched=!0;a.flag.lock=null;a.flag.loop=!1;a.flag.click=!0;q=v=t=l=B(b);E=a.translate}function J(b){if(a.flag.touched){t=l;l=B(b);if(Math.abs(q.y-l.y)+Math.abs(q.x-l.x)>0)a.flag.click=!1;if("ontouchstart"in window&&a.options.verticalScroll){var c=
Math.abs((q.y-l.y)/(q.x-l.x));if(a.flag.lock){if(a.flag.lock=="y")return}else if(c>1.2){a.flag.lock="y";return}else if(c<=1.2)a.flag.lock="x";else return}g(b);if(l!==null){v=l;var e=E+(v===void 0?0:v.x-q.x);h.each(function(b,c){var d=c.offsetLeft;a.options.center&&(d-=(a.container.offsetWidth-c.offsetWidth)/2);if(d+c.offsetWidth>-e)return a.itemIndex=b,y=-(d+e)/c.offsetWidth,!1});if(a.options.infinite)if(b=h[m].offsetLeft+h[m].offsetWidth-a.container.offsetWidth,e>0)b=h[a.count],b=b.offsetLeft-h[0].offsetLeft,
E-=b,e-=b,a.flag.loop=!a.flag.loop;else if(b<-e)b=h[m-a.count],b=b.offsetLeft-h[m].offsetLeft,E-=b,e-=b,a.flag.loop=!a.flag.loop;d(e)}}}function D(b){if(a.flag.touched){if(!a.flag.click||a.flag.lock)g(b);else if(b.target.tagName=="AREA")location.href=b.target.href;a.flag.touched=!1;a.flag.forwardDir=l.x-t.x<0;A(a.flag.forwardDir?-1:0)}}function A(b){a.autoscrollStop();var c=a.itemIndex-b,c=Math.max(c,0),c=!a.options.infinite&&a.options.fill>0?Math.min(a.count-a.options.fill,c):Math.min(m,c);if(a.options.infinite){var e=
a.translate,f=h[a.options.cloneLength].offsetLeft-h[a.count+a.options.cloneLength].offsetLeft;if(c<a.options.cloneLength)d(e+f),c+=a.count,a.itemIndex=c+b;else if(c>=a.count+a.options.cloneLength)d(e-f),c-=a.count,a.itemIndex=c+b}r=h[c];j.trigger("slidestart",{index:c});setTimeout(function(){p();C(c)},0)}function p(){function b(){if(!a.flag.touched){var c=a.translate,e=s-c;e-=e/a.options.speed>=0?Math.floor(e/a.options.speed):Math.ceil(e/a.options.speed);Math.abs(e)<0.01&&(e=0);d(c+e);a.flag.snapping=
e!=0;a.flag.snapping?setTimeout(b,16):(a.autoscrollStart(),j.trigger("slideend",{index:a.itemIndex}))}}s=-r.offsetLeft;a.options.center&&(s+=k(r));b()}function o(b){a.flag.snapping||A(b)}function d(c){a.translate=c;c=G+c+"px, 0px"+H;b(a.scroller).css({webkitTransform:c,MozTransform:c,msTransform:c,transform:c})}function k(a){return Math.floor((j.width()-b(a).outerWidth(!0))/2)}var a=this;a.container=c.set;a.scroller=c.scroll_container;a.scroller||b.error("carousel missing item components");a.items=
c.item;a.button={prev:b(c.button).filter("[data-ur-carousel-button-type='prev']"),next:b(c.button).filter("[data-ur-carousel-button-type='next']")};a.counter=c.count;a.dots=c.dots;a.flag={click:!1,snapping:!1,loop:!1,lock:null,timeoutId:null,touched:!1};a.options={autoscroll:!0,autoscrollDelay:5E3,autoscrollForward:!0,center:!0,cloneLength:1,fill:0,infinite:!0,speed:1.1,transform3d:!0,touch:!0,verticalScroll:!0};a.count=a.items.length;a.itemIndex=0;a.translate=0;var j=b(a.container),h=b(a.items),
l=null,t,q={x:0,y:0},v={x:0,y:0},y=0,r=h[0],s,m=a.count-1,x=0,E=null,G="translate3d(",H=", 0px)";this.update=function(){var c=h.length;h=b(a.scroller).find("[data-ur-carousel-component='item']");if(c!=h.length){a.items=h.filter(":not([data-ur-clone])").toArray();a.count=a.items.length;m=h.length-1;h.each(function(c,d){if(b(d).attr("data-ur-state")=="active")return a.itemIndex=c,!1});if(a.itemIndex>=h.length)a.itemIndex=m,h.eq(a.itemIndex).attr("data-ur-state","active");b.contains(a.scroller,r)||(r=
h[a.itemIndex]);u()}x=j.width();var c=0,e=[];if(a.options.fill>0)for(var f=x,g=a.options.fill;g>0;g--){var i=Math.round(f/g);e.push(i);f-=i}for(g=0;g<h.length;g++)a.options.fill>0?(i=e[g%a.options.fill],h.eq(g).width(i),c+=i):c+=h[g].offsetWidth;b(a.scroller).width(c);c=h[a.itemIndex];e=b(c).outerWidth(!0);e=-(c.offsetLeft+y*e);s=-r.offsetLeft;a.options.center&&(e+=k(c),s+=k(r));d(e)};this.autoscrollStart=function(){if(a.options.autoscroll)a.flag.timeoutId=setTimeout(function(){a.container.offsetWidth!=
0?!a.options.infinite&&a.itemIndex==m&&a.options.autoscrollForward?a.jumpToIndex(0):!a.options.infinite&&a.itemIndex==0&&!a.options.autoscrollForward?a.jumpToIndex(m):o(a.options.autoscrollForward?-1:1):a.autoscrollStart()},a.options.autoscrollDelay)};this.autoscrollStop=function(){clearTimeout(a.flag.timeoutId)};this.jumpToIndex=function(b){o(a.itemIndex-b)};(function(){i();a.options.transform3d=a.options.transform3d&&e();a.options.transform3d||(G="translate(",H=")");h.each(function(c,d){if(b(d).attr("data-ur-state")==
"active")return a.itemIndex=c,!1});n();C(a.itemIndex);u();a.update();b(a.scroller).on("dragstart",function(){return!1});if(a.options.touch){var c="ontouchstart"in window;b(a.scroller).on(c?"touchstart":"mousedown",F).on(c?"touchmove":"mousemove",J).on(c?"touchend":"mouseup",D);b(a.scroller).click(function(b){a.flag.click||g(b)})}a.button.prev.click(function(){o(1)});a.button.next.click(function(){o(-1)});b(window).on("orientationchange",a.update);b(window).on("resize",function(){a.update();setTimeout(a.update,
100)});b(window).load(function(){a.update();h.find("img").addBack("img").load(a.update)});a.autoscrollStart()})()}c=n(c,"carousel");b.each(c,function(c,e){b(e.buttons).each(function(){var e=b(this).attr("data-ur-carousel-button-type");e||b.error("malformed carousel button type for carousel with id: "+c+".");b(this).attr("data-ur-state",e=="prev"?"disabled":"enabled")});Uranium.carousel[c]=new i(e);b(e.set).data("urInit",!0);b(e.set).attr("data-ur-state","enabled")})}};Uranium={};b.each(C,function(b){Uranium[b]=
{}});b.fn.Uranium=function(){var c=this;b.each(C,function(){this(c)});return this};b(document).ready(function(){b("body").Uranium()})})(jQuery);
