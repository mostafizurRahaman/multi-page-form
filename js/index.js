const nextBtn1 = document.getElementById("next1");
const nextBtn2 = document.getElementById("next2");
const nextBtn3 = document.getElementById("next3");
const prevBtn1 = document.getElementById("back1");
const form = document.getElementById("form");
const part1 = document.getElementById("part1");
const part2 = document.getElementById("part2");
const part3 = document.getElementById("part3");
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');


form.addEventListener("submit", (e) => {
   e.preventDefault();
   console.log(e);
});

nextBtn1.addEventListener("click", () => {
   part1.classList.remove('block');
   part1.classList.add('none');
   part2.classList.remove('none');   
   part2.classList.add('block');
   step1.classList.add('medium'); 
   step2.classList.add('normal'); 
});

prevBtn1.addEventListener("click", () => {
   part1.classList.add('block');
   part1.classList.remove('none');
   part2.classList.add('none');   
   part2.classList.remove('block');
   step1.classList.remove('medium');
   step2.classList.remove('normal'); 
});

nextBtn2.addEventListener("click", () => {
   part3.classList.add('block');
   part3.classList.remove('none');
   part2.classList.add('none');   
   part2.classList.remove('block');
   step1.classList.add('medium'); 
   step2.classList.add('medium'); 
   step2.classList.remove('normal'); 
   step3.classList.add('normal'); 
});
nextBtn3.addEventListener("click", () => {
   step1.classList.remove('medium');  
   step1.classList.add('full');
   step2.classList.remove('medium'); 
   step2.classList.add('full'); 
   step3.classList.add('full');
});

