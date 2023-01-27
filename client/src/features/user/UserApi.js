export const fetchUser = () => {
    return fetch('/me')
    .then(res => res.json())
    .then(data => data)
    .catch(error => alert(error.message))
}