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
            return(<tr><td>{item}</td></tr>)
        })
        return formatedList;
    }
    render(){
        return(

                <table>
                    {this.createItems()};
                </table>
                
                
        )
    }
}

export default Item;