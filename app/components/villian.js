import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Villian extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div id="villian">
                <Container>
                    <Row>
                        <Col>Here is your villian, mwahahaha</Col>
                    </Row>
                    <Row>
                        <Col>Overall Objective</Col>
                        <Col>Method of ill deeds</Col>
                        <Col>Their weakness</Col>
                    </Row>
                    <Row>
                        <Col>{this.props.villian.objective}</Col>
                        <Col>{this.props.villian.method}</Col>
                        <Col>{this.props.villian.weakness}</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Villian;