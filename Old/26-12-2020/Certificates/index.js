

dc=document;
bdy=()=>{}
gto=a=>{window.open(a,'_blank')}
gebi=(a)=>{return dc.getElementById(a)}
hsh=(s="")=>{
	let i=h=0
	for(;i<s.length;++i)
		h+=s.charCodeAt(i)-32
	return s.substr(0,2)+h
}
cer=()=>
{
	let s=gebi("w").value
	console.log(s)
	if(s.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i))
	{
		s=hsh(s.toLowerCase())
		console.log(s)
		if(['me1136','in1692','pr1943','ma1280','dh1461','ma1690','ak1580','ga1503','pr1804','aa1555','ab1795','mn1003','ak1749','ak1315','1t1479','ka1478','su1422','mu1827','sa1230','ya1640','sp934','ra1779','ku1380','vi1958','ar1488','sk930','ma1351','ak1579','pr1600','ni1509','ra1511','sa1579','ga1785','ro1386','rk1399','281267','sa1785','mi1344','sk910','ri1433','gk875','aa1545','ra1264','am1285','pr1728','js929','am1436','as1359'].includes(s))
			saveAs("https://uuieee.github.io/Webinar/Old/26-12-2020/Certificates/"+s+".png","Certificate.png")
		else alert("Email ID not registered contact on email ID provided at bottom of page")
	}
	else alert("Invalid Email id format please check entered email ID")
}