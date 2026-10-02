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
    summary: "Every Weber County taxing entity that went through Truth in Taxation in 2026, with the percentage increase, the dollar amount, the hearing, and the outcome where the record shows it. Also West Haven, which has no property tax and starts a 6% tax on power and gas bills instead.",
    layers: ["Cities", "Special Districts"],
    relatedRepos: ["PIDS-Utah", "Transparency"],
    pins: 9,
    link: "weber-county-tax-increases-2026.html",
    lastUpdated: "Oct 1, 2026"
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
    scope: "Statewide",
    status: "live",
    summary: "Every 2026 race with a Hive candidate case file, drawn on the Legislature's House and Senate district lines and on county lines. Click a district or county to see who is running and open the case file.",
    layers: ["Utah House", "Utah Senate", "County"],
    relatedRepos: ["candidates2026"],
    pins: 33,
    link: "utah-2026-races.html",
    lastUpdated: "Sep 30, 2026"
  },
  {
    mapId: "MAP 006",
    title: "Citizen Referendums",
    scope: "Statewide",
    status: "live",
    summary: "Where Utah residents have tried to put a city or county decision to a public vote, and where each effort stands. Uintah County's Prop 9 is on the Nov. 3, 2026 ballot; Roy's is gathering signatures and already listed on the sample ballot as Prop 10; Eagle Mountain's is under way; Box Elder County's Stratos referendum is in court; Summit County's Kimball Junction referendum is closed.",
    layers: ["On Nov. 3 ballot", "Active", "In court", "Closed"],
    relatedRepos: ["referendum", "candidates2026"],
    pins: 5,
    link: "citizen-referendums.html",
    lastUpdated: "Oct 1, 2026"
  },
  {
    mapId: "MAP 007",
    title: "Trust Lands Sales",
    scope: "Statewide",
    status: "live",
    summary: "State trust land sold at auction, listed for the Nov. 12-18, 2026 auction, and optioned for development, with the price, acreage, and case file for each. Starts with the parcels the Hive has documented.",
    layers: ["Sold", "Up for auction", "Option / lease", "Zoning"],
    relatedRepos: ["Public-Lands", "Transparency"],
    pins: 7,
    link: "trust-lands-sales.html",
    lastUpdated: "Sep 30, 2026"
  },
  {
    mapId: "MAP 008",
    title: "Weber County's New Sales Tax",
    scope: "Weber County",
    status: "live",
    summary: "The 0.20% \"5th 5th\" sales tax that starts Oct. 1, 2026: each city's rate before and after, why some cities pay more, and where the $13.1 million a year goes. West Haven's panel also shows its new 6% energy tax, starting the same day.",
    layers: ["Cities", "Rates", "Transportation money"],
    relatedRepos: ["Transparency", "Bill-Tracker"],
    link: "weber-county-sales-tax-2026.html",
    lastUpdated: "Sep 30, 2026"
  }
  ,{
    mapId: "MAP 009",
    title: "What's on Utah's Nov. 3 Ballot",
    scope: "Statewide",
    status: "live",
    summary: "Every local ballot question confirmed from official county ballots and certifications for Nov. 3, 2026, with exact wording, cost estimates and sources, plus statewide Amendments A and B. Amendment B would require 60% voter approval for statewide citizen initiatives that raise taxes.",
    layers: ["Bonds", "Taxes", "New towns", "Change of government", "Citizen referendums", "Advisory"],
    relatedRepos: ["referendum", "Bill-Tracker"],
    pins: 18,
    link: "utah-ballot-measures-2026.html",
    lastUpdated: "Oct 1, 2026"
  }
];
