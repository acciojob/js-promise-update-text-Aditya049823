//your JS code here. If required.
function helper(){
	return new Promise((resolve) =>{
		setTimeout(() =>{
			resolve("Hello, world!");
	},1000)
	});
}

let divElement=document.getElementById("output");
helper().then((result) =>{
	divElement.innerHTML=result;
});