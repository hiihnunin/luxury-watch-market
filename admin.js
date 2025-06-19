const adminTable = document.getElementById('watch-table');

Object.keys(watchData).forEach(brand => {
  const brandSection = document.createElement('section');
  const title = document.createElement('h3');
  title.textContent = brand;
  brandSection.appendChild(title);

  watchData[brand].forEach((watch, index) => {
    const row = document.createElement('div');
    row.innerHTML = `
      ${watch.name}
      <button onclick="toggleStock('${brand}', ${index})">
        ${watch.inStock ? '판매중' : '품절'}
      </button>
    `;
    brandSection.appendChild(row);
  });

  adminTable.appendChild(brandSection);
});

function toggleStock(brand, index) {
  watchData[brand][index].inStock = !watchData[brand][index].inStock;
  localStorage.setItem('watchData', JSON.stringify(watchData));
  location.reload();
}
