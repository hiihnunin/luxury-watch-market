const cartData = JSON.parse(localStorage.getItem('cart')) || [];
const cartDiv = document.getElementById('cart-items');

cartData.forEach(item => {
  const div = document.createElement('div');
  div.textContent = item.name;
  cartDiv.appendChild(div);
});

function checkout() {
  alert('결제가 완료되었습니다.');
  localStorage.removeItem('cart');
  window.location.href = 'index.html';
}
