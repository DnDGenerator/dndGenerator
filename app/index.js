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
            eberronRaces:false,
            usePointBuy:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleEberronChange = this.handleEberronChange.bind(this);
        this.handleRavnicaChange = this.handleRavnicaChange.bind(this);
        this.handleClassicRollsChange = this.handleClassicRollsChange.bind(this);
        this.handleRavnicaRacesChange = this.handleRavnicaRacesChange.bind(this);
        this.handleEberronRacesChange = this.handleEberronRacesChange.bind(this);
        this.handlePointBuyChange = this.handlePointBuyChange.bind(this);
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
                includeRavnicaRaces: this.state.ravnicaRaces,
                usePointBuy: this.state.usePointBuy
            }
        })
            .then(({data})=>{
                this.setState({
                    subRace: data.subRace.toUpper(),
                    adventureClass: data.baseClass.toUpper(),
                    background: data.background.toUpper(),
                    baseRace: data.baseRace.toUpper(),
                    stats: data.stats,
                    originalStats: data.originalStats,
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
            classicRolls: !state.classicRolls,
            usePointBuy: false
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
    handlePointBuyChange(){
        this.setState(state=>({
            usePointBuy: !state.usePointBuy,
            classicRolls:false
        }))
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render(){
        return(
            <div>
                <Character 
                    characterGen={this.state} 
                    eberronRacesFunc={this.handleEberronRacesChange} 
                    ravnicaRacesFunc={this.handleRavnicaRacesChange} 
                    ravnicaOnChange={this.handleRavnicaChange} 
                    eberron={this.handleEberronChange} 
                    classicRolls={this.handleClassicRollsChange}
                    onChangeForPointBuyHanlder={this.handlePointBuyChange}
                />
                <button onClick={this.handleClick}>Click for Fodder</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App;