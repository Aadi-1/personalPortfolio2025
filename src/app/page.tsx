"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <main className="w-full">
      <div className="fixed flex flex-col gap-1 lg:inset-y-[40%] inset-y-[45%] lg:ml-5 ml-0 ">
        <a
          target="_blank"
          className="lg:text-4xl text-3xl cursor-pointer"
          href="https://github.com/Aadi-1"
        >
          <Image
            src="/25231.png" // Path inside the "public" folder
            width={40}
            height={40}
            alt="Project Preview"
            className=" w-8 h-8"
          />
        </a>
        <a
          target="_blank"
          className="lg:text-4xl text-3xl cursor-pointer text-black "
          href="mailto:aadi.arun2020@gmail.com"
        >
          <Image
            src="/email.png" // Path inside the "public" folder
            width={40}
            height={40}
            alt="Project Preview"
            className="w-8 h-8 "
          />
        </a>
        <a
          target="_blank"
          className="lg:text-4xl text-3xl cursor-pointer"
          href="https://www.linkedin.com/in/aadityan-arunkumar-a18b81250/"
        >
          <Image
            src="/linkedinlogo.webp" // Path inside the "public" folder
            width={40}
            height={40}
            alt="Project Preview"
            className=" w-8 h-8"
          />
        </a>
      </div>
      <section
        id="home"
        className="h-[90vh] flex items-center justify-center bg-gray-50"
      >
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center ">
          <div className="lg:w-1/2 lg:px-10 max-w-2xl flex flex-col items-start">
            <h2 className="text-2xl font-bold text-gray-900">Hi! My name is</h2>
            <h1 className="text-black text-5xl font-bold"> Aadi Arunkumar</h1>
            <p className="mt-4 text-lg text-black">
              I am a graduate from UCR with a{" "}
              <span className=" font-semibold bg-clip-text">
                B.S. in Biology
              </span>{" "}
              with a{" "}
              <span className=" font-semibold">Minor in Data Science</span>,
              passionate about
              <span className="text-indigo-500 font-semibold">
                <TypeAnimation
                  sequence={[
                    " web development.", // First text
                    2000, // Pause for 2s
                    " business.", // Second text
                    2000,
                    " startups.",
                    2000,
                    " data analysis.",
                    2000,
                    " biotech.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50} // Speed of typing
                  repeat={Infinity} // Loop forever
                />
              </span>
            </p>
            <nav className="mt-6 text-xl flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="px-4 py-2 border-2 border-black rounded-lg text-gray-900 hover:bg-indigo-600 hover:text-white transition"
              >
                about
              </a>
              <a
                href="#projects"
                className="px-4 py-2 border-2 border-black  rounded-lg text-gray-900 hover:bg-indigo-600 hover:text-white transition"
              >
                projects
              </a>
              <a
                href="#experience"
                className="px-4 py-2 border-2 border-black rounded-lg text-gray-900 hover:bg-indigo-600 hover:text-white transition"
              >
                experience
              </a>
            </nav>
          </div>
          <div className="flex justify-center ">
            <Image
              src="/AboutMepic.png" // Replace with your image
              width={400}
              height={400}
              alt="Illustration"
              className="rounded-lg "
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className=" w-full h-screen flex items-center justify-center bg-gray-50 pt-40"
      >
        <div className=" h-full container mx-auto px-6 flex flex-col lg:flex-row items-center ">
          <div className=" h-full lg:w-1/2 lg:px-10 flex flex-col">
            <h2 className=" text-5xl font-semibold text-black underline underline-offset-8">
              about
            </h2>
            <div className="max-w-lg text-left mt-3 text-black pt-5 text-xl">
              <p>
                I am a 22-year-old aspiring developer with a background in
                biology and data science. My passion lies in web development,
                programming, and problem-solving, where I enjoy creating
                meaningful projects that bridge the gap between technology and
                science.
              </p>
              <br />
              <p>
                In my free time, I work on full-stack applications, refine my
                technical skills, and explore new frameworks to expand my
                knowledge.
              </p>
              <br />
              <p>
                Outside of coding, you’ll find me playing basketball,
                weightlifting, or exploring new business ideas.
              </p>
            </div>
          </div>

          <div className=" h-full container mx-auto px-6 lg:w-1/2 flex flex-col justify-center lg:justify-start mt-6 lg:mt-0">
            <h2 className="text-5xl font-semibold text-black underline underline-offset-8">
              skills
            </h2>
            <div className="max-w-sm text-right mt-1 text-black pt-5">
              <div className="text-black text-lg text-left font-semibold flex items-center mt-3">
                <h3>- Languages</h3>
              </div>
              <div className="text-md flex flex-wrap text-black font-semibold gap-3 ">
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-blue-100">
                  JavaScript
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-blue-100">
                  Python
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-blue-100">
                  C++
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-blue-100">
                  HTML/CSS
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-blue-100">
                  TypeScript
                </span>
              </div>
            </div>
            <div>
              <div className=" text-lg text-black text-left font-semibold flex items-center mt-4">
                <h3>- Frameworks/Libraries</h3>
              </div>
              <div className="text-md flex flex-wrap text-black font-semibold gap-3">
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-green-100">
                  React
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-green-100">
                  Flask
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-green-100">
                  Node.js
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-green-100">
                  TailwindCSS
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-green-100">
                  Next.js
                </span>
              </div>
            </div>
            <div>
              <div className=" text-lg text-black text-left font-semibold flex items-center mt-4">
                <h3>- Tools</h3>
              </div>
              <div className="text-md flex flex-wrap text-black font-semibold gap-3">
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-red-100">
                  Visual Studio Code
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-red-100">
                  GitHub
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-red-100">
                  Canva
                </span>
                <span className="border-2 border-black px-2 py-1 rounded-lg bg-red-100">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="w-full h-screen flex items-center justify-center bg-gray-50 "
      >
        <div className="flex flex-col">
          <h2 className="text-3xl text-black font-semibold text-center underline underline-offset-8">
            Projects
          </h2>

          <div
            onClick={() => setIsOpen(true)}
            className=" mt-6 flex flex-col justify-center max-w-sm bg-white shadow-lg rounded-lg overflow-hidden p-2 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-black mt-4 justify-center text-center">
              Ochem Database
            </h3>
            <Image
              src="/ochemDB.png" // Path inside the "public" folder
              width={300}
              height={300}
              alt="Project Preview"
              className=" mx-auto"
            />
            <div className="text-black mt-2 justify-center gap-3 flex gap-2">
              <span className="border-2 border-black px-2 py-1 rounded-lg bg-blue-100">
                Python
              </span>
              <span className="border-2 border-black px-2 py-1 rounded-lg bg-green-100">
                React
              </span>
              <span className="border-2 border-black px-2 py-1 rounded-lg bg-green-100">
                Node.js
              </span>
              <span className="border-2 border-black px-2 py-1 rounded-lg bg-green-100">
                Flask
              </span>
            </div>
          </div>
          {isOpen && (
            <div
              onClick={closeModal}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div
                className="bg-white p-6 rounded-lg shadow-lg max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl text-black font-bold mb-2">
                  Ochem Database
                </h3>
                <p className="text-gray-600">
                  This is a full-stack web application for an Organic Chemistry
                  database. Built a database with{" "}
                  <span className="font-semibold">MongoDB</span>, API Routes
                  with <span className="font-semibold">Flask</span>, frontend w/{" "}
                  <span className="font-semibold">React</span> and{" "}
                  <span className="font-semibold">Node.Js</span>.
                </p>
                <p className="text-blue-500">
                  <a
                    href="https://ochem-database-app-05aa0e4d95b7.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Take Me There
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section
        id="experience"
        className="h-screen flex flex-col items-center justify-center bg-gray-50"
      >
        <div className="">
          <h2 className="text-3xl font-semibold text-black underline underline-offset-8">
            Experience
          </h2>
        </div>
        <div className="mt-6 flex max-w-lg w-full md:w-[350px] flex-row text-black  justify-start max-w-sm bg-white shadow-lg rounded-lg overflow-hidden p-2 gap-x-6">
          <Image
            src="/UC_Riverside_seal.png" // Path inside the "public" folder
            width={100}
            height={75}
            alt="Project Preview"
            className=""
            //You can Copy this whole DIV and add a new experience Box
          />
          <div className="flex flex-col p-2">
            <h3 className="text-lg font-semibold">UC Riverside</h3>
            <p className="pt-1">Research Associate</p>
            <p className="pt-2 text-xs">October 2022 - June 2024</p>
          </div>
        </div>
        <div className="mt-6 flex max-w-lg w-full md:w-[350px] flex-row text-black  justify-start max-w-sm bg-white shadow-lg rounded-lg overflow-hidden p-2 gap-x-6">
          <Image
            src="/asucrlogo.jpeg" // Path inside the "public" folder
            width={100}
            height={75}
            alt="Project Preview"
            className=""
            //You can Copy this whole DIV and add a new experience Box
          />
          <div className="flex flex-col p-2">
            <h3 className="text-lg font-semibold">ASUCR</h3>
            <p className="pt-1">TAPS Coordinator</p>
            <p className="pt-2 text-xs">January 2023 - June 2023</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50  flex text-black justify-center ">
        © Aadityan Arunkumar 2025
      </footer>
    </main>
  );
}
