import React from 'react'
import SlaveToggle from './SlaveToggle';

const generateToggleSalves = function(numOfSlaves) {
    let toggleGroup = []
    let toggles = []

    for (let i = 0; i < numOfSlaves; i++) {
        let x = 't'+ i
     if(i === 0) {
            toggles.push(x)
        } else if(i % 5 === 0) {
            toggleGroup.push(toggles)
            toggles = []
            toggles.push(x)
        } else {
            toggles.push(x)
        }
    }
    toggleGroup.push(toggles)
    return toggleGroup
}
const listStyle = {
    listStyle: 'none',
    display: 'flex',
    width: '100%', 
    margin: '50px 0px', 
    paddingLeft: '15px', 
    flexWrap: 'wrap', 
    justifyContent: 'space-evenly'
}

export default class SlaveToggleList extends React.Component {
    constructor(props){
        super(props)
        this.toggleList = this.toggleList.bind(this)
        this.callSingleSwitch = this.callSingleSwitch.bind(this)
    }

    callSingleSwitch(name, value){
        this.props.singleSwitch(name, value)
    }
    toggleList() {
        const slaveStateHolder = this.props.slaveStateHolder
        const num = Object.keys(slaveStateHolder).length
        const toggleSlaveList = generateToggleSalves(num).map( (toggles, index) => {
            const group = toggles.map(t => <SlaveToggle key={t} toggleName={t} toggleValue={slaveStateHolder[t]} callSingleSwitch={this.callSingleSwitch}  />)
            return <ul key={'group'+ index} style={listStyle} >{group}</ul>
        })
        return <div>{toggleSlaveList}</div>   
    }



    render(){ return this.toggleList() }
 
}