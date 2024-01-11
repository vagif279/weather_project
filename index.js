// $("p").on({
//     mouseenter: function () {
//         $(this).css("background-color", "lightgray");
//     },
//     mouseleave: function () {
//         $(this).css("background-color", "lightblue");
//     },
//     click: function () {
//         $(this).css("background-color", "yellow");
//     }
// });

const ps = document.querySelectorAll('p');

ps.forEach(p => {
    p.addEventListener('mouseenter', () => p.style.backgroundColor = 'lightgray');
    p.addEventListener('mouseleave', () => p.style.backgroundColor = 'lightblue');
    p.addEventListener('click', () => p.style.backgroundColor = 'yellow');
})