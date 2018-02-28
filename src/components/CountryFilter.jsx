import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';

const toggleStyle = {
    display: 'inline-block',
    width: '100px',
    margin: '0px 15px'
}
export default class QuestionnaireForm extends Component {
    render(){
        return (
            <div style={{display: 'flex', width: '100%', marginBottom: '30px', paddingLeft: '15px', flexWrap: 'wrap'}} >
                <Toggle style={toggleStyle} label={'Canada'} defaultToggled={true} />
                <Toggle style={toggleStyle} label={'England'} defaultToggled={true} />
                <Toggle style={{...toggleStyle, width: '150px'}} label={'United States'} defaultToggled={true} />
                
            </div>
        )
    }
}