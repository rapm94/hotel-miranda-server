 import { Prisma } from "@prisma/client"

export const bookingsData:Prisma.BookingCreateInput[] = [
  {
    name: "Mindy Brimmacombe",
    email: "mbrimmacombe0@chronoengine.com",
    phone: "956-371-8159",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "CHECKOUT",
    room: {
      connect: {
        id: "ckybfocrc0013p0va2xz914tz"
      }
    }
  },
  {
    name: "Jecho Gustus",
    email: "jgustus1@1688.com",
    phone: "552-283-6648",
    checkIn: new Date(),
    checkOut:new Date(),
    status: "CHECKOUT",
    room: {
      connect: {
        id: "ckybfocrc000zp0vaaxqs9juc"
      }
    }
  
  },
  {
    name: "Berke Honnicott",
    email: "bhonnicott2@sakura.ne.jp",
    phone: "791-461-7091",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "CHECKOUT",
    room: {
      connect: {
        id: "ckybfocrc000zp0vaaxqs9juc"
      }
    }
  },
  {
    name: "Yvon Arkell",
    email: "yarkell3@state.gov",
    phone: "349-286-5020",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "INPROGRESS",
    room: {
      connect: {
        id: "ckybfocrc000xp0va5r1pdfzu"
      }
    }
  },
  {
    name: "Klara Hawker",
    email: "khawker4@spiegel.de",
    phone: "756-121-4798",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "CHECKOUT",
    room: {
      connect: {
        id: "ckybfocrc0012p0va1z599lsd"
      }
    }
  },
  {
    name: "Donal Ruddock",
    email: "druddock5@google.co.jp",
    phone: "702-221-5893",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "CHECKOUT",
    room: {
      connect: {
        id: "ckybfocrc000up0vaab3vf5ln"
      }
    }
  },
  {
    name: "Udell Sorbey",
    email: "usorbey6@webmd.com",
    phone: "479-194-9881",
    checkIn:new Date(),
    checkOut:new Date(),
    status: "INPROGRESS",
    room: {
      connect: {
        id: "ckybfocrc000up0vaab3vf5ln"
      }
    }
  },
  {
    name: "Keen Donlon",
    email: "kdonlon7@berkeley.edu",
    phone: "694-168-0100",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "CHECKOUT",
    room: {
      connect: {
        id: "ckybfocrc000wp0va945l39b5"
      }
    }
  },
  {
    name: "Donny Gilstoun",
    email: "dgilstoun8@umich.edu",
    phone: "855-226-4972",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "CHECKIN",
    room: {
      connect: {
        id: "ckybfocrc000wp0va945l39b5"
      }
    }
  },
  {
    name: "Syman Rabbitts",
    email: "srabbitts9@netscape.com",
    phone: "673-690-9608",
    checkIn: new Date(),
    checkOut:new Date(),
    status: "CHECKOUT",
    room: {
      connect: {
        id: "ckybfocrc000xp0va5r1pdfzu"
      }
    }
  },
  {
    name: "Rutledge Scarff",
    email: "rscarffa@ning.com",
    phone: "788-163-9227",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "CHECKIN",
    room: {
      connect: {
        id: "ckybfocrc0010p0va1vzwg9bg"
      }
    }
  },
  {
    name: "Colleen Busch",
    email: "cbuschb@dailymotion.com",
    phone: "867-114-5831",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "CHECKIN",
    room: {
      connect: {
        id: "ckybfocrc0011p0va7iqigy7u"
      }
    }
  },
  {
    name: "Jelene Brettor",
    email: "jbrettorc@google.nl",
    phone: "501-777-0852",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "CHECKOUT",
    room: {
      connect: {
        id: "ckybfocrc000up0vaab3vf5ln"
      }
    }
  },
  {
    name: "Aline Luxford",
    email: "aluxfordd@nps.gov",
    phone: "615-695-6356",
    checkIn:new Date(),
    checkOut: new Date(),
    status: "CHECKOUT",
    room:{
      connect:{
        id:"ckybfocrc0010p0va1vzwg9bg"
      }
    }
  },
  {
    name: "Mathew Sonier",
    email: "msoniere@ovh.net",
    phone: "746-370-0642",
    checkIn:new Date(),
    checkOut: new Date(),
    status: "INPROGRESS",
    room:{
      connect:{
        id: "ckybfocrc000vp0va7ms48krf"
      }
    }
  },
  {
    name: "Ruben Nolot",
    email: "rnolotf@narod.ru",
    phone: "482-995-8304",
    checkIn:new Date(),
    checkOut: new Date(),
    status: "CHECKOUT",
    room:{
      connect:{
        id:"ckybfocrc0013p0va2xz914tz"
      }
    }
  },
  {
    name: "Georas Fassam",
    email: "gfassamg@intel.com",
    phone: "255-887-3718",
    checkIn:new Date(),
    checkOut: new Date(),
    status: "CHECKIN",
    room:{
      connect:{
        id:"ckybfocrc000xp0va5r1pdfzu"
      }
    }
  },
  {
    name: "Catrina Murrigans",
    email: "cmurrigansh@arizona.edu",
    phone: "764-922-9604",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "CHECKOUT",
    room:{
      connect:{
        id:"ckybfocrc000yp0vae8cic9x4"
      }
    }
  },
  {
    name: "Virge Fevers",
    email: "vfeversi@constantcontact.com",
    phone: "392-894-1739",
    checkIn:new Date(),
    checkOut:new Date(),
    status: "CHECKOUT",
    room:{
      connect:{
        id:"ckybfocrc000zp0vaaxqs9juc"
      }
    }
  },
  {
    name: "Giselbert Colleton",
    email: "gcolletonj@ask.com",
    phone: "473-687-6342",
    checkIn: new Date(),
    checkOut: new Date(),
    status: "INPROGRESS",
    room:{
      connect:{
        id:"ckybfocrc000zp0vaaxqs9juc"
      }
    }
  }
]