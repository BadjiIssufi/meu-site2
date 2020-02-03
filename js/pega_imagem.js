var imagem_grande=document.getElementsByClassName('mostra_imagem')

var imagem_pequenas=document.getElementsByClassName('imagem_pequena')


for( i=0 ; i<imagem_pequenas.length ; i++){
	imagem_pequenas[i].addEventListener('click',function(element) {
		imagem_grande[0].src = this.src
		console.log(imagem_grande[0].src)

	})
}