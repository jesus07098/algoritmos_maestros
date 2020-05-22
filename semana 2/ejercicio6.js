let i=0; 
let sales= [];
let week=[];
let total=[];

while(i<10){
    sales.push(Number(prompt(`Type seller sale number, Employee number: ${i+1}`)));
    week.push(Number(prompt(`How many weeks did you work??, Employee number: ${i+1}`)));
    total.push(Math.floor(sales[i]/20000,-1)*(20000*0.06)+(week[i]*500));
    i++;
}
console.log(total.sort((a,b)=> (b-a)));