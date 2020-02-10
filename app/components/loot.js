import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Loot extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const lootKeys= Object.keys(this.props.lootObj);
        return(
            <div id="loot">
                
                <Container>
                    <Row>
                        <Col>HERE BE THE SHINEIES!</Col>
                    </Row>
                    <Row>
                        {lootKeys.map(keyValue=>{
                            return(
                                <Col>{keyValue}</Col>
                            )
                        })}
                    </Row>
                    <Row>
                        {lootKeys.map(keyValue=>{
                            if(keyValue==='coins'){
                                return(
                                    <Col>
                                        {Object.keys(this.props.lootObj.coins).map(coinage=>{
                                            return(
                                                <Row>
                                                    <Col>{this.props.lootObj.coins[coinage]}</Col>
                                                </Row>
                                            )
                                        })}
                                    </Col>
                                )
                            }
                            return(
                                <Col>{this.props.lootObj[keyValue]}</Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Loot;