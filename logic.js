let field = document.querySelector('.roles');

let tablinks = document.getElementsByClassName("tab-titles");
let tabcontents = document.getElementsByClassName("tab-contents");


let data = [
    "Java Developer",
    "Android Application Developer",
    "Full Stack Web Developer",
    "Front-End Developer",
    "Back-End Developer"
];

let index1 = 0;
let index2 = 1;

const scriptURL = 'https://script.google.com/macros/s/AKfycbzoFfsTLxkQ1uisUjcUFAAglCUc97UxGkCMGLKOkHqoI-wzEBuBvue23cxySgvX6lBn/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("message");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = "Hurray !! Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

const autoType = () => {

    if(index1 == data.length){
        index1 = 0;
    }

    let new_data = data[index1].slice(0,index2);
    field.innerText = new_data;

    if(index2 == data[index1].length){
        index2 = 1;
        index1++;
    }

    index2++;

    setTimeout(() => autoType(), 70);

}

autoType();

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sideMenu = document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-200px";
}


