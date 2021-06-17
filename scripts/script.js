"use strict"
const videoPlay1 = document.getElementById("video-play1");
const videoPlay2 = document.getElementById("video-play2");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

function playVideo(videoPlay, video) {
    video.play();
    videoPlay.style.display = "none";
}

function pauseVideo(videoPlay, video) {
    video.pause();
    videoPlay.style.display = "inline";
}

videoPlay1.addEventListener("click", () => playVideo(videoPlay1, video1));
videoPlay2.addEventListener("click", () => playVideo(videoPlay2, video2));
video1.addEventListener("click", () => pauseVideo(videoPlay1, video1));
video2.addEventListener("click", () => pauseVideo(videoPlay2, video2));


/*Плавный Скроллинг*/


const menu = document.getElementById("menu");

function scrollingTransition(event) {
    if (event.target.tagName === "A") {
        for (let i = 0; i < parent.length; i++) {
            elem[i].className = "elem";

        }
        event.preventDefault();
        const blockId = event.target.getAttribute("href");
        const id = document.querySelector(blockId);
        id.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

}

menu.addEventListener("click", scrollingTransition);


// Плавное появление елементов страницы


const parent = document.querySelectorAll(".parent");
const elem = document.querySelectorAll(".parent>.elem")


function isVisible(parent) {
    let coords = parent.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom > 0 && coords.bottom < windowHeight;
    return topVisible && bottomVisible;
}

function showContent() {
    for (let i = 0; i < parent.length; i++) {
        if (isVisible(parent[i])) {
            elem[i].className = "elem";
        }
    }
}
window.addEventListener("scroll", showContent);