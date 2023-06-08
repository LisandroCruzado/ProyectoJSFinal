//Loguin tutor
function login(){
	var user, password
	user = document.getElementById("usuario").value;
	password = document.getElementById("contrasena").value;
	if (user=="tutor" && password=="123456"){
		window.location = "loguin2.html";
	}else{
		alert("Usuario o contraseña incorrecta")
	}
}

//Mensaje de Bienvenida
if (!localStorage.getItem('mensajeMostrado')){
Swal.fire({
	title: 'BIENVENIDO A PILATES BODYLINE',
	imageUrl: 'img/logo.jpg',
	imageWidth: '250px',
	imageHeight: '250px',
	imgAlt: 'Imagen Pilates',
	footer: '<span class="rojo">Resolución óptima para disfrutar de nuestro contenido 1920x1080p</span>'
	})
	// Guarda el estado en el almacenamiento local
	localStorage.setItem('mensajeMostrado', true);
}

const mainImg = document.getElementById("main-img");
const allImgs = document.querySelectorAll(".gallery img");
//Selector galeria
allImgs.forEach((img) => {
	img.addEventListener("click", (e) => {
		let selectedImg = e.target;
		mainImg.src = selectedImg.src;
		//Si quiero remover el marco negro de la imgen seleccionada;
		allImgs.forEach((images) => images.classList.remove("active"));

		selectedImg.classList.add("active");
	});
});

//SplitType
const myText = new SplitType('#my-text')
gsap.to('.char', {
	y: 0,
	stagger: 0.05,
	delay: 0.2,
	duration: .1
})