import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="push">
        <div className="content">
          <div className="footer-content">
            <div className="footer-about">
                <div className="footer-header">
                    <span className="hide-content">IndividualistsREP</span>
                   
                </div>
                
            </div>
            <nav className="footer-links">
                <dl>
                    <dt className="footer-header">
                        <span className="hide-content">@ irep</span>
                       
                    </dt>
                    <dd><a href="/">About</a></dd>
                    <dd><a href="/">Shipping & Returns</a></dd>
                    <dd><a href="/">Privacy Policy</a></dd>
                    <dd><a href="/">T&Cs</a></dd>
                </dl>
            </nav>
            <nav className="footer-social">
              <dl>
                  <dt className="footer-header">
                      <span className="hide-content">We love social</span>
                     
                      
                  </dt>
                  <dd><a href="https://theindividualists.tk/">Home</a></dd>
                  <dd><a href="https://individualistsrepublic.tumblr.com/">Tumblr</a></dd>
                  <dd><a href="https://twitter.com/RepIndividual">Twitter</a></dd>
                  <dd><a href="https://www.instagram.com/individualistsrep">Instagram</a></dd>
              </dl>
            </nav>
          </div>
        </div>
      </footer>
    )
  }
};

export default Footer;
