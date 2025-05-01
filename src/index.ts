import Director from "./Director";
import GamingPCBuilder from "./GamingPCBuilder";
import OfficePCBuilder from "./OfficePCBuilder";
import BudgetPCBuilder from "./BudgetPCBuilder";

const director = new Director();

// Game համակարգիչ
const gamingBuilder = new GamingPCBuilder();
director.setBuilder(gamingBuilder);
director.constructGamingPC();
const gamePC = gamingBuilder.getResult();
console.log("Gaming PC:", gamePC);

// Office համակարգիչ
const officeBuilder = new OfficePCBuilder();
director.setBuilder(officeBuilder);
director.constructOfficePC();
const officePC = officeBuilder.getResult();
console.log("Office PC:", officePC);

// Budget PC
const budgetBuilder = new BudgetPCBuilder();
director.setBuilder(budgetBuilder);
director.constructOfficePC();
const budgetPC = officeBuilder.getResult();
console.log("Office PC:", budgetPC);