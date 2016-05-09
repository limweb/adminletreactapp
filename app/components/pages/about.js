var React = require('react');

var About = React.createClass({

render: function() {
  return (
      <div className="Hello">
        <section className="content-header">
          <h1>About Header 
            <small>Optional description</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
            <li className="active">Here</li>
          </ol>
        </section>
        <section style={{"height":"400px"}} className="content">
          <h1>About</h1>
        </section>
      </div>
  );
}

});

module.exports = About;