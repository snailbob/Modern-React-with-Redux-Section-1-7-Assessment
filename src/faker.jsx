import faker from 'faker';


const Users = () => {
    const persons = [];
    for(let i = 0; i<9;i++) {
        persons.push({
                email: faker.internet.exampleEmail(),
                jobTitle: faker.name.jobTitle(),
                avatar: faker.internet.avatar(),
                content: faker.lorem.paragraph(),
                countryCode: faker.address.countryCode(),
        });
    }
    return persons;
}

export default Users;