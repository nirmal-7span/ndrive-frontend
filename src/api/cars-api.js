import cars from '../data/cars.json';

export async function getCars() {
    return Promise.resolve(cars);
}