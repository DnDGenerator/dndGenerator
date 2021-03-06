import React from 'react'
import { ListGroup } from 'react-bootstrap';

class LootItem extends React.Component{
    constructor(props){
        super(props)
        this.createItems = this.createItems.bind(this);
    }

    createItems(){
        const formatedList = this.props.items.map(item=>{
            return(<ListGroup.Item>{item}</ListGroup.Item>)
        })
        
        return formatedList;
    }
    render(){
        return(

                <ListGroup>
                    {this.createItems()}
                </ListGroup>
                
                
        )
    }
}

export default LootItem;