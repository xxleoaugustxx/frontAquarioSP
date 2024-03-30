import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAnimal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Animal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly registro?: string | null;
  readonly idade?: number | null;
  readonly especie?: string | null;
  readonly temperaturaIdeal?: number | null;
  readonly bpmIdeal?: number | null;
  readonly habitat?: string | null;
  readonly imagem?: string | null;
  readonly comentarios?: string | null;
  readonly alimentacao?: string | null;
  readonly cor?: string | null;
  readonly especialista?: string | null;
  readonly tamanho?: string | null;
  readonly peso?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnimal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Animal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly registro?: string | null;
  readonly idade?: number | null;
  readonly especie?: string | null;
  readonly temperaturaIdeal?: number | null;
  readonly bpmIdeal?: number | null;
  readonly habitat?: string | null;
  readonly imagem?: string | null;
  readonly comentarios?: string | null;
  readonly alimentacao?: string | null;
  readonly cor?: string | null;
  readonly especialista?: string | null;
  readonly tamanho?: string | null;
  readonly peso?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Animal = LazyLoading extends LazyLoadingDisabled ? EagerAnimal : LazyAnimal

export declare const Animal: (new (init: ModelInit<Animal>) => Animal) & {
  copyOf(source: Animal, mutator: (draft: MutableModel<Animal>) => MutableModel<Animal> | void): Animal;
}