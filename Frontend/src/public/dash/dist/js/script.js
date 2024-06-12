document.getElementById('add-item').addEventListener('click', function() {
    addItemRow();
});

function addItemRow() {
    const table = document.getElementById('items-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    row.innerHTML = `
        <td><input type="number" class="item-quantity" value="1" min="1"></td>
        <td><input type="text" class="item-name" placeholder="Producto"></td>
        <td><input type="text" class="item-serial" placeholder="Número de Serie"></td>
        <td><input type="text" class="item-description" placeholder="Descripción"></td>
        <td><input type="number" class="item-price" value="0.00" step="0.01"></td>
        <td><button type="button" class="btn btn-danger btn-remove">Eliminar</button></td>
    `;
    row.querySelector('.btn-remove').addEventListener('click', function() {
        this.closest('tr').remove();
        updateTotals();
    });
    row.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', updateTotals);
    });
    updateTotals();
}

function updateTotals() {
    let subtotal = 0;
    document.querySelectorAll('#items-table tbody tr').forEach(row => {
        const quantity = parseFloat(row.querySelector('.item-quantity').value);
        const price = parseFloat(row.querySelector('.item-price').value);
        subtotal += quantity * price;
    });
    const tax = subtotal * 0.093;
    const shipping = parseFloat(document.getElementById('shipping').value);
    const total = subtotal + tax + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

document.getElementById('shipping').addEventListener('input', updateTotals);
