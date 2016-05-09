import React from 'react';

export default class Fot_donutchart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
		<div className="box box-primary">
            <div className="box-header with-border">
              <i className="fa fa-bar-chart-o"></i>

              <h3 className="box-title">Donut Chart</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <div id="donut-chart" style={{"height": "300px"}}></div>
            </div>
          </div>
    );
  }
}
