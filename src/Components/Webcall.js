import React from 'react'
import SimpleWebRTC from 'simplewebrtc'

class WebRtcDemo extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      room: 'Welcome! Join a Room.',
      text: '',
      buttons: false,
      isSepia: false,
    }
  }

  componentWillMount() {
    this.webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: '',
      autoRequestMedia: true
    })

  }

  handleJoin() {
    this.webrtc.joinRoom(this.state.text)
    this.webrtc.startLocalVideo()
    this.setState({text: '', room: this.state.text, buttons: true})
  }
  
  onChange(e){
    this.setState({text: e.target.value})
  }
  
  checkEnter(e) {
    if (e.charCode === 13) {
      this.handleJoin()
    }
  }
  
  handlePause() {
      this.webrtc.pause()
      this.setState({
          isSepia: !this.state.isSepia
      })
  }
  
  handleResume() {
      this.webrtc.resume()
  }
  
  
  handleLeave(){
    this.webrtc.leaveRoom()
    this.webrtc.stopLocalVideo()
    this.setState({room: 'Welcome! Join a Room.', buttons: false})
  }


  handleShareScreen() {
    this.webrtc.shareScreen()
  }

  render() {
    var btnState = this.state.buttons ? 'vidButton' : 'hidden'
    var joined = this.state.buttons ? 'hidden' : 'vidButton'
    return (
      <div>
        <div className="vidContainer">
          <div id="remotes"></div>
          <div>
             <button className={btnState} onClick={this.handleResume.bind(this)}>Resume</button>
             <button className={this.state.isSepia ? 'sepia' : null} onClick={this.handlePause.bind(this)}>Pause</button>
          </div>
        </div>
            <div className="vidContainer">
          <div id="remoteVideos"></div>
        </div>
        <button onClick={this.handleShareScreen.bind(this)} id="screenShareButton">Share screen</button>
        <p id="subTitle"></p>
      </div>
    )
  }
}

export default WebRtcDemo
