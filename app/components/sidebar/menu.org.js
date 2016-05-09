'use strict';
import React from 'react';
import { Link } from 'react-router';

const Lnk = (props) => {
   let menu = props.menu;
   if(menu.children != undefined && menu.children.length > 0 ){
    return <li className="treeview" >
         <Link to={menu.to}><i className={menu.cls}></i><span>{menu.name}</span><i className="fa fa-angle-left pull-right"></i></Link>
         <ul className="treeview-menu">
          { menu.children.map(function(child) {
            return <li key={child.id}><Link to={child.to}><i className={child.cls}></i><span>{child.name}</span></Link></li>
          })}
         </ul>
    </li>
  } else {
    return <li><Link to={menu.to}><i className={menu.cls}></i><span>{menu.name}</span></Link></li>
  }
}

export default  class Menu extends React.Component {
  render(){
    let rows = this.props.menu.map(function(idx) {
    	return <Lnk key={idx.id} menu={idx} />;
    })
    return(<div className="sidebar-menu">{rows}</div>)
  }
}