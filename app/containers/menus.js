// let menus = [
//   { id:1 , to:'#' , cls:'fa fa-link' , name:'Multiple',children:[
//     { id:2 , to:'/home'     , cls:'fa fa-circle-o' , name:'Home1',children:[]},
//     { id:3 , to:'/hello'    , cls:'fa fa-circle-o' , name:'Hello',children:[]},
//     { id:4 , to:'/chartjs'  , cls:'fa fa-circle-o' , name:'Chartjs',children:[]},
//   ]},
//   { id:13  , to:'/uibutton'     , cls:'fa fa-link' , name:'Uibutton',children:[]},
//   { id:14  , to:'/timeline'     , cls:'fa fa-link' , name:'Timeline',children:[]},
//   { id:15  , to:'/blank'     , cls:'fa fa-link' , name:'Blank',children:[]},
//   { id:7  , to:'/home'     , cls:'fa fa-link' , name:'home',children:[]},
//   { id:8  , to:'/about'    , cls:'fa fa-link' , name:'about',children:[]},
//   { id:9  , to:'/chartjs'  , cls:'fa fa-link' , name:'chartjs',children:[]},
//   { id:10 , to:'/counter'  , cls:'fa fa-link' , name:'counter',children:[]},
//   { id:11 , to:'/hello'    , cls:'fa fa-link' , name:'hello',children:[]},
//   { id:12 , to:'/windows'  , cls:'fa fa-link' , name:'windows',children:[]},
//   { id:6  , to:'/logout'   , cls:'fa fa-link' , name:'logout',children:[]},
//   { id:5  , to:'/login'    , cls:'fa fa-link' , name:'login',children:[]},
// ];


// export default {
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
//             {"id":"38","__type__":"treeview-menu","to":"blank","cls":"fa fa-circle-o","name":"Blank {age"},
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

//     }


