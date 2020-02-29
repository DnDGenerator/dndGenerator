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
                <table>
                    {console.log(this.state)}
                    <Item items={this.state.description.description.chambers} />
                    
                    
                    <Item items={this.state.description.description.currentChamberState} />
                    
                    
                    <Item items={this.state.description.description.contents} />
                    
                </table>
            </div>
        )
    }
}

export default MapDescription;