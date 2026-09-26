import "./style.css";

const collections=[
{title:"Little Bloom",tag:"Girls • 0–8 years",image:"https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85",tone:"peach"},
{title:"Tiny Gentleman",tag:"Boys • 2–10 years",image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",tone:"lavender"},
{title:"Weekend Stories",tag:"Casual • Everyday",image:"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",tone:"yellow"}];

const looks=[
["Sunday Picnic","Girls • Dresses","https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?auto=format&fit=crop&w=700&q=85"],
["Little Explorer","Boys • Casual","https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=85"],
["Festive Joy","Girls • Occasion","https://images.unsplash.com/photo-1604917019110-5c2f4f5a4f3a?auto=format&fit=crop&w=700&q=85"],
["Easy Days","Boys • Shirts","https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=85"]];

const categories=[
["Girls","0–15 years","✿","cat-girls"],["Boys","0–15 years","✦","cat-boys"],
["New Arrivals","Fresh this week","♡","cat-new"],["Occasion Wear","Little celebrations","◌","cat-party"]];

const categoryHTML=categories.map((c)=>'<a href="#collections" class="category-card '+c[3]+'"><span class="category-icon">'+c[2]+'</span><div><h3>'+c[0]+'</h3><p>'+c[1]+'</p></div><span class="arrow">↗</span></a>').join("");
const collectionHTML=collections.map((c,i)=>'<article class="collection-card '+c.tone+'"><div class="image-wrap"><img src="'+c.image+'" alt="'+c.title+' fashion collection" loading="lazy"><span class="collection-number">0'+(i+1)+'</span></div><div class="collection-info"><div><p>'+c.tag+'</p><h3>'+c.title+'</h3></div><span class="circle-arrow">↗</span></div></article>').join("");
const lookHTML=looks.map((l,i)=>'<article class="look-card"><img src="'+l[2]+'" alt="'+l[0]+'" loading="lazy"><div><span>0'+(i+1)+'</span><h3>'+l[0]+'</h3><p>'+l[1]+'</p></div></article>').join("");

document.querySelector("#root").innerHTML=`
<div class="announcement">FREE STYLE CONSULTATION IN STORE <span>•</span> VISIT US THIS WEEKEND</div>
<header class="header"><a class="logo" href="#home"><span class="logo-mark">L</span><span><strong>LUMIÈRE</strong><small>little fashion studio</small></span></a><button class="menu-btn" aria-label="Open menu">☰</button><nav class="nav"><a href="#girls">Girls</a><a href="#boys">Boys</a><a href="#ages">Age Guide</a><a href="#collections">Collections</a><a href="#lookbook">Lookbook</a><a href="#story">Our Story</a><a class="nav-visit" href="#visit">Visit Store ↗</a></nav></header>
<main>
<section class="hero" id="home"><div class="hero-copy"><p class="eyebrow">A little extra lovely</p><h1>Dress them<br><em>happy.</em></h1><p class="hero-text">Playful pieces, pretty details and everyday magic — thoughtfully chosen for little personalities.</p><div class="hero-actions"><a class="btn btn-dark" href="#collections">Explore collections <span>→</span></a><a class="text-link" href="#visit">Come say hello <span>↗</span></a></div><div class="hero-note"><span>✦</span> Curated for 0–15 years</div></div><div class="hero-art"><div class="sun"></div><div class="sticker">NEW<br><b>SEASON</b></div><img src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1100&q=90" alt="Child wearing a cheerful fashion outfit"><div class="shape shape-one"></div><div class="shape shape-two"></div></div></section>
<section class="category-strip" id="ages"><div class="section-intro"><p class="eyebrow">Find their kind of wonderful</p><h2>Made for every<br><em>little chapter.</em></h2></div><div class="category-grid">${categoryHTML}</div></section>
<section class="age-bar"><span>SHOP BY AGE</span><a href="#collections">0–2</a><a href="#collections">3–5</a><a href="#collections">6–10</a><a href="#collections">11–15</a><span class="age-copy">Tiny beginnings → growing personalities</span></section>
<section class="collections" id="collections"><div class="section-heading"><div><p class="eyebrow">Curated collections</p><h2>Looks they'll<br><em>love living in.</em></h2></div><a class="text-link" href="#lookbook">See the lookbook →</a></div><div class="collection-grid">${collectionHTML}</div></section>
<section class="story" id="story"><div class="story-image"><img src="https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=1000&q=90" alt="Childhood fashion moment" loading="lazy"><span>made with<br>heart ♡</span></div><div class="story-copy"><p class="eyebrow">More than a wardrobe</p><h2>Clothes for the<br><em>good stuff.</em></h2><p>At Lumière, we believe getting dressed should feel like a tiny celebration. We handpick comfortable, expressive pieces that can keep up with playtime, family dinners, birthday twirls and all the in-between moments.</p><p class="story-sign">Come in, take your time.<br>We'll help you find their next favourite.</p><a class="btn btn-outline" href="#visit">Discover our store</a></div></section>
<section class="lookbook" id="lookbook"><div class="section-heading"><div><p class="eyebrow">The lookbook</p><h2>Little looks,<br><em>big energy.</em></h2></div><p class="heading-note">A glimpse at the mood of the new season.</p></div><div class="look-grid">${lookHTML}</div></section>
<section class="visit" id="visit"><div class="visit-decor">✦</div><div><p class="eyebrow">Come visit us</p><h2>Let's find<br><em>their look.</em></h2><p class="visit-text">No checkout queues. No scrolling forever. Just good clothes, honest advice and a lovely little store waiting for you.</p></div><div class="visit-card"><p class="label">OUR STORE</p><h3>Lumière Fashion Studio</h3><p>12, Garden Lane<br>Market Road, Mumbai</p><p class="hours"><b>Mon – Sat</b> 10:30 AM – 8:30 PM<br><b>Sunday</b> 11:00 AM – 6:00 PM</p><div class="visit-actions"><a href="tel:+919876543210">Call the store</a><a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">WhatsApp us</a></div></div></section>
<section class="contact" id="contact"><p class="eyebrow">Have a question?</p><h2>Tell us what<br>you're <em>looking for.</em></h2><a class="contact-mail" href="mailto:hello@lumierefashion.in">hello@lumierefashion.in ↗</a></section>
</main>
<footer><div class="footer-brand"><span class="logo-mark">L</span><div><strong>LUMIÈRE</strong><small>little fashion studio</small></div></div><p>Pretty clothes. Happy days. ♡</p><div class="footer-links"><a href="#story">About</a><a href="#lookbook">Lookbook</a><a href="#visit">Store</a><a href="#contact">Contact</a></div><small>© 2026 Lumière Fashion Studio</small></footer>`;
document.addEventListener("click",(e)=>{if(e.target.closest(".menu-btn"))document.querySelector(".nav").classList.toggle("open");if(e.target.closest(".nav a"))document.querySelector(".nav").classList.remove("open")});
