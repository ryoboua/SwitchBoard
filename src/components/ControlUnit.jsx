import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const masterButtonStyle = {

}

export default class ControlUnit extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        let masterType = event.target.innerText
        
    switch(masterType){
        case 'SWITCH ALL':
        this.props.masterSwitch()
        break;
        case 'SWITCH ON':
        this.props.masterSwitchOn()
        break;
        case 'SWITCH OFF':
        this.props.masterSwitchOff()
        break;
        default:
            console.log('you broke me')
    }
    }

    render() {
        return (
            <div style={{display: 'flex', width: '100%', margin: '50px 0px', paddingLeft: '15px', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >
                <RaisedButton className='master' onClick={this.handleClick} disabled={this.props.masterStateHolder.master} labelColor='#FFFFFF' backgroundColor='#FC5759' style={masterButtonStyle} label={'Switch All'}   />
                <RaisedButton className='masterOn' onClick={this.handleClick} disabled={this.props.masterStateHolder.masterOn} labelColor='#FFFFFF' backgroundColor='#FC5759' style={masterButtonStyle} label={'Switch On'} />
                <RaisedButton className='masterOff' onClick={this.handleClick} disabled={this.props.masterStateHolder.masterOff} labelColor='#FFFFFF' backgroundColor='#FC5759' style={masterButtonStyle} label={'Switch Off'} />
            </div>
        )   
    }
}


// disabled={this.props.master}
// disabled={this.props.masterOn}
// disabled={this.props.masterOff}