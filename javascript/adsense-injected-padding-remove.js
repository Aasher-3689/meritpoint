
// removing padding added by google ads

const observer = new MutationObserver(() => {
    if (document.querySelector("#anchor")) {
        document.body.style.paddingBottom = "0px";
        document.body.style.paddingTop = "0px";
    }
});
observer.observe(document.body, {childList: true, subtree: true});
