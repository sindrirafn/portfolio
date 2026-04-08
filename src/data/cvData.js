export const profile = {
  name: "Sindri Rafn Guðmundsson",
  phone: "846-0717",
  email: "sindrig94@gmail.com",
  location: "Dalahraun 13, 810 Hveragerði",
  summary: [
    "Ég er menntaður í heilbrigðisverkfræði og tölvunarfræði. Í starfi mínu sem hugbúnaðarsérfræðingur hjá Spektra sinnti ég uppsetningu og viðhaldi lausna, ásamt notendaþjónustu og vinnu við gagnaflutninga. Starfið var fjölbreytt og krafðist bæði nákvæmni og lausnamiðaðrar hugsunar.",
    "Áður starfaði ég í sjö ár á heimili fyrir fólk með einhverfu, þar sem ég öðlaðist mikla reynslu af teymisvinnu, samskiptum við einstaklinga með ólíkar þarfir og því að takast á við krefjandi aðstæður.",
    "Ég er tilbúinn að takast á við nýjar áskoranir og fljótur að aðlagast breytingum og tileinka mér nýja hluti."
  ]
};

export const experience = [
  {
    id: "spektra",
    title: "Hugbúnaðarsérfræðingur",
    company: "Spektra",
    location: "Laugarvegur 128, 105 Reykjavík",
    start: "2023-07",
    end: "2025-09",
    startLabel: "Júlí 2023",
    endLabel: "September 2025",
    bullets: [
      "Uppsetning, viðhald og aðlögun lausna (SharePoint og WorkPoint)",
      "Tæknileg greining og villuleit",
      "Notendastuðningur og samskipti við viðskiptavini",
      "Gagnaflutningar milli kerfa og umhverfa",
      "Sjálfvirknivæðing og einföldun vinnuferla með PowerShell og Power Automate"
    ]
  },
  {
    id: "joklasel",
    title: "Stuðningsfulltrúi",
    company: "Íbúðarkjarninn Jöklaseli",
    location: "Jöklasel 2, 109 Reykjavík",
    start: "2016-04",
    end: "2023-06",
    startLabel: "Apríl 2016",
    endLabel: "Júní 2023",
    bullets: [
      "Stuðningur við einstaklinga með einhverfu í daglegu lífi",
      "Vinna samkvæmt skýru verklagi og í teymi",
      "Ábyrgð, þolinmæði og fagleg nálgun í krefjandi aðstæðum"
    ]
  },
  {
    id: "blonduos-pool",
    title: "Sundlaugarvörður",
    company: "Íþróttamiðstöðin á Blönduósi",
    location: "Melabraut 2, 540 Blönduósi",
    start: "2014",
    end: "2015",
    startLabel: "2014",
    endLabel: "2015",
    bullets: [
      "Umsjón og þrif á sundlaugarsvæði og tengdum aðstöðum",
      "Þjónusta við gesti og trygging öryggis og reglufylgni"
    ]
  },
  {
    id: "summer-part-time",
    title: "Ýmis sumar- og hlutastörf",
    company: "",
    location: "",
    start: "2009",
    end: "2014",
    startLabel: "2009",
    endLabel: "2014",
    bullets: []
  }
];

export const education = [
  {
    id: "cs-bsc",
    degree: "B.Sc. í Tölvunarfræði",
    school: "Háskólinn í Reykjavík",
    start: "2021-01",
    end: "2022-01",
    startLabel: "Jan 2021",
    endLabel: "Jan 2022"
  },
  {
    id: "biomed-bsc",
    degree: "B.Sc. í Heilbrigðisverkfræði",
    school: "Háskólinn í Reykjavík",
    start: "2017-09",
    end: "2020-06",
    startLabel: "Sept 2017",
    endLabel: "Júní 2020"
  }
];

export const projects = [
  {
    id: "tasklist",
    title: "TaskList – verkefnalistaforrit (full-stack)",
    github: "https://github.com/sindrirafn/TaskList",
    bullets: [
      "Þróaði verkefnalistaforrit með framenda og bakenda",
      "Útfærði lykilvirkni, m.a. stofnun verkefna, stöðuyfirlit og gagnvirka smáglugga",
      "Tengdi framenda og bakenda með REST API",
      "Lagði áherslu á skýra uppbyggingu og vönduð vinnubrögð",
      "Notaði Git við útgáfustýringu"
    ]
  }
];

export const languages = [
  { id: "is", name: "Íslenska", level: 5, max: 5 },
  { id: "en", name: "Enska", level: 5, max: 5 },
  { id: "es", name: "Spænska", level: 3.5, max: 5 }
];

export const interests = [
  "Líkamsrækt",
  "Eldamennska",
  "Samverustundir með fjölskyldu"
];

export const references = [
  {
    id: "thor-haraldsson",
    name: "Þór Haraldsson",
    role: "Framkvæmdastjóri",
    company: "Spektra",
    phone: "840-4640",
    email: "thor@spektra.is"
  },
  {
    id: "stefania-smaradottir",
    name: "Stefanía Smáradóttir",
    role: "Forstöðukona",
    company: "Íbúðarkjarninn Jöklaseli",
    phone: "693-9281",
    email: "stefania.smaradottir@reykjavik.is"
  }
];

export const cvData = {
  profile,
  experience,
  education,
  projects,
  languages,
  interests,
  references
};

export default cvData;