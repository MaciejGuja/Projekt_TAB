const API_BASE_URL = 'https://localhost:7123/api';
 document.getElementById('apiUrl').textContent = API_BASE_URL;
        
        async function testConnection() {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = 'Łączenie z backendem...';
            
            try {
                console.log(`Próba połączenia z: ${API_BASE_URL}/products`);
                
                const response = await fetch(`${API_BASE_URL}/products`);
                
                if (response.ok) {
                    const data = await response.json();
                    resultDiv.innerHTML = `
                        <strong>Połączenie działa!</strong><br><br>
                        Status: ${response.status} ${response.statusText}<br>
                        Odpowiedź z serwera: <br>
                        <pre>${JSON.stringify(data, null, 2)}</pre>
                    `;
                    resultDiv.className = 'success';
                } else {
                    resultDiv.innerHTML = `
                        <strong>Błąd połączenia!</strong><br><br>
                    `;
                    resultDiv.className = 'error';
                }
            } catch (error) {
                console.error('Szczegóły błędu:', error);
                resultDiv.innerHTML = `
                    <strong>Nie udało się połączyć!</strong><br><br>
                `;
                resultDiv.className = 'error';
            }
        }