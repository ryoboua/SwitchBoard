import React from 'react'
import Toggle from 'material-ui/Toggle'
import SlaveToggle from './SlaveToggle';
import SlaveToggleList from './SlaveToggleList'
import ControlUnit from './ControlUnit'

const masterToggleStyle = {
    display: 'inline-block',
    width: '100px',
    margin: '0px 15px'
}

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

const setAllTrue = slaveStateHolder => {
    for(let t in slaveStateHolder){
        slaveStateHolder = {...slaveStateHolder, [t]: true}
    }
    return slaveStateHolder
}

const setAllFalse = slaveStateHolder => {
    for(let t in slaveStateHolder){
        slaveStateHolder = {...slaveStateHolder, [t]: false}
    }
    return slaveStateHolder
}

const setAllToOpposite = slaveStateHolder => {
    for(let t in slaveStateHolder){
        slaveStateHolder = {...slaveStateHolder, [t]: !slaveStateHolder[t]}
    }
    return slaveStateHolder
}

export default class SwitchBoard extends React.Component {

    constructor(props){
        super(props)

        let numOfToggles = 5 //this.props.numOfToggles
        let slaveStateHolder = {}

        for( let i = 0; i < numOfToggles; i++) {
            slaveStateHolder['t' + i] = false
        }

        const masterStateHolder = { 
            master: false, 
            masterOn: false, 
            masterOff: true
        }

        this.state = {slaveStateHolder, masterStateHolder, numOfToggles: numOfToggles }

        this.masterSwitch = this.masterSwitch.bind(this)
        this.singleSwitch = this.singleSwitch.bind(this)
        this.masterSwitchOn = this.masterSwitchOn.bind(this)
        this.masterSwitchOff = this.masterSwitchOff.bind(this)
        this.toggleUpdate = this.toggleUpdate.bind(this)
        this.updateNumberOfToggles = this.updateNumberOfToggles.bind(this)
    }


    singleSwitch(name, value) {
        this.setState({slaveStateHolder: {...this.state.slaveStateHolder, [name]: value }}, () => {
            this.toggleUpdate(this.state.slaveStateHolder)
        })
    }

    masterSwitch() {
        let newSlaveStates = setAllToOpposite(this.state.slaveStateHolder)
        this.setState({slaveStateHolder: newSlaveStates}, () => {
            this.toggleUpdate(this.state.slaveStateHolder)
        })        
    }

    masterSwitchOn() {     
        let newSlaveStates = setAllTrue(this.state.slaveStateHolder)
        this.setState({slaveStateHolder: newSlaveStates}, () => {
            this.toggleUpdate(this.state.slaveStateHolder)
        })

    }
    masterSwitchOff() {
        let newSlaveStates = setAllFalse(this.state.slaveStateHolder)
        this.setState({slaveStateHolder: newSlaveStates}, () => {
            this.toggleUpdate(this.state.slaveStateHolder)
        })
    }

    toggleUpdate(slaveStateHolder){
        let booleanArray = []
        for(let bool in slaveStateHolder) {
            booleanArray.push(slaveStateHolder[bool])
        }
        if(isAllOn(booleanArray)){
            this.setState({masterStateHolder: {...this.state.masterStateHolder, masterOn: true, masterOff: false }})            
        } else if(isAllOff(booleanArray)){
            this.setState({masterStateHolder: {...this.state.masterStateHolder, masterOn: false, masterOff: true }})             
        } else {
            this.setState({masterStateHolder: {...this.state.masterStateHolder, masterOn: false, masterOff: false }})   
        }
    }

    updateNumberOfToggles(eventType, newNumOfToggles){
        this.setState({numOfToggles: newNumOfToggles})
        console.log(eventType, newNumOfToggles)
    }

    render(){     
        return (
            <div>
                <ControlUnit 
                    updateNumberOfToggles={this.updateNumberOfToggles} 
                    masterSwitch={this.masterSwitch} 
                    masterSwitchOn={this.masterSwitchOn} 
                    masterSwitchOff={this.masterSwitchOff} 
                    masterStateHolder={this.state.masterStateHolder} 
                />
                <SlaveToggleList 
                    singleSwitch={this.singleSwitch} 
                    slaveStateHolder={this.state.slaveStateHolder}
                />
            </div>
        )
    }
}


