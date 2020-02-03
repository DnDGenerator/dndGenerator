import React from 'react';

class ExtraSettingsRacesCheckboxes extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div id="otherSettings">
                <h4>
                    Include Ravnica races :
                    <input type="checkbox" check={this.props.ravnicaRaces} onChange={this.props.ravnicaRacesChange}/>
                </h4>
                <h4>
                    Include Eberron races:
                    <input type="checkbox" check={this.props.eberronRaces} onChange={this.props.eberronRacesChange}/>
                </h4>
            </div>
        )
    }
    
}

export default ExtraSettingsRacesCheckboxes;