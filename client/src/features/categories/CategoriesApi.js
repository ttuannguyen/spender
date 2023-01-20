export const fetchCategories = () => {
    return fetch('/categories')
    .then(res => res.json())
    .then(data => data)
    .catch(error => alert(error.message))
}