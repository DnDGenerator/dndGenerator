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
                <ListGroup horizontal='md' >
                    <ListGroup.Item>
                        Original room and purpose
                        <Item items={this.props.description.chambers} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        If owners have changed
                        <Item items={this.props.description.currentChamberState} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        The contents of the room
                        <Item items={this.props.description.contents} />
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default MapDescription;