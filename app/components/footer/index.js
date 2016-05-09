var React = require('react');

var Footer = React.createClass({

	render: function() {
		return (
		  <footer className="main-footer">
		    <div className="pull-right hidden-xs">
		      Anything you want
		    </div>
		    <strong>Copyright &copy; 2015 <a href="#">Company</a>.</strong> All rights reserved.
		  </footer>
		);
	}

});

module.exports = Footer;

