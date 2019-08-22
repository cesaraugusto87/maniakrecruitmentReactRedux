import React from 'react'

class Loading extends React.Component {
  render() {
    return (
      <div className='my-box d-flex justify-content-center'>
        {' '}
        <div className='spinner-border' style={{ width: '5rem', height: '5rem' }} role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    )
  }
}

export default Loading
