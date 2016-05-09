import React        from "react";
import {render}     from 'react-dom';
import Topheader    from '../components/header';
import Footer       from '../components/footer';
import Page         from '../components/pages/page';
import {Login,auth} from '../components/pages/login';
import Chartjs      from '../components/pages/charts';
import Sidebar      from '../components/sidebar';
import { Rightctrlsidebar } from '../components/sidebar/rightctrlsidebar';
import About  from '../components/pages/about';
import App from   '../components/pages/App';
import Repos from '../components/pages/Repos';
import Repo from  '../components/pages/Repo';
import Home from  '../components/pages/Home';

import { Router, Route, hashHistory,browserHistory, IndexRoute } from 'react-router';

let menus = [
  { id:1 , to:'#' , cls:'fa fa-link' , name:'Multiple',children:[
    { id:2 , to:'/home'     , cls:'fa fa-circle-o' , name:'Home1',children:[]},
    { id:3 , to:'/hello'    , cls:'fa fa-circle-o' , name:'Hello',children:[]},
    { id:4 , to:'/chartjs'  , cls:'fa fa-circle-o' , name:'Chartjs',children:[]},
  ]},
  { id:7  , to:'/home'     , cls:'fa fa-link' , name:'home',children:[]},
  { id:8  , to:'/about'    , cls:'fa fa-link' , name:'about',children:[]},
  { id:9  , to:'/chartjs'  , cls:'fa fa-link' , name:'chartjs',children:[]},
  { id:10 , to:'/counter'  , cls:'fa fa-link' , name:'counter',children:[]},
  { id:11 , to:'/hello'    , cls:'fa fa-link' , name:'hello',children:[]},
  { id:12 , to:'/windows'  , cls:'fa fa-link' , name:'windows',children:[]},
  { id:6  , to:'/logout'   , cls:'fa fa-link' , name:'logout',children:[]},
  { id:5  , to:'/login'    , cls:'fa fa-link' , name:'login',children:[]},
];

var Wapper = React.createClass({
  render:function(){
    let menu = [];
    if(auth.loggedIn()){
      menu = Object.assign(menu, menus);
    }
    return <div>
                  <Topheader menus={menu}/>
                  <Sidebar menus={menu}/>
                   <div className="content-wrapper">
                   { this.props.children }
                   </div>
                  <Footer />
                  <Rightctrlsidebar />
                  <div className="control-sidebar-bg"></div>
             </div>
  }
});

var Main = React.createClass({
  render() {
    console.log('------main-----');
    var rs;
    var chk = auth.loggedIn();
    if(chk){
      rs = <Wapper {...this.props} />
    } else {
      rs = <div><Login {...this.props} /></div>
    }

    return(rs);
} // render
});

module.exports = Main;


// render(( 
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home}/>
//       <Route path="/repos" component={Repos}>
//         <Route path="/repos/:userName/:repoName" component={Repo}/>
//       </Route>
//       <Route path="/about" component={About}/>
//     </Route>
//   </Router>
//   ), document.getElementById('main'));

// render((<Router history={hashHistory}>
//     <Route path="/" component={Main}>
//       <IndexRoute component={Page}/>
//       <Route path="#/chart" component={Chartjs}>
//       </Route>
//       <Route path="#/about" component={About}/>
//     </Route>
//   </Router>), document.getElementById('main'));




  //   let chk = auth.loggedIn();
  //   if( chk ){ 
  //         return  
  //            <div class="wrapper">
  //                 <Topheader menus={menus}/>
  //                 <Sidebar menus={menus}/>
  //                  <div className="content-wrapper">
  //                  { this.props.children }
  //                  </div>
  //                 <Footer />
  //                 <Rightctrlsidebar />
  //                 <div className="control-sidebar-bg"></div>
  //            </div>
  //   }else{  
  //     return <div><Login /></div>
  //   } 
  // }


