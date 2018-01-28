/*****************************************
 * Place here your custom javascript code
 **************************************/

// Enable Bootstrap 4 Tooltips
$('[data-toggle="tooltip"]').tooltip();

const tweetsjson = { problematicTweets: [
    {
      "id": 930844723539009500,
      "text": "what the # of monitors at your desk says about you\n\n1: lazy, simpleton, pea brain.. etc \n2: definitely bright, grea… https://t.co/K0tBWQ3l2v",
      "isProblematic": true,
      "badStuff": [
        {
          "tier": "key",
          "category": "Ableism",
          "slur": "simpleton"
        }
      ]
    },
     {
      "id": 901843457899155500,
      "text": "going to throw a temper tantrum if i can't get the Huf weed print pattern on my cast",
      "isProblematic": true,
      "badStuff": [
        {
          "tier": "key",
          "category": "Drugs",
          "slur": "weed"
        }
      ]
    },
     {
      "id": 881902555533647900,
      "text": "alex jones: george soros put chemicals in weed to emasculate western males\n\nme: i know, that's the reason why i smoke it",
      "isProblematic": true,
      "badStuff": [
        {
          "tier": "key",
          "category": "Drugs",
          "slur": "weed"
        },
        {
          "tier": "key",
          "category": "Drugs",
          "slur": "smoke"
        }
      ]
    },
    {
      "id": 879901164007030800,
      "text": "don't know why anyone ever thought of hiring magicians to smuggle drugs... or fight wars, they're the most powerful group imo",
      "isProblematic": true,
      "badStuff": [
        {
          "tier": "key",
          "category": "Drugs",
          "slur": "drugs"
        }
      ]
    }
] };
class TweetCollection {
    constructor(obj) {
        console.log(obj);
        this.tweetarray = obj.problematicTweets;
        console.log(obj.problematicTweets);
        this.content = document.createElement('div');
        $(this.content).addClass('tweet-collection');
        this.tweetarray.forEach( (tweet) => {
            tweet = new Tweet(tweet);
            this.content.innerHTML += tweet.content;
        } );
    }
    get tweets() {
        return this.tweetarray;
    }
}

class Tweet {
    constructor(obj){
        console.log('a' + obj);
        this.url = obj.url;
        this.text = obj.text;
        this.isProblematic = obj.isProblematic;
        this.slurs = obj.slurs;
        this.isHidden = obj.isHidden;

        this.content = cardify({
            days: 666,
            body: this.text,
            url: this.url
        });

        obj.badStuff.forEach( (tweet) =>{
            var badge = document.createElement('span');
            badge.className = 'badge badge-danger';
        } );
    }
}
var audit = new TweetCollection(tweetsjson);
document.getElementById('card-show-tweets').appendChild(audit.content);


