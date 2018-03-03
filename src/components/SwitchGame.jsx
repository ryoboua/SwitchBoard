import React from 'react'
import Toggle from 'material-ui/Toggle'

const toggleStyle = {
    display: 'inline-block',
    width: '100px',
    margin: '0px 15px'
}


const isAllOn = function(arr) {
    let count = arr.filter(x => x === true)
    if(count.length === arr.length) return true
    return false
}

const isAllOff = function(arr) {
    let count = arr.filter(x => x === false)
    if(count.length === arr.length) return true
    return false
}
export default class SwitchGame extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            c1: true,
            c2: true,
            c3: true,
            master: false,
            masterOn: false,
            masterOff: true
        }
    this.masterSwitch = this.masterSwitch.bind(this)
    this.singleSwitch = this.singleSwitch.bind(this)
    this.masterSwitchOn = this.masterSwitchOn.bind(this)
    this.masterSwitchOff = this.masterSwitchOff.bind(this)
    this.toggleSetCheck = this.toggleSetCheck.bind(this)
    }

    singleSwitch(event) {
        let name = event.target.name
        this.setState({[name]: !this.state[name]})
        setTimeout(() => {
            this.toggleSetCheck()
        } , 1)
   
    }
    masterSwitch() {     
        this.setState({
            c1: !this.state.c1,
            c2: !this.state.c2,
            c3: !this.state.c3,
            master: !this.state.master
        })
        setTimeout(() => {
            this.toggleSetCheck()
            this.setState({master: false})
        } , 500)
    }

    masterSwitchOn() {     
        this.setState({
            c1: true,
            c2: true,
            c3: true,
            masterOn: !this.state.masterOn
        })
        setTimeout(() => {
            this.setState({masterOn: false, masterOff: true})
        } , 500)
        
    }
    masterSwitchOff() {     
        this.setState({
            c1: false,
            c2: false,
            c3: false,
            masterOff: !this.state.masterOff
        })
        setTimeout(() => {
            this.setState({masterOff: false, masterOn: true})
        } , 500)
    }

    toggleSetCheck(){
        let t1 = this.state.c1
        let t2 = this.state.c2
        let t3 = this.state.c3
        let arr = [t1,t2,t3]
        if (isAllOn(arr)) this.setState({masterOn: false, masterOff: true})
        if (isAllOff(arr)) this.setState({masterOff: false, masterOn: true})
    }     

    render(){ 
        return (
            <div style={{display: 'flex', width: '100%', margin: '50px 0px', paddingLeft: '15px', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >
                <Toggle name='c1' style={toggleStyle} label={''} toggled={this.state.c1} onToggle={this.singleSwitch} />
                <Toggle name='c2' style={toggleStyle} label={''} toggled={this.state.c2} onToggle={this.singleSwitch}/>
                <Toggle name='c3' style={toggleStyle} label={''} toggled={this.state.c3} onToggle={this.singleSwitch}/>
                <Toggle name='master' style={toggleStyle} labelPosition='right' label={'Switch All'} toggled={this.state.master}  onToggle={this.masterSwitch} />
                <Toggle name='masterOn' style={toggleStyle} labelPosition='right' label={'Switch On'} toggled={this.state.masterOn}  onToggle={this.masterSwitchOn} />
                <Toggle name='masterOff' style={toggleStyle} labelPosition='right' label={'Switch Off'} toggled={this.state.masterOff}  onToggle={this.masterSwitchOff} />                
            </div>
        )
    }
}
