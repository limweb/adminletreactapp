import React, { Component } from 'react';
import Hello from '../components/Hello';
import Mainpage  from './Appmain';


export default class HelloPage extends Component {
  showalert() {
  	alert('test');
  }
  render() {
    return (
      <div>
        <Mainpage />
        <button type="button" onClick={this.showalert} className="btn btn-default">Test</button>		
      	<Hello />
      </div>
    );
  }
}
