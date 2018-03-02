import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';

const toggleStyle = {
    display: 'inline-block',
    width: '100px',
    margin: '0px 15px'
}
export default class QuestionnaireForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            c1: true,
            c2: true,
            c3: true,
            master: false
        }
    this.masterSwitch = this.masterSwitch.bind(this)
    this.singleSwitch = this.singleSwitch.bind(this)
    }

    singleSwitch(event) {
        let name = event.target.name
        this.setState({[name]: !this.state[name]})
    }
    masterSwitch() {     
        this.setState({
            c1: !this.state.c1,
            c2: !this.state.c2,
            c3: !this.state.c3,
            master: !this.state.master
        })
  
    }
    render(){
        return (
            <div style={{display: 'flex', width: '100%', marginBottom: '30px', paddingLeft: '15px', flexWrap: 'wrap'}} >
                <Toggle name='c1' style={toggleStyle} label={'Canada'} toggled={this.state.c1} onToggle={this.singleSwitch} />
                <Toggle name='c2' style={toggleStyle} label={'England'} toggled={this.state.c2} onToggle={this.singleSwitch}/>
                <Toggle name='c3' style={{...toggleStyle, width: '150px'}} label={'United States'} toggled={this.state.c3} onToggle={this.singleSwitch}/>
                <Toggle name='master' style={toggleStyle} label={'Light Switch'} toggled={this.state.master}  onToggle={this.masterSwitch} />                
            </div>
        )
    }
}


// this.setState(prevState => ({
//     [name]: !prevState.name
// }));