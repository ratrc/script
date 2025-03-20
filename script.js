document.addEventListener("DOMContentLoaded", () => {
    for (const script of document.scripts) {
        if (script.src.includes("script.js")) {
            try {
                const idd = new URL(script.src, location.href).searchParams.get('ratId');
                if (idd) {
                    console.log('idd', idd);
                    break;
                }
            } catch (e) {
                // Ignora erros se a URL for inválida
            }
        }
    }

    if (maxDias) {
        console.log('max dias ->> ', maxDias);
    }
});