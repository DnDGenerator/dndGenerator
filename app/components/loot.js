import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LootOptions from './lootOptions';
import LootItem from './lootItems';
import { ListGroup } from 'react-bootstrap';
class Loot extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const lootKeys= Object.keys(this.props.lootObj);
        return(
            <div id="loot">
                <LootOptions handleLootTypeInput={this.props.handleLootTypeInput} handleCRSelection={this.props.handleCRSelection} />
                <Container>
                    <Row>
                        <Col>HERE BE THE SHINIES!</Col>
                    </Row>
                    <ListGroup horizontal='md'>
                        <ListGroup.Item>
                            Coins
                            {Object.keys(this.props.lootObj.coins).map(coinage=>{
                                            return(
                                                <ListGroup>
                                                    {coinage} {this.props.lootObj.coins[coinage]}
                                                </ListGroup>
                                            )
                                        })}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Gems
                            <LootItem items={this.props.lootObj.gemsArray}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Art Pieces
                            <LootItem items={this.props.lootObj.artsArray} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Magic Items
                            <LootItem items={this.props.lootObj.magicItemsArray} />
                        </ListGroup.Item>
                    </ListGroup>
                    {/* <Row>
                        <Col>Coins</Col>
                        <Col>Gems</Col>
                        <Col>Art Pieces</Col>
                        <Col>Magic Items</Col>
                    </Row>
                    <Row>
                        {lootKeys.map(keyValue=>{
                            if(keyValue==='coins'){
                                return(
                                    <Col>
                                        {Object.keys(this.props.lootObj.coins).map(coinage=>{
                                            return(
                                                <Row>
                                                    <Col>{coinage}: {this.props.lootObj.coins[coinage]}</Col>
                                                </Row>
                                            )
                                        })}
                                    </Col>
                                )
                            }else {
                                return(
                                    <Col>{this.props.lootObj[keyValue].map(loot=>{
                                        return(
                                            <Row>
                                                <Col>{loot}</Col>
                                            </Row>
                                        )
                                    })} </Col>
                                )
                            }
                        })}
                    </Row> */}
                </Container>
            </div>
        )
    }
}

export default Loot;