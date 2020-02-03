import React from 'react';
import RavnicaCheckBox from './ravnicaCheckBox';
import EberronCheckBox from './eberronCheckBox';
import CharBackground from './charBackground';
import Adventurer from './adventurer';
import RacialInfo from './racialInfo';
import Stats from './stats';
import ClassicRollsCheckBox from './classicRollsCheckBox';
import ExtraSettingsRacesCheckboxes from './extraSettingsRacesCheckboxes'
class Character extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render(){
        console.log(this.props);
        return(
            <div id='character'>
                <div id="options">
                    Optional choices
                    <RavnicaCheckBox ravnica={this.props.characterGen.ravnica} ravnicaChange={this.props.ravnicaOnChange} />
                    <EberronCheckBox eberron={this.props.characterGen.eberron} eberronChange={this.props.eberron} />
                    <ExtraSettingsRacesCheckboxes ravnicaRaces={this.props.characterGen.ravnicaRaces} ravnicaRacesChange={this.props.ravnicaRacesFunc} eberronRaces={this.props.eberronRaces} eberronRacesChange={this.props.eberronRacesFunc} />
                </div>
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
                <ClassicRollsCheckBox classicRolls={this.props.characterGen.classicRolls} classicRollsChange={this.props.classicRolls}/>
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

export default Character;