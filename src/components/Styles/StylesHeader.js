import React, {Component} from 'react';
import { push } from 'react-router-redux';
import CartCounter from '../Cart/CartCounter';
import { connect } from 'react-redux';

import Modern from '../../assets/img/modern.png';
import Silver from '../../assets/img/silver.png';
import Bright from '../../assets/img/bright.png';
import Unique from '../../assets/img/unique.png';

function mapStateToProps(state) {
  return state
};

class StylesHeader extends Component {
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
    
    var Header = null;

    switch (this.props.styles.header) {
      case "Modern": Header = Modern;
      break;
      case "Silver": Header = Silver;
      break;
      case "Bright": Header = Bright;
      break;
      case "Unique": Header = Unique;
      break;
      default: Header = null;
    }
    console.log(this.props.styles.header)
    
    return (
      <header className="medium-header light push" style={{"backgroundImage": `url(${Header})`, "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center", "backgroundOrigin": "border-box", "backgroundAttachment": "scroll"}}>
        <div className="nav-container">
          <nav className="primary-nav">
            <a href="products" onClick={() => toProducts()}>Products</a>
            <a href="styles" onClick={() => toStyles()}>Styles</a>
          </nav>
         
         
          <nav className="secondary-nav light">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container light">
          <div className="content">
              <h1>{this.props.styles.style}<span className="hide-content"> styles</span></h1>
          </div>
      </div>
      </header>
    )
  };
};

export default connect(mapStateToProps)(StylesHeader);
