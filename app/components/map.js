import React from 'react';


class Map extends React.Component{
    constructor(props){
        super(props);
        this.twoDMap = this.props.map;
        this.canvas = null;
        this.ctx = null;
    }

    componentDidMount(){
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
    }
    componentDidUpdate() {
        let topX = 0;
        let topY = 0;
        this.ctx.strokeRect(topX,topY,500,500)
        if(this.twoDMap === null){
            return;
        }
        this.twoDMap.forEach((yArray, x) => {
            yArray.forEach((tile, y)=>{
                const adjustedX = x * 5;
                const adjustedY = y * 5;
                switch(tile){
                    case "door":
                    case "wooden":
                        this.ctx.fillStyle = '#b15e19';
                        break;
                    case "passage":
                    case "P":
                        this.ctx.fillStyle = '#ebeba1';
                        break;
                    case "chamber":
                    case "C":
                        this.ctx.fillStyle = '#65ea2c';
                        break;
                    case "R":
                        this.ctx.fillStyle = '#f61de6';
                        break;
                    case "u":
                        this.ctx.fillStyle = '#000000';
                        break;
                    case "stairs":
                        this.ctx.fillStyle = '#d4fc15'
                        break;
                    case "trap":
                        this.ctx.fillStyle = '#e0262d';
                        break;
                    case "wooden, barred or locked":
                        this.ctx.fillStyle = '#b15e50'
                        break;
                    case "stone":
                        this.ctx.fillStyle = '#afaca4';
                        break;
                    case "stone, barred or locked":
                        this.ctx.fillStyle = '#9ca1ba'
                        break;
                    case "iron":
                        this.ctx.fillStyle = '#b7c8d5';
                        break;
                    case "iron, barred or locked":
                        this.ctx.fillStyle = '#b9c9f9';
                        break;
                    case "portcullis":
                        this.ctx.fillStyle = '#7a9916';
                        break;
                    case "portcullis, locked in place":
                        this.ctx.fillStyle = '#02a258';
                        break;
                    case "secret door":
                        this.ctx.fillStyle = '#454545'
                        break;
                    case "secret door, barred or locked":
                        this.ctx.fillStyle = '#656565'
                        break;
                }
                this.ctx.fillRect(adjustedX, adjustedY, adjustedX+5,adjustedY+5)
            })
        });
    }
    render(){
        return(
            <div>
                <canvas ref="canvas" width={500} height={500} />
            </div>
        )
    }
}

export default Map;