
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const imagens = document.querySelectorAll('.slides img');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');

    let indexAtual = 0;

    function mostrarSlide(index) {
        const larguraSlide = imagens[0].clientWidth;
        slides.style.transform = `translateX(${-larguraSlide * index}px)`;
    }

    btnProximo.addEventListener('click', () => {
        indexAtual = (indexAtual + 1) % imagens.length;
        mostrarSlide(indexAtual);
    });

    btnAnterior.addEventListener('click', () => {
        indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
        mostrarSlide(indexAtual);
    });

    // Garante que o carrossel esteja funcionando ao carregar
    window.addEventListener('load', () => {
        mostrarSlide(indexAtual);
    });
});

