import * as path from 'path';
import { readJSONFile } from '../utils/readFile';

export const messageById = async (id: number): Promise<any> => {
  const filePath = path.resolve(__dirname, '../../Message.json');
  const messages = await readJSONFile(filePath);
    return messages.find((message: any) => message.id === id);
};

export const allMessage = async (): Promise<any> => {
  const filePath = path.resolve(__dirname, '../../Message.json');
  const messages = await readJSONFile(filePath);
    return messages;
};