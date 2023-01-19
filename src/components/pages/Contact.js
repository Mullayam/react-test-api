import React from "react";

export default function Contact() {
  return (
    <div>
      <section id="contact" className="section pb-0">
        <div className="container">
          <h6 className="xs-font mb-0">Culpa perferendis excepturi.</h6>
          <h3 className="section-title mb-5">Contact Us</h3>

          <div className="row align-items-center justify-content-between">
            <div className="col-md-8 col-lg-7">
              <form className="contact-form">
                <div className="form-row">
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-4 d-none d-md-block order-1">
              <ul className="list">
                <li className="list-head">
                  <h6>CONTACT INFO</h6>
                </li>
                <li className="list-body">
                  <p className="py-2">
                    Contact us and we'll get back to you within 24 hours.
                  </p>
                  <p className="py-2">
                    <i className="ti-location-pin"></i> 12345 Fake ST NoWhere AB
                    Country
                  </p>
                  <p className="py-2">
                    <i className="ti-email"></i> info@website.com
                  </p>
                  <p className="py-2">
                    <i className="ti-microphone"></i> (123) 456-7890
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
