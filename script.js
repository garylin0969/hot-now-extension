const loading = document.getElementById('loading');

// 接收 iframe 發過來的訊息
window.addEventListener('message', (event) => {
    if (event.origin === 'https://hotnow.garylin.dev' && event.data?.type === 'HOT_NOW_READY') {
        loading.classList.add('hidden');
    }
});
