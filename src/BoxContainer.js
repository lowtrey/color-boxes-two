import React from 'react';
import Box from './Box';

class BoxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numBoxes: 18
        };
    }

    render() {
        const boxes = Array.from({length: this.state.numBoxes}).map(() => <Box />);
        return(
            <div className='BoxContainer'>
                {boxes}
            </div>
        )
    }
}

export default BoxContainer;