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
        "Refactored sections and snippets to decrease load times by approximately 1 second on each store.",
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
    <div className={`${dmsans.className} mx-auto min-h-screen max-w-80 sm:max-w-3xl xl:max-w-screen-xl p-4 `}>
      <div className="grid grid-cols-1 xs:max-w-prose sm:grid-cols-3 xl:grid-cols-4 gap-2 xl:max-w-screen-xl my-8">
        <header className="isolate rounded-xl bg-stone-400/10  shadow-lg ring-1 ring-black/5 p-4 animate-fadeIn opacity-0 [--fadeIn-delay:200ms] flex flex-col space-between">
          <h1 className="text-xl font-bold "> Kyle Tandoc </h1>
          <h2 className="text-m opacity-80"> Junior Full-Stack Developer </h2>
          <p className="text-sm mt-4 max-w-sm opacity-60 xl:max-w-72 mb-4"> Aspiring to perfect the art of developing one line at a time. </p>
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
        <section id="introduction" className="isolate rounded-xl bg-stone-500/20 shadow-lg ring-1 ring-black/5 p-4 sm:row-span-1 sm:col-span-2 animate-fadeIn opacity-0 [--fadeIn-delay:600ms] text-sm">
          <p className=""> <span className="font-bold"> Hey, I&apos;m Kyle. </span> I love to create products with a <span className="italic">holistic approach to both functionality and design.</span> I am often regarded as a <span className="font-bold">Jack of all trades</span>, yet striving to master some along the way.</p>
          <p className="mt-4"> I utilize my versatile and sometimes miscellaneous skillset to come up with solutions that look into the bigger picture while being keen with the smaller details.</p>
          <p className="mt-4 font-bold"> Let me help you any way that I can. </p>
        </section>
        <section id="languages" className="isolate rounded-xl bg-stone-600/10 shadow-lg ring-1 ring-black/5 p-4 xl:col-start-1 animate-fadeIn opacity-0 [--fadeIn-delay:800ms]">
          <h1 className="text-l font-bold mb-4"> Languages </h1>
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
          <h1 className="text-l font-bold mb-4"> Development </h1>
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
          <h1 className="text-m font-bold mb-4"> Work Experience </h1>
          <div className='text-sm'>
            {Object.keys(experience).map((key, i) => {
              const item = experience[key];
              return(
                <div key={key} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="opacity-40">
                    {item.duration}
                  </div>
                  <div className="col-span-3">
                    {item.href ? 
                    <p className='font-bold flex justify-between'> {key} <Link color="white" link={item.href}/></p> : 
                    <p className='font-bold flex justify-between'> {key} </p>
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
