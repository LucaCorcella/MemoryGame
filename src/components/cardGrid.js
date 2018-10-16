import React from 'react';
import Card from './card';

class CardGrid extends React.Component {

    componentDidUpdate() {
       let discovered =  this.props.cards.filter(card =>{
                return card.discovered === true;
        });

       if(discovered.length === 12){
           setTimeout(()=>{
               alert('The game is finish! you did ' + this.props.round + ' click!');
               this.props.restart();
           }, 500);
       }
    }

    render(){
        return(
            <div className="col-md-12">
                <div className="row">
                    {
                        this.props.cards.map(card =>
                            <Card key={card.id} card={card} flipCard={this.props.flipCard} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default CardGrid;