import React from 'react';

class RacialInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>
                    Race: {this.props.racial.subRace} {this.props.racial.baseRace} 
                </h2>
            </div>
        )
    }
}

export default RacialInfo;