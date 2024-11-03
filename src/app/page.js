import Image from "next/image";
import Me from "@/images/me.jpg"
// import Navbar from "@/components/navbar";
// import Landing from "@/components/landing";
import { DM_Sans } from "@next/font/google";
import { LinkedIn, Instagram, Github, Mail, Link } from "@/components/svg-icons";
import { JavaScript, Python, HTML, CSS, SQL, Java } from "@/components/svg-icons";
import { ReactJS, NodeJS, NextJS, Tailwind, Git, Shopify, Liquid } from "@/components/svg-icons";

const dmsans = DM_Sans({ subsets: ["latin"] })

const languages =[
  "JavaScript", "Python", "HTML", "CSS", "Liquid", "SQL", "Java"
]

const dev =[
  "React", "NodeJS", "Shopify", "Next.js", "Tailwind", "Git"
]

const experience = {
  "Blackbough Swim": {
      href: "https://blackboughswim.ph/",
      title: "Web Developer",
      duration: "May - Oct 2024",
      desc: [
        "Refactored Shopify theme sections and snippets to increase page speed by 15% on each store.",
        "Reengineered product page, blog template, and general page components for web design overhaul.",
        "Provided overall website maintenance through the admin panel and technical support to address bugs identified by users and team members.",
      ],
      stack: "Liquid / JavaScript / HTML / CSS"
  },
  "La Nada": {
      href: "https://lanadabrand.com/",
      title: "Freelance Developer & Designer",
      duration: "Since Mar 2024",
      desc: [
          "Designed and wireframed responsive layouts using Figma, ensuring user-friendly interfaces and optimal user experiences.",
          "Created a custom Shopify theme that integrated unique designs and functionalities tailored to client demands.",
          "Collaborated closely with the client throughout the design and development process, swiftly addressing concerns and incorporating feedback by iterating through designs.",
          "Currently providing ongoing maintenance and technical support and preparing for future collection releases."
      ],
      stack: "Liquid / JavaScript / HTML / CSS / Figma"
  },
  "Qairos, Inc.": {
      title: "All-Around Intern",
      duration: "June - Sept 2022",
      desc: [
          "Assisted in UX/UI research and design using Figma, providing feedback to create meaningful product experiences through a user-centered approach.",
          "Performed testing of prototypes using Cypress, troubleshooting the products before deployment to ensure full feature functionality."
      ],
      stack: "JavaScript / Cypress / Figma"
  }
}

