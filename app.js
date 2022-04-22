const btn = document.querySelector('.switch-btn');
const container = document.querySelector('.video-container');

btn.addEventListener('click', function(){
if(!btn.classList.contains('slide')){
 btn.classList.add('slide');
 Video.pause();
}else{
 btn.classList.remove('slide');
 video.play();
}
});

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load',function(){
 preloader.classList.add('lide-preloader');
})

