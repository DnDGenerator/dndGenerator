import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import axios from 'axios';
import Character from './components/character'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Loot from './components/loot';


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
            usePointBuy:false,
            loot:{},
            cr:0,
            lootType:'hoard'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleEberronChange = this.handleEberronChange.bind(this);
        this.handleRavnicaChange = this.handleRavnicaChange.bind(this);
        this.handleClassicRollsChange = this.handleClassicRollsChange.bind(this);
        this.handleRavnicaRacesChange = this.handleRavnicaRacesChange.bind(this);
        this.handleEberronRacesChange = this.handleEberronRacesChange.bind(this);
        this.handlePointBuyChange = this.handlePointBuyChange.bind(this);
        this.handleLootClick = this.handleLootClick.bind(this);
        this.handleLootTypeInput = this.handleLootTypeInput.bind(this);
    }
    handleLootClick(){
        axios.get('https://dndcharactergenerator.herokuapp.com/loot', {
            params:{
                CR: this.state.cr,
                lootType: this.state.lootType
            }
        }).then(({data})=>{
            this.setState({
                loot: data
            })
        }).catch((e)=>{
            console.error(e);
        })
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
                    subRace: data.subRace,
                    adventureClass: data.baseClass,
                    background: data.background,
                    baseRace: data.baseRace,
                    stats: data.stats,
                    originalStats: data.originalStats,
                })
            }).then(()=>{
                const temp={};
                for(let key in this.state){
                    if(typeof this.state[key] === "string"){
                        temp[key] = this.state[key].toUpperCase();
                    }
                }
                this.setState({
                    subRace: temp.subRace,
                    adventureClass: temp.adventureClass,
                    background: temp.background,
                    baseRace: temp.baseRace
                })
                
            })
            .catch(e=>{
                console.error(e);
                console.log('axios failed')
            })
    }

    handleLootTypeInput(e){
        console.log(e)
        this.setState(state =>({
            lootType: e.target.lootType
        }))
    }
    handleCRSelection(){
        this.setState(state=>{

        })
    }
    handleEberronChange(){
        console.log('handles eberron')
        this.setState(state =>({
            eberron: !state.eberron,
            ravnica: false
        }))
    }
    handleRavnicaChange(){
        console.log('handles ravnica')
        this.setState(state =>({
            ravnica: !state.ravnica,
            eberron: false
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
        

    render(){
        return(
            
            <div>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button}  variant="link" eventKey="0">Character Creator!</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Character 
                                    characterGen={this.state} 
                                    eberronRacesFunc={this.handleEberronRacesChange} 
                                    ravnicaRacesFunc={this.handleRavnicaRacesChange} 
                                    ravnicaOnChange={this.handleRavnicaChange} 
                                    eberron={this.handleEberronChange} 
                                    classicRolls={this.handleClassicRollsChange}
                                    onChangeForPointBuyHanlder={this.handlePointBuyChange}
                                />
                                <Button variant="primary" size="lg" onClick={this.handleClick} block="true">Click for Fodder</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button}  variant="link" eventKey="1">Loot Generator!</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                in progress!
                                <Loot lootObj={this.state.loot} handleLootTypeInput={this.handleLootTypeInput}/>
                                <Button variant="primary" size="lg" onClick={this.handleLootClick} block="true">Click for Shineys</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App;