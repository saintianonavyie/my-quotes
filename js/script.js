
    //declaring time setting
    var now, months, day, month, year;
    now = new Date();
    months = ['january', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' , 'November', 'December'];

    day = now.getDate()
    month = now.getMonth();
    year = now.getFullYear();
    document.querySelector('.time_title').textContent = months[month] + ' ' + day + ' ' + year;


    //quotes 
var Quotes = [
    
'"Success is not final; failure is not fatal: it is the courage to continue that counts.” ~Winston Churchill',

'"Play by the rules, but be ferocious.” ~Phil Knight',

'"Business opportunities are like buses, there’s always another one coming.” ~Richard Branson',

'"Every problem is a gift without problems we would not grow.” ~Anthony Robbins',

'"You only have to do a few things right in your life so long as you don’t do too many things wrong.” ~Warren Buffett',

'"Success usually comes to those who are too busy to be looking for it.” ~Henry David Thoreau',

'"And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.” ~Anaïs Nin',

'"There’s no shortage of remarkable ideas, what’s missing is the will to execute them.” ~Seth Godin',

'"I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.” ~G.K. Chesterton',

'"I don’t know the word ‘quit.’ Either I never did, or I have abolished it.” ~Susan Butcher',

'"Far and away the best prize that life offers is the chance to work hard at work worth doing.” ~Theodore Roosevelt',

'"If you really look closely, most overnight successes took a long time.” ~Steve Jobs',

'"Almost everything worthwhile carries with it some sort of risk, whether it’s starting a new business, whether it’s leaving home, whether it’s getting married, or whether it’s flying into space.” ~Chris Hadfield',

'"Even if you are on the right track, you’ll get run over if you just sit there.” ~Will Rodgers',

'"The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.” ~Barack Obama',

'"Forget past mistakes. Forget failures. Forget everything except what you’re going to do now and do it.” ~William Durant',

'"Imagination is everything. It is the preview of life’s coming attractions.” ~Albert Einstein',

'"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired and success achieved.” ~Helen Keller',

'"The first one gets the oyster, the second gets the shell.” ~Andrew Carnegie',

'"The way to get started is to quit talking and begin doing.” ~Walt Disney',

'"Whether you think you can or whether you think you can’t, you’re right!” ~Henry Ford',

'"There are no secrets to success. It is the result of preparation, hard work and learning from failure.” ~Colin Powell',

'"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” ~Albert Schweitzer',

'"Success is often achieved by those who don’t know that failure is inevitable.” ~Coco Chanel',

'"Many of life’s failures are people who did not realize how close they were to success when they gave up.”~Thomas Edison',

'"I feel that luck is preparation meeting opportunity.” ~Oprah Winfrey',

' “I never dreamed about success. I worked for it.”  ~Estée Lauder',

'"Yesterday’s home runs don’t win today’s games.” ~Babe Ruth',

'"The only place where success comes before work is in the dictionary.” ~Vidal Sassoon',

'"The only way around is through.” ~Robert Frost',

' “The best investment is in the tools of one’s own trade.” ~Benjamin Franklin',

'"The man who does not read books has no advantage over the one who cannot read them.” ~Mark Twain',

'"Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” ~Malcolm X',

'"Teachers can open the door, but you must enter it yourself.” ~Chinese proverb',

'"The beautiful thing about learning is that no one can take it away from you.” ~ B.B. King',

'"Education is the most powerful weapon you can use to change the world.” ~BB King',

'"The mind is not a vessel to be filled but a fire to be ignited.” ~Plutarch',

'"Don’t let what you cannot do interfere with what you can do.” ~John Wooden',

'"A person who never made a mistake never tried anything new." ~Albert Einstein',

'"Learning is never done without errors and defeat.” ~Vladimir Lenin',

'"Never let the fear of striking out stop you from playing the game.” ~Babe Ruth',

'"Procrastination makes easy things hard and hard things harder.” ~Mason Cooley',

'"You don’t have to be great to start, but you have to start to be great.” ~Zig Ziglar',

'"The expert in anything was once a beginner ~Helen Hayes.”',

'"The way to get started is to quit talking and begin doing.” ~Walt Disney',

'"There are no shortcuts to any place worth going.” ~Beverly Stills',

'"I think it’s possible to ordinary people to choose to be extraordinary.” ~Elon Musk',

'"I find that the harder I work, the more luck I seem to have.” ~Thomas Jefferson',

'"Genius is 10% inspiration, 90% perspiration.” ~Thomas Edison',

'"Motivation is what gets you started. Habit is what keeps you going.” ~Jim Ryun',

'"Success is the sum of small efforts, repeated.” ~R Collier',

'"The best way to predict your future is to create it.” ~ Abraham Lincoln',

'"The future belongs to those who believe in the beauty of their dreams.”~ Eleanor Roosevelt',

'"You are braver than you believe, stronger than you seem and smarter than you think.” ~A.A Milne',

'"Learn from yesterday. Live for today. Hope for tomorrow.” ~Albert Einstein',

'"The more that you read, the more things you will know, the more that you learn, the more places you’ll go.” ~Dr. Seuss',

'"Today a reader. Tomorrow a leader.” ~Anonymous',

'"In a world where you can be anything, be kind.” ~Jennifer Dukes Lee',

'"None of us is as smart as all of us.” ~Ken Blanchard',

'"He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.” ~Chinese Proverb',

'"You have to be odd to be no.1.” ~Dr. Seuss',

];



 //quotes 
 var Authors = [
    
     ' ~  Winston Churchill',
    
     ' ~  Phil Knight',
    
     ' ~  Richard Branson',
    
     ' ~  Anthony Robbins',
    
     ' ~  Warren Buffett',
    
     ' ~  Henry David Thoreau',
    
     ' ~  Anaïs Nin',
    
     ' ~  Seth Godin',
    
     ' ~  G.K. Chesterton',

     ' ~  Susan Butcher',
    
     ' ~  Theodore Roosevelt',
    
     ' ~  Steve Jobs',
    
     ' ~  Chris Hadfield',
    
     ' ~  Will Rodgers',
    
     ' ~  Barack Obama',
    
     ' ~  William Durant',
    
     ' ~  Albert Einstein',
    
     ' ~  Helen Keller',
    
     ' ~  Andrew Carnegie',
    
     ' ~  Walt Disney',
    
     ' ~  Henry Ford',
    
     ' ~  Colin Powell',
    
     ' ~  Albert Schweitzer',
    
     ' ~  Coco Chanel',
    
     ' ~  Thomas Edison',
    
     ' ~  Oprah Winfrey',
    
     ' ~  Estée Lauder',
    
     ' ~  Babe Ruth',
    
     ' ~  Vidal Sassoon',
    
     ' ~  Robert Frost',
    
     ' ~  Benjamin Franklin',
    
     ' ~  Mark Twain',
    
     ' ~  Malcolm X',
    
     ' ~  Chinese proverb',
    
     ' ~ B.B. King',
    
     ' ~  BB King',
    
     ' ~  Plutarch',
    
     ' ~  John Wooden',
    
     ' ~  Albert Einstein',
    
     ' ~  Vladimir Lenin',
    
     ' ~  Babe Ruth',
    
     ' ~  Mason Cooley',
    
     ' ~  Zig Ziglar',
    
     ' ~  Helen Hayes.”',
    
     ' ~  Walt Disney',
    
     ' ~  Beverly Stills',
    
     ' ~  Elon Musk',
    
     ' ~  Thomas Jefferson',
    
     ' ~  Thomas Edison',
    
     ' ~  Jim Ryun',
    
     ' ~  R Collier',
    
     ' ~ Abraham Lincoln',

     ' ~ Eleanor Roosevelt',
    
     ' ~  A.A Milne',
    
     ' ~  Albert Einstein',

     ' ~  Dr. Seuss',
    
     ' ~  Anonymous',
    
     ' ~  Jennifer Dukes Lee',
    
     ' ~  Ken Blanchard',
    
     ' ~  Chinese Proverb',
    
     ' ~  Dr. Seuss'
    ];
 


//function for click and generate
document.getElementById('generate').addEventListener('click', function() {
    //random number for the background images
    var rollImage = Math.floor(Math.random() * 66) + 1;
    //random number for quotes itself
    var randomNumber = Math.floor(Math.random() * (Quotes.length));
    //updating the image on UI
    document.getElementById('backgroundImage').src = "img/images-" + rollImage + ".jpeg";
    //generating and updating quotes on UI
    document.querySelector('.quotes_text').innerHTML = Quotes[randomNumber];
}); 











