console.log("-----Lifer Start-----");
console.log("*****Audit Area******");

const MainCategories = ["Home", "Self", "Side Project"];

const category = Math.floor(Math.random() * MainCategories.length);
console.log(`MainCategory: ${MainCategories[category]}`);

const HomeItems = ["Venesa", "Rex", "Raine", "All", "Home Improvement"];

const homeItem = Math.floor(Math.random() * HomeItems.length);
console.log(`Home: ${HomeItems[homeItem]}`);

const SelfItems = [
  "Piano",
  //"Bridge",
  "Poker",
  "Read",
  "Exercise",
];

const selfItem = Math.floor(Math.random() * SelfItems.length);
console.log(`Self: ${SelfItems[selfItem]}`);

const SideProjectItems = [
  //"Pheno-Hub",
  //"Kandan",
  //"NP-P",
  //"Builder-Book",
  //"Interplan",
  //"Opensource",
  //"Poker",
  "Damn Interesting",
  "Predict Market",
];
const sideProjectItem = Math.floor(Math.random() * SideProjectItems.length);
console.log(`Side Project: ${SideProjectItems[sideProjectItem]}`);
console.log("*********************");

switch (category) {
  case 0:
    console.log(`${MainCategories[category]}: ${HomeItems[homeItem]}`);
    break;
  case 1:
    console.log(`${MainCategories[category]}: ${SelfItems[selfItem]}`);
    break;
  case 2:
    console.log(
      `${MainCategories[category]}: ${SideProjectItems[sideProjectItem]}`
    );
    break;
  default:
    console.log("Somethings' wrong");
    break;
}

console.log("-----Lifer End  ------");
