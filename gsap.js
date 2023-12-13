//Animation n°1 (texte) 

document.addEventListener('DOMContentLoaded', function() {
    const letter = document.querySelector('.textintro');
   
    gsap.fromTo(
       letter,
       { x: -50, opacity: 0 },
       {
         x: 0,
         opacity: 1,
         duration: 1,
         ease: 'bounce',
       }
    );
   });


   //Animation n°2 (rotation svg)
   gsap.registerPlugin(ScrollTrigger);


        let svgtl = gsap.timeline({

            scrollTrigger: {

                trigger: '.invisible',

                start: 'top center',

                end: 'bottom center',

                scrub: true,

            },

        });


        svgtl.to('.invisible', {

            rotation: -90,

            duration: 1,

            ease: 'none',

        });




// Animation N°3 (animation quote)

ScrollTrigger.create({

    trigger: ".trigger-div",
   
    start: "top 80%",
   
    end: "bottom 20%",
   
    onUpdate: self => {
   
       const scrollProgress = self.progress;
   
   
       // If scrollProgress is between 0.1 and 0.4
   
       if (scrollProgress >= 0.1 && scrollProgress <= 0.4) {
   
         // Change text content
   
         document.querySelector('.text-content').textContent = "Un projet sans échéance est simplement un rêve. -Proverbe chinois";
   
       }
   
       // If scrollProgress is between 0.5 and 0.8
   
       else if (scrollProgress >= 0.5 && scrollProgress <= 0.8) {
   
         // Change text content
   
         document.querySelector('.text-content').textContent = "Notion est l'outil que j'utilise pour la gestion des projets, offrant une interface intuitive, une flexibilité remarquable et la possibilité d'intégrer divers types de contenus, favorisant ainsi une collaboration efficace et une gestion transparente des tâches.";
   
       }
   
    },
   
   });

//animation icon a

//Animation projet 
gsap.registerPlugin(ScrollTrigger);


const windowHeight = window.innerHeight;


gsap.to(".left", {

    x: "-5%",

    scrollTrigger: {

        trigger: ".left",

        start: "top 5%",

        end: `bottom ${windowHeight * 0.25}px`,

        scrub: true,

    },

});


gsap.to(".right", {

    x: "-50%",

    scrollTrigger: {

        trigger: ".right",

        start: "bottom 100%",

        end: `center -75%`,

        scrub: true,

    },

});

/*gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.card',
      start: 'top center',
      end: ' center',
      scrub: true,
      markers: false,
      duration: 1000,

    }
  })
  tl.fromTo('.card',
    {y: 200}, 
    {y: 0},
  ); 
  
  gsap.from(".projet", {
opacity: 0,
y: 200,
duration: 1,
ease: "power3.out",
repeat: 0,
});*/
  
  //smooth scroll


        const lenis = new Lenis()

          lenis.on('scroll', (e) => {
            console.log(e)
          })

          function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }

          requestAnimationFrame(raf)




        //Animation bloc 
        gsap.to('.b1 p',{
            duration : 1,
            y:0,
            scale :2, 
            autoAlpha: 1,
            scrollTrigger: {
                trigger:'.b1 p',
                markers: true
            }

        })




        // Animation textintro

        gsap.to('.text1', {
            duration: 2,
            text: "This is the new text",
            ease: "none",
          });






          

const tl = gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      pin: true,
      trigger: "#trigger-element",
      start: "50% 50%",
      end: "bottom 50%",
    },
  });
  
  tl.to("#pin-windmill-svg", {
    rotateZ: 900,
  });
  
//aniamtion background color
const paragraphs = document.querySelectorAll('p');


    paragraphs.forEach((p, i) => {

      gsap.to(p, {

        duration: 2,

        delay: i * 0.5,

        ease: 'bounce',

        text: {

          fill: '#ffe732',

        },

      });

    });
