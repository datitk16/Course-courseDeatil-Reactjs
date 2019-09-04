import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom';

const menus = [
    {
      name: 'Trang chủ',
      to: '/',
      exact: true
    },
    {
      name: 'Khóa học',
      to: '/course',
      exact: false
    },
  ]
  
  const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
  
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? 'active' : '';
          return (
            <li className={active}>
              <Link to={to}>
                {label}
              </Link>
            </li>
          )
        }}
      />
    )
  }
class Menu extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">

                        {this.showMenus(menus)}


                    </ul>
                </div>
            </nav>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}

                    />
                )
            })
        }
        return result;
    }
}

export default Menu;