// get all quotes

const quotes =[
{
    quote:"Perfection is not attainable, but if we chase perfection we can catch excellence.",
    author:"Vince Lombardi"
},
{
    quote:"Your attitude, not your aptitude, will determine your altitude",
    author:"Zig Ziglar"
},
{
    quote:"Gravitation is not responsible for people falling in love.",
    author:"Albert Einstein"
},
{
    quote:"To love oneself is the beginning of lifelong romance.",
    author:"Oscar Wilde"
},
{
    quote:"Look back, and smile on perils past.",
    author:"Walter Scott"
},
{
    quote:"Don't cry because its over. Smile because it happened.",
    author:"Dr. Seuss"
},
{
    quote:"Faith is the strength by which a shattered world shall emerge into the light.",
    author:"Helen Keller"
},
{
    quote:"I never cut class. I loved getting A's, I liked being smart. I liked being on time. I thought being smart is cooler than anything in the world.",
    author:"Michelle Obama"
},


{
    quote:"We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    author:"Joseph Campbell"
},
{
    quote:"Health is the greatest possession. Contentment is the greatest treasure. Confidence is the greatest friend. Non-being is the greatest joy.",
    author:"Lao Tzu"
},
];
// Button Generate comments
const btn = document.querySelector('.generate');

// add Event Listener
btn.addEventListener('click',()=>{

    //Get random text of Quotes
    let random = Math.floor(Math.random() * quotes.length) ;
    // console.log(random);

    // show text on screen
    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;

});
