import 'jquery';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'typeface-amatic-sc';
import 'typeface-roboto-condensed';
import React, { Component } from 'react';
import logo from './images/logo.png';
import img1 from './images/side-view.jpg';
import img2 from './images/top-view.jpg';
import design from './icons/icons_icon_design.svg';
import upcycle from './icons/icons_icon_upcycle.svg';
import unite from './icons/icons_icon_unite.svg';
import action from './icons/icons_icon_action.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    document.body.style.overflow = "visible";
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <LandingPage handleClick={this.handleClick} />
    );
  }

}

function LandingPage(props) {
  return (
    <div className="About">
      <div className="container">
        <ProductShowCaseSection handleClick={props.handleClick} />´
      </div>
      <div className="container mb-5">
        <Video src="https://streamable.com/s/d8yud/qujzda"/>
      </div>
      <div className="container my-5">
        <Story/>
      </div>
      <div className="container my-5">
        <Plastic />
      </div>
      <div className="container">
        <Product />
      </div>

      <div className="container">
      <Footer />
      </div>
    </div>
  );
}

function ProductShowCaseSection(props) {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <Carousel carousel={[{img1},{img2}]} />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 align-self-center text-right">
        <ShopOxeani handleClick={props.handleClick} />
        <img src={props.logo} width={props.width} height="auto" className="d-inline-block align-top mx-auto px-3" alt={props.alt}/>
      </div>
    </div>
  );
}

function Carousel(props) {
  var imgSource = [];
  
  for (var value of props.carousel) {
    Object.entries(value).forEach(([key, value]) => imgSource.push(`${value}`));
  }
  
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={imgSource[0]} alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={imgSource[1]} alt="Second slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

function ShopOxeani(props) {
  return (
    <div className="row">
      <div className="col-12">
        <p className="lead">Plastic Free Ocean Free. </p>
        <p className="lead">Meet the concept and OXEANI. </p>
        <p className="lead">ecovegan footwear collection. </p>
        <button type="button" onClick={props.handleClick} className="btn btn-primary my-3">Shop OXEANI products</button>
      </div>
    </div>
  );
}

function Video(props) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe title="Introduction Video" height="auto" width="100%" src={props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    </div>
  );
}

function Story(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-10 ">
        <OceanMovement />
      </div>
      <div className="col-12" >
        <Principles />
      </div>
    </div>
  );
} 

function OceanMovement(props) {
  return(
    <div className="row">
      <div className="col" >
        <h2>OCEAN MOVEMENT</h2>
        <h3>Small Steps Big Changes</h3>
        <p>Over 220 million tons of plastic are produced each year. About 8 million ends up in the ocean. More than one million seabirds and 100,000 marine mammals die each year from plastic debris. Unless we take action, by 2050 our oceans will contain more plastic than fish. </p>
      </div>
    </div>
  );
}

function Principle(props) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-8">
        <img alt={props.name} className="mx-5" src={props.src} />
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>
  );
}

function Principles(props) {
  return (
    
    <div className="row justify-content-center">
      
      <Principle 
        name="Unite" src={unite}
        description="Build a network that cares and works together for a plastic free ocean."
      />
      <Principle 
        name="Action" src={action}
        description="Together we can make it happen. Participate in your local initiatives."
      />
      <Principle 
        name="Design" src={design}
        description="OXEANI uses plastic litter in the prodution of eco-vegan footwear."
      />
      <Principle src={upcycle}
        name="Upcycle" 
        description="In each pair of OXEANI we are upcycling the equivalent of 6 bottles of water."
      />
      
      <div className="col-md-12 text-center">
        <button type="button" className="btn btn-primary my-3">Learn More</button>
      </div>
    </div>
  );
}


function Plastic(props) {
  return ( 
    <div className="row align-items-center py-5">
      <div className="col-md-6 col-sm-12">
        <h3>Say No to Plastic</h3>
        <p>The world has produced more plastic in the last 4 years than since its invention. The numbers are frightening and are constantly increasing. It isn't enough to recycle, collect or upcycle, we have to avoid single use plastic.</p>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="row">
          <div className="col-6">
          <h3>21.918 Million kg </h3>
          <p>
           Plastic end up in the ocean each day
          </p>
          </div>
          <div className="col-6">
          <h3>1.500kg </h3>
            <p>
            Plastic litter collected in the last Zouri clean up action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <div className="container product">
      <div className="row">
        <div className="col-md-12">
          <h2>OXEANI Sandals</h2>
          <h3>Organic, Ecologic, Fair Trade and Vegan.</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <ProductThumb name="OXEANI Sandal 1" price="80,00€" />
        <ProductThumb name="OXEANI Sandal 2" price="80,00€" />
        <ProductThumb name="OXEANI Sandal 3" price="80,00€" />
      </div>
    </div>
  );
}

function ProductThumb(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-4">
      <img src={design} alt="" className="image" />
      <p><b>{props.name}</b></p>
      <p>{props.price}</p>
      <button type="button" className="btn btn-primary btn-block">Buy Now</button>
    </div>
  );

}

function Footer(props) {
  return (
    <footer className="page-footer font-small mdb-color pt-4">
      <hr/>
      <div className="row d-flex align-items-center">
        <div className="col-md-7 col-lg-8">
          <p className="text-center text-md-left">© 2018 Copyright:
            <a href="https://www.oxeani.com">
              <strong> OXEANI</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
