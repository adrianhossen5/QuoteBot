console.log('Hello There!');
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.Token);

client.on('ready', readyDiscord);

function readyDiscord() {

    console.log('Hey there');

}

client.on('message', gotMessage);    

function gotMessage(msg){

    console.log(msg.content);

    const array = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "ur mum -Adrian", "The way to get started is to quit talking and begin doing. -Walt Disney",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs", 
        "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt", 
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey", 
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
        "Life is what happens when you're busy making other plans. -John Lennon",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
        "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
        "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
        "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
        "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
        "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
        "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller",
        "It is during our darkest moments that we must focus to see the light. -Aristotle",
        "Whoever is happy will make others happy too. -Anne Frank",
        "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
        "You will face many defeats in life, but never let yourself be defeated. -Maya Angelou",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
        "Never let the fear of striking out keep you from playing the game. -Babe Ruth",
        "Life is either a daring adventure or nothing at all. -Helen Keller",
        "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
        "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
        "Never let the fear of striking out keep you from playing the game. -Babe Ruth","Life is never fair, and perhaps it is a good thing for most of us that it is not. -Oscar Wilde",
        "The only impossible journey is the one you never begin. -Tony Robbins","In this life we cannot do great things. We can only do small things with great love. -Mother Teresa",
        "Only a life lived for others is a life worthwhile. -Albert Einstein",
        "The purpose of our lives is to be happy. -Dalai Lama","Life is what happens when you're busy making other plans. -John Lennon",
        "You only live once, but if you do it right, once is enough. -Mae West","Live in the sunshine, swim the sea, drink the wild air. -Ralph Waldo Emerson",
        "Go confidently in the direction of your dreams! Live the life you've imagined. -Henry David Thoreau",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "Life is really simple, but we insist on making it complicated. -Confucius",
        "May you live all the days of your life. -Jonathan Swift",
        "Life itself is the most wonderful fairy tale. -Hans Christian Andersen",
        "Do not let making a living prevent you from making a life. -John Wooden",
        "Life is ours to be spent, not to be saved. -D. H. Lawrence",
        "Keep smiling, because life is a beautiful thing and there's so much to smile about. -Marilyn Monroe",
        "Life is a long lesson in humility. -James M. Barrie",
        "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost",
        "Love the life you live. Live the life you love. -Bob Marley",
        "Life is either a daring adventure or nothing at all. -Helen Keller",
        "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
        "Life is made of ever so many partings welded together. -Charles Dickens",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking. -Steve Jobs",
        "Life is trying things to see if they work. -Ray Bradbury",
        "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
        "Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill",
        "Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau",
        "The way to get started is to quit talking and begin doing. -Walt Disney",
        "If you really look closely, most overnight successes took a long time. -Steve Jobs",
        "The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.",
        "I find that the harder I work, the more luck I seem to have. -Thomas Jefferson",
        "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. -Barack Obama",
        "You miss 100% of the shots you don't take. -Wayne Gretzky",
        "Whether you think you can or you think you can't, you're right. -Henry Ford",
        "I have learned over the years that when one's mind is made up, this diminishes fear. -Rosa Parks",
        "I alone cannot change the world, but I can cast a stone across the water to create many ripples. -Mother Teresa",
        "Nothing is impossible, the word itself says, ‘I'm possible!' -Audrey Hepburn",
        "The question isn't who is going to let me; it's who is going to stop me. -Ayn Rand",
        "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
        "Believe you can and you're halfway there. -Theodore Roosevelt", 
        "But man is not made for defeat. A man can be destroyed but not defeated -Ernest Hemingway",
        "When you reach the end of your rope, tie a knot in it and hang on -Franklin D. Roosevelt",
        "There is nothing permanent except change -Heraclitus",
        "You cannot shake hands with a clenched fist - Indira Ghandi",
        "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",
        "Strive not to be a success, but rather to be of value. –Albert Einstein",
        "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. –Michael Jordan",
        "Life isn't about getting and having, it's about giving and being. –Kevin Kruse",
        "Life is 10% what happens to me and 90% of how I react to it. –Charles Swindoll", "The most common way people give up their power is by thinking they don’t have any. –Alice Walker", "The mind is everything. What you think you become.  –Buddha ","The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb",
        "An unexamined life is not worth living. –Socrates", "Eighty percent of success is showing up. –Woody Allen", "Your time is limited, so don’t waste it living someone else’s life. –Steve Jobs", 
        "Winning isn’t everything, but wanting to win is. –Vince Lombardi", "I am not a product of my circumstances. I am a product of my decisions. –Stephen Covey",
        "Every child is an artist.  The problem is how to remain an artist once he grows up. –Pablo Picasso", "You can never cross the ocean until you have the courage to lose sight of the shore. –Christopher Columbus",
        "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. –Maya Angelou",
        "Either you run the day, or the day runs you. –Jim Rohn",
        "Whether you think you can or you think you can’t, you’re right. –Henry Ford",
        "The two most important days in your life are the day you are born and the day you find out why. –Mark Twain",
        "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. –Johann Wolfgang von Goethe",
        "The best revenge is massive success. –Frank Sinatra",
        "Life shrinks or expands in proportion to one's courage. –Anais Nin",
        "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced. –Vincent Van Gogh",
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. –Aristotle",
        "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. –Jesus",
        "The only person you are destined to become is the person you decide to be. –Ralph Waldo Emerson",
        "Go confidently in the direction of your dreams.  Live the life you have imagined. –Henry David Thoreau",
        "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. –Erma Bombeck",
        "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.  –Booker T. Washington",
        "ertain things catch your eye, but pursue only those that capture the heart. – Ancient Indian Proverb",
        "Believe you can and you’re halfway there. –Theodore Roosevelt",
        "Everything you’ve ever wanted is on the other side of fear. –George Addair",
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. –Plato",
        "Teach thy tongue to say, 'I do not know,' and thous shalt progress. –Maimonides"];

    if(msg.content === ("!pls quote")){

        var randomNumber = Math.floor(Math.random()*(array.length));

        msg.reply(array[randomNumber]);

    }

    if(msg.content === ("!help")){

        msg.reply("Use !pls quote :D");

    }

}
