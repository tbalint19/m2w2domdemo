type Car = {
  brand: string
  km: number
  price: number
}

type Expectation = {
  km: number
  price: number
}

const data: Car[] = [
  { brand: "Opel", km: 10_000, price: 10_000 },
  { brand: "Skoda", km: 100_000, price: 20_000 },
  { brand: "BMW", km: 5000, price: 30_000 },
  { brand: "Mercedes", km: 10_000, price: 40_000 },
  { brand: "Tesla", km: 10_000, price: 50_000 },
]

const findGoodCars = (cars: Car[], expectation: Expectation): Car[] => {

  let result: Car[] = []

  for (let index = 0; index < cars.length; index++) {
    const car = cars[index]
    if (car.km < expectation.km && car.price < expectation.price) {
      result = [ ...result, car ]
    }
  }

  return result
}

const searchButton = document.getElementById("search") as HTMLButtonElement
const kmInput = document.getElementById("km-input") as HTMLInputElement
const priceInput = document.getElementById("price-input") as HTMLInputElement
const resultContainer = document.getElementById("result-container") as HTMLDivElement

const myEventListenerFunction = () => {
  const priceInputValue = +priceInput.value
  const kmInputValue = +kmInput.value
  const result = findGoodCars(data, { km: kmInputValue, price: priceInputValue })

  let content = ""
  for (let index = 0; index < result.length; index++) {
    const car = result[index];
    content += "<p>" + car.brand + "</p>"
  }

  resultContainer.innerHTML = content
}

searchButton.addEventListener("click", myEventListenerFunction)


/* const res1 = findGoodCars(data, { km: 10_000, price: 10_000 })
const res2 = findGoodCars(data, { km: 20_000, price: 100_000 })
const res3 = findGoodCars(data, { km: 30_000, price: 100_000 })
const res4 = findGoodCars(data, { km: 40_000, price: 100_000 })

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4) */