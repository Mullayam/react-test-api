import React,{useState} from "react";

export default function NewUser(props) {

  if (props.hidePass === false) {
    var passVisibility, textVP, typeP;

    passVisibility = "danger";
    textVP = "Password is invisible";
    typeP = "password";
  } else {
    passVisibility = "success";
    textVP = "Password is visible";
    typeP = "text";
  }
  return (
    <>
   <div className="container-fluid py-4">
   <section id="contact" className="section pb-0">
        <div className="container">
           
          <h3 className="section-title mb-5">{props.view?"Login Here":"New User!" }</h3>

          <div className="row align-items-center justify-content-between">
            <div className="col-md-12 col-lg-12">
             {props.view? 
              <form onSubmit={props.formSubmitExist} className="contact-form">
                <div className="form-row">
                  <div className="col form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="col form-group">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      name="pass"
                      type={typeP}
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                  <button
                  type="button"
                  onClick={props.click}
                  className={`btn btn-${passVisibility} m-2 p-2 mr-auto`}
                >
                  {textVP}
                </button>
                </div>
                <span className="btn btn-warning" onClick={props.changeState}>or New Here!</span>
              </form>             
              :
              <form onSubmit={props.formSubmitNew} className="contact-form col-md-12 col-lg-8">
               <div className="form-row"> 
              <div className="col form-group">
                  <label htmlFor="firstname" className="form-label">
                   First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    aria-describedby="emailHelp"
                  />
                  
                </div> 
                <div className="col form-group">
                  <label htmlFor="lastname" className="form-label">
                   Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    aria-describedby="emailHelp"
                  />
                  
                </div> 
              </div>
              <div className="form-row"> 
                          
                <div className="col form-group">
                  <label htmlFor="InputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="col form-group">
                  <label
                    htmlFor="InputPassword1"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    name="pass"
                    type={typeP}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                
              </div>
            
              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Login
                </button>
                <button
                type="button"
                onClick={props.click}
                className={`btn btn-${passVisibility} m-2 p-2 mr-auto`}
              >
                {textVP}
              </button>
              </div>
              <span className="btn btn-warning" onClick={props.changeState}>Already Have Account. Login</span>
              
            </form>
             }
             <hr/>
           <div className="text-center">
           <h4>Or Connect With</h4>
             <button
                  type="button"
                  onClick={props.click}
                  className={`btn btn-primary rounded m-2 p-2 `}
                >
                Login With Google
                </button>
           </div>
            </div>
          </div>
        </div>
      </section>
   </div>
     
    </>
  );
}
