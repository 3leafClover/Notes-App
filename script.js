const MNavBtn = document.getElementById("MNavBtn");
const NavBtn1 = document.getElementById("NavBtn1");
const NavBtn2 = document.getElementById("NavBtn2");
const NavBtn3 = document.getElementById("NavBtn3");
const NavBtn4 = document.getElementById("NavBtn4");
const NavBtn5 = document.getElementById("NavBtn5");
const NavBtn6 = document.getElementById("NavBtn6");
const NavBtn7 = document.getElementById("NavBtn7");
const NavBtn8 = document.getElementById("NavBtn8");
const NavBtn9 = document.getElementById("NavBtn9");

navState="closed"
MNavBtn.style.zIndex="11"

MNavBtn.addEventListener("click", NavOpen);

function NavOpen() {
    if (navState === "closed") {
        playSound("soundNavOpen");
        NavBtn1.style.animation = "nav1A 0.4s forwards";
        NavBtn2.style.animation = "nav2A 0.6s forwards";
        NavBtn3.style.animation = "nav3A 0.8s forwards";
        NavBtn9.style.animation = "nav9A 1s forwards";
        NavBtn4.style.animation = "nav4A 0.4s forwards";
        NavBtn5.style.animation = "nav5A 0.6s forwards";
        NavBtn6.style.animation = "nav6A 0.8s forwards";
        NavBtn7.style.animation = "nav7A 1s forwards";
        NavBtn8.style.animation = "nav8A 1.2s forwards";
        MNavBtn.style.animation = "MNavBtnA 0.1s forwards";
        MNavBtn.innerHTML="<i class='bi bi-x-lg'></i>";
        MNavBtn.style.boxShadow="none";
        navState = "open";
        console.log(navState)
    }
    else if (navState === "open") {
        playSound("soundNavClose");
        NavBtn1.style.animation = "nav1AR 0.4s forwards";
        NavBtn2.style.animation = "nav2AR 0.4s forwards";
        NavBtn3.style.animation = "nav3AR 0.4s forwards";
        NavBtn9.style.animation = "nav9AR 0.4s forwards";
        NavBtn4.style.animation = "nav4AR 0.4s forwards";
        NavBtn5.style.animation = "nav5AR 0.4s forwards";
        NavBtn6.style.animation = "nav6AR 0.4s forwards";
        NavBtn7.style.animation = "nav7AR 0.4s forwards";
        NavBtn8.style.animation = "nav8AR 0.4s forwards";
        MNavBtn.style.animation = "MNavBtnAR 0.1s forwards";
        MNavBtn.innerHTML="<i class='bi bi-list-ul'></i>";
        MNavBtn.style.boxShadow= "0px 0px 20px var(--secondary-light)";
        navState = "closed";
        console.log(navState)
    }    
}

const btns = document.querySelectorAll(".Btns");
selected=document.querySelector(".selected");

btns.forEach(btn => {
    btn.addEventListener("mouseover", (e) => {
        btn.style.boxShadow = "0px 0px 20px var(--secondary-light)";
        btn.style.zIndex="9"
        MNavBtn.style.zIndex="11"
        selected.style.zIndex="10"
    });

    btn.addEventListener("mouseleave", (e) => {
        btn.style.boxShadow = "0px 0px 0px var(--secondary-light)";
        btn.style.zIndex="8"
        MNavBtn.style.zIndex="11"
        selected.style.zIndex="10"
    });
    selected.addEventListener("mouseleave", (e) => {
        selected.style.boxShadow = "0px 0px 20px var(--secondary-light)";
    });
});



const slotElements = [];
const naElements = [];

for (let i = 1; i <= 8; i++) {
    slotElements.push(document.getElementById(`slot${i}`));
    naElements.push(document.getElementById(`na${i}`));
}




const numSlots = 8;
const slotPrefix = "slot";
const naPrefix = "na";



slot1.addEventListener("click",displaySlot1);
slot2.addEventListener("click",displaySlot2);
slot3.addEventListener("click",displaySlot3);
slot4.addEventListener("click",displaySlot4);
slot5.addEventListener("click",displaySlot5);
slot6.addEventListener("click",displaySlot6);
slot7.addEventListener("click",displaySlot7);
slot8.addEventListener("click",displaySlot8);


