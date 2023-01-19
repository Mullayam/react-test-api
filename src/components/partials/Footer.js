import React from "react";
export default function Footer() {
  return (
    <>
      <section className="section bg-overlay">
        <div className="container">
          <div className="infos mb-4 mb-md-2">
            <div className="title">
              <h6 className="subtitle font-weight-normal">Are locking for</h6>
              <h5>Lorem inpsum</h5>
              <p className="font-small">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="socials">
              <div className="row justify-content-between">
                <div className="col">
                  <a className="d-block subtitle">
                    <i className="ti-microphone"></i> (123) 456-7890
                  </a>
                  <a className="d-block subtitle">
                    <i className="ti-email"></i> info@website.com
                  </a>
                </div>
                <div className="col">
                  <h6 className="subtitle font-weight-normal mb-1">
                    Social Media
                  </h6>
                  <div className="social-links">
                    <a href="javascript:void(0)" className="link pr-1">
                      <i className="ti-facebook"></i>
                    </a>
                    <a href="javascript:void(0)" className="link pr-1">
                      <i className="ti-twitter-alt"></i>
                    </a>
                    <a href="javascript:void(0)" className="link pr-1">
                      <i className="ti-google"></i>
                    </a>
                    <a href="javascript:void(0)" className="link pr-1">
                      <i className="ti-pinterest-alt"></i>
                    </a>
                    <a href="javascript:void(0)" className="link pr-1">
                      <i className="ti-instagram"></i>
                    </a>
                    <a href="javascript:void(0)" className="link pr-1">
                      <i className="ti-rss"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer mt-5 border-top">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 text-center text-md-left">
            <p className="mb-0">
              Copyright{" "}
              <script>document.write(new Date().getFullYear())</script> &copy;{" "}
              <a target="_blank" href="http://www.devcrud.com">
                DevCRUD
              </a>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <div className="social-links">
              <a href="#" className="link">
                <i className="ti-facebook"></i>
              </a>
              <a href="#" className="link">
                <i className="ti-twitter-alt"></i>
              </a>
              <a href="#" className="link">
                <i className="ti-google"></i>
              </a>
              <a href="#" className="link">
                <i className="ti-pinterest-alt"></i>
              </a>
              <a href="#" className="link">
                <i className="ti-instagram"></i>
              </a>
              <a href="#" className="link">
                <i className="ti-rss"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
