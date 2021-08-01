// задача 29
function getShippingCost(country) {
    let message;
    let price;
    // Change code below this line

    switch (country) {
        case "China":
            price = 100;
            message = `Shipping to ${country} will cost ${price} credits`
            break

        case "Chile":
            price = 250;
            message = `Shipping to ${country} will cost ${price} credits`
            break

        case "Australia":
            price = 170;
            message = `Shipping to ${country} will cost ${price} credits`
            break

        case "Jamaica":
            price = 120;
            message = `Shipping to ${country} will cost ${price} credits`
            break

        default:
            message = "Sorry, there is no delivery to your country"
    }

    // Change code above this line
    return message;
}



// задача 31
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];


//  задача 33
function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
    result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";

    /// Change code above this line
    return result;
}

//  задача 36
function checkForSpam(message) {
    let result;
    // Change code below this line
    result = (message.toLowerCase().includes("sale") || message.toLowerCase().includes("spam"));

    // Change code above this line
    return result;
}