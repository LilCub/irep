import React, {Component} from 'react';
import { push } from 'react-router-redux';
import CartCounter from '../Cart/CartCounter';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state
};

class ProductHeader extends Component {
  
  componentWillMount() {
       const script = document.createElement("script");

       script.src = "../../js/production.min.js";
       script.async = false;

       document.body.appendChild(script);
   }
  
  render() {
    
    var ID = this.props.router.location.pathname.slice(9, 100)

    var productArray = this.props.products.products.data.filter(function(product) {
      return product.id === ID;
    })

    var product = productArray[0];
    
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
      <header className="push">
        <div className="nav-container">
          <nav className="primary-nav">
            <a href="products" onClick={() => toProducts()}>Products</a>
            <a href="styles" onClick={() => toStyles()}>Styles</a>
          </nav>
          <div className="logo">
            <a href="/" className="logo-link" onClick={() => toHome()}>
              <span className="hide-content">IndividualistsREP</span>
       
                   
            </a>
          </div>
          <nav className="secondary-nav">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container hide-content">
      <div className="content">
          <h1>Product details for {product.name}</h1>
      </div>
  </div>
      </header>
    )
  };
};

export default connect(mapStateToProps)(ProductHeader);
