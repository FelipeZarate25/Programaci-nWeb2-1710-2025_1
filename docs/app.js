document.addEventListener('DOMContentLoaded', function() {
    const surveyButton = document.getElementById('survey-button');
    const surveyDiv = document.getElementById('survey');
    const submitButton = document.getElementById('submit-button');
    const responseParagraph = document.getElementById('response');

    // Mostrar la encuesta al hacer clic en el botón
    surveyButton.addEventListener('click', function() {
        surveyDiv.style.display = 'block';
    });

    // Manejar el envío de la encuesta
    submitButton.addEventListener('click', function() {
        const favoriteColor = document.getElementById('favorite-color').value;
        if (favoriteColor) {
            responseParagraph.textContent = `Tu color favorito es el ${favoriteColor}.`;
            surveyDiv.style.display = 'none'; // Ocultar la encuesta después de enviar
        } else {
            responseParagraph.textContent = 'Por favor, escribe tu color favorito.';
        }
    });
});