export default function Home() {
  return (
    <div className={`${dmsans.className} mx-auto min-h-screen max-w-80 sm:max-w-3xl xl:max-w-screen-xl p-4 text-opacity-70 text-white`}>
      <div className="text-xs text-center font-bold text-stone-200 text-opacity-100 animate-fadeIn opacity-0 [--fadeIn-delay:1400ms]">
        Currently available for freelance. 
        <span class="ml-2 relative inline-block h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-lime-300"></span>
        </span>
      </div>
      <div className="grid grid-cols-1 xs:max-w-prose sm:grid-cols-3 sm:max-w-3xl xl:grid-cols-4 gap-2 xl:max-w-screen-xl my-4">
        <header className="isolate rounded-xl bg-stone-400/10  shadow-lg ring-1 ring-black/5 p-4 animate-fadeIn opacity-0 [--fadeIn-delay:200ms] flex flex-col space-between">
          <h1 className="text-3xl font-bold text-stone-200 text-opacity-100"> Kyle Tandoc </h1>
          <h2 className="text-m text-stone-200 text-opacity-100">Full-stack Developer </h2>
          <p className="text-m mt-4 max-w-sm opacity-80 xl:max-w-72 mb-4"> I deliver digital experiences that bridge functionality with thoughtful design. </p>
          <nav className="flex gap-2 mt-auto mb-0">
            <LinkedIn color="white" link="https://www.linkedin.com/in/kyle-tandoc/"/>
            <Instagram color="white" link="https://www.instagram.com/_kaiyulul_"/>
            <Github color="white" link="https://github.com/Kaiyulul"/>
            <Mail color="white" link="mailto:kyletandoc@gmail.com"/>
          </nav>
        </header>
        <section id="profile-picture" className="sm:row-start-2 sm:col-start-1 xl:row-start-1 xl:col-start-2 animate-fadeIn opacity-0 [--fadeIn-delay:400ms] z-10">
          <Image
            src={Me}
            alt='Picture of Kyle'
            className="w-full h-full object-cover rounded-xl bg-stone-400/10 shadow-lg ring-1 ring-black/5 transition duration-75 hover:scale-[110%] hover:rotate-[2deg]"
          />
        </section>
        <section id="introduction" className="isolate rounded-xl bg-stone-500/20 shadow-lg ring-1 ring-black/5 p-4 sm:row-span-1 sm:col-span-2 animate-fadeIn opacity-0 [--fadeIn-delay:600ms] text-m">
          <p className="font-bold text-stone-200 text-opacity-100">
            A Quick Intro
          </p>
          <p className="mt-4">
          Back in 2023, I graduated from Ateneo de Manila with a Computer Science degree and Specialization in Data Science and Analytics. Since then, I took a detour and been on a rollercoaster ride of building <span className="font-bold text-stone-200 text-opacity-100">responsive e-commerce sites</span>, creating <span className="font-bold text-stone-200 text-opacity-100">dynamic web applications</span>, and exploring <span className="font-bold text-stone-200 text-opacity-100">the tech of tomorrow.</span>
          </p>

          <p className="mt-4">
          I utilize my versatile and sometimes miscellaneous skillset to address issues in my work because <span className="font-bold text-stone-200 text-opacity-100">I love to craft solutions that are both innovative and actionable.</span>
          </p>

          <p className="mt-4">
          Beyond my techie side, I am a horror, sci-fi, and fantasy film and series buff. I am intrigued by roguelites, strategy and FPS games. I also dance sometimes.
          </p>
        </section>
        <section id="languages" className="isolate rounded-xl bg-stone-600/10 shadow-lg ring-1 ring-black/5 p-4 xl:col-start-1 animate-fadeIn opacity-0 [--fadeIn-delay:800ms]">
          <h1 className="text-l font-bold mb-4 text-stone-200 text-opacity-100"> Languages </h1>
          <div className="flex flex-wrap gap-4">
            {/* {languages.map(item => <div className='p-2 bg-white/5 backdrop-blur-md rounded-xl grow text-center text-sm' key={item}> {item} </div>)} */}
            <JavaScript color="white"/>
            <HTML color="white"/>
            <CSS color="white"/>
            <Python color="white"/>
            {/* <SQL color="white"/> */}
            <Java color="white"/>
            <Liquid color="white"/>

          </div>
        </section>
        <section id="development" className="isolate rounded-xl bg-stone-700/15 shadow-lg ring-1 ring-black/5 p-4 animate-fadeIn opacity-0 [--fadeIn-delay:1000ms]">
          <h1 className="text-l font-bold mb-4 text-stone-200 text-opacity-100"> Development </h1>
          <div className="flex flex-wrap gap-4">
            {/* {dev.map(item => <div className='p-2 bg-white/5 backdrop-blur-md rounded-xl grow text-center text-sm' key={item}> {item} </div>)} */}
            <ReactJS color="white"/>
            <NodeJS color="white"/>
            <NextJS color="white"/>
            <Tailwind color="white"/>
            <Git color="white"/>
            <Shopify color="white"/>
          </div>
        </section>
        <section className="isolate rounded-xl bg-stone-800/40 shadow-lg ring-1 ring-black/5 p-4 sm:col-span-3 xl:col-span-2 xl:row-span-3 xl:row-start-1 xl:col-start-3 animate-fadeIn opacity-0 [--fadeIn-delay:1200ms]">
          <h1 className="text-m font-bold mb-4 text-stone-200 text-opacity-100"> Work Experience </h1>
          <div className='text-m'>
            {Object.keys(experience).map((key, i) => {
              const item = experience[key];
              return(
                <div key={key} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="opacity-40">
                    {item.duration}
                  </div>
                  <div className="col-span-3">
                    {item.href ? 
                    <p className='font-bold flex justify-between text-stone-200 text-opacity-100'> {key} <Link color="white" link={item.href}/></p> : 
                    <p className='font-bold flex justify-between text-stone-200 text-opacity-100'> {key} </p>
                    }
                    <div className="mb-4"> {item.title} </div>
                    {item.desc?.map(function (descItem, i) {
                      return(
                        <li className="mb-2 opacity-80 hover:opacity-100  " key={descItem}> {descItem} </li>
                      );
                    })}
                    <div className="mb-4 opacity-40"> {item.stack} </div>
                    <hr className="opacity-20 p-2 sm:hidden"/>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className="text-xs text-center animate-fadeIn opacity-0 [--fadeIn-delay:1400ms]">
        Created by Kyle Tandoc. All rights reserved. ☺
      </div>
    </div>
  );
}
