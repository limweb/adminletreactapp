import React from 'react';
import { Link } from 'react-router';
// import  ipc from 'ipc';

export default class Hello extends React.Component {
  showdialog() {
  	// ipc.send('show-dialog');
  }	
  render() {
    return (
      <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
          <button type="button" onClick={this.showdialog} className="btn btn-default">button1</button>
          <h1>Hello Electron </h1></div>
    );
  }
}
