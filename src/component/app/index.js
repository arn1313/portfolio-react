import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Navbar from '../navbar';
import Aboutme from '../aboutme';

class App extends React.Component {
  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/aboutme" component={Aboutme}/>

          </div>
        </BrowserRouter>
      </div>
    );
  }
}//nope

export default App;
