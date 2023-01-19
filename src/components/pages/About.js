import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div><section className="section" id="about">

      <div className="container">
      
          <div className="row align-items-center mr-auto">
              <div className="col-md-4">
                  <h6 className="xs-font mb-0">nobis dolorem sapiente evenie.</h6>
                  <h3 className="section-title">About Us</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sunt, unde aperiam aliquid quia repudiandae, ex harum quis amet delectus maxime, tempora possimus aut laboriosam magni corrupti labore. Doloremque, sit?</p>
      
                  <a href="javascript:void(0)">Read more...</a>
              </div>
              <div className="col-sm-6 col-md-4 ml-auto">
                  <div className="widget">
                      <div className="icon-wrapper">
                          <i className="ti-calendar"></i>
                      </div>
                      <div className="infos-wrapper">
                          <h4 className="text-primary">15+</h4>
                          <p>onsectetur perspiciatis</p>
                      </div>
                  </div>
                  <div className="widget">
                      <div className="icon-wrapper">
                          <i className="ti-face-smile"></i>
                      </div>
                      <div className="infos-wrapper">
                          <h4 className="text-primary">125+</h4>
                          <p>onsectetur perspiciatis</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                  <div className="widget">
                      <div className="icon-wrapper">
                          <i className="ti-star"></i>
                      </div>
                      <div className="infos-wrapper">
                          <h4 className="text-primary">3434+</h4>
                          <p>onsectetur perspiciatis</p>
                      </div>
                  </div>
                  <div className="widget">
                      <div className="icon-wrapper">
                          <i className="ti-user"></i>
                      </div>
                      <div className="infos-wrapper">
                          <h4 className="text-primary">80+</h4>
                          <p>onsectetur perspiciatis</p>
                      </div>
                  </div>
              </div>
           </div>
      </div>
      </section></div>
    )
  }
}

export default About