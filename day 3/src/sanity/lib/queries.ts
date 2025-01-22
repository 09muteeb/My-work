import { defineQuery } from "next-sanity";



export const allproducts =defineQuery(`
    *[_type == "product]{
    _id,
    name,
    description,
    price,
    discountpercentage,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageurl": image.asset->url

    }`)

    export const fourpro =defineQuery(`
        *[_type == "product][0..3]{
        _id,
        name,
        description,
        price,
        discountpercentage,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageurl": image.asset->url
    
        }`)
