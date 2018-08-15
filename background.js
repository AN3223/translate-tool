"use strict"

browser.contextMenus.create(
    {
        id: "translate_tool",
        title: "Translate",
        contexts: ["selection"],
        icons: {
            64: "lf5b3pp8.png"
        },
        onclick: (info, tab) => {
            let text = encodeURI(info.selectionText)
            let url = `https://translate.google.com/#auto/en/${text}`
            browser.tabs.create({url})
        }
    },
    () => console.log("translate_tool added to contextMenu")
)
