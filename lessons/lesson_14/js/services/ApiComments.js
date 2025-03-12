export const getCommmentsFromApi = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error("Ошибка запроса:", error);
        throw error;
    }
};