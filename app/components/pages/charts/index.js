var React = require('react');
import Areachart  from './areachart';
import Donutchart from './donutchart';
import Linechart from './linechart';
import Barchart from './barchart';
import Mooris_areachart from './morris_areachart';
import Mooris_linechart from './morris_linechart';
import Morris_barchart from './morris_barchart';
import Morris_donutchart from './morris_donutchart';
import Fot_interactivechart from './fot_interactivechart';
import Fot_linechart from './fot_linechart';
import Fot_barchart from './fot_barchart';
import Fot_fullwidthareachart from './fot_fullwidthareachart';
import Fot_donutchart from './fot_donutchart';


var data = [
  [
    {
      "v": 29,
      "name": "apple"
    },
    {
      "v": 47,
      "name": "apple"
    }
  ],
  [
    {
      "v": 61,
      "name": "banana"
    },
    {
      "v": 66,
      "name": "banana"
    }
  ],
  [
    {
      "v": 15,
      "name": "grape"
    },
    {
      "v": 10,
      "name": "grape"
    }
  ]
];

var options = {
            width:600,
            height:230,
            margin: {top: 20, left: 20, bottom: 50, right: 20},
            color:'#2980B9',
            gutter:20,
            animate:{
                type:'oneByOne',
                duration:200,
                fillTransition:3
            },
            axisX: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'bottom',
                label:{
                    fontFamily:'Arial',
                    fontSize:14,
                    fontWeight:true,
                    fill:'#34495E'
                }
            },
            axisY: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'left',
                label:{
                    fontFamily:'Arial',
                    fontSize:14,
                    fontWeight:true,
                    fill:'#34495E'
                }
            }
        };

var Chartjs = React.createClass({

render: function() {
return (<div>
<section className="content-header">
  <h1> 
    Chart JS
    <small>Optional description</small>
  </h1>
  <ol className="breadcrumb">
    <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
    <li className="active">Here</li>
  </ol>
</section>
<section className="content">
  <div className="row">
    <div className="col-md-6">
      <Areachart />
    </div>
    <div className="col-md-6">
      <Barchart data={data} options={options}  />
    </div>
  </div>  
  <div className="row">
    <div className="col-md-6">
      <Donutchart />
    </div>
    <div className="col-md-6">
      <Linechart />
    </div>
  </div>


  <div className="row">
    <div className="col-md-6">
      <Mooris_areachart />  
      <Mooris_linechart />  
    </div>    
    <div className="col-md-6">
      <Morris_barchart />
      <Morris_donutchart />
    </div>
  </div>  

  <div className="row">
    <div className="col-md-6">
      <Fot_linechart />
      <Fot_barchart />      
    </div>    
    <div className="col-md-6">
      <Fot_fullwidthareachart />
      <Fot_donutchart />
    </div>
  </div>

  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <Fot_interactivechart />
    </div>
  </div>

</section>
</div>
);
}

});

module.exports = Chartjs;