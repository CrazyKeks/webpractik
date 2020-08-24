import React from 'react';
import CatalogPizza from './modules/components/CatalogPizza'
import Header from "./modules/components/Header";
import Speacial from "./modules/components/Special";
import Delivery from "./modules/components/Delivery";
import About from "./modules/components/About";
import Banner from "./modules/components/Banner";
import Modal from "./modules/components/Modal";
import Instagram from "./modules/components/Instagram";
import Footer from "./modules/components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Banner/>
            <Speacial/>
            <CatalogPizza/>
            <Delivery/>
            <About/>
            <Modal/>
            <Instagram/>
            <Footer/>
        </div>
    );
}

export default App;
