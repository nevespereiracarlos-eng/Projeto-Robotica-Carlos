// script.js - Interatividade do site
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site de Carlos Eduard carregado com sucesso!");

    // Efeito de animação no clique de cada botão "Fale Comigo"
    const ctaButton = document.querySelector('.cta-btn');
    ctaButton.addEventListener('click', () => {
        alert("Obrigado por entrar em contato!");
    });
});
