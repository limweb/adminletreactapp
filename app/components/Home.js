import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import ipc from 'ipc';

export default class Home extends Component {
  showdialog(){
    console.log('show dialog');
    ipc.send('show-dialog');
  }
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <Link to="/hello">to Hello</Link>
          <button type="button" onClick={this.showdialog} className="btn btn-default">button</button>
        </div>
      </div>
    );
  }
}
