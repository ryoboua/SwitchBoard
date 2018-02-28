import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import SortableComponent from './SortList'
import Divider from 'material-ui/Divider';
import CountryFilter from './CountryFilter'

//const intro = "Having a hard time picking which univerisity to study at? Fill out the form below to get recommendations on which univeristies you should attend based on the student ratings from ratemyprofessor.com"
const fromStyle = {
    background: '#FFFFFF',
    width: '60%',
    margin: '30px auto',
    textAlign: 'left',
    rounded: 'false',
    paddingBottom: '1em',
    display: 'flex',
    flexWrap: 'wrap' 
}

const textFieldSyle = {
    margin:'0px 20px',
    width: '40%',

}

export default class QuestionnaireForm extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            firstName: '',
            lastName: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target
        const name = target && target.name
        const value = target.name === 'firstName' ? this.setState({firstName: event.target.value}) : this.setState({lastName: event.target.value})
    }
    render() { 
        return (  
        <Paper style={fromStyle}>
            <h1 style={{padding:'0px 20px', width:'100%'}} >Let's start with your name!</h1>

            <TextField style={textFieldSyle} underlineShow={false} value={this.state.firstName} onChange={this.handleChange} type='text' name='firstName'hintText='First Name' />
            <TextField style={textFieldSyle} underlineShow={false} value={this.state.lastName} onChange={this.handleChange} type='text' name='lastName' hintText='Last Name'/>
            <Divider style={{ width: '100%'}} />
            
            <h3 style={{padding:'10px 20px', width:'100%'}}>Country Filter</h3>
            <CountryFilter />
            <Divider style={{ width: '100%'}} />

            <SortableComponent />
        </Paper>
        )
    }
}