export interface simplifiedProduct{
    _id :String;
    price:Number;
    name:String;
    slug:String;
    imageUrl:String;
    categoryName:String;   

};

export interface fullProduct {
    _id: string;
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
  }
