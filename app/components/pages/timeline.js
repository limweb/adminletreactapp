import React,{ PropTypes } from 'react'

const Timeline = (props) => {
  return (<div>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Timeline
            <small>example</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">Timeline</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          {/* row */}
          <div className="row">
            <div className="col-md-12">
              {/* The time line */}
              <ul className="timeline">
                {/* timeline time label */}
                <li className="time-label">
                  <span className="bg-red">
                    10 Feb. 2014
                  </span>
                </li>
                {/* /.timeline-label */}
                {/* timeline item */}
                <li>
                  <i className="fa fa-envelope bg-blue" />
                  <div className="timeline-item">
                    <span className="time"><i className="fa fa-clock-o" /> 12:05</span>
                    <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
                    <div className="timeline-body">
                      Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                      weebly ning heekya handango imeem plugg dopplr jibjab, movity
                      jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                      quora plaxo ideeli hulu weebly balihoo...
                    </div>
                    <div className="timeline-footer">
                      <a className="btn btn-primary btn-xs">Read more</a>
                      <a className="btn btn-danger btn-xs">Delete</a>
                    </div>
                  </div>
                </li>
                {/* END timeline item */}
                {/* timeline item */}
                <li>
                  <i className="fa fa-user bg-aqua" />
                  <div className="timeline-item">
                    <span className="time"><i className="fa fa-clock-o" /> 5 mins ago</span>
                    <h3 className="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request</h3>
                  </div>
                </li>
                {/* END timeline item */}
                {/* timeline item */}
                <li>
                  <i className="fa fa-comments bg-yellow" />
                  <div className="timeline-item">
                    <span className="time"><i className="fa fa-clock-o" /> 27 mins ago</span>
                    <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>
                    <div className="timeline-body">
                      Take me to your leader!
                      Switzerland is small and neutral!
                      We are more like Germany, ambitious and misunderstood!
                    </div>
                    <div className="timeline-footer">
                      <a className="btn btn-warning btn-flat btn-xs">View comment</a>
                    </div>
                  </div>
                </li>
                {/* END timeline item */}
                {/* timeline time label */}
                <li className="time-label">
                  <span className="bg-green">
                    3 Jan. 2014
                  </span>
                </li>
                {/* /.timeline-label */}
                {/* timeline item */}
                <li>
                  <i className="fa fa-camera bg-purple" />
                  <div className="timeline-item">
                    <span className="time"><i className="fa fa-clock-o" /> 2 days ago</span>
                    <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>
                    <div className="timeline-body">
                      <img src="http://placehold.it/150x100" alt="..." className="margin" />
                      <img src="http://placehold.it/150x100" alt="..." className="margin" />
                      <img src="http://placehold.it/150x100" alt="..." className="margin" />
                      <img src="http://placehold.it/150x100" alt="..." className="margin" />
                    </div>
                  </div>
                </li>
                {/* END timeline item */}
                {/* timeline item */}
                <li>
                  <i className="fa fa-video-camera bg-maroon" />
                  <div className="timeline-item">
                    <span className="time"><i className="fa fa-clock-o" /> 5 days ago</span>
                    <h3 className="timeline-header"><a href="#">Mr. Doe</a> shared a video</h3>
                    <div className="timeline-body">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tMWkeBIohBs" frameBorder={0} allowFullScreen />
                      </div>
                    </div>
                    <div className="timeline-footer">
                      <a href="#" className="btn btn-xs bg-maroon">See comments</a>
                    </div>
                  </div>
                </li>
                {/* END timeline item */}
                <li>
                  <i className="fa fa-clock-o bg-gray" />
                </li>
              </ul>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row" style={{marginTop: 10}}>
            <div className="col-md-12">
              <div className="box box-primary">
                <div className="box-header">
                  <h3 className="box-title"><i className="fa fa-code" /> Timeline Markup</h3>
                </div>
                <div className="box-body">
                  <pre style={{fontWeight: 600}} /></div>
              </div></div></div></section></div>
)
}

export default Timeline
