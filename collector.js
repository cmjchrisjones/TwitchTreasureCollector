console.log("Twitch site detected, will start trying to collect points");

function startCollecting() {

    chrome.runtime.sendMessage({ "newIconPath": "./1x/LogoActive-8.png" });
    setInterval(function () {

        let chest = document.getElementsByClassName("claimable-bonus__icon");
        if (chest.length > 0) {
            chest[0].parentElement.parentElement.click()
        }
        console.log(`Timer fired: ${Date.now()}`);
    }, 60000);
}

startCollecting();