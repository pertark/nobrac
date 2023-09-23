import Link from "next/link";

export default function Calculator() {
    return ( 

    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
       <section className="text-gray-600 body-font">
      <h2 className="pt-10 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Buy Buy Buy
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-p1 font-normal leading-relaxed fs521 lg:w-2/3">
        Buy the carbon credits so that you don't feel bad about not recycling. 
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto md:px-1 px-3">
        <div className="ktq4">
          <h3 className="pt-3 font-semibold text-lg text-white">
            How many cars do you own?
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
      </div>
    </section>
    </main>
    )
}