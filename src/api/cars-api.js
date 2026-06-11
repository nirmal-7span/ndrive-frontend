import cars from "@/data/cars.json";

export const carsApi = {
    getCars: async () => {
        return Promise.resolve(cars);
    },

    getCarById: async (id) => {
        const car = cars.find(
            (item) => item.id === Number(id)
        );

        return Promise.resolve(car);
    },
};