const loremWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate', 'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'];

function generateSentence() {
    const sentenceLength = Math.floor(Math.random() * 10) + 8;
    const sentence = [];
    
    for (let i = 0; i < sentenceLength; i++) {
        const randomWord = loremWords[Math.floor(Math.random() * loremWords.length)];
        sentence.push(i === 0 ? randomWord.charAt(0).toUpperCase() + randomWord.slice(1) : randomWord);
    }
    
    return sentence.join(' ') + '.';
}

function generateParagraph(sentenceCount) {
    const sentences = [];
    for (let i = 0; i < sentenceCount; i++) {
        sentences.push(generateSentence());
    }
    return sentences.join(' ');
}

function applyFormatting(text, formats, includeHtml) {
    if (!includeHtml || formats.length === 0) return text;
    
    let formattedText = text;
    
    formats.forEach(format => {
        switch (format) {
            case 'b':
                formattedText = `<b>${formattedText}</b>`;
                break;
            case 'i':
                formattedText = `<i>${formattedText}</i>`;
                break;
            case 'u':
                formattedText = `<u>${formattedText}</u>`;
                break;
            case 'ov':
                formattedText = `<span style="text-decoration: overline;">${formattedText}</span>`;
                break;
        }
    });
    
    return formattedText;
}

function generateLorem() {
    const paragraphCount = parseInt(document.getElementById('paragraphCount').value) || 1;
    const sentenceCount = parseInt(document.getElementById('sentenceCount').value) || 3;
    const formatCheckboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]:checked');
    const selectedFormats = Array.from(formatCheckboxes).map(checkbox => checkbox.value);
    const includeHtml = document.getElementById('includehtml').checked;
    const outputDiv = document.getElementById('lorem-text');
    
    if (paragraphCount < 1 || paragraphCount > 10) {
        outputDiv.innerHTML = '<p style="color: red;">Please enter a number between 1 and 10 for paragraphs.</p>';
        return;
    }
    
    if (sentenceCount < 1 || sentenceCount > 10) {
        outputDiv.innerHTML = '<p style="color: red;">Please enter a number between 1 and 10 for sentences.</p>';
        return;
    }
    
    const paragraphs = [];
    
    for (let i = 0; i < paragraphCount; i++) {
        const paragraphText = generateParagraph(sentenceCount);
        const formattedText = applyFormatting(paragraphText, selectedFormats, includeHtml);
        paragraphs.push(`<p>${formattedText}</p>`);
    }
    
    outputDiv.innerHTML = paragraphs.join('');
}

document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-button');
    generateButton.addEventListener('click', generateLorem);
    
    document.getElementById('paragraphCount').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateLorem();
        }
    });
    
    document.getElementById('sentenceCount').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateLorem();
        }
    });
});