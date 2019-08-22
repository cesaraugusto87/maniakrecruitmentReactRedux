import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchContent, increment, decrement } from '../../actions'
import Loading from '../../components/Loading'

import './style.css'

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchContent('page1.json')
  }

  render() {
    let { pageData, currentPage, increment, decrement, loading } = this.props
    const reviewsLength = pageData && pageData.slider ? pageData.slider.reviews.length : 0

    return pageData && pageData.slider && loading === false ? (
      <div>
        <div className={'homeTitle'}>
          <h1>{pageData.slider.title}</h1>
        </div>
        {pageData.slider.reviews.length > 0 ? (
          <div className={'row testimonialRectangle'}>
            <div className={'col-md-6'}>
              <h1>{pageData.slider.reviews[currentPage].name}</h1>
              <h4>{pageData.slider.reviews[currentPage].position}</h4>
            </div>
            <div className={'col-md-6 '}>
              <p>"{pageData.slider.reviews[currentPage].comment}"</p>
            </div>
          </div>
        ) : (
          <div className={'testimonialRectangle'}>No Testimonials </div>
        )}
        <div className={'d-flex flex-row-reverse'}>
          <div className='actionRectangle p-2'>
            <a onClick={currentPage + 1 < reviewsLength ? increment : null}>{'>'}</a>
          </div>
          <div className='actionRectangle p-2'>
            <a onClick={currentPage > 0 ? decrement : null}>{'<'}</a>
          </div>
          <div className='totalRectangle p-2'>
            <a>
              {currentPage + 1}/{reviewsLength}
            </a>
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    )
  }
}

const mapStateToProps = ({ reducer }) => ({
  pageData: reducer.pageData,
  loading: reducer.loading,
  currentPage: reducer.currentPage,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      fetchContent,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
