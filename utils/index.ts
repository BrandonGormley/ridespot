export async function fetchCars() {
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
        {
            headers: {
                'X-RapidAPI-Key':
                    'd349c53f66msh6298f27e4556971p1b48afjsnf7580f090e24',
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
            },
        }
    );
    const result = await response.json();

    return result;
}
