
const baseUrl = "localhost:8080"

export async function sendFeedback(feedbackMessage) {
    const response = await fetch(baseUrl + `/feedback`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: feedbackMessage})
        })
    return await response.json();
}

export async function getAllFeedback() {
    try{
        const response = await fetch('/feedback');
        return await response.json();
    }catch(error) {
        return [];
    }
}