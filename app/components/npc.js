import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NPC extends React.Component{
    constructor(props){
        super(props)
    }


    render(){

        return(
            <div>
                <Container>
                    <Row>
                        <Col>Intresting Tid Bits!</Col>
                    </Row>
                    <Row>
                        <Col>Appearance</Col>
                        <Col>Good Stat</Col>
                        <Col>Bad Stat</Col>
                        <Col>Talent</Col>
                        <Col>Mannerism</Col>
                        <Col>Interaction</Col>
                        <Col>Ideals</Col>
                        <Col>Bonds</Col>
                        <Col>Flaw and/or Secret</Col>
                    </Row>
                    <Row>
                        <Col>{this.props.appearance}</Col>
                        <Col>{this.props.highAbility}</Col>
                        <Col>{this.props.lowAbility}</Col>
                        <Col>{this.props.talent}</Col>
                        <Col>{this.props.mannerism}</Col>
                        <Col>{this.props.interaction}</Col>
                        <Col>{this.props.ideals}</Col>
                        <Col>{this.props.bonds}</Col>
                        <Col>{this.props.flawAndOrSecret}</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default NPC;