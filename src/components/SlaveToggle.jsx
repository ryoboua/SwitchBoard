import React from 'react'
import Toggle from 'material-ui/Toggle'

const toggleStyle = {
    display: 'inline-block',
    width: '100px',
    margin: '0px 15px'
}

export default class SlaveToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this)

    }
    handleToggle(event, value) {
        let name = event.target.name
        this.props.callSingleSwitch(name, value)
    }

    render() {
        return <li><Toggle name={this.props.toggleName} style={toggleStyle} toggled={this.props.toggleValue} onToggle={this.handleToggle} /></li>
    }
}