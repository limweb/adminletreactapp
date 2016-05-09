import React from 'react';
import { Route, IndexRoute ,withRouter, Link} from 'react-router';

  const Main =  (props) => {
    return <div>
    <ul>
    <Link to="/" >Home1</Link><br />
    <Link to="/hello" >Hello2</Link><br />
    <Link to="/about" >About3</Link><br />
    </ul>
    <br/><hr />
    {props.children}
    </div>;
  } 


const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})

const About = React.createClass({
  render() {
    return <div className="Hello">
        <section className="content-header">
          <h1>About
            <small>Optional description</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
            <li className="active">Here</li>
          </ol>
        </section>
        <section className="content">
          <h1>ABOUT</h1>
        </section>
      </div>
  }
})

const Home =  () => {
  return <div><h1>Home</h1></div>;
} 

  const Hello =  () => {
    return <div><h2>Hello world</h2></div>;
  } 

export default (
	<Route path="/" component={Main} >
    <IndexRoute component={Home} />
  	<Route path="hello" component={Hello} />
  	<Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);
