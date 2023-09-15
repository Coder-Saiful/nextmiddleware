export const isAuth = () =>  {
    if (localStorage.getItem('token')) {
        return {
            name: "Coder Saiful",
            phone: "01849485393"
        }
    } else {
        return false;
    }
}