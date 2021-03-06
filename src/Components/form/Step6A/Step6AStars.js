import React, { Component } from 'react';
import './Step6AStars.scss'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import threeStars from '../../../Icons/3stars.svg'
import fourStars from '../../../Icons/4stars.svg'
import fiveStars from '../../../Icons/5stars.svg'
import questionmark from '../../../Icons/information.svg'



class Step6AStars extends Component {

    handleClick(form, value) {
        this.props.addState("acommodationStars", value);
        var _this = this;
        setTimeout(function () {
            _this.props.toggleForm(form)
        }, 200);
    }    

    render() {
        return (
            <div className="background">
                <div className="formBox">
                    <h3 className="title">Hoe luxe wil je verblijven?</h3>
                    <div className="cardPosition">
                        <CardDeck className="cardDeck">
                            <Card onClick={() => {
                                    this.handleClick("loading", "3stars");
                                }}>
                                <Card.Body >
                                    <img className="starsIcon" src={threeStars} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    3 sterren
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("loading", "4stars");
                                }}>
                                <Card.Body >
                                    <img className="starsIcon" src={fourStars} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    4 sterren
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("loading", "5stars");
                                }}>
                                <Card.Body>
                                    <img className="starsIcon" src={fiveStars} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    5 sterren
                                </Card.Footer>
                            </Card>
                            <Card onClick={() => {
                                    this.handleClick("loading", "dontknow");
                                }}>
                                <Card.Body >
                                    <img className="starsIcon" src={questionmark} alt=""/>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Weet ik niet
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step6AStars;