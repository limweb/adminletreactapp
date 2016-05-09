import React from 'react';
import UserMsg  from './usermessage';
import UserMenu  from './usermenu';
import UserNotic  from './usernotif';
import Usertask  from './usertask';
import Ctrlhead  from './ctrlhead';
import { Link } from 'react-router';

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



class Topheader  extends React.Component {
     showsearch(param){
      if(param != undefined && param == 1){
        return <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" id="navbar-search-input" placeholder="Search" />
          </div>
        </form>
      }
     }

    testbooxbox(){
      bootbox.alert('test');
    }
    render() {
      let rows = this.props.menus.map(function(menu) {
          return <Lnk key={menu.id} {...menu} />     
      })
    return (
        <header className="main-header">
          <a href="#/home" onClick={this.testbooxbox} className="logo">
            <span className="logo-mini"><b>A</b>LT</span>
            <span className="logo-lg"><b>Admin</b>LTE</span>
          </a>
          <nav className="navbar navbar-static-top" role="navigation">
            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
            <ul className="nav navbar-nav">
            {/* rows */}
            {this.showsearch(1)}
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
}

export default  Topheader;

 // <ul className="nav navbar-nav">
 //                <li><a href="/#about">Link1</a></li>
 //                <li><a href="/#chart">Link2</a></li>
 //                <li className="dropdown">
 //                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
 //                  <ul className="dropdown-menu" role="menu">
 //                    <li><a href="#">Action</a></li>
 //                    <li><a href="#">Another action</a></li>
 //                    <li><a href="#">Something else here</a></li>
 //                    <li className="divider"></li>
 //                    <li><a href="#">Separated link</a></li>
 //                    <li className="divider"></li>
 //                    <li><a href="#">One more separated link</a></li>
 //                  </ul>
 //                </li>              
 //                </ul>