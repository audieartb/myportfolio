console.log("hello world!!")
import './assets/styles.scss'
const $ = require('jquery');



let first = document.getElementsByClassName("tab-content");
first[1].style.display = " active"


var loader = document.getElementById('preloader');
window.addEventListener("load", function () {
    loader.style.display = "none";
   
})

const skills = [
    {
        skill: "python",
        exp: 1,
        pct: 60,
    },
    {
        skill: "javascript",
        exp: 1,
        pct: 70,
    },
    {
        skill: ".Net Core",
        exp: 1.5,
        pct: 60,
    },
    {
        skill: "ASP.NET",
        exp: 1,
        pct: 60,
    },
    {
        skill: "Angular",
        exp: 1,
        pct: 50,
    },
    {
        skill: "ASP.NET",
        exp: 1,
        pct: 90,
    },
    {
        skill: "ASP.NET",
        exp: 1,
        pct: 30,
    },
    {
        skill: "ASP.NET",
        exp: 1,
        pct: 50,
    },
    {
        skill: "ASP.NET",
        exp: 1,
        pct: 80,
    },
]





let skillContainer = document.getElementById("skills-container");
//var progressBar = $('div#progress-bar-snippet').html()
//let dummy = $.parseHTML(progressBar)
//console.log(dummy)

function addSkills() {

    skills.forEach((element, index) => {

        let newItem = document.createElement("div")
        let newH4 = document.createElement("span");
        let newSpan = document.createElement("span");

        newItem.setAttribute("id", index)
        newItem.setAttribute("class", "skill-item")
        newSpan.setAttribute("class", "skill-exp")
        newH4.setAttribute("class", "skill-title")

        let skill = document.createTextNode(element.skill)
        let exp = document.createTextNode(element.exp + " years");

        newH4.appendChild(skill)
        newSpan.appendChild(exp)

        newItem.appendChild(newH4);
        newItem.appendChild(newSpan);
        //newItem.append(progressBar)
        let htmlNode = $.parseHTML(`<div class="progress-bar-slot">
        <div class='progress-bar'>  <div class='progress-fill'> </div></div><span class="progress-pct">${element.pct}%</span>
        </div>`)
        skillContainer.appendChild(newItem);

        $(`#${index}`).append(htmlNode)

    });
}

function updateProgressBar() {

    $('.progress-bar-slot').each(function () {
        let progress = $(this).find('.progress-pct').text();
        let random = Math.floor(Math.random() * (800 - 400) + 400)
        $(this).find('.progress-fill').animate({ 'width': progress }, random)

    })
}

addSkills();
updateProgressBar();
function generateProject(id) {
    let newPr = Object.create({})
    newPr.id = id;
    newPr.name = `project${id}`
    newPr.img = "./fox-card.png"
    newPr.desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia nisi nulla, expedita hic, sit distinctio quod, ducimus natus dicta ut voluptates? Accusantium nisi obcaecati eum dignissimos repellendus rerum delectus"
    newPr.tech = ["vuejs", "nodejs", "angular", "mongoDB", "graphQL"]
    newPr.git = "https://github.com/"

    return newPr
}


const projectCardHtml = "<div class='project-card'><div class='project-card-inner'><div class='card-back'><div class='project-title'></div><div class='project-desc'></div><div class='project-tech'></div><div class='project-git'></div></div><div class='card-front'><div class='project-img'><img id='card-img' src='' alt='project img'></div></div></div></div>";

function projectsSetUp() {
    let projects = [];
    for (let i = 0; i < 5; i++) {
        projects.push(generateProject(i))
    }
    
    projects.forEach((project, index) => {

        let newCard = $.parseHTML(projectCardHtml);
        let titleNode = document.createTextNode(project.name);
        let descNode = document.createTextNode(project.desc);
        let gitNode = document.createTextNode(project.git);

        for(let i = 0; i < project.tech.length; i++){
            let techItem = document.createTextNode(project.tech[i]);
            let techSpan = document.createElement('div')
            techSpan.appendChild(techItem)
            
            $(newCard).find('.project-tech').append(techSpan)
        }

        $(newCard).find('.project-title').append(titleNode)
        $(newCard).find('.project-desc').append(descNode)
        $(newCard).find('.project-git').append(gitNode)
        $(newCard).find('#card-img').src = './assets/fox-card.png'

        $('#projects-container').append(newCard)
        
    })

  

}

projectsSetUp();