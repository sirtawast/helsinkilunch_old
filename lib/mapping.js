var restaurants = [
  {
    url: "http://latva.fi/ruoka/lounas/",
    slug: "latva",
    selector: ".menu-list",
  },
  {
    url: "http://ilbirri.fi/lunch/",
    slug: "ilbirri",
    selector: ".lunch-block .row.nested:nth-child(2)",
  },
  {
    url: "http://www.latorre.fi/toimipiste/aleksanterinkatu/lounas/",
    slug: "latorrefazione",
    selector: "#lounas",
  },
  {
    url:  "http://www.ravintolakarljohan.fi/lounas/",
    slug: "karljohan",
    selector: ".menu-wrap",
  },
  {
    url: "http://pompier.fi/albertinkatu/lounas/",
    slug: "pompier",
    selector: ".page-content",
  }
]

var fromMenu = [
  {
    name: "Istanbul Grilli",
  },
  {
    name: "Sushibar+Wine",
  },
  {
    name: "Friends & Burgers",
  },
  {
    name: "Nasty Burger",
  },
  {
    name: "Harju Döner City",
  },
  {
    name: "Pikku-Nepal",
  },
  {
    name: "Primero",
  },
  {
    name: "Hotel Marski",
  },
  {
    name: "Teatteri",
  },
  {
    name: "Tortilla House",
  },
  {
    name: "6k Kamppi",
  },
  {
    name: "Hoku Kamppi",
  },
  {
    name: "Fuku",
  },
  {
    name: "Domo",
  },
  {
    name: "Koto",
  },
  {
    name: "Fuku",
  },
]

module.exports = {
  restaurants: restaurants,
  fromMenu: fromMenu,
}