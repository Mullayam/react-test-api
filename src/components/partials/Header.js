import React from 'react'

export default function Header(props) {
    let  heading,text,link;
   
        heading=props.title
        text=props.text;
        link=props.link ;
    
  return (
    <>
        <header className="header">               
       
        <div id="header-carousel" className="carousel" data-ride="carousel">  
        <div className="container">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="carousel-title">{heading}</h1>
                        <button className="btn btn-primary btn-rounded">{text}</button>
                    </div>
                </div> 
            </div>
        </div>        
    </div>
        <div className="infos container mb-4 mb-md-2">
            <div className="title">
                <h6 className="subtitle font-weight-normal">Are locking for</h6>
                <h5>Lorem inpsum</h5>
                <p className="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="socials text-right">
                <div className="row justify-content-between">
                    <div className="col">
                        <a className="d-block subtitle"><i className="ti-microphone pr-2"></i> (123) 456-7890</a>
                        <a className="d-block subtitle"><i className="ti-email pr-2"></i> info@website.com</a>
                    </div>
                    <div className="col">
                        <h6 className="subtitle font-weight-normal mb-2">Social Media</h6>
                        <div className="social-links">
                            <a href="#" className="link pr-1"><i className="ti-facebook"></i></a>
                            <a href="#" className="link pr-1"><i className="ti-twitter-alt"></i></a>
                            <a href="#" className="link pr-1"><i className="ti-google"></i></a>
                            <a href="#" className="link pr-1"><i className="ti-pinterest-alt"></i></a>
                            <a href="#" className="link pr-1"><i className="ti-instagram"></i></a>
                            <a href="#" className="link pr-1"><i className="ti-rss"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </header>
    </>
  )
}
