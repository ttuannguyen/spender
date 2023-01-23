export const fetchExpenses = () => {
    return fetch('/expenses')
    .then(res => res.json())
    .then(data => data)
    .catch(error => alert(error.message))
}