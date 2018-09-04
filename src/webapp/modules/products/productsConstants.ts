
export class ProductItem {
    public name: string;
    public imageUrl: string;
    public description: string;
    public quantity: number = 0;
    constructor(name: string, imgUrl: string, desc: string) {
        this.name = name;
        this.imageUrl = imgUrl;
        this.description = desc;
    }
}

export class Products {
    public static nutrient: Array<ProductItem> = [
        new ProductItem('Nutrient Name', '/assets/img/item1.jpg', 'Here is a description of the product that should give the user a little more info as to what they"re looking at'),
        new ProductItem('Nutrient Name', '/assets/img/item1.jpg', 'Here is a description of the product that should give the user a little more info as to what they"re looking at'),
        new ProductItem('Nutrient Name', '/assets/img/item1.jpg', 'Here is a description of the product that should give the user a little more info as to what they"re looking at'),
        new ProductItem('Nutrient Name', '/assets/img/item1.jpg', 'Here is a description of the product that should give the user a little more info as to what they"re looking at'),
        new ProductItem('Nutrient Name', '/assets/img/item1.jpg', 'Here is a description of the product that should give the user a little more info as to what they"re looking at'),
      ];
    public static shatter: Array<ProductItem> = [
        new ProductItem('Shatter Name', '/assets/img/item2.jpg', 'Here is a description of the product that should give the user a little more info as to what they"re looking at'),
        new ProductItem('Shatter Name', '/assets/img/item2.jpg', 'Here is a description of the product that should give the user a little more info as to what they"re looking at'),
        new ProductItem('Shatter Name', '/assets/img/item2.jpg', 'Here is a description of the product that should give the user a little more info as to what they"re looking at'),
    ];
}