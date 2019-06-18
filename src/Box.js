import React from 'react';
import { choice, colorsArr } from './Helpers';
import './Box.css';

class Box extends React.Component {
    static defaultProps = {
        colors: colorsArr
    }
    render() {
        return(
            <div className='Box' style={{ backgroundColor: choice(this.props.colors) }} ></div>
        )
    }
}

export default Box;