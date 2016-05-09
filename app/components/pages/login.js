import React from 'react';
import { withRouter } from 'react-router';
import auth from '../../auth';
require('../../plugins/iCheck/icheck.min.js');

const Login = withRouter(
  React.createClass({
   getInitialState() {
      return {
        error: false
      }
    },
    componentDidMount() {
         $(function () {
            $('input').iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue',
              increaseArea: '20%' 
            });
          });
    },
    handleSubmit(event) {
      event.preventDefault()
      console.log(this.props);
      const email = this.refs.email.value
      const pass = this.refs.pass.value

      console.log('submit login',email,pass);
      auth.login(email, pass, (loggedIn) => {
        if (!loggedIn)
          return this.setState({ error: true })

        const { location } = this.props

        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace('/')
        }
      })
    },

        // <div className="hold-transition login-page" style={{"width":"100%","height":"100%"}} >
  render() {
    return (
        <div style={{"width":"100%","height":"100%"}} >
        <div className="login-box" >
          <div className="login-logo">
            <a href="#"><b>Admin</b>LTE</a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form action="#" method="post" onSubmit={this.handleSubmit}>
              <div className="form-group has-feedback">
                <input ref="email" type="email" className="form-control" placeholder="Email"  defaultValue="joe@example.com" />
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <input ref="pass" type="password" className="form-control" placeholder="Password" defaultValue="password1" />
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox icheck">
                    <label>
                      <input type="checkbox" /> Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-xs-4">
                  <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
                Facebook</a>
              <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
                Google+</a>
            </div>
            <a href="#">I forgot my password</a><br/>
            <a href="register.html" className="text-center">Register a new membership</a>
          </div>
        </div>
        </div>
    );
  }
})
)

  // export default  Login;
module.exports = {
Login: Login, // (A)
auth: auth,
};