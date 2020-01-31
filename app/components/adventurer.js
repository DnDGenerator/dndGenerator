import React from 'react';

class Adventurer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>
                    Class: {this.props.adventureClass}
                </h2>
            </div>
        )
    }
}

export default Adventurer;