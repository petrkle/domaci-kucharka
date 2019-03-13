var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

var bookmarks = [];

if (localStorage.getItem('bookmarks') != null) {
	bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
}


if(filename == 'index.html'){

for(var i=0; i<bookmarks.length; i++){

	ul = document.getElementsByTagName("ul");
	seznam = document.getElementsByTagName("li");

		var li = document.createElement("li");
		li.className = "bookmark";
		var a = document.createElement("a");
		a.href = bookmarks[i].filename+'#'+bookmarks[i].kotva;
		a.textContent = bookmarks[i].nadpis;
		a.className = "bm";

		li.appendChild(a);

		ul[0].insertBefore(li,seznam[0]);

	}

}else{

var nadpisy = document.getElementsByTagName("h2");

for(var i=0; i<nadpisy.length; i++){

	var name =  nadpisy[i].parentNode.getAttribute("id");

	for(var j=0; j<bookmarks.length; j++){
		if(name == bookmarks[j].kotva){
			nadpisy[i].className = "bookmark";
		}
	
	}

	if(nadpisy[i].className == "bookmark"){

		nadpisy[i].parentNode.addEventListener('click', function(e) {
			var nadpis = e.target.textContent;
			var kotva = e.target.parentNode.getAttribute("id");
			var recept = { nadpis: nadpis, filename: filename, kotva: kotva };

			e.target.className = "";

			for(var foo=0; foo<bookmarks.length; foo++){
				if(bookmarks[foo].kotva == kotva && bookmarks[foo].filename == filename){
					bookmarks.splice(foo, 1);
				}
			}
			
			localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
			location.reload(true);
		});

	}else{

  	nadpisy[i].parentNode.addEventListener('click', function(e) {
		var nadpis = e.target.textContent;
		var kotva = e.target.parentNode.getAttribute("id");
		var recept = { nadpis: nadpis, filename: filename, kotva: kotva };

		e.target.className = "bookmark";

		var pridano = false;

		for(var foo=0; foo<bookmarks.length; foo++){
			if(bookmarks[foo].kotva == kotva && bookmarks[foo].filename == filename){
				pridano = true;
			}
		}

		if(!pridano){
			bookmarks.push(recept);
		}
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
		location.reload(true);
	});

	}
}

}
