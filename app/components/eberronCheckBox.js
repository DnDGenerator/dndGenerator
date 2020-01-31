import React from 'react';
class EberronCheckBox extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h4>
                    Include Ebberon Dragonmark subraces
                    <input type="checkbox" checked={this.props.eberron} onChange={this.props.eberronChange} />
                </h4>
            </div>
        )
    }
}

export default EberronCheckBox;