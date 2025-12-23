export interface Pets {
  pets_for_adoption: Pet[];
}

export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  age_unit: AgeUnit;
  size: Size;
  color: string;
  gender: Gender;
  description: string;
  images: string[];
  categories: Categories;
  location: string;
  created_at: string;
}

export enum AgeUnit {
  Months = 'months',
  Years = 'years',
}

export interface Categories {
  urgent: boolean;
  friendly: boolean;
  trained: boolean;
  energy_level: string;
  vaccinated: boolean;
  neutered: boolean;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export enum Size {
  ExtraLarge = 'Extra Large',
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
}
