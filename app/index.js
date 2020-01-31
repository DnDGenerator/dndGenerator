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
        axios.get('https://dndcharactergenerator.herokuapp.com/character')
            .then(({data})=>{
                
                this.setState({
                    subRace: data.subRace,
                    adventureClass: data.baseClass,
                    background: data.background,
                    baseRace: data.baseRace,
                    stats: data.stats,
                    originalStats:data.originalStats
                })
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
            <div id='character'>
                Character Information:
                <div id="racicalInfo">
                    <RacialInfo racial={this.props.characterGen} />
                </div>
                <div id="adventureclass">
                    <Adventurer adventureClass={this.props.characterGen.adventureClass} />
                </div>
                <div id="charbackground">
                    <CharBackground background={this.props.characterGen.background} />
                </div>
                <h4>Character Stats</h4>
                <div id="modifiedstats">
                    <ul>
                        <Stats stats={this.props.characterGen.stats} />
                    </ul>            
                </div>
                <h4>The Original rolls for if you want to just use the rolls</h4>
                <div id="ogstats">
                    <ul>
                        <Stats stats={this.props.characterGen.originalStats} />
                    </ul>
                </div>
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

export default App;