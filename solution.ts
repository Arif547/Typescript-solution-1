
function formatValue(value: string | number | boolean) {
   if (typeof value === 'string'){
    return value.toUpperCase();
   } else if (typeof value === 'number'){
    return value * 10;
   } else {
    return !value;
   }
}


function getLength(input: string | any[]){
  if (typeof input === 'string'){
    return input.length;
  } else if (Array.isArray (input)){
    return input.length;
  } else {
    return "add a string or an array";
  }
}

class Person {
  name: string;
  age: number;

  constructor (name: string, age: number){
    this.name = name;
    this.age = age;
  }

  getDetails(){
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}


function filterByRating (input: {title: string; rating: number}[]) : {title: string; rating: number}[]{
  return input.filter(item=> item.rating >= 4);
}


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(Users: User[]): User[] {
  return Users.filter(user=> user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {

  const bookAvailability = book.isAvailable ? "Yes" : "No";
  console.log(`Title: ${book.title}, Author: ${book.author}, publishedYear: ${book.publishedYear}, isAvailable: ${bookAvailability}`);
}


function getUniqueValues(Array1: (string | number)[], Array2: (string | number)[]):(string | number)[] {

  const result: (string | number)[] = [];

  const combinedArray = [...Array1, ...Array2];

  for(let i = 0; i < combinedArray.length; i++){
    let exists = false;

    for (let j = 0; j < result.length; j++){
      if (combinedArray[i] === result[j]){
        exists = true;
        break;
      }
    }  
    
    if (!exists){
        result.push(combinedArray[i]);
      }  
  }
  return result;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0; 

    return products.reduce((total, product) => {
      const basePrice =product.price * product.quantity;      

      const discountPrice = product.discount ? basePrice * (1- product.discount / 100) : basePrice;

      return total + discountPrice

    }, 0);
}

