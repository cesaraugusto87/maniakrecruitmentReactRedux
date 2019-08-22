import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPage } from '../actions'
import MainNavBar from '../containers/navBar'
import Home from '../containers/home'
import Calculator from '../containers/page2'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound'
export const MENU_ENDPOINT = 'app.json'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPage(MENU_ENDPOINT)
  }

  render() {
    const { menu } = this.props
    return menu && menu.items ? (
      <div>
        <header>
          <MainNavBar
            items={this.props.menu ? this.props.menu.items : []}
            activeMenu={'Testimonial'}
          />
        </header>
        <div className={'container'}>
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/page-1' component={Home} />
              <Route exact path='/page-2' component={Calculator} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    ) : (
      <Loading />
    )
  }
}

const mapStateToProps = ({ reducer }) => ({
  menu: reducer.menu,
  loading: reducer.loading,
})

export default connect(
  mapStateToProps,
  { fetchPage }
)(App)
