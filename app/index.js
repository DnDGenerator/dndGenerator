import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import _ from 'lodash';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            subRace:'',
            adventureClass:'',
            background:'',
            baseRace:'',
            stats:{},
            originalStats:{}
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        axios.get('http://localhost:3000/')
            .then(({data})=>{
                console.log('got in then', data)
                this.setState({
                    subRace: data.subRace,
                    adventureClass: data.baseClass,
                    background: data.background,
                    baseRace: data.baseRace,
                    stats: data.stats,
                    originalStats:data.originalStats
                })
                console.log("this is state",this.state)
            })
            .catch(e=>{
                console.error(e);
                console.log('axios failed')
            })
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render(){
        return(
            <div>
                <p>
                    {JSON.stringify(this.state)}
                </p>
                <Character characterGen={this.state} />
                <button onClick={this.handleClick}>Click for Fodder</button>
            </div>
        )
    }
}

class Character extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render(){
        return(
            <div>
                Character Information:
                <p>
                        {JSON.stringify(this.props.characterGen)}
                    </p>
                <ul>
                    <Stats stats={this.props.characterGen} />
                </ul>
            </div>
        )
    }
}

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

ReactDOM.render(<App />, document.getElementById('app'))