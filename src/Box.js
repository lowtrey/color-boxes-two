import React from 'react';
import './Box.css';

class Box extends React.Component {
    render() {
        return(
            <div className='Box' style={{ backgroundColor: 'blue'}} ></div>
        )
    }
}

export default Box;