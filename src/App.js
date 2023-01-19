import React, { useState, Component } from "react";
import { Alert } from "./components/partials/Alert";
import Auth from "./components/partials/Auth";

import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Error404 from "./components/pages/Error404";
import axios from "axios";
import Posts from "./components/partials/Posts"
import { BrowserRouter, Routes, Route } from "react-router-dom";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegister: false,
      email: null,
      password: null,
      showPass: false,
      isLogin:1,
      getPosts:null,
    };
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      this.setState({getPosts:response.data})      
    }).catch((error)=>{
       
    })
  }
  loginHandler = ()=>{
    
  }
  signupHandler = (event) => {
    var usrEmail = event.target.email.value;
    var usrPassword = event.target.pass.value;
    this.setState({
      email: usrEmail,
      password: usrPassword,
      isRegister: true,
    });
    event.preventDefault();
  };
  passVisibility = () => {
    this.setState({
      showPass: !this.state.showPass,
    });
  };
  changeState =()=>{
    this.setState({
    isLogin:!this.state.isLogin,
});

};
deletePost=(id)=>{
  axios.delete("https://jsonplaceholder.typicode.com/posts/"+id)
  .then((response)=>{
    console.log(response)  
  }).catch((error)=>{
     
  })
   
 
}
  render() {
    let send_posst;
    if(this.state.getPosts !=null){
      const onlyTen = this.state.getPosts.splice(0,10)
      send_posst=onlyTen.map((post)=>{      
       return <Posts
       click_delete={()=>{this.deletePost(post.id)}}
        key={post.id}
         title={post.title}
          body={post.body}
        />       
      });
       
       
    }
    return (
      <>
    <section className="section">
        <BrowserRouter>
        <Navbar />

          <Routes>
            <Route path="/Login" element={this.state.isRegister ?<Alert mail={this.state.email} />:<Auth
            click={this.passVisibility}
            hidePass={this.state.showPass}
            view={this.state.isLogin}
            changeState={this.changeState}
            formSubmitExist={this.signupHandler}
            formSubmitNew={this.loginHandler}
          />} />
            <Route path="/about" element={<About  title="About | BLogger" />} />
            <Route path="/contact-us" element={<Contact  title="Contact-Us | BLogger" />} />
            <Route path="/blog" element={<Blog  title="Blogs | BLogger">{send_posst}</Blog>} />
            <Route index element={<Home title="Home | BLogger"/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>

        
        <Footer />
        
        </section>
      </>
    );
  }
}

export default App;
