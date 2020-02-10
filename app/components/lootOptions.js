import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
class LootOptions extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="challenge-rating">
                Select CR range
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="0" onSelect={this.props.handleCRSelection}>0-4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={this.props.handleCRSelection}>5-10</Dropdown.Item>
                <Dropdown.Item eventKey="11" onSelect={this.props.handleCRSelection}>11-16</Dropdown.Item>
                <Dropdown.Item eventKey="17" onSelect={this.props.handleCRSelection}>17+</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    }
}

export default LootOptions;