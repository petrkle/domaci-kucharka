document.addEventListener('DOMContentLoaded',function() {
	if(document.querySelector('input[id="q"]')){
    document.querySelector('input[id="q"]').onkeyup=vyhledavani;
	}

	nadpis = document.querySelector('h1');
	var img = document.createElement("img");
	img.src = "s.svg";
	img.id = "lupa";
	img.onclick = function (){showsearchform()};
	nadpis.appendChild(img);

},false);

function showsearchform(){
	nadpis = document.querySelector('h1');
	nadpis.innerHTML = '<input type="text" id="q" autocomplete="off" />';
  document.querySelector('input[id="q"]').onkeyup=vyhledavani;
	document.getElementById("q").focus();
	nadpis = document.querySelector('h1');
	var ul = document.createElement("ul");
	ul.id = "vysledky";
	nadpis.parentNode.insertBefore( ul, nadpis.nextSibling );
}

function vyhledavani(event){
	var query = event.target.value;
	var spojka = /_/gi;
	var limit = 100;
	var nalezeno = 0;
	var vysledky = [];

	for (const kapitola in recepty) {
		let value = recepty[kapitola];
		for( const recept in recepty[kapitola]){
			let nazev = recepty[kapitola][recept];
			var re = new RegExp('.*'+query+'.*', 'gi');
			var kotva =  recept.replace(spojka, '-');
			var kotvasmezerou =  recept.replace(spojka, ' ');
			var dokument =  kapitola.replace(spojka, '-')+'.html';
			var vnazvu = nazev.match(re);
			var vkotve = kotva.match(re);
			var vkotvesmezerou = kotvasmezerou.match(re);
			if(vnazvu || vkotve || vkotvesmezerou){
				if(nalezeno<limit){
					vysledky.push({nazev: nazev, kotva: kotva, dokument: dokument});
				}
				nalezeno++;
			}
		}
	}


	var seznam = '';
	for(var foo=0; foo<vysledky.length; foo++){
		seznam = seznam + '<li><a href="' + vysledky[foo].dokument + '#' + vysledky[foo].kotva + '">' + vysledky[foo].nazev + '</a></li>';
	}
	document.getElementById("vysledky").innerHTML = seznam;

}
