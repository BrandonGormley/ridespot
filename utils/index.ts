export async function fetchCars() {
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
        {
            headers: {
                'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
            },
        }
    );
    const result = await response.json();

    return result;
}
