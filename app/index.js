import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import Character from './components/character'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            subRace:'',
            adventureClass:'',
            background:'',
            baseRace:'',
            stats:{},
            originalStats:{},
            eberron:false,
            ravnica:false,
            classicRolls:false,
            ravnicaRaces:false,
            eberronRaces:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleEberronChange = this.handleEberronChange.bind(this);
        this.handleRavnicaChange = this.handleRavnicaChange.bind(this);
        this.handleClassicRollsChange = this.handleClassicRollsChange.bind(this);
        this.handleRavnicaRacesChange = this.handleRavnicaRacesChange.bind(this);
        this.handleEberronRacesChange = this.handleEberronRacesChange.bind(this);
    }
    handleClick(){
        console.log(this.state.ravnicaRaces)
        //https://dndcharactergenerator.herokuapp.com
        
        axios.get('https://dndcharactergenerator.herokuapp.com/character', {
            params:{
                eberronInclude: this.state.eberron,
                ravnicaInclude: this.state.ravnica,
                classicRolls: this.state.classicRolls,
                includeEberronRaces: this.state.eberronRaces,
                includeRavnicaRaces: this.state.ravnicaRaces
            }
        })
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
    handleEberronChange(){
        console.log('handles eberron')
        this.setState(state =>({
            eberron: !state.eberron
        }))
    }
    handleRavnicaChange(){
        console.log('handles ravnica')
        this.setState(state =>({
            ravnica: !state.ravnica
        }))
    }
    handleClassicRollsChange(){
        this.setState(state =>({
            classicRolls: !state.classicRolls
        }))
    }
    handleRavnicaRacesChange(){
        this.setState(state=>({
            ravnicaRaces: !state.ravnicaRaces
        }))
    }
    handleEberronRacesChange(){
        this.setState(state =>({
            eberronRaces: !state.eberronRaces
        }))
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render(){
        return(
            <div>
                <Character characterGen={this.state} eberronRacesFunc={this.handleEberronRacesChange} ravnicaRacesFunc={this.handleRavnicaRacesChange} ravnicaOnChange={this.handleRavnicaChange} eberron={this.handleEberronChange} classicRolls={this.handleClassicRollsChange}/>
                <button onClick={this.handleClick}>Click for Fodder</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App;