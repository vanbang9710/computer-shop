import { updateStart, updateSuccess, updateError } from "./laptopCreateSlice"

export const updateLaptop = async (cardInfo, dispatch) => {
    dispatch(updateStart());
    try {
        fetch("http://localhost:3001/api/products/create", {
            method: 'POST',
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