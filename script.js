const quote=document.getElementById("quote");
const author=document.getElementById("author");
const api_url="https://api.quotable.io/quotes/random?tags=technology,famous-quotes";

async function getquote(url){
    const response=await fetch(url);
    var data=await response.json();

    console.log(data);

    quote.innerHTML=data[0].content;
    author.innerHTML=data[0].author;
}
document.getElementById("newQuoteBtn").addEventListener("click", function() {
    getquote(api_url);
});

function tweet(){
    window.open("https://twitter.com/intent/tweet");
}

document.getElementById("shareBtn").addEventListener("click", function() {
    tweet();
});