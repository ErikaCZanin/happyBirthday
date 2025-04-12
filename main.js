const heartContainer = document.querySelector('.heart');

    heartContainer.addEventListener('click', function () {
        // Adiciona o efeito de clicar no coração, como aumento do tamanho
        heartContainer.classList.toggle('clicked');

        // Cria um novo coraçãozinho
        const newHeart = document.createElement('span');
        newHeart.classList.add('new-heart');
        newHeart.textContent = '❤️'; // Ou use seu próprio SVG, se preferir

        // Adiciona o novo coração no contêiner
        heartContainer.appendChild(newHeart);

        // Remove o novo coraçãozinho após a animação (500ms, de acordo com a duração da animação)
        setTimeout(() => {
            newHeart.remove();
        }, 500);
    });