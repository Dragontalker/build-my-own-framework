import { User } from './models/User';

const user = new User({ name: 'Richard', age: 20});

user.set({ name: 'Tong', age: 32});

console.log(user.get('name'));
console.log(user.get('age'));