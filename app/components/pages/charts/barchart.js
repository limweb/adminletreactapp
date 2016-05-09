var React = require('react');
import {Pie,Bar, SmoothLine,StockLine,Scatterplot,Tree,Radar} from 'react-pathjs-chart';

// var data = [
//   [
//     {
//       "v": 29,
//       "name": "apple"
//     },
//     {
//       "v": 47,
//       "name": "apple"
//     }
//   ],
//   [
//     {
//       "v": 61,
//       "name": "banana"
//     },
//     {
//       "v": 66,
//       "name": "banana"
//     }
//   ],
//   [
//     {
//       "v": 15,
//       "name": "grape"
//     },
//     {
//       "v": 10,
//       "name": "grape"
//     }
//   ]
// ];

// var options = {
//             width:600,
//             height:230,
//             margin: {top: 20, left: 20, bottom: 50, right: 20},
//             color:'#2980B9',
//             gutter:20,
//             animate:{
//                 type:'oneByOne',
//                 duration:200,
//                 fillTransition:3
//             },
//             axisX: {
//                 showAxis: true,
//                 showLines: true,
//                 showLabels: true,
//                 showTicks: true,
//                 zeroAxis: false,
//                 orient: 'bottom',
//                 label:{
//                     fontFamily:'Arial',
//                     fontSize:14,
//                     fontWeight:true,
//                     fill:'#34495E'
//                 }
//             },
//             axisY: {
//                 showAxis: true,
//                 showLines: true,
//                 showLabels: true,
//                 showTicks: true,
//                 zeroAxis: false,
//                 orient: 'left',
//                 label:{
//                     fontFamily:'Arial',
//                     fontSize:14,
//                     fontWeight:true,
//                     fill:'#34495E'
//                 }
//             }
//         };

var Barchart = React.createClass({
  render: function() {
    return (
      <div className="box box-success">
        <div className="box-header with-border">
          <h3 className="box-title">Bar Chart</h3>
          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
            </button>
            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
          </div>
        </div>
        <div className="box-body">
          <div className="chart">
            <Bar data={this.props.data} options={this.props.options} accessorKey="v" style={{"height":"250px"}} />
          </div>
        </div>
      </div>
    );
  }

});
module.exports = Barchart;
