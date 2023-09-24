import Image from 'next/image'
import { Manrope } from 'next/font/google'
import Model from '@/components/home/Model'
import { Suspense, useEffect, useRef, useState } from 'react';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import tree1 from '@/public/imgs/tree1.png'
// import tree2 from '@/public/imgs/tree2.jpg'

const inter = Manrope({ subsets: ['latin'] })

const climate_deadline = 18793440000;
export default function Home() {
  const [email, setEmail] = useState("");
  const seconds = useRef<HTMLHeadingElement>(null);
  const scrollTrigger = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!seconds.current) return;
    const timer = setInterval(() => {
      const now = new Date().getSeconds();
      const distance = climate_deadline - now;
      // console.log(distance, now)

      seconds.current.innerText = distance.toLocaleString("en-US");
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds.current]);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
       <section className="text-gray-600 body-font">
      <div className="max-w-5xl pt-12 pb-24 mx-auto flex flex-row items-center">
        <div className='relative z-10'>
          <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          {/* Mint Your Way To Net-Zero */}
          Take Carbon Out Of The Equation
          </h1>
          <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-400 text-center">
            be a part of the change.
            <br />
            {/* Goodb ye. */}
          </h2>
          <div className="ml-0 text-center">
            <a
              className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
              href="#why"
            >
              <div className="flex text-lg">
                <span className="justify-center">Why?</span>
              </div>
            </a>
            <Link
              className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-p5 to-p3 px-14 text-md md:mt-0 focus:shadow-outline"
              href="/buy"
            >
              <div className="flex text-lg">
                <span className="justify-center">Purchase</span>
              </div>
            </Link>
          </div>
        </div>

        <div className='md:block hidden w-[40%]'>
          <div className='relative -right-10'>
            <Suspense>
              <Model />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          // className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
          // alt="Placeholder Image"
          // src="./images/placeholder.png"
        ></img>
      </div>
      <h2 className="pt-20 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Be a Part of the Change
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center max-w-full text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
       We're spearheading the new era of carbon credits.
      </p>
      <div className="pt-12 pb-24 md:max-w-4xl max-w-full mx-auto fsac4 md:px-1 px-3">
        <div className="ktq4">
          {/* <img className="w-10" src="https://nine4.app/favicon.png"></img> */}
          <h3 className="pt-3 font-semibold text-xl text-white">
            Accessible
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            We allow everyday people to bypass the high entry points of
            initial investments that currently limited to larger corportations.
          </p>
        </div>
        <div className="ktq4">
          {/* <img className="w-10" src="https://nine4.app/favicon.png"></img> */}
          <h3 className="pt-3 font-semibold text-xl text-white">
            Easy to Use
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Through our website, users can easy trade their currency of choice
            to carbon credits as well as retire their carbon credits once exhausted.
          </p>
        </div>
        <div className="ktq4">
          {/* <img className="w-10" src="https://nine4.app/favicon.png"></img> */}
          <h3 className="pt-3 font-semibold text-xl text-white">
            Seamless
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            We bridge the disconnect between systems, technologies, and platforms
            through our interface allowing for seamless data sharing and flow of transactions.
          </p>
        </div>
        <div className="ktq4">
          {/* <img className="w-10" src="https://nine4.app/favicon.png"></img> */}
          <h3 className="pt-3 font-semibold text-xl text-white">
            User-friendly
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            We extend the usage of carbon credits to everyone, even those who may
            be inexperience with Web3 and Blockchain.
          </p>
        </div>
      </div>
      <h2 className="pt-20 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        The Stats
      </h2>
      <div className="pt-12 pb-32 max-w-screen flex flex-row flex-wrap justify-center gap-4 md:px-1 px-3">
        <div className="ktq4 max-w-[40em] text-right whitespace-pre-line">
          <h3 className="pt-3 font-semibold md:text-7xl text-4xl text-white" ref={seconds}>
          </h3>
          <h3 className="pt-3 font-semibold md:text-4xl text-2l text-white">
            seconds until the climate deadline.
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            The climate deadline is the point at which we can no longer reverse
            the effects of climate change. We must pursue carbon removal and 
            carbon neutrality as well as reduce our carbon footprint, before it's too late. 
          </p>
        </div>
        <div className="ktq4 max-w-[28em] text-right">
          <h3 className="pt-3 font-semibold md:text-7xl text-5xl text-white">
            19,891,392
          </h3>
          <h3 className="pt-3 font-semibold md:text-4xl text-2xl text-white">
            unretired tokens
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Each token represents 1 ton of carbon dioxide removed from the
            atmosphere. Time will not stop for us, so we must act swiftly and decisively. 
          </p>
        </div>
      </div>
        <a id="why" className="relative -top-10"></a>
      <h2 className="pt-20 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl z-50">
        Our Mission
      </h2>
      <div className="pt-12 pb-32 max-w-screen flex flex-row flex-wrap justify-center gap-4 md:px-1 px-3 relative z-10">
        <div className="ktq4 md:max-w-[65%] max-w-[95%] text-left whitespace-pre-line z-10">
          <p className="pt-2 value-text text-lg text-p4 fkrr1">
            As governments push towards a sustainable future, we believe carbon credits are a solution towards reducing the net effects of climate change. As we expedite the growth of the carbon credit market, we are focusing on accessibility, transparency, and ubiquity. Individuals, businesses, and organizations can continue taking a proactive approach in pursuing carbon neutrality with us.
          </p>
          <div ref={scrollTrigger} className="absolute bottom-0 h-2 w-2"></div>
        </div>
        <motion.div className="absolute -top-20 right-[15%]" initial={{rotate: 0}} whileInView={{rotate: 40, x: 130, y: 40}}>
          <Image src="/imgs/tree2.jpg" alt="example tree nft 2" width={200} height={200} />
        </motion.div>
        <motion.div className='absolute -top-20 right-[15%]' initial={{rotate: 0}} whileInView={{rotate: 20, x: 50}}>
          <Image src="/imgs/tree.png" alt="example tree nft" width={200} height={200} />
        </motion.div>
      </div>
      <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-p4"
            />{" "}
            <a
              className="inline-flex cursor-pointer items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              onClick={() => {fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email })}); setEmail("");} }
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
    </main>
  )
}
