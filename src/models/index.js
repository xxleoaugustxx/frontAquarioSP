// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Animal } = initSchema(schema);

export {
  Animal
};