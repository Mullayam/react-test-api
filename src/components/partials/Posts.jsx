import React from 'react'

export default function Posts(props) {
  return (
    <div>
   <div className="blog-wrapper mb-3">
              <div className="img-wrapper">
                <img
                  src="assets/imgs/img-3.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page"
                />
                <div className="date-container">
                  <h6 className="day">29</h6>
                  <h6 className="mun">Jun</h6>
                </div>
              </div>

              <div className="txt-wrapper">
                <h4 className="blog-title">{props.title}</h4>
                <p>
                {props.body}
                </p>
                <a onClick={props.click_delete} className="badge badge-danger">
                 Delete
                </a>

                <h6 className="blog-footer">
                  <a href="#">
                    <i className="ti-user"></i> Admin{" "}
                  </a>{" "}
                  |
                  <a href="#">
                    <i className="ti-thumb-up"></i> 213{" "}
                  </a>{" "}
                  |
                  <a href="#">
                    <i className="ti-comments"></i> 123
                  </a>
                </h6>
              </div>
              
            </div>

    </div>
  )
}
