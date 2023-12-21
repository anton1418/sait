document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('message').innerText = 'Данные записаны';
  });