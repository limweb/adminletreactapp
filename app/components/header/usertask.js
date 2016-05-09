var React = require('react');

var Usertask = React.createClass({

  render: function() {
    return (
                  <li className="dropdown tasks-menu">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-flag-o"></i>
                      <span className="label label-danger">9</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="header">You have 9 tasks</li>
                      <li>
                        <ul className="menu">
                          <li>
                            <a href="#">
                              <h3>
                                Design some buttons
                                <small className="pull-right">20%</small>
                              </h3>
                              <div className="progress xs">
                                <div className="progress-bar progress-bar-aqua" style={{"width":"20%"}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                  <span className="sr-only">20% Complete</span>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="footer">
                        <a href="#">View all tasks</a>
                      </li>
                    </ul>
                </li>
    );
  }

});

module.exports = Usertask;