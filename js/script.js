document.addEventListener("DOMContentLoaded", function () {
	const sobre = document.getElementById('sobre');
	const descriptionModal = document.querySelectorAll('.descriptionModal');
	const myModal = document.getElementById('myModal');
	const closeButtons = document.querySelectorAll('.close');

	function eventosButton(button,type){
		if(type === true){
			button.addEventListener('click',function(){
				cardDescription();
				myModal.style.display = 'block';
			});
		}else{
			button.addEventListener("click", function () {
				myModal.style.display = "none";
			});
		}
	}

	function mostrarDescricao(modalDescription){
		descriptionModal.forEach(function (modalContent) {
			modalContent.innerHTML = modalDescription;
		});
	}

	window.addEventListener('click', function(event){
		if(event.target === myModal){
			eventosButton(myModal,false)
		}
	});

	closeButtons.forEach(function () {
		eventosButton(myModal,false)
	});

	function cardDescription(){
		let modalDescription = `
		<span class="close">&times;</span>
		<p>
		O seu terreno dos sonhos está te esperando. Vai deixar passar essa oportunidade? Tudo começa com um terreno. As grandes oportunidades surgem a partir dele. Lugar tranquilo que permite você caminhe todas as manhãs de forma agradável e uma belissima cachoeira. Próximo da sede e 1 ribeirão com águas límpidas e cristalinas rodeando parte da prorpriedade.
		</p>`;
		mostrarDescricao(modalDescription);
	}

	eventosButton(sobre,true);
});

