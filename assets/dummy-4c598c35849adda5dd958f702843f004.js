"use strict";define("dummy/app",["exports","ember","ember-resolver","ember/load-initializers","dummy/config/environment"],function(e,t,r,a,n){t["default"].MODEL_FACTORY_INJECTIONS=!0;var i=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:r["default"]});(0,a["default"])(i,n["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,r){var a=r["default"].APP.name,n=r["default"].APP.version;e["default"]=t["default"].extend({version:n,name:a})}),define("dummy/controllers/application",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({tour:t["default"].inject.service(),actions:{toggleHelpModal:function(){this.get("tour").set("modal",!0),this.get("tour").start()},toggleHelpNonmodal:function(){this.get("tour").set("modal",!1),this.get("tour").start()}}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,r){e["default"]={name:"App Version",initialize:(0,t["default"])(r["default"].APP.name,r["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,r){function a(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var a,n=r["default"].exportApplicationGlobal;a="string"==typeof n?n:t["default"].String.classify(r["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,r){var a=t["default"].Router.extend({location:r["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/routes/application",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({initialModalValue:!0,tour:t["default"].inject.service(),defaults:{classes:"shepherd-element shepherd-open shepherd-theme-arrows",scrollTo:!1,showCancelLink:!0},initialSteps:[{id:"intro",options:{attachTo:".first-element bottom",builtInButtons:[{classes:"shepherd-button-secondary cancel-button",text:"Exit",type:"cancel"},{classes:"shepherd-button-primary next-button",text:"Next",type:"next"}],classes:"shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",copyStyles:!1,title:"Welcome to Ember-Shepherd!",text:['Ember-Shepherd is a javascript library for guiding users through your Ember app. It is an Ember addon that wraps <a href="https://github.com/HubSpot/shepherd">Shepherd</a> and extends its functionality. Shepherd uses <a href="http://github.hubspot.com/tether/">Tether</a>, another open source library, to position all of its steps.',"Tether makes sure your steps never end up off screen or cropped by an overflow. Try resizing your browser to see what we mean."]}},{id:"installation",options:{attachTo:".install-element bottom",builtInButtons:[{classes:"shepherd-button-secondary cancel-button",text:"Exit",type:"cancel"},{classes:"shepherd-button-primary back-button",text:"Back",type:"back"},{classes:"shepherd-button-primary next-button",text:"Next",type:"next"}],classes:"shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",copyStyles:!1,text:["Installation is simple, if you are using Ember-CLI, just install like any other addon."]}},{id:"usage",options:{attachTo:".usage-element bottom",builtInButtons:[{classes:"shepherd-button-secondary cancel-button",text:"Exit",type:"cancel"},{classes:"shepherd-button-primary back-button",text:"Back",type:"back"},{classes:"shepherd-button-primary next-button",text:"Next",type:"next"}],classes:"shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",copyStyles:!1,text:["The tour service is injected into all routes and controllers, so simply use it like this example."]}},{id:"modal",options:{attachTo:{element:".modal-element",on:"top"},builtInButtons:[{classes:"shepherd-button-secondary cancel-button",text:"Exit",type:"cancel"},{classes:"shepherd-button-primary back-button",text:"Back",type:"back"},{classes:"shepherd-button-primary next-button",text:"Next",type:"next"}],classes:"shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",copyStyles:!1,text:["We implemented true modal functionality by disabling clicking of the rest of the page. If you would like to enable modal, simply do this.get('tour').set('modal', true)."]}},{id:"copyStyle",options:{attachTo:{element:".style-copy-element",on:"top"},builtInButtons:[{classes:"shepherd-button-secondary cancel-button",text:"Exit",type:"cancel"},{classes:"shepherd-button-primary back-button",text:"Back",type:"back"},{classes:"shepherd-button-primary next-button",text:"Next",type:"next"}],classes:"shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",copyStyles:!1,text:["When using a modal, most times just setting the z-index of your element to something high will make it highlight. For complicated cases, where this does not work, we implemented a copyStyles option that clones the element and copies its computed styles."]}},{id:"builtInButtons",options:{attachTo:".built-in-buttons-element top",builtInButtons:[{classes:"shepherd-button-secondary cancel-button",text:"Exit",type:"cancel"},{classes:"shepherd-button-primary back-button",text:"Back",type:"back"},{classes:"shepherd-button-primary next-button",text:"Next",type:"next"}],classes:"shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",copyStyles:!1,text:["For the common button types, next, back, cancel, etc, we implemented Ember actions that perform these actions on your tour automatically. To use them, simply include in the builtInButtons array in each step."]}},{id:"disableScroll",options:{attachTo:".disable-scroll-element top",builtInButtons:[{classes:"shepherd-button-secondary cancel-button",text:"Exit",type:"cancel"},{classes:"shepherd-button-primary back-button",text:"Back",type:"back"},{classes:"shepherd-button-primary next-button",text:"Next",type:"next"}],classes:"shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",copyStyles:!1,text:["When navigating the user through a tour, you may want to disable scrolling, so they cannot mess up your carefully planned out, amazing tour. This is now easily achieved with this.get('tour').set('disableScroll', true). Try scrolling right now, then exit the tour and see that you can again!"]}},{id:"noAttachTo",options:{builtInButtons:[{classes:"shepherd-button-secondary cancel-button",text:"Exit",type:"cancel"},{classes:"shepherd-button-primary back-button",text:"Back",type:"back"}],classes:"shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",copyStyles:!1,text:["If no attachTo is specified, the modal will appear in the center of the screen, as per the Shepherd docs."]}}],setupController:function(e,t){var r=this.get("tour");r.set("defaults",this.get("defaults")),r.set("steps",this.get("initialSteps")),r.set("requiredElements",[{selector:".first-element",message:"First element not found",title:"Error"},{selector:".install-element",message:"Install element not found",title:"Error"}]),r.set("disableScroll",!0),r.set("modal",this.get("initialModalValue")),r.on("cancel",function(){console.log("cancel")})}})}),define("dummy/services/tour",["exports","ember-shepherd/services/tour"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:129,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div");e.setAttribute(r,"class","row");var a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","medium-8 columns medium-centered text-center");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h1");e.setAttribute(n,"class","pageTitle");var i=e.createTextNode("Ember-Shepherd");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","medium-8 columns medium-centered text-center first-element");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h4"),i=e.createTextNode("Guide your users through a tour of your app.");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","medium-8 columns medium-centered text-center install-element");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h5"),i=e.createTextNode("Installation");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("pre"),i=e.createElement("code");e.setAttribute(i,"class","language-bash");var s=e.createTextNode("ember install ember-shepherd");e.appendChild(i,s),e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","medium-8 columns medium-centered text-center usage-element");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h5"),i=e.createTextNode("Usage");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("pre"),i=e.createElement("code");e.setAttribute(i,"class","language-javascript");var s=e.createTextNode("\nlet tour = this.get('tour');\ntour.set('defaults', shepherdDefaults);\ntour.set('disableScroll', true);\ntour.set('modal', true);\ntour.set('requiredElements', requiredElements);\ntour.set('steps', steps);\n\n// Methods to control the tour\ntour.start();\ntour.next();\ntour.back();\ntour.cancel();");e.appendChild(i,s),e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","medium-8 columns medium-centered text-center usage-element");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h5"),i=e.createTextNode("Additional Features");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","medium-3 columns panel modal-element");var i=e.createTextNode("\n      Modal\n    ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","medium-3 columns panel style-copy-element");var i=e.createTextNode("\n      Style Copy\n    ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","medium-3 columns panel built-in-buttons-element");var i=e.createTextNode("\n      Built-in Buttons\n    ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","medium-3 columns panel disable-scroll-element");var i=e.createTextNode("\n      Disable Scroll\n    ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","medium-8 columns medium-centered text-center");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","javascript:void(0)"),e.setAttribute(n,"class","bottomButton toggleHelpModal");var i=e.createTextNode("Modal Demo");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","javascript:void(0)"),e.setAttribute(n,"class","bottomButton toggleHelpNonmodal");var i=e.createTextNode("Non-modal");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","javascript:void(0)"),e.setAttribute(n,"class","bottomButton"),e.setAttribute(n,"href","https://github.com/rwwagner90/ember-shepherd/blob/master/README.md");var i=e.createTextNode("Docs");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","javascript:void(0)"),e.setAttribute(n,"class","bottomButton"),e.setAttribute(n,"href","https://github.com/rwwagner90/ember-shepherd");var i=e.createTextNode("Github");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var a=e.createTextNode("\n  ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","medium-8 columns medium-centered text-center");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/HubSpot/shepherd");var i=e.createTextNode("\n      ");e.appendChild(n,i),e.setNamespace("http://www.w3.org/2000/svg");var i=e.createElement("svg");e.setAttribute(i,"xmlns","http://www.w3.org/2000/svg"),e.setAttribute(i,"version","1.0"),e.setAttribute(i,"style","height: 330px; width: 330px; max-width: 80%;"),e.setAttribute(i,"viewBox","0 0 128 128");var s=e.createTextNode("\n        ");e.appendChild(i,s);var s=e.createElement("g"),o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"style","fill:#ffffff;fill-rule:evenodd;stroke:#ffffff;stroke-width:5.87337351;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"),e.setAttribute(o,"d","m 64.476602,12.02253 c -1.746998,0 -3.347433,0.657731 -4.649754,1.804839 -0.822661,-0.722292 -1.879102,-1.162439 -3.059049,-1.162439 -2.579308,0 -4.680346,2.101041 -4.680345,4.680345 0,0.187347 -0.02147,0.369024 0,0.550629 -0.671413,0.140434 -1.318206,0.35031 -1.957791,0.611809 -1.679568,-2.107155 -4.038671,-3.395544 -6.668726,-3.395544 -4.759401,0 -8.693202,4.304309 -9.177146,9.819547 -2.194415,1.167023 -3.701449,3.775777 -3.701449,6.821679 1e-6,3.50355 2.01045,6.468126 4.741525,7.280536 0.249727,0.722247 0.594366,1.367255 0.978896,1.988381 -4.821807,0.890347 -9.691708,2.858651 -14.132805,5.934555 -6.564517,4.546581 -16.0963443,12.398745 -17.0694924,25.420695 8.6598614,2.498312 17.7260754,0.945137 25.4818764,-3.089639 -1.278886,9.747759 -0.651719,19.02073 2.600191,25.634828 15.232378,30.981319 53.027554,23.090169 62.465776,-1.162438 2.452022,-6.300758 2.481064,-16.593564 0.458857,-27.470258 8.986584,3.211808 19.164344,3.394502 27.929114,-1.101258 -3.46495,-12.634262 -14.38049,-18.536897 -21.71925,-21.749836 -2.26826,-0.993059 -4.567118,-1.745281 -6.882855,-2.263696 10e-7,-0.552075 -0.06868,-1.068327 -0.244724,-1.560115 2.240272,-1.429678 3.76263,-4.252811 3.76263,-7.49467 0,-1.969248 -0.583372,-3.757329 -1.529524,-5.200382 0.472713,-0.730257 0.764762,-1.604961 0.764762,-2.539011 -2e-6,-2.579302 -2.101044,-4.680345 -4.680344,-4.680345 -0.35148,-1e-6 -0.680119,0.04868 -1.009487,0.122362 -1.179596,-3.135671 -4.188937,-5.383925 -7.739393,-5.383925 -2.438803,0 -4.630621,1.075737 -6.148688,2.753143 -1.311329,-0.859325 -2.832744,-1.376571 -4.435621,-1.376571 -1.038832,0 -2.03538,0.233808 -2.967277,0.611809 -1.412677,-2.649484 -3.905176,-4.40503 -6.729907,-4.40503 z"),e.setAttribute(o,"id","path3788"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"style","fill:#ffffff;fill-rule:evenodd;stroke:#ffffff;stroke-width:2.8195641;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"),e.setAttribute(o,"d","M 124.03601,65.175285 C 120.57106,52.541025 109.67037,46.643765 102.33162,43.430826 92.16977,38.981924 81.050068,39.382179 73.286856,43.860878 78.120142,62.148557 104.57192,75.159104 124.03601,65.175285 z"),e.setAttribute(o,"id","path3697"),e.setAttribute(o,"sodipodi:nodetypes","cscc"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"id","path3695"),e.setAttribute(o,"d","M 5.093262,72.390853 C 6.06641,59.368906 15.601955,51.515192 22.166472,46.968611 31.256246,40.673034 42.210475,38.937873 50.661284,41.834332 49.430819,60.648349 26.043136,78.434751 5.093262,72.390853 z"),e.setAttribute(o,"style","fill:#ffffff;fill-rule:evenodd;stroke:#ffffff;stroke-width:2.8104136;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"style","fill:#ffffff;fill-rule:evenodd;stroke:#ffffff;stroke-width:2.57602835ffffff10;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"),e.setAttribute(o,"d","M 95.63903,93.760857 C 102.88633,75.138078 89.21093,21.576874 62.76847,21.457723 40.251424,21.35626 22.370189,72.920541 33.191684,94.930509 48.424064,125.91184 86.200808,118.01347 95.63903,93.760857 z"),e.setAttribute(o,"id","path3638"),e.setAttribute(o,"sodipodi:nodetypes","csss"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"style","fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-width:2.46970391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"),e.setAttribute(o,"d","m 64.47414,12.010346 c -1.747001,0 -3.354101,0.679444 -4.656421,1.826552 -0.822662,-0.722291 -1.881457,-1.157674 -3.061404,-1.157674 -2.579306,0 -4.682148,2.077118 -4.682147,4.656422 0,0.187347 0.0042,0.384369 0.02573,0.565973 -0.671413,0.140434 -1.315596,0.355927 -1.955181,0.617426 -1.679569,-2.107155 -4.058727,-3.395843 -6.688782,-3.395843 -4.759402,0 -8.674541,4.2864 -9.158486,9.801638 -2.194415,1.167022 -3.730282,3.797237 -3.730282,6.843138 10e-7,3.503551 2.02825,6.442345 4.759326,7.254755 1.191105,3.444852 4.040276,5.891274 7.357659,5.891274 1.189741,1e-6 2.330453,-0.342205 3.344391,-0.900414 2.194762,2.245313 5.035345,3.601652 8.155169,3.601652 4.885245,0 9.134558,-3.309755 11.216572,-8.155168 1.56868,1.473279 3.534259,2.341073 5.685464,2.341073 1.725475,-10e-7 3.324079,-0.587206 4.707873,-1.569291 1.140011,3.573915 4.036084,6.122808 7.434838,6.122808 1.658692,0 3.200485,-0.604258 4.476338,-1.646469 0.822663,0.722291 1.881454,1.157673 3.061404,1.157673 2.579302,0 4.682148,-2.102845 4.682148,-4.682147 0,-0.552076 -0.08121,-1.077502 -0.257261,-1.569291 2.240268,-1.429678 3.756006,-4.244431 3.756006,-7.48629 0,-1.969248 -0.571685,-3.779341 -1.517837,-5.222395 0.472709,-0.730257 0.746056,-1.587106 0.746056,-2.521156 0,-2.579302 -2.07712,-4.682147 -4.65642,-4.682147 -0.351481,0 -0.699676,0.05495 -1.029044,0.128631 -1.1796,-3.135673 -4.193095,-5.376752 -7.743551,-5.376752 -2.4388,0 -4.630467,1.049558 -6.148534,2.726964 -1.311332,-0.859325 -2.822009,-1.363482 -4.424886,-1.363482 -1.03883,0 -2.026603,0.239425 -2.958499,0.617427 -1.412678,-2.649486 -3.915503,-4.424887 -6.740234,-4.424887 z"),e.setAttribute(o,"id","path3643"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"style","fill: #7BC99D;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"),e.setAttribute(o,"id","path3183"),e.setAttribute(o,"sodipodi:cx","72"),e.setAttribute(o,"sodipodi:cy","48"),e.setAttribute(o,"sodipodi:rx","4"),e.setAttribute(o,"sodipodi:ry","4"),e.setAttribute(o,"d","m 76,48 a 4,4 0 1 1 -8,0 4,4 0 1 1 8,0 z"),e.setAttribute(o,"transform","matrix(1.4077938,0.63339841,-0.63339841,1.4077938,-19.160477,-48.663084)"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"transform","matrix(0.55763261,0.25089158,-0.25089158,0.55763261,25.499182,19.393293)"),e.setAttribute(o,"d","m 76,48 a 4,4 0 1 1 -8,0 4,4 0 1 1 8,0 z"),e.setAttribute(o,"sodipodi:ry","4"),e.setAttribute(o,"sodipodi:rx","4"),e.setAttribute(o,"sodipodi:cy","48"),e.setAttribute(o,"sodipodi:cx","72"),e.setAttribute(o,"id","path3185"),e.setAttribute(o,"style","fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"),e.setAttribute(o,"sodipodi:type","arc"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"transform","matrix(1.4077938,0.63339841,-0.63339841,1.4077938,6.1884772,-48.714859)"),e.setAttribute(o,"d","m 76,48 a 4,4 0 1 1 -8,0 4,4 0 1 1 8,0 z"),e.setAttribute(o,"sodipodi:ry","4"),e.setAttribute(o,"sodipodi:rx","4"),e.setAttribute(o,"sodipodi:cy","48"),e.setAttribute(o,"sodipodi:cx","72"),e.setAttribute(o,"id","path3195"),e.setAttribute(o,"style","fill: #7BC99D;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"),e.setAttribute(o,"sodipodi:type","arc"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"sodipodi:type","arc"),e.setAttribute(o,"style","fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"),e.setAttribute(o,"id","path3197"),e.setAttribute(o,"sodipodi:cx","72"),e.setAttribute(o,"sodipodi:cy","48"),e.setAttribute(o,"sodipodi:rx","4"),e.setAttribute(o,"sodipodi:ry","4"),e.setAttribute(o,"d","m 76,48 a 4,4 0 1 1 -8,0 4,4 0 1 1 8,0 z"),e.setAttribute(o,"transform","matrix(0.55763261,0.25089158,-0.25089158,0.55763261,50.848137,19.341517)"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"sodipodi:nodetypes","cscc"),e.setAttribute(o,"id","path3771"),e.setAttribute(o,"d","m 62.730297,104.16926 c 0.254399,-2.9405 -0.94901,-4.815282 -2.342603,-6.794659 -1.795788,-2.550619 -3.837744,-2.891339 -5.969977,-3.468996 4.306096,2.273708 7.123485,6.232355 8.31258,10.263655 z"),e.setAttribute(o,"style","fill: #7BC99D;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.91852134px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"),e.setAttribute(o,"inkscape:connector-curvature","0"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"style","fill: #fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"),e.setAttribute(o,"d","m 57.582794,99.189411 c -1.04691,0.675729 -2.670798,0.02461 -3.624766,-1.45337 -0.953969,-1.477982 -0.878544,-3.225919 0.168366,-3.901647 1.046902,-0.675725 2.670798,-0.02461 3.624764,1.453368 0.953968,1.477986 0.878539,3.225924 -0.168364,3.901649 z"),e.setAttribute(o,"id","path3775"),e.setAttribute(o,"inkscape:connector-curvature","0"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"style","fill: #7BC99D;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.97772896px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"),e.setAttribute(o,"d","m 68.925035,104.54034 c -0.407054,-3.11525 0.785669,-5.164853 2.175787,-7.334513 1.791312,-2.795819 3.947005,-3.252955 6.187703,-3.966252 -4.473746,2.61788 -7.286107,6.958495 -8.36349,11.300765 z"),e.setAttribute(o,"id","path3773"),e.setAttribute(o,"sodipodi:nodetypes","cscc"),e.setAttribute(o,"inkscape:transform-center-x","-7.3416612"),e.setAttribute(o,"inkscape:transform-center-y","-3.1426362"),e.setAttribute(o,"inkscape:connector-curvature","0"),e.appendChild(s,o);var o=e.createTextNode("\n          ");e.appendChild(s,o);var o=e.createElement("path");e.setAttribute(o,"id","path3778"),e.setAttribute(o,"d","m 77.646616,92.972253 c 1.066673,0.637145 1.202349,2.376414 0.302854,3.882303 -0.899499,1.505885 -2.495224,2.210956 -3.561897,1.573814 -1.066667,-0.637142 -1.202345,-2.376413 -0.302849,-3.882301 0.899495,-1.505888 2.495224,-2.210957 3.561892,-1.573816 z"),e.setAttribute(o,"style","fill: #fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate"),e.setAttribute(o,"inkscape:transform-center-x","-2.0288668"),e.setAttribute(o,"inkscape:transform-center-y","1.2173202"),e.setAttribute(o,"inkscape:connector-curvature","0"),e.appendChild(s,o);var o=e.createTextNode("\n        ");e.appendChild(s,o),e.appendChild(i,s);var s=e.createTextNode("\n      ");e.appendChild(i,s),e.appendChild(n,i);var i=e.createTextNode("\n    ");e.appendChild(n,i),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(r,a);var a=e.createTextNode("\n");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var a=e.childAt(t,[10,1]),n=e.childAt(a,[1]),i=e.childAt(a,[3]),s=new Array(2);return s[0]=e.createElementMorph(n),s[1]=e.createElementMorph(i),s},statements:[["element","action",["toggleHelpModal"],[],["loc",[null,[55,70],[55,98]]]],["element","action",["toggleHelpNonmodal"],[],["loc",[null,[56,73],[56,104]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var r=t+"/config/environment",a=e["default"].$('meta[name="'+r+'"]').attr("content"),n=JSON.parse(unescape(a));return{"default":n}}catch(i){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-shepherd",version:"2.0.0+c9a789a0"});