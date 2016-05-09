import React,{ PropTypes } from 'react'

const Page = (props) => {
  return (
      <div className="Hello">
        <section className="content-header">
          <h1>Page Header 
            <small>Optional description</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
            <li className="active">Here</li>
          </ol>
        </section>
        <section className="content">
          <h1>Hello123</h1>
          <h1>Hello</h1>
        </section>
      </div>
    )
}

Page.propTypes = {
  //isLoading: PropTypes.bool.isRequired,
}

export default Page

