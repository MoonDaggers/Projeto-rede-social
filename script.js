document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var mensagemInput = document.getElementById('mensagemInput');
    var mensagemTexto = mensagemInput.value;
    
    if (mensagemTexto.trim() !== '') {
      var mensagemElement = document.createElement('div');
      mensagemElement.classList.add('mensagem');
      mensagemElement.textContent = mensagemTexto;
    
      document.getElementById('mensagens').appendChild(mensagemElement);
      
      mensagemInput.value = '';
    }
  });