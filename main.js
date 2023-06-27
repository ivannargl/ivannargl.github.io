let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #E4007C ; ">Me gusta el Desarrollo de Software Multiplataforma. :)</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
