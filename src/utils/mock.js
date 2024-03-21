import { Faker, es, en } from '@faker-js/faker';

const faker = new Faker({
    locale: [es, en]
});

export const generateUser = () => {
    const numOfProducts = parseInt(faker.string.numeric(1, {bannedDigits: ['0']}));
    const products = [];
    for(let i=0; i <numOfProducts; i++){
        products.push(generateProduct());
    }
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        cid: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        password:faker.internet.password(),
        products
    }
}

export const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        code: faker.string.alphanumeric({length: 10}).toUpperCase(),
        description: faker.lorem.paragraph(),
        price: faker.commerce.price(),
        status:faker.datatype.boolean(),
        category:faker.commerce.department(),
        stock: faker.number.int({min: 0, max: 100}),
        id: faker.database.mongodbObjectId(),
    }
}
