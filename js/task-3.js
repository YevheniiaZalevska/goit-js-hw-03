function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; 
    const borderWidth = parseFloat(border) * 2;

    const totalWidth = contentWidth + paddingWidth + borderWidth;

    return totalWidth;
}


function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();

    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}


// console.log(checkForSpam('Latest technology news')); 
// console.log(checkForSpam('JavaScript weekly newsletter')); 
// console.log(checkForSpam('Get best sale offers now!')); 
// console.log(checkForSpam('Amazing SalE, only tonight!')); 
// console.log(checkForSpam('SPAM How to earn fast money?')); 
