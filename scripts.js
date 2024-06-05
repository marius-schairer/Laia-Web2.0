document.getElementById('text-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
  
    try {
      const response = await fetch('YOUR_BACKEND_URL/api/text-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  document.getElementById('voice-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('voice-file');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
  
    try {
      const response = await fetch('YOUR_BACKEND_URL/api/voice-message', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  });
  