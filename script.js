function show() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

show();

var card1 = document.querySelector(".card-1");
var card2 = document.querySelector(".card-2");
var card3 = document.querySelector(".card-3");

//card on the top
card3.addEventListener("mouseover", () => {
  card3.style.transform = "scale(1.1) rotate(0deg)";
  card3.style.transition = "all .5s";
  card1.style.opacity = "70%";
  card2.style.opacity = "70%";
});
card3.addEventListener("mouseleave", () => {
  card3.style.transform = "scale(1) rotate(5deg)";
  card3.style.transition = "all .5s";
  card1.style.opacity = "100%";
  card2.style.opacity = "100%";
});
//card on the middle
card2.addEventListener("mouseover", () => {
  card2.style.transform = "scale(1.1) rotate(0deg)";
  card2.style.transition = "all .5s";
  card2.style.zIndex = "5";
  card3.style.zIndex = "2";
  card2.style.transition = "all .5s";
  card1.style.opacity = "70%";
  card3.style.opacity = "70%";
});
card2.addEventListener("mouseleave", () => {
  card2.style.transform = "scale(1) rotate(-5deg)";
  card2.style.transition = "all .5s";
  card2.style.zIndex = "5";
  card3.style.zIndex = "5";
  card2.style.transition = "all .5s";
  card1.style.opacity = "100%";
  card3.style.opacity = "100%";
});
//last card
card1.addEventListener("mouseover", () => {
  card1.style.transform = "scale(1.1) rotate(0deg)";
  card1.style.transition = "all .5s";
  card1.style.zIndex = "5";
  card3.style.zIndex = "2";
  card2.style.zIndex = "2";
  card1.style.transition = "all .5s";
  card2.style.opacity = "0%";
  card3.style.opacity = "70%";
});
card1.addEventListener("mouseleave", () => {
  card1.style.transform = "scale(1) rotate(-10deg)";
  card1.style.transition = "all .5s";
  card1.style.zIndex = "5";
  card3.style.zIndex = "5";
  card2.style.zIndex = "5";

  card1.style.transition = "all .5s";
  card2.style.opacity = "100%";
  card3.style.opacity = "100%";
});

var overlay = document.querySelector("#overlay");
overlay.addEventListener("mousemove", (e) => {
  var x = e.clientX / 50;
  var y = e.clientY / 50;
  card1.style.transform =
    "translateX(" + x + "px) translateY(" + y + "px) rotate(-10deg)";
});
overlay.addEventListener("mousemove", (e) => {
  var x = e.clientX / 50;
  var y = e.clientY / 50;
  card2.style.transform =
    "translateX(" + x + "px) translateY(" + y + "px) rotate(-5deg)";
});
overlay.addEventListener("mousemove", (e) => {
  var x = e.clientX / 50;
  var y = e.clientY / 50;
  card3.style.transform =
    "translateX(" + x + "px) translateY(" + y + "px) rotate(5deg)";
});

var option1 = document.querySelector(".option-1");
var option2 = document.querySelector(".option-2");
var farmerSection = document.querySelector(".for-farmers");
var vendorSection = document.querySelector(".for-vendors");

