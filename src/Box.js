import React from 'react';
import './Box.css';

class Box extends React.Component {
    render() {
        return(
            <div className='Box' style={{ backgroundColor: this.props.color }} ></div>
        )
    }
}

export default Box;