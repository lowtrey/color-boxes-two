import React from 'react';
import Box from './Box';
import { choice, colorsArr } from './Helpers';
import './BoxContainer.css';

class BoxContainer extends React.Component {
    static defaultProps = {
        allColors: colorsArr,
        numBoxes: 18
    };
    constructor(props) {
        super(props);
        this.randomColor = this.randomColor.bind(this);
    }
    randomColor = () => choice(this.props.allColors);
    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(() => <Box startColor={ this.randomColor() } />);
        return(<div className='BoxContainer'>{boxes}</div>)
    }
}

export default BoxContainer;