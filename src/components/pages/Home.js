import React from "react";
import Header from "../partials/Header";
import axios from "axios";
export default function Home() {
  const addPost = (e)=>{
    e.preventDefault();
    let t=e.target.title.value;
    let b=e.target.body.value;
    let author=e.target.author.value;
    const data= {
      title:t,
      body:b,
      author:author
    }
    axios.post("https://jsonplaceholder.typicode.com/posts",data)
    .then((response)=>{
    e.target.reset();      
    }).catch((error)=>{
      console.log(error)      
       
    })
  }
  return (
    <>
      <Header extra={1} title="TEST" link="/NewUser" text="Learn More" />
      <div className="container col-6 my-3">
        <form className="form-group  m-2" onSubmit={addPost}>
        <input type="text" className="form-control" name="title" placeholder="title"></input>
        <input type="text" className="form-control"  name="body"  placeholder="body"></input>
        <input type="text" className="form-control"  name="author"  placeholder="author"></input>
        <button type="submit">Add</button>
        </form>
      </div>
      <section  className="section my-2">
        <div className="container">
          <h6 className="xs-font mb-0">Blanditiis unde illum earum</h6>
          <h3 className="section-title mb-4">Expertises</h3>

          <div className="row text-center">
            <div className="col-lg-4">
              <a href="#" className="card border-0 text-dark">
                <img
                  className="card-img-top"
                  src="assets/imgs/img-5.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page"
                />
                <span className="card-body">
                  <h4 className="title mt-4">Codding &amp; Designing</h4>
                  <p className="xs-font">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </span>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#" className="card border-0 text-dark">
                <img
                  className="card-img-top"
                  src="assets/imgs/img-6.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page"
                />
                <span className="card-body">
                  <h4 className="title mt-4">Graphic Design</h4>
                  <p className="xs-font">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </span>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#" className="card border-0 text-dark">
                <img
                  className="card-img-top"
                  src="assets/imgs/img-7.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page"
                />
                <span className="card-body">
                  <h4 className="title mt-4">Development</h4>
                  <p className="xs-font">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
