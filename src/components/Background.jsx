import Article from "./article"
import { NavLink } from "react-router-dom"


export default function Background() {
  return (
    <section className="flex flex-col gap-4" id="background">
      <h2 className="border-b w-full mb-4">Background</h2>
      <div>
        <Article title="#Academics" id="academics" description="My eduational background">
          Am a drop out. <br/>
          Trust me i have tried, it just didn't work for me. <br/>
          I have taken most of the Electrical and Computer Engineering courses at Addis Ababa University. 
          In fact i have completed the 5 year program but i don't consider my self an Electrical Egineer.<br/>
          Most of my time there is spent on learining programming, personal projects and campus life.

        </Article>
      </div>
      <Article title="#Certifications" id="certifications" description="Certifications">
        I Don't have any yet. But am working on that.<br/>
        This is the one of the things am working right now.
        Even though i always believed that my projects are the one thing that should matter the most, People definitely need something to trust me on<br/>
        And with all the current AI slop around i now believe certificates are going to get more value. At least untill these AI harnesses really replace us {":)"}
      </Article>
      <Article title="#Software Enginnering" id="swe" description="My path to Software Engineering">
        No matter my love for Technology, It wasn't untill I turned 18 that I got my own SmartPhone. I have spent 4+ years writing Python code on my phone.
        I started spending day and night in this app called Termux which is an Android Terminal simulator. At first i wans just a script-kidi, finding and running code scripts i found onine. 
        Phishing servers like Blackeye, Wifi hackers, Password crackers just following how-to videos. But then during the Corona time I found Python. Unlike everything i have tried before Python helped me
        start writing what i want. No need to understand things too deep you can just make what you want happen. 
        <br/><br/>
        After about 4 years of coding on my phone and sometimes on laptops  didn't own, I got my first HP laptop. Then i immedietly  started on <NavLink className="text-amber-700" to="/projects#os101">os101</NavLink>.
        That together with the Interfacing and Computer Architecture and Organization cources that i was taking at University at the time everthing started making sense. Memory, Processes, IO, CPU, Opersting Systems, SystemCalls, they all
        started to fit together. So you write print("Hello World") and Python runs some C code that does a write syscall to the stdout file which the operating system takes and finds the module/driver registered for that device type, the display driver, and passes the string
        to that driver which uses memory mapped IO to write to a PORT in the X86 CPU which then the display takes and display it. Nothing here is magic anymore. There is not such thing "How is this possible?" anymore but "How would i do it if i was building this?". Once i had that 
        mind shift it was just to the next interesting thing. 
        <br/><br/>
        Then I started on AI, Wrote <NavLink className="text-amber-700" to="/projects#lalagrad">lalagrad</NavLink> in pure Python then i wrote it again with C backend for kernel scheduling and parallelizing ops uing OpenMP.
        Then <NavLink className="text-amber-700" to="/projects#go-quic">go-quic</NavLink> and  <NavLink className="text-amber-700" to="/projects#go-cluster">go-cluster</NavLink> in Golang then <NavLink className="text-amber-700" to="/projects#lala-agent">lala-agent</NavLink>. All of this projects are too ambitious ones to actually follow up and finish them. The world didn't need them
        so it was just me building those and learning something along the way so they are not fully done. But they have made me complete. Complete in the sense that now even though there is a lot that i don't fully understand I know how to learn, how to break things up and take the neccessary small steps to master any Technology.

        Now am in the stage in my Sofware Engineering path where I feel confident to peak whatever I want and actually build it in a reasonable amount of time with a reasonable quality. But i also am at a stage where i want to build something meaningful. Not just to learn but to give something to the world.
      </Article>
    </section>
  )
}
