import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerCor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cor?: string | null;
  readonly grupo?: (CorAnimal | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cor?: string | null;
  readonly grupo: AsyncCollection<CorAnimal>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cor = LazyLoading extends LazyLoadingDisabled ? EagerCor : LazyCor

export declare const Cor: (new (init: ModelInit<Cor>) => Cor) & {
  copyOf(source: Cor, mutator: (draft: MutableModel<Cor>) => MutableModel<Cor> | void): Cor;
}

type EagerEspecialista = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Especialista, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome?: string | null;
  readonly especialidade?: (EspecialistaAnimal | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEspecialista = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Especialista, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome?: string | null;
  readonly especialidade: AsyncCollection<EspecialistaAnimal>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Especialista = LazyLoading extends LazyLoadingDisabled ? EagerEspecialista : LazyEspecialista

export declare const Especialista: (new (init: ModelInit<Especialista>) => Especialista) & {
  copyOf(source: Especialista, mutator: (draft: MutableModel<Especialista>) => MutableModel<Especialista> | void): Especialista;
}

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
  readonly grupo?: string | null;
  readonly especialistas?: (EspecialistaAnimal | null)[] | null;
  readonly cors?: (CorAnimal | null)[] | null;
  readonly cor?: string | null;
  readonly corG?: string | null;
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
  readonly grupo?: string | null;
  readonly especialistas: AsyncCollection<EspecialistaAnimal>;
  readonly cors: AsyncCollection<CorAnimal>;
  readonly cor?: string | null;
  readonly corG?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Animal = LazyLoading extends LazyLoadingDisabled ? EagerAnimal : LazyAnimal

export declare const Animal: (new (init: ModelInit<Animal>) => Animal) & {
  copyOf(source: Animal, mutator: (draft: MutableModel<Animal>) => MutableModel<Animal> | void): Animal;
}

type EagerCorAnimal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CorAnimal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly corId?: string | null;
  readonly animalId?: string | null;
  readonly cor: Cor;
  readonly animal: Animal;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCorAnimal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CorAnimal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly corId?: string | null;
  readonly animalId?: string | null;
  readonly cor: AsyncItem<Cor>;
  readonly animal: AsyncItem<Animal>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CorAnimal = LazyLoading extends LazyLoadingDisabled ? EagerCorAnimal : LazyCorAnimal

export declare const CorAnimal: (new (init: ModelInit<CorAnimal>) => CorAnimal) & {
  copyOf(source: CorAnimal, mutator: (draft: MutableModel<CorAnimal>) => MutableModel<CorAnimal> | void): CorAnimal;
}

type EagerEspecialistaAnimal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EspecialistaAnimal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly especialistaId?: string | null;
  readonly animalId?: string | null;
  readonly especialista: Especialista;
  readonly animal: Animal;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEspecialistaAnimal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EspecialistaAnimal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly especialistaId?: string | null;
  readonly animalId?: string | null;
  readonly especialista: AsyncItem<Especialista>;
  readonly animal: AsyncItem<Animal>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EspecialistaAnimal = LazyLoading extends LazyLoadingDisabled ? EagerEspecialistaAnimal : LazyEspecialistaAnimal

export declare const EspecialistaAnimal: (new (init: ModelInit<EspecialistaAnimal>) => EspecialistaAnimal) & {
  copyOf(source: EspecialistaAnimal, mutator: (draft: MutableModel<EspecialistaAnimal>) => MutableModel<EspecialistaAnimal> | void): EspecialistaAnimal;
}