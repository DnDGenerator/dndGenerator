import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

class LootOptions extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <ToggleButtonGroup type="radio" name="cr" defaultValue={0}>
                <ToggleButton value={0}>CR 0-4</ToggleButton>
                <ToggleButton value={5}>CR 5-10</ToggleButton>
                <ToggleButton value={11}>CR 11-16</ToggleButton>
                <ToggleButton value={17}>CR 17+</ToggleButton>
            </ToggleButtonGroup>
        )
    }
}

export default LootOptions;