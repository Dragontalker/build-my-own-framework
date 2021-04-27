import { User } from './models/User';

const user = new User({});

user.on('change', () => {});
user.on('change', () => {});
user.on('notice', () => {});

console.log(user);