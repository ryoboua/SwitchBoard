import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SwitchBoard from './SwitchBoard';
import TextField from 'material-ui/TextField';

const style = {
    margin: '15px',
    padding: '0px 10px',
    fontSize: '18px',
    borderRadius: '12px',
    background: '#FC5759'
}

class SwitchBoardEnclosure extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isShowingForm: false, numOfToggles: 1 }
        this.handleShowForm = this.handleShowForm.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }    
    handleShowForm(e) {
        e.preventDefault()
        this.setState({ isShowingForm: true })
    }

    handleChange(e){
        this.setState({numOfToggles: e.target.value})
    }

    switchBoardSettings() {
        return (
            <div>
                <TextField onChange={this.handleChange} style={{textAlign: 'center'}} hintText='Number of switches'/>
                <br/>
                <br/>
                <RaisedButton onClick={this.handleShowForm} backgroundColor='#FC5759' style={style}>Generate Switch Board</RaisedButton>
            </div>
        )
    }
     
    render () {
        const isShowingForm = this.state.isShowingForm

        let form = null;

        if(!isShowingForm){
            form = this.switchBoardSettings()   
        } else {
            form = <SwitchBoard numOfToggles={this.state.numOfToggles} />
        }
        return (
           <div>{form}</div>
        )
    }
    
}

export default SwitchBoardEnclosure