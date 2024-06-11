document.addEventListener('DOMContentLoaded', () => {
    // Simulación de datos para el Dashboard
    const totalInvoices = 120;
    const totalClients = 75;
    const totalProducts = 45;
    const totalSales = 3500.00;

    document.getElementById('totalInvoices').innerText = totalInvoices;
    document.getElementById('totalClients').innerText = totalClients;
    document.getElementById('totalProducts').innerText = totalProducts;
    document.getElementById('totalSales').innerText = `$${totalSales.toFixed(2)}`;
});
