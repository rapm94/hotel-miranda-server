import {Prisma} from "@prisma/client"
import cuid from "cuid"
export const userData:Prisma.UserCreateInput[] = [
    {
      id: cuid(),
      name: "Trail",
      email: "rbeach0@nymag.com",
      password: "Try4jd",
      jobDescription: "Sales Representative",
      phone: "842-522-0635",
      status: true,
      role: "USER"
    },
    {
      id: cuid(),
      name: "Parkway",
      email: "lsucre1@themeforest.net",
      password: "DVEgCl",
      jobDescription: "Civil Engineer",
      phone: "861-300-9415",
      status: true,
      role: "ADMIN"
    },
    {
      id: cuid(),
      name: "Parkway",
      email: "rtesmond2@ca.gov",
      password: "t2n9E0",
      jobDescription: "GIS Technical Architect",
      phone: "964-511-6785",
      status: true,
      role: "USER"
    },
    {
      id: cuid(),
      name: "Circle",
      email: "tbeste3@abc.net.au",
      password: "tRNPmNXq",
      jobDescription: "Programmer I",
      phone: "468-468-1119",
      status: false,
      role: "ADMIN"
    },
    {
      id: cuid(),
      name: "Junction",
      email: "fbingall4@archive.org",
      password: "nU99AqJlkGN",
      jobDescription: "Web Designer III",
      phone: "304-914-4241",
      status: false,
      role: "USER"
    },
    {
      id: cuid(),
      name: "Crossing",
      email: "rpinney5@pcworld.com",
      password: "j7ZeAAYQE",
      jobDescription: "Automation Specialist III",
      phone: "521-299-6298",
      status: false,
      role: "ADMIN"
    },
    {
      id: cuid(),
      name: "Hill",
      email: "bsnowsill6@google.fr",
      password: "a5KVcW",
      jobDescription: "Assistant Media Planner",
      phone: "374-851-3727",
      status: false,
      role: "ADMIN"
    },
    {
      id: cuid(),
      name: "Avenue",
      email: "bputland7@usnews.com",
      password: "c5LXfs1x",
      jobDescription: "Compensation Analyst",
      phone: "453-966-4350",
      status: false,
      role: "USER"
    },
    {
      id: cuid(),
      name: "Point",
      email: "nstrowther8@bloglovin.com",
      password: "leks3OMC",
      jobDescription: "Accountant I",
      phone: "137-776-5858",
      status: false,
      role: "ADMIN"
    },
    {
      id: cuid(),
      name: "Alley",
      email: "wabethell9@live.com",
      password: "OR7Fv5XTVTO",
      jobDescription: "VP Accounting",
      phone: "243-295-7043",
      status: true,
      role: "ADMIN"
    },
    {
      id: cuid(),
      name: "Junction",
      email: "dtimperleya@pbs.org",
      password: "OIMicTIY",
      jobDescription: "Biostatistician I",
      phone: "431-366-7159",
      status: true,
      role: "ADMIN"
    },
    {
      id: cuid(),
      name: "Center",
      email: "ileyesb@ted.com",
      password: "12vGM7IqfzR",
      jobDescription: "Teacher",
      phone: "415-503-9315",
      status: true,
      role: "ADMIN"
    },
    {
      id: cuid(),
      name: "Place",
      email: "poppiec@pen.io",
      password: "byPhYZlMibX",
      jobDescription: "Electrical Engineer",
      phone: "272-891-8358",
      status: true,
      role: "USER"
    },
    {
      id: cuid(),
      name: "Terrace",
      email: "aschaferd@nytimes.com",
      password: "RG1fSMSeG",
      jobDescription: "Technical Writer",
      phone: "618-930-0350",
      status: false,
      role: "ADMIN"
    },
    {
      id: cuid(),
      name: "Avenue",
      email: "gphilcotte@vinaora.com",
      password: "Ly5nBfL1ioR4",
      jobDescription: "Office Assistant IV",
      phone: "222-230-0665",
      status: true,
      role: "ADMIN"
    }
  ]