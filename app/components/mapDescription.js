import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Item from './chamberDesc';

class MapDescription extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:this.props.description
        }
        
    }
    

    render(){
        return(
            <div>
                <ListGroup horizontal>
                    <ListGroup.Item>
                        <Item items={this.state.description.chambers} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Item items={this.state.description.currentChamberState} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Item items={this.state.description.contents} />
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default MapDescription;