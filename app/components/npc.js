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
                        <Col>{this.props.npc.appearance}</Col>
                        <Col>{this.props.npc.highAbility}</Col>
                        <Col>{this.props.npc.lowAbility}</Col>
                        <Col>{this.props.npc.talent}</Col>
                        <Col>{this.props.npc.mannerism}</Col>
                        <Col>{this.props.npc.interaction}</Col>
                        <Col>{this.props.npc.ideals}</Col>
                        <Col>{this.props.npc.bonds}</Col>
                        <Col>{this.props.npc.flawAndOrSecret}</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default NPC;