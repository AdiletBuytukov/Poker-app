import Card from "../card/Card";

class Cards {
    public rank: string;
    public suit: string;

    constructor(rank: string, suit: string) {
        this.rank = rank;
        this.suit = suit;
    }
}

export default Cards;