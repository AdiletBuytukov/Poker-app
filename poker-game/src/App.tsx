import React, { useState } from 'react';
import CardDeck from './lib/CardDeck';
import Cards from './lib/Cards';



const App: React.FC = () => {
    const [drawnCards, setDrawnCards] = useState<Cards[]>([]);

    const dealCards = () => {
        const cardDeck = new CardDeck();
        const drawn = cardDeck.getCards(5);
        setDrawnCards(drawn);
    }

    return (
        <div>
            <button onClick={dealCards}>Раздать карты</button>
            <div className="playingCards faceImages">
                {drawnCards.map((card, index) => (
                    <Cards key={index} rank={card.rank} suit={card.suit} />
                ))}

            </div>
        </div>
    );
}

export default App;
