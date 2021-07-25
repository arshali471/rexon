import React from 'react'
import Career from './Career';
import Services from './Services';
import Gallery from './Gallery';
import Home from './Home';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Navb';
import Footer from './Footer';
import Contact from './Contact'; 
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

function ReactRouter() {
    return (
        <div>
            <Navb />
            <BrowserRouter basename={process.env.PUBLIC_URL }>   
            <Switch>
                <Route exact path="/career" component={ Career} />
                <Route exact path="/" component={ Home} />
                <Route exact path="/about" component={ About} />
                <Route exact path="/gallery" component={ Gallery} />
                <Route exact path="/services" component={ Services} />
                <Route path="/contact" component={ Contact} />
                <Route component={Error} />

            </Switch>
            </BrowserRouter>
            {/* <Career/> */}
            {/* <Contact/> */}
            <Footer />
        </div>
    )
}

export default ReactRouter
