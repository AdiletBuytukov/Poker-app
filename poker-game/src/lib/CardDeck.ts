import Cards from './Cards.ts';

class CardDeck {
    private cards: Cards[];

    constructor() {
        this.cards = [];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Cards(rank, suit));
            }
        }
    }

    public getCard(): Cards {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }

    public getCards(howMany: number): Cards[] {
        return Array.from({ length: howMany }, () => this.getCard());
    }
}

export default CardDeck;