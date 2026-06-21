
let cases=[];
let chart;

function addCase(){

const criminalName=document.getElementById("criminalName").value;
const crimeType=document.getElementById("crimeType").value;
const officerName=document.getElementById("officerName").value;
const description=document.getElementById("description").value;

cases.push({
criminalName,
crimeType,
officerName,
description
});

updateUI();
}

function updateUI(){

document.getElementById("totalCases").innerText=cases.length;
document.getElementById("openCases").innerText=cases.length;

const records=document.getElementById("records");
records.innerHTML="";

let stats={};

cases.forEach(c=>{

stats[c.crimeType]=(stats[c.crimeType]||0)+1;

records.innerHTML+=`
<div class="record">
<h3>${c.criminalName}</h3>
<p>Crime: ${c.crimeType}</p>
<p>Officer: ${c.officerName}</p>
<p>${c.description}</p>
</div>
`;

});

drawChart(stats);
}

function drawChart(stats){

const ctx=document.getElementById("crimeChart");

if(chart){
chart.destroy();
}

chart=new Chart(ctx,{
type:"bar",
data:{
labels:Object.keys(stats),
datasets:[{
label:"Cases",
data:Object.values(stats)
}]
}
});

}