home=document.getElementById("home");
clover=document.getElementById("clover");
homepage=document.getElementById("homepage");

function displaySlot1(){
    hideAllNotes();
    na1.style.display = "block";
    slot1.style.backgroundImage="linear-gradient(to right, var(--secondary) , var(--secondary-light) )";
    slot1.style.boxShadow= "0px 0px 20px var(--secondary-light)";
    home.style.display="block";
    clover.style.display="none";
    homepage.style.display="none";
}
function displaySlot2(){
    hideAllNotes();
    na2.style.display = "block";
    slot2.style.backgroundImage="linear-gradient(to right, var(--secondary) , var(--secondary-light) )";
    slot2.style.boxShadow= "0px 0px 20px var(--secondary-light)";
    home.style.display="block";
    clover.style.display="none";
    homepage.style.display="none";
}
function displaySlot3(){
    hideAllNotes();
    na3.style.display = "block";
    slot3.style.backgroundImage="linear-gradient(to right, var(--secondary) , var(--secondary-light) )";
    slot3.style.boxShadow= "0px 0px 20px var(--secondary-light)";
    home.style.display="block";
    clover.style.display="none";
    homepage.style.display="none";
}
function displaySlot4(){
    hideAllNotes();
    na4.style.display = "block";
    slot4.style.backgroundImage="linear-gradient(to right, var(--secondary) , var(--secondary-light) )";
    slot4.style.boxShadow= "0px 0px 20px var(--secondary-light)";
    home.style.display="block";
    clover.style.display="none";
    homepage.style.display="none";
}
function displaySlot5(){
    hideAllNotes();
    na5.style.display = "block";
    slot5.style.backgroundImage="linear-gradient(to right, var(--secondary) , var(--secondary-light) )";
    slot5.style.boxShadow= "0px 0px 20px var(--secondary-light)";
    home.style.display="block";
    clover.style.display="none";
    homepage.style.display="none";
}
function displaySlot6(){
    hideAllNotes();
    na6.style.display = "block";
    slot6.style.backgroundImage="linear-gradient(to right, var(--secondary) , var(--secondary-light) )";
    slot6.style.boxShadow= "0px 0px 20px var(--secondary-light)";
    home.style.display="block";
    clover.style.display="none";
    homepage.style.display="none";
}
function displaySlot7(){
    hideAllNotes();
    na7.style.display = "block";
    slot7.style.backgroundImage="linear-gradient(to right, var(--secondary) , var(--secondary-light) )";
    slot7.style.boxShadow= "0px 0px 20px var(--secondary-light)";
    home.style.display="block";
    clover.style.display="none";
    homepage.style.display="none";
}
function displaySlot8(){
    hideAllNotes();
    na8.style.display = "block";
    slot8.style.backgroundImage="linear-gradient(to right, var(--secondary) , var(--secondary-light) )";
    slot8.style.boxShadow= "0px 0px 20px var(--secondary-light)";
    home.style.display="block";
    clover.style.display="none";
    homepage.style.display="none";
}


function hideAllNotes() {
    playSound("soundSlotSwitch");
    home.style.display="none";
    clover.style.display="block";
    homepage.style.display="block";
    const noteElements = [
        na1, na2, na3, na4, na5, na6, na7, na8
    ];

    const slotElements = [
        slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8
    ];

    for (const noteElement of noteElements) {
        noteElement.style.display = "none";
    }

    for (const slotElement of slotElements) {
        slotElement.style.backgroundImage = "linear-gradient(to right, var(--primary), var(--primary-light))";
        slotElement.style.boxShadow = "none";
    }
}



