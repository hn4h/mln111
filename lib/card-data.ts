import type { Card } from "./types"

export const gameCards: Card[] = [
  {
    id: "1",
    character: "The Royal Treasurer",
    situation:
      "The treasury stands at capacity. Do you fund the people's grain supplies to prevent starvation, or fortify the military against rising barbarian threats?",
    philosophicalContext: "Growth vs. Security",
    leftChoice: {
      text: "Fortify the Military",
      effects: { finance: -15, people: -10, military: 20, religion: 0 },
    },
    rightChoice: {
      text: "Feed the People",
      effects: { finance: -15, people: 20, military: -5, religion: 5 },
    },
  },
  {
    id: "2",
    character: "The High Priest",
    situation:
      "A schism threatens your realm. The established church demands you suppress the heretics. Meanwhile, your merchants warn that religious persecution will drive away foreign traders.",
    philosophicalContext: "Faith vs. Reason",
    leftChoice: {
      text: "Suppress the Heretics",
      effects: { finance: -20, people: -15, military: 10, religion: 25 },
    },
    rightChoice: {
      text: "Protect Free Belief",
      effects: { finance: 15, people: 10, military: -5, religion: -20 },
    },
  },
  {
    id: "3",
    character: "The Military General",
    situation:
      "Your army demands higher pay after years of service. But the nobles cry foul, saying increased military spending will bankrupt the crown and destabilize the economic order.",
    philosophicalContext: "Justice vs. Order",
    leftChoice: {
      text: "Deny the Soldiers",
      effects: { finance: 15, people: -10, military: -20, religion: -5 },
    },
    rightChoice: {
      text: "Grant Them Gold",
      effects: { finance: -20, people: 5, military: 20, religion: 0 },
    },
  },
  {
    id: "4",
    character: "The Peasant Delegate",
    situation:
      "Hunger spreads among the lower classes. They demand land reform. The aristocracy threatens rebellion if you redistribute their ancestral holdings.",
    philosophicalContext: "Equality vs. Property",
    leftChoice: {
      text: "Preserve Noble Rights",
      effects: { finance: 10, people: -25, military: 10, religion: -10 },
    },
    rightChoice: {
      text: "Redistribute Wealth",
      effects: { finance: -15, people: 25, military: -10, religion: 5 },
    },
  },
  {
    id: "5",
    character: "The Silk Merchant",
    situation:
      "Foreign traders arrive with exotic goods and wealth. But they spread foreign gods and critique your traditional ways. Do you embrace this commerce or close your borders?",
    philosophicalContext: "Progress vs. Tradition",
    leftChoice: {
      text: "Close the Borders",
      effects: { finance: -20, people: 5, military: 5, religion: 15 },
    },
    rightChoice: {
      text: "Welcome Trade",
      effects: { finance: 25, people: 10, military: -5, religion: -15 },
    },
  },
  {
    id: "6",
    character: "The Judge",
    situation:
      "A murderer of a noble's son seeks mercy. The nobles demand execution. The masses see this as a chance to prove your mercy is universal. How do you judge?",
    philosophicalContext: "Mercy vs. Justice",
    leftChoice: {
      text: "Execute Him",
      effects: { finance: 5, people: -20, military: 10, religion: -10 },
    },
    rightChoice: {
      text: "Grant Clemency",
      effects: { finance: -10, people: 20, military: -10, religion: 10 },
    },
  },
  {
    id: "7",
    character: "The Scholar",
    situation:
      "A radical philosopher claims the universe is governed by natural law, not divine will. The church calls for his arrest. Intellectuals appeal for freedom of thought.",
    philosophicalContext: "Dogma vs. Inquiry",
    leftChoice: {
      text: "Arrest the Philosopher",
      effects: { finance: 5, people: -15, military: 5, religion: 20 },
    },
    rightChoice: {
      text: "Let Him Speak",
      effects: { finance: 10, people: 15, military: 0, religion: -20 },
    },
  },
  {
    id: "8",
    character: "The Commander of Walls",
    situation:
      "Refugees flee a neighboring war. They are skilled workers but also mouths to feed. Your military says they could be spies. Do you open the gates?",
    philosophicalContext: "Compassion vs. Safety",
    leftChoice: {
      text: "Turn Them Away",
      effects: { finance: 10, people: -20, military: 10, religion: -10 },
    },
    rightChoice: {
      text: "Accept Them",
      effects: { finance: -10, people: 20, military: -10, religion: 10 },
    },
  },
  {
    id: "9",
    character: "The Tax Collector",
    situation:
      "Crops fail across three provinces. The peasants cannot pay taxes. Your nobles expect their tribute. Do you forgive the debt or enforce collection?",
    philosophicalContext: "Compassion vs. Order",
    leftChoice: {
      text: "Enforce Collection",
      effects: { finance: 15, people: -30, military: -5, religion: -15 },
    },
    rightChoice: {
      text: "Forgive the Debt",
      effects: { finance: -20, people: 25, military: 0, religion: 15 },
    },
  },
  {
    id: "10",
    character: "The Guild Master",
    situation:
      "Craftsmen demand protection from foreign competitors who undercut their prices. Grant monopolies and stifle innovation, or allow competition and risk their ruin?",
    philosophicalContext: "Protection vs. Freedom",
    leftChoice: {
      text: "Grant Monopolies",
      effects: { finance: -10, people: 15, military: 0, religion: 0 },
    },
    rightChoice: {
      text: "Allow Competition",
      effects: { finance: 20, people: -10, military: 0, religion: 0 },
    },
  },
  {
    id: "11",
    character: "The Astronomer",
    situation:
      "Your realm's calendar is off. The astronomer claims the priests calculated wrongly. Accepting this challenges religious authority. Rejecting it keeps customs intact but society drifts.",
    philosophicalContext: "Truth vs. Stability",
    leftChoice: {
      text: "Maintain the Calendar",
      effects: { finance: 5, people: -5, military: 0, religion: 15 },
    },
    rightChoice: {
      text: "Adopt the New Calendar",
      effects: { finance: 10, people: 5, military: 0, religion: -15 },
    },
  },
  {
    id: "12",
    character: "The Mother Superior",
    situation:
      "Convents and monasteries hold vast farmland. They provide spiritual solace but exclude productive use. Do you demand they lease the land to peasants for cultivation?",
    philosophicalContext: "Utility vs. Spirituality",
    leftChoice: {
      text: "Let Them Keep the Land",
      effects: { finance: -10, people: -10, military: 0, religion: 20 },
    },
    rightChoice: {
      text: "Demand Productive Use",
      effects: { finance: 20, people: 15, military: 0, religion: -20 },
    },
  },
  {
    id: "13",
    character: "The Wounded Soldier",
    situation:
      "Many soldiers return maimed from war. Caring for them costs gold but is morally crucial. Do you fund hospitals or redirect resources to strengthening future defenses?",
    philosophicalContext: "Care vs. Power",
    leftChoice: {
      text: "Prioritize Defense",
      effects: { finance: 10, people: -20, military: 20, religion: -5 },
    },
    rightChoice: {
      text: "Fund Hospitals",
      effects: { finance: -15, people: 20, military: -10, religion: 10 },
    },
  },
  {
    id: "14",
    character: "The Inquisitor",
    situation:
      'Reports of witchcraft and heresy spread panic. Mass trials could suppress the "evil" but also lead to innocent deaths. What is your authority?',
    philosophicalContext: "Order vs. Innocence",
    leftChoice: {
      text: "Conduct Mass Trials",
      effects: { finance: -5, people: -25, military: 5, religion: 25 },
    },
    rightChoice: {
      text: "Demand Just Process",
      effects: { finance: 5, people: 15, military: -5, religion: -15 },
    },
  },
  {
    id: "15",
    character: "The Young Princess",
    situation:
      "Your daughter could be wed to secure a foreign alliance and peace. But she loves another. Do you sacrifice her happiness for realm stability?",
    philosophicalContext: "Personal vs. Political",
    leftChoice: {
      text: "Arrange the Marriage",
      effects: { finance: 10, people: 0, military: 15, religion: 5 },
    },
    rightChoice: {
      text: "Let Her Choose",
      effects: { finance: -10, people: 10, military: -10, religion: 0 },
    },
  },
  {
    id: "16",
    character: "The Plague Doctor",
    situation:
      "Disease spreads. Quarantine saves lives but destroys the economy. Allowing movement preserves trade but risks epidemic. Choose wisely.",
    philosophicalContext: "Life vs. Livelihood",
    multipleChoices: [
      {
        id: "strict-quarantine",
        text: "Strict Quarantine",
        effects: { finance: -25, people: 10, military: 10, religion: 5 },
      },
      {
        id: "targeted-isolation",
        text: "Isolate the Sick Only",
        effects: { finance: -10, people: 5, military: 5, religion: 0 },
      },
      {
        id: "allow-movement",
        text: "Allow Movement",
        effects: { finance: 20, people: -25, military: 5, religion: -10 },
      },
      {
        id: "herd-immunity",
        text: "Accept the Plague",
        effects: { finance: 15, people: -30, military: -5, religion: -15 },
      },
    ],
    leftChoice: {
      text: "Strict Quarantine",
      effects: { finance: -25, people: 10, military: 10, religion: 5 },
    },
    rightChoice: {
      text: "Allow Movement",
      effects: { finance: 20, people: -25, military: 5, religion: -10 },
    },
  },
  {
    id: "17",
    character: "The Poet",
    situation:
      "A bard writes songs mocking your decisions. Suppress him and prove your tyranny. Allow him and risk undermining your authority.",
    philosophicalContext: "Freedom vs. Authority",
    leftChoice: {
      text: "Silence the Bard",
      effects: { finance: 10, people: -20, military: 10, religion: 0 },
    },
    rightChoice: {
      text: "Allow Free Speech",
      effects: { finance: -5, people: 20, military: -10, religion: 5 },
    },
  },
  {
    id: "18",
    character: "The Alchemist",
    situation:
      "New techniques could double crop yields but require importing rare metals from a rival power. Prosperity depends on dependence.",
    philosophicalContext: "Growth vs. Independence",
    leftChoice: {
      text: "Remain Independent",
      effects: { finance: -10, people: -5, military: 10, religion: 0 },
    },
    rightChoice: {
      text: "Import and Prosper",
      effects: { finance: 20, people: 15, military: -5, religion: 0 },
    },
  },
  {
    id: "19",
    character: "The Slave Master",
    situation:
      "Slavery supports your economy. Enlightened nobles suggest abolition. It would bankrupt them and emancipate thousands, but destabilize the system.",
    philosophicalContext: "Morality vs. Stability",
    leftChoice: {
      text: "Preserve Slavery",
      effects: { finance: 20, people: -30, military: 5, religion: -10 },
    },
    rightChoice: {
      text: "Abolish Slavery",
      effects: { finance: -25, people: 30, military: -5, religion: 15 },
    },
  },
  {
    id: "20",
    character: "The Architect",
    situation:
      "Build magnificent temples to inspire the faithful, or practical granaries to feed the masses? Gold allows only one.",
    philosophicalContext: "Spirit vs. Sustenance",
    leftChoice: {
      text: "Build Temples",
      effects: { finance: -15, people: -10, military: 0, religion: 25 },
    },
    rightChoice: {
      text: "Build Granaries",
      effects: { finance: -15, people: 25, military: 0, religion: -15 },
    },
  },
  {
    id: "21",
    character: "The Diplomat",
    situation:
      "A neighboring realm offers a ceasefire and trade, but demands you recognize their disputed claims to holy sites sacred to your people.",
    philosophicalContext: "Peace vs. Principle",
    leftChoice: {
      text: "Reject the Treaty",
      effects: { finance: -10, people: 5, military: -15, religion: 20 },
    },
    rightChoice: {
      text: "Accept the Treaty",
      effects: { finance: 20, people: 5, military: 5, religion: -20 },
    },
  },
  {
    id: "22",
    character: "The Tax Dodger",
    situation:
      "Wealthy merchants evade taxes through loopholes you created. Closing the loopholes angers the rich; leaving them angers the poor.",
    philosophicalContext: "Equity vs. Investment",
    leftChoice: {
      text: "Keep the Loopholes",
      effects: { finance: 15, people: -20, military: 0, religion: 0 },
    },
    rightChoice: {
      text: "Close the Loopholes",
      effects: { finance: 5, people: 20, military: 0, religion: 0 },
    },
  },
  {
    id: "23",
    character: "The Widow",
    situation:
      "A widow's land passes to a distant male heir by law. She appeals to you that she is more capable. Changing the law would empower women but threaten noble lineages.",
    philosophicalContext: "Justice vs. Tradition",
    leftChoice: {
      text: "Uphold the Law",
      effects: { finance: 5, people: -15, military: 5, religion: 15 },
    },
    rightChoice: {
      text: "Grant Her the Land",
      effects: { finance: 10, people: 20, military: -5, religion: -15 },
    },
  },
  {
    id: "24",
    character: "The Plague Survivor",
    situation:
      "A devastating plague has passed. Should you spend on public health infrastructure (prevention) or on the military (the survivors are hungry for conquest)?",
    philosophicalContext: "Prevention vs. Expansion",
    leftChoice: {
      text: "Invest in Military",
      effects: { finance: -10, people: -5, military: 20, religion: 0 },
    },
    rightChoice: {
      text: "Build Hospitals",
      effects: { finance: -15, people: 20, military: -10, religion: 10 },
    },
  },
  {
    id: "25",
    character: "The Bookkeeper",
    situation:
      "Your records show you've broken a sacred oath to neighboring peoples. Admitting this builds trust but invites demands for reparations.",
    philosophicalContext: "Honesty vs. Strength",
    leftChoice: {
      text: "Hide the Truth",
      effects: { finance: 15, people: -10, military: 5, religion: -15 },
    },
    rightChoice: {
      text: "Confess and Repent",
      effects: { finance: -10, people: 15, military: -10, religion: 20 },
    },
  },
  {
    id: "26",
    character: "The Mine Master",
    situation:
      "Mining brings wealth but poisons the river. Do you sacrifice the water supply for short-term riches, or ban mining for long-term health?",
    philosophicalContext: "Wealth vs. Sustainability",
    leftChoice: {
      text: "Continue Mining",
      effects: { finance: 25, people: -25, military: 5, religion: -10 },
    },
    rightChoice: {
      text: "Ban Mining",
      effects: { finance: -20, people: 20, military: -5, religion: 10 },
    },
  },
  {
    id: "27",
    character: "The Child Laborer's Parent",
    situation:
      "Children working in factories support their families but lose education. Banning child labor is moral but causes starvation.",
    philosophicalContext: "Ethics vs. Survival",
    leftChoice: {
      text: "Allow Child Labor",
      effects: { finance: 15, people: -20, military: 0, religion: -10 },
    },
    rightChoice: {
      text: "Ban Child Labor",
      effects: { finance: -15, people: 20, military: 0, religion: 15 },
    },
  },
  {
    id: "28",
    character: "The Rival Heir",
    situation:
      "Your younger brother plots against you. Intelligence suggests he plans revolution. Do you execute him preemptively or risk betrayal?",
    philosophicalContext: "Security vs. Mercy",
    leftChoice: {
      text: "Execute Him",
      effects: { finance: 5, people: -20, military: 15, religion: -15 },
    },
    rightChoice: {
      text: "Spare Him",
      effects: { finance: -5, people: 15, military: -15, religion: 10 },
    },
  },
  {
    id: "29",
    character: "The Flooded Farmer",
    situation:
      "A dam you built to generate power flooded farmland and displaced thousands. Do you pay reparations (bankrupting you) or declare it an act of God (keeping wealth)?",
    philosophicalContext: "Responsibility vs. Expediency",
    leftChoice: {
      text: "Declare Act of God",
      effects: { finance: 20, people: -25, military: 0, religion: 15 },
    },
    rightChoice: {
      text: "Pay Reparations",
      effects: { finance: -25, people: 25, military: -5, religion: 5 },
    },
  },
  {
    id: "30",
    character: "The Oracle",
    situation:
      "The Oracle prophesies that a great war is coming. Preparing for it requires sacrifice; ignoring it risks annihilation. What is her credibility?",
    philosophicalContext: "Belief vs. Logic",
    leftChoice: {
      text: "Ignore the Prophecy",
      effects: { finance: 15, people: 5, military: -15, religion: -20 },
    },
    rightChoice: {
      text: "Prepare for War",
      effects: { finance: -20, people: -10, military: 25, religion: 15 },
    },
  },
  {
    id: "31",
    character: "The Merchant of Spices",
    situation:
      "A rare spice could cure a plague but costs a fortune. Buying it saves lives but bankrupts the treasury. Do you gamble on your people's loyalty?",
    philosophicalContext: "Necessity vs. Solvency",
    leftChoice: {
      text: "Preserve Treasury",
      effects: { finance: 20, people: -25, military: 0, religion: -10 },
    },
    rightChoice: {
      text: "Buy the Spice",
      effects: { finance: -25, people: 25, military: -5, religion: 10 },
    },
  },
  {
    id: "32",
    character: "The Mystic Monk",
    situation:
      "A foreign religion offers salvation. Converting could unite your realm spiritually but would alienate your established priesthood and provoke schism.",
    philosophicalContext: "Unity vs. Tradition",
    leftChoice: {
      text: "Reject Conversion",
      effects: { finance: 10, people: -10, military: 10, religion: 15 },
    },
    rightChoice: {
      text: "Embrace New Faith",
      effects: { finance: -10, people: 15, military: -10, religion: 20 },
    },
  },
]
