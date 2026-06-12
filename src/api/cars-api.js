import cars from "@/data/cars.json";

export const carsApi = {
    getCars: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(cars), 500);
        });
    },

    getCarById: async (id) => {
        const car = cars.find(
            (item) => item.id === Number(id)
        );

        return new Promise((resolve) => {
            setTimeout(() => resolve(car), 500);
        });
    },
};