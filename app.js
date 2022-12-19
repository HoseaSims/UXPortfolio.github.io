const forwardButton = document.querySelector('#forward-button')
const backButton = document.querySelector('#back-button')
const image = document.querySelector('.image')
const sImgOne = document.querySelector('#s-img-one')
const sImgTwo = document.querySelector('#s-img-two')
const sImgThree = document.querySelector('#s-img-three')
const sImgFour = document.querySelector('#s-img-four')
const projectTitle = document.querySelector("#project-title")
const projectDesc = document.querySelector("#project-desc")
const carousel = document.querySelector('.carousel-item')

let num = 1
let fadeAmount = 1.0


forwardButton.addEventListener('click', e =>{
    e.preventDefault()
    num++
    if (num === 2){
        

        carousel.style.opacity = 0
        setTimeout(() => {
            carousel.style.opacity = 1
            image.src = "./img/Sync Up.svg"
            sImgOne.src = "./img/SUSI1.svg"
            sImgTwo.src = "./img/SUSI2.svg"
            sImgThree.src = "./img/SUSI3.svg"
            sImgFour.src = "./img/SUSI4.svg"
            projectTitle.innerText = "Sync Up"
            projectDesc.innerText = "An app to reduce the amount of time, stress, and miscommunication it takes to plan an event with friends, making it easier for people to align their schedules, get together, and enjoy time together. Onboarding allows users to sync their device contacts to instantly invite their friends to the app, in addition, users set up when they have free time which they can change at any time. Users can “sync up” with friends to get notified if their free time aligns. Users are kept up to date and are notified of any changes, user also can inform the group if they are on the way, running late, arrived early, or unable to attend, ensuring that everyone is accounted for."
        }, 400);
    }else if(num >= 2){
        carousel.style.opacity = 0
        setTimeout(() => {
            carousel.style.opacity = 1
            num = 1
            image.src = "./img/questlog svg.svg"
            sImgOne.src = "./img/QLSI1.svg"
            sImgTwo.src = "./img/QLSI2.svg"
            sImgThree.src = "./img/QLSI3.svg"
            sImgFour.src = "./img/QLSI4.svg"
            projectTitle.innerText = "Quest Log"
            projectDesc.innerText = "A passion project for a video game discovery app where users can read top reviews and the latest news. Includes a Tinder-like system for users to receive tailored content based on games they already like along with helping them find new ones. Users are also able to create and rate reviews alongside professionals allowing for more trustworthy content. In all, Quest Log aims to be a single source of truth for all things gaming."
        }, 400);
        
    }
})

backButton.addEventListener('click', e =>{
    e.preventDefault()
    num--
    if(num === 1){   
        carousel.style.opacity = 0
        setTimeout(() => {
            carousel.style.opacity = 1
            image.src = "./img/questlog svg.svg"
            sImgOne.src = "./img/QLSI1.svg"
            sImgTwo.src = "./img/QLSI2.svg"
            sImgThree.src = "./img/QLSI3.svg"
            sImgFour.src = "./img/QLSI4.svg"
            projectTitle.innerText = "Quest Log"
            projectDesc.innerText = "A passion project for a video game discovery app where users can read top reviews and the latest news. Includes a Tinder-like system for users to receive tailored content based on games they already like along with helping them find new ones. Users are also able to create and rate reviews alongside professionals allowing for more trustworthy content. In all, Quest Log aims to be a single source of truth for all things gaming."
        }, 400);
        
    }else if(num <= 1){
        carousel.style.opacity = 0
        setTimeout(() => {
            carousel.style.opacity = 1
            num = 2
            image.src = "./img/Sync Up.svg"
            sImgOne.src = "./img/SUSI1.svg"
            sImgTwo.src = "./img/SUSI2.svg"
            sImgThree.src = "./img/SUSI3.svg"
            sImgFour.src = "./img/SUSI4.svg"
            projectTitle.innerText = "Sync Up"
            projectDesc.innerText = "An app to reduce the amount of time, stress, and miscommunication it takes to plan an event with friends, making it easier for people to align their schedules, get together, and enjoy time together. Onboarding allows users to sync their device contacts to instantly invite their friends to the app, in addition, users set up when they have free time which they can change at any time. Users can “sync up” with friends to get notified if their free time aligns. Users are kept up to date and are notified of any changes, user also can inform the group if they are on the way, running late, arrived early, or unable to attend, ensuring that everyone is accounted for."
        }, 400);

        
    }
    
})