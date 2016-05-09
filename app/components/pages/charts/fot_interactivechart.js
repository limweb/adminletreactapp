import React from 'react';

export default class Fot_interactivechart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="box box-primary">
            <div className="box-header with-border">
              <i className="fa fa-bar-chart-o"></i>
              <h3 className="box-title">Interactive Area Chart</h3>
              <div className="box-tools pull-right">
                Real time
                <div className="btn-group" id="realtime" data-toggle="btn-toggle">
                  <button type="button" className="btn btn-default btn-xs active" data-toggle="on">On</button>
                  <button type="button" className="btn btn-default btn-xs" data-toggle="off">Off</button>
                </div>
              </div>
            </div>
            <div className="box-body">
              <div id="interactive" style={{"height": "300px"}}></div>
            </div>
          </div>
    );
  }
}