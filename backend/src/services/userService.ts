import * as path from 'path';
import { readJSONFile } from '../utils/readFile';

export const userById = async (id: number): Promise<any> => {
    const filePath = path.resolve(__dirname, '../../user.json');
    const users = await readJSONFile(filePath);
    return users.find((user: any) => user.id === id);
  };

export const allUser = async (): Promise<any> => {
    const filePath = path.resolve(__dirname, '../../user.json');
    const users = await readJSONFile(filePath);
    console.log(users)
    return users;
};