var magok=
[
    {
        kep:"./kep/mag/mag1.jpg",
        nev:"Árvácska Sárga",
        s:"1",
        ar:"313",
    },
    {

        kep:"./kep/mag/mag2.jpg",
        nev:"Articsóka",
        s:"2",
        ar:"313",
    },
    {

        kep:"./kep/mag/mag3.jpg",
        nev:"Amaryllis Pink",
        s:"300",
        ar:"1 460",
    },
    {

        kep:"./kep/mag/mag4.jpg",
        nev:"Allium Sziklakerti színkeverék díszhagyma",
        s:"200",
        ar:"800",
    },
];

for (var adat1 of magok) 
{
    
    
    document.getElementById("magok").innerHTML+=
     `
    <div class="col">
        <div class="card h-100" style="background-color:olive">
            <img src="${adat1.kep}" class="card-img-top" alt="${adat1.nev} kép">
            <div class="card-body">
                <h5 class="card-title">${adat1.nev}</h5>
                <p class="card-text">
                    súly: ${adat1.s} g<br>
                    ár: ${adat1.ar} Ft 
                </p>
                <a class="btn btn-light" style="background-color: #4b6b2f;color:white">Kosárba</a>
            </div>
        </div>
    </div>
    `;
    
}