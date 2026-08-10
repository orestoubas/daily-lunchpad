/* Numerical reasoning bank — EPSO-style data interpretation. */
"use strict";

const NUMERICAL_QUESTIONS = [
  {
    "id": "nr01",
    "table": {
      "caption": "Exports of country X (€ billion)",
      "headers": [
        "Year",
        "Exports"
      ],
      "rows": [
        [
          "2022",
          "40.0"
        ],
        [
          "2023",
          "46.0"
        ]
      ]
    },
    "q": "By what percentage did exports increase between 2022 and 2023?",
    "options": [
      "15%",
      "13%",
      "6%",
      "17.4%"
    ],
    "a": 0,
    "expl": "Increase = 46 − 40 = 6. Percentage = 6 / 40 = 15%. (13% would be 6/46 — dividing by the wrong base.)"
  },
  {
    "id": "nr02",
    "table": {
      "caption": "Population and area",
      "headers": [
        "Country",
        "Population (m)",
        "Area (1000 km²)"
      ],
      "rows": [
        [
          "A",
          "8.4",
          "42"
        ],
        [
          "B",
          "5.7",
          "30"
        ],
        [
          "C",
          "10.5",
          "50"
        ],
        [
          "D",
          "3.6",
          "20"
        ]
      ]
    },
    "q": "Which country has the highest population density?",
    "options": [
      "C",
      "A",
      "B",
      "D"
    ],
    "a": 0,
    "expl": "Density (people/km²): A = 8.4m/42k = 200; B = 190; C = 10.5m/50k = 210; D = 180. C is highest."
  },
  {
    "id": "nr03",
    "table": {
      "caption": "Agency budget 2025",
      "headers": [
        "Category",
        "Share"
      ],
      "rows": [
        [
          "Operations",
          "62%"
        ],
        [
          "Research",
          "18%"
        ],
        [
          "IT",
          "12%"
        ],
        [
          "Administration",
          "8%"
        ]
      ]
    },
    "q": "If the total budget is €1,200 million, how much is spent on administration?",
    "options": [
      "€96 million",
      "€80 million",
      "€120 million",
      "€144 million"
    ],
    "a": 0,
    "expl": "8% of 1,200 = 0.08 × 1,200 = €96 million."
  },
  {
    "id": "nr04",
    "table": {
      "caption": "Company sales (€ million)",
      "headers": [
        "Year",
        "Sales"
      ],
      "rows": [
        [
          "2021",
          "250"
        ],
        [
          "2022",
          "+8% vs 2021"
        ],
        [
          "2023",
          "+8% vs 2022"
        ]
      ]
    },
    "q": "What were sales in 2023?",
    "options": [
      "€291.6 million",
      "€290.0 million",
      "€266.0 million",
      "€270.0 million"
    ],
    "a": 0,
    "expl": "Compound growth: 250 × 1.08 × 1.08 = 250 × 1.1664 = 291.6. Adding 16% flat (290) ignores compounding."
  },
  {
    "id": "nr05",
    "table": {
      "caption": "Unemployment rate (%)",
      "headers": [
        "Country",
        "2024",
        "2025"
      ],
      "rows": [
        [
          "A",
          "6.2",
          "5.8"
        ],
        [
          "B",
          "7.4",
          "7.9"
        ],
        [
          "C",
          "12.1",
          "10.8"
        ],
        [
          "D",
          "4.9",
          "5.1"
        ]
      ]
    },
    "q": "Which country recorded the largest fall in percentage points?",
    "options": [
      "C",
      "A",
      "B",
      "D"
    ],
    "a": 0,
    "expl": "A: −0.4 pp; B: +0.5 pp; C: −1.3 pp; D: +0.2 pp. Largest fall: C."
  },
  {
    "id": "nr06",
    "table": {
      "caption": "Staff of an institution",
      "headers": [
        "Profile",
        "Staff"
      ],
      "rows": [
        [
          "Translators",
          "240"
        ],
        [
          "Lawyers",
          "160"
        ]
      ]
    },
    "q": "What is the ratio of translators to lawyers, in its simplest form?",
    "options": [
      "3 : 2",
      "2 : 3",
      "4 : 3",
      "6 : 5"
    ],
    "a": 0,
    "expl": "240 : 160 — divide both by 80 → 3 : 2."
  },
  {
    "id": "nr07",
    "table": {
      "caption": "Test scores of a candidate",
      "headers": [
        "Test",
        "Score"
      ],
      "rows": [
        [
          "1",
          "62"
        ],
        [
          "2",
          "74"
        ],
        [
          "3",
          "81"
        ],
        [
          "4",
          "59"
        ],
        [
          "5",
          "84"
        ]
      ]
    },
    "q": "What is the candidate's average score?",
    "options": [
      "72",
      "70",
      "74",
      "76"
    ],
    "a": 0,
    "expl": "Sum = 62+74+81+59+84 = 360. Average = 360 / 5 = 72."
  },
  {
    "id": "nr08",
    "table": {
      "caption": "Electricity generation mix, total 480 TWh",
      "headers": [
        "Source",
        "Share"
      ],
      "rows": [
        [
          "Renewables",
          "34%"
        ],
        [
          "Gas",
          "26%"
        ],
        [
          "Nuclear",
          "22%"
        ],
        [
          "Coal",
          "18%"
        ]
      ]
    },
    "q": "How many TWh were generated from renewables and nuclear together?",
    "options": [
      "268.8 TWh",
      "252.4 TWh",
      "288.0 TWh",
      "163.2 TWh"
    ],
    "a": 0,
    "expl": "34% + 22% = 56%. 0.56 × 480 = 268.8 TWh."
  },
  {
    "id": "nr09",
    "table": null,
    "q": "A software licence costing €150 is increased by 20%, then the new price is reduced by 10%. What is the final price?",
    "options": [
      "€162",
      "€165",
      "€150",
      "€159"
    ],
    "a": 0,
    "expl": "150 × 1.20 = 180; 180 × 0.90 = 162. Successive percentages multiply — they don't simply cancel to +10%."
  },
  {
    "id": "nr10",
    "table": {
      "caption": "Country Y, 2025",
      "headers": [
        "Indicator",
        "Value"
      ],
      "rows": [
        [
          "GDP",
          "€630 billion"
        ],
        [
          "Population",
          "10.5 million"
        ]
      ]
    },
    "q": "What is GDP per capita?",
    "options": [
      "€60,000",
      "€6,000",
      "€63,000",
      "€66,150"
    ],
    "a": 0,
    "expl": "630,000 million / 10.5 million = €60,000 per person."
  },
  {
    "id": "nr11",
    "table": {
      "caption": "Trade of country Z (€ billion)",
      "headers": [
        "Flow",
        "Value"
      ],
      "rows": [
        [
          "Imports",
          "84"
        ],
        [
          "Exports",
          "66"
        ]
      ]
    },
    "q": "Exports represent approximately what percentage of imports?",
    "options": [
      "78.6%",
      "127.3%",
      "21.4%",
      "66.0%"
    ],
    "a": 0,
    "expl": "66 / 84 = 0.7857 ≈ 78.6%. (127.3% is imports/exports — the inverse.)"
  },
  {
    "id": "nr12",
    "table": null,
    "q": "In a selection procedure, 3 out of every 8 applicants pass the first test. If 20,000 people apply, how many pass?",
    "options": [
      "7,500",
      "6,000",
      "8,000",
      "2,500"
    ],
    "a": 0,
    "expl": "20,000 × 3/8 = 60,000/8 = 7,500."
  },
  {
    "id": "nr13",
    "table": null,
    "q": "A train covers 540 km at an average speed of 180 km/h. If it departs at 08:20, when does it arrive?",
    "options": [
      "11:20",
      "11:00",
      "10:50",
      "11:40"
    ],
    "a": 0,
    "expl": "Time = 540 / 180 = 3 hours. 08:20 + 3:00 = 11:20."
  },
  {
    "id": "nr14",
    "table": null,
    "q": "In an institution, 40% of staff are administrators (AD). Among administrators, 35% are women. What percentage of ALL staff are female administrators?",
    "options": [
      "14%",
      "35%",
      "75%",
      "40%"
    ],
    "a": 0,
    "expl": "0.40 × 0.35 = 0.14 → 14% of all staff."
  },
  {
    "id": "nr15",
    "table": {
      "caption": "Industrial production index (2020 = 100)",
      "headers": [
        "Year",
        "Index"
      ],
      "rows": [
        [
          "2020",
          "100"
        ],
        [
          "2024",
          "112"
        ]
      ]
    },
    "q": "If production in 2020 was 25,000 units, how many units were produced in 2024?",
    "options": [
      "28,000",
      "27,500",
      "25,112",
      "30,000"
    ],
    "a": 0,
    "expl": "Index 112 means +12%: 25,000 × 1.12 = 28,000."
  },
  {
    "id": "nr16",
    "table": {
      "caption": "Staff by office",
      "headers": [
        "Office",
        "Staff",
        "Average age"
      ],
      "rows": [
        [
          "Brussels",
          "120",
          "41"
        ],
        [
          "Luxembourg",
          "80",
          "46"
        ]
      ]
    },
    "q": "What is the average age of all 200 staff?",
    "options": [
      "43.0",
      "43.5",
      "42.5",
      "44.0"
    ],
    "a": 0,
    "expl": "Weighted average: (120×41 + 80×46) / 200 = (4,920 + 3,680) / 200 = 8,600 / 200 = 43. The simple mean of 41 and 46 (43.5) ignores the weights."
  },
  {
    "id": "nr17",
    "table": {
      "caption": "New car registrations, 2025",
      "headers": [
        "Type",
        "Share of 10.5 million total"
      ],
      "rows": [
        [
          "Petrol/diesel",
          "48%"
        ],
        [
          "Hybrid",
          "30%"
        ],
        [
          "Electric",
          "22%"
        ]
      ]
    },
    "q": "How many electric cars were registered?",
    "options": [
      "2.31 million",
      "2.20 million",
      "3.15 million",
      "1.05 million"
    ],
    "a": 0,
    "expl": "0.22 × 10.5 million = 2.31 million."
  },
  {
    "id": "nr18",
    "table": null,
    "q": "After a 15% discount, a laptop costs €204. What was the original price?",
    "options": [
      "€240",
      "€234.60",
      "€245",
      "€220"
    ],
    "a": 0,
    "expl": "204 = 85% of the original → 204 / 0.85 = €240. Adding 15% to 204 (≈234.60) is the classic trap."
  },
  {
    "id": "nr19",
    "table": null,
    "q": "A project has spent 5/8 of its €2.4 million budget. How much remains?",
    "options": [
      "€900,000",
      "€1,500,000",
      "€800,000",
      "€300,000"
    ],
    "a": 0,
    "expl": "Spent: 2.4m × 5/8 = 1.5m. Remaining: 2.4m − 1.5m = €900,000."
  },
  {
    "id": "nr20",
    "table": {
      "caption": "Inflation vs salary growth, 2025",
      "headers": [
        "Country",
        "Inflation",
        "Salary growth"
      ],
      "rows": [
        [
          "A",
          "3.2%",
          "3.0%"
        ],
        [
          "B",
          "2.1%",
          "3.0%"
        ],
        [
          "C",
          "4.8%",
          "3.0%"
        ],
        [
          "D",
          "1.9%",
          "3.0%"
        ]
      ]
    },
    "q": "In how many countries did salaries grow faster than prices?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "a": 0,
    "expl": "Salary growth (3.0%) exceeds inflation in B (2.1%) and D (1.9%) — two countries."
  },
  {
    "id": "nr21",
    "table": {
      "caption": "Candidate's plan: 10 practice tests, target average 90%",
      "headers": [
        "Tests taken",
        "Average so far"
      ],
      "rows": [
        [
          "4",
          "80%"
        ]
      ]
    },
    "q": "What average score is needed on the remaining 6 tests to reach a 90% overall average?",
    "options": [
      "96.7%",
      "95.0%",
      "93.3%",
      "100%"
    ],
    "a": 0,
    "expl": "Needed total: 10 × 90 = 900. Achieved: 4 × 80 = 320. Remaining: 580 over 6 tests → 96.67%."
  },
  {
    "id": "nr22",
    "table": {
      "caption": "Household electricity",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Price",
          "€0.28 / kWh"
        ],
        [
          "Annual consumption",
          "3,600 kWh"
        ]
      ]
    },
    "q": "What is the annual electricity cost?",
    "options": [
      "€1,008",
      "€1,080",
      "€980",
      "€1,280"
    ],
    "a": 0,
    "expl": "0.28 × 3,600 = €1,008."
  },
  {
    "id": "nr23",
    "table": {
      "caption": "Exchange rate",
      "headers": [
        "Currency pair",
        "Rate"
      ],
      "rows": [
        [
          "USD → EUR",
          "1 USD = 0.92 EUR"
        ]
      ]
    },
    "q": "A conference fee costs 250 US dollars. How much is that in euros?",
    "options": [
      "€230.00",
      "€271.74",
      "€250.92",
      "€225.00"
    ],
    "a": 0,
    "expl": "250 × 0.92 = €230. (271.74 is 250 ÷ 0.92 — converting the wrong way.)"
  },
  {
    "id": "nr24",
    "table": {
      "caption": "City population",
      "headers": [
        "Year",
        "Population",
        "Annual growth"
      ],
      "rows": [
        [
          "2025",
          "480,000",
          "+2.5%"
        ]
      ]
    },
    "q": "What will the population be after one year of growth?",
    "options": [
      "492,000",
      "494,500",
      "482,500",
      "500,000"
    ],
    "a": 0,
    "expl": "480,000 × 1.025 = 492,000."
  },
  {
    "id": "nr25",
    "table": {
      "caption": "Car trip",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Distance",
          "750 km"
        ],
        [
          "Consumption",
          "6.4 L/100 km"
        ],
        [
          "Fuel price",
          "€1.75/L"
        ]
      ]
    },
    "q": "What is the total fuel cost of the trip?",
    "options": [
      "€84.00",
      "€48.00",
      "€96.00",
      "€75.60"
    ],
    "a": 0,
    "expl": "Fuel needed: 750 × 6.4/100 = 48 L. Cost: 48 × 1.75 = €84."
  },
  {
    "id": "nr26",
    "table": {
      "caption": "Department A budget within total budget (€ million)",
      "headers": [
        "Year",
        "Dept. A",
        "Total"
      ],
      "rows": [
        [
          "2024",
          "45",
          "300"
        ],
        [
          "2025",
          "54",
          "360"
        ]
      ]
    },
    "q": "By how many percentage points did Department A's SHARE of the total change?",
    "options": [
      "0 percentage points",
      "+3 percentage points",
      "+20 percentage points",
      "−2 percentage points"
    ],
    "a": 0,
    "expl": "2024: 45/300 = 15%. 2025: 54/360 = 15%. The share is unchanged even though the amount rose 20% — a classic share-vs-level trap."
  },
  {
    "id": "nr27",
    "table": {
      "caption": "Institution staff, total 800",
      "headers": [
        "Category",
        "Share"
      ],
      "rows": [
        [
          "Administrators (AD)",
          "55%"
        ],
        [
          "Assistants (AST)",
          "25%"
        ],
        [
          "Contract staff",
          "rest"
        ]
      ]
    },
    "q": "How many contract staff are there?",
    "options": [
      "160",
      "200",
      "120",
      "180"
    ],
    "a": 0,
    "expl": "Contract share = 100 − 55 − 25 = 20%. 0.20 × 800 = 160."
  },
  {
    "id": "nr28",
    "table": null,
    "q": "A candidate's score improved from 64 to 80 points. What is the percentage increase?",
    "options": [
      "25%",
      "20%",
      "16%",
      "12.5%"
    ],
    "a": 0,
    "expl": "Increase 16 on a base of 64: 16/64 = 25%. (20% would be 16/80 — the wrong base.)"
  },
  {
    "id": "nr29",
    "table": null,
    "q": "A committee meeting starts at 09:45 and lasts 2 hours 50 minutes. When does it end?",
    "options": [
      "12:35",
      "12:25",
      "11:35",
      "12:45"
    ],
    "a": 0,
    "expl": "09:45 + 2:00 = 11:45; + 50 min = 12:35."
  },
  {
    "id": "nr30",
    "table": null,
    "q": "A car covers 210 km in 1 hour 45 minutes. What is its average speed?",
    "options": [
      "120 km/h",
      "140 km/h",
      "105 km/h",
      "126 km/h"
    ],
    "a": 0,
    "expl": "1 h 45 = 1.75 h. 210 / 1.75 = 120 km/h."
  },
  {
    "id": "nr31",
    "table": {
      "caption": "Map",
      "headers": [
        "Property",
        "Value"
      ],
      "rows": [
        [
          "Scale",
          "1 : 250,000"
        ],
        [
          "Distance on map",
          "4.8 cm"
        ]
      ]
    },
    "q": "What is the real distance?",
    "options": [
      "12 km",
      "1.2 km",
      "120 km",
      "48 km"
    ],
    "a": 0,
    "expl": "4.8 cm × 250,000 = 1,200,000 cm = 12 km."
  },
  {
    "id": "nr32",
    "table": {
      "caption": "Selection panel",
      "headers": [
        "Members",
        "Count"
      ],
      "rows": [
        [
          "Women",
          "5"
        ],
        [
          "Men",
          "3"
        ]
      ]
    },
    "q": "If one member is chosen at random to chair, what is the probability it is a woman?",
    "options": [
      "62.5%",
      "50%",
      "37.5%",
      "60%"
    ],
    "a": 0,
    "expl": "5 out of 8: 5/8 = 0.625 = 62.5%."
  },
  {
    "id": "nr33",
    "table": {
      "caption": "Exports (€ billion)",
      "headers": [
        "Country",
        "2024",
        "2025"
      ],
      "rows": [
        [
          "A",
          "55",
          "66"
        ],
        [
          "B",
          "80",
          "92"
        ]
      ]
    },
    "q": "Which country's exports grew faster in percentage terms?",
    "options": [
      "Country A (+20%)",
      "Country B (+15%)",
      "Both grew equally",
      "Country B, because +12 > +11"
    ],
    "a": 0,
    "expl": "A: 11/55 = 20%. B: 12/80 = 15%. Absolute growth (12 vs 11) is the trap — the question asks about percentages."
  },
  {
    "id": "nr34",
    "table": null,
    "q": "An agency's €7.5 million budget is cut by 12%. What is the new budget?",
    "options": [
      "€6.60 million",
      "€6.30 million",
      "€6.75 million",
      "€6.90 million"
    ],
    "a": 0,
    "expl": "7.5 × 0.88 = €6.6 million."
  },
  {
    "id": "nr35",
    "table": null,
    "q": "€2,000 is invested at 5% compound interest per year. What is it worth after 3 years?",
    "options": [
      "€2,315.25",
      "€2,300.00",
      "€2,205.00",
      "€2,600.00"
    ],
    "a": 0,
    "expl": "2,000 × 1.05³ = 2,000 × 1.157625 = €2,315.25. (€2,300 assumes simple interest.)"
  },
  {
    "id": "nr36",
    "table": {
      "caption": "Points scored by 10 candidates",
      "headers": [
        "Score",
        "Number of candidates"
      ],
      "rows": [
        [
          "10",
          "2"
        ],
        [
          "20",
          "3"
        ],
        [
          "30",
          "5"
        ]
      ]
    },
    "q": "What is the mean score?",
    "options": [
      "23",
      "20",
      "25",
      "22"
    ],
    "a": 0,
    "expl": "(10×2 + 20×3 + 30×5) / 10 = (20 + 60 + 150) / 10 = 230/10 = 23."
  },
  {
    "id": "nr37",
    "table": null,
    "q": "Three software licences cost €504 in total. How much do seven licences cost at the same unit price?",
    "options": [
      "€1,176",
      "€1,008",
      "€1,512",
      "€1,092"
    ],
    "a": 0,
    "expl": "Unit price 504/3 = €168. Seven: 168 × 7 = €1,176."
  },
  {
    "id": "nr38",
    "table": {
      "caption": "Central bank interest rate",
      "headers": [
        "Date",
        "Rate"
      ],
      "rows": [
        [
          "January",
          "2.0%"
        ],
        [
          "July",
          "2.5%"
        ]
      ]
    },
    "q": "In RELATIVE terms, by what percentage did the rate increase?",
    "options": [
      "25%",
      "0.5%",
      "5%",
      "50%"
    ],
    "a": 0,
    "expl": "From 2.0 to 2.5 is +0.5 percentage points, which is 0.5/2.0 = 25% in relative terms. Points vs percent — EPSO's favourite distinction."
  },
  {
    "id": "nr39",
    "table": {
      "caption": "Salary deductions",
      "headers": [
        "Item",
        "Rate"
      ],
      "rows": [
        [
          "Gross salary",
          "€3,200"
        ],
        [
          "Income tax",
          "20% of gross"
        ],
        [
          "Solidarity levy",
          "5% of what remains"
        ]
      ]
    },
    "q": "What is the net salary?",
    "options": [
      "€2,432",
      "€2,400",
      "€2,560",
      "€2,464"
    ],
    "a": 0,
    "expl": "After tax: 3,200 × 0.80 = 2,560. After levy: 2,560 × 0.95 = €2,432. Applying 25% at once (€2,400) is the trap."
  },
  {
    "id": "nr40",
    "table": {
      "caption": "EPSO competition",
      "headers": [
        "Item",
        "Count"
      ],
      "rows": [
        [
          "Applicants",
          "12,000"
        ],
        [
          "Laureates",
          "240"
        ]
      ]
    },
    "q": "What is the ratio of applicants to laureates?",
    "options": [
      "50 : 1",
      "40 : 1",
      "60 : 1",
      "24 : 1"
    ],
    "a": 0,
    "expl": "12,000 / 240 = 50 → 50 applicants per laureate."
  },
  {
    "id": "nr41",
    "table": {
      "caption": "Country demographics",
      "headers": [
        "Indicator",
        "Value"
      ],
      "rows": [
        [
          "Population",
          "6.0 million"
        ],
        [
          "Share under 20",
          "22%"
        ]
      ]
    },
    "q": "How many people are under 20?",
    "options": [
      "1.32 million",
      "1.20 million",
      "2.20 million",
      "1.02 million"
    ],
    "a": 0,
    "expl": "6.0 × 0.22 = 1.32 million."
  },
  {
    "id": "nr42",
    "table": {
      "caption": "Household electricity use (kWh/year)",
      "headers": [
        "Year",
        "Consumption"
      ],
      "rows": [
        [
          "2024",
          "3,600"
        ],
        [
          "2025",
          "3,240"
        ]
      ]
    },
    "q": "By what percentage did consumption fall?",
    "options": [
      "10%",
      "11.1%",
      "9%",
      "12%"
    ],
    "a": 0,
    "expl": "Fall = 360. 360/3,600 = 10%. (11.1% is 360/3,240 — wrong base.)"
  },
  {
    "id": "nr43",
    "table": {
      "caption": "Two-leg journey",
      "headers": [
        "Leg",
        "Distance",
        "Speed"
      ],
      "rows": [
        [
          "Train",
          "90 km",
          "90 km/h"
        ],
        [
          "Bus",
          "60 km",
          "40 km/h"
        ]
      ]
    },
    "q": "What is the average speed over the whole journey?",
    "options": [
      "60 km/h",
      "65 km/h",
      "72 km/h",
      "75 km/h"
    ],
    "a": 0,
    "expl": "Times: 1 h + 1.5 h = 2.5 h. Total 150 km / 2.5 h = 60 km/h. Averaging the two speeds (65) is wrong because the legs take different times."
  },
  {
    "id": "nr44",
    "table": null,
    "q": "A service costs €80 excluding VAT. With VAT at 21%, what is the final price?",
    "options": [
      "€96.80",
      "€101.00",
      "€97.60",
      "€92.80"
    ],
    "a": 0,
    "expl": "80 × 1.21 = €96.80."
  },
  {
    "id": "nr45",
    "table": {
      "caption": "Programme budget €240 million",
      "headers": [
        "Allocation",
        "Share"
      ],
      "rows": [
        [
          "Cohesion strand",
          "35% of total"
        ],
        [
          "… of which Region X",
          "25% of the strand"
        ]
      ]
    },
    "q": "How much does Region X receive?",
    "options": [
      "€21 million",
      "€84 million",
      "€60 million",
      "€36 million"
    ],
    "a": 0,
    "expl": "Strand: 240 × 0.35 = 84. Region X: 84 × 0.25 = €21 million."
  },
  {
    "id": "nr46",
    "table": {
      "caption": "Translation unit output",
      "headers": [
        "Fact",
        "Value"
      ],
      "rows": [
        [
          "4 translators",
          "120 pages in 3 days"
        ]
      ]
    },
    "q": "At the same rate, how long do 6 translators need for 180 pages?",
    "options": [
      "3 days",
      "2 days",
      "4.5 days",
      "6 days"
    ],
    "a": 0,
    "expl": "Rate: 120/(4×3) = 10 pages per translator-day. 180 pages need 18 translator-days → 18/6 = 3 days."
  },
  {
    "id": "nr47",
    "table": {
      "caption": "Consumer price index (2015 = 100)",
      "headers": [
        "Year",
        "Index"
      ],
      "rows": [
        [
          "2015",
          "100"
        ],
        [
          "2025",
          "140"
        ]
      ]
    },
    "q": "An item cost €35 in 2015. What does it cost in 2025 if it followed the index?",
    "options": [
      "€49",
      "€47.50",
      "€40",
      "€75"
    ],
    "a": 0,
    "expl": "35 × 140/100 = €49."
  },
  {
    "id": "nr48",
    "table": {
      "caption": "Test results",
      "headers": [
        "Candidate",
        "Score"
      ],
      "rows": [
        [
          "A",
          "72"
        ],
        [
          "B",
          "90"
        ]
      ]
    },
    "q": "By what percentage did candidate B outscore candidate A?",
    "options": [
      "25%",
      "20%",
      "18%",
      "80%"
    ],
    "a": 0,
    "expl": "Difference 18 relative to A's 72: 18/72 = 25%. (20% is 18/90 — comparing to the wrong candidate.)"
  },
  {
    "id": "nr49",
    "table": {
      "caption": "European Parliament",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Total seats",
          "720"
        ],
        [
          "Party P's vote share (proportional)",
          "15%"
        ]
      ]
    },
    "q": "Roughly how many seats does a 15% share represent?",
    "options": [
      "108",
      "105",
      "115",
      "96"
    ],
    "a": 0,
    "expl": "720 × 0.15 = 108 seats."
  },
  {
    "id": "nr50",
    "table": null,
    "q": "A €400 item gets two successive discounts of 10%. What is the final price?",
    "options": [
      "€324",
      "€320",
      "€360",
      "€316"
    ],
    "a": 0,
    "expl": "400 × 0.9 × 0.9 = €324. Two 10% cuts are NOT the same as one 20% cut (€320) — the second 10% applies to a smaller amount."
  },
  {
    "id": "nr51",
    "table": {
      "caption": "Programme budget €8.4 million",
      "headers": [
        "Strand",
        "Share"
      ],
      "rows": [
        [
          "Training",
          "40%"
        ],
        [
          "Research",
          "35%"
        ],
        [
          "Mobility",
          "25%"
        ]
      ]
    },
    "q": "How much is allocated to the smallest strand?",
    "options": [
      "€2.10 million",
      "€2.94 million",
      "€3.36 million",
      "€2.52 million"
    ],
    "a": 0,
    "expl": "Smallest = Mobility, 25%: 8.4 × 0.25 = €2.1 million."
  },
  {
    "id": "nr52",
    "table": {
      "caption": "Staff movements this year",
      "headers": [
        "Fact",
        "Value"
      ],
      "rows": [
        [
          "Staff at start",
          "1,250"
        ],
        [
          "Departures",
          "8% of staff"
        ],
        [
          "Departures replaced",
          "60%"
        ]
      ]
    },
    "q": "How many staff are there at the end of the year?",
    "options": [
      "1,210",
      "1,150",
      "1,190",
      "1,250"
    ],
    "a": 0,
    "expl": "Departures: 1,250 × 0.08 = 100. Replaced: 60. Net change −40 → 1,210."
  },
  {
    "id": "nr53",
    "table": {
      "caption": "Factory output (thousand units)",
      "headers": [
        "Year",
        "Output"
      ],
      "rows": [
        [
          "2023",
          "84"
        ],
        [
          "2025",
          "105"
        ]
      ]
    },
    "q": "By what percentage did output grow between 2023 and 2025?",
    "options": [
      "25%",
      "21%",
      "20%",
      "30%"
    ],
    "a": 0,
    "expl": "Growth 21 on base 84: 21/84 = 25%. (20% would be 21/105 — wrong base.)"
  },
  {
    "id": "nr54",
    "table": null,
    "q": "A proofreader checks 12 pages per hour. How long does a 90-page report take?",
    "options": [
      "7.5 hours",
      "7 hours",
      "8 hours",
      "6.5 hours"
    ],
    "a": 0,
    "expl": "90 / 12 = 7.5 hours."
  },
  {
    "id": "nr55",
    "table": null,
    "q": "A €18,000 grant is split between two projects in the ratio 5:4. How much does the larger project receive?",
    "options": [
      "€10,000",
      "€8,000",
      "€11,250",
      "€9,000"
    ],
    "a": 0,
    "expl": "5 + 4 = 9 parts → €2,000 per part. Larger share: 5 × 2,000 = €10,000."
  },
  {
    "id": "nr56",
    "table": {
      "caption": "Team composition",
      "headers": [
        "Fact",
        "Value"
      ],
      "rows": [
        [
          "Current members",
          "9"
        ],
        [
          "Current average age",
          "40"
        ],
        [
          "New member's age",
          "30"
        ]
      ]
    },
    "q": "What is the average age after the new member joins?",
    "options": [
      "39",
      "38",
      "39.5",
      "35"
    ],
    "a": 0,
    "expl": "Total ages: 9 × 40 = 360; + 30 = 390. New average: 390 / 10 = 39."
  },
  {
    "id": "nr57",
    "table": {
      "caption": "Event budgeting",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Fixed costs",
          "€1,200"
        ],
        [
          "Cost per participant",
          "€3.50"
        ],
        [
          "Fee per participant",
          "€8.50"
        ]
      ]
    },
    "q": "How many participants are needed to break even?",
    "options": [
      "240",
      "141",
      "343",
      "200"
    ],
    "a": 0,
    "expl": "Margin per participant: 8.50 − 3.50 = €5. Break-even: 1,200 / 5 = 240."
  },
  {
    "id": "nr58",
    "table": null,
    "q": "After a 25% raise, a salary is €3,750. What was the salary before the raise?",
    "options": [
      "€3,000",
      "€2,812.50",
      "€3,125",
      "€2,750"
    ],
    "a": 0,
    "expl": "3,750 = 125% of the original → 3,750 / 1.25 = €3,000. Subtracting 25% of 3,750 (≈2,812) is the trap."
  },
  {
    "id": "nr59",
    "table": {
      "caption": "Language skills in a unit",
      "headers": [
        "Language",
        "Share of staff"
      ],
      "rows": [
        [
          "English",
          "70%"
        ],
        [
          "French",
          "50%"
        ],
        [
          "Both",
          "30%"
        ]
      ]
    },
    "q": "What percentage of staff speak neither English nor French?",
    "options": [
      "10%",
      "0%",
      "20%",
      "30%"
    ],
    "a": 0,
    "expl": "English or French = 70 + 50 − 30 = 90%. Neither = 100 − 90 = 10%."
  },
  {
    "id": "nr60",
    "table": {
      "caption": "Flight Brussels → Athens",
      "headers": [
        "Fact",
        "Value"
      ],
      "rows": [
        [
          "Departure (Brussels time)",
          "10:40"
        ],
        [
          "Flight duration",
          "3 h 30"
        ],
        [
          "Time difference",
          "Athens is 1 h ahead"
        ]
      ]
    },
    "q": "What is the local arrival time in Athens?",
    "options": [
      "15:10",
      "14:10",
      "13:10",
      "16:10"
    ],
    "a": 0,
    "expl": "10:40 + 3:30 = 14:10 Brussels time = 15:10 in Athens."
  },
  {
    "id": "nr101",
    "table": {
      "caption": "Exports of country R (€ million)",
      "headers": [
        "Year",
        "Exports"
      ],
      "rows": [
        [
          "2024",
          "320"
        ],
        [
          "2025",
          "368"
        ]
      ]
    },
    "q": "By what percentage did exports increase between 2024 and 2025?",
    "options": [
      "13.0%",
      "15.0%",
      "48.0%",
      "115.0%"
    ],
    "a": 1,
    "expl": "Increase = 368 − 320 = 48. 48 / 320 = 0.15 = 15.0%. Dividing by the new value (48 / 368 = 13.0%) uses the wrong base; 115.0% is 368/320 without subtracting the original 100%."
  },
  {
    "id": "nr102",
    "table": null,
    "q": "After a 35% discount, an office chair costs €169. What was the price before the discount?",
    "options": [
      "€109.85",
      "€228.15",
      "€260.00",
      "€482.86"
    ],
    "a": 2,
    "expl": "€169 is 65% of the original price: 169 / 0.65 = €260.00. Adding 35% back onto the discounted price (169 × 1.35 = €228.15) is the classic reverse-percentage trap, because 35% of 260 (€91) is bigger than 35% of 169 (€59.15)."
  },
  {
    "id": "nr103",
    "table": {
      "caption": "Unemployment rate, country S",
      "headers": [
        "Year",
        "Rate"
      ],
      "rows": [
        [
          "2023",
          "4.0%"
        ],
        [
          "2025",
          "5.6%"
        ]
      ]
    },
    "q": "In RELATIVE terms, by what percentage did the unemployment rate rise?",
    "options": [
      "1.6%",
      "28.6%",
      "40.0%",
      "140.0%"
    ],
    "a": 2,
    "expl": "The rise is 5.6 − 4.0 = 1.6 percentage points. In relative terms: 1.6 / 4.0 = 0.40 = 40.0%. Quoting the 1.6 pp gap as \"1.6%\" confuses percentage points with percent; 28.6% (1.6/5.6) divides by the new rate."
  },
  {
    "id": "nr104",
    "table": null,
    "q": "A machine priced at €250 is increased by 12%, and the new price is later reduced by 12%. What is the final price?",
    "options": [
      "€220.00",
      "€246.40",
      "€250.00",
      "€280.00"
    ],
    "a": 1,
    "expl": "250 × 1.12 = €280.00; 280 × 0.88 = €246.40. A rise and a fall of the same percentage never cancel out (€250.00) because the 12% cut is taken from the larger amount 280, not from 250."
  },
  {
    "id": "nr105",
    "table": {
      "caption": "Union budget 2026, total €2,400 million",
      "headers": [
        "Heading",
        "Share"
      ],
      "rows": [
        [
          "Green transition",
          "33%"
        ],
        [
          "Digital",
          "27%"
        ],
        [
          "Social policy",
          "22%"
        ],
        [
          "Administration",
          "18%"
        ]
      ]
    },
    "q": "How much more is allocated to the green transition than to social policy?",
    "options": [
      "€26.4 million",
      "€264 million",
      "€528 million",
      "€792 million"
    ],
    "a": 1,
    "expl": "33% − 22% = 11 percentage points; 0.11 × 2,400 = €264 million. €792 million (0.33 × 2,400) is the green transition alone and €528 million (0.22 × 2,400) is social policy alone; €26.4 million is a decimal slip (1.1% instead of 11%)."
  },
  {
    "id": "nr106",
    "table": null,
    "q": "A grant of €45,000 is divided between three regions in the ratio 4 : 5 : 6. How much does the largest share amount to?",
    "options": [
      "€7,500",
      "€12,000",
      "€15,000",
      "€18,000"
    ],
    "a": 3,
    "expl": "4 + 5 + 6 = 15 parts; 45,000 / 15 = €3,000 per part. Largest share = 6 × 3,000 = €18,000. Dividing 45,000 by 6 (€7,500) treats the ratio figure as the number of parts."
  },
  {
    "id": "nr107",
    "table": {
      "caption": "Written test results by unit",
      "headers": [
        "Unit",
        "Candidates",
        "Average score"
      ],
      "rows": [
        [
          "A",
          "30",
          "68"
        ],
        [
          "B",
          "70",
          "78"
        ]
      ]
    },
    "q": "What is the average score of all 100 candidates?",
    "options": [
      "71.0",
      "73.0",
      "75.0",
      "78.0"
    ],
    "a": 2,
    "expl": "Weighted average: (30 × 68 + 70 × 78) / 100 = (2,040 + 5,460) / 100 = 7,500 / 100 = 75.0. The unweighted mean of 68 and 78 (73.0) ignores that unit B has more than twice as many candidates; 71.0 is what you get if the weights are swapped."
  },
  {
    "id": "nr108",
    "table": {
      "caption": "GDP and population, 2025",
      "headers": [
        "Country",
        "GDP (€ billion)",
        "Population (million)"
      ],
      "rows": [
        [
          "A",
          "540",
          "9.0"
        ],
        [
          "B",
          "442",
          "6.5"
        ],
        [
          "C",
          "715",
          "11.0"
        ],
        [
          "D",
          "288",
          "4.8"
        ]
      ]
    },
    "q": "Which country has the highest GDP per capita?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "a": 1,
    "expl": "A: 540/9.0 = €60,000; B: 442/6.5 = €68,000; C: 715/11.0 = €65,000; D: 288/4.8 = €60,000. B is highest. Picking C is the trap — it has the largest GDP in absolute terms but also the largest population."
  },
  {
    "id": "nr109",
    "table": {
      "caption": "Regions",
      "headers": [
        "Region",
        "Population (million)",
        "Area (km²)"
      ],
      "rows": [
        [
          "P",
          "2.4",
          "12,000"
        ],
        [
          "Q",
          "1.7",
          "8,500"
        ],
        [
          "R",
          "3.3",
          "15,000"
        ],
        [
          "S",
          "0.9",
          "4,000"
        ]
      ]
    },
    "q": "Which region has the highest population density?",
    "options": [
      "P",
      "Q",
      "R",
      "S"
    ],
    "a": 3,
    "expl": "Density = population / area: P = 2,400,000/12,000 = 200; Q = 1,700,000/8,500 = 200; R = 3,300,000/15,000 = 220; S = 900,000/4,000 = 225 inhabitants per km². S is densest although it has the smallest population — choosing R (biggest population) is the trap."
  },
  {
    "id": "nr110",
    "table": {
      "caption": "Consumer price index (2020 = 100)",
      "headers": [
        "Year",
        "Index"
      ],
      "rows": [
        [
          "2020",
          "100"
        ],
        [
          "2023",
          "112"
        ],
        [
          "2025",
          "126"
        ]
      ]
    },
    "q": "By what percentage did prices rise between 2023 and 2025?",
    "options": [
      "11.1%",
      "12.5%",
      "14.0%",
      "26.0%"
    ],
    "a": 1,
    "expl": "(126 − 112) / 112 = 14 / 112 = 0.125 = 12.5%. Reading the 14-point gap as \"14%\" treats index points as percent; 26.0% measures the rise from the 2020 base year instead of from 2023, and 11.1% divides by 126."
  },
  {
    "id": "nr111",
    "table": null,
    "q": "A cyclist covers 84 km at an average speed of 24 km/h. If she starts at 07:50, at what time does she finish?",
    "options": [
      "10:50",
      "11:20",
      "11:40",
      "12:20"
    ],
    "a": 1,
    "expl": "Time = 84 / 24 = 3.5 hours = 3 h 30 min. 07:50 + 3 h 30 min = 11:20. Reading \"3.5 hours\" as 3 h 50 min gives 11:40 — the standard decimal-to-minutes error."
  },
  {
    "id": "nr112",
    "table": {
      "caption": "Conference payment",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Registration fee",
          "USD 1,250"
        ],
        [
          "Card surcharge",
          "4% of the fee"
        ],
        [
          "Exchange rate",
          "1 EUR = 1.25 USD"
        ]
      ]
    },
    "q": "What is the total cost in euros?",
    "options": [
      "€1,000.00",
      "€1,040.00",
      "€1,300.00",
      "€1,625.00"
    ],
    "a": 1,
    "expl": "Fee including surcharge: 1,250 × 1.04 = USD 1,300. Converting: 1,300 / 1.25 = €1,040.00. Multiplying by the rate instead of dividing gives €1,625.00 (converting the wrong way); ignoring the 4% surcharge gives €1,000.00."
  },
  {
    "id": "nr113",
    "table": {
      "caption": "Product costing",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Fixed costs per month",
          "€9,600"
        ],
        [
          "Variable cost per unit",
          "€13"
        ],
        [
          "Selling price per unit",
          "€25"
        ]
      ]
    },
    "q": "How many units must be sold each month to break even?",
    "options": [
      "253 units",
      "384 units",
      "738 units",
      "800 units"
    ],
    "a": 3,
    "expl": "Contribution per unit = 25 − 13 = €12. Break-even = 9,600 / 12 = 800 units. Dividing the fixed costs by the price alone (9,600/25 = 384) ignores the variable cost; 9,600/13 = 738 uses the variable cost alone."
  },
  {
    "id": "nr114",
    "table": null,
    "q": "€12,000 is invested at 6% compound interest per year. What is the investment worth after 4 years?",
    "options": [
      "€12,720.00",
      "€14,880.00",
      "€15,000.00",
      "€15,149.72"
    ],
    "a": 3,
    "expl": "12,000 × 1.06⁴ = 12,000 × 1.26247696 = €15,149.72. Simple interest of 4 × 6% = 24% gives 12,000 × 1.24 = €14,880.00 — the tempting wrong answer, because it earns no interest on the interest."
  },
  {
    "id": "nr115",
    "table": null,
    "q": "A selection panel has 12 members: 7 women and 5 men. Two different members are drawn at random to chair two sessions. What is the probability that both are women?",
    "options": [
      "58.3%",
      "50.0%",
      "34.0%",
      "31.8%"
    ],
    "a": 3,
    "expl": "(7/12) × (6/11) = 42/132 = 0.3182 = 31.8%. Using 7/12 twice (0.5833² = 34.0%) is the tempting error: it forgets that the first draw removes one woman from a pool that also shrinks to 11."
  },
  {
    "id": "nr116",
    "table": {
      "caption": "Museum visitors (thousands)",
      "headers": [
        "Museum",
        "2023",
        "2025"
      ],
      "rows": [
        [
          "A",
          "420",
          "504"
        ],
        [
          "B",
          "610",
          "671"
        ],
        [
          "C",
          "250",
          "320"
        ],
        [
          "D",
          "800",
          "880"
        ]
      ]
    },
    "q": "Which museum recorded the largest PERCENTAGE increase in visitors?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "a": 2,
    "expl": "A: 84/420 = 20%; B: 61/610 = 10%; C: 70/250 = 28%; D: 80/800 = 10%. C is the largest in percentage terms. Choosing A is the trap — it gained the most visitors in absolute terms (+84 thousand) but from a much larger base."
  },
  {
    "id": "nr117",
    "table": {
      "caption": "Agency budget 2025 (total €4.8 million)",
      "headers": [
        "Item",
        "Share"
      ],
      "rows": [
        [
          "Staff costs",
          "35%"
        ],
        [
          "Other costs",
          "65%"
        ]
      ]
    },
    "q": "In 2026 staff costs rise by 10% while other costs stay unchanged. What is the total budget in 2026?",
    "options": [
      "€1.848 million",
      "€4.968 million",
      "€5.112 million",
      "€5.280 million"
    ],
    "a": 1,
    "expl": "Staff costs: 4.8 × 0.35 = 1.68 → 1.68 × 1.10 = 1.848. Other costs stay at 4.8 × 0.65 = 3.12. Total = 1.848 + 3.12 = €4.968 million. Applying the 10% to the whole budget (4.8 × 1.10 = €5.280 million) is the most tempting error; €5.112 million applies it to the 65% part instead."
  },
  {
    "id": "nr118",
    "table": {
      "caption": "Vote share of party P",
      "headers": [
        "Election",
        "Share of votes"
      ],
      "rows": [
        [
          "2020",
          "12%"
        ],
        [
          "2025",
          "15%"
        ]
      ]
    },
    "q": "How did party P's vote share change?",
    "options": [
      "By 3 percentage points, i.e. a relative rise of 20%",
      "By 3 percentage points, i.e. a relative rise of 25%",
      "By 25 percentage points, i.e. a relative rise of 3%",
      "By 3 percentage points, i.e. a relative rise of 3%"
    ],
    "a": 1,
    "expl": "15 − 12 = 3 percentage points; relative change = 3 / 12 = 0.25 = 25%. Dividing by the new share (3/15 = 20%) is the usual error, and calling the 3 pp gap \"a rise of 3%\" mixes up points and percent."
  },
  {
    "id": "nr119",
    "table": null,
    "q": "A salary of €48,000 rises by 4% in each of three consecutive years. What is the salary after the third rise?",
    "options": [
      "€49,920.00",
      "€53,760.00",
      "€53,993.47",
      "€56,153.21"
    ],
    "a": 2,
    "expl": "48,000 × 1.04³ = 48,000 × 1.124864 = €53,993.47. Adding 3 × 4% = 12% in one step gives 48,000 × 1.12 = €53,760.00 and misses the compounding; €56,153.21 is 1.04⁴ (one year too many)."
  },
  {
    "id": "nr120",
    "table": {
      "caption": "Energy consumption by sector, total 620 PJ",
      "headers": [
        "Sector",
        "Share"
      ],
      "rows": [
        [
          "Industry",
          "38%"
        ],
        [
          "Transport",
          "27%"
        ],
        [
          "Households",
          "22%"
        ],
        [
          "Services",
          "13%"
        ]
      ]
    },
    "q": "How many petajoules more does industry consume than households?",
    "options": [
      "16.0 PJ",
      "99.2 PJ",
      "136.4 PJ",
      "235.6 PJ"
    ],
    "a": 1,
    "expl": "38% − 22% = 16 percentage points; 0.16 × 620 = 99.2 PJ. Answering \"16.0 PJ\" reports the percentage-point gap as if it were a quantity; 235.6 PJ is industry alone and 136.4 PJ households alone."
  },
  {
    "id": "nr121",
    "table": null,
    "q": "In a unit of 140 staff, the ratio of assistants (AST) to administrators (AD) is 2 : 5. How many administrators are there?",
    "options": [
      "40",
      "56",
      "70",
      "100"
    ],
    "a": 3,
    "expl": "2 + 5 = 7 parts; 140 / 7 = 20 staff per part. AD = 5 × 20 = 100 (AST = 40). Reading the ratio the wrong way round gives 40; 56 comes from taking 2/5 of 140 instead of 5/7."
  },
  {
    "id": "nr122",
    "table": {
      "caption": "Pass rates by test centre",
      "headers": [
        "Centre",
        "Candidates",
        "Pass rate"
      ],
      "rows": [
        [
          "X",
          "200",
          "45%"
        ],
        [
          "Y",
          "300",
          "60%"
        ],
        [
          "Z",
          "500",
          "70%"
        ]
      ]
    },
    "q": "What is the overall pass rate across the three centres?",
    "options": [
      "58.3%",
      "60.0%",
      "62.0%",
      "70.0%"
    ],
    "a": 2,
    "expl": "Passes: 200 × 0.45 = 90; 300 × 0.60 = 180; 500 × 0.70 = 350. Total 620 out of 1,000 = 62.0%. The unweighted mean of 45, 60 and 70 (175/3 = 58.3%) is the tempting wrong answer — it ignores that centre Z is half of all candidates."
  },
  {
    "id": "nr123",
    "table": {
      "caption": "Municipal waste, 2025",
      "headers": [
        "Country",
        "Waste (million tonnes)",
        "Population (million)"
      ],
      "rows": [
        [
          "M",
          "5.4",
          "9.0"
        ]
      ]
    },
    "q": "How much municipal waste is generated per inhabitant?",
    "options": [
      "0.6 kg",
      "60 kg",
      "600 kg",
      "1,667 kg"
    ],
    "a": 2,
    "expl": "5.4 million tonnes = 5,400 million kg. 5,400 / 9.0 = 600 kg per inhabitant. 0.6 kg is the figure in tonnes (5.4/9.0) left unconverted; 1,667 kg comes from dividing population by waste (9.0/5.4) — the ratio upside down."
  },
  {
    "id": "nr124",
    "table": {
      "caption": "Index of rail passengers (2019 = 100)",
      "headers": [
        "Year",
        "Index"
      ],
      "rows": [
        [
          "2019",
          "100"
        ],
        [
          "2021",
          "68"
        ],
        [
          "2024",
          "104"
        ]
      ]
    },
    "q": "By what percentage did rail passenger numbers grow between 2021 and 2024?",
    "options": [
      "4.0%",
      "34.6%",
      "36.0%",
      "52.9%"
    ],
    "a": 3,
    "expl": "(104 − 68) / 68 = 36 / 68 = 0.5294 = 52.9%. The 36-point gap is not \"36%\" — index points are not percent; 34.6% divides by 104 instead of by the 2021 base, and 4.0% only compares 2024 with the 2019 base."
  },
  {
    "id": "nr125",
    "table": {
      "caption": "Lorry journey",
      "headers": [
        "Section",
        "Distance",
        "Speed"
      ],
      "rows": [
        [
          "Section 1",
          "120 km",
          "60 km/h"
        ],
        [
          "Section 2",
          "180 km",
          "120 km/h"
        ]
      ]
    },
    "q": "What is the average speed over the whole 300 km?",
    "options": [
      "100.0 km/h",
      "96.0 km/h",
      "90.0 km/h",
      "85.7 km/h"
    ],
    "a": 3,
    "expl": "Times: 120/60 = 2 h and 180/120 = 1.5 h, so 3.5 h in total. Average = 300 / 3.5 = 85.7 km/h. Averaging the two speeds ((60 + 120)/2 = 90.0) is the tempting error — the slow section takes more time, so it must weigh more; 96.0 km/h weights by distance instead of time."
  },
  {
    "id": "nr126",
    "table": {
      "caption": "Fuel purchase",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Volume",
          "2.5 m³"
        ],
        [
          "Price",
          "€1.60 per litre"
        ]
      ]
    },
    "q": "What is the total cost of the fuel?",
    "options": [
      "€250",
      "€400",
      "€4,000",
      "€40,000"
    ],
    "a": 2,
    "expl": "1 m³ = 1,000 litres, so 2.5 m³ = 2,500 litres. 2,500 × 1.60 = €4,000. Using 250 litres (a factor-of-ten slip in the conversion) gives €400."
  },
  {
    "id": "nr127",
    "table": {
      "caption": "Training course",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Organisation cost",
          "€7,500"
        ],
        [
          "Materials per participant",
          "€45"
        ],
        [
          "Fee per participant",
          "€120"
        ]
      ]
    },
    "q": "How many participants are needed for the organiser to make a profit of at least €3,000?",
    "options": [
      "88",
      "100",
      "140",
      "167"
    ],
    "a": 2,
    "expl": "Contribution per participant = 120 − 45 = €75. Required: (7,500 + 3,000) / 75 = 10,500 / 75 = 140 participants. Forgetting the profit target gives 7,500/75 = 100 (break-even only); dividing by the full fee gives 10,500/120 = 87.5 → 88."
  },
  {
    "id": "nr128",
    "table": null,
    "q": "A town's population of 250,000 is falling by 3% per year. Approximately what will it be after 5 years?",
    "options": [
      "about 212,500",
      "about 214,700",
      "about 217,500",
      "about 235,000"
    ],
    "a": 1,
    "expl": "250,000 × 0.97⁵ = 250,000 × 0.85873 ≈ 214,684, i.e. about 214,700. Subtracting a flat 5 × 3% = 15% gives 212,500 — the tempting answer, but it overstates the fall because each year's 3% is taken from a smaller population."
  },
  {
    "id": "nr129",
    "table": {
      "caption": "Language skills of 60 candidates",
      "headers": [
        "Skill",
        "Candidates"
      ],
      "rows": [
        [
          "German",
          "24"
        ],
        [
          "French",
          "30"
        ],
        [
          "Both German and French",
          "9"
        ]
      ]
    },
    "q": "What percentage of the candidates speak at least one of the two languages?",
    "options": [
      "25%",
      "40%",
      "75%",
      "90%"
    ],
    "a": 2,
    "expl": "German or French = 24 + 30 − 9 = 45. 45/60 = 0.75 = 75%. Adding 24 + 30 without removing the 9 counted twice gives 54/60 = 90% — the classic double-counting error; 25% is the share who speak neither."
  },
  {
    "id": "nr130",
    "table": {
      "caption": "Budget by unit (€ million)",
      "headers": [
        "Unit",
        "2023",
        "2024",
        "2025"
      ],
      "rows": [
        [
          "Alpha",
          "45",
          "52",
          "60"
        ],
        [
          "Beta",
          "60",
          "55",
          "48"
        ],
        [
          "Gamma",
          "50",
          "50",
          "58"
        ],
        [
          "Delta",
          "40",
          "62",
          "55"
        ]
      ]
    },
    "q": "Which unit received the most money over the three years combined?",
    "options": [
      "Alpha",
      "Beta",
      "Gamma",
      "Delta"
    ],
    "a": 1,
    "expl": "Totals: Alpha 45+52+60 = 157; Beta 60+55+48 = 163; Gamma 50+50+58 = 158; Delta 40+62+55 = 157. Beta is highest even though its budget fell every year. Picking Delta (largest single-year figure, 62) or Alpha (fastest growth) means reading one cell instead of adding the row."
  },
  {
    "id": "nr131",
    "table": null,
    "q": "250 people attend a conference. 60% come from EU institutions and, of those, 40% are national officials on secondment. How many participants are national officials on secondment?",
    "options": [
      "60",
      "90",
      "100",
      "150"
    ],
    "a": 0,
    "expl": "EU institutions: 250 × 0.60 = 150. Of those: 150 × 0.40 = 60. Applying the 40% to all 250 participants (100) uses the wrong base; 90 is 60% of 150, i.e. the two percentages applied in the wrong order."
  },
  {
    "id": "nr132",
    "table": null,
    "q": "The number of applications rose by 25% this year, reaching 45,000. How many applications were there last year?",
    "options": [
      "33,750",
      "35,000",
      "36,000",
      "56,250"
    ],
    "a": 2,
    "expl": "45,000 is 125% of last year's figure: 45,000 / 1.25 = 36,000 (check: 36,000 × 1.25 = 45,000). Taking 25% off this year's figure (45,000 × 0.75 = 33,750) is the reverse-percentage trap."
  },
  {
    "id": "nr133",
    "table": {
      "caption": "Employment rate",
      "headers": [
        "Country",
        "2020",
        "2025"
      ],
      "rows": [
        [
          "A",
          "40.0%",
          "45.0%"
        ],
        [
          "B",
          "71.0%",
          "74.0%"
        ],
        [
          "C",
          "60.0%",
          "66.5%"
        ],
        [
          "D",
          "80.0%",
          "84.0%"
        ]
      ]
    },
    "q": "Which country recorded the largest increase in PERCENTAGE POINTS?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "a": 2,
    "expl": "Changes: A +5.0 pp; B +3.0 pp; C +6.5 pp; D +4.0 pp. C is the largest. A is the trap: its relative rise is bigger (5/40 = 12.5% against C's 6.5/60 = 10.8%), but the question asks for percentage points."
  },
  {
    "id": "nr134",
    "table": null,
    "q": "A supplier grants a 20% trade discount on a €1,500 order and a further 5% for payment within 10 days. What does the buyer pay?",
    "options": [
      "€1,125",
      "€1,140",
      "€1,200",
      "€1,425"
    ],
    "a": 1,
    "expl": "1,500 × 0.80 = 1,200; 1,200 × 0.95 = €1,140. Adding the discounts to 25% and applying them in one step (1,500 × 0.75 = €1,125) is the tempting error — the 5% applies to the already reduced €1,200, not to €1,500."
  },
  {
    "id": "nr135",
    "table": {
      "caption": "Seats in a 720-seat parliament",
      "headers": [
        "Group",
        "Seats"
      ],
      "rows": [
        [
          "Group I",
          "180"
        ],
        [
          "Group II",
          "136"
        ],
        [
          "Group III",
          "79"
        ],
        [
          "Group IV",
          "83"
        ],
        [
          "Others",
          "242"
        ]
      ]
    },
    "q": "What share of the seats do Groups II and III hold together?",
    "options": [
      "18.9%",
      "21.5%",
      "29.9%",
      "35.0%"
    ],
    "a": 2,
    "expl": "136 + 79 = 215 seats. 215 / 720 = 0.2986 = 29.9%. 21.5% simply reads the seat total 215 as a percentage; 18.9% is Group II alone (136/720)."
  },
  {
    "id": "nr136",
    "table": null,
    "q": "An alloy contains copper and zinc in the ratio 7 : 3. How much zinc is needed to make 450 kg of the alloy?",
    "options": [
      "315 kg",
      "192.9 kg",
      "150 kg",
      "135 kg"
    ],
    "a": 3,
    "expl": "7 + 3 = 10 parts; 450 / 10 = 45 kg per part. Zinc = 3 × 45 = 135 kg (copper = 315 kg). Treating the ratio as the fraction 3/7 of the total gives 192.9 kg — the wrong denominator; dividing 450 by 3 gives 150 kg."
  },
  {
    "id": "nr137",
    "table": {
      "caption": "Fuel purchases",
      "headers": [
        "Purchase",
        "Volume",
        "Price per litre"
      ],
      "rows": [
        [
          "January",
          "300 L",
          "€1.60"
        ],
        [
          "February",
          "200 L",
          "€1.85"
        ]
      ]
    },
    "q": "What was the average price paid per litre over the two purchases?",
    "options": [
      "€1.680",
      "€1.700",
      "€1.725",
      "€1.750"
    ],
    "a": 1,
    "expl": "Total cost = 300 × 1.60 + 200 × 1.85 = 480 + 370 = €850 for 500 litres. 850 / 500 = €1.700 per litre. The unweighted mean of 1.60 and 1.85 (€1.725) is the tempting answer — it ignores that more litres were bought at the lower price."
  },
  {
    "id": "nr138",
    "table": {
      "caption": "City",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Population",
          "1,280,000"
        ],
        [
          "Area",
          "320 km²"
        ],
        [
          "Expected population growth",
          "+10%"
        ]
      ]
    },
    "q": "What will the population density be after the expected growth?",
    "options": [
      "4,000 per km²",
      "4,040 per km²",
      "4,400 per km²",
      "44,000 per km²"
    ],
    "a": 2,
    "expl": "Current density = 1,280,000 / 320 = 4,000 per km². After growth: 1,408,000 / 320 = 4,400 per km² (equivalently 4,000 × 1.10). Answering 4,000 ignores the growth; 4,040 adds 10% of 400 instead of 10% of 4,000."
  },
  {
    "id": "nr139",
    "table": {
      "caption": "Sales index",
      "headers": [
        "Year",
        "Index (2020 = 100)"
      ],
      "rows": [
        [
          "2020",
          "100"
        ],
        [
          "2022",
          "125"
        ],
        [
          "2025",
          "150"
        ]
      ]
    },
    "q": "If the series is rebased so that 2022 = 100, what is the 2025 index?",
    "options": [
      "120",
      "125",
      "130",
      "150"
    ],
    "a": 0,
    "expl": "150 / 125 × 100 = 120, i.e. sales grew 20% between 2022 and 2025. Keeping 150 ignores the rebasing; 125 is the old 2022 figure, and reading the 25-point gap as 25% (index 125) is the points-versus-percent trap."
  },
  {
    "id": "nr140",
    "table": null,
    "q": "Two cities are 480 km apart. At 09:00 a train leaves each city towards the other, one at 100 km/h and the other at 140 km/h. At what time do they meet?",
    "options": [
      "11:00",
      "12:26",
      "13:00",
      "13:48"
    ],
    "a": 0,
    "expl": "They close the gap at 100 + 140 = 240 km/h, so 480 / 240 = 2 hours → 11:00. Using the average speed 120 km/h gives 4 h (13:00); using one train only gives 480/140 ≈ 3 h 26 (12:26) or 480/100 = 4 h 48 (13:48)."
  },
  {
    "id": "nr141",
    "table": null,
    "q": "1 mile = 1.609 km. How long is a route of 250 miles in kilometres?",
    "options": [
      "155.4 km",
      "250.0 km",
      "402.3 km",
      "1,609.0 km"
    ],
    "a": 2,
    "expl": "250 × 1.609 = 402.25 ≈ 402.3 km. Dividing instead of multiplying (250 / 1.609 = 155.4) converts kilometres into miles — the conversion applied in the wrong direction."
  },
  {
    "id": "nr142",
    "table": {
      "caption": "Company results",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Units sold",
          "4,000"
        ],
        [
          "Selling price per unit",
          "€18"
        ],
        [
          "Variable cost per unit",
          "€11"
        ],
        [
          "Fixed costs",
          "€21,000"
        ]
      ]
    },
    "q": "What is the profit?",
    "options": [
      "€7,000",
      "€28,000",
      "€51,000",
      "€72,000"
    ],
    "a": 0,
    "expl": "Contribution = 4,000 × (18 − 11) = €28,000. Profit = 28,000 − 21,000 = €7,000. Subtracting only the fixed costs from revenue (72,000 − 21,000 = €51,000) forgets the variable costs; €28,000 stops before the fixed costs."
  },
  {
    "id": "nr143",
    "table": null,
    "q": "A fund has grown by 8% in each of the last two years and is now worth €58,320. What was it worth two years ago?",
    "options": [
      "€48,988.80",
      "€50,000.00",
      "€54,000.00",
      "€68,024.45"
    ],
    "a": 1,
    "expl": "58,320 / 1.08² = 58,320 / 1.1664 = €50,000.00 (check: 50,000 × 1.08 = 54,000; × 1.08 = 58,320). Taking 16% off the current value (58,320 × 0.84 = €48,988.80) is the reverse-percentage trap; €54,000.00 undoes only one year."
  },
  {
    "id": "nr144",
    "table": null,
    "q": "The probability of rain is 30% on Saturday and 30% on Sunday, and the two days are independent. What is the probability that it rains on both days?",
    "options": [
      "60%",
      "51%",
      "30%",
      "9%"
    ],
    "a": 3,
    "expl": "0.30 × 0.30 = 0.09 = 9%. Adding the probabilities (60%) is the classic error — probabilities of independent events are multiplied, not added; 51% is the chance of rain on at least one day (1 − 0.7 × 0.7)."
  },
  {
    "id": "nr145",
    "table": {
      "caption": "Asylum applications, first half of the year",
      "headers": [
        "Month",
        "Applications"
      ],
      "rows": [
        [
          "January",
          "8,400"
        ],
        [
          "February",
          "7,900"
        ],
        [
          "March",
          "9,200"
        ],
        [
          "April",
          "10,100"
        ],
        [
          "May",
          "9,600"
        ],
        [
          "June",
          "8,800"
        ]
      ]
    },
    "q": "In how many months were applications above the six-month monthly average?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "a": 1,
    "expl": "Total = 8,400 + 7,900 + 9,200 + 10,100 + 9,600 + 8,800 = 54,000, so the average is 54,000 / 6 = 9,000. Above it: March 9,200, April 10,100 and May 9,600 → 3 months. Counting June (8,800) as above average — eyeballing instead of computing the mean — gives 4."
  },
  {
    "id": "nr146",
    "table": null,
    "q": "An invoice of €1,380 includes VAT at 20%. How much of it is VAT?",
    "options": [
      "€1,150",
      "€1,104",
      "€276",
      "€230"
    ],
    "a": 3,
    "expl": "Net price = 1,380 / 1.20 = €1,150, so VAT = 1,380 − 1,150 = €230. Taking 20% of the gross amount (1,380 × 0.20 = €276) uses the wrong base — the VAT is 20% of the net price, not of the total."
  },
  {
    "id": "nr147",
    "table": {
      "caption": "Exports (€ million)",
      "headers": [
        "Year",
        "Exports"
      ],
      "rows": [
        [
          "2021",
          "250"
        ],
        [
          "2023",
          "300"
        ],
        [
          "2025",
          "342"
        ]
      ]
    },
    "q": "In which two-year period did exports grow faster in percentage terms?",
    "options": [
      "2021–2023",
      "2023–2025",
      "Both periods grew at the same rate",
      "It cannot be determined from the table"
    ],
    "a": 0,
    "expl": "2021–2023: 50/250 = 20%. 2023–2025: 42/300 = 14%. The first period grew faster. The trap is the similar size of the increases in euros (+50 and +42), which hides the fact that the second rise starts from a larger base."
  },
  {
    "id": "nr148",
    "table": {
      "caption": "Health spending, 2025",
      "headers": [
        "Country",
        "Spending (€ billion)",
        "Population (million)"
      ],
      "rows": [
        [
          "A",
          "48.6",
          "8.1"
        ],
        [
          "B",
          "33.6",
          "4.8"
        ]
      ]
    },
    "q": "How much more does country B spend per inhabitant than country A?",
    "options": [
      "€1,000",
      "€1,163",
      "€6,000",
      "€7,000"
    ],
    "a": 0,
    "expl": "A: 48.6 bn / 8.1 m = €6,000 per inhabitant; B: 33.6 bn / 4.8 m = €7,000. Difference = €1,000. €1,163 divides the €15.0 billion difference in total spending by the combined 12.9 million population — a meaningless mix of the two countries; €6,000 and €7,000 are the levels, not the gap."
  },
  {
    "id": "nr149",
    "table": null,
    "q": "Nominal salaries rose by 6% while consumer prices rose by 2.5%. By what percentage did real (price-adjusted) salaries rise, to one decimal place?",
    "options": [
      "2.4%",
      "3.4%",
      "3.5%",
      "8.5%"
    ],
    "a": 1,
    "expl": "Real change = 1.06 / 1.025 − 1 = 1.0341 − 1 = 0.0341 = 3.4%. Simply subtracting the two rates (6 − 2.5 = 3.5%) is the tempting shortcut: it is close, but it is not exact because the price rise applies to the higher salary."
  },
  {
    "id": "nr150",
    "table": {
      "caption": "Flight",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Departure (local time, Lisbon)",
          "14:20"
        ],
        [
          "Flight time",
          "4 h 45"
        ],
        [
          "Destination time zone",
          "2 hours ahead of Lisbon"
        ]
      ]
    },
    "q": "What is the local arrival time at the destination?",
    "options": [
      "17:05",
      "19:05",
      "21:05",
      "23:05"
    ],
    "a": 2,
    "expl": "14:20 + 4 h 45 = 19:05 Lisbon time; the destination is 2 hours ahead, so local arrival is 21:05. Forgetting the time difference gives 19:05; subtracting it instead of adding gives 17:05."
  },
  {
    "id": "nr151",
    "table": null,
    "q": "A team of 60 people has men and women in the ratio 7 : 5. How many women must join so that there are as many women as men?",
    "options": [
      "5",
      "10",
      "12",
      "15"
    ],
    "a": 1,
    "expl": "7 + 5 = 12 parts; 60 / 12 = 5 people per part. Men = 35, women = 25, so 10 women must join. The gap is 2 parts, i.e. 2 × 5 = 10 people — answering 2 or 5 confuses parts with people."
  },
  {
    "id": "nr152",
    "table": null,
    "q": "The average of 12 test scores is 68. Two scores, 40 and 44, are then removed. What is the average of the remaining 10 scores?",
    "options": [
      "68.0",
      "70.0",
      "73.2",
      "81.6"
    ],
    "a": 2,
    "expl": "Total = 12 × 68 = 816. Removing 40 + 44 = 84 leaves 732 over 10 scores: 732 / 10 = 73.2. Dividing the original total by 10 (816/10 = 81.6) forgets to take the two scores out of the total as well as out of the count."
  },
  {
    "id": "nr153",
    "table": {
      "caption": "Bookshop",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Cost price per book",
          "€48"
        ],
        [
          "Selling price per book",
          "€72"
        ]
      ]
    },
    "q": "What is the profit as a percentage of the SELLING price?",
    "options": [
      "25.0%",
      "33.3%",
      "50.0%",
      "66.7%"
    ],
    "a": 1,
    "expl": "Profit = 72 − 48 = €24. As a share of the selling price: 24 / 72 = 0.333 = 33.3%. The mark-up on cost (24/48 = 50.0%) is the tempting wrong answer, because it uses the cost price as base instead of the selling price."
  },
  {
    "id": "nr154",
    "table": null,
    "q": "The volume of data stored by an agency grows by 15% every year. After how many full years will it have more than doubled?",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "a": 1,
    "expl": "1.15⁴ = 1.749 (not yet double); 1.15⁵ = 2.011 (more than double). So 5 years. Dividing 100% by 15% (≈ 6.7 → 7 years) treats the growth as simple rather than compound and overshoots."
  },
  {
    "id": "nr155",
    "table": {
      "caption": "Results by group (200 candidates)",
      "headers": [
        "Group",
        "Passed",
        "Failed"
      ],
      "rows": [
        [
          "Group A",
          "45",
          "55"
        ],
        [
          "Group B",
          "75",
          "25"
        ]
      ]
    },
    "q": "One candidate is chosen at random from those who passed. What is the probability that the candidate comes from Group B?",
    "options": [
      "37.5%",
      "50.0%",
      "62.5%",
      "75.0%"
    ],
    "a": 2,
    "expl": "Total passes = 45 + 75 = 120. P(Group B | passed) = 75 / 120 = 0.625 = 62.5%. Dividing by all 200 candidates (75/200 = 37.5%) answers a different question — the pool is only those who passed; 75.0% is Group B's own pass rate."
  },
  {
    "id": "nr156",
    "table": {
      "caption": "R&D spending, 2025",
      "headers": [
        "Country",
        "R&D spending (€ million)",
        "GDP (€ billion)"
      ],
      "rows": [
        [
          "A",
          "6,000",
          "300"
        ],
        [
          "B",
          "2,700",
          "150"
        ],
        [
          "C",
          "5,400",
          "240"
        ],
        [
          "D",
          "1,900",
          "95"
        ]
      ]
    },
    "q": "Which country spends the largest share of its GDP on R&D?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "a": 2,
    "expl": "As a share of GDP: A = 6,000/300,000 = 2.00%; B = 2,700/150,000 = 1.80%; C = 5,400/240,000 = 2.25%; D = 1,900/95,000 = 2.00%. C is highest. Picking A is the trap — it spends most in absolute terms but has a bigger economy."
  },
  {
    "id": "nr157",
    "table": {
      "caption": "Regional programme",
      "headers": [
        "Item",
        "Value"
      ],
      "rows": [
        [
          "Total envelope",
          "€960 million"
        ],
        [
          "Share for infrastructure",
          "45%"
        ],
        [
          "Of the infrastructure share, for rail",
          "2/3"
        ]
      ]
    },
    "q": "How much of the envelope goes to rail?",
    "options": [
      "€144 million",
      "€288 million",
      "€432 million",
      "€640 million"
    ],
    "a": 1,
    "expl": "Infrastructure: 960 × 0.45 = €432 million. Rail: 432 × 2/3 = €288 million. Taking 2/3 of the whole envelope (960 × 2/3 = €640 million) skips the 45% step; €432 million is the whole infrastructure share and €144 million the non-rail third."
  },
  {
    "id": "nr158",
    "table": null,
    "q": "Two printers work simultaneously on the same job: one prints 1,200 pages per hour, the other 800. How long do they need for 15,000 pages?",
    "options": [
      "7 hours 30 minutes",
      "12 hours 30 minutes",
      "15 hours",
      "18 hours 45 minutes"
    ],
    "a": 0,
    "expl": "Combined rate = 1,200 + 800 = 2,000 pages per hour. 15,000 / 2,000 = 7.5 h = 7 hours 30 minutes. Using the average rate of 1,000 pages/h gives 15 hours — rates that work in parallel are added, not averaged; 12 h 30 is the fast printer alone."
  },
  {
    "id": "nr159",
    "table": {
      "caption": "Exchange rates",
      "headers": [
        "Pair",
        "Rate"
      ],
      "rows": [
        [
          "Euro / pound",
          "1 EUR = 0.85 GBP"
        ],
        [
          "Euro / dollar",
          "1 EUR = 1.10 USD"
        ]
      ]
    },
    "q": "How many US dollars is one pound sterling worth?",
    "options": [
      "0.77 USD",
      "0.94 USD",
      "1.10 USD",
      "1.29 USD"
    ],
    "a": 3,
    "expl": "1 GBP = 1 / 0.85 = 1.1765 EUR; 1.1765 × 1.10 = 1.294 ≈ 1.29 USD. Dividing the rates the other way round (0.85 / 1.10 = 0.77) or multiplying them (0.85 × 1.10 = 0.94) are the two standard cross-rate slips."
  },
  {
    "id": "nr160",
    "table": {
      "caption": "Departmental budget (€ million)",
      "headers": [
        "Year",
        "Budget"
      ],
      "rows": [
        [
          "2024",
          "12.50"
        ],
        [
          "2025",
          "8% less than 2024"
        ],
        [
          "2026",
          "8% more than 2025"
        ]
      ]
    },
    "q": "What is the budget in 2026?",
    "options": [
      "€11.50 million",
      "€12.42 million",
      "€12.50 million",
      "€12.58 million"
    ],
    "a": 1,
    "expl": "2025: 12.50 × 0.92 = 11.50. 2026: 11.50 × 1.08 = €12.42 million. A cut and a rise of the same percentage do not cancel out, so €12.50 million is wrong — the 8% increase applies to the smaller 2025 figure; €11.50 million stops after the cut."
  }
];
