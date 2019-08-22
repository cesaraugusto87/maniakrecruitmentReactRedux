import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchPage} from '../actions'
import MainNavBar from '../containers/navBar'
import Home from '../containers/home'
import Calculator from '../containers/page2'

export const MENU_ENDPOINT = 'app.json';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPage(MENU_ENDPOINT)
  }

  render() {
    return <div>
      <header>
        <MainNavBar items={this.props.menu ? this.props.menu.items : []} activeMenu={'Testimonial'}/>
      </header>
      <div className={'container'}>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/page-1" component={Home} />
            <Route exact path="/page-2" component={Calculator} />
            <Route component={Calculator} />
          </Switch>
        </main>
      </div>
    </div>
  }
}

const mapStateToProps = ({ reducer }) => ({
  menu: reducer.menu,
  loading: reducer.loading
});

export default connect(mapStateToProps, { fetchPage })(App)
