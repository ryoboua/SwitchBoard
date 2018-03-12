import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import TextField from 'material-ui/TextField';
import SwitchBoard from './SwitchBoard';

const isAllOn = arr => {
    let count = arr.filter(x => x === true)
    if(count.length === arr.length) return true
    return false
}

const isAllOff = arr => {
    let count = arr.filter(x => x === false)
    if(count.length === arr.length) return true
    return false
}

export default class ControlUnit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            numberOfToggles: 5,
            master: false,
            masterOn: false,
            masterOff: true,
            flag: false        
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handlePlus = this.handlePlus.bind(this)
        this.toggleUpdate = this.toggleUpdate.bind(this)

    }

    handleClick(event) {
        let masterType = event.target.innerText
        
        switch(masterType){
            case 'SWITCH ALL':
            this.switchBoard.masterSwitch()
            break;
            case 'SWITCH ON':
            this.switchBoard.masterSwitchOn()
            break;
            case 'SWITCH OFF':
            this.switchBoard.masterSwitchOff()
            break;
            default:
                console.log('you broke me')
        }
    }

    toggleUpdate(slaveStateHolder){
        let booleanArray = []
        for(let bool in slaveStateHolder) {
            booleanArray.push(slaveStateHolder[bool])
        }
        if(isAllOn(booleanArray)){
            this.setState({masterOn: true, masterOff: false })            
        } else if(isAllOff(booleanArray)){
            this.setState({masterOn: false, masterOff: true })             
        } else {
            this.setState({masterOn: false, masterOff: false })   
        }
    }

    handlePlus() {
        let numberOfToggles = this.state.numberOfToggles
        numberOfToggles = numberOfToggles + 1
        this.setState({numberOfToggles: numberOfToggles, flag: false}) 
        this.switchBoard.updateNumberOfToggles('plus',(numberOfToggles - 1))
    }

    handleMinus() {
        let numberOfToggles = this.state.numberOfToggles
        numberOfToggles = numberOfToggles - 1;
        (numberOfToggles === 1) ? this.setState({numberOfToggles: numberOfToggles, flag: true}) : this.setState({numberOfToggles: numberOfToggles})
        this.switchBoard.updateNumberOfToggles('minus',numberOfToggles)    
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', width: '100%', margin: '50px 0px', paddingLeft: '15px', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >
                <FloatingActionButton onClick={this.handleMinus} disabled={this.state.flag} > <ContentRemove /> </FloatingActionButton>
                        
                    <TextField name='numberOfToggles' value={this.state.numberOfToggles} disabled={false} />
                        
                    <FloatingActionButton onClick={this.handlePlus}> <ContentAdd /> </FloatingActionButton>
                </div>
                <div style={{display: 'flex', width: '100%', margin: '50px 0px', paddingLeft: '15px', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >
                    <RaisedButton className='master' onClick={this.handleClick} disabled={this.state.master} labelColor='#FFFFFF' backgroundColor='#FC5759' label={'Switch All'}   />
                    <RaisedButton className='masterOn' onClick={this.handleClick} disabled={this.state.masterOn} labelColor='#FFFFFF' backgroundColor='#FC5759' label={'Switch On'} />
                    <RaisedButton className='masterOff' onClick={this.handleClick} disabled={this.state.masterOff} labelColor='#FFFFFF' backgroundColor='#FC5759' label={'Switch Off'} />
                </div>
                <SwitchBoard ref={instance => { this.switchBoard = instance }} 
                    toggleUpdate={this.toggleUpdate} 
                    numberOfToggles={this.state.numberOfToggles} 
                />
            </div>
        )   
    }
}
