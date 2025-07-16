
 
 document.addEventListener('DOMContentLoaded',function(){


 
 const follower=document.getElementById('mouse-circle');

// Show heading (default visible), then hide after 3s

  // Hide heading after 3s
   setTimeout(() => {
    document.getElementById('pre-heading').classList.add('hidden');
    document.getElementById('pre-btn').classList.remove('hidden');
  }, 3000);

  // Hide yellow border, show name
  setTimeout(() => {
    document.getElementById('pre-btn').classList.add('hidden');
    document.getElementById('pre-name').classList.remove('hidden');
  }, 5000);

  // Hide name, show main content
  setTimeout(() => {
    document.getElementById('pre-name').classList.add('hidden');
    document.getElementById('main-content-1').classList.remove('hidden');
  }, 7000);
 

document.addEventListener("mousemove", (e) => {
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
    });



const teamMembers = [
  {
    name: "Sarah Newman",
    designation:'Envato market',
    image: "./src/images/anna.jpg",
    description: "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work."
  },
  {
    name: "Emma Truman",
    designation:'Envato market',
    image: "./src/images/emma.jpg",
    description: "I had the pleasure of working with this agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactfl work. I highly recomended this agency for theit consistent delivery of exceptional creative solutions."
  },
  {
    name: "Sarah Newman",
    designation:'Envato market',
    image: "./src/images/oscar.jpg",
    description: "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work."
  },
  {
    name: "Emma Truman",
    designation:'Envato market',
    image: "./src/images/lisa.jpg",
    description: "I had the pleasure of working with this agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactfl work. I highly recomended this agency for theit consistent delivery of exceptional creative solutions."
  },
  {
    name: "Sarah Newman",
    designation:'Envato market',
    image: "./src/images/5.jpg",
    description: "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work."
  },
  {
   name: "Emma Truman",
    designation:'Envato market',
    image: "./src/images/6.jpg",
    description: "I had the pleasure of working with this agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactfl work. I highly recomended this agency for theit consistent delivery of exceptional creative solutions."
  },
  {
    name: "Sarah Newman",
    designation:'Envato market',
    image: "./src/images/7.jpg",
    description: "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work."
  },

];
   
  
const imageContainer=document.getElementById('imageContainer');
const descContainer=document.getElementById('descContainer');
const descContainerMobile=document.getElementById('descContainerMobile')
const prevBtn=document.getElementById('prevBtn');
const nextBtn=document.getElementById('nextBtn')


// ───── state ─────
let activeIndex = 0;
let direction   = 'right';   // for first paint

// ───── render everything ─────
function renderGallery() {
  /* thumbnails */
  imageContainer.innerHTML = '';
  teamMembers.forEach((m,i)=>{
    const wrap = document.createElement('div');
    wrap.dataset.index = i;
    wrap.className = `
      w-20 h-20 rounded-full border-4 p-1 
      ${i===activeIndex? 'border-[#ff9800]' : 'border-transparent hover:border-white'}
      transition-all duration-300 cursor-pointer ${i%2?'min-[993px]:mt-12':''}`;
    wrap.innerHTML =
      `<img src="${m.image}" alt="${m.name}"
            class="w-full h-full object-cover object-top rounded-full">`;
    imageContainer.appendChild(wrap);
  });

  /* description */
  const m = teamMembers[activeIndex];
  const anim = direction==='left' ? 'animate-slide-left':'animate-slide-right';
  const content = `
    <div class="max-w-2xl mx-auto text-center ${anim}">
      <h3 class="text-2xl font-semibold text-gray-800  ">${m.name}</h3>
      <p  class="text-sm  text-gray-500 mt-1  ">${m.designation}</p>
      <p  class="mt-4  font-light  leading-8  ">${m.description}</p>
    </div>`;
    descContainer.innerHTML=content;
    descContainerMobile.innerHTML=content
    

  /* buttons */
  prevBtn.disabled = (activeIndex===0);
  nextBtn.disabled = (activeIndex===teamMembers.length-1);
  prevBtn.classList.toggle('opacity-30',       prevBtn.disabled);
  prevBtn.classList.toggle('cursor-not-allowed',prevBtn.disabled);
  nextBtn.classList.toggle('opacity-30',       nextBtn.disabled);
  nextBtn.classList.toggle('cursor-not-allowed',nextBtn.disabled);
}

/* click thumbnail */
imageContainer.addEventListener('click', e=>{
  const el = e.target.closest('[data-index]');
  if(!el) return;
  const newIndex = Number(el.dataset.index);
  direction = newIndex>activeIndex ? 'right' : 'left';
  activeIndex = newIndex;
  renderGallery();
});

/* prev / next */
prevBtn.addEventListener('click', ()=>{
  if(activeIndex===0) return;
  direction='left';
  activeIndex--;
  renderGallery();
});
nextBtn.addEventListener('click', ()=>{
  if(activeIndex===teamMembers.length-1) return;
  direction='right';
  activeIndex++;
  renderGallery();
});

/* first paint */
renderGallery();



document.addEventListener('DOMContentLoaded', () => {

  new Swiper('.default-carousel', {
    /* — Core behaviour — */
    loop: true,
    slidesPerView: 2,
    spaceBetween: 32,

    /* linear marquee‑style autoplay */
    speed: 3500,                 // ↙︎ how fast it slides
    autoplay: {
      delay: 0,                  // no pause between cycles
      disableOnInteraction: false,
    },

    /* keep drag / wheel free */
    freeMode: true,
    freeModeMomentum: false,

    
    /* responsive: 1 on mobile, 2 on ≥640 px, 4 on ≥1024 px */
    breakpoints: {
      0:   { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024:{ slidesPerView: 4 }
    },
  });

});













 const backToTop = document.getElementById('backToTop');
 const section = document.getElementById('banner');

const observer_1 = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      backToTop.classList.add('hidden');
    } else {
      backToTop.classList.remove('hidden');
    }
  },
  {
    threshold: 0.1,
  }
); 

