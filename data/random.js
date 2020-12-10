import faker from 'faker';

const randomUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: '17775551122',
        shippingStreetAddress: faker.address.streetAddress(),
        shippingCity: faker.address.city(),
        shippingPostalCode: faker.address.zipCode()
}
module.exports = randomUser;