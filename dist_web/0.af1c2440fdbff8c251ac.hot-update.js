webpackHotUpdate(0,{

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(72); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(72);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(201);
	
	var _HomePage = __webpack_require__(266);
	
	var _HomePage2 = _interopRequireDefault(_HomePage);
	
	var _CounterPage = __webpack_require__(271);
	
	var _CounterPage2 = _interopRequireDefault(_CounterPage);
	
	var _HelloPage = __webpack_require__(278);
	
	var _HelloPage2 = _interopRequireDefault(_HelloPage);
	
	var _Windows = __webpack_require__(282);
	
	var _Windows2 = _interopRequireDefault(_Windows);
	
	var _main = __webpack_require__(387);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _Page = __webpack_require__(461);
	
	var _Page2 = _interopRequireDefault(_Page);
	
	var _Chart = __webpack_require__(462);
	
	var _Chart2 = _interopRequireDefault(_Chart);
	
	var _login = __webpack_require__(397);
	
	var _uibutton = __webpack_require__(460);
	
	var _uibutton2 = _interopRequireDefault(_uibutton);
	
	var _timeline = __webpack_require__(463);
	
	var _timeline2 = _interopRequireDefault(_timeline);
	
	var _blank = __webpack_require__(464);
	
	var _blank2 = _interopRequireDefault(_blank);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
	// import auth from './auth'
	
	
	var NotFound = _react2.default.createClass({
	  displayName: 'NotFound',
	  render: function render() {
	    return _react2.default.createElement(
	      'h2',
	      null,
	      'Not found'
	    );
	  }
	});
	// import App from './containers/App';
	
	
	var About = _react2.default.createClass({
	  displayName: 'About',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'Hello' },
	      _react2.default.createElement(
	        'section',
	        { className: 'content-header' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'About',
	          _react2.default.createElement(
	            'small',
	            null,
	            'Optional description'
	          )
	        ),
	        _react2.default.createElement(
	          'ol',
	          { className: 'breadcrumb' },
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              _react2.default.createElement('i', { className: 'fa fa-dashboard' }),
	              ' Level'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'active' },
	            'Here'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'section',
	        { className: 'content' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'ABOUT'
	        )
	      )
	    );
	  }
	});
	
	var Logout = _react2.default.createClass({
	  displayName: 'Logout',
	  componentDidMount: function componentDidMount() {
	    _login.auth.logout();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'Hello' },
	      _react2.default.createElement(
	        'section',
	        { className: 'content-header' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Logout',
	          _react2.default.createElement(
	            'small',
	            null,
	            'Optional description'
	          )
	        ),
	        _react2.default.createElement(
	          'ol',
	          { className: 'breadcrumb' },
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              _react2.default.createElement('i', { className: 'fa fa-dashboard' }),
	              ' Level'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'active' },
	            'Here'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'section',
	        { className: 'content' },
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'LOGIN'
	          )
	        )
	      )
	    );
	  }
	});
	
	function requireAuth(nextState, replace) {
	  if (!_login.auth.loggedIn()) {
	    replace({
	      pathname: '/login',
	      state: { nextPathname: nextState.location.pathname }
	    });
	  }
	}
	
	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _main2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Page2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: Logout }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'home', component: _Page2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'about', component: About }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'uibutton', component: _uibutton2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'timeline', component: _timeline2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'blank', component: _blank2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'chartjs', component: _Chart2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'counter', component: _CounterPage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'hello', component: _HelloPage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'windows', component: _Windows2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _login.Login }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: NotFound })
	);
	
	// onEnter={requireAuth}
	// org------work-----
	// export default (
	//   <Route path="/" component={App}>
	//     <IndexRoute component={HomePage} />
	//     <Route path="/counter" component={CounterPage} />
	//     <Route path="/hello" component={HelloPage} />
	//     <Route path="/windows" component={Windows} />
	//   </Route>
	// );

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(268); if (makeExportsHot(module, __webpack_require__(72))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=0.af1c2440fdbff8c251ac.hot-update.js.map