observer_1.observe(banner);


backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});



/* const zoomImage = document.querySelector('.zoom-img');

const zoomObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      zoomImage.classList.add('scale-100', 'opacity-100');
      zoomImage.classList.remove('scale-125', 'opacity-0');
    }
  },
  {
    threshold: 0.3, // Trigger when 30% of the image is visible
  }
);

zoomObserver.observe(zoomImage); */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      } else {
        // Reset when it goes out of view
        entry.target.classList.remove('opacity-100', 'translate-y-0');
        entry.target.classList.add('opacity-0', 'translate-y-10');
      }
    });
  },
  { threshold: 0.1 }
);

// Observe all elements with the 'fade-up' class
document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));




  const openBtn = document.getElementById('desktopMenuBtn');
  const closeBtn = document.getElementById('desktopCloseBtn');
  const overlay = document.getElementById('desktopOverlay');

  openBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    // Allow DOM to update before adding visible state
    requestAnimationFrame(() => {
      overlay.classList.remove('opacity-0', 'scale-95');
      overlay.classList.add('opacity-100', 'scale-100');
    });
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('opacity-100', 'scale-100');
    overlay.classList.add('opacity-0', 'scale-95');

    overlay.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'opacity') {
        overlay.classList.add('hidden');
        overlay.removeEventListener('transitionend', handler);
      }
    });
  });






 
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileClose = document.getElementById('mobileCloseBtn');
  const mobileOverlay = document.getElementById('mobileOverlay');

  mobileBtn.addEventListener('click', () => {
    mobileOverlay.classList.remove('hidden', 'opacity-0');
    mobileOverlay.classList.add('opacity-100');
  });

  mobileClose.addEventListener('click', () => {
    mobileOverlay.classList.remove('opacity-100');
    mobileOverlay.classList.add('opacity-0');

    mobileOverlay.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'opacity') {
        mobileOverlay.classList.add('hidden');
        mobileOverlay.removeEventListener('transitionend', handler);
      }
    });
  });


/* 2nd-section-img-zoom-effect */


  
 })