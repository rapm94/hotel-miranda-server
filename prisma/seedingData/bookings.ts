import { Prisma } from "@prisma/client"
import cuid from "cuid"

export const bookingsData = [
    {
      roomId: 10,
      name: "Karry Coche",
      email: "kcoche0@arizona.edu",
      phone: "103-136-8801",
      checkIn: "11/15/2021",
      checkOut: "12/19/2021",
      status: "INPROGRESS"
    },
    {
      roomId: 15,
      name: "Baryram Winsley",
      email: "bwinsley1@economist.com",
      phone: "394-659-1500",
      checkIn: "1/25/2021",
      checkOut: "9/29/2021",
      status: "CHECKOUT"
    },
    {
      roomId: 14,
      name: "Ranee Belchamp",
      email: "rbelchamp2@state.tx.us",
      phone: "724-939-6464",
      checkIn: "11/21/2021",
      checkOut: "10/17/2021",
      status: "INPROGRESS"
    },
    {
      roomId: 3,
      name: "Fidela Cheke",
      email: "fcheke3@forbes.com",
      phone: "702-721-7568",
      checkIn: "8/16/2021",
      checkOut: "2/17/2021",
      status: "INPROGRESS"
    },
    {
      roomId: 4,
      name: "Ondrea Tugman",
      email: "otugman4@bbb.org",
      phone: "562-958-3807",
      checkIn: "12/22/2021",
      checkOut: "5/4/2021",
      status: "CHECKOUT"
    },
    {
      roomId: 2,
      name: "Gabriellia Gummary",
      email: "ggummary5@about.com",
      phone: "768-527-9897",
      checkIn: "5/21/2021",
      checkOut: "7/1/2021",
      status: "CHECKIN"
    },
    {
      roomId: 2,
      name: "Koenraad Counsell",
      email: "kcounsell6@sphinn.com",
      phone: "342-920-7203",
      checkIn: "10/16/2021",
      checkOut: "7/27/2021",
      status: "CHECKOUT"
    },
    {
      roomId: 2,
      name: "Hunter Duncan",
      email: "hduncan7@barnesandnoble.com",
      phone: "485-219-9456",
      checkIn: "4/1/2021",
      checkOut: "12/11/2021",
      status: "INPROGRESS"
    },
    {
      roomId: 3,
      name: "Feodor Wein",
      email: "fwein8@dot.gov",
      phone: "960-963-8160",
      checkIn: "10/22/2021",
      checkOut: "5/24/2021",
      status: "INPROGRESS"
    },
    {
      roomId: 4,
      name: "Idaline Hansie",
      email: "ihansie9@whitehouse.gov",
      phone: "347-673-0520",
      checkIn: "4/13/2021",
      checkOut: "12/8/2021",
      status: "CHECKOUT"
    },
    {
      roomId: 1,
      name: "Konstantine Ballentime",
      email: "kballentimea@google.com",
      phone: "872-962-4801",
      checkIn: "1/2/2022",
      checkOut: "3/31/2021",
      status: "CHECKIN"
    },
    {
      roomId: 3,
      name: "Raphaela Gillions",
      email: "rgillionsb@shutterfly.com",
      phone: "661-111-0586",
      checkIn: "3/22/2021",
      checkOut: "7/5/2021",
      status: "CHECKIN"
    },
    {
      roomId: 4,
      name: "Kellie Askew",
      email: "kaskewc@hc360.com",
      phone: "214-839-2045",
      checkIn: "7/2/2021",
      checkOut: "4/13/2021",
      status: "CHECKOUT"
    },
    {
      roomId: 11,
      name: "Ludvig Hoggetts",
      email: "lhoggettsd@statcounter.com",
      phone: "496-679-5932",
      checkIn: "1/17/2021",
      checkOut: "7/7/2021",
      status: "CHECKIN"
    },
    {
      roomId: 15,
      name: "Hedwig Bodell",
      email: "hbodelle@ft.com",
      phone: "931-992-7846",
      checkIn: "11/5/2021",
      checkOut: "10/15/2021",
      status: "CHECKOUT"
    },
    {
      roomId: 4,
      name: "Edwina Macknish",
      email: "emacknishf@hugedomains.com",
      phone: "897-950-7007",
      checkIn: "9/10/2021",
      checkOut: "6/4/2021",
      status: "CHECKIN"
    },
    {
      roomId: 4,
      name: "Orazio D'Emanuele",
      email: "odemanueleg@flavors.me",
      phone: "143-868-2645",
      checkIn: "5/15/2021",
      checkOut: "8/3/2021",
      status: "CHECKOUT"
    },
    {
      roomId: 3,
      name: "Morgen Muschette",
      email: "mmuschetteh@github.com",
      phone: "805-908-8471",
      checkIn: "12/6/2021",
      checkOut: "6/17/2021",
      status: "CHECKIN"
    },
    {
      roomId: 9,
      name: "Clark Harriagn",
      email: "charriagni@fc2.com",
      phone: "949-212-4403",
      checkIn: "4/27/2021",
      checkOut: "12/13/2021",
      status: "INPROGRESS"
    },
    {
      roomId: 4,
      name: "Aveline Cheer",
      email: "acheerj@sogou.com",
      phone: "862-329-1800",
      checkIn: "5/6/2021",
      checkOut: "8/31/2021",
      status: "CHECKOUT"
    },
    {
      roomId: 2,
      name: "Bibbye Minero",
      email: "bminerok@w3.org",
      phone: "764-621-1063",
      checkIn: "1/9/2022",
      checkOut: "6/7/2021",
      status: "CHECKOUT"
    },
    {
      roomId: 12,
      name: "Nanete Grand",
      email: "ngrandl@de.vu",
      phone: "812-569-2632",
      checkIn: "2/20/2021",
      checkOut: "2/22/2021",
      status: "CHECKIN"
    },
    {
      roomId: 3,
      name: "Addison Moriarty",
      email: "amoriartym@blogtalkradio.com",
      phone: "345-896-7000",
      checkIn: "1/18/2021",
      checkOut: "4/22/2021",
      status: "INPROGRESS"
    },
    {
      roomId: 2,
      name: "Zondra Pheazey",
      email: "zpheazeyn@mtv.com",
      phone: "805-569-4622",
      checkIn: "3/28/2021",
      checkOut: "3/21/2021",
      status: "CHECKIN"
    },
    {
      roomId: 5,
      name: "Lenora Zellner",
      email: "lzellnero@timesonline.co.uk",
      phone: "194-265-5329",
      checkIn: "10/5/2021",
      checkOut: "7/16/2021",
      status: "CHECKOUT"
    },
    {
      roomId: 6,
      name: "Catherina Lantiff",
      email: "clantiffp@ft.com",
      phone: "313-938-4671",
      checkIn: "10/3/2021",
      checkOut: "5/31/2021",
      status: "CHECKIN"
    },
    {
      roomId: 3,
      name: "Darya Skevington",
      email: "dskevingtonq@prlog.org",
      phone: "527-278-0466",
      checkIn: "11/24/2021",
      checkOut: "3/2/2021",
      status: "CHECKIN"
    },
    {
      roomId: 13,
      name: "Valry Denford",
      email: "vdenfordr@php.net",
      phone: "941-874-9728",
      checkIn: "4/19/2021",
      checkOut: "3/31/2021",
      status: "INPROGRESS"
    },
    {
      roomId: 13,
      name: "Annecorinne Slowan",
      email: "aslowans@google.ca",
      phone: "273-575-8431",
      checkIn: "6/19/2021",
      checkOut: "8/6/2021",
      status: "INPROGRESS"
    },
    {
      roomId: 9,
      name: "Lonnie Hearthfield",
      email: "lhearthfieldt@oracle.com",
      phone: "447-747-5888",
      checkIn: "3/21/2021",
      checkOut: "6/6/2021",
      status: "INPROGRESS"
    }
  ]