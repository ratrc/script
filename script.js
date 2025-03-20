document.addEventListener("DOMContentLoaded", () => {
    const idd = Array.from(document.scripts)
        .map(script => new URL(script.src).searchParams.get('ratId'))
        .find(id => id);

    if (idd) console.log('idd ->>>>>', idd);
});