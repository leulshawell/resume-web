import { NavLink } from "react-router-dom"
import Article from "./article"



export default function Experience() {
  return (
    <section className="flex flex-col gap-4" id="background">
      <h2 className="border-b w-full mb-4">Wrok Experience</h2>
      <div>
        <Article title="#Zergaw Cloud and Tech Solutions" id="zergaw" description="A Cloud provider/Tech solution company in Addis Ababa Ethiopia">
          Time Span: 3 months, from 1/2/2024 - 30/3/2024<br/>
          Role:      Systems Engineer
          <br/><br/>
          What did i do there? 
          My 3 month long internship at Zergaw was mainly targeted at learning the <NavLink to="https://www.proxmox.com/en/">Proxmox</NavLink> opensource virtua machine and container management souftware.
          I have built a simulation of the companies data-center (servers, routers, firewall...) in a project that i called mini-zergaw. 
          The simulation was a bunch of proxmox vms nested in a proxmox  instance. Each of these VMs played the role of a simulating some hardware in the data-center.
          One of these VMs was running <NavLink to="https://openwrt.org/">OpenWRT</NavLink> used as a gateway with DNS service enabled which routed the request to an <NavLink to="https://opnsense.org">OPNsense</NavLink> 
          after which they are routed to the correct instance with the requested IP. ALl other servers are just VMS running linux servers connected only to the filrewall only via proxmox bridges.
        </Article>
      </div>
    </section>
  )
}
