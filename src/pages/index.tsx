import '@/styles/globals.css'
import Hero from "@/components/home-page/hero";
import { Fragment, useEffect } from "react";



function HomePage(){
    useEffect(()=>{
        document.getElementById('__next')?.classList.add('nextElementStyle')
    })

    return(
        <section className="min-w-full md:col-count-2 col-gap-8">
            <section className="flex-col">
                <Hero />
            </section>
        </section>
    )
}

export default HomePage