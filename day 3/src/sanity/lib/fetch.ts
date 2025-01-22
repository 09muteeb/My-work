import { createClient } from "next-sanity";


const client = createClient({

    projectId : "13g9t4g4",
    dataset : "production",
    useCdn : true,
    apiVersion : "2023-10-10"

})

export async function sanityfetch({query, params = {}}: 
    {query : string ,params?: any}){
    return await client.fetch(query, params)
}