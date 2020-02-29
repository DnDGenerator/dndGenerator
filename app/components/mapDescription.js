import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Item from './chamberDesc';

class MapDescription extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        return(
            <div>
                    Original room and purpose
                    <Item items={this.props.description.chambers} />
                    
                    If the original creators are gone, this may be the current state of affairs
                    <Item items={this.props.description.currentChamberState} />
                    
                    The contents of the room
                    <Item items={this.props.description.contents} />
                    
            </div>
        )
    }
}

export default MapDescription;