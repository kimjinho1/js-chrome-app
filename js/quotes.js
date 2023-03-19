const quotes = [
  {
    quote: "너가 자면서 꿈을 꿀 때 나는 꿈을 이루러 간다",
    author: "안종찬",
  },
  {
    quote: "잔잔한 파도는 강한 선원을 키우지 못한다",
    author: "안종찬",
  },
  {
    quote: "그럴거면 술을 먹지를 말어",
    author: "안종찬",
  },
];

const quote = document.querySelector(".quote > .quote_quote");
const author = document.querySelector(".quote > .quote_author");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
