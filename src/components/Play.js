import React, { Component } from 'react'
import YouTube from 'react-youtube'

class ReactTube extends Component {
  videoOnReady (event) {
    // Dá acesso a todos os eventos do player via event.target
    // event.target.playVideoAt(50) // 50 seconds
    const player = event.target
    //  Um protótipo para funciona com o histórico via getCurrentTime usando this.setState({  playerObj: player
    //   componentWillUnmount () {
    //     const {playerObj} = this.state
    //     console.log(player.getCurrentTime())
    //   }})

    player.seekTo()
    console.log(event.target)
  }
  videoOnPlay (event) {
    // access to player in all event handlers via event.target
    // event.target.playVideoAt(50) // 50 seconds
    const player = event.target
    console.log(player.getCurrentTime())
  }
  videoStateChange (event) {
    const player = event.target
    console.log(player.getCurrentTime())
  }

//   componentWillUnmount () {
//     const {playerObj} = this.state
//     console.log(player.getCurrentTime())
//   }
  render () {
    const opts = {
      height: '490',
      width: '900',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
    const {videoId} = this.props
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
      />
    )
  }
}

export default ReactTube;