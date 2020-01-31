import React from 'react';

class RavnicaCheckBox extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <h4>
                    Include Ravnica Guild Backgrounds
                    <input type="checkbox" checked={this.props.ravnica} onChange={this.props.ravnicaChange} />
                </h4>
            </div>
        )
    }
}

export default RavnicaCheckBox;