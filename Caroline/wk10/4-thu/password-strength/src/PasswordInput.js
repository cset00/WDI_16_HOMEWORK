import React from 'react'
import './PasswordInput.css'
const estimateStrength = require('./estimateStrength')
const scoreToStrength = require('./scoreToStrength')

export default class PasswordInput extends React.Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      content: ''
    }
  }

  handleChange(event){
    event.persist()  
    this.setState(()=>{
        return {content: event.target.value}
      })
    
  }

  render(){
    const { content } = this.state
    const passScore = estimateStrength(content)
    const strength = scoreToStrength(passScore.score)
    // const divStyle = passScore.score > 3 ?  'backgroundColor: green;' : ''

    return <div>
      <h1>test my password's strength</h1>
      <input className='pass-input-box' onChange={this.handleChange} type="password" name="" id="" cols="30" rows="2"></input>
      
      <div className="pass-strength"> {strength} </div>
      
    </div>
  }
}


// need to track content
// need to see what's in the content
// has uppercase, lowercase
// 8 characters or more
// numbers
// non alpha numeric characters