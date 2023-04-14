export const fetchBudgets = () => {
    return fetch('/budgets')
    .then(res => res.json())
    .then(data => data)
    .catch(error => alert(error.message))
}