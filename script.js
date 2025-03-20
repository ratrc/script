document.addEventListener("DOMContentLoaded", function() {
    const scripts = document.getElementsByTagName("script");
    let idd = '';

    for (let script of scripts) {
        if (script.src.includes("script.js")) {
            const url = new URL(script.src);
            idd = url.searchParams.get('ratId');

            if (idd) {
                console.log('idd', idd);
                break;
            }
        }
    }
});