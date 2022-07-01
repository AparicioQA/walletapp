async function walletApi(endpoint, method = 'GET', data = {}) {
    const token = localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
    return await fetch(`http://192.168.1.8:5047/${endpoint}`, {
        credentials: 'include',
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