dc=document;
bdy=()=>{gb()}
gto=a=>{window.open(a,'_blank')}
gb=(a="pmt")=>{
	let r=dc.getElementById(a).style.display;
	dc.getElementById(a).style.display=r=="none"?"block":"none";
}
