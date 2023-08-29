let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function ExcuseGen(){
    var excuse = "";
    excuse = excuse + who[Math.floor(Math.random()*4)]
    excuse = excuse + " " + action[Math.floor(Math.random()*4)]
    excuse = excuse + " " + what[Math.floor(Math.random()*3)]
    excuse = excuse + " " + when[Math.floor(Math.random()*5)]
    // console.log(excuse);
    document.getElementById("excuse").innerHTML = '<p id="excuse">'+excuse+'</p>';
          
}


  const button = document.getElementById("boton");
//   console.log(button);

    button.addEventListener( 'click', function() {
    reload()
  });

  function reload() {
    location.reload()
  }
