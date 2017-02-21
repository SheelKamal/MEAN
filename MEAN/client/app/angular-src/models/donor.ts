
 export class Product {
        tittle : string;
        description: string;
        category: string;
        image: string;
    }
export class Donor{
    id : number;
    name : string;
    phone: string;
    email: string;
    address : string;
    product = new Product();
}