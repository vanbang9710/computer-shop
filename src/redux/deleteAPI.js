import { updateStart, updateSuccess, updateError } from "./laptopCreateSlice"

export const deleteLaptop = async (dispatch, id) => {
    dispatch(updateStart());
    try {
        fetch("https://computer-shop-beztdonkey.herokuapp.com/api/products/" + id, {
            method: "Delete",
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