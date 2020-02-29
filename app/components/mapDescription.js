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
                
                    <Item items={this.props.description.chambers} />
                    
                    
                    <Item items={this.props.description.currentChamberState} />
                    
                    
                    <Item items={this.props.description.contents} />
                    
            </div>
        )
    }
}

export default MapDescription;