import React from 'react'
import Textarea from 'react-textarea-autosize'

class WriteNotes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false, 
    }
  }
  toggleNotes(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  downloadTxtFile(){
    var element = document.createElement('a')
    var file = new Blob([document.getElementById('MyTextarea').value], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = 'myFile.txt'
    element.click()
  }
  render() {
    const button = (
      <button className='app-nav__btn o-btn o-btn--1 buttonForNotes' onClick={this.toggleNotes.bind(this)}>
        <i className="zmdi zmdi-edit"></i>
          {this.state.isOpen ? 'Hide notes' : 'Write notes'}
      </button>
    )
    return (
      <div>
            { /*button */}
            <Textarea id='MyTextarea' className={`writeNotes ${this.state.isOpen ? 'open' : 'hide'}`}></Textarea>
        <button className={`downloadNotes app-nav__btn o-btn o-btn--1 ${this.state.isOpen ? 'open' : 'hide'}`} onClick={this.downloadTxtFile}>Download txt</button>
      </div>
    )
  }
}

const note = [{}]

class HoldConferenceNotes extends React.Component{
  renderNotes(item, key){
    return (
      <WriteNotes key={key}/>
    )
  }
  render(){
    return(
      <div>
        {note.map(this.renderNotes)}
      </div>
    )
  }
}

export default HoldConferenceNotes