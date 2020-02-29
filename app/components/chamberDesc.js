import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Item extends React.Component{
    constructor(props){
        super(props)
        this.createItems = this.createItems.bind(this);
    }

    createItems(){
        const formatedList = this.props.items.map(item=>{
            console.log(item);
            return(<ListGroup.Item>{item}</ListGroup.Item>)
        })
        if(formatedList.length > 20){
            formatedList.splice(19, formatedList.length - 20)
        }
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

export default Item;