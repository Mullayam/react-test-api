import React, { Component } from "react";

export class Blog extends Component {
  render() {
    return (
      <div>
        <section className="section" id="blog">
          <div className="container mb-3">
            <h6 className="xs-font mb-0">Culpa perferendis excepturi.</h6>
            <h3 className="section-title mb-5">Our Blog</h3>
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
