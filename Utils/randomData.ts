import { faker } from '@faker-js/faker';

export function getRandomName(): string {
  return faker.name.firstName() + ' ' + faker.name.lastName();
}

export function getRandomEmail(): string {
  return faker.internet.email();
}