import React from 'react'
import SimpleWebRTC from 'simplewebrtc'

class HoldConferenceVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        text: '',
        isBlack: false,
        isSepia: false
    }
    }

    handleStop() {
        this.webrtc.pause()
        this.setState({
            isBlack: !this.state.isBlack
        })
    }

    handleResume() {
        this.webrtc.pause()
        this.setState({
            isSepia: !this.state.isSepia
        })
    }

  componentWillMount() {
    this.webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remotesVideos',
      autoRequestMedia: true
    })
  }

  render(){
    return(
      <div className='screen'>
        <h3>{this.props.title}</h3>
            <div className={`videoContainer ${this.state.isBlack ? 'black' : null} ${this.state.isSepia ? 'sepia' : null}`}>
                <video id="localVideo" className={`screenVideo ${this.state.isBlack ? 'black' : null} ${this.state.isSepia ? 'sepia' : null}`}></video>
          <div id="remotesVideos"></div>
            </div>
            <div className='icons'>
                <a href='#'><i className='gray zmdi zmdi-fullscreen'></i></a>
                <a href='#' onClick={this.handleStop.bind(this)}><i className='list-group-item gray zmdi zmdi-phone-end'></i></a>
                <a href='#' onClick={this.handleResume.bind(this)}><i className='list-group-item gray zmdi zmdi-assignment-check'></i></a>
                <a href='#'><i className='list-group-item gray zmdi zmdi-volume-up'></i></a>
                <a href='#'><i className='list-group-item gray zmdi zmdi-mic'></i></a>
                <a href='#'><i className='list-group-item gray zmdi zmdi-videocam'></i></a>
                <a href='#'><i className='list-group-item gray zmdi zmdi-account'></i></a>
                <a href='#'><i className='list-group-item gray zmdi zmdi-input-svideo'></i></a>
                <a href='#'><i className='list-group-item gray zmdi zmdi-remote-control'></i></a>
            </div>
      </div>
    )
  }
}
export default HoldConferenceVideo
 