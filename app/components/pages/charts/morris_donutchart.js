import React from 'react';

export default class Morris_donutchart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="box box-danger">
          <div className="box-header with-border">
            <h3 className="box-title">Donut Chart</h3>
            <div className="box-tools pull-right">
              <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
              </button>
              <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
            </div>
          </div>
          <div className="box-body chart-responsive">
            <div className="chart" id="sales-chart" style={{"height": "300px", "position": "relative"}}></div>
          </div>
        </div>
    );
  }
}