document.addEventListener("keydown", (e) => {
    if (e.altKey) {
        switch (e.code) {
            case "KeyO":
                NavOpen();
                break;
            case "Digit1":
                displaySlot1();
                break;
            case "Digit2":
                displaySlot2();
                break;
            case "Digit3":
                displaySlot3();
                break;
            case "Digit4":
                displaySlot4();
                break;
            case "Digit5":
                displaySlot5();
                break;
            case "Digit6":
                displaySlot6();
                break;
            case "Digit7":
                displaySlot7();
                break;
            case "Digit8":
                displaySlot8();
                break;
            case "KeyN":
                customizeM();
                break;
            case "KeyB":
                musicM();
                break;
            case "KeyM":
                plannerM();
                break;
            case "KeyV":
                imagesM();
                break;
            case "KeyP":
                openFullscreen();
                break;
            case "KeyI":
                closeSlotsFunction();
                break;
            case "KeyU":
                openShortcuts();
                break;
            case "KeyX":
                hideAllNotes();
                break;
            case "KeyR":
                piano();
                break;
        }
    }
});


const titleElements = [];

for (let i = 1; i <= 8; i++) {
    const title = document.getElementById(`title${i}`);
    titleElements.push(title);

    title.addEventListener("input", () => {
        localStorage.setItem(`storedTitle${i}`, title.value);
        displaySlotTitles();
    });
}

function loadTitles() {
    for (let i = 1; i <= 8; i++) {
        titleElements[i - 1].value = localStorage.getItem(`storedTitle${i}`);
    }
}



loadTitles();

for (let i = 1; i <= 8; i++) {
    const desc = document.getElementById(`desc${i}`);

    desc.addEventListener("input", () => {
        localStorage.setItem(`storedDesc${i}`, desc.value);
    });
}



function loadDescs() {
    for (let i = 1; i <= 8; i++) {
        const descKey = `storedDesc${i}`;
        const descInput = document.querySelector(`#desc${i}`);
        
        descInput.value = localStorage.getItem(descKey);
    }
}


loadDescs()





var infoElements = document.querySelectorAll("#infoCont p");
var lastInfo=document.getElementById("lastInfo")
FCBtn=document.getElementById("FCBtn")
function openFullscreen() {
    playSound("soundFC");
    const elem = document.documentElement;
    infoElements.forEach(element => {
    lastInfo.style.border="0px solid";
    });    
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    FCBtn.style.display="none";
}

document.addEventListener("fullscreenchange", function(event) {
    if (!document.fullscreenElement) {
        lastInfo.style.borderRight="9px solid  var(--border)";
        FCBtn.style.display="block";
    }
});


function updateTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    var Nminutes

    if(minutes<1){
        Nminutes="00"
    }
    else if(minutes<10){
        Nminutes="0"+minutes
    }
    else{
        Nminutes=minutes
    }

    let amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const formattedTime = `${hours}:${Nminutes} ${amOrPm}`;
    currentTimeElement.textContent = formattedTime;
}

updateTime();

setInterval(updateTime, 1000);

const currentDateElement = document.getElementById("currentDate");

function updateCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    currentDateElement.innerHTML = `${formattedDate.replace(/, /g, ' ')}`;
}

updateCurrentDate(); // Call the function initially to display the current date
function displaySlotTitles() {
    const titleElements = [
        title1, title2, title3, title4, title5, title6, title7, title8
    ];
    
    const slotElements = [
        slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8
    ];

    for (let i = 0; i < titleElements.length; i++) {
        const titleElement = titleElements[i];
        const slotTitElement = slotElements[i].querySelector(".slotTit");

        if (titleElement.value.trim() !== '') {
            slotTitElement.textContent = titleElement.value;

            if (titleElement.value.length > 12) {
                slotTitElement.style.fontSize = "20px";
            }
        }
    }
}



displaySlotTitles();


function updateColors() {
    const primaryColor = document.getElementById("primaryColorPicker").value;
    const secondaryColor = document.getElementById("secondaryColorPicker").value;
    const borderColor = document.getElementById("borderColorPicker").value;

    document.documentElement.style.setProperty("--primary", primaryColor);
    document.documentElement.style.setProperty("--secondary", secondaryColor);
    document.documentElement.style.setProperty("--border", borderColor);
    document.documentElement.style.setProperty("--background-color", secondaryColor + "90");

    const primaryLight = lightenColor(primaryColor, 60);
    const secondaryLight = lightenColor(secondaryColor, 60);
    document.documentElement.style.setProperty("--primary-light", primaryLight);
    document.documentElement.style.setProperty("--secondary-light", secondaryLight);

    saveColorsToLocalStorage(primaryColor, secondaryColor, borderColor);
}

