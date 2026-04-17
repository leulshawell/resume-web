import { NavLink } from "react-router-dom"
import Article from "./article"


export default function Skills() {
  return (
    <section className="flex flex-col gap-4" id="background">
      <h2 className="border-b w-full mb-4">Background</h2>
      <div>
        <Article title="#Languages" id="languages" description="Programming languages I have exprience with">
          <div className="flex gap-2 mb-2">
            <span className="bg-sidebar font-bold text-blue-400 p-1 ">Python</span>
            <span className="text-red-800 text-xs rounded-md p-1 ">Advanced</span>
          </div>
          I consider myself an advanced Python programmer as i've been playing/working with it since i picked it up around 2019/2020.
          I deeply understand most of the language features. From using Python for Fuctional, OOP, Multithreaded programs i have reached the level of exteding Python using 
          the C-Python extention.<br/>
          One of my projects <NavLink className="text-amber-700" to="/projects#lalagrad">lalagrad</NavLink>, an autograd library i wrote to lean ML math, is written in Python using CFFI (C Foreign Function Interface) library to call C kernel functions.
          Even though i don't use Python for web application mainly, I have also tried projects in Flask and Django.

          <div className="flex mt-2 gap-2 mb-2">
            <span className="bg-yellow-500 font-bold rounded-md text-black p-1 ">TS/JS</span>
            <span className="text-amber-800 text-xs rounded-md p-1 ">Strong</span>
          </div>
          I don't like Javascript. In fact if i wasn't for TypeScript i would suck at it.<br/>
          Now Everything is done in TS And I have been working with it for about 3 years now. I have 1+ year professional experience in it.
          It is one of my go to  languages for personal projects. Specially when i write libraries i prefer TypeScript as its unblievablly good type system makes everythin Plug and Play.<br/>
          My AI agent/harness development lib <NavLink className="text-amber-700" to="/projects#lala-agent">lala-agent</NavLink> is written in TypeScript. It is also the main language my team uses for organization products

          <div className="flex mt-2 gap-2 mb-2">
            <span className="bg-white font-bold rounded-md text-blue-600 p-1 ">_-=Go</span>
            <span className="text-blue-400 text-xs  rounded-md p-1 ">Medium</span>
          </div>
          Beautiful! Art!
          The speed, the closeness to the hardware, the things it makes you question, It is just beautily done.
          You write go {"<"}some-function{">"} and a light weight thread starts? And you just create a channel and  communicate? just like that? I mean if you don't know C or Cpp you might not appriciate that but that is outta this world.
          Even though both are not done and put for later, i started on two golang projects the moment i understood the basics of it. <NavLink className="text-amber-700" to="/projects#go-quic">go-quic</NavLink>, a QUIC protocol <NavLink className="text-red-400" target="" to="https://datatracker.ietf.org/doc/html/rfc9000">RFC9000</NavLink> implementation and
          go-cluster, a distributed runtime for golang applications, are the two projects i started in go-lang that i look forward to return to any chance i get.<br/>
          I have also used golang for ipc in a microservice architecture backend system using google's gRPC and protobuffs.

          <div className="flex mt-2 gap-2 mb-2">
            <span className="bg-black font-bold rounded-md text-blue-600 p-1 px-2 ">C</span>
            <span className="text-blue-400 text-xs rounded-md p-1 ">Medium</span>
          </div>
          Runs the world they say. It is true. I mean linux, Python, NGINX, Postgress, Android, Embedded systems, you name it. 
          I believe a computer is a world and C is the language. One of my favourite personal projetcs i have worked on is <NavLink className="text-amber-700" to="/projects#os101">os101</NavLink>, a bootloader and kernel-ish thing that targets X86.
          Working on that in C is what really showed me computers in detail. Eventhough i had already been programming for 4+ years before that it wasn't untill i did this project that i really understood computers both in the hardware and sorftware sense of it.
        </Article>
      </div>
    </section>
  )
}
