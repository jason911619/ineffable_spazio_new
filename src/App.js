import {HashRouter,Route,Switch} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import React, { Component } from "react";
//import Layout1 from "./Layout1"; //記得要引入

import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import NinthPage from "./NinthPage";


class App extends Component {

  render() {
    return (

      <HashRouter>
          <Switch>
            
                <Route exact path="/" component={FirstPage}/>
                <Route path="/second" component={SecondPage}/>
                <Route path="/third" component={ThirdPage}/>
                <Route path="/fourth" component={FourthPage}/>
                <Route path="/fifth" component={FifthPage}/>
                <Route path="/ninth" component={NinthPage}/>
            
          </Switch>
      </HashRouter>

    );
  }
}

export default App;
