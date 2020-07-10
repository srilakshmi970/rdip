function add(a,b)
{
a=parseInt(a);
b=parseInt(b);
return "Addition is "+(a+b);
}
function sub(a,b)
{
a=parseInt(a);
b=parseInt(b);
return "Subtraction is "+(a-b);
}
function mul(a,b)
{
a=parseInt(a);
b=parseInt(b);
return "Multiplication is "+a*b;
}
function div(a,b)
{
a=parseInt(a);
b=parseInt(b);
return "Division is "+a/b;
}
function percent(a,b)
{
a=parseInt(a);
b=parseInt(b);
return a+" % "+b+" = " +(a/100)*b;
}
function mod(a,b)
{
a=parseInt(a);

return "Absolute value of a is "+Math.abs(a);
}
function sqrt(a)
{
	a=parseInt(a);
	if(a<0)
	{
		return "Enter valid Number"
	}
	x=Math.sqrt(a);
	y=Math.sqrt(b);
	if(x%1 === 0 )
	{
	return "Square Root of a is "+x;

}
else 
return "Square Root of a is "+x.toFixed(3);

}
function pow(a,b)
{
a=parseInt(a);
b=parseInt(b);
return "Power is "+Math.pow(a,b)
}
//end of Calculator functions
//end of task1

//Form-Validation
//task2
function verify(form)
{
	valid=false;
	var name=document.forms[0].elements[0].value;
	var email=document.forms[0].elements[1].value;
	var phn=document.forms[0].elements[7].value;
	var pass=document.forms[0].elements[2].value;
	var text=document.forms[0].elements[6].value;
	var nir=new RegExp("^[a-z|_][a-z0-9]*$");
	var eir=new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"); 
	var phnr=new RegExp("^[\\d]+$","g");
	if(document.forms[0].elements[0].value=="")
	{
		alert("Please Enter name");
		return false;
	}
	if(name.match(nir))
	{
		valid=true;

	}
	else
	{
alert("Name cannot start with a Number");
return false;
}
if(pass=="")
	{
		alert("Please Enter Password");
		return false;
	}
	if(text=="")
	{
		alert("Please Enter Description");
		return false;
	}
	if(email=="")
	{
		alert("Please enter E-Mail-ID");
		return false;
	}
	if(email.match(eir)) 
{ 
valid=true; 
} 
else
{
alert("Enter email id correctly");
return false;
}
if(phn=="")
	{
		alert("Please enter PhoneNumber");
		return false;
	}
if(phn.match(phnr)) 
{ 
valid=true; 

} 
else 
{ 
alert("Enter a valid phone number"); 
return(false); 
} 
if(phn.length < 10) 
{ 
alert("Phone number should contain atleast 10 digits"); 

return false; 
} 
if(document.getElementById("m").checked==true||document.getElementById("f").checked==true||document.getElementById("o").checked==true)
{
	valid=true;
}
else
{
	alert("Please select gender");
	return false;
}
}
//end of task2
//end of Form-Validation function

//Palindrome/not
//task3
function palindrome( text)
{

if(text.length>2)
{

 str1=text.split("").reverse().join("");

 if(text==str1)
 {
 	return true;
 }
else
{
	return false;
}
}
else
{
	return false;
}
}
//end of palindrome
//anagram function
function anagram(txt1,txt2)
{
	 var length1 = txt1.split(' ').length-1;
	 length1=parseInt(length1)
	 i=length1
	  var length2 = txt2.split(' ').length-1;
	  length2=parseInt(length2)
	  j=length2

if(txt1==txt2)
{
return true;
}

else 
{

var newstr1 = txt1.toLowerCase().split("").sort().join();

 var newstr2 = txt2.toLowerCase().split("").sort().join();

if(length1 >1 && length1==i)
{
	n1=newstr1.slice(i+2);

}
else if(length1==1 && length1==i)
{
	n1=newstr1.slice(i+1);
}
else
{
	n1=newstr1
}

 if(length2>1 && length2==j)
{
	n2=newstr2.slice(j+2);

}
else if(length2==1 && length2==j)
{
	n2=newstr2.slice(j+1);
}
else
{
	n2=newstr2;
}

 if(n1 == n2){
    return (true);
  }
  else{
    return (false);
  }
}
}
//end of anagram 
//end of task3

//game task
//task4
function text1()
{
	var gen=Math.floor(Math.random()*(1000-1))
	document.getElementById("t1").value=gen;
	return gen;

}
function text2()
{
	var gen1=Math.floor(Math.random()*(1000-1))
	document.getElementById("t2").value=gen1;
	return gen1;

}
function gamecheck(x,y)
{
  x=x%10;
  y=y%10;
  var map1 = new Map([[0,1],[1,1],[2,2],[3,3],[4,1],[5,1],[6,2],[7,2],[8,3],[9,3]]);
  x1=map1.get(x);
  y1=map1.get(y);

  var map = new Map([[1,"Human"],[2,"Cockroach"],[3,"Nuclear Bomb"],[4,"Tie"]]);

  if(x1==3 && y1==3 || x1==1 && y1==1 || x1==2 && y1==2)
  {
  	if(x1==1 && y1==1)
  	{
  		document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(1);
  	return "Offo!!"+(map.get(4));
  }
  if(x1==2 && y1==2)
  	{
  		document.getElementById("h2").innerHTML=map.get(2)+" Vs "+map.get(2);
  	return "Offo!!"+(map.get(4));
  }
  if(x1==3 && y1==3)
  	{
  		document.getElementById("h2").innerHTML=map.get(3)+" Vs "+map.get(3);
  	return "Offo!!"+(map.get(4));
  }
  }
  else if(x1==1 && y1==2 || x1==2 && y1==1)
  {
  	document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(2);
  	return "The winner is "+(map.get(1));
  }
   else if(x1==2 && y1==3 || x1==3 && y1==2)

  {
  	document.getElementById("h2").innerHTML=map.get(2)+" Vs "+map.get(3);
  	return "The winner is "+(map.get(2));
  }
   else if(x1==1 && y1==3 || x1==3 && y1==1)

  {
  	 	document.getElementById("h2").innerHTML=map.get(1)+" Vs "+map.get(3);
  	return "The winner is "+(map.get(3));
  }

}
//end of game check
//end of task4

//task5-bonus
function convert()
{
	var from=document.getElementById("from").value;

	var to=document.getElementById("to").value;


	var xmlhttp=new XMLHttpRequest();
	var url="https://free.currconv.com/api/v7/convert?q="+from+"_"+to+"&compact=ultra&apiKey=ecd96f38ab9cbbe978b7";


	xmlhttp.open("GET",url,true)
	xmlhttp.send();
	xmlhttp.onreadystatechange=function()
	{
		var amt=document.getElementById("t1").value;
		if(xmlhttp.readyState ==  4 && xmlhttp.status==200)
		{
			var result=xmlhttp.responseText;

			var jsResult=JSON.parse(result);
		for (x in jsResult) {
     document.getElementById("t2").value=(jsResult[x]*amt).toFixed(3)
  }

		}
	}
}