option1.addEventListener("click", () => {
  option1.style.borderBottom = "2px solid #000000a4";
  option2.style.borderBottom = "none";
  farmerSection.style.display = "initial";
  vendorSection.style.display = "none";
  
  gsap.from(".frame-1", {
    x: -80,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from(".frame-2", {
    x: -80,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from(".frame-3", {
    x: -80,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from(".frame-4", {
    x: -80,
    opacity: 0,
    duration: 0.3,
  });
  gsap.from(".frame-5", {
    x: -80,
    opacity: 0,
    duration: 0.3,
  });
  gsap.from(".about>h2", {
    x: 80,
    opacity: 0,
    duration: 0.4,
  });
  gsap.from(".about>p", {
    x: 80,
    opacity: 0,
    duration: 0.4,
  });

  gsap.from(".service-card", {
    x: 80,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
  });
});

option2.addEventListener("click", () => {
  option2.style.borderBottom = "2px solid #000000a4";
  option1.style.borderBottom = "none";
  farmerSection.style.display = "none";
  vendorSection.style.display = "initial";

  gsap.from(".frame-1", {
    x: -80,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from(".frame-2", {
    x: -80,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from(".frame-3", {
    x: -80,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from(".frame-4", {
    x: -80,
    opacity: 0,
    duration: 0.3,
  });
  gsap.from(".frame-5", {
    x: -80,
    opacity: 0,
    duration: 0.3,
  });
  gsap.from(".about>h2", {
    x: 80,
    opacity: 0,
    duration: 0.4,
  });
  gsap.from(".about>p", {
    x: 80,
    opacity: 0,
    duration: 0.4,
  });

  gsap.from(".service-card", {
    x: 80,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
  });
});

var scrollable = document.querySelector(".productsArea");
var product = document.querySelectorAll(".product");

// scrollable.addEventListener("wheel", (e) => {
//   if(e.wheelDelta > 0){
//     scrollable.scrollLeft -= 80;
//   }
//   else{
//     scrollable.scrollLeft += 80;
//   }
// })

// ScrollTrigger.create({
//   trigger: '#page-4',
//   scroller: "#main",
//   pin: true,
//   start: 'top',
//   scrub: 0.5,
//   endTrigger: ".endpin",
//   end: "top -300%",
// });

//Equipment Data ---->

var arr = [
  {
    name: "MB PLOUGH",
    price: "₹99,000",
    img: "./assets/Products/product-1.png",
  },
  { name: "BLOWER", price: "₹26,982", img: "./assets/Products/product-2.png" },
  {
    name: "SHREDDER",
    price: "₹75,200",
    img: "./assets/Products/product-3.png",
  },
  {
    name: "TRACTOR",
    price: "₹7,20,000",
    img: "./assets/Products/product-4.png",
  },
  { name: "TRIMMER", price: "₹52,700", img: "./assets/Products/product-5.png" },
  {
    name: "HARVESTER",
    price: "₹70,000",
    img: "./assets/Products/product-6.png",
  },
  { name: "TILLER", price: "₹76,990", img: "./assets/Products/product-7.png" },
  {
    name: "CHAIN-SAW",
    price: "₹22,384",
    img: "./assets/Products/product-8.png",
  },
  {
    name: "LAWN-MOVER",
    price: "₹34,384",
    img: "./assets/Products/product-9.png",
  },
  {
    name: "PUMPSET",
    price: "₹14,204",
    img: "./assets/Products/product-10.png",
  },
];

var summaryPage = document.querySelector(".pro_summary");
var exitPage = document.querySelector(".cancel");

var productDetails = [
  {
    name: "MB PLOUGH",
    price: "₹99,000",
    img: "./assets/Products/product-1.png",
    category: "MB PLOUGH",
    vendor: "RAMDAS PATEL",
    desc: "This is used for primary tillage operations. It cuts trash and buries it completely. It is also used for turning green manure crop for decaying under the soil, which adds humus to the soil. It is also used for turning and mixing compost, farmyard manure or lime into the soil.",
    rprice: "₹800/DAY",
  },
  {
    name: "BLOWER",
    price: "₹26,982",
    img: "./assets/Products/product-2.png",
    category: "BLOWER-MISTBLOWER",
    vendor: "GOPAL PANDEY",
    desc: "A fan rotates at approximately 3,000 rpm in the turbine housing in order to develop the powerful blowing action. Then it is reassuring to know that you have purchased a robust machine. ELIET did not leave anything to chance when constructing this leaf blower. The thick sheet steel turbine housing is even designed to withstand a heavy impact.",
    rprice: "₹400/DAY",
  },
  {
    name: "SHREDDER",
    price: "₹75,200",
    img: "./assets/Products/product-3.png",
    category: "SHREDDER",
    vendor: "KISAN LAL",
    desc: "we can convert any type of farm waste, garden waste etc., ( dry wet) into highly nutrient organic manure by shredding them into small pieces and getting them decomposed. High quality shreader, 8 hours non stop working capacity",
    rprice: "₹1200/DAY",
  },
  {
    name: "TRACTOR",
    price: "₹7,20,000",
    img: "./assets/Products/product-4.png",
    category: "TRACTOR",
    vendor: "PRADEEP BHATT",
    desc: "It comes with 41 HP and 3 cylinders. Powertrac Euro 439 engine capacity provides efficient mileage on the field. It is the best tractor, which provides high work efficiency.",
    rprice: "₹5000/DAY",
  },
  {
    name: "TRIMMER",
    price: "₹52,700",
    img: "./assets/Products/product-5.png",
    category: "TRIMMER",
    vendor: "SOHIL KHAN",
    desc: "MULTIPURPOSE TRIMMING MACHINE: The offered trimmer by Neptune Farming Spray is designed to offer high cutting & trimming performance in tight spaces, edging along sidewalks and driveways - or anywhere where power is a must.",
    rprice: "₹500/DAY",
  },
  {
    name: "HARVESTER",
    price: "₹70,000",
    img: "./assets/Products/product-6.png",
    category: "HARVESTER",
    vendor: "LALA SINGH",
    desc: "The machine consists of a rotary shaft mounted with blades (flails) to harvest the crop, auger for conveying the cut crop, cutters for chopping and conveying chopped fodder through outlet into the trailer.",
    rprice: "₹800/DAY",
  },
  {
    name: "TILLER",
    price: "₹76,990",
    img: "./assets/Products/product-7.png",
    category: "TILLER",
    vendor: "RAMESH APTE",
    desc: "These power tillers are is a multipurpose hand tractor that is used primarily for rotary tilling and other small or commercial purposes. For forwarding action and the tillage operation, power tillers are best used. ",
    rprice: "₹3500/DAY",
  },
  {
    name: "CHAIN-SAW",
    price: "₹22,384",
    img: "./assets/Products/product-8.png",
    category: "CHAIN-SAW",
    vendor: "ARUN DATTA",
    desc: "The P1 chain saw is the simplest model, but sturdy and powerful (300 W), with a lithium battery included, powerful (21 V - 2 A) and good durability. It has no oil tank, so you need to lubricate the chain with oil separately. Equipped with safety trigger release button. Packed in a case with battery charger and tool kit.",
    rprice: "₹2200/DAY",
  },
  {
    name: "LAWN-MOVER",
    price: "₹34,384",
    img: "./assets/Products/product-9.png",
    category: "LAWN-MOVER",
    vendor: "SHIV THAKRE",
    desc: "D-shaped cutting height adjusting lever, easy to hold with overhand grip, cutting height is adjustable by a single operation of lever | 3 cutting heights ranging from 20 mm (13/16 to 55 mm 2-3/1 to manicure the lawn to your specifications",
    rprice: "₹800/DAY",
  },
  {
    name: "PUMPSET",
    price: "₹14,204",
    img: "./assets/Products/product-10.png",
    category: "PUMPSET",
    vendor: "ROHIT BANERJEE",
    desc: "The agriculture pump of Crompton comes with features and benefits like specially designed thrust bearing, high-grade electrical stamping, wide voltage operation and Robust design and construction to ensure value for money product with high performance and reliability aspects.",
    rprice: "₹900/DAY",
  },
];

var dets = document.querySelector(".dets");

arr.forEach(function (data, index) {
  scrollable.innerHTML += ` <div class="product">
  <div class="prod-frame">
    <div class="for-image"><img src="${data.img}" alt=""></div>
    <div class="for-text"><span class="product_name">${data.name}</span><span class="price">${data.price}</span></div>
  </div>
</div>`;

  var products = document.querySelectorAll(".product");
  var productImage = document.querySelector(".selected_product");

  products.forEach(function (product, index) {
    product.addEventListener("click", function () {
      summaryPage.style.display = "initial";
      dets.innerHTML = `  <div class="dets-card">
   <div class="col"><div class="ptitle">PRODUCT NAME:</div> <div class="pdes" >${
     productDetails[`${index}`].name
   }</div></div>
   <div class="col"><div class="ptitle">PRODUCT PRICE:</div> <div class="pdes" style="color:red;">${
     productDetails[`${index}`].price
   }</div></div>
   <div class="col"><div class="ptitle">RENTAL PRICE:</div> <div class="pdes" style="color:green;">${
     productDetails[`${index}`].rprice
   }</div></div>
   <div class="col"><div class="ptitle">CATEGORY:</div> <div class="pdes">${
     productDetails[`${index}`].category
   }</div></div>
   <div class="col"><div class="ptitle">VENDOR NAME:</div> <div class="pdes">${
     productDetails[`${index}`].vendor
   }</div></div>
     <div class="product desc">
       <h4>Description</h4>
       <p>${productDetails[`${index}`].desc}</p>
     </div>
 </div>
 <button class="buy">Buy</button>
    <button class="rent">Rent</button>`;

      productImage.innerHTML = `<div class="pic"><img src="${
        productDetails[`${index}`].img
      }" alt=""></div>`;

      tl.from(".col", {
        x: 80,
        duration: 0.8,
        stagger: 0.2,
        opacity: 0,
      });
      tl.to(".pro_summary", {
        display: "initial",
        delay: -3,
      });
      tl.to(".pro_summary", {
        duration: 0.5,
        opacity: 1,
        delay: -3,
      });
    });
  });
});

exitPage.addEventListener("click", function () {
  // summaryPage.style.display = "none";

  tl.to(".col", {
    x: 80,
    duration: 0.2,
    stagger: 0.1,
    opacity: 0,
  });
  tl.to(".pro_summary", {
    duration: 0.5,
    opacity: 0,
  });
  tl.to(".pro_summary", {
    display: "none",
  });
});

//ANIMATIONS --->

var tl = gsap.timeline();
gsap.from("#fletter", {
  x: -500,
  duration: 1,
  ease: Expo.easeOut,
});
gsap.from("#sletter", {
  x: 500,
  duration: 1,
  ease: Expo.easeOut,
});

tl.from("#first", {
  opacity: 0,
  y: 30,
  duration: 0.5,
  delay: 1,
});
tl.from("#second", {
  opacity: 0,
  y: 30,
  duration: 0.5,
});
tl.from("#dot", {
  y: 350,
  duration: 0.5,
});
tl.to(".loader", {
  transform: "scale(1.1)",
  duration: 1,
});
tl.to(".loader", {
  y: "-180vh",
  duration: 2,
  ease: Expo.easeOut,
});
tl.from(".tlt", {
  y: 40,
  stagger: {
    amount: 0.3,
  },
  opacity: 0,
  duration: 1,
  delay: -2,
});
tl.from(".card-1", {
  x: 700,
  opacity: 0,
  duration: 1,
  delay: -2,
});
tl.from(".card-2", {
  x: 700,
  opacity: 0,
  duration: 1,
  delay: -2,
});
tl.from(".card-3", {
  x: 700,
  opacity: 0,
  duration: 1,
  delay: -2,
});
// tl.to("#dot",{
//   width:  "120vw",
//   height: "120vw",
//   duration: 1,
//   delay: .5,
// })
// tl.to("#enter",{
//   width:  "140vw",
//   height: "140vw",
//   duration: .5,
// })
// tl.to("#dot",{
//   y: "-200vh",

// })
// tl.to(".loader",{
//   y: "-200vh",

// })
// tl.to("#enter",{
//   borderRadius: "0%",
// })
// tl.to("#enter",{
//   y: "-200vh",
//   duration: .5,
//   ease: Expo.easeOut,
// })

// gsap.from(".page-2-title",{
//   y: 80,
//   opacity: 0,
//   duration: .5,
//   scrollTrigger:{
//     trigger: ".page-2-title",

//     scroller: "#main",
//     start: "top 90%",
//     toggleActions: "play none none none",
//   }
// })

// gsap.from(".choose",{
//   y: 80,
//   opacity: 0,
//   duration: .5,
//   scrollTrigger:{
//     trigger: ".page-2-title",

//     scroller: "#main",
//     start: "top 100%",
//     toggleActions: "play none none none",
//   }
// })

// gsap.from(".frame-1", {
//   x: -80,
//   opacity: 0,
//   duration: .5,
//   stagger: 1,
//   delay: .2,
//   scrollTrigger:{
//     trigger: ".choose",

//     scroller: "#main",
//     start: "top 90%",

//   }
// })
// gsap.from(".frame-2", {
//   x: -80,
//   opacity: 0,
//   duration: .5,
//   stagger: 1,
//   delay: .4,
//   scrollTrigger:{
//     trigger: ".choose",

//     scroller: "#main",
//     start: "top 70%",

//   }
// })
// gsap.from(".frame-3", {
//   x: -80,
//   opacity: 0,
//   duration: .5,
//   stagger: 1,
//   delay: .6,
//   scrollTrigger:{
//     trigger: ".choose",

//     scroller: "#main",
//     start: "top 70%",

//   }
// })
// gsap.from(".frame-4", {
//   x: -80,
//   opacity: 0,
//   duration: .5,
//   stagger: 1,
//   delay: .8,
//   scrollTrigger:{
//     trigger: ".choose",

//     scroller: "#main",
//     start: "top 60%",

//   }
// })
// gsap.from(".frame-5", {
//   x: -80,
//   opacity: 0,
//   duration: .5,
//   stagger: 1,
//   delay: 1,
//   scrollTrigger:{
//     trigger: ".choose",

//     scroller: "#main",
//     start: "top 70%",

//   }
// })
// gsap.from(".about>h2", {
//   x: 80,
//   opacity: 0,
//   duration: .5,
//   delay: 1,
//   scrollTrigger:{
//     trigger: ".choose",

//     scroller: "#main",
//     start: "top 100%",
//   }
// })
// gsap.from(".about>p", {
//   x: 80,
//   opacity: 0,
//   duration: .5,
//   delay: 1,
//   scrollTrigger:{
//     trigger: ".choose",

//     scroller: "#main",
//     start: "top 90%",
//   }
// })

// gsap.from(".service-card", {
//   x: 80,
//   opacity: 0,
//   duration: .2,
//   delay: 1,
//   stagger: .2,
//   scrollTrigger:{
//     trigger: ".choose",

//     scroller: "#main",
//     start: "top 80%",
//   }
// })

//  gsap.from("#fq1", {
//    y: 80,
//    transform: "rotate(30deg)",
//    opacity: 0,
//    duration: 1,
//    scrollTrigger:{
//      trigger: ".qoute-1",
//      scroller: "#main",
//      start: "top 80%",
//      toggleActions: "restart reverse play reverse",
//    }
//  })

// gsap.from("#fq2", {
//   x: -80,
//   duration: .5,
//   scrollTrigger:{
//     trigger: ".qoute-1",

//     scroller: "#main",
//     start: "top 30%",
//     toggleActions: "restart reverse play reverse",
//   }
// })
gsap.from("#fq3", {
  x: -80,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".qoute-1",

    scroller: "#main",
    start: "top 30%",
    toggleActions: "restart reverse play reverse",
  },
});

// gsap.from("#bestSellers", {
//   y: 150,
//   duration: .5,
//   scrollTrigger:{
//     trigger: "#bestSellers",

//     scroller: "#main",
//     start: "top 110%",
//     toggleActions: "restart reverse play reverse",
//   }
// })
// gsap.from("#tag", {
//   opacity: 0,
//   duration: .5,
//   scrollTrigger:{
//     trigger: "#bestSellers",

//     scroller: "#main",
//     start: "top 110%",
//     toggleActions: "restart reverse play reverse",
//   }
// })

// gsap.to(".product", {
//   height: "40%",
//   duration: .5,
//   opacity: 1,
//   scrollTrigger:{
//     trigger: ".product",

//     scroller: "#main",
//     start: "top 100%",
//   }
// })

// gsap.from('.card',{
//    y: 80,
//    duration: .5,
//    stagger: .2,

//   scrollTrigger:{
//     trigger: ".card",

//     scroller: "#main",
//     start: "top 80%",
//   }
// })

// var cityDropDown = document.querySelector("#cities");
// var index = document.querySelector(".index");
// var num = document.querySelector("#no");

// cityDropDown.addEventListener("change", () => {
//   const selectedCity = cityDropDown.value;

//   if(selectedCity === 'Harda'){
//     num.innerHTML = "04";
//     index.innerHTML = ` <div class="vend">
//     <li>BALVINDAR</li>
//     <li>₹100</li>
//     <li>₹30/DAY</li>
//    <div class="btnBox">
//     <button class="buy">BUY</button>
//     <button class="rent">RENT</button>
//    </div>
//   </div>
//   <div class="vend-2">
//     <li>BALVINDAR</li>
//     <li>₹100</li>
//     <li>₹30/DAY</li>
//    <div class="btnBox">
//     <button class="buy">BUY</button>
//     <button class="rent">RENT</button>
//    </div>
//   </div>
//   <div class="vend-3">
//     <li>BALVINDAR</li>
//     <li>₹100</li>
//     <li>₹30/DAY</li>
//    <div class="btnBox">
//     <button class="buy">BUY</button>
//     <button class="rent">RENT</button>
//    </div>
//   </div>
//   <div class="vend-4">
//     <li>BALVINDAR</li>
//     <li>₹100</li>
//     <li>₹30/DAY</li>
//    <div class="btnBox">
//     <button class="buy">BUY</button>
//     <button class="rent">RENT</button>
//    </div>
//   </div>`
//   }
//   else if(selectedCity === 'Seoni'){
//     console.log("seoni")
//   }
//   else if(selectedCity === 'Balaghat'){
//     console.log("Balaghat")
//   }
//   else if(selectedCity === 'Gwalior'){
//     console.log("Gwalior")
//   }
//   else{
//     console.log("Jabalpur")
//   }
// })

// STOP ANIMATION ON MOBILE DEVICE

var x = window.matchMedia("(max-width: 400px)");
function StopGsap(x) {
  console.log(x);
  if (x.matches) {   
    
    option2.addEventListener("click", function(){
      option1.style.backgroundColor = "transparent";
      option1.style.color = "maroon"
    })

    option1.addEventListener("click", function(){
      option1.style.backgroundColor = "maroon";
      option1.style.color = "#fff";
    })

    scrollable.addEventListener("wheel", (e) => {
      if (e.wheelDelta > 0) {
        scrollable.scrollLeft -= 80;
      } else {
        scrollable.scrollLeft += 80;
      }
    });

    gsap.from("#leftSwipe", {
      x: -10,
      duration: 1,
      repeat: -1,
      ease: "expo.out",
    });

    ScrollTrigger.create({
      trigger: "#page-4",
      scroller: "#main",
      pin: false,
      start: "top",
      scrub: 0.5,
      endTrigger: ".endpin",
      end: "top -300%",
    });

    gsap.from(".page-2-title", {
      y: 80,
      opacity: 0,
      duration: 0.5,
    });

    gsap.from(".choose", {
      y: 80,
      opacity: 0,
      duration: 0.5,
    });

    gsap.from(".frame-1", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      delay: 0.2,
    });
    gsap.from(".frame-2", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      delay: 0.4,
    });
    gsap.from(".frame-3", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      delay: 0.6,
    });
    gsap.from(".frame-4", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      delay: 0.8,
    });
    gsap.from(".frame-5", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      delay: 1,
    });
    gsap.from(".about>h2", {
      x: 80,
      opacity: 0,
      duration: 0.5,
      delay: 1,
    });
    gsap.from(".about>p", {
      x: 80,
      opacity: 0,
      duration: 0.5,
      delay: 1,
    });

    gsap.from(".service-card", {
      x: 80,
      opacity: 0,
      duration: 0.2,
      delay: 1,
      stagger: 0.2,
    });

    gsap.from("#fq1", {
      y: 50,
      opacity: 0,
    });

    gsap.from("#fq2", {
      x: -80,
      duration: 0.5,
    });

    gsap.from("#bestSellers", {
      y: 150,
      duration: 0.5,
    });

    gsap.from("#tag", {
      opacity: 0,
      duration: 0.5,
    });

    gsap.to(".product", {
      height: "40%",
      duration: 0.5,
      opacity: 1,
    });

    gsap.from(".card", {
      y: 80,
      duration: 0.5,
      stagger: 0.2,
    });
  } else {
    // ScrollTrigger.create({
    //   trigger: '#page-4',
    //   scroller: "#main",
    //   pin: true,
    //   start: 'top',
    //   scrub: 0.5,
    //   endTrigger: ".endpin",
    //   end: "top -300%",
    // });

    gsap.from(".page-2-title", {
      y: 80,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".page-2-title",

        scroller: "#main",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".choose", {
      y: 80,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".page-2-title",

        scroller: "#main",
        start: "top 100%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".frame-1", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".choose",

        scroller: "#main",
        start: "top 90%",
      },
    });
    gsap.from(".frame-2", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: ".choose",

        scroller: "#main",
        start: "top 70%",
      },
    });
    gsap.from(".frame-3", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: ".choose",

        scroller: "#main",
        start: "top 70%",
      },
    });
    gsap.from(".frame-4", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      delay: 0.8,
      scrollTrigger: {
        trigger: ".choose",

        scroller: "#main",
        start: "top 60%",
      },
    });
    gsap.from(".frame-5", {
      x: -80,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".choose",

        scroller: "#main",
        start: "top 70%",
      },
    });
    gsap.from(".about>h2", {
      x: 80,
      opacity: 0,
      duration: 0.5,
      delay: 1,
      scrollTrigger: {
        trigger: ".choose",

        scroller: "#main",
        start: "top 100%",
      },
    });
    gsap.from(".about>p", {
      x: 80,
      opacity: 0,
      duration: 0.5,
      delay: 1,
      scrollTrigger: {
        trigger: ".choose",

        scroller: "#main",
        start: "top 90%",
      },
    });

    gsap.from(".service-card", {
      x: 80,
      opacity: 0,
      duration: 0.2,
      delay: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".choose",

        scroller: "#main",
        start: "top 80%",
      },
    });

    gsap.from("#fq1", {
      y: 80,
      transform: "rotate(30deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".qoute-1",
        scroller: "#main",
        start: "top 80%",
        toggleActions: "restart reverse play reverse",
      },
    });

    gsap.from("#fq2", {
      x: -80,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".qoute-1",

        scroller: "#main",
        start: "top 30%",
        toggleActions: "restart reverse play reverse",
      },
    });

    gsap.from("#bestSellers", {
      y: 150,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#bestSellers",

        scroller: "#main",
        start: "top 110%",
        toggleActions: "restart reverse play reverse",
      },
    });
    gsap.from("#tag", {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#bestSellers",

        scroller: "#main",
        start: "top 110%",
        toggleActions: "restart reverse play reverse",
      },
    });

    gsap.to(".product", {
      height: "40%",
      duration: 0.5,
      opacity: 1,
      scrollTrigger: {
        trigger: ".product",

        scroller: "#main",
        start: "top 100%",
      },
    });

    gsap.from(".card", {
      y: 80,
      duration: 0.5,
      stagger: 0.2,

      scrollTrigger: {
        trigger: ".card",

        scroller: "#main",
        start: "top 80%",
      },
    });
  }
}
StopGsap(x);

// ------------------------------------------

var left = document.querySelector("#leftBtn");
var right = document.querySelector("#rightBtn");

left.addEventListener("click", function () {
  gsap.to(".productsArea", {
    scrollLeft: "-=200",
    delay:0,
    ease: "expo.out",
  });
});
right.addEventListener("click", function () {
  gsap.to(".productsArea", {
    scrollLeft: "+=200",
    delay: 0,
    ease: "expo.out",
  });
});

var mobileMenu = document.querySelector("#mobileMenu");
var menuForMobile = document.querySelector("#menuForMobile");
var ExitMenu = document.querySelector("#exitMenu");



mobileMenu.addEventListener("click", function(){
  menuForMobile.style = "display:flex !important";
  gsap.from(".menuItem",{
    x: -80,
    duration: .5,
    stagger: .1,
    opacity: 0
  })
  gsap.from(".sm",{
    x: -80,
    duration: .5,
    stagger: .1,
    opacity: 0
  })

})


ExitMenu.addEventListener("click", function(){
  console.log("exit")

  let time = gsap.timeline();
  menuForMobile.style = "display:none !important"
})
