import Link from "next/link";
import { useEffect } from "react";
import React from "react";

export default function Bruh() {
    return ( 

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
         <section className="text-gray-600 body-font">
        <h2 className="pt-10 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          :(
        </h2>
        <br></br>
        <div className="pt-12 pb-24 max-w-4xl mx-auto text-white md:px-1 px-3 flex flex-col gap-2 content-center items-center justify-center">
            This solution only works on Goerli.
        </div>
      </section>
      </main>
    )
}