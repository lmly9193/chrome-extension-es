document.addEventListener('mousedown', function (event) {
    if (window.getSelection().toString().length > 0) {
        const button = document.querySelector('#everything-search')
        if (button && event.target === button) {
            event.preventDefault();
        }
    }
}, false);

document.addEventListener('mouseup', function (event) {
    if (window.getSelection().toString().length > 0) {
        const button = document.querySelector('#everything-search');
        if (!button) {
            const range = window.getSelection().getRangeAt(0).getBoundingClientRect();
            const el = $el('div', {
                id: 'everything-search',
                style: `top: ${range.top + 20}px; left: ${event.clientX + 20}px;`
            });
            document.body.appendChild(el);
        }
    }
});

document.addEventListener('selectionchange', function () {
    if (window.getSelection().toString().trim() === '') {
        const button = document.getElementById('everything-search');
        if (button) button.remove();
    }
})

document.addEventListener('click', function (event) {
    const button = document.querySelector('#everything-search');
    if (button && event.target === button) {
        const query = encodeURIComponent(window.getSelection().toString());
        const url = `es://${query}`;
        location.href = url;
    }
});

function $el(tag, props) {
    return Object.assign(document.createElement(tag), props);
}
