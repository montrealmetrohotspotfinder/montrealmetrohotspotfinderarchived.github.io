function init()
{
	hnames = [ "Institut de Tourisme et d&#39;H&ocirc;tellerie du Qu&eacute;bec", "H&ocirc;tel de l&#39;ITHQ", "Parc La Fontaine", "Square Saint-Louis", "Auberge du Carr&eacute; Saint-Louis", 
	"Th&eacute;&acirc;tre d&#39;Aujourd&#39;hui", "Th&eacute;&acirc;tre de Quat&#39;Sous", "Th&eacute;&acirc;tre La Chappelle", "Les R&eacute;sidences Soleil Manoir Plaza",
	"Gare d&#39;Autocars de Montr&eacute;al", "Quartier Latin", "Champlain College (Vermont), campus Montr&eacute;al", "Parc Jehane-Beno&icirc;t", "Parc J.-Z.-L&eacute;on-Patenaude", "C&eacute;gep du Vieux Montr&eacute;al" ];
	
	htypes = [ "Universit&eacute;", "H&ocirc;tel", "Parc", "Place de la Ville", "H&ocirc;tel", "Th&eacute;&acirc;tre", "Th&eacute;&acirc;tre", "Th&eacute;&acirc;tre", "R&eacute;sidence", "Terminus d&#39;Autobus", "District", "Coll&egrave;ge", "Parc", "Parc", "Coll&egrave;ge" ];
	
	haddresses = [ "3535 Rue Saint-Denis", "3535 Rue Saint-Denis", "3819 Avenue Calixa-Lavall&eacute;e", "", "3466 Rue Saint-Denis", "3900 Rue Saint-Denis", "100 Avenue des Pins Est", "3700 Rue Saint-Dominique",
	"505 Rue Sherbrooke Est", "1717 Rue Berri", "", "525 Rue Sherbrooke Est", "", "", "255 Rue Ontario Est" ];
	
	hsites = [ "https://www.ithq.qc.ca/institut/", "http://www.ithq.qc.ca/hotel/", "https://montreal.ca/lieux/parc-la-fontaine", "https://montreal.ca/lieux/square-saint-louis", "https://aubergecarrestlouis.com/Accueil",
	"https://www.theatredaujourdhui.qc.ca/", "https://www.quatsous.com/", "https://lachapelle.org/fr", "https://residencessoleil.ca/liste-des-residences-soleil/manoir-plaza", "http://www.gamtl.com/fr/bienvenue/default.aspx", 
	"http://www.quartierlatin.ca/fr/", "https://montreal.champlain.edu/", "https://montreal.ca/lieux/parc-jehane-benoit", "https://montreal.ca/lieux/parc-j-z-leon-patenaude", "http://www.cvm.qc.ca/Pages/index.aspx" ];
	
	if(hnames.length == 1){
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><em lang=\"fr\"><b>"+hnames.length+ " point d&#39;int&eacute;r&ecirc;t est &agrave; proximit&eacute; de cette station.</b></em></span><br/><br/>";
	}
	else {
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><em lang=\"fr\"><b>"+hnames.length+ " points d&#39;int&eacute;r&ecirc;t sont &agrave; proximit&eacute; de cette station.</b></em></span><br/><br/>";
	}
	
	for (var i=0; i<hnames.length; i++)
	{
		if (hsites[i] == "#")
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + hnames[i] 
			+ "</td><td>" + htypes[i] 
			+ "</td><td>" + haddresses[i] 
			+ "</td><td>" + "Aucun site Web disponible</td></tr></li>";
		}
		else
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + hnames[i] 
			+ "</td><td>" + htypes[i] 
			+ "</td><td>" + haddresses[i] 
			+ "</td><td>" + "<a href=\"" + hsites[i] + "\">Site Web</a></td></tr></li>";
		} 	
	}
}

window.onload = init;
var hnames, htypes, haddresses, hsites;