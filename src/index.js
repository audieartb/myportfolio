console.log("hello world!!")
import './assets/styles.scss'
const $ = require('jquery');



// let first = document.getElementsByClassName("tab-content");
// first[1].style.display = " active"


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

/****************************EXPERIENCE**********************************************/

const experienceData = [
    {
        company: 'Softtek',
        start: '09/2021',
        end: '06/2022',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit. \n Praesentium ipsa repellendus     reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit.\n Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit.\n Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit. \nPraesentium ipsa repellendus      reprehenderit',
    },
    {
        company: 'Bosch',
        start: '09/2021',
        end: '06/2022',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit. \n Praesentium ipsa repellendus     reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit.\n Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit.\n Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit. \nPraesentium ipsa repellendus      reprehenderit',
    },
    {
        company: '4Geeks',
        start: '09/2021',
        end: '06/2022',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. \nPraesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit. \n Praesentium ipsa repellendus     reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit.\n Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit.\n Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa repellendus      reprehenderitLorem ipsum dolor sit amet consectetur, adipisicing elit. \nPraesentium ipsa repellendus      reprehenderit',
    },
]

function setUpExperience() {

    let btnClasses = 'tablinks tablink-btn'
    let tabContentClasses = 'tab-content'
    experienceData.forEach(async (item, index) => {
        let desc = item.description.replace(/(?:\r\n|\r|\n)/g, '<br>');

        $('#exp-tab-options').append(` <li><button id="opt-${index}" class="${btnClasses}">${item.company}</button></li>`);

        $('#exp-tabs-container').append(`<div id="content-${index}" class="${tabContentClasses}"><h3>${item.company}</h3>
        <h4>${item.start} - ${item.end}</h4><div> <p>${desc}</p> </div></div>`);
    });



}
setUpExperience()

$(function () {
    $('.tablinks').on("click", function (event) {
        let clicked = this.getAttribute("id").split("-")[1]

        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none"
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }

        document.getElementById(`content-${clicked}`).style.display = "block";
        event.currentTarget.className += " active";


    })

})



/*
 sets the first tab as active

let first = document.getElementsByClassName("tab-content");
first[0].style.display = "block"
*/
$(()=>{

$('#exp-tabs-container .tab-content').first().css('display', 'block')
$('#pr-tabs-container .tab-content').first().css('display', 'block')
})



/************************************SKILLS*************************************/
let skillContainer = document.getElementById("skills-container");


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




addSkills();


/***********************Projects**************************************/

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


// const projectCardHtml = "<div class='project-card'><div class='project-card-inner'><div class='card-back'><div class='project-title'></div><div class='project-desc'></div><div class='project-tech'></div><div class='project-git'></div></div><div class='card-front'><div class='project-img'><img id='card-img' src='' alt='project img'></div></div></div></div>";

// function projectsSetUp() {
//     let projects = [];
//     for (let i = 0; i < 5; i++) {
//         projects.push(generateProject(i))
//     }

//     projects.forEach((project, index) => {

//         let newCard = $.parseHTML(projectCardHtml);
//         let titleNode = document.createTextNode(project.name);
//         let descNode = document.createTextNode(project.desc);
//         let gitNode = document.createTextNode(project.git);

//         for (let i = 0; i < project.tech.length; i++) {
//             let techItem = document.createTextNode(project.tech[i]);
//             let techSpan = document.createElement('div')
//             techSpan.appendChild(techItem)

//             $(newCard).find('.project-tech').append(techSpan)
//         }

//         $(newCard).find('.project-title').append(titleNode)
//         $(newCard).find('.project-desc').append(descNode)
//         $(newCard).find('.project-git').append(gitNode)

//         $('#projects-container').append(newCard)

//     })



// }

function setUpProjects() {

    let projects = [];
    for (let i = 0; i < 5; i++) {
        projects.push(generateProject(i))
    }


    let btnClasses = 'tablinks tablink-btn'
    let tabContentClasses = 'tab-content'
    projects.forEach(async (item, index) => {


        $('#pr-tab-options').append(`<li><button id="opt-${index}" class="${btnClasses}">${item.name}</button></li>`);

        $('#pr-tabs-container').append(`<div id="content-${index}" class="${tabContentClasses}"><h3>${item.name}</h3><h4>${item.tech}</h4><div><p>${item.desc}</p></div></div>`);


    });



}
setUpProjects();

/******Observer for animations *****************/

const skillsContainer = document.getElementById('skills-container');
const tabOptions = document.getElementById('exp-tab-options');
const tabOptionsPr = document.getElementById('pr-tab-options')


function updateProgressBar(entries, observer) {

    entries.forEach((entry) => {

        /**observes progress bar to trigger bar animation */
        if (entry.isIntersecting && (entry.target.id == 'skills-container')) {
            $('.progress-bar-slot').each(function () {
                let progress = $(this).find('.progress-pct').text();
                let random = Math.floor(Math.random() * (800 - 400) + 400)
                /**animmates filling the progress bar based on the progress indicated, duration is random*/
                $(this).find('.progress-fill').animate({ 'width': progress }, random)

            })
        } else if (entry.isIntersecting && (entry.target.id == 'exp-tab-options')) {
            /**observes menu options for the experience tab options section */
            $('#exp-tab-options .tablink-btn').each(function (index) {

                $(this).addClass('tablink-btn-animation')
                $(this).css({ 'display': 'block', '--order': index })

            })

        } else if (entry.isIntersecting && (entry.target.id == 'pr-tab-options')) {
            /**observes menu options for the project tab options section */
            $('#pr-tab-options .tablink-btn').each(function (index) {

                $(this).addClass('tablink-btn-animation')
                $(this).css({ 'display': 'block', '--order': index })

            })

        }
    })
}


let observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
}

let observer = new IntersectionObserver(updateProgressBar, observerOptions)

observer.observe(skillsContainer)
observer.observe(tabOptions)
observer.observe(tabOptionsPr)