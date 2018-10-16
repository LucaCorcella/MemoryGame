import React, {Component} from 'react';
import classNames from 'classnames';
import Header from './components/header'
import CardGrid from './components/cardGrid'
import generateCards from './data/cards';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newMatch: false,
            round: 0, //count number of click
            click1: null, // save data card click1 or 3
            click2: null, // save data card click2
            cards: generateCards()  //card model-data
        };

        this.restart = this.restart.bind(this);
        this.newMatch = this.newMatch.bind(this);
    }

    //click on card and flip, (function arrow)
    flipCard = (id) => {
        this.setState({round: this.state.round + 1, numberClick: this.state.numberClick + 1});


        if (this.state.round % 2 === 1) {
            let cardClicked = this.state.cards.find((card) => {
                return card.id === id;
            });

            this.setState({
                click1: this.state.click1,
                click2: cardClicked.rel,
                cards: this.state.cards.map((card) => {
                    return card.id === id ?
                        Object.assign({}, card, {flipped: true}) :
                        card
                })
            }, function () {
                if (this.state.click1 === this.state.click2 && (this.state.click1 !==null && this.state.click2 !==null)) {
                    console.log('trovati');
                    this.setState({
                        click1: null,
                        click2: null,
                        numberClick: 0,
                        match: this.state.match + 1,
                        cards: this.state.cards.map((card) => {
                            return (card.id === id || card.id === this.state.click1) ?
                                Object.assign({}, card, {flipped: true, discovered: true}) :
                                card
                        })
                    });
                } else {
                    if(this.state.click2 !==null){

                       this.timeOut = setTimeout(() => {
                            this.setState({
                                click1: null,
                                click2: null,
                                cards: this.state.cards.map((card) => {
                                    return Object.assign({}, card, {flipped: false})
                                })
                            })
                        }, 5000)
                    }
                }
            });
        } else {
            clearTimeout(this.timeOut);

            // if state click 1 and 2 is different of null = 3°click
            if (this.state.click1 !== null && this.state.click2 !== null) {
                if (this.state.click1 !== this.state.click2) {

                    this.setState({
                        click1: id,
                        click2: null,
                        cards: this.state.cards.map((card) => {
                            return card.id === id ? Object.assign({}, card, { flipped : true }):
                                Object.assign({}, card, { flipped : false });

                        })
                    });
                }
            } else {
                // frist click set state and change object frist 1 cards
                this.setState({
                    click1: id,
                    click2:null,
                    cards: this.state.cards.map((card) => {
                        return card.id === id ?
                            Object.assign({}, card, {flipped: true}) :
                            card
                    })
                });
            }
        }

    };

    // restart re-initialize  state
    restart(){
        this.setState({
            newMatch: false,
            round: 0,
            numberClick: 0,
            click1: null,
            click2: null,
            cards: generateCards()
        });
    }


    newMatch(){
        this.setState({
            newMatch: true,
            round: 0,
            numberClick: 0,
            click1: null,
            click2: null,
            cards: generateCards()
        });
    }

    render() {
        let gridClass = classNames({
            'container' : true,
            'd-none' : !this.state.newMatch
        });


        let newGameSectionClass = classNames({
            'container' : true,
            'col-md-4': true,
            'text-center': true,
            'newGameContainer': true,
            'd-none' : this.state.newMatch
        });

        return (
            <section className="gameSection">
                <Header restart={this.restart}/>
                <div className={newGameSectionClass}>
                  <button className="btn btn-md btn-success btn-newGame" onClick={this.newMatch}>New Game</button>
                </div>
                <div className={gridClass}>
                    <CardGrid cards={this.state.cards} flipCard={this.flipCard} restart={this.restart} round={this.state.round}/>
                </div>
            </section>
        )
    }
}

export default App;