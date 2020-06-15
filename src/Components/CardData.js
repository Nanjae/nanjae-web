const CardData = [
  {
    id: 0,
    term: 3,
    bgColor: "#09F",
    titleText: "타이틀 TITLE 1",
    stringText: "텍스트 TEXT 1",
  },
  {
    id: 1,
    term: 0,
    bgColor: "#18E",
    titleText: "타이틀 TITLE 2",
    stringText: "텍스트 TEXT 2",
  },
  {
    id: 2,
    term: 2,
    bgColor: "#27D",
    titleText: "타이틀 TITLE 3",
    stringText: "텍스트 TEXT 3",
  },
  {
    id: 3,
    term: 1,
    bgColor: "#36C",
    titleText: "타이틀 TITLE 4",
    stringText: "텍스트 TEXT 4",
  },
  {
    id: 4,
    term: 1,
    bgColor: "#45B",
    titleText: "타이틀 TITLE 5",
    stringText: "텍스트 TEXT 5",
  },
  {
    id: 5,
    term: 2,
    bgColor: "#54A",
    titleText: "타이틀 TITLE 6",
    stringText: "텍스트 TEXT 6",
  },
  {
    id: 6,
    term: 0,
    bgColor: "#639",
    titleText: "타이틀 TITLE 7",
    stringText: "텍스트 TEXT 7",
  },
  {
    id: 7,
    term: 2,
    bgColor: "#728",
    titleText: "타이틀 TITLE 8",
    stringText: "텍스트 TEXT 8",
  },
  {
    id: 8,
    term: 0,
    bgColor: "#817",
    titleText: "타이틀 TITLE 9",
    stringText: "텍스트 TEXT 9",
  },
  {
    id: 9,
    term: 3,
    bgColor: "#906",
    titleText: "타이틀 TITLE 10",
    stringText: "텍스트 TEXT 10",
  },
  {
    id: 10,
    term: 2,
    bgColor: "#AF5",
    titleText: "타이틀 TITLE 11",
    stringText: "텍스트 TEXT 11",
  },
  {
    id: 11,
    term: 3,
    bgColor: "#BE4",
    titleText: "타이틀 TITLE 12",
    stringText: "텍스트 TEXT 12",
  },
  {
    id: 12,
    term: 4,
    bgColor: "#CD3",
    titleText: "타이틀 TITLE 13",
    stringText: "텍스트 TEXT 13",
  },
  {
    id: 13,
    term: 1,
    bgColor: "#DC2",
    titleText: "타이틀 TITLE 14",
    stringText: "텍스트 TEXT 14",
  },
  {
    id: 14,
    term: 0,
    bgColor: "#EB1",
    titleText: "타이틀 TITLE 15",
    stringText: "텍스트 TEXT 15",
  },
  {
    id: 15,
    term: 4,
    bgColor: "#FA0",
    titleText: "타이틀 TITLE 16",
    stringText: "텍스트 TEXT 16",
  },
  {
    id: 16,
    term: 1,
    bgColor: "#09F",
    titleText: "타이틀 TITLE 17",
    stringText: "텍스트 TEXT 17",
  },
  {
    id: 17,
    term: 3,
    bgColor: "#18E",
    titleText: "타이틀 TITLE 18",
    stringText: "텍스트 TEXT 18",
  },
  {
    id: 18,
    term: 2,
    bgColor: "#27D",
    titleText: "타이틀 TITLE 19",
    stringText: "텍스트 TEXT 19",
  },
  {
    id: 19,
    term: 3,
    bgColor: "#36C",
    titleText: "타이틀 TITLE 20",
    stringText: "텍스트 TEXT 20",
  },
  {
    id: 20,
    term: 4,
    bgColor: "#45B",
    titleText: "타이틀 TITLE 21",
    stringText: "텍스트 TEXT 21",
  },
];

export const getSortedCardData = (term) => {
  const termCardData = CardData.filter((x) => x.term === term);
  const otherCardData = CardData.filter((x) => x.term !== term);
  const sortedCardData = termCardData.concat(otherCardData);
  return sortedCardData;
};

export default CardData;
