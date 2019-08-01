import * as Types from '../constants/ActionTypes';
import callApi from '../utils/APIcaller';

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products,
    }
}
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        callApi('products', 'GET', null).then(response => {
            dispatch(actFetchProducts(response.data));
        });
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id,
    }
}
export const actDeleteProductRequest = (id) => {
    return dispatch => {
        callApi(`products/${id}`, 'DELETE', null).then(response => {
            dispatch(actDeleteProduct(id));
        });
    }
}
export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product,
    }
}
export const actAddProductRequest = (product) => {
    return dispatch => {
        callApi('products', 'POST', product).then(response => {
            dispatch(actAddProduct(response.data));
        });
    }
}
export const actGetProduct = (product) => {
    return {
        type: Types.GET_PRODUCT,
        product,
    }
}
export const actGetProductRequest = (id) => {
    return (dispatch) => {

        return callApi(`products/${id}`, 'GET', null).then(response => {
            dispatch(actGetProduct(response.data));
        });
    }
}
export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product,
    }
}
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {

        return callApi(`products/${product.id}`, 'PUT', product).then(response => {
            dispatch(actUpdateProduct(response.data));
        });
    }
}
