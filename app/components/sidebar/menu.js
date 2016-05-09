import React,{ PropTypes } from 'react'
import { Link } from 'react-router';
import _ from 'lodash';

const Lnk =  (props) => {
   let menu = props.menu;
   if(menu.children != undefined && menu.children.length > 0 ){
    return (<li className="treeview" >
            <Link to={menu.to}><i className={menu.cls}></i><span>{menu.name}</span><i className="fa fa-angle-left pull-right"></i></Link>
            <ul className="treeview-menu">
            { menu.children.map(function(child){
              if(child.children.length > 0) {
                  return (<li className="treeview" >
                          <Link to={child.to}><i className={child.cls}></i><span>{child.name}</span><i className="fa fa-angle-left pull-right"></i></Link>
                          <ul className="treeview-menu">
                          { child.children.map(function(child){
                            if(child.children.length > 0 ) {
                            return (<li className="treeview" >
                              <Link to={child.to}><i className={child.cls}></i><span>{child.name}</span><i className="fa fa-angle-left pull-right"></i></Link>
                              <ul className="treeview-menu">
                              { child.children.map(function(child){
                                return <li key={child.id}><Link to={child.to}><i className={child.cls}></i><span>{child.name}</span><i class="fa fa-angle-left pull-right"></i></Link></li>
                              })}
                              </ul></li>);
                            } else {
                              return <li key={child.id}><Link to={child.to}><i className={child.cls}></i><span>{child.name}</span><i class="fa fa-angle-left pull-right"></i></Link></li>
                            }
                            })
                          }
                         </ul></li>);
              } else {
               return (<li key={child.id}><Link to={child.to}><i className={child.cls}></i><span>{child.name}</span><i class="fa fa-angle-left pull-right"></i></Link></li>);
              }
            })}
            </ul>
           </li>);
  } else {
    return (<li><Link to={menu.to}><i className={menu.cls}></i><span>{menu.name}</span></Link></li>);
  }

} 

const Menu = (props) => {
  let rows = _.map(props.menu,function(menu){
   return <Lnk key={menu.id} menu={menu} />;
 })
  return(<div className="sidebar-menu">{rows}</div>)
}

export default Menu