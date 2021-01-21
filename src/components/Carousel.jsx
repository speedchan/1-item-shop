import React from 'react'
import {mainImageUrl} from '../Constants'
import PropTypes from 'prop-types';

const Carousel = (props) => {
    return (
        <img src={mainImageUrl}
         className="App-logo" alt="logo" />
    )
}

Carousel.propTypes = {}

export default Carousel
