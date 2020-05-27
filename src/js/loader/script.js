/* eslint-disable */
function createScriptElement(id, src) {
    return new Promise((resolve, reject) => {
        var script = document.getElementById(id);
        if (script) return resolve(script);

        script = document.createElement('script');
        script.id = id;
        script.src = src;

        script.onload = e => resolve(script);
        script.onerror = e => reject(e);

        document.body.appendChild(script);
    });
}

function removeScriptElement(scriptElement) {
    document.body.removeChild(scriptElement);
}

export { createScriptElement, removeScriptElement };
