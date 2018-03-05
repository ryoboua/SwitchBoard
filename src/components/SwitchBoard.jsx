import React from 'react'
import Toggle from 'material-ui/Toggle'
import SlaveToggle from './SlaveToggle';
import SlaveToggleList from './SlaveToggleList'

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

        let num = 10
        let slaveStateHolder = {}

        for( let i = 0; i<num; i++) {
            slaveStateHolder['t'+i] = false
        }
        this.state = {  
        slaveStateHolder, master: false, masterOn: false, masterOff: true
        }
        this.masterSwitch = this.masterSwitch.bind(this)
        this.singleSwitch = this.singleSwitch.bind(this)
        this.masterSwitchOn = this.masterSwitchOn.bind(this)
        this.masterSwitchOff = this.masterSwitchOff.bind(this)
        this.toggleUpdate = this.toggleUpdate.bind(this)

    }

    singleSwitch(name, value) {
        this.setState({slaveStateHolder: {...this.state.slaveStateHolder, [name]: value }},() => {
            this.toggleUpdate(this.state.slaveStateHolder)
        })
    }

    masterSwitch() {
        let newStates = setAllToOpposite(this.state.slaveStateHolder)
        this.setState({slaveStateHolder: newStates, master: !this.state.master}, () => {
            this.toggleUpdate(this.state.slaveStateHolder)
            setTimeout(() => {
                this.setState({master: false})
            }, 400)
        })        
    }

    masterSwitchOn() {     
        let newStates = setAllTrue(this.state.slaveStateHolder)
        this.setState({slaveStateHolder: newStates, masterOn: !this.state.masterOn}, () =>{
            setTimeout(() => {
                this.setState({masterOff: true, masterOn: false})
            }, 500)
        })
    }
    masterSwitchOff() {
        let newStates = setAllFalse(this.state.slaveStateHolder)     
        this.setState({slaveStateHolder: newStates, masterOff: !this.state.masterOff}, () => {
            setTimeout(() => {
                this.setState({masterOff: false, masterOn: true})
            }, 500)
        })
        
    }

    toggleUpdate(slaveStateHolder){
        let booleanArray = []
        for(let bool in slaveStateHolder) {
            booleanArray.push(slaveStateHolder[bool])
        }
        isAllOn(booleanArray) ? this.setState({masterOn: false, masterOff: true}) : this.setState({masterOn: true})
        isAllOff(booleanArray) ? this.setState({masterOff: false, masterOn: true}) : this.setState({masterOff: true})
    }

    render(){     
        return (
            <div>
                <div style={{display: 'flex', width: '100%', margin: '50px 0px', paddingLeft: '15px', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >
                    <Toggle name='master' style={masterToggleStyle} thumbSwitchedStyle={{background:'red'}} trackSwitchedStyle={{background:'red'}} labelPosition='right' label={'Switch All'} toggled={this.state.master}  onToggle={this.masterSwitch} />
                    <Toggle name='masterOn' style={masterToggleStyle} thumbSwitchedStyle={{background:'red'}} trackSwitchedStyle={{background:'red'}} labelPosition='right' label={'Switch On'} toggled={this.state.masterOn}  onToggle={this.masterSwitchOn} />
                    <Toggle name='masterOff' style={masterToggleStyle} thumbSwitchedStyle={{background:'red'}} trackSwitchedStyle={{background:'red'}} labelPosition='right' label={'Switch Off'} toggled={this.state.masterOff}  onToggle={this.masterSwitchOff} />
                </div>
                <div>
                    <SlaveToggleList singleSwitch={this.singleSwitch} slaveStateHolder={this.state.slaveStateHolder}/>
                </div>
            </div>
        )
    }
}