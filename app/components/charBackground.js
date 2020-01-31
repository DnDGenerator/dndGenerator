import React from 'react';

class CharBackground extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
            <h3>
                Background: {this.props.background}
            </h3>
        </div>
        )}
}

export default CharBackground;