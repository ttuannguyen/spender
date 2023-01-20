export const fetchRandomDogImage = () => {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => data.message)
        .catch(error => alert(error.message)) 
}