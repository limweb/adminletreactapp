import React,{ PropTypes } from 'react'
import Searchform  from './searchform';
import Userpanel  from './userpanel';
import NavLink from '../NavLink';
import Menu  from './menu';

const Sidebar = (props) => {
  return (
        <aside className="main-sidebar">
    	  <section className="sidebar" >
    	    <Userpanel />
    	  	<Searchform />
          <Menu  menu ={props.menus}/>
          </section>
        </aside>
    )
}

export default Sidebar




