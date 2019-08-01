import React, { Component } from 'react';
import  './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './conponents/menu/Menu';
import routes from './routes';
class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div> 
        <Menu/>

        <div className="container">

          <div className="row">
            {this.showContentMenus(routes)}
          </div>

        </div>
      </div>
      </BrowserRouter>

    )
  }
  showContentMenus = (routes) =>{
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) =>{
        return(
          <Route
          key = {index}
          path = {route.path}
          exact = {route.exact}
          component = {route.main}
          />
  
        )
      })
    }
    return <Switch>{result}</Switch>
  }
}
export default App;
