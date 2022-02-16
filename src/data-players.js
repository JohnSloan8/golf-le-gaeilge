let players = [
  {
    firstName: "John",
    surname: "Sloan",
    homeCourse: "Stackstown",
    handicap: "7.0",
    IrishLevel: "bronze"
  },
  {
    firstName: "Brian",
    surname: "Manners",
    homeCourse: "Grange",
    handicap: "9.9",
    IrishLevel: "gold"
  },
  {
    firstName: "Aogán",
    surname: "Nílisagam",
    homeCourse: "Druid's Glen",
    handicap: null,
    IrishLevel: "gold"
  },
  {
    firstName: "Garett",
    surname: "Sweeney",
    homeCourse: "Stackstown",
    handicap: 5.5,
    IrishLevel: "gold"
  }
]

export function getPlayersByCourse(course) {
  return players.filter(
    player => player.homeCourse === course
  );
}