import React,{ PropTypes } from 'react'

const Blank = (props) => {
  return (
      <div>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Blank page
            <small>it all starts here</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Examples</a></li>
            <li className="active">Blank page</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Title</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fa fa-minus" /></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                  <i className="fa fa-times" /></button>
              </div>
            </div>
            <div className="box-body">
              Start creating your amazing application!
            </div>
            {/* /.box-body */}
            <div className="box-footer">
              Footer
            </div>
            {/* /.box-footer*/}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
	)
}

Blank.propTypes = {
	//isLoading: PropTypes.bool.isRequired,
}

export default Blank
