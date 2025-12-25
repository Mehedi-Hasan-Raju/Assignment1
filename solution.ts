function formatValue(value: string | number | boolean) : string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return !value;
    }
    
}



function getLength(value: string | any[]) : number {
    if(typeof value === "string") {
        return value.length;
    }else if(Array.isArray(value)) {
        return value.length;
    }
    return 0;
}





class Person {
    name : string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return`Name: ${this.name}, Age: ${this.age}`;
    }
}





type Item = {
  title: string;
  rating: number; 
};
function filterByRating(items: Item[]): Item[] {
  return items.filter(item => {
    if (item.rating < 0 || item.rating > 5) {
      console.warn(`Invalid rating for`);
      return false; 
    }
    return item.rating >= 4;
  });
}




type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}







interface Book {
    title : string;
    author: string;
    publishedYear: number;
    isAvailable : boolean;
}
function printBookDetails(book:Book) : string {
    const availablity =book.isAvailable ? 'Yes' : 'No';
    return `Title : ${book.title}, Author: ${book.author}, Published : ${book.publishedYear}, Available : ${availablity}`;
}





function getUniqueValues(arr1: (string | number)[], arr2: (string |number)[]): (string | number)[] 
{
    const uniqueValues : (string | number)[] = [];

    const valueExist = (arr:(string |number)[], value: string | number) : boolean => {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === value) {
                return true;
            }
        }
        return false;
    };


    for(let i = 0; i <arr1.length; i++){
        const value = arr1[i];
        if(value !== undefined && !valueExist(uniqueValues, value)) {
            uniqueValues.push(value);
        };
    };

     for (let i = 0; i < arr2.length; i++) {
        const value = arr2[i];
         if(value !== undefined && !valueExist(uniqueValues, value)) {
            uniqueValues.push(value);
        };
    };
    return uniqueValues;
}






function calculateTotalPrice(
    products: {
        name: string;
        price: number;
        quantity: number;
        discount?: number;
    }[]): number {
    if (products.length === 0) return 0;

    return products.reduce((total, product)=> {
        const basePrice = product.price * product.quantity;

     if (product.discount !== undefined) {
        if (product.discount < 0 || product.discount > 100) {
        throw new Error(
               `Invalid  Discount must be between 0 and 100.`);
            }
            return total + basePrice * (1 - product.discount / 100);
        }
        return total + basePrice;
    }, 0);
}




