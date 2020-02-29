import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Item extends React.Component{
    constructor(props){
        super(props)
        this.createItems = this.createItems.bind(this);
    }

    createItems(){
        const formatedList = this.props.items.map(item=>{
            return(<td>{item}</td>)
        })
        return formatedList;
    }
    render(){
        return(
            
                <div>
                    {this.createItems()}
                </div>
                
        )
    }
}

export default Item;