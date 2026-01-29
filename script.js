/**
 * @fileoverview 處理 New Tab 頁面的載入狀態邏輯。
 * 監聽來自 iframe 的訊息以隱藏載入動畫。
 */

const loading = document.getElementById('loading');

/**
 * 監聽來自 iframe 的訊息。
 * 當收到 'HOT_NOW_READY' 訊息時，隱藏載入動畫。
 *
 * @param {MessageEvent} event - 訊息事件物件。
 */
window.addEventListener('message', (event) => {
    if (event.origin === 'https://hotnow.garylin.dev' && event.data?.type === 'HOT_NOW_READY') {
        loading.classList.add('hidden');
    }
});
