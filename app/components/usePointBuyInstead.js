import React from 'react';

class UsePointBuyInstead extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h4>
                    Use Point Buy instead of rolling
                    <input type="checkbox" checked={this.props.pointBuyStatus} onChange={this.props.onChangeForPointBuyHanlder} />
                </h4>
            </div>
        )
    }
}

export default UsePointBuyInstead;