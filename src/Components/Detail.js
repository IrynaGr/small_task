import React from 'react'
import HoldConferenceVideo from './HoldConferenceVideo'
import HoldConferenceNotes from './HoldConferenceNotes'

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conferences: {
        id: 1,
        title: 'Webinar 1',
        date: 'start_date',
        description: 'description',
        members: [],
        keywords: 'keywords'
      }
    }
  }

  render() {
    return (
      <div className='holdConference' id={this.state.id} >
        <div className='rightSideOfCall'>
          <div className='callMainFon'>
            <h3>{this.state.conferences.title}</h3>
                    <HoldConferenceVideo title={this.state.title} />
          </div>
        </div>
        <div className='leftSideOfCall'>
          <div className='callMainFon'>
          </div>
          <HoldConferenceNotes/>
        </div>
      </div>
    )
  }
}

export default Detail