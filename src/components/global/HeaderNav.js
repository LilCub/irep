import React, {Component} from 'react';
import CartCounter from '../Cart/CartCounter';
import { push } from 'react-router-redux';

class HeaderNav extends Component {
  render() {


  var toProducts = () => {
    this.props.dispatch((dispatch) => {
      dispatch(push('/products'))
    })
  }

  var toStyles = () => {
    this.props.dispatch((dispatch) => {
      dispatch(push('/styles'))
    })
  }

  var toHome = () => {
    this.props.dispatch((dispatch) => {
      dispatch(push('/'))
    })
  }

    return (
      <div className="nav-container">
          <nav className="primary-nav light">
              <a href="products" onClick={() => toProducts()}>Products</a>
              <a href="styles" onClick={() => toStyles()}>Styles</a>
          </nav>
          <div className="logo light">
            <a href="/" className="logo-link" onClick={() => toHome()}>
              <span className="hide-content"> IndividualistsREP </span>
                <div className="big-logo" aria-hidden="true">
                   <img className="small-logo" src="g" alt="" aria-hidden="true"/>
                          
                         
                   <div className="small-logo" aria-hidden="true">
                       
                     
                  </div>
            </a>
          </div>
          <nav className="secondary-nav light">
              <CartCounter />
          </nav>
      </div>
    )
  }
};

export default HeaderNav;
