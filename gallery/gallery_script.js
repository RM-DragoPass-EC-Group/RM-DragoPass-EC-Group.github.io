document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const images = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg',
        'images/7.jpg',
        'images/8.jpg',
        'images/9.jpg',
        'images/10.jpg',
        'images/11.jpg',
        'images/12.jpg',
        'images/13.jpg',
        'images/14.jpg',
        'images/15.jpg',
        'images/16.jpg',
        // Add more image paths as needed
    ];

    images.forEach(src => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Image';
        img.id = 'myImg';
        div.appendChild(img);
        gallery.appendChild(div);
    });
});

// script.js
// 获取模态框
var modal = document.getElementById("myModal");

// 获取图片和模态框中的图片
var img = document.getElementById("myImg");
var modalImg = document.getElementById("myImg");
var captionText = document.getElementById("caption");

// 当用户点击图片时，打开模态框
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// 获取 <span> 元素，用于关闭模态框
var span = document.getElementsByClassName("close")[0];

// 当用户点击 <span> (x), 关闭模态框
span.onclick = function() {
    modal.style.display = "none";
}

// 当用户点击模态框外部，关闭模态框
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
