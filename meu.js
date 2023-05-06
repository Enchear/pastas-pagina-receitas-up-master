alert('bem vindo ao meu site');
alert('meu nome e Cantinho das delicias prazer em te conhecer');
function redirecionamentos(){
    window.location.replace("https://www.facebook.com/profile.php?id=100005094797052");
}
function busca(){
  const searchInput = document.getElementById('search-input');
const productList = document.getElementById('product-list');
const products = [...productList.getElementsByTagName('li')];

searchInput.addEventListener('keyup', () => {
  const query = searchInput.value.toLowerCase();
  
  products.forEach(product => {
    const productName = product.textContent.toLowerCase();
    
    if (productName.includes(query)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
}

function notifyUser() {
    // Verifica se a API de notificações está disponível no navegador
    if ('Notification' in window) {
      // Verifica se o usuário concedeu permissão para as notificações
      if (Notification.permission === 'granted') {
        // Exibe a notificação
        var notification = new Notification('Usuário Online', {
          body: 'Você está online.',
          icon: 'caminho/para/o/icone.png'
        });
      }
      // Se o usuário ainda não concedeu permissão, solicita a permissão
      else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          // Se o usuário concedeu permissão, exibe a notificação
          if (permission === 'granted') {
            var notification = new Notification('Usuário Online', {
              body: 'Você está online.',
              icon: ''
            });
          }
        });
      }
    }
  }
  
  window.onload = function () {
    notifyUser();
    // Restante do código
  };
