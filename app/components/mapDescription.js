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
                    <tr>
                        <Item items={this.state.description.chambers} />
                    </tr>
                    <tr>
                        <Item items={this.state.description.currentChamberState} />
                    </tr>
                    <tr>
                        <Item items={this.state.description.contents} />
                    </tr>
                </table>
            </div>
        )
    }
}

export default MapDescription;