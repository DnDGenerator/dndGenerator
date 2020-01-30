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
                <RacialInfo racial={this.props.characterGen} />
                <Adventurer adventureClass={this.props.characterGen.adventureClass} />
                <CharBackground background={this.props.characterGen.background} />
                <h4>Character Stats</h4>
                <ul>
                    <Stats stats={this.props.characterGen.stats} />
                </ul>
                <h4>The Original rolls for if you want to just use the rolls</h4>
                <ul>
                    <Stats stats={this.props.characterGen.originalStats} />
                </ul>
            </div>
        )
    }
}

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

class Adventurer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>
                    Class: {this.props.adventureClass}
                </h2>
            </div>
        )
    }
}
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
                
            return <li key='key'>{key}:{JSON.stringify(stat)}</li>
            })}
            </p>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))