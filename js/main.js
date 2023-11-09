// *==================================*
// & 1- Background color NavBar

let sectionOffset = $ ('#About').offset ().top;
function stayColor () {
  let windowScroll = $ (window).scrollTop ();
  if (windowScroll > sectionOffset - 100) {
    $ ('.navbar').css ('backgroundColor', 'rgba(0,0,0,0.7)');
    $ ('#btnUp').removeClass ('d-none');
  } else {
    $ ('.navbar').css ('backgroundColor', 'rgba(0,0,0,0)');
    $ ('#btnUp').addClass ('d-none');
  }
}
stayColor ();
$ (window).scroll (() => stayColor ());

// *==================================*

// *==================================*
// & 2- btnUp

$ ('#btnUp').click (function () {
  $ ('html, body').animate ({scrollTop: 0}, 'slow'); //TODO 1000 === (1 second)
  new WOW ().init ();
});

// *==================================*

$ ('li a[href^="#"]').click (function () {
  let aHref = $ (this).attr ('href');
  console.log (aHref);
  let linkOffest = $ (aHref).offset ().top;
  $ (this).addClass ('.active');
  $ ('html, body').animate ({scrollTop: linkOffest}, 200);
  new WOW ().init ();
});

// *==================================*

// & change color by box color

var spans = $ ('#choose span');
var colors = ['#FF5733', '#000', '#36D7B7', '#A569BD', '#00A8E8', '#fff'];

// Loop through each span and apply a different background color
spans.each (function (index) {
  $ (this).css ('background-color', colors[index]);
});

spans.click (function () {
  let colorNew = this.style.backgroundColor;

  // Save the color to local storage
  localStorage.setItem ('selectedColor', colorNew);

  $ ('h1,h2,h5,p').css ('color', colorNew);
});

// On page load, check if a color was previously saved in local storage and apply it
$ (document).ready (function () {
  let savedColor = localStorage.getItem ('selectedColor');
  if (savedColor) {
    $ ('h1,h2,h5,p').css ('color', savedColor);
  }
});

// *==================================*

// ^  solution => 3
let boxColorWidth = $ ('#choose').width () + 7;
let left = true;
$ ('#btnBox').click (() => {
  if (left) {
    $ ('#lefttoggle').animate ({left: `-${boxColorWidth}`}, 40);
    left = false;
  } else {
    $ ('#lefttoggle').animate ({left: '0'}, 500);
    left = true;
  }
});

// *==================================*

$ (document).ready (function () {
  $ ('#spinner').fadeOut (0, function () {
    $ ('body').css ('overflow', 'auto');
  });
});
// *==================================*
new WOW ().init ();
