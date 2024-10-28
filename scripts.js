// Aguarda o carregamento completo do DOM antes de executar
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe de transição ao corpo da página para efeitos de fade
    document.body.classList.add('transition-fade');
    
    // Captura todos os links da página
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Verifica se o link é interno (mesmo domínio)
            if (link.hostname === window.location.hostname) {
                // Previne o comportamento padrão do link
                e.preventDefault();
                const dest = this.getAttribute('href');
                
                // Se o link for para a página de contato, verifica se veio do botão "Entre em contato"
                if (dest === 'contato.html' && this.textContent.trim() === 'Entre em contato') {
                    window.location.href = dest;
                    return;
                }
                
                // Adiciona classe para efeito de fade out
                document.body.classList.add('fade-out');
                
                // Aguarda a animação terminar antes de mudar de página (150ms mais rápido que antes)
                setTimeout(() => {
                    window.location.href = dest;
                }, 200); // Reduzido de 300ms para 150ms para transição mais rápida
            }
        });
    });
    
    // Remove a classe fade-out quando a página carrega
    window.addEventListener('pageshow', function() {
        document.body.classList.remove('fade-out');
    });

    // Adiciona animação suave ao scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});