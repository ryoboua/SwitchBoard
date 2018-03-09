import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import TextField from 'material-ui/TextField';


const masterButtonStyle = {

}

export default class ControlUnit extends React.Component {
    constructor(props){
        super(props)
        this.state = {numberOfToggles: 1}
        this.handleClick = this.handleClick.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handlePlus = this.handlePlus.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
    handleMinus() {
        let numberOfToggles = this.state.numberOfToggles
        numberOfToggles = numberOfToggles - 1
        this.setState({numberOfToggles: numberOfToggles})    

    }

    handlePlus() {
        let numberOfToggles = this.state.numberOfToggles
        numberOfToggles = numberOfToggles + 1
        this.setState({numberOfToggles: numberOfToggles})    
    }

    handleChange(){
        this.props.updateNumberToggles(this.state.numberOfToggles)
    }

    render() {
        return (
            <div>
            <div style={{display: 'flex', width: '100%', margin: '50px 0px', paddingLeft: '15px', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >
                    <FloatingActionButton onClick={this.handleMinus} >
                        <ContentRemove />
                    </FloatingActionButton>
                    <TextField value={this.state.numberOfToggles} onChange={this.handleChange}  disabled={true} />
                    <FloatingActionButton onClick={this.handlePlus}>
                        <ContentAdd />
                    </FloatingActionButton>
            </div>
            <div style={{display: 'flex', width: '100%', margin: '50px 0px', paddingLeft: '15px', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >
                <RaisedButton className='master' onClick={this.handleClick} disabled={this.props.masterStateHolder.master} labelColor='#FFFFFF' backgroundColor='#FC5759' style={masterButtonStyle} label={'Switch All'}   />
                <RaisedButton className='masterOn' onClick={this.handleClick} disabled={this.props.masterStateHolder.masterOn} labelColor='#FFFFFF' backgroundColor='#FC5759' style={masterButtonStyle} label={'Switch On'} />
                <RaisedButton className='masterOff' onClick={this.handleClick} disabled={this.props.masterStateHolder.masterOff} labelColor='#FFFFFF' backgroundColor='#FC5759' style={masterButtonStyle} label={'Switch Off'} />
            </div>
            </div>
        )   
    }
}
