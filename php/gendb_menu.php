<?php
require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/libs/RestfulServer.php';

// $menu = '
//  {
//       "id":"1",
//       "__type__":"sidebar-menu",
//       "head": "MAIN NAVIGATION",
//       "children":[
//         {
//             "__type__": "treeview",
//             "id":"2",
//             "to":"#",
//             "cls":"fa fa-dashboard",
//             "name":"Dashboard",
//             "clsr":"fa fa-angle-left pull-right",
//             "spancls":"",
//             "children":[
//                 {
//                 "__type__":"treeview-menu",
//                 "id":"51",
//                 "to":"dashboardv1",
//                 "cls":"fa fa-circle-o",
//                 "name":"Dashboard v1"
//                 },
//                 {
//                 "__type__":"treeview-menu",
//                 "id":"52",
//                 "to":"dashboardv2",
//                 "cls":"fa fa-circle-o",
//                 "name":"Dashboard v1"
//                 }
//             ]
//         },
//         {
//             "__type__": "treeview",
//             "id":"3",
//             "to": "#",
//             "cls":"fa fa-files-o",
//             "name": "Layout Options",
//             "clsr":"label label-primary pull-right",
//             "spancls": "4",
//             "children":[
//                 {
//                 "__type__":"treeview-menu",
//                 "id":"4",
//                 "to":"top-nav",
//                 "cls":"fa fa-circle-o",
//                 "name":"Top Navigation"
//                 },
//                 {
//                 "id":"5",
//                 "__type__":"treeview-menu",
//                 "to":"boxed",
//                 "cls":"fa fa-circle-o",
//                 "name":"Boxed"
//                 },
//                 {
//                 "id":"6",
//                 "__type__":"treeview-menu",
//                 "to":"fixed",
//                 "cls":"fa fa-circle-o",
//                 "name":"Fixed"
//                 },
//                 {
//                 "id":"7",
//                 "__type__":"treeview-menu",
//                 "to":"collapsed-sidebar",
//                 "cls":"fa fa-circle-o",
//                 "name":"Collapsed Sidebar"
//                 }
//             ]
//         },{
//          "__type__":"menu",
//           "id":"8",
//          "to":"widgets",
//          "cls":"fa fa-th",
//          "name":"Widgets",
//          "clsr":"label pull-right bg-green",
//          "spancls":"Hot"
//         },
//         {
//           "__type__":"treeview",
//           "id":"9",
//           "to":"#",
//           "cls":"fa fa-pie-chart",
//           "name":"Chart",
//           "clsr":"fa fa-angle-left pull-right",
//           "spancls":"",
//           "children":[
//             {"id":"10","__type__":"treeview-menu","to":"chartjs","cls":"fa fa-circle-o","name":"ChartJS"},
//             {"id":"11","__type__":"treeview-menu","to":"morris","cls":"fa fa-circle-o","name":"Morris"},
//             {"id":"12","__type__":"treeview-menu","to":"flot","cls":"fa fa-circle-o","name":"Flot"},
//             {"id":"13","__type__":"treeview-menu","to":"inline","cls":"fa fa-circle-o","name":"Inline charts"}
//           ]
//         },
//         {
//           "__type__":"treeview",
//           "id":"14",
//           "to":"#",
//           "cls":"fa fa-laptop",
//           "name":"UI Elements",
//           "clsr":"fa fa-angle-left pull-right",
//           "spancls":"",
//           "children":[
//             {"id":"15" , "__type__":"treeview-menu","to":"general"  ,"cls":"fa fa-circle-o","name":"General"},
//             {"id":"16" , "__type__":"treeview-menu","to":"icons"    ,"cls":"fa fa-circle-o","name":"Icons"},
//             {"id":"17" , "__type__":"treeview-menu","to":"buttons"  ,"cls":"fa fa-circle-o","name":"Buttons"},
//             {"id":"18" , "__type__":"treeview-menu","to":"sliders"  ,"cls":"fa fa-circle-o","name":"Sliders"},
//             {"id":"19" , "__type__":"treeview-menu","to":"timeline" ,"cls":"fa fa-circle-o","name":"Timeline"},
//             {"id":"20" , "__type__":"treeview-menu","to":"modals"   ,"cls":"fa fa-circle-o","name":"Modals"}
//           ]
//         },
//         {
//           "__type__":"treeview",
//           "id":"21",
//           "to":"#",
//           "cls":"fa fa-edit",
//           "name":"Forms",
//           "clsr":"fa fa-angle-left pull-right",
//           "spancls":"",
//           "children":[
//             {"id":"22","__type__":"treeview-menu","to":"general","cls":"fa fa-circle-o","name":"General Elements"},
//             {"id":"23","__type__":"treeview-menu","to":"advanced","cls":"fa fa-circle-o","name":"Advanced Elements"},
//             {"id":"24","__type__":"treeview-menu","to":"editors","cls":"fa fa-circle-o","name":"Editors"}
//           ]
//         },
//         {
//           "__type__":"treeview",
//           "id":"25",
//           "to":"#",
//           "cls":"fa fa-table",
//           "name":"Tables",
//           "clsr":"fa fa-angle-left pull-right",
//           "spancls":"",
//           "children":[
//             {"id":"26","__type__":"treeview-menu","to":"simple","cls":"fa fa-circle-o","name":"Simple tables"},
//             {"id":"27","__type__":"treeview-menu","to":"data","cls":"fa fa-circle-o","name":"Data tables"}
//           ]
//         },
//         {
//           "__type__":"treeview",
//           "id":"28",
//           "to":"calendar",
//           "cls":"fa fa-calendar",
//           "name":"Calendar",
//           "clsr":"label pull-right bg-red",
//           "spancls":"3"
//         },
//         {
//           "__type__":"treeview",
//           "id":"29",
//           "to":"mailbox",
//           "cls":"fa fa-envelope",
//           "name":"Mailbox",
//           "clsr":"label pull-right bg-yellow",
//           "spancls":"12"
//         },
//         {
//           "__type__":"treeview",
//           "id":"30",
//           "to":"#",
//           "cls":"fa fa-folder",
//           "name":"Examples",
//           "clsr":"fa fa-angle-left pull-right",
//           "spancls":"",
//           "children":[
//             {"id":"31","__type__":"treeview-menu","to":"invoice","cls":"fa fa-circle-o","name":"Invoice"},
//             {"id":"32","__type__":"treeview-menu","to":"profile","cls":"fa fa-circle-o","name":"Profile"},
//             {"id":"33","__type__":"treeview-menu","to":"login","cls":"fa fa-circle-o","name":"Login"},
//             {"id":"34","__type__":"treeview-menu","to":"register","cls":"fa fa-circle-o","name":"Register"},
//             {"id":"35","__type__":"treeview-menu","to":"lockscreen","cls":"fa fa-circle-o","name":"Lockscreen"},
//             {"id":"36","__type__":"treeview-menu","to":"404","cls":"fa fa-circle-o","name":"404 Error"},
//             {"id":"37","__type__":"treeview-menu","to":"500","cls":"fa fa-circle-o","name":"500 Error"},
//             {"id":"38","__type__":"treeview-menu","to":"blank","cls":"fa fa-circle-o","name":"Blank Page"},
//             {"id":"39","__type__":"treeview-menu","to":"pace","cls":"fa fa-circle-o","name":"Pace Page"}
//           ]
//         },
//         {
//           "__type__":"treeview",
//           "id":"40",
//           "to":"#",
//           "cls":"fa fa-share",
//           "name":"Multilevel",
//           "clsr":"",
//           "spancls":"",
//           "children":[
//             { "id":"41","__type__":"treeview-menu","to":"#","cls":"fa fa-circle-o","name":"Level One","clsr":"fa fa-angle-left pull-right","spancls":"","children":[
//                 {"id":"42" ,"__type__":"treeview-menu","to":"#","cls":"fa fa-circle-o","name":"Level Two"},
//                 {"id":"43" ,"__type__":"treeview-menu","to":"#","cls":"fa fa-circle-o","name":"Level Two","children":[
//                     {"id":"44", "__type__":"treeview-menu","to":"#","cls":"fa fa-circle-o","name":"Level Three"},
//                     {"id":"45", "__type__":"treeview-menu","to":"#","cls":"fa fa-circle-o","name":"Level Three"}
//                 ]}
//             ]},
//             {"id":"46","__type__":"treeview-menu","to":"#","cls":"fa fa-circle-o","name":"Level One"}
//           ]
//         },
//         {
//           "__type__":"link",
//           "id":"47",
//           "to":"documentation",
//           "cls":"fa fa-book",
//           "name":"Documentation",
//           "clsr":"",
//           "spancls":""
//         },
//         {
//           "__type__":"link",
//           "id":"48",
//           "to":"#",
//           "cls":"fa fa-circle-o text-red",
//           "name":"Important",
//           "clsr":"",
//           "spancls":""
//         },
//         {
//           "__type__":"link",
//           "id":"49",
//           "to":"#",
//           "cls":"fa fa-circle-o text-yellow",
//           "name":"Warning",
//           "clsr":"",
//           "spancls":""
//         },
//         {
//           "__type__":"link",
//           "id":"50",
//           "to":"#",
//           "cls":"fa fa-circle-o text-aqua",
//           "name":"Information",
//           "clsr":"",
//           "spancls":""
//         }]

