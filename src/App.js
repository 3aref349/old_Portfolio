import React, { Component } from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/featured/index'
import VunueNfo from './components/venueNFO';
import Pricing from './components/Pricing';
import Footer from './components/header_footer/Footer'
 

class App extends Component  {
  render(){
    return (
      <div className="App" style={{ height:"1500px" , background:'Cornflowerblue'}}>
<Header />
<Element name="featured">
<Featured />
</Element>
<Element name="venuenfo">
<VunueNfo />
</Element>


  <Element name="pricing">
<Pricing />
</Element>

<Footer />

      </div>
    );
  }
  
}

export default App;
