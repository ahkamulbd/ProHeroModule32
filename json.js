// JSON - JavaScript Object Notation

// Example 1:

const user = { id: 1, name: 'Gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);

console.log(user);
console.log(stringified);

// Example 2:

const shop = {
    owner: 'Alia',
    address: {
        street: 'haspatal road',
        city: 'chakaria',
        country: 'BD'
    },
    products: ['laptop', 'microphone', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopJSON);