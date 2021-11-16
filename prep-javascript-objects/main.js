const person = {
  firstName: 'Garrett',
  lastName: 'Quathamer',
  hobby: 'hiking'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is: ", fullName + '.');

person.job = 'Sales Engineer';

console.log('The person\'s current job is: ', person.job);

person.previousJob = 'Account Executive';

console.log("The person's previous job is: ", person.previousJob);

console.log('The complete person object: ', person);
