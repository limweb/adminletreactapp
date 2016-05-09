import React from 'react';
import { Route, IndexRoute ,withRouter, Link} from 'react-router';
// import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import HelloPage from './containers/HelloPage';
import Windows from './containers/Windows';
import Main from './containers/main';
import Page from './containers/Page';
import Chartjs from './containers/Chart';
// import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
// import auth from './auth'
import { Login,auth }  from './components/pages/login';
import Uibutton  from './components/pages/uibutton';
import Timeline  from './components/pages/timeline';
import Blank  from './components/pages/blank';


const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})

const About = React.createClass({
  render() {
    return       <div className="Hello">
        <section className="content-header">
          <h1>About123
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

const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
  },

  render() {
    return <div className="Hello">
        <section className="content-header">
          <h1>Logout
            <small>Optional description</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
            <li className="active">Here</li>
          </ol>
        </section>
        <section className="content">
        <Link to="/"><h1>LOGIN</h1></Link>
        </section>
      </div>
  }
})

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}


export default (
	<Route path="/" component={Main} >
    <IndexRoute component={Page} />
    <Route path="logout" component={Logout} />
    <Route path="home" component={Page} />
    <Route path="about" component={About} />
    <Route path="uibutton" component={Uibutton} />
    <Route path="timeline" component={Timeline} />
    <Route path="blank" component={Blank} />
	<Route path="chartjs" component={Chartjs}  />
	<Route path="counter" component={CounterPage} />
	<Route path="hello" component={HelloPage} />
	<Route path="windows" component={Windows} />
 	<Route path="login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
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
