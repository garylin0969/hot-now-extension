const loading = document.getElementById('loading');

// 接收 iframe 發過來的訊息
window.addEventListener('message', (event) => {
    if (event.origin === 'https://hotnow.garylin.dev' && event.data?.type === 'HOT_NOW_READY') {
        loading.classList.add('hidden');
    }
});

// 備用方案：如果 3 秒後還沒收到訊息，就隱藏 loading
setTimeout(() => {
    if (!loading.classList.contains('hidden')) {
        loading.classList.add('hidden');
    }
}, 3000);