export default {
    "id": "1",
    "__type__": "sidebar-menu",
    "head": "MAIN NAVIGATION",
    "children": [{
        "id": 1,
        "__type__": "treeview",
        "to": "#",
        "cls": "fa fa-dashboard",
        "name": "Dashboard",
        "clsr": "fa fa-angle-left pull-right",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": [{
            "id": 2,
            "__type__": "treeview-menu",
            "to": "dashboardv1",
            "cls": "fa fa-circle-o",
            "name": "Dashboard v1",
            "clsr": "",
            "spancls": "",
            "parent": 1,
            "created_at": "2016-05-09 15:07:11",
            "updated_at": "2016-05-09 15:07:11",
            "children": []
        }, {
            "id": 3,
            "__type__": "treeview-menu",
            "to": "dashboardv2",
            "cls": "fa fa-circle-o",
            "name": "Dashboard v1",
            "clsr": "",
            "spancls": "",
            "parent": 1,
            "created_at": "2016-05-09 15:07:11",
            "updated_at": "2016-05-09 15:07:11",
            "children": []
        }]
    }, {
        "id": 4,
        "__type__": "treeview",
        "to": "#",
        "cls": "fa fa-files-o",
        "name": "Layout Options",
        "clsr": "label label-primary pull-right",
        "spancls": "4",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": [{
            "id": 5,
            "__type__": "treeview-menu",
            "to": "top-nav",
            "cls": "fa fa-circle-o",
            "name": "Top Navigation",
            "clsr": "",
            "spancls": "",
            "parent": 4,
            "created_at": "2016-05-09 15:07:33",
            "updated_at": "2016-05-09 15:07:33",
            "children": []
        }, {
            "id": 6,
            "__type__": "treeview-menu",
            "to": "boxed",
            "cls": "fa fa-circle-o",
            "name": "Boxed",
            "clsr": "",
            "spancls": "",
            "parent": 4,
            "created_at": "2016-05-09 15:07:33",
            "updated_at": "2016-05-09 15:07:33",
            "children": []
        }, {
            "id": 7,
            "__type__": "treeview-menu",
            "to": "fixed",
            "cls": "fa fa-circle-o",
            "name": "Fixed",
            "clsr": "",
            "spancls": "",
            "parent": 4,
            "created_at": "2016-05-09 15:07:33",
            "updated_at": "2016-05-09 15:07:33",
            "children": []
        }, {
            "id": 8,
            "__type__": "treeview-menu",
            "to": "collapsed-sidebar",
            "cls": "fa fa-circle-o",
            "name": "Collapsed Sidebar",
            "clsr": "",
            "spancls": "",
            "parent": 4,
            "created_at": "2016-05-09 15:07:33",
            "updated_at": "2016-05-09 15:07:33",
            "children": []
        }]
    }, {
        "id": 9,
        "__type__": "menu",
        "to": "widgets",
        "cls": "fa fa-th",
        "name": "Widgets",
        "clsr": "label pull-right bg-green",
        "spancls": "Hot",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": []
    }, {
        "id": 10,
        "__type__": "treeview",
        "to": "#",
        "cls": "fa fa-pie-chart",
        "name": "Chart",
        "clsr": "fa fa-angle-left pull-right",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": [{
            "id": 11,
            "__type__": "treeview-menu",
            "to": "chartjs",
            "cls": "fa fa-circle-o",
            "name": "ChartJS",
            "clsr": "",
            "spancls": "",
            "parent": 10,
            "created_at": "2016-05-09 15:07:44",
            "updated_at": "2016-05-09 15:07:44",
            "children": []
        }, {
            "id": 12,
            "__type__": "treeview-menu",
            "to": "morris",
            "cls": "fa fa-circle-o",
            "name": "Morris",
            "clsr": "",
            "spancls": "",
            "parent": 10,
            "created_at": "2016-05-09 15:07:44",
            "updated_at": "2016-05-09 15:07:44",
            "children": []
        }, {
            "id": 13,
            "__type__": "treeview-menu",
            "to": "flot",
            "cls": "fa fa-circle-o",
            "name": "Flot",
            "clsr": "",
            "spancls": "",
            "parent": 10,
            "created_at": "2016-05-09 15:07:44",
            "updated_at": "2016-05-09 15:07:44",
            "children": []
        }, {
            "id": 14,
            "__type__": "treeview-menu",
            "to": "inline",
            "cls": "fa fa-circle-o",
            "name": "Inline charts",
            "clsr": "",
            "spancls": "",
            "parent": 10,
            "created_at": "2016-05-09 15:07:44",
            "updated_at": "2016-05-09 15:07:44",
            "children": []
        }]
    }, {
        "id": 15,
        "__type__": "treeview",
        "to": "#",
        "cls": "fa fa-laptop",
        "name": "UI Elements",
        "clsr": "fa fa-angle-left pull-right",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": [{
            "id": 16,
            "__type__": "treeview-menu",
            "to": "general",
            "cls": "fa fa-circle-o",
            "name": "General",
            "clsr": "",
            "spancls": "",
            "parent": 15,
            "created_at": "2016-05-09 15:08:01",
            "updated_at": "2016-05-09 15:08:01",
            "children": []
        }, {
            "id": 17,
            "__type__": "treeview-menu",
            "to": "icons",
            "cls": "fa fa-circle-o",
            "name": "Icons",
            "clsr": "",
            "spancls": "",
            "parent": 15,
            "created_at": "2016-05-09 15:08:01",
            "updated_at": "2016-05-09 15:08:01",
            "children": []
        }, {
            "id": 18,
            "__type__": "treeview-menu",
            "to": "buttons",
            "cls": "fa fa-circle-o",
            "name": "Buttons",
            "clsr": "",
            "spancls": "",
            "parent": 15,
            "created_at": "2016-05-09 15:08:01",
            "updated_at": "2016-05-09 15:08:01",
            "children": []
        }, {
            "id": 19,
            "__type__": "treeview-menu",
            "to": "sliders",
            "cls": "fa fa-circle-o",
            "name": "Sliders",
            "clsr": "",
            "spancls": "",
            "parent": 15,
            "created_at": "2016-05-09 15:08:01",
            "updated_at": "2016-05-09 15:08:01",
            "children": []
        }, {
            "id": 20,
            "__type__": "treeview-menu",
            "to": "timeline",
            "cls": "fa fa-circle-o",
            "name": "Timeline",
            "clsr": "",
            "spancls": "",
            "parent": 15,
            "created_at": "2016-05-09 15:08:01",
            "updated_at": "2016-05-09 15:08:01",
            "children": []
        }, {
            "id": 21,
            "__type__": "treeview-menu",
            "to": "modals",
            "cls": "fa fa-circle-o",
            "name": "Modals",
            "clsr": "",
            "spancls": "",
            "parent": 15,
            "created_at": "2016-05-09 15:08:01",
            "updated_at": "2016-05-09 15:08:01",
            "children": []
        }]
    }, {
        "id": 22,
        "__type__": "treeview",
        "to": "#",
        "cls": "fa fa-edit",
        "name": "Forms",
        "clsr": "fa fa-angle-left pull-right",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": [{
            "id": 23,
            "__type__": "treeview-menu",
            "to": "general",
            "cls": "fa fa-circle-o",
            "name": "General Elements",
            "clsr": "",
            "spancls": "",
            "parent": 22,
            "created_at": "2016-05-09 15:08:09",
            "updated_at": "2016-05-09 15:08:09",
            "children": []
        }, {
            "id": 24,
            "__type__": "treeview-menu",
            "to": "advanced",
            "cls": "fa fa-circle-o",
            "name": "Advanced Elements",
            "clsr": "",
            "spancls": "",
            "parent": 22,
            "created_at": "2016-05-09 15:08:09",
            "updated_at": "2016-05-09 15:08:09",
            "children": []
        }, {
            "id": 25,
            "__type__": "treeview-menu",
            "to": "editors",
            "cls": "fa fa-circle-o",
            "name": "Editors",
            "clsr": "",
            "spancls": "",
            "parent": 22,
            "created_at": "2016-05-09 15:08:09",
            "updated_at": "2016-05-09 15:08:09",
            "children": []
        }]
    }, {
        "id": 26,
        "__type__": "treeview",
        "to": "#",
        "cls": "fa fa-table",
        "name": "Tables",
        "clsr": "fa fa-angle-left pull-right",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": [{
            "id": 27,
            "__type__": "treeview-menu",
            "to": "simple",
            "cls": "fa fa-circle-o",
            "name": "Simple tables",
            "clsr": "",
            "spancls": "",
            "parent": 26,
            "created_at": "2016-05-09 15:08:14",
            "updated_at": "2016-05-09 15:08:14",
            "children": []
        }, {
            "id": 28,
            "__type__": "treeview-menu",
            "to": "data",
            "cls": "fa fa-circle-o",
            "name": "Data tables",
            "clsr": "",
            "spancls": "",
            "parent": 26,
            "created_at": "2016-05-09 15:08:14",
            "updated_at": "2016-05-09 15:08:14",
            "children": []
        }]
    }, {
        "id": 29,
        "__type__": "treeview",
        "to": "calendar",
        "cls": "fa fa-calendar",
        "name": "Calendar",
        "clsr": "label pull-right bg-red",
        "spancls": "3",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": []
    }, {
        "id": 30,
        "__type__": "treeview",
        "to": "mailbox",
        "cls": "fa fa-envelope",
        "name": "Mailbox",
        "clsr": "label pull-right bg-yellow",
        "spancls": "12",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": []
    }, {
        "id": 31,
        "__type__": "treeview",
        "to": "#",
        "cls": "fa fa-folder",
        "name": "Examples",
        "clsr": "fa fa-angle-left pull-right",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": [{
            "id": 32,
            "__type__": "treeview-menu",
            "to": "invoice",
            "cls": "fa fa-circle-o",
            "name": "Invoice",
            "clsr": "",
            "spancls": "",
            "parent": 31,
            "created_at": "2016-05-09 15:08:27",
            "updated_at": "2016-05-09 15:08:27",
            "children": []
        }, {
            "id": 33,
            "__type__": "treeview-menu",
            "to": "profile",
            "cls": "fa fa-circle-o",
            "name": "Profile",
            "clsr": "",
            "spancls": "",
            "parent": 31,
            "created_at": "2016-05-09 15:08:27",
            "updated_at": "2016-05-09 15:08:27",
            "children": []
        }, {
            "id": 34,
            "__type__": "treeview-menu",
            "to": "login",
            "cls": "fa fa-circle-o",
            "name": "Login",
            "clsr": "",
            "spancls": "",
            "parent": 31,
            "created_at": "2016-05-09 15:08:27",
            "updated_at": "2016-05-09 15:08:27",
            "children": []
        }, {
            "id": 35,
            "__type__": "treeview-menu",
            "to": "register",
            "cls": "fa fa-circle-o",
            "name": "Register",
            "clsr": "",
            "spancls": "",
            "parent": 31,
            "created_at": "2016-05-09 15:08:27",
            "updated_at": "2016-05-09 15:08:27",
            "children": []
        }, {
            "id": 36,
            "__type__": "treeview-menu",
            "to": "lockscreen",
            "cls": "fa fa-circle-o",
            "name": "Lockscreen",
            "clsr": "",
            "spancls": "",
            "parent": 31,
            "created_at": "2016-05-09 15:08:27",
            "updated_at": "2016-05-09 15:08:27",
            "children": []
        }, {
            "id": 37,
            "__type__": "treeview-menu",
            "to": "404",
            "cls": "fa fa-circle-o",
            "name": "404 Error",
            "clsr": "",
            "spancls": "",
            "parent": 31,
            "created_at": "2016-05-09 15:08:27",
            "updated_at": "2016-05-09 15:08:27",
            "children": []
        }, {
            "id": 38,
            "__type__": "treeview-menu",
            "to": "500",
            "cls": "fa fa-circle-o",
            "name": "500 Error",
            "clsr": "",
            "spancls": "",
            "parent": 31,
            "created_at": "2016-05-09 15:08:27",
            "updated_at": "2016-05-09 15:08:27",
            "children": []
        }, {
            "id": 39,
            "__type__": "treeview-menu",
            "to": "blank",
            "cls": "fa fa-circle-o",
            "name": "Blank Page",
            "clsr": "",
            "spancls": "",
            "parent": 31,
            "created_at": "2016-05-09 15:08:27",
            "updated_at": "2016-05-09 15:08:27",
            "children": []
        }, {
            "id": 40,
            "__type__": "treeview-menu",
            "to": "pace",
            "cls": "fa fa-circle-o",
            "name": "Pace Page",
            "clsr": "",
            "spancls": "",
            "parent": 31,
            "created_at": "2016-05-09 15:08:27",
            "updated_at": "2016-05-09 15:08:27",
            "children": []
        }]
    }, {
        "id": 41,
        "__type__": "treeview",
        "to": "#",
        "cls": "fa fa-share",
        "name": "Multilevel",
        "clsr": "fa fa-angle-left pull-right",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 16:54:31",
        "updated_at": "2016-05-09 16:54:31",
        "children": [{
            "id": 42,
            "__type__": "treeview-menu",
            "to": "#",
            "cls": "fa fa-circle-o",
            "name": "Level One",
            "clsr": "fa fa-angle-left pull-right",
            "spancls": "",
            "parent": 41,
            "created_at": "2016-05-09 16:54:48",
            "updated_at": "2016-05-09 16:54:48",
            "children": [{
                "id": 43,
                "__type__": "treeview-menu",
                "to": "#",
                "cls": "fa fa-circle-o",
                "name": "Level Two",
                "clsr": "",
                "spancls": "",
                "parent": 42,
                "created_at": "2016-05-09 15:08:56",
                "updated_at": "2016-05-09 15:08:56",
                "children": []
            }, {
                "id": 44,
                "__type__": "treeview-menu",
                "to": "#",
                "cls": "fa fa-circle-o",
                "name": "Level Two",
                "clsr": "fa fa-angle-left pull-right",
                "spancls": "",
                "parent": 42,
                "created_at": "2016-05-09 16:54:50",
                "updated_at": "2016-05-09 16:54:50",
                "children": [{
                    "id": 45,
                    "__type__": "treeview-menu",
                    "to": "#",
                    "cls": "fa fa-circle-o",
                    "name": "Level Three",
                    "clsr": "",
                    "spancls": "",
                    "parent": 44,
                    "created_at": "2016-05-09 15:09:02",
                    "updated_at": "2016-05-09 15:09:02",
                    "children": []
                }, {
                    "id": 46,
                    "__type__": "treeview-menu",
                    "to": "#",
                    "cls": "fa fa-circle-o",
                    "name": "Level Three",
                    "clsr": "",
                    "spancls": "",
                    "parent": 44,
                    "created_at": "2016-05-09 15:09:03",
                    "updated_at": "2016-05-09 15:09:03",
                    "children": []
                }]
            }]
        }, {
            "id": 47,
            "__type__": "treeview-menu",
            "to": "#",
            "cls": "fa fa-circle-o",
            "name": "Level One",
            "clsr": "",
            "spancls": "",
            "parent": 41,
            "created_at": "2016-05-09 15:08:50",
            "updated_at": "2016-05-09 15:08:50",
            "children": []
        }]
    }, {
        "id": 48,
        "__type__": "link",
        "to": "documentation",
        "cls": "fa fa-book",
        "name": "Documentation",
        "clsr": "",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": []
    }, {
        "id": 49,
        "__type__": "link",
        "to": "#",
        "cls": "fa fa-circle-o text-red",
        "name": "Important",
        "clsr": "",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": []
    }, {
        "id": 50,
        "__type__": "link",
        "to": "#",
        "cls": "fa fa-circle-o text-yellow",
        "name": "Warning",
        "clsr": "",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": []
    }, {
        "id": 51,
        "__type__": "link",
        "to": "#",
        "cls": "fa fa-circle-o text-aqua",
        "name": "Information",
        "clsr": "",
        "spancls": "",
        "parent": 0,
        "created_at": "2016-05-09 15:07:11",
        "updated_at": "2016-05-09 15:07:11",
        "children": []
    }]
};
