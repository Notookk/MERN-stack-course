const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate");

const generateQuote = () => {
    quoteElement.textContent = "Loading...";
    
    fetch("https://quotes.rest/qod")
        .then((response) => response.json())
        .then((data) => {
            const quote = data.contents.quotes[0];
            quoteElement.textContent = `"${quote.quote}" - ${quote.author}`;
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
            quoteElement.textContent = "Sorry, couldn't fetch a quote. Please try again.";
        });
};

generateButton.addEventListener("click", generateQuote);

generateQuote();