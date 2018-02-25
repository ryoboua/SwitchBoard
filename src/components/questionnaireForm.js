import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import SortableComponent from './sortList'

//const intro = "Having a hard time picking which univerisity to study at? Fill out the form below to get recommendations on which univeristies you should attend based on the student ratings from ratemyprofessor.com"
const fromStyle = {
    background: '#FFFFFF',
    width: '60%',
    margin: '30px auto',
    display: 'inline-block',
    textAlign: 'left',
    rounded: 'false',
    paddingBottom: '1em'
    
}
const QuestionnaireForm = () => (
        <Paper style={fromStyle} >
            <h1 style={{padding:'0px 20px'}} >Let's start with your name!</h1>
            <br />
            <TextField style={{padding:'0px 20px'}} type='text' name='firstName' hintText='First Name' />
            <br />
            <TextField style={{padding:'0px 20px'}} type='text' name='lastName' hintText='Last Name'/>
            <br />
            <SortableComponent />
        </Paper>
)

export default QuestionnaireForm