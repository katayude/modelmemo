const Postpin = async (x: Number, y: Number, z: Number, model3did: Number) => {

    try {
        const response = await fetch('/api/postpintable', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ x, y, z, model3did })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Handle the response data
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    // ... ここに handleSubmit 関数のコードを入れます
};

export default Postpin;