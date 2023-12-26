import React from "react";

interface Props {
    rank: string;
    suit: string;
}


const Card: React.FC<Props> = ({rank, suit}) => {
    const rankSing =  {
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        'J': 'J',
        'Q': 'Q',
        'K': 'K',
        'A': 'A',
    };

    const suitSing = {
        'diams': '♦',
        'hearts': '♥',
        'clubs': '♣',
        'spades': '♠',
    };

    return ( <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rankSing[rank]}</span>
      <span className="suit">{suitSing[suit]}</span>
    </span>
    );
}

export default Card;
