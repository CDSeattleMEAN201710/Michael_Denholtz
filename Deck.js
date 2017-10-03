var suits = ['hearts','spades','clubs','diamonds']
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]

class Deck{
    constructor(){
        this.cards = []
        for(let i = 0; i < suits.length; i++){
            for(let j = 0; j < numbers.length; j++){
                this.cards.push({'suit':suits[i],'number':numbers[j]})
            }
        }
    }
    shuffle(){
        var m = this.cards.length, t, i;
        
          // While there remain elements to shuffle…
        while (m) {
        
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
        
            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        
        return this.cards;
    }
    reset(){
        this.cards = []
        for(let i = 0; i < suits.length; i++){
            for(let j = 0; j < numbers.length; j++){
                this.cards.push({'suit':suits[i],'number':numbers[j]})
            }
        }
        return this
    }
    deal(target){
        target.hand.push(this.cards.pop())
    }
}

class Player{
    constructor(name){
        this.name = name
        this.hand =[]
    }
    take(deck){
        deck.deal(this)
    }
    discard(){
        this.hand.pop()
    }
}

myDeck = new Deck()
mike = new Player('Mike')
myDeck.shuffle()
console.log(mike)
mike.take(myDeck)
mike.take(myDeck)
mike.take(myDeck)
mike.take(myDeck)
mike.take(myDeck)
console.log(mike)
mike.discard()
console.log(mike)

