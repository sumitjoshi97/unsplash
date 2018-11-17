import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../Button'
import { loadImages } from '../../actions'
import './styles.css'

class ImageGrid extends Component {
  render() {
    const { images, error, isLoading } = this.props
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
          <Button loading={isLoading} onClick={this.props.loadImages}>
            Load Images
          </Button>
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
      </div>
    )
  }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error
})

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGrid)
