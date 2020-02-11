import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Dungeon extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="dungeon">
                <Container>
                    <Row>
                        <Col>Here is an Idea for a Dungeon!</Col>
                    </Row>
                    <Row>
                        <Col>Location</Col>
                        <Col>Creator</Col>
                        <Col>Purpose</Col>
                        <Col>History</Col>
                    </Row>
                    <Row>
                        <Col>{this.props.dungeon.location}</Col>
                        <Col>{this.props.dungeon.creator}</Col>
                        <Col>{this.props.dungeon.purpose}</Col>
                        <Col>{this.props.dungeon.history}</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Dungeon;