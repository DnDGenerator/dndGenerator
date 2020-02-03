import React from 'react';

class ClassicRollsCheckBox extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h4>
                    Roll 2d6 + 6 instead of standard 4d6 drop the lowest: 
                    <input type="checkbox" checked={this.props.classicRolls} onChange={this.props.classicRollsChange} />
                </h4>
            </div>
        )
    }
}

export default ClassicRollsCheckBox;