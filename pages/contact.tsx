import Link from "next/link";

export default function Calculator() {
    return ( 

    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
       <section className="text-gray-600 body-font">
      <h2 className="pt-10 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Contact Us
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-p1 font-normal leading-relaxed fs521 lg:w-2/3">
        Feel free to ask us any questions you may have.
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto md:px-1 px-3 flex-col flex">
        <div className="ktq4 col-span-2 flex flex-col gap-1">
          <input className="w-full bg-p2 rounded-md p-2 border text-white" placeholder="Name"></input>
          <input className="w-full bg-p2 rounded-md p-2 border text-white" placeholder="Telegram/Twitter"></input>
          <input className="w-full bg-p2 rounded-md p-2 border text-white" placeholder="Email"></input>
          <textarea rows={4} className="w-full bg-p2 rounded-md p-2 border text-white" placeholder="Ask us your questions" ></textarea>
          <input type="submit" className="w-full bg-p3 rounded-md p-2" value="Submit"></input>
        </div>
        {/* <div className="flex flex-row flex-wrap justify-between">
          <div className="bg-p2 text-white rounded-md p-2">
            Twitter
          </div>
          <div className="bg-p2 text-white rounded-md p-2">
            some_email@email.cm
          </div>
          <div className="bg-p2 text-white rounded-md p-2">
            some other contact
          </div>
          <div className="bg-p2 text-white rounded-md p-2">
            contact 4
          </div>
        </div> */}
      </div>
    </section>
    </main>
    )
}