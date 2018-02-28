import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import QuestionnaireForm from './QuestionnaireForm';


const style = {
    margin: '15px',
    padding: '0px 10px',
    fontSize: '20px',
    borderRadius: '12px'
}

class StartButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isShowingForm: false }
        this.handleShowForm = this.handleShowForm.bind(this);

    }    
    handleShowForm(e) {
        e.preventDefault()
        this.setState({ isShowingForm: true })
    }
    
    render () {
        const isShowingForm = this.state.isShowingForm

        let form = null;

        if(isShowingForm){
            form = <RaisedButton onClick={ e => this.handleShowForm(e) } style={style}>Start Questionnaire</RaisedButton>
        } else {
            form = <QuestionnaireForm />
        }
        return (
           <div>{form}</div>
        )
    }
    
}

export default StartButton