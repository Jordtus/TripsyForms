import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Step1ACounter.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Button } from 'semantic-ui-react';


class Step1ACounter extends Component {

    state = {
        AdultCount: 0,
        TeenCount: 0,
        ChildCount: 0,
        BabyCount: 0
    }

    increment = (typeCount) => {
        if (typeCount === "adult") {
            this.setState({
                AdultCount: this.state.AdultCount + 1
            });
        } if (typeCount === "teen") {
            this.setState({
                TeenCount: this.state.TeenCount + 1
            });
        } if (typeCount === "child") {
            this.setState({
                ChildCount: this.state.ChildCount + 1
            });
        } if (typeCount === "baby") {
            this.setState({
                BabyCount: this.state.BabyCount + 1
            });
        }
    }

    decrement = (typeCount) => {
        if (typeCount === "adult") {
            this.setState({
                AdultCount: this.state.AdultCount - 1
            });
        } if (typeCount === "teen") {
            this.setState({
                TeenCount: this.state.TeenCount - 1
            });
        } if (typeCount === "child") {
            this.setState({
                ChildCount: this.state.ChildCount - 1
            });
        } if (typeCount === "baby") {
            this.setState({
                BabyCount: this.state.BabyCount - 1
            });
        }
    }

    handleSubmit(form){
        this.props.addState("howMany", this.state);
        this.props.toggleForm(form);
    }

    render() {
        return (
            <div className="background">
                <div className="formBoxWithButton">
                    <ProgressBar className="progressBar" variant="success" now={30} />
                    <h3 className="title"> Met hoeveel personen ga je op reis?</h3>
                    <div>
                        <CardDeck className="cardDeck">
                            <Card>
                                <Card.Body>
                                    <span className="addSpan">
                                        <Button disabled={this.state.AdultCount === 0 } className="add-button" onClick={() => this.decrement("adult")} circular icon='minus' />
                                        <span className="counter">{this.state.AdultCount}</span>
                                        <Button className="add-button" onClick={() => this.increment("adult")} circular icon='add' />
                                    </span>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Volwassenen
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <span className="addSpan">
                                        <Button disabled={this.state.TeenCount === 0 } className="add-button" onClick={() => this.decrement("teen")} circular icon='minus' />
                                        <span className="counter">{this.state.TeenCount}</span>
                                        <Button className="add-button" onClick={() => this.increment("teen")} circular icon='add' />
                                    </span>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Jongeren  &lt; 16 jaar
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <span className="addSpan">
                                        <Button disabled={this.state.ChildCount === 0 } className="add-button" onClick={() => this.decrement("child")} circular icon='minus' />
                                        <span className="counter">{this.state.ChildCount}</span>
                                        <Button className="add-button" onClick={() => this.increment("child")} circular icon='add' />
                                    </span>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Kinderen &lt; 12 jaar
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <span className="addSpan">
                                        <Button disabled={this.state.BabyCount === 0 } className="add-button" onClick={() => this.decrement("baby")} circular icon='minus' />
                                        <span className="counter">{this.state.BabyCount}</span>
                                        <Button className="add-button" onClick={() => this.increment("baby")} circular icon='add' />
                                    </span>
                                </Card.Body>
                                <Card.Footer className="cardFooter">
                                    Baby's &lt; 2 jaar
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                    <Button color="green" className="ui large button stepButton" onClick={() => 
                        this.handleSubmit("finalPage")}>Volgende</Button>
                </div>
            </div>
        )
    }
}

export default Step1ACounter;