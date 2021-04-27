import { User } from './models/User';

const user = new User({ id: 1});

user.set({ name: 'NEW NAME' });
user.set({ age: 9999 });

user.save();
