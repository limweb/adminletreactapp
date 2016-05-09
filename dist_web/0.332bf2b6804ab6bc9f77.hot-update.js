webpackHotUpdate(0,{

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(72); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// let menus = [
	//   { id:1 , to:'#' , cls:'fa fa-link' , name:'Multiple',children:[
	//     { id:2 , to:'/home'     , cls:'fa fa-circle-o' , name:'Home1',children:[]},
	//     { id:3 , to:'/hello'    , cls:'fa fa-circle-o' , name:'Hello',children:[]},
	//     { id:4 , to:'/chartjs'  , cls:'fa fa-circle-o' , name:'Chartjs',children:[]},
	//   ]},
	//   { id:13  , to:'/uibutton'     , cls:'fa fa-link' , name:'Uibutton',children:[]},
	//   { id:14  , to:'/timeline'     , cls:'fa fa-link' , name:'Timeline',children:[]},
	//   { id:15  , to:'/blank'     , cls:'fa fa-link' , name:'Blank',children:[]},
	//   { id:7  , to:'/home'     , cls:'fa fa-link' , name:'home',children:[]},
	//   { id:8  , to:'/about'    , cls:'fa fa-link' , name:'about',children:[]},
	//   { id:9  , to:'/chartjs'  , cls:'fa fa-link' , name:'chartjs',children:[]},
	//   { id:10 , to:'/counter'  , cls:'fa fa-link' , name:'counter',children:[]},
	//   { id:11 , to:'/hello'    , cls:'fa fa-link' , name:'hello',children:[]},
	//   { id:12 , to:'/windows'  , cls:'fa fa-link' , name:'windows',children:[]},
	//   { id:6  , to:'/logout'   , cls:'fa fa-link' , name:'logout',children:[]},
	//   { id:5  , to:'/login'    , cls:'fa fa-link' , name:'login',children:[]},
	// ];
	
	exports.default = {
	  "id": "1",
	  "__type__": "sidebar-menu",
	  "head": "MAIN NAVIGATION",
	  "children": [{
	    "__type__": "treeview",
	    "id": "2",
	    "to": "#",
	    "cls": "fa fa-dashboard",
	    "name": "Dashboard",
	    "clsr": "fa fa-angle-left pull-right",
	    "spancls": "",
	    "children": [{
	      "__type__": "treeview-menu",
	      "id": "51",
	      "to": "dashboardv1",
	      "cls": "fa fa-circle-o",
	      "name": "Dashboard v1"
	    }, {
	      "__type__": "treeview-menu",
	      "id": "52",
	      "to": "dashboardv2",
	      "cls": "fa fa-circle-o",
	      "name": "Dashboard v1"
	    }]
	  }, {
	    "__type__": "treeview",
	    "id": "3",
	    "to": "#",
	    "cls": "fa fa-files-o",
	    "name": "Layout Options",
	    "clsr": "label label-primary pull-right",
	    "spancls": "4",
	    "children": [{
	      "__type__": "treeview-menu",
	      "id": "4",
	      "to": "top-nav",
	      "cls": "fa fa-circle-o",
	      "name": "Top Navigation"
	    }, {
	      "id": "5",
	      "__type__": "treeview-menu",
	      "to": "boxed",
	      "cls": "fa fa-circle-o",
	      "name": "Boxed"
	    }, {
	      "id": "6",
	      "__type__": "treeview-menu",
	      "to": "fixed",
	      "cls": "fa fa-circle-o",
	      "name": "Fixed"
	    }, {
	      "id": "7",
	      "__type__": "treeview-menu",
	      "to": "collapsed-sidebar",
	      "cls": "fa fa-circle-o",
	      "name": "Collapsed Sidebar"
	    }]
	  }, {
	    "__type__": "menu",
	    "id": "8",
	    "to": "widgets",
	    "cls": "fa fa-th",
	    "name": "Widgets",
	    "clsr": "label pull-right bg-green",
	    "spancls": "Hot"
	  }, {
	    "__type__": "treeview",
	    "id": "9",
	    "to": "#",
	    "cls": "fa fa-pie-chart",
	    "name": "Chart",
	    "clsr": "fa fa-angle-left pull-right",
	    "spancls": "",
	    "children": [{ "id": "10", "__type__": "treeview-menu", "to": "chartjs", "cls": "fa fa-circle-o", "name": "ChartJS" }, { "id": "11", "__type__": "treeview-menu", "to": "morris", "cls": "fa fa-circle-o", "name": "Morris" }, { "id": "12", "__type__": "treeview-menu", "to": "flot", "cls": "fa fa-circle-o", "name": "Flot" }, { "id": "13", "__type__": "treeview-menu", "to": "inline", "cls": "fa fa-circle-o", "name": "Inline charts" }]
	  }, {
	    "__type__": "treeview",
	    "id": "14",
	    "to": "#",
	    "cls": "fa fa-laptop",
	    "name": "UI Elements",
	    "clsr": "fa fa-angle-left pull-right",
	    "spancls": "",
	    "children": [{ "id": "15", "__type__": "treeview-menu", "to": "general", "cls": "fa fa-circle-o", "name": "General" }, { "id": "16", "__type__": "treeview-menu", "to": "icons", "cls": "fa fa-circle-o", "name": "Icons" }, { "id": "17", "__type__": "treeview-menu", "to": "buttons", "cls": "fa fa-circle-o", "name": "Buttons" }, { "id": "18", "__type__": "treeview-menu", "to": "sliders", "cls": "fa fa-circle-o", "name": "Sliders" }, { "id": "19", "__type__": "treeview-menu", "to": "timeline", "cls": "fa fa-circle-o", "name": "Timeline" }, { "id": "20", "__type__": "treeview-menu", "to": "modals", "cls": "fa fa-circle-o", "name": "Modals" }]
	  }, {
	    "__type__": "treeview",
	    "id": "21",
	    "to": "#",
	    "cls": "fa fa-edit",
	    "name": "Forms",
	    "clsr": "fa fa-angle-left pull-right",
	    "spancls": "",
	    "children": [{ "id": "22", "__type__": "treeview-menu", "to": "general", "cls": "fa fa-circle-o", "name": "General Elements" }, { "id": "23", "__type__": "treeview-menu", "to": "advanced", "cls": "fa fa-circle-o", "name": "Advanced Elements" }, { "id": "24", "__type__": "treeview-menu", "to": "editors", "cls": "fa fa-circle-o", "name": "Editors" }]
	  }, {
	    "__type__": "treeview",
	    "id": "25",
	    "to": "#",
	    "cls": "fa fa-table",
	    "name": "Tables",
	    "clsr": "fa fa-angle-left pull-right",
	    "spancls": "",
	    "children": [{ "id": "26", "__type__": "treeview-menu", "to": "simple", "cls": "fa fa-circle-o", "name": "Simple tables" }, { "id": "27", "__type__": "treeview-menu", "to": "data", "cls": "fa fa-circle-o", "name": "Data tables" }]
	  }, {
	    "__type__": "treeview",
	    "id": "28",
	    "to": "calendar",
	    "cls": "fa fa-calendar",
	    "name": "Calendar",
	    "clsr": "label pull-right bg-red",
	    "spancls": "3"
	  }, {
	    "__type__": "treeview",
	    "id": "29",
	    "to": "mailbox",
	    "cls": "fa fa-envelope",
	    "name": "Mailbox",
	    "clsr": "label pull-right bg-yellow",
	    "spancls": "12"
	  }, {
	    "__type__": "treeview",
	    "id": "30",
	    "to": "#",
	    "cls": "fa fa-folder",
	    "name": "Examples",
	    "clsr": "fa fa-angle-left pull-right",
	    "spancls": "",
	    "children": [{ "id": "31", "__type__": "treeview-menu", "to": "invoice", "cls": "fa fa-circle-o", "name": "Invoice" }, { "id": "32", "__type__": "treeview-menu", "to": "profile", "cls": "fa fa-circle-o", "name": "Profile" }, { "id": "33", "__type__": "treeview-menu", "to": "login", "cls": "fa fa-circle-o", "name": "Login" }, { "id": "34", "__type__": "treeview-menu", "to": "register", "cls": "fa fa-circle-o", "name": "Register" }, { "id": "35", "__type__": "treeview-menu", "to": "lockscreen", "cls": "fa fa-circle-o", "name": "Lockscreen" }, { "id": "36", "__type__": "treeview-menu", "to": "404", "cls": "fa fa-circle-o", "name": "404 Error" }, { "id": "37", "__type__": "treeview-menu", "to": "500", "cls": "fa fa-circle-o", "name": "500 Error" }, { "id": "38", "__type__": "treeview-menu", "to": "blank", "cls": "fa fa-circle-o", "name": "Blank {age" }, { "id": "39", "__type__": "treeview-menu", "to": "pace", "cls": "fa fa-circle-o", "name": "Pace Page" }]
	  }, {
	    "__type__": "treeview",
	    "id": "40",
	    "to": "#",
	    "cls": "fa fa-share",
	    "name": "Multilevel",
	    "clsr": "",
	    "spancls": "",
	    "children": [{ "id": "41", "__type__": "treeview-menu", "to": "#", "cls": "fa fa-circle-o", "name": "Level One", "clsr": "fa fa-angle-left pull-right", "spancls": "", "children": [{ "id": "42", "__type__": "treeview-menu", "to": "#", "cls": "fa fa-circle-o", "name": "Level Two" }, { "id": "43", "__type__": "treeview-menu", "to": "#", "cls": "fa fa-circle-o", "name": "Level Two", "children": [{ "id": "44", "__type__": "treeview-menu", "to": "#", "cls": "fa fa-circle-o", "name": "Level Three" }, { "id": "45", "__type__": "treeview-menu", "to": "#", "cls": "fa fa-circle-o", "name": "Level Three" }] }] }, { "id": "46", "__type__": "treeview-menu", "to": "#", "cls": "fa fa-circle-o", "name": "Level One" }]
	  }, {
	    "__type__": "link",
	    "id": "47",
	    "to": "documentation",
	    "cls": "fa fa-book",
	    "name": "Documentation",
	    "clsr": "",
	    "spancls": ""
	  }, {
	    "__type__": "link",
	    "id": "48",
	    "to": "#",
	    "cls": "fa fa-circle-o text-red",
	    "name": "Important",
	    "clsr": "",
	    "spancls": ""
	  }, {
	    "__type__": "link",
	    "id": "49",
	    "to": "#",
	    "cls": "fa fa-circle-o text-yellow",
	    "name": "Warning",
	    "clsr": "",
	    "spancls": ""
	  }, {
	    "__type__": "link",
	    "id": "50",
	    "to": "#",
	    "cls": "fa fa-circle-o text-aqua",
	    "name": "Information",
	    "clsr": "",
	    "spancls": ""
	  }]
	
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(268); if (makeExportsHot(module, __webpack_require__(72))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "menus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=0.332bf2b6804ab6bc9f77.hot-update.js.map