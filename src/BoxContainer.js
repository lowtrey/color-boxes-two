import React from 'react';
import Box from './Box';
import { choice, colorsArr } from './Helpers';
import './BoxContainer.css';

class BoxContainer extends React.Component {
    static defaultProps = {
        colors: colorsArr
    }
    constructor(props) {
        super(props);
        this.state = {numBoxes: 18};
        this.randomColor = this.randomColor.bind(this);
    }
    randomColor = () => choice(this.props.colors);
    render() {
        const boxes = Array.from({length: this.state.numBoxes}).map(() => <Box color={ this.randomColor() } />);
        return(<div className='BoxContainer'>{boxes}</div>)
    }
}

export default BoxContainer;