import { updateStart, updateSuccess, updateError } from "./laptopCreateSlice"

export const updateLaptop = async (cardInfo, dispatch, method, id) => {
    dispatch(updateStart());
    if (method === "POST") {
        try {
            fetch("https://computer-shop-beztdonkey.herokuapp.com/api/products/create", {
                method: method,
                body: JSON.stringify(cardInfo),
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Success: ", data);
                    dispatch(updateSuccess(data));
                })
        } catch (error) {
            console.error('Error:', error)
            dispatch(updateError());
        }
    }
    else {
        console.log(123);
        try {
            fetch("https://computer-shop-beztdonkey.herokuapp.com/api/products/" + id, {
                method: method,
                body: JSON.stringify(cardInfo),
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Success: ", data);
                    dispatch(updateSuccess(data));
                })
        } catch (error) {
            console.error('Error:', error)
            dispatch(updateError());
        }
    }
}