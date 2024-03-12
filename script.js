/*function btnEnviarMensagem(){
   // let nome = getElementsById('name').value;
    //let email = getElementsById('email').value;
   // let mensagem = getElementsById('mensagem').value;

 //   console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);

}/** */




colorButton = document.querySelector('btn-form');

// Variable to track the current color state
let original = true;

// Function to toggle the color of the button
function enviarMensagem() {
    if (original) {
        colorButton.style.backgroundColor = '#B2784A'; // Change to black
    } else {
        colorButton.style.backgroundColor = '#8F542E'; // Change to white
    }
    // Update the color state
    original = !original;
}

// Add a click event listener to the button
colorButton.addEventListener('click', enviarMensagem);
