const categories = [
  { value: "General Knowledge", label: "General Knowledge" },
  { value: "Entertainment: Books", label: "Entertainment: Books" },
  { value: "Entertainment: Film", label: "Entertainment: Film" },
  { value: "Entertainment: Music", label: "Entertainment: Music" },
  {
    value: "Entertainment: Musicals & Theatres",
    label: "Entertainment: Musicals & Theatres",
  },
  { value: "Entertainment: Television", label: "Entertainment: Television" },
  { value: "Entertainment: Video Games", label: "Entertainment: Video Games" },
  { value: "Entertainment: Board Games", label: "Entertainment: Board Games" },
  { value: "Science & Nature", label: "Science & Nature" },
  { value: "Science: Computers", label: "Science: Computers" },
  { value: "Science: Mathematics", label: "Science: Mathematics" },
  { value: "Mythology", label: "Mythology" },
  { value: "Sports", label: "Sports" },
  { value: "Geography", label: "Geography" },
  { value: "History", label: "History" },
  { value: "Politics", label: "Politics" },
  { value: "Art", label: "Art" },
  { value: "Celebrities", label: "Celebrities" },
  { value: "Animals", label: "Animals" },
  { value: "Vehicles", label: "Vehicles" },
  { value: "Entertainment: Comics", label: "Entertainment: Comics" },
  { value: "Science: Gadgets", label: "Science: Gadgets" },
  {
    value: "Entertainment: Japanese Anime & Manga",
    label: "Entertainment: Japanese Anime & Manga",
  },
  {
    value: "Entertainment: Cartoon & Animations",
    label: "Entertainment: Cartoon & Animations",
  },
];

let firstId = 9;

for (let i = 0; i < categories.length; i++) {
  categories[i].value = firstId++;
}

const difficulty = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const type = [
  { value: "multiple", label: "Multiple Choice" },
  { value: "boolean", label: "True/False" },
];
const number = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];

export { categories, difficulty, type, number };
