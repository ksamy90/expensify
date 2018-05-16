const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};
const { author, title } = book;
const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ hotCoffee, , medium ] = item;
console.log(`A medium ${hotCoffee} costs ${medium}`);

const coffee = ['Coffee (iced)', '$2.50', '$3.50', '$4.75'];
const [ icedCoffee, , , great ] = coffee;
console.log(`A large ${icedCoffee} costs ${great}`);
