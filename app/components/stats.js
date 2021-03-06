import React from 'react';
import _ from 'lodash';

class Stats extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render(){
        return(
            <p>
                {_.map(this.props.stats,(stat, index)=>{
                let key = index;
                
            return <li key='key'><h1><b>{key}:{JSON.stringify(stat)}</b></h1></li>
            })}
            </p>
        )
    }
}

export default Stats;