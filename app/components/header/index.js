import React,{ PropTypes } from 'react'
import UserMsg  from './usermessage';
import UserMenu  from './usermenu';
import UserNotic  from './usernotif';
import Usertask  from './usertask';
import Ctrlhead  from './ctrlhead';
import { Link } from 'react-router';
import _  from 'lodash';

const Lnk = (props) => {
  if(props.children != undefined && props.children.length > 0 ){
    return <li className="dropdown" >
         <a href="#" className="dropdown-toggle" data-toggle="dropdown">{props.name} <span className="caret"></span></a>
         <ul className="dropdown-menu">
          { props.children.map(function(child) {
            return <li key={child.id}><Link to={child.to}><i className={child.cls}></i><span>{child.name}</span></Link></li>
          })}
         </ul>
    </li>
    
  } else {
    return <li><Link to={props.to}><i className={props.cls}></i><span>{props.name}</span></Link></li>
  }
}


const showsearch =  (param) => {
    if(param != undefined && param == 1){
      return <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control" id="navbar-search-input" placeholder="Search" />
        </div>
      </form>
  }
} 

const testbooxbox = () => {
    bootbox.alert('test');
} 


const Topheader = (props) => {
      let rows = _.map(props.menus,function(menu) {
          return <Lnk key={menu.id} {...menu} />     
      })
      return (
        <header className="main-header">
          <a href="#/home" onClick={testbooxbox} className="logo">
            <span className="logo-mini"><b>A</b>LT</span>
            <span className="logo-lg"><b>Admin</b>LTE</span>
          </a>
          <nav className="navbar navbar-static-top" role="navigation">
            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
            <ul className="nav navbar-nav">
            {showsearch(0)}
            </ul>
            </div>
            <div  className="navbar-custom-menu"> 
              <ul className="nav navbar-nav">
               <UserMsg />
               <UserNotic />
               <Usertask />
               <UserMenu />
               <Ctrlhead />
              </ul>
            </div>
          </nav>
        </header>
    );
}
export default Topheader