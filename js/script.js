


function date() {
       //declaring time setting
    var now, months, day, month, year;
    now = new Date();
    months = ['january', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' , 'November', 'December'];

    day = now.getDate()
    month = now.getMonth();
    year = now.getFullYear();
    document.querySelector('.time_title').textContent = months[month] + ' ' + day + ' ' + year;
}
date();
 

    var Quotes = [
    
        { quote: '"Success is not final; failure is not fatal: it is the courage to continue that counts.”',
        author: ' ~  Winston Churchill'
        },
        
        { quote: '"Play by the rules, but be ferocious.”',
        author: ' ~  Phil Knight'},
        
        { quote: '"Business opportunities are like buses, there’s always another one coming.”', 
        author: ' ~  Richard Branson'},
        
        { quote: '"Every problem is a gift without problems we would not grow.”', 
        author: ' ~  Anthony Robbins'},
        
        { quote: '"You only have to do a few things right in your life so long as you don’t do too many things wrong.”',
        author: ' ~  Warren Buffett'},
        
        { quote: '"Success usually comes to those who are too busy to be looking for it.”', 
        author: ' ~  Henry David Thoreau'},
        
        { quote: '"And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.”', 
        author: ' ~  Anaïs Nin'},
        
        { quote: '"There’s no shortage of remarkable ideas, what’s missing is the will to execute them.”', 
        author: ' ~  Seth Godin'},
        
        { quote: '"I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.”', 
        author: ' ~  G.K. Chesterton'},
        
        { quote: '"I don’t know the word ‘quit.’ Either I never did, or I have abolished it.”', 
        author: ' ~  Susan Butcher'},
        
        { quote: '"Far and away the best prize that life offers is the chance to work hard at work worth doing.”', 
        author: ' ~  Theodore Roosevelt'},
        
        { quote: '"If you really look closely, most overnight successes took a long time.”', 
        author: ' ~  Steve Jobs'},
        
        { quote: '"Almost everything worthwhile carries with it some sort of risk, whether it’s starting a new business, whether it’s leaving home, whether it’s getting married, or whether it’s flying into space.”', 
        author: ' ~  Chris Hadfield'},
        
        { quote: '"Even if you are on the right track, you’ll get run over if you just sit there.”', 
        author: ' ~  Will Rodgers'},
        
        { quote: '"The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.”', 
        author: ' ~  Barack Obama'},
        
        { quote: '"Forget past mistakes. Forget failures. Forget everything except what you’re going to do now and do it.”', author: ' ~  William Durant'},
        
        { quote: '"Imagination is everything. It is the preview of life’s coming attractions.”', 
        author: ' ~  Albert Einstein'},
        
        { quote: '"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired and success achieved.”', 
        author: ' ~  Helen Keller'},
        
        { quote: '"The first one gets the oyster, the second gets the shell.”', 
        author: ' ~  Andrew Carnegie'},
        
        { quote: '"The way to get started is to quit talking and begin doing.”', 
        author: ' ~  Walt Disney'},
        
        { quote: '"Whether you think you can or whether you think you can’t, you’re right!”', 
        author: ' ~  Henry Ford'},
        
        { quote: '"There are no secrets to success. It is the result of preparation, hard work and learning from failure.”', 
        author: ' ~  Colin Powell'},
        
        { quote: '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.”', 
        author: ' ~  Albert Schweitzer'},
        
        { quote: '"Success is often achieved by those who don’t know that failure is inevitable.”', 
        author: ' ~  Coco Chanel'},
        
        { quote: '"Many of life’s failures are people who did not realize how close they were to success when they gave up.”',
         author: ' ~  Thomas Edison'},
        
        { quote: '"I feel that luck is preparation meeting opportunity.”', 
        author: ' ~  Oprah Winfrey'},
        
        {  quote: ' “I never dreamed about success. I worked for it.”',  
        author: ' ~  Estée Lauder'},
        
        { quote: '"Yesterday’s home runs don’t win today’s games.”', 
        author: ' ~  Babe Ruth'},
        
        { quote: '"The only place where success comes before work is in the dictionary.”', 
        author: ' ~  Vidal Sassoon'},
        
        { quote: '"The only way around is through.”', 
        author: ' ~  Robert Frost'},
        
        {  quote: ' “The best investment is in the tools of one’s own trade.”', 
        author: ' ~  Benjamin Franklin'},
        
        { quote: '"The man who does not read books has no advantage over the one who cannot read them.”', 
        author: ' ~  Mark Twain'},
        
        { quote: '"Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”', 
        author: ' ~  Malcolm X'},
        
        { quote: '"Teachers can open the door, but you must enter it yourself.”', 
        author: ' ~  Chinese proverb'},
        
        { quote: '"The beautiful thing about learning is that no one can take it away from you.”', 
        author: ' ~ B.B. King'},
        
        { quote: '"Education is the most powerful weapon you can use to change the world.”', 
        author: ' ~  BB King'},
        
        { quote: '"The mind is not a vessel to be filled but a fire to be ignited.”', 
        author: ' ~  Plutarch'},
        
        { quote: '"Don’t let what you cannot do interfere with what you can do.”', 
        author: ' ~  John Wooden'},
        
        { quote: '"A person who never made a mistake never tried anything new."', 
        author: ' ~  Albert Einstein'},
        
        { quote: '"Learning is never done without errors and defeat.”', 
        author: ' ~  Vladimir Lenin'},
        
        { quote: '"Never let the fear of striking out stop you from playing the game.”', 
        author: ' ~  Babe Ruth'},
        
        { quote: '"Procrastination makes easy things hard and hard things harder.”', 
        author: ' ~  Mason Cooley'},
        
        { quote: '"You don’t have to be great to start, but you have to start to be great.”', 
        author: ' ~  Zig Ziglar'},
        
        { quote: '"The expert in anything was once a beginner', 
        author: ' ~  Helen Hayes.”'},
        
        { quote: '"The way to get started is to quit talking and begin doing.”', 
        author: ' ~  Walt Disney'},
        
        { quote: '"There are no shortcuts to any place worth going.”', 
        author: ' ~  Beverly Stills'},
        
        { quote: '"I think it’s possible to ordinary people to choose to be extraordinary.”', 
        author: ' ~  Elon Musk'},
        
        { quote: '"I find that the harder I work, the more luck I seem to have.”', 
        author: ' ~  Thomas Jefferson'},
        
        { quote: '"Genius is 10% inspiration, 90% perspiration.”', 
        author: ' ~  Thomas Edison'},
        
        { quote: '"Motivation is what gets you started. Habit is what keeps you going.”', 
        author: ' ~  Jim Ryun'},
        
        { quote: '"Success is the sum of small efforts, repeated.”', 
        author: ' ~  R Collier'},
        
        { quote: '"The best way to predict your future is to create it.”', 
        author: ' ~ Abraham Lincoln'},
        
        { quote: '"The future belongs to those who believe in the beauty of their dreams.”',
        author: ' ~ Eleanor Roosevelt'},
        
        { quote: '"You are braver than you believe, stronger than you seem and smarter than you think.”', 
        author: ' ~  A.A Milne'},
        
        { quote: '"Learn from yesterday. Live for today. Hope for tomorrow.”', 
        author: ' ~  Albert Einstein'},
        
        {quote: '"The more that you read, the more things you will know, the more that you learn, the more places you’ll go.”', 
        author: ' ~  Dr. Seuss'},
        
        { quote: '"Today a reader. Tomorrow a leader.”', 
        author: ' ~  Anonymous'},
        
        { quote: '"In a world where you can be anything, be kind.”', 
        author: ' ~  Jennifer Dukes Lee'},
        
        { quote: '"None of us is as smart as all of us.”', 
        author: ' ~  Ken Blanchard'},
        
        { quote: '"He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.”', 
        author: ' ~  Chinese Proverb'},
        
        { quote: '"You have to be odd to be no.1.”', 
        author: ' ~  Dr. Seuss'}
        
        ];

   const num = 08133135360;     
        
function quoteGen() {
    var quotes =  document.querySelector('.quotes_text');
    var auth = document.querySelector('.author');


    quotes.animate({opacity: 0.3, fontSize: '150%'}, 1000,
        function() {
        this.animate({ opacity: 1}, 1000);
        });

    auth.animate({opacity: 0}, 1000,
        function() {
            this.animate({ opacity: 1}, 1000);
        });

    //random number for quotes itself
    var randomNumber = Math.floor(Math.random() * (Quotes.length));
    //generating and updating quotes on UI
    quotes.innerHTML = Quotes[randomNumber].quote;
    auth.innerHTML = Quotes[randomNumber].author;
}

function imagebackground() {
    var rollImage = Math.floor(Math.random() * 66) + 1;
    var background = document.getElementById('backgroundImage');
    //random number for the background images
    //updating the image on UI
    background.src = "img/images-" + rollImage + ".jpeg";
    background.animate({opacity: 0.3}, 1000, function() {
        this.animate({ opacity: 1}, 1000);
    });
}


//function for click and generate
function generate() {
    quoteGen();
    imagebackground();
}; 


function tweetQuotes() {
    const tweetURL = "https://twitter.com/intent/tweet?text=" + quotes.innerHTML + "-"+ auth.innerHTML +"-" + background.src;
    var tweet = document.getElementById('tweet-quote');
    tweet.attributes('href', tweetURL);
}








