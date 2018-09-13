import React from 'react'
import SlaveToggleList from './SlaveToggleList'

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

        let numOfToggles = this.props.numberOfToggles
        let slaveStateHolder = {}

        for( let i = 0; i < numOfToggles; i++) {
            slaveStateHolder['t' + i] = false
        }

        this.state = { slaveStateHolder }

        this.masterSwitch = this.masterSwitch.bind(this)
        this.singleSwitch = this.singleSwitch.bind(this)
        this.masterSwitchOn = this.masterSwitchOn.bind(this)
        this.masterSwitchOff = this.masterSwitchOff.bind(this)
    }


    singleSwitch(name, value) {
        this.setState({slaveStateHolder: {...this.state.slaveStateHolder, [name]: value }}, () => {
            this.props.toggleUpdate(this.state.slaveStateHolder)
        })
    }

    masterSwitch() {
        let newSlaveStates = setAllToOpposite(this.state.slaveStateHolder)
        this.setState({slaveStateHolder: newSlaveStates}, () => {
            this.props.toggleUpdate(this.state.slaveStateHolder)
        })        
    }

    masterSwitchOn() {     
        let newSlaveStates = setAllTrue(this.state.slaveStateHolder)
        this.setState({slaveStateHolder: newSlaveStates}, () => {
            this.props.toggleUpdate(this.state.slaveStateHolder)
        })

    }
    masterSwitchOff() {
        let newSlaveStates = setAllFalse(this.state.slaveStateHolder)
        this.setState({slaveStateHolder: newSlaveStates}, () => {
            this.props.toggleUpdate(this.state.slaveStateHolder)
        })
    }

    updateNumberOfToggles(eventType ,numberOfToggles){
        
        switch(eventType){
            case 'plus':
                this.setState({slaveStateHolder: {...this.state.slaveStateHolder, ['t'+ numberOfToggles]: true}}, () => {
                    this.props.toggleUpdate(this.state.slaveStateHolder)
                })
            break;
            case 'minus':
                delete this.state.slaveStateHolder['t' + numberOfToggles]
                this.props.toggleUpdate(this.state.slaveStateHolder)
            break;
            default:
                console.log('you broke me')
        }
    }

    render(){     
        return (
            <div>
                <SlaveToggleList 
                    singleSwitch={this.singleSwitch} 
                    slaveStateHolder={this.state.slaveStateHolder}
                />
            </div>
        )
    }
}


