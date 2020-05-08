import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
export default class YoutubePlayer extends Component {
  render () {
    return (
      
      <div className='container'>
        <h1 className="center">While the text is being extracted from your uploaded image ...</h1>
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=V6bhe6kiUko'
          width='100%'
          height='100%'
          playing
        />
        </div>
        <h1 className="center">At completion of the text extraction you will be automatically redirected to your pie chart</h1>
    </div>
    )
  }
}