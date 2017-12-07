import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Navbar from '../navbar';
import Aboutme from '../aboutme';
import Header from '../header';
import Projects from '../projects';
import Footer from '../footer';


class App extends React.Component {
  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/header" component={Header}/>
            <Route exact path="/aboutme" component={Aboutme}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/footer" component={Footer}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}//nope

export default App;
