//players names
var p1 = prompt('Player 1 is red.\n Please enter your name.')
var p2 = prompt("Player 2 is blue.\n Please enter your name.")

//creating round chips
var rnd = {
  'height': "100px",
  'width': "100px",
  'border': "0px solid black",
  'border-radius': "50px",
  'background': "grey"
}
$('td').css(rnd)

//centering
$('table').attr('align','center')
$('.wlcm').css('text-align','center')
$('#fdiv').addClass('jumbotron')

for (var i = 0; i <7; i++) {
  $('tr').eq(i).addClass('es')
}//giving class to tr tag

jtd = 0;
for (var i = 0; i < 42; i++) {
  if (jtd<7) {
    $('tr td').eq(i).addClass('td'+jtd)
    jtd++;
  }
  if (jtd%7 ===0 ) {
    jtd = 0;
  }
}//giving classes to every td...td0 to td6

for (var i = 0; i < 7; i++) {
  window["k"+i] = 5;
}//creating key for classes key--..... each of these represent a class. k0 bole to td0 class


function  clmnComparison(background, plyr,clsNm){
  if (clsEle <= 2) { // "2" is selected as total rows are 6. if n rows are there then n-4
    key = 0;
    for (var i = clsEle+1; i < clsEle+4 ; i++) {
      var clrComp = $('td.'+ clsNm).eq(i).css('background-color')
      if (clrComp === background) {
        key++
        if (key===3) {
          declare(plyr)
        }
      }
    }
  }
}//function for comparing column connects

function rwComparison(background, plyr,clsNm){
  key = 0;
  var tellCls = parseInt(clsNm.slice(2))
  for (var i = tellCls-3; i < tellCls+4 ; i++) {
    if (i>=0 && i<=6) { // "6" because 7 columns are there. we have to put no. of colmns here
      var clrComp = $('td.td'+ i).eq(clsEle).css('background-color')
      if (clrComp === background) {
        key++
        if (key===4) {
          declare(plyr)
        }
      }
    }
  }
}//function to compare row connects.

ktp=0
$('#name').text(p1)
$('td').click(function(){
  var clsNm = $(this).attr('class');
  clsEle = window["k"+clsNm.slice(2)];
  if (clsEle >= 0) {
    if (ktp===0) {
      $('td.'+clsNm).eq(clsEle).css("background","red")
      clmnComparison("rgb(255, 0, 0)", p1,clsNm)
      rwComparison("rgb(255, 0, 0)", p1,clsNm)
      window["k"+clsNm.slice(2)]-- ;
      ktp = 1;
      $('#name').text(p2)
    }else if (ktp===1) {
      $('td.'+clsNm).eq(clsEle).css("background","blue")
      clmnComparison("rgb(0, 0, 255)",p2,clsNm)
      rwComparison("rgb(0, 0, 255)",p2,clsNm)
      window["k"+clsNm.slice(2)]-- ;
      ktp = 0;
      $('#name').text(p1)
    }
  }else {
    alert("Please pick another column")
  }
})//main code which takes the input and computes win or not.


function declare(plyr){
  $('h1').text("hurray! \""+ plyr +"\" is winner.")
  $('h5').text("Party deo.")
  $('p').html("<h4 > Thank you for Playing!")
  $('table').html("")
}
