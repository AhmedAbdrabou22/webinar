/**calling variables
 * gallery 
 * append every div image as child
 */
var gallery = document.querySelector('.gallery')

for(var i = 0 ; i < 12 ; i++){
    let div = `
        <div class='image'>
            <div>
                <img src="images/WhatsApp Image 2022-06-30 at 3.03.18 PM.jpeg" alt="">
                <div class='i'>
                    <i class="fa-solid fa-play"></i>
                </div>
                <button>Webinras ${i+1}</button>
            </div>
        </div>
    `
    gallery.innerHTML += div;
}


/*
Calling var to overlay show
*/

var images = document.querySelectorAll('.image')
var overlay = document.querySelector('.overlay');
var xmark = document.querySelector('.fa-xmark');
var body = document.body
var video = document.getElementById('video');

//Click to any div image in html will show overlay
images.forEach(image=>{
    image.addEventListener('click',()=>{
        overlay.style.display='block';
        body.style.overflowY = 'hidden';
    })
})
xmark.addEventListener('click',()=>{
    overlay.style.display='none';
    body.style.overflowY = 'visible';
    video.pause();
})

/*
    Responsive calling bars
*/
var bars = document.querySelector('.bars')
var ul = document.querySelector('.home .links ul')
bars.addEventListener('click',()=>{
    ul.classList.toggle('active2')
})

