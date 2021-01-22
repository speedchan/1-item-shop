import React from 'react'
import heroImg from '../images/kokchi1.jpg'

const Carousel = (props) => {
    return (
        <img src={heroImg} alt="Hero" className='hero-img' loading='eager'/>
    )
}

Carousel.propTypes = {}

export default Carousel
