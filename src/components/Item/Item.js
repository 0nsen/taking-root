import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plantImg: '',
            price,
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.plantImg}/>
            </div>
        )
    }
}