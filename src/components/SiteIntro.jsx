import React from 'react';
import ReactDOM from 'react-dom';
import ReactDrawer from 'react-drawer';

/* if you using webpack, should not apply identity to this css */
//import 'react-drawer/lib/react-drawer.css';

class SiteIntro extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      position: 'top',
      noOverlay: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
  }
  setPosition(e) {
    this.setState({position: e.target.value});
  }
  setNoOverlay(e) {
    this.setState({noOverlay: e.target.checked});
  }
  toggleDrawer() {
    this.setState({open: !this.state.open});
  }
  closeDrawer() {
    this.setState({open: false});
  }
  onDrawerClose() {
    this.setState({open: false});
  }
  render() {
     return (
         <div>
             <h1>Hello</h1>
         </div>
     ) 
  }
}

export default SiteIntro