//     }';

//    $objs = json_decode($menu);
//    foreach ($objs->children as $item) {
//    	 $m = new Menu();
// 		$m->__type__ = ( $item->__type__ ? $item->__type__ : '' );
// 		$m->to       = ( $item->to ? $item->to : '' );
// 		$m->cls      = ( $item->cls ? $item->cls : '' );
// 		$m->name     = ( $item->name ? $item->name : '' );
// 		$m->clsr     = ( $item->clsr ? $item->clsr : '' );
// 		$m->spancls  = ( $item->spancls ? $item->spancls : '' );
// 		$m->parent = 0;
// 		$id = $m->save();
//    	 echo $id,':',$item->name,"\n";
//    	 if(isset($item->children)){
// 	   	 foreach ($item->children as $child ) {
// 	   	 		$cm = new Menu();
// 				$cm->__type__ = (isset($child->__type__) ? $child->__type__: '' );
// 				$cm->to       = (isset($child->to) ? $child->to: '' );
// 				$cm->cls      = (isset($child->cls) ? $child->cls: '' );
// 				$cm->name     = (isset($child->name) ? $child->name: '' );
// 				$cm->clsr     = (isset($child->clsr) ? $child->clsr: '' );
// 				$cm->spancls  = (isset($child->spancls) ? $child->spancls: '' );
// 				$cm->parent = $id;
// 				$cmid = $cm->save();
// 	   	 		echo '-----',$cmid,':',$child->name,"\n";
// 			  	if(isset($child->children)){
// 			  		foreach ($child->children as $c) {
// 			   	 		$ccm = new Menu();
// 						$ccm->__type__ = (isset($c->__type__) ? $c->__type__ : '');
// 						$ccm->to       = (isset($c->to) ? $c->to : '');
// 						$ccm->cls      = (isset($c->cls) ? $c->cls : '');
// 						$ccm->name     = (isset($c->name) ? $c->name : '');
// 						$ccm->clsr     = (isset($c->clsr) ? $c->clsr : '');
// 						$ccm->spancls  = (isset($c->spancls) ? $c->spancls : '');
// 						$ccm->parent = $cmid;
// 						$ccmid = $ccm->save();
// 	   	 				echo '-----------',$ccmid,':',$c->name,"\n";
// 	   	 				if(isset($c->children)){
// 	   	 					foreach ($c->children as $cc) {
// 					   	 		$cccm = new Menu();
// 								$cccm->__type__ = (isset( $cc->__type__) ? $cc->__type__ : '' );
// 								$cccm->to       = (isset($cc->to) ? $cc->to : '' );
// 								$cccm->cls      = (isset($cc->cls)  ? $cc->cls  : '' );
// 								$cccm->name     = (isset($cc->name) ? $cc->name : '' );
// 								$cccm->clsr     = (isset($cc->clsr) ? $cc->clsr : '' );
// 								$cccm->spancls  = (isset($cc->spancls) ? $cc->spancls : '' );
// 								$cccm->parent = $ccmid;
// 								$cccmid = $cccm->save();
// 	   	 						echo '----------------',$cccmid,':',$cc->name,"\n";
// 	   	 					}
// 	   	 				}	
// 			  		}
// 			  	}		
// 	   	 }	
//    	 }
//    }

  $rs = Menu::where('parent',0)->get();
  foreach ($rs as $item) {
  	foreach($item->children as $child){
  		foreach($child->children as $c ){
  			foreach($c->children as $cc ){
  				$cc->children;
  			}
  		}
  	}

  }

  echo $rs;