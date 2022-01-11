import { Prisma } from "@prisma/client"
import cuid from "cuid"

export const reviewsData:Prisma.ReviewCreateInput[] = [
    {
      id: cuid(),
      name: "Kingsley McKew",
      email: "kmckew0@china.com.cn",
      phone: "583-928-0794",
      subget: "iaculis congue vivamus metus arcu adipiscing molestie",
      message: "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
      rating: 4
    },
    {
      id: cuid(),
      name: "Vernice Rogerot",
      email: "vrogerot1@ebay.co.uk",
      phone: "858-453-4911",
      subget: "varius nulla facilisi cras non",
      message: "habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia",
      rating: 3
    },
    {
      id: cuid(),
      name: "Haven Shalliker",
      email: "hshalliker2@cbsnews.com",
      phone: "164-289-2722",
      subget: "montes nascetur ridiculus mus vivamus vestibulum",
      message: "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh",
      rating: 1
    },
    {
      id: cuid(),
      name: "Seth Finlason",
      email: "sfinlason3@netlog.com",
      phone: "797-402-3305",
      subget: "velit donec diam neque vestibulum eget vulputate",
      message: "at velit vivamus vel nulla eget eros elementum pellentesque quisque porta",
      rating: 3
    },
    {
      id: cuid(),
      name: "Tawnya Lapre",
      email: "tlapre4@xinhuanet.com",
      phone: "972-793-0044",
      subget: "odio odio elementum eu interdum eu",
      message: "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
      rating: 1
    },
    {
      id: cuid(),
      name: "Dorotea Melpuss",
      email: "dmelpuss5@storify.com",
      phone: "623-955-4524",
      subget: "in ante vestibulum ante ipsum primis in",
      message: "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui",
      rating: 5
    },
    {
      id: cuid(),
      name: "Brad Oller",
      email: "boller6@plala.or.jp",
      phone: "463-683-4824",
      subget: "sapien cum sociis natoque penatibus et",
      message: "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus",
      rating: 5
    },
    {
      id: cuid(),
      name: "Wanda Frankiewicz",
      email: "wfrankiewicz7@blogspot.com",
      phone: "707-474-7259",
      subget: "pellentesque at nulla suspendisse potenti cras",
      message: "ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus",
      rating: 3
    },
    {
      id: cuid(),
      name: "Padgett Bourdis",
      email: "pbourdis8@phoca.cz",
      phone: "317-113-6216",
      subget: "nulla integer pede justo lacinia",
      message: "tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
      rating: 1
    },
    {
      id: cuid(),
      name: "Ingaborg Hammatt",
      email: "ihammatt9@simplemachines.org",
      phone: "852-826-6250",
      subget: "ullamcorper purus sit amet nulla quisque arcu",
      message: "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum",
      rating: 3
    },
    {
      id: cuid(),
      name: "Mohandis Spenceley",
      email: "mspenceleya@booking.com",
      phone: "935-230-9718",
      subget: "et magnis dis parturient montes nascetur ridiculus",
      message: "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse",
      rating: 2
    },
    {
      id: cuid(),
      name: "Brook Huxter",
      email: "bhuxterb@php.net",
      phone: "251-676-9806",
      subget: "praesent blandit nam nulla integer pede justo",
      message: "non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis",
      rating: 3
    },
    {
      id: cuid(),
      name: "Dido Pinkerton",
      email: "dpinkertonc@wordpress.org",
      phone: "797-272-7196",
      subget: "duis mattis egestas metus aenean fermentum",
      message: "congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque",
      rating: 4
    },
    {
      id: cuid(),
      name: "Tallulah Kauschke",
      email: "tkauschked@typepad.com",
      phone: "803-291-4511",
      subget: "nulla quisque arcu libero rutrum ac lobortis",
      message: "blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum",
      rating: 5
    },
    {
      id: cuid(),
      name: "Raddie Prydie",
      email: "rprydiee@shinystat.com",
      phone: "442-550-6601",
      subget: "luctus et ultrices posuere cubilia curae duis",
      message: "elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
      rating: 5
    },
    {
      id: cuid(),
      name: "Leeland Woloschin",
      email: "lwoloschinf@example.com",
      phone: "619-253-5727",
      subget: "mauris eget massa tempor convallis",
      message: "lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus",
      rating: 4
    },
    {
      id: cuid(),
      name: "Wadsworth Gerdes",
      email: "wgerdesg@imageshack.us",
      phone: "204-476-7871",
      subget: "est phasellus sit amet erat",
      message: "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
      rating: 4
    },
    {
      id: cuid(),
      name: "Chastity Tardiff",
      email: "ctardiffh@wired.com",
      phone: "463-606-3025",
      subget: "rutrum at lorem integer tincidunt ante",
      message: "varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget",
      rating: 3
    },
    {
      id: cuid(),
      name: "Nellie Denisard",
      email: "ndenisardi@cocolog-nifty.com",
      phone: "314-412-5063",
      subget: "cubilia curae donec pharetra magna vestibulum aliquet",
      message: "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse",
      rating: 3
    },
    {
      id: cuid(),
      name: "Ophelia Mullane",
      email: "omullanej@icq.com",
      phone: "849-335-3719",
      subget: "accumsan tellus nisi eu orci mauris lacinia",
      message: "velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio",
      rating: 1
    },
    {
      id: cuid(),
      name: "Bessy Bosche",
      email: "bboschek@hp.com",
      phone: "371-856-6106",
      subget: "vestibulum ante ipsum primis in",
      message: "justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros",
      rating: 5
    },
    {
      id: cuid(),
      name: "Ava Foulks",
      email: "afoulksl@parallels.com",
      phone: "740-524-0819",
      subget: "magna bibendum imperdiet nullam orci pede",
      message: "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat",
      rating: 2
    },
    {
      id: cuid(),
      name: "Rickard Sherrell",
      email: "rsherrellm@prnewswire.com",
      phone: "462-510-4311",
      subget: "luctus et ultrices posuere cubilia",
      message: "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo",
      rating: 4
    },
    {
      id: cuid(),
      name: "Lemuel Hanes",
      email: "lhanesn@cnbc.com",
      phone: "783-124-9182",
      subget: "ut blandit non interdum in",
      message: "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
      rating: 3
    },
    {
      id: cuid(),
      name: "Loria Longwood",
      email: "llongwoodo@google.co.uk",
      phone: "570-434-4494",
      subget: "pede venenatis non sodales sed",
      message: "integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula",
      rating: 4
    },
    {
      id: cuid(),
      name: "Mickey Spain",
      email: "mspainp@google.pl",
      phone: "751-597-6524",
      subget: "magnis dis parturient montes nascetur",
      message: "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac",
      rating: 5
    },
    {
      id: cuid(),
      name: "Harriett Stansall",
      email: "hstansallq@pinterest.com",
      phone: "460-727-2266",
      subget: "integer pede justo lacinia eget",
      message: "eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper",
      rating: 4
    },
    {
      id: cuid(),
      name: "Che Galer",
      email: "cgalerr@globo.com",
      phone: "636-601-1476",
      subget: "in quam fringilla rhoncus mauris enim",
      message: "interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu",
      rating: 2
    },
    {
      id: cuid(),
      name: "Angil Lamberto",
      email: "alambertos@360.cn",
      phone: "637-782-8118",
      subget: "nunc nisl duis bibendum felis sed",
      message: "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id",
      rating: 4
    },
    {
      id: cuid(),
      name: "Elicia Celier",
      email: "eceliert@yolasite.com",
      phone: "370-860-0142",
      subget: "luctus nec molestie sed justo",
      message: "blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
      rating: 5
    }
  ]