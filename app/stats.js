import _ from 'lodash';
import React from 'react';


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
                {_.map(this.props.stats.stats,(stat, index)=>{
                let key = index;
                
            return <li key='key'>{key}:{JSON.stringify(stat)}</li>
            })}
            </p>
        )
    }
}

module.exports=Stats