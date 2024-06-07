document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let isValid = true;
  
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
  
    if (!name.value.trim()) {
      isValid = false;
      nameError.style.display = 'block';
    } else {
      nameError.style.display = 'none';
    }
  
    if (!phone.value.trim()) {
      isValid = false;
      phoneError.style.display = 'block';
    } else {
      phoneError.style.display = 'none';
    }
  
    if (isValid) {
      alert('Formulário enviado com sucesso!');
    }
  });
  
  function goBack() {
    window.location.href = index.html;
  }