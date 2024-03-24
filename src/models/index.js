// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cor, Especialista, Animal, CorAnimal, EspecialistaAnimal } = initSchema(schema);

export {
  Cor,
  Especialista,
  Animal,
  CorAnimal,
  EspecialistaAnimal
};