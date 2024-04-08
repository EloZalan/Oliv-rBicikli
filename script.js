{/* <video id="myVideo" width="600" height="300" muted>
    <source src="try.mp4" type="video/mp4">
</video> */}


// const Fasza = document.getElementById('fasza')
// const vid = document.getElementById("myVideo");
// const ja = false

// function csere() {
//     console.log(ja);
//     if (ja == false){

//         disableScroll()
//         console.log('ja');
//         counter = 0;

//         vid.play();
//         setTimeout(() => {
//             vid.pause();
//         }, 50);
//     }
// }


// document.addEventListener('click', () => {
//     vid.play().then(() => {
//         console.log('Video started playing.');
//     }).catch(error => {
//         console.error('Error playing video:', error);
//     });
// });

// function preventDefaultScroll(event) {
//     event.preventDefault();
// }

// // Function to disable scrolling
// function disableScroll() {
//     document.addEventListener('wheel', preventDefaultScroll, { passive: false });
// }

// // Function to enable scrolling
// function enableScroll() {
//     document.removeEventListener('wheel', preventDefaultScroll, { passive: false });
// }

// function handleVideoEnd() {
//     enableScroll()
//     ja = true
// }
// function handleVideoStart() {
//     disableScroll()
// }

// document.addEventListener('wheel', csere)
// vid.addEventListener('ended', handleVideoEnd);



const vid = document.getElementById("myVideo");
let ja = false;

function csere() {
    if (!ja) {
        vid.play();
        vid.play();
        setTimeout(() => {
            vid.pause();
        }, 100);
    }
}

document.addEventListener('click', () => {
    vid.play().then(() => {
        console.log('Video started playing.');
    }).catch(error => {
        console.error('Error playing video:', error);
    });
});

function preventDefaultScroll(event) {
    event.preventDefault();
}

// Function to disable scrolling
function disableScroll() {
    document.addEventListener('wheel', preventDefaultScroll, { passive: false });
}

// Function to enable scrolling
function enableScroll() {
    document.removeEventListener('wheel', preventDefaultScroll, { passive: false });
}

function handleVideoEnd() {
    ja = true;
}

function handleVideoStart() {
    disableScroll();
}

function scrolling(){
    if(!ja) {
        disableScroll()
        console.log('ki');
    }
    else if(ja) {
        enableScroll()
        console.log('be');
    }
}
scrolling()



document.addEventListener('wheel', csere);
document.addEventListener('wheel', scrolling);
vid.addEventListener('ended', handleVideoEnd);