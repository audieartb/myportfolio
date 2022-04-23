import './assets/styles.scss';
import "regenerator-runtime/runtime.js";
const $ = require('jquery');
const tabIcon = require('./assets/img/icon-tab.svg')
const data = require('./data/db.js')


var loader = document.getElementById('preloader');
window.addEventListener("load", function () {
    loader.style.display = "none";

})

const skills = data.skills

/****************************EXPERIENCE**********************************************/

const experienceData = data.experience;

function setUpExperience() {

    let btnClasses = 'tablinks tablink-btn'
    let tabContentClasses = 'tab-content'
    experienceData.forEach(async (item, index) => {
        let desc = item.description.replace(/(?:\r\n|\r|\n)/g, '<br>');

        $('#exp-tab-options').append(` <li><button id="exp-${index}" class="${btnClasses}"> <img src=${tabIcon} /> ${item.company}</button></li>`);

        $('#exp-tabs-container').append(`<div id="exp-content-${index}" class="${tabContentClasses}"><h3>${item.company}</h3>
        <h4>${item.start} - ${item.end}</h4><div> <p>${desc}</p> </div></div>`);
    });



}

setUpExperience()

/**
 * JQUERY FUNCTIONS
 * Detect changes to switch tabs */
$(function () {
    $('.tablinks').on("click", function (event) {

        let id = this.getAttribute("id").split("-");
        //     let i, tablinks;

        //     $(`#${id[0]}-tabs-container .tab-content`).each(function(index){
        //         if(this.style.display == 'flex'){
        //            this.style.display ='none'
        //         }          
        //     });

        //     tablinks = document.getElementsByClassName("tablinks");
        //     for (i = 0; i < tablinks.length; i++) {
        //         tablinks[i].className = tablinks[i].className.replace(" active", "");
        //     };

        //     document.getElementById(`${id[0]}-content-${id[1]}`).style.display = "flex";
        //     event.currentTarget.className += " active";

        let prevTab = $(`#${id[0]}-tabs-container .tab-content.show-tab`)
        let nextTab = $(`#${id[0]}-content-${id[1]}`)

        if (!nextTab.hasClass("show-tab")) {
            try {
                // prevTab.fadeOut(400, function () {
                //     prevTab.delay().removeClass("show-tab");
                //     prevTab.css({opacity: 0})
                // });
                // nextTab.delay(400).fadeIn(200, function () {
                //     nextTab.addClass('show-tab')
                // })

                prevTab.animate({ opacity: 0 }, 200, function () {
                    prevTab.removeClass('show-tab')
                });
                nextTab.delay(500).addClass('show-tab')
                nextTab.animate({ opacity: 1 }, 600)
            } catch (error) {
                console.log(error)
            }
        }
        return false;

    });
});

/*
 sets the first tab as active
*/
$(() => {

    $('#exp-tabs-container .tab-content').first().addClass("show-tab").css({ opacity: 1 })
    $('#pr-tabs-container .tab-content').first().addClass("show-tab").css({ opacity: 1 })
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
    newPr.name = `Project${id}`
    newPr.img = "./fox-card.png"
    newPr.desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia nisi nulla, expedita hic, sit distinctio quod, ducimus natus dicta ut voluptates? Accusantium nisi obcaecati eum dignissimos repellendus rerum delectus"
    newPr.tech = ["vuejs", "nodejs", "angular", "mongoDB", "graphQL"]
    newPr.git = "https://github.com/"

    return newPr
}

function setUpProjects() {

    let projects = [];
    for (let i = 0; i < 5; i++) {
        projects.push(generateProject(i))
    }

    let btnClasses = 'tablinks tablink-btn'
    let tabContentClasses = 'tab-content'

    projects.forEach(async (item, index) => {

        $('#pr-tab-options').append(`<li><button id="pr-${index}" class="${btnClasses}"><img src=${tabIcon} /> ${item.name}</button></li>`);

        $('#pr-tabs-container').append(`<div id="pr-content-${index}" class="${tabContentClasses}"><div><h3>${item.name}</h3></div><div><p>${item.desc}</p></div><div id="tech-card-${index}" class="tech-footer"></div></div>`);

        let ul = document.createElement('ul')
        ul.setAttribute('class', 'tech-list')
        item.tech.forEach(el => {
            let li = document.createElement('li')
            let node = document.createTextNode(el)
            li.appendChild(node)
            ul.appendChild(li)
        })

        document.getElementById(`tech-card-${index}`).appendChild(ul)


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
        } else if (!entry.isIntersecting && (entry.target.id == 'skills-container')) {
            console.log('.')
            $('.progress-bar-slot').each(function () {
                $(this).find('.progress-fill').animate({ 'width': 0 }, 200)
            })
        }

        else if (entry.isIntersecting && (entry.target.id == 'exp-tab-options')) {
            /**observes menu options for the experience tab options section */
            $('#exp-tab-options .tablink-btn').each(function (index) {

                $(this).addClass('tablink-btn-animation')
                $(this).css({ 'display': 'block', '--order': index })

            })
        }
        else if (!entry.isIntersecting && (entry.target.id == 'exp-tab-options')) {
            /**observes menu options for the experience tab options section */
            $('#exp-tab-options .tablink-btn').each(function (index) {

                $(this).removeClass('tablink-btn-animation')
                $(this).css({ 'display': 'none', '--order': index })

            })

        } else if (entry.isIntersecting && (entry.target.id == 'pr-tab-options')) {
            /**observes menu options for the project tab options section */
            $('#pr-tab-options .tablink-btn').each(function (index) {

                $(this).addClass('tablink-btn-animation')
                $(this).css({ 'display': 'flex', '--order': index })

            })
        } else if (!entry.isIntersecting && (entry.target.id == 'pr-tab-options')) {
            /**observes menu options for the project tab options section */
            $('#pr-tab-options .tablink-btn').each(function (index) {

                $(this).removeClass('tablink-btn-animation')
                $(this).css({ 'display': 'none', '--order': index })

            })

        }
    })
}

let observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

let observer = new IntersectionObserver(updateProgressBar, observerOptions)

observer.observe(skillsContainer)
observer.observe(tabOptions)
observer.observe(tabOptionsPr)