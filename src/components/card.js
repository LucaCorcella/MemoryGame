import React from 'react';
import classNames from 'classnames';


class Card extends React.Component {



    render(){
    let cardClass = classNames({
        'flipper' : true,
        'flipped' : this.props.card.flipped || this.props.card.discovered
    });

    return(
         <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <div className={cardClass}>
                        <div className="front" onClick={() => this.props.flipCard(this.props.card.id)}/>
                        <div className="back">
                            <img className='cardImg' src={this.props.card.url} alt={this.props.card.name}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Card
