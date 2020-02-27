import React from 'react';


class Map extends React.Component{
    constructor(props){
        super(props);
        this.canvas = null;
        this.ctx = null;
    }

    componentDidMount(){
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.legend = this.refs.legend;
        this.ctxLeg = this.legend.getContext("2d");

    }
    componentDidUpdate() {
        let topX = 0;
        let topY = 0;
        this.ctx.strokeRect(topX,topY,500,500)
        this.ctx.strokeStyle = 'black';
        let fillColors = [
            '#b15e19',
            '#ebeba1',
            '#65ea2c',
            '#f61de6',
            '#000000',
            '#d4fc15',
            '#e0262d',
            '#b15e50',
            '#afaca4',
            '#9ca1ba',
            '#b7c8d5',
            '#b9c9f9',
            '#7a9916',
            '#02a258',
            '#454545',
            '#656565'
        ];
        this.ctx.strokeStyle = 'black';
        this.ctxLeg.strokeRect(topX,topY, 500, 500);
        this.ctxLeg.font = '30px serif';
        fillColors.forEach((color, i)=>{
            let y = i * 30;
            this.ctxLeg.fillStyle = color;
            this.ctxLeg.strokeRect(topX, y, topX+30, y+30)
            this.ctxLeg.fillRect(topX, y, topX+30, y+30)
            switch(i){
                case 0:
                    this.ctxLeg.fillText('wooden door', topX + 40, y);
                    break;
                case 1:
                    this.ctxLeg.fillText('passage', topX + 40, y);
                    break;
                case 2:
                    this.ctxLeg.fillText('chamber', topX + 40, y);
                    break;
                case 3:
                    this.ctxLeg.fillText('starting room', topX + 40, y);
                    break;
                case 4:
                    this.ctxLeg.fillText('empty/unused tile', topX + 40, y);
                    break;
                case 5:
                    this.ctxLeg.fillText('stairs', topX + 40, y);
                    break;
                case 6:
                    this.ctxLeg.fillText('trap', topX + 40, y);
                    break;
                case 7:
                    this.ctxLeg.fillText('wooden door, barred or locked', topX + 40, y);
                    break;
                case 8:
                    this.ctxLeg.fillText('stone door', topX + 40, y);
                    break;
                case 9:
                    this.ctxLeg.fillText('stone door, barred or locked', topX + 40, y);
                    break;
                case 10:
                    this.ctxLeg.fillText('iron door', topX + 40, y);
                    break;
                case 11:
                    this.ctxLeg.fillText('iron door, barred or locked', topX + 40, y);
                    break;
                case 12:
                    this.ctxLeg.fillText('portcullis', topX + 40, y);
                    break;
                case 13:
                    this.ctxLeg.fillText('portcullis, locked in place', topX + 40, y);
                    break;
                case 14:
                    this.ctxLeg.fillText('secret door', topX + 40, y);
                    break;
                case 15:
                    this.ctxLeg.fillText('secret door, barred or locked', topX + 40, y);
                    break;
            }
        })
        this.props.map.forEach((yArray, x) => {
            yArray.forEach((tile, y)=>{
                const adjustedX = x * 10;
                const adjustedY = y * 10;
                switch(tile){
                    case "door":
                    case "wooden":
                        this.ctx.fillStyle = fillColors[0];
                        break;
                    case "passage":
                    case "P":
                        this.ctx.fillStyle = fillColors[1];
                        break;
                    case "chamber":
                    case "C":
                        this.ctx.fillStyle = fillColors[2];
                        break;
                    case "R":
                        this.ctx.fillStyle = fillColors[3];
                        break;
                    case "u":
                        this.ctx.fillStyle = fillColors[4];
                        break;
                    case "stairs":
                        this.ctx.fillStyle = fillColors[5];
                        break;
                    case "trap":
                        this.ctx.fillStyle = fillColors[6];
                        break;
                    case "wooden, barred or locked":
                        this.ctx.fillStyle = fillColors[7];
                        break;
                    case "stone":
                        this.ctx.fillStyle = fillColors[8];
                        break;
                    case "stone, barred or locked":
                        this.ctx.fillStyle = fillColors[9];
                        break;
                    case "iron":
                        this.ctx.fillStyle = fillColors[10];
                        break;
                    case "iron, barred or locked":
                        this.ctx.fillStyle = fillColors[11];
                        break;
                    case "portcullis":
                        this.ctx.fillStyle = fillColors[12];
                        break;
                    case "portcullis, locked in place":
                        this.ctx.fillStyle = fillColors[13];
                        break;
                    case "secret door":
                        this.ctx.fillStyle = fillColors[14];
                        break;
                    case "secret door, barred or locked":
                        this.ctx.fillStyle = fillColors[15];
                        break;
                }
                this.ctx.strokeRect(adjustedX, adjustedY, adjustedX+10, adjustedY+10)
                this.ctx.fillRect(adjustedX, adjustedY, adjustedX+10,adjustedY+10)
            })
        });
    }
    render(){
        return(
            <div>
                <canvas ref="canvas" width={500*2} height={500*2} />
                <canvas ref="legend" width={500} height={500} />
            </div>
        )
    }
}

export default Map;