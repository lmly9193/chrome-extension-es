chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "EverythingSearch",
        title: "在電腦搜尋「%s」",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "EverythingSearch") {
        const query = encodeURIComponent(info.selectionText);
        const url = `es://${query}`;
        chrome.tabs.update({ url: url });
    }
});
