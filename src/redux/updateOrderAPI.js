export const updateOrder = async (orderDetails) => {
    try {
        fetch("http://localhost:3001/api/orders/create", {
            method: "POST",
            body: JSON.stringify(orderDetails),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => {
                console.log("Success: ", data);
            })
    } catch (error) {
        console.error('Error:', error)
    }
}