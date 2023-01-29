export const fetchUserCategories= () => {
    return fetch('/categories')
    .then(res => res.json())
    .then(data => data.user_expenses)
    .catch(error => alert(error.message))
}