function lightenColor(color, percent) {
    const factor = 1 + percent / 100;
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    const newR = Math.min(Math.round(r * factor), 255);
    const newG = Math.min(Math.round(g * factor), 255);
    const newB = Math.min(Math.round(b * factor), 255);

    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}

function saveColorsToLocalStorage(primaryColor, secondaryColor,borderColor) {
    localStorage.setItem("primaryColor", primaryColor);
    localStorage.setItem("secondaryColor", secondaryColor);
    localStorage.setItem("borderColor", borderColor);
}

function loadColorsFromLocalStorage() {
    const storedPrimaryColor = localStorage.getItem("primaryColor");
    const storedSecondaryColor = localStorage.getItem("secondaryColor");
    const storedBorderColor = localStorage.getItem("borderColor");

    if (storedPrimaryColor && storedSecondaryColor) {
        document.getElementById("primaryColorPicker").value = storedPrimaryColor;
        document.getElementById("secondaryColorPicker").value = storedSecondaryColor;
        document.getElementById("borderColorPicker").value = storedBorderColor;
        updateColors();
    }
}

document.getElementById("primaryColorPicker").addEventListener("input", updateColors);
document.getElementById("secondaryColorPicker").addEventListener("input", updateColors);
document.getElementById("borderColorPicker").addEventListener("input", updateColors);

loadColorsFromLocalStorage();
updateColors();


document.addEventListener("DOMContentLoaded", () => {
    const backgroundInput = document.getElementById("backgroundInput");

    backgroundInput.addEventListener("change", handleBackgroundUpload);
});

function handleBackgroundUpload(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const uploadedBackground = e.target.result;
            applyUploadedBackground(uploadedBackground);
            saveBackgroundToLocalStorage(uploadedBackground);
        }

        reader.readAsDataURL(file);
    }
}
blur=document.querySelector(".blur")
function applyUploadedBackground(background) {
    blur.style.backgroundImage = `url(${background})`;
}

function saveBackgroundToLocalStorage(background) {
    localStorage.setItem("uploadedBackground", background);
}

function loadBackgroundFromLocalStorage() {
    const background = localStorage.getItem("uploadedBackground");
    if (background) {
        applyUploadedBackground(background);
    }
}

loadBackgroundFromLocalStorage();






function applyBlur() {
    const blurElement = document.querySelector('.blur');
    blurElement.style.filter = "blur(2px)";
}

function UnBlur() {
    const blurElement = document.querySelector('.blur');
    blurElement.style.filter = "blur(0px)";
}




customizeState="closed"
var customize = document.getElementById("customize");
document.getElementById("customizeC")
const menuElements = document.querySelectorAll('.menus');


function customizeM() {
    if (customizeState === "closed") {   
        playSound("soundMenuOpen");
        customize.style.display = "block";
        customize.style.animation = "MdropDown 0.6s forwards";
        customizeState = "open";
        if(musicState==="open"){
            musicM()
        }
        if(plannerState==="open"){
            plannerM()
        }
        if(imagesState==="open"){
            imagesM()
        }
        const allElements = document.body.getElementsByClassName("blur");
        for (let i = 0; i < allElements.length; i++) {
            applyBlur(allElements[i]);
        }
    } else {
        playSound("soundMenuClose");
        customize.style.animation = "RdropDown 0.8s forwards";
        customizeState = "closed";
        setTimeout(function() {
            customize.style.display = "none";
        }, 200);
        const allElements = document.body.getElementsByClassName("blur");
        for (let i = 0; i < allElements.length; i++) {
            UnBlur(allElements[i]);
        }
    }



}

musicState="closed"
var music = document.getElementById("music");
document.getElementById("musicC")

