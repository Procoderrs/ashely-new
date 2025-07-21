
 
 document.addEventListener('DOMContentLoaded',function(){


  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.getElementById("scroll-progress-bar");
    progressBar.style.height = scrollPercent + "%";
  });

 
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
      w-[90px] h-[90px] rounded-full border-4   
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
      <h3 class="lg:text-xl text-sm font-medium text-black  ">${m.name}</h3>
      <p  class="sm:text-sm  text-xs text-[#696969] tracking-wide  mt-1  ">${m.designation}</p>
      <p  class="mt-4  font-light text-sm  md:text-xl leading-8  ">${m.description}</p>
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



new Swiper('.default-carousel', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 32,
    speed: 3500,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    breakpoints: {
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    },
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
      const el = entry.target;

      if (entry.isIntersecting) {
        // In view: show the element
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-10');
      } else {
        // Out of view: reset to hidden
        el.classList.remove('opacity-100', 'translate-y-0');
        el.classList.add('opacity-0', 'translate-y-10');
      }
    });
  },
  { threshold: 0.1 }
);

// Only add transition classes if they’re not already added
document.querySelectorAll('.fade-up').forEach((el) => {
  if (!el.classList.contains('transition-all')) {
    el.classList.add('transition-all', 'duration-700', 'ease-in-out');
  }
  observer.observe(el);
});


/* below 1400 */
  /* const openBtn = document.getElementById('desktopMenuBtn');
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
  }); */



  /* above 1400 */

  const openBtnAbove = document.getElementById('desktopMenuBtnAbove');
  const closeBtnAbove = document.getElementById('desktopCloseBtnAbove');
  const overlayAbove = document.getElementById('desktopOverlayAbove');

  openBtnAbove.addEventListener('click', () => {
    overlayAbove.classList.remove('hidden');
    // Allow DOM to update before adding visible state
    requestAnimationFrame(() => {
      overlayAbove.classList.remove('opacity-0', 'scale-95');
      overlayAbove.classList.add('opacity-100', 'scale-100');
    });
  });

  closeBtnAbove.addEventListener('click', () => {
    overlayAbove.classList.remove('opacity-100', 'scale-100');
    overlayAbove.classList.add('opacity-0', 'scale-95');

    overlayAbove.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'opacity') {
        overlayAbove.classList.add('hidden');
        overlayAbove.removeEventListener('transitionend', handler);
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




/* 1200  */

const mobileBtn_1 = document.getElementById('mobileMenuBtn-2');
  const mobileClose_1 = document.getElementById('mobileCloseBtn');
  const mobileOverlay_1 = document.getElementById('mobileOverlay');

  mobileBtn_1.addEventListener('click', () => {
    mobileOverlay_1.classList.remove('hidden', 'opacity-0');
    mobileOverlay_1.classList.add('opacity-100');
  });

  mobileClose_1.addEventListener('click', () => {
    mobileOverlay_1.classList.remove('opacity-100');
    mobileOverlay_1.classList.add('opacity-0');

    mobileOverlay_1.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'opacity') {
        mobileOverlay_1.classList.add('hidden');
        mobileOverlay_1.removeEventListener('transitionend', handler);
      }
    });
  });


/* circle-bg-change-detect */
const sections = document.querySelectorAll('[data-bg]');
const circleBg = document.getElementById('circleBg');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bgType = entry.target.getAttribute('data-bg');
        if (bgType === 'dark') {
          circleBg.classList.remove('bg-[rgba(0,0,0,0.1)]');
          circleBg.classList.add('bg-[rgba(0,0,0,0.1)]');
        } else {
          circleBg.classList.remove('bg-[rgba(0,0,0,0.1)]');
          circleBg.classList.add('bg-[rgba(0,0,0,0.1)]');
        }
      }
    });
  },
  {
    threshold: 0,
  }
);

sections.forEach((section) => {
   sectionObserver.observe(section);
});








const sectionss = document.querySelectorAll('section');
const logo = document.getElementById('logo'); // Your h1
const menuIcon = document.getElementById('menuIcon'); // Your img

const observerss = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bg = entry.target.dataset.bg; // light or dark

      if (bg === 'dark') {
        // Dark background → use white text & white icon (no invert)
        logo.classList.remove('text-black');
        logo.classList.add('text-white');

        menuIcon.classList.remove('invert');
      } else {
        // Light background → use black text & invert icon
        logo.classList.remove('text-white');
        logo.classList.add('text-black');

        menuIcon.classList.add('invert');
      }
    }
  });
}, {
  threshold: 0
});

sectionss.forEach(section => observerss.observe(section));

/* 2nd-section-img-zoom-effect */


  
 })