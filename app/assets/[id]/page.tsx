
import Image from 'next/image'
import React, {FC} from "react";
import Script from "next/script";
import { redirect } from "next/navigation";




interface pageProps{
    params: {id:string}
}

const page: FC<pageProps> = async ({params}) => {

    let data = `https://manaboss-default-rtdb.firebaseio.com/tx/${params.id}.json`

    const d = await fetch(data, {cache: "no-store"}).then( r => r.json())




return <>


            <div>yawa</div>


    </>


}

export default page;