import Link from "next/link";
import React from "react";

export default function Calculator() {
  const [contactFields, setContactFields] = React.useState({
    name: "",
    telegram: "",
    email: "",
    message: "",
  });

  const [fieldsFilled, setFieldsFilled] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // if all fields filled out, set submit to true
    if (
      contactFields.name.length > 0 &&
      contactFields.telegram.length > 0 &&
      contactFields.email.length > 0 &&
      contactFields.message.length > 0
    ) {
      setFieldsFilled(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactFields);

    // clear all fields
    setContactFields({
      name: "",
      telegram: "",
      email: "",
      message: "",
    });
    setFieldsFilled(false);
  };


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
        <form className="ktq4 col-span-2 flex flex-col gap-1" onSubmit={handleSubmit} >
          <input onChange={handleChange} value={contactFields.name} name="name" className="w-full bg-p2 rounded-md p-2 border text-white" placeholder="Name"></input>
          <input onChange={handleChange} value={contactFields.telegram} name="telegram" className="w-full bg-p2 rounded-md p-2 border text-white" placeholder="Telegram/Twitter"></input>
          <input onChange={handleChange} value={contactFields.email} name="email" className="w-full bg-p2 rounded-md p-2 border text-white" placeholder="Email"></input>
          <textarea onChange={handleChange} value={contactFields.message} name="message" rows={4} className="w-full bg-p2 rounded-md p-2 border text-white" placeholder="Ask us your questions" ></textarea>
          <input disabled={!fieldsFilled} type="submit" className={"w-full rounded-md p-2 " + (fieldsFilled ? "cursor-pointer bg-p3 text-p4" : "bg-p5 text-gray-400 cursor-not-allowed")} value="Submit"></input>
        </form>
      </div>
    </section>
    </main>
    )
}