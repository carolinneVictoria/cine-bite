import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Ao navegar para uma nova rota (PUSH/REPLACE), começa do topo.
// Ao voltar/avançar pelo histórico (POP), deixa o navegador restaurar
// a posição de rolagem original.
function ScrollToTop() {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [pathname, navigationType]);

    return null;
}

export default ScrollToTop;
