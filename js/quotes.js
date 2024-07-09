const quotes = [
    {
        quote: "A",
        author : "a",
    },
    {
        quote: "B",
        author : "b",
    },
    {
        quote: "C",
        author : "c",
    },
    {
        quote: "D",
        author : "d",
    },
    {
        quote: "E",
        author : "e",
    },
    {
        quote: "F",
        author : "f",
    },
    {
        quote: "G",
        author : "g",
    },
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQutoe = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQutoe.quote;
author.innerText = todaysQutoe.author;