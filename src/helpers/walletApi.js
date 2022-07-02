async function walletApi(endpoint, method = 'GET', data = {}) {
    const token = localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
    return await fetch(`http://brian-walletapi.azurewebsites.net/${endpoint}`, {
        // credentials: 'include',
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        },
        ...(Object.keys(data).length >= 1 && { body: JSON.stringify(data) }),
    });


}
export default walletApi;