function musicM() {
    if (musicState === "closed") {
        playSound("soundMenuOpen");
        music.style.display = "block";
        music.style.animation = "MdropDown 0.6s forwards";
        musicState = "open";
        if(customizeState==="open"){
            customizeM()
        }
        if(plannerState==="open"){
            plannerM()
        }
        if(imagesState==="open"){
            imagesM()
        }
        const allElements = document.body.getElementsByClassName("blur");
        for (let i = 0; i < allElements.length; i++) {
            applyBlur(allElements[i]);
        }
    } else {
        playSound("soundMenuClose");
        music.style.animation = "RdropDown 0.8s forwards";
        musicState = "closed";
        setTimeout(function() {
            music.style.display = "none";
        }, 200);
            const allElements = document.body.getElementsByClassName("blur");
            for (let i = 0; i < allElements.length; i++) {
                UnBlur(allElements[i]);
        }
    }

    
}


plannerState="closed"
var planner = document.getElementById("planner");
document.getElementById("plannerC");

function plannerM() {
    if (plannerState === "closed") {
        playSound("soundMenuOpen");
        planner.style.display = "block";
        planner.style.animation = "MdropDown 0.6s forwards";
        plannerState = "open";
        if(musicState==="open"){
            musicM()
        }
        if(customizeState==="open"){
            customizeM()
        }
        if(imagesState==="open"){
            imagesM()
        }
        const allElements = document.body.getElementsByClassName("blur");
        for (let i = 0; i < allElements.length; i++) {
            applyBlur(allElements[i]);
        }
    } else {
        playSound("soundMenuClose");
        planner.style.animation = "RdropDown 0.8s forwards";
        plannerState = "closed";
        setTimeout(function() {
            planner.style.display = "none";
        }, 200);


        const allElements = document.body.getElementsByClassName("blur");
        for (let i = 0; i < allElements.length; i++) {
            UnBlur(allElements[i]);
        }
    }
}

imagesState="closed"
var images = document.getElementById("images");
document.getElementById("imagesC");

function imagesM() {
    if (imagesState === "closed") {
        playSound("soundMenuOpen");
        images.style.display = "block";
        images.style.animation = "MdropDown 0.6s forwards";
        imagesState = "open";
        if(musicState==="open"){
            musicM()
        }
        if(customizeState==="open"){
            customizeM()
        }
        if(plannerState==="open"){
            plannerM()
        }
        const allElements = document.body.getElementsByClassName("blur");
        for (let i = 0; i < allElements.length; i++) {
            applyBlur(allElements[i]);
        }
    } else {
        playSound("soundMenuClose");
        images.style.animation = "RdropDown 0.8s forwards";
        imagesState = "closed";
        setTimeout(function() {
            planner.style.display = "none";
        }, 200);


        const allElements = document.body.getElementsByClassName("blur");
        for (let i = 0; i < allElements.length; i++) {
            UnBlur(allElements[i]);
        }
    }
}

var iframe = document.getElementById("myIframe");
var linkSubmit = document.getElementById("linkSubmit");

linkSubmit.addEventListener("click", function() {
    var linkInput = document.getElementById("linkInput").value;
    var videoId = getVideoId(linkInput);
    
    if (videoId) {
        var embedLink = "https://www.youtube.com/embed/" + videoId;
        iframe.src = embedLink;
    }
});

