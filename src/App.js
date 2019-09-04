import React, { Component } from 'react';
import { Route, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import Course from './components/Course';
import routes from './routes';
import Menu from './components/Menu';



class App extends Component {
  render() {
    return (
      <Router>
        <Menu />

        {this.showContentMenus(routes)}
      </Router>

    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }

}

export default App;