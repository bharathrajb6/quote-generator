	let quotes=[
	"The greatest glory in living lies not in never falling, but in rising every time we fall.",
	"The way to get started is to quit talking and begin doing.",
	"If life were predictable it would cease to be life, and be without flavor.",
	"Life is what happens when you're busy making other plans.",
	"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
	"Always remember that you are absolutely unique. Just like everyone else.",
	"The future belongs to those who believe in the beauty of their dreams.",
	"Whoever is happy will make others happy too.",
	"It is during our darkest moments that we must focus to see the light.",
	"Tell me and I forget. Teach me and I remember. Involve me and I learn."]
	let r=Math.floor(Math.random() * 10);
	function getQuote()
	{
		let r=Math.floor(Math.random() * 10);
		let quote=document.getElementById("quote");
		quote.innerHTML="\" "+quotes[r]+ " \"";
		quote.style.border="2px solid #111";
	}