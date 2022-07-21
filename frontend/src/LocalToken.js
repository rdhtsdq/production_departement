const tkn = window.localStorage.getItem('token')
const auth = tkn.slice(1,tkn.length -1)
const token = 'Bearer '+auth
console.log(auth);
console.log(localStorage.getItem('token').slice(1,token.length - 1));

export default token