dc=document;
bdy=()=>{gb();bg()}
gto=a=>{window.open(a,'_blank')}
gb=(a="pmt")=>{
	let r=dc.getElementById(a).style.display;
	gebi(a).style.display=r=="none"?"block":"none";
}
gebi=(a)=>{return dc.getElementById(a)}
bg=()=>{
	var c = new Date("Dec 26, 2020 14:00:00").getTime();
	var x = setInterval(()=>{
		var now = new Date().getTime();
		var d = c-now;
		var days = Math.floor(d/(1000*60*60*24));
		var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
		var minutes = Math.floor((d%(1000*60*60))/(1000*60));
		var seconds = Math.floor((d%(1000*60))/1000);
		gebi("dT").innerHTML = '('+days + "d " + hours + "h " + minutes + "m " + seconds + "s)";
		if(d<0)
		{
			gebi("dT").innerHTML = "Started";
			clearInterval(x);
			gebi("l").title="Click to join Webinar";
		}
	}, 1000);
}
