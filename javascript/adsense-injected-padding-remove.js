
// removing padding added by google ads

function adsenseInjectedPaddingRemove() {
    const currentBodyStyles = window.getComputedStyle(document.body);
    if (currentBodyStyles.paddingBottom !== "0px" || currentBodyStyles.paddingTop !== "0px") {
        document.body.style.paddingBottom = "0px";
        document.body.style.paddingTop = "0px";
    }
}
adsenseInjectedPaddingRemove();



const observer = new MutationObserver(adsenseInjectedPaddingRemove);
observer.observe(document.body, {childList: true, subtree: true});



let tries = 0;
const interval = setInterval(() => {
                    adsenseInjectedPaddingRemove();
                    tries++; 
                    if (tries > 30) {
                        clearInterval(interval);
                    }
                }, 500);