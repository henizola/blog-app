import { createContext } from 'react';
import { UsersData } from './users.data';
const CurrentUser = createContext(UsersData);

export default CurrentUser;
