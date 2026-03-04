const businesses = [
{name:"Mama J's Kitchen",city:"Richmond",category:"Food",rating:4.8},
{name:"The Roosevelt",city:"Richmond",category:"Food",rating:4.6},
{name:"River City CrossFit",city:"Richmond",category:"Fitness",rating:4.7},
{name:"Fadez Barbershop",city:"Richmond",category:"Barbershop",rating:4.5},
{name:"804 Auto Repair",city:"Richmond",category:"Automotive",rating:4.6},
{name:"Tech on Demand RVA",city:"Richmond",category:"Tech",rating:4.9},
{name:"Three Ships Coffee",city:"Virginia Beach",category:"Food",rating:4.6},
{name:"Coastal Fitness",city:"Virginia Beach",category:"Fitness",rating:4.5},
{name:"VB Clippers",city:"Virginia Beach",category:"Barbershop",rating:4.4},
{name:"Beachside Auto",city:"Virginia Beach",category:"Automotive",rating:4.3},
{name:"Norfolk Running Co.",city:"Norfolk",category:"Retail",rating:4.6},
{name:"Doumar's Cones & Barbecue",city:"Norfolk",category:"Food",rating:4.4},
{name:"Roanoke Strength Gym",city:"Roanoke",category:"Fitness",rating:4.5},
{name:"Scratch Biscuit Company",city:"Roanoke",category:"Food",rating:4.6},
{name:"Cville Tech Solutions",city:"Charlottesville",category:"Tech",rating:4.8},
{name:"Bodo's Bagels",city:"Charlottesville",category:"Food",rating:4.8}
];

function renderBusinesses(){
const list = document.getElementById("businessList");
const search = document.getElementById("searchBar").value.toLowerCase();
const city = document.getElementById("cityFilter").value;
const category = document.getElementById("categoryFilter").value;
const sort = document.getElementById("sortFilter").value;

list.innerHTML="";

let filtered = businesses.filter(b =>
(b.name.toLowerCase().includes(search)) &&
(city==="All" || b.city===city) &&
(category==="All" || b.category===category)
);

if(sort==="rating"){
filtered.sort((a,b)=>b.rating-a.rating);
} else {
filtered.sort((a,b)=>a.name.localeCompare(b.name));
}

filtered.forEach((b,index)=>{
const card=document.createElement("div");
card.className="card";
if(index===0) card.classList.add("featured");

card.innerHTML=`
<h3>${b.name}</h3>
<p><strong>City:</strong> ${b.city}</p>
<p><strong>Category:</strong> ${b.category}</p>
<p><strong>Rating:</strong> ⭐ ${b.rating}</p>
<span class="badge">Support Local</span>
`;
list.appendChild(card);
});

recommend();
}

function recommend(){
const rec = document.getElementById("recommendation");
let top = [...businesses].sort((a,b)=>b.rating-a.rating)[0];
rec.innerHTML=`<div style="text-align:center;padding:20px;">
<h2 style="color:#5A2D82;font-family:Montserrat;">Top Rated in Virginia</h2>
<p><strong>${top.name}</strong> ⭐ ${top.rating}</p>
</div>`;
}

renderBusinesses();
