import React from 'react'
import {graphql} from 'gatsby'
import hero from '../images/hero.jpg'

const Hero = () => {    
    const style = {
      width: '100vw',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center'

    }
    
    return(
      <div style={style}>
              <img
         alt="Gatsby G Logo"
         src={''}
       />
      </div>
    )
  }
  
export default Hero

