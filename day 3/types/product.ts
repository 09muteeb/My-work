

export interface Product {
    _id : string;
    name : string;
    _type : "product";
    image? : {
        aset : {
            _ref : string;
            _type : "image";
        }
    };
    Price : number;
    description?:string;
}