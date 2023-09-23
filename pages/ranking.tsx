import Link from "next/link";
import { motion } from 'framer-motion'

const top10 = [
  "@me",
  "@you",
  "@pertark",
  "@ben",
  "@joe",
  "@biden",
  "@ruben",
  "@cassy",
  "@imposter"
]
export default function Calculator() {
    return ( 

    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
       <section className="text-gray-600 body-font">
      <h2 className="pt-10 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Rankings
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-p1 font-normal leading-relaxed fs521 lg:w-2/3">
        The top 10 users with the most carbon offset.
      </p>
      <div className="py-10 flex flex-col items-center justify-end">
        {/* podium */}
        <div className=" flex-grow"></div>
        <div className=" w-[1em] text-lg">👑</div>
        <div className="flex flex-row gap-1 justify-center items-end h-[8em]">
          <motion.div initial={{height: "0.5em"}} animate={{height: "3em"}} transition={{duration:1, delay: 0.4}} className="bg-p5 w-[3em] h-[3em] text-p1 text-center">3</motion.div>
          <motion.div initial={{height: "0.5em"}} animate={{height: "7em"}} transition={{duration:1, delay: 0.4}} className="bg-p3 w-[3em] h-[7em] text-p1 text-center">1</motion.div>
          <motion.div initial={{height: "0.5em"}} animate={{height: "5em"}} transition={{duration:1, delay: 0.4}} className="bg-p6 w-[3em] h-[5em] text-p1 text-center">2</motion.div>
        </div>
      </div>
      <div className="pt-4 pb-24 max-w-4xl mx-auto md:px-1 px-3">
        {
          top10.map((user, i) => (
        <div className="bg-p2 text-white rounded-md p-2 mb-2 flex flex-row justify-between">
          <span>{i+1}. <span className="text-p4">{user}</span></span>
          <span className="text-p4">1000</span>
        </div>
          ))
        }
      </div>
    </section>
    </main>
    )
}