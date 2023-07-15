
var titleBox = document.querySelector('#headDiv');
var titleLetters = [
    'P', 'a', 'i', 'n', 't',
    'i', 'n', 'g', 's', ' ',
    'B', 'y', ' ', 'C', 'o',
    'n', 'n', 'i', 'e'
  ];
var stop = 0;

var titleAnimation = setInterval(function() {
    var letter = document.createElement('h1');
    letter.textContent = titleLetters[stop];
    titleBox.append(letter);
    stop++;

    if (stop === titleLetters.length) {
        clearInterval(titleAnimation);
    };
},200);