function getVideoId(url) {
    var regExp = /(?:[?&]v=|\/embed\/|\/\d+\/|\/vi\/|\/e\/|https?:\/\/(?:www\.)?youtube.com\/user\/[^#]*#([^\/]*?\/)*)[^#]*?([^\/\&\?]*)(?:[\&\?]list=([^\&\?]*))?/i;
    var match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
}

// Function to update the battery percentage
function updateBatteryStatus(battery) {
    const batteryPercentageElement = document.getElementById("batteryPercentage");
  
    if (battery.charging) {
      batteryPercentageElement.textContent = "Charging";
    } else {
      const percentage = Math.floor(battery.level * 100);
      batteryPercentageElement.textContent = `${percentage}%`;
    }
  }
  
// Check if the Battery API is supported
if ('getBattery' in navigator) {
    navigator.getBattery().then(updateBatteryStatus);
  
    // Update battery percentage when battery status changes
    navigator.getBattery().then(function(battery) {
      battery.addEventListener('chargingchange', function() {
        updateBatteryStatus(battery);
        });
  
      battery.addEventListener('levelchange', function() {
        updateBatteryStatus(battery);
        });
    });
} else {
    const batteryPercentageElement = document.getElementById("batteryPercentage");
    batteryPercentageElement.textContent = "N/A";
}
var closeSlotsButton = document.getElementById("closeSlots");
var slotCont = document.getElementById("slotCont");
var noteAreas = document.getElementsByClassName("noteArea");
var closeSlotsi=document.getElementById("closeSlotsI")
var slotState="closed"


// ...

function closeSlotsFunction() {
    playSound("soundSlotOpen");
    if (slotState === "open") {
        // Update slotState before animations
        slotState = "closed";
        

        // Apply closing animations
        slotCont.style.animation = "closeSlotsA 0.8s forwards";
        closeSlotsButton.style.animation = "closeSlotsB 0.8s forwards";

        for (let i = 0; i < noteAreas.length; i++) {
            noteAreas[i].style.animation = "wideNote 0.8s forwards";
        }

        closeSlotsi.style.animation = "rotate 0.8s forwards";
    } else if (slotState === "closed") {
        // Update slotState before animations
        slotState = "open";

        // Apply opening animations
        slotCont.style.animation = "closeSlotsAR 0.8s forwards";
        closeSlotsButton.style.animation = "closeSlotsBR 0.8s forwards";

        for (let i = 0; i < noteAreas.length; i++) {
            noteAreas[i].style.animation = "wideNoteR 0.8s forwards";
        }

        closeSlotsi.style.animation = "rotateR 0.8s forwards";
    }
}



shortcutBtn=document.getElementById("lastInfo");
shortcuts=document.getElementById("shortcuts");


shortcutState="closed"
function openShortcuts(){
    playSound("soundShortcutOpen");
    if(shortcutState==="closed"){
        shortcutState="open";
        shortcuts.style.animation="shortcutsA 0.6s forwards";
    }
    else{
        shortcutState="closed";
        shortcuts.style.animation="shortcutsAR 0.5s forwards";
    }
}

function piano(){
    window.location.href = "piano/piano.html";
}




document.addEventListener("DOMContentLoaded", function() {
    closeSlotsFunction()
    
});

let currentAudio = null;

function playSound(soundId) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    const soundEffect = document.getElementById(soundId);
    if (soundEffect) {
        soundEffect.play();
        currentAudio = soundEffect;
    }
}

// Get the audio element
const soundNavOpen = document.getElementById("soundNavOpen");

soundNavOpen.volume = 0.4;

const soundNavClose = document.getElementById("soundNavClose");

soundNavClose.volume = 0.4;


var tasks = document.getElementsByClassName("plan");

for (var i = 0; i < tasks.length; i++) {
    var taskInput = tasks[i].querySelector("input");

    (function(index) {
        taskInput.addEventListener("input", function(event) {
            var inputValue = event.target.value;
            var localStorageKey = "task_" + index;
            localStorage.setItem(localStorageKey, inputValue);
        });

        var localStorageKey = "task_" + index;
        var storedValue = localStorage.getItem(localStorageKey);
        if (storedValue) {
            taskInput.value = storedValue;
        }
    })(i);
}



const imageContainer = document.getElementById("imageContainer");
const imageInput = document.getElementById("imageInput");

// Load images from local storage on page load
window.addEventListener("load", function() {
    const savedImages = JSON.parse(localStorage.getItem("uploadedImages")) || [];

    for (const imageUrl of savedImages) {
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageContainer.appendChild(imageElement);
    }
});

imageInput.addEventListener("change", function(event) {
    const files = event.target.files;
    const savedImages = JSON.parse(localStorage.getItem("uploadedImages")) || [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(event) {
            const imageUrl = event.target.result;
            savedImages.push(imageUrl);
            localStorage.setItem("uploadedImages", JSON.stringify(savedImages));

            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            imageContainer.appendChild(imageElement);
        };

        reader.readAsDataURL(file);
    }
});


