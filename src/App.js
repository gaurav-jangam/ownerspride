import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Accessories } from './Accessories';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { LED } from "./LED";
import { Alloy } from "./Alloy";
import { Seat } from "./Seat";
import { Sw } from "./Sw"
import { Bumper } from "./Bumper"
import { St } from "./St"
import { Tyre } from "./Tyre"
import { Sn } from "./Sn"
import { Sb } from "./Sb"
import { Pune } from "./Pune"
import { Tow } from "./Tow"
import { RPM } from "./RPM"
import { Mirror } from "./Mirror"
import { Filter } from "./Filter"
import { Md } from "./Md"
import { Muffler } from "./Muffler"
import { Inclinometer } from "./Inclinometer"
import { Mumbai } from "./Mumbai"
import { Punjab } from "./Punjab"
import { Jeep } from "./Jeep"
import { Gypsy } from "./Gypsy"
import { Car } from "./Car"
import  Payment from "./Payment"
import About from "./About"
import  Privacy from './components/Privacy';
import { NavigationBar } from './components/NavigationBar';
import ScrollToTop from "./ScrollToTop"
{/*import { Jumbotron } from './components/Jumbotron';*/}




class App extends Component {

  
  render() {
    return (
      <React.Fragment>
            <Router>
          <NavigationBar />
          <ScrollToTop />
          {/*<Jumbotron />*/}
          
            <Switch>
              <Route onUpdate={() => window.scrollTo(0, 0)} history={Home()}exact path="/" component={Home} />
              <Route path="/accessories" component={Accessories} />
              <Route path="/contact" component={Contact} />
              <Route path="/led" component={LED} />
              <Route path="/alloy" component={Alloy} />
              <Route path="/seat" component={Seat} />
              <Route path="/switch" component={Sw} />
              <Route path="/steering" component={St} />
              <Route path="/snorkel" component={Sn} />
              <Route path="/seat-bealt" component={Sb} />
              <Route path="/tow-hook" component={Tow} />
              <Route path="/bumper" component={Bumper} />
              <Route path="/RPM" component={RPM} />
              <Route path="/pune" component={Pune} />
              <Route path="/jeep" component={Jeep} />
              <Route path="/gypsy" component={Gypsy} />
              <Route path="/car" component={Car} />
              <Route path="/mumbai" component={Mumbai} />
              <Route path="/Punjab" component={Punjab} />
              <Route path="/mirror" component={Mirror} />
              <Route path="/muffler" component={Muffler} />
              <Route path="/payment" component={Payment} />
              <Route path="/about" component={About} />
              <Route path="/inclinometer" component={Inclinometer} />
              <Route path="/metal-decal" component={Md} />
              <Route path="/tyre" component={Tyre} />
              <Route onUpdate={() => window.scrollTo(0, 0)}  path="/filter" component={Filter} />
              <Route path="/privacy" component={Privacy} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
