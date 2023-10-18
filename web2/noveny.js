var novenyek=
[
    {
        kep:"./kep/nov/nov1.jpg",
        nev:"Anyósnyelv",
        m:"12",
        ar:"3.990"
    },
    {
        kep:"./kep/nov/nov2.jpg",
        nev:"Fikusz robusta",
        m:"35",
        ar:"2.190",
    },
    {
        kep:"./kep/nov/nov3.jpg",
        nev:"Jukka",
        m:"62",
        ar:"10.900",
    },
    {
        kep:"./kep/nov/nov4.jpg",
        nev:"Kúszó kecskerágó",
        m:"29",
        ar:"1.790",
    },
    {
        kep:"./kep/nov/nov5.jpg",
        nev:"Agglegénypálma",
        m:"14",
        ar:"4.290",
    },
    {
        kep:"./kep/nov/nov6.jpg",
        nev:"Szoba Páfrány",
        m:"12",
        ar:"1.990",
    }
];

for (var adat2 of novenyek) 
{ 
    document.getElementById("noveny").innerHTML+=
    `
    <div class="col">
        <div class="card h-100" style="background-color:olive">
            <img src="${adat2.kep}" class="card-img-top" alt="${adat2.nev} kép">
            <div class="card-body">
                <h5 class="card-title">${adat2.nev}</h5>
                <p class="card-text">
                    magasság:${adat2.m} cm<br>
                    ár:${adat2.ar} Ft
                </p>
                <a class="btn btn-light" style="background-color: #4b6b2f;color:white" >Kosárba</a>
            </div>
        </div>
    </div>
    `;
}
