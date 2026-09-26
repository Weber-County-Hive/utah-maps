// The Weber County Hive — Utah Maps
// To add a new map: copy an object below, fill in the fields, and save.
// index.html reads this file and builds the map index automatically —
// you never need to touch index.html by hand.
//
// mapId:        the permanent identifier printed on the card's tab,
//               e.g. "MAP 001". Number maps in the order they are opened;
//               never reuse or renumber an ID once it has been published.
// title:        the map's name as it appears on the card.
// scope:        the area the map covers ("Statewide", "Weber County", etc.)
// status:       "live" | "building" | "planned"  (controls the stamp)
//               Only "live" cards are clickable. "building" and "planned"
//               cards show what is coming without linking anywhere.
// summary:      one or two sentences on what the map shows. Describe what
//               the records show, not a conclusion.
// layers:       the toggles the map has (or will have).
// relatedRepos: other Hive repos whose case files the map's pins link to.
// pins:         number of pins on the live map (leave off until live).
// link:         filename of the map page. Must exactly match the real file
//               uploaded to GitHub. Leave off until the page exists.
// lastUpdated:  date the card or map was last verified ("Mon D, YYYY").
const MAPS = [
  {
    mapId: "MAP 001",
    title: "Where Utah's Tax Increment Goes",
    scope: "Statewide",
    status: "live",
    summary: "Public infrastructure districts, reinvestment areas, state-authority project areas, and data centers on one map. Each pin shows who approved it, the amounts in the public record, which taxing entities share their revenue, and a link to the source and the case file.",
    layers: ["Data Centers", "PIDs", "CRAs / RDAs", "MIDA & Inland Port", "Other Districts"],
    relatedRepos: ["committees", "followthedeed", "PIDS-Utah", "Bill-Tracker"],
    pins: 17,
    link: "utah-tax-increment-map.html",
    lastUpdated: "Sep 26, 2026"
  },
  {
    mapId: "MAP 002",
    title: "Who's Raising Taxes This Year",
    scope: "Weber County",
    status: "live",
    summary: "Every Weber County taxing entity that went through Truth in Taxation in 2026, with the percentage increase, the dollar amount, the hearing, and the outcome where the record shows it.",
    layers: ["Cities", "Special Districts"],
    relatedRepos: ["PIDS-Utah", "Transparency"],
    pins: 8,
    link: "weber-county-tax-increases-2026.html",
    lastUpdated: "Sep 26, 2026"
  },
  {
    mapId: "MAP 003",
    title: "Ogden Valley Development",
    scope: "Ogden Valley",
    status: "live",
    summary: "Resorts, developments, and the public financing tied to them across Ogden Valley, plus the new city drawn around them, each linked to the approvals, agreements, and filings in the public record.",
    layers: ["Resorts", "Developments", "PIDs & CRAs", "Ogden Valley City"],
    relatedRepos: ["PIDS-Utah", "followthedeed", "Bill-Tracker"],
    pins: 12,
    link: "ogden-valley-development.html",
    lastUpdated: "Sep 26, 2026"
  },
  {
    mapId: "MAP 004",
    title: "Great Salt Lake Pressures",
    scope: "Great Salt Lake",
    status: "live",
    summary: "Data centers, Inland Port areas, water and mineral projects, conservation actions, and military project areas around the lake, with the permits, plans, and decisions behind each.",
    layers: ["Data Centers", "Inland Port", "Water & Minerals", "Conservation", "Military & MIDA"],
    relatedRepos: ["Great-Salt-Lake", "Bill-Tracker", "followthedeed", "Public-Lands"],
    pins: 19,
    link: "great-salt-lake-pressures.html",
    lastUpdated: "Sep 26, 2026"
  },
  {
    mapId: "MAP 005",
    title: "2026 Races We've Covered",
    scope: "Northern Utah",
    status: "planned",
    summary: "A county-by-county starting point for the 2026 general election, linking to each race's candidate case file.",
    layers: ["Legislature", "County", "Local"],
    relatedRepos: ["candidates2026"],
    lastUpdated: "Sep 25, 2026"
  },
  {
    mapId: "MAP 006",
    title: "Citizen Referendums",
    scope: "Statewide",
    status: "planned",
    summary: "Where residents have filed referendums against local government actions, and where each one stands.",
    layers: ["Active", "Qualified", "Closed"],
    relatedRepos: ["referendums"],
    lastUpdated: "Sep 25, 2026"
  },
  {
    mapId: "MAP 007",
    title: "Trust Lands Sales",
    scope: "Statewide",
    status: "planned",
    summary: "State trust land auctions, options, and sales, with the buyer, terms, and later use shown in the public record.",
    layers: ["Auctions", "Options", "Sales"],
    relatedRepos: ["Public-Lands"],
    lastUpdated: "Sep 25, 2026"
  },
  {
    mapId: "MAP 008",
    title: "Weber County's New Sales Tax",
    scope: "Weber County",
    status: "live",
    summary: "The 0.20% \"5th 5th\" sales tax that starts Oct. 1, 2026: each city's rate before and after, why some cities pay more, and where the $13.1 million a year goes.",
    layers: ["Cities", "Rates", "Transportation money"],
    relatedRepos: ["Transparency", "Bill-Tracker"],
    link: "weber-county-sales-tax-2026.html",
    lastUpdated: "Sep 26, 2026"
  }
];
