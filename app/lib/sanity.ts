import { createClient } from "next-sanity";
import imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    projectId:"moek1g1p",
    dataset:"production",
    apiVersion:"2024-05-25",
    useCdn:true

});

const builder = imageUrlBuilder(client);

export function urlFor(source:any){
 return builder.image(source);
}