 function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

    return {token, id : cbid};
 }
export async function getUser() {
    const {token, id} = getSession();
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
    };
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${id}`, requestOptions);
    if(!response.ok){
        throw { message : response.statusText, status : response.status }//eslint-disable-line 
    }
    const data = response.json();
    return data;
}

export async function getUserOrders() {
    const {token, id} = getSession();
    
    const requestOptions = {
        method : "GET",
        headers : {"Authorization" : `Bearer ${token}`}
      }
      const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${id}`, requestOptions)
      if(!response.ok){
        throw { message : response.statusText, status : response.status }//eslint-disable-line 
    }
      const data = await response.json();
      return data;
}

export async function createOrder(cartList, total, user) {
    const {token} = getSession();
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(order)
    });
    if(!response.ok){
        throw { message : response.statusText, status : response.status }//eslint-disable-line 
    }
    const data = await response.json();
    return data;
}