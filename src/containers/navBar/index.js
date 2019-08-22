import React from 'react';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'

class MainNavBar extends React.Component {

  render() {

    let { items, location} = this.props;
    return <div className={''}>
      <nav className=" navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">
          <img src={logo} alt="brand"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {items && items.length > 0 && items.map((item, i) =>
              <li key={i} className={item.route === location ? "nav-item active" : "nav-item "}>
                <Link className="nav-link" to={item.route}>{item.text}</Link>
              </li>)}
          </ul>
        </div>
      </nav>
    </div>
  }
}

const mapStateToProps = ({ reducer, router }) => ({
  loading: reducer.loading,
  location: router.location.pathname.replace('/','')
});

export default connect(mapStateToProps)(MainNavBar)
