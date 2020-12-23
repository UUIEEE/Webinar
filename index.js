

dc=document;
function bdy(){gb();}

function gto(a)
{
	window.open(a,'_blank');
}

function gb(a="pmt")
{
	let r=dc.getElementById(a).style.display;
	dc.getElementById(a).style.display=r=="none"?"block":"none";
}
