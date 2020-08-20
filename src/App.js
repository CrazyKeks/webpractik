import React from 'react';
import CatalogPizza from './modules/components/CatalogPizza'
import Header from "./modules/components/Header";
import Speacial from "./modules/components/Special";
import Delivery from "./modules/components/Delivery";
import About from "./modules/components/About";

function App() {
    return (
        <div className="App">
            <Header/>
            <Speacial/>
            <CatalogPizza/>
            <Delivery/>
            <About/>
        </div>
    );
}

export default App;
