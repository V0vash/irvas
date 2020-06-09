function tabs(tabsHeaderSelector, tabsSelector, tabsContentSelector, activeClass) {
    const tabsHeader = document.querySelector(tabsHeaderSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector);

    function hideTabsContent() {
        tabsContent.forEach((item) => {
            item.style.display = 'none';
        });
        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function showTabsContent(i=0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabsContent();
    showTabsContent();

    tabsHeader.addEventListener('click', (event) => {
        const target = event.target;
        if (target && (target.classList.contains(tabsSelector.slice(1)) ||
                target.parentNode.classList.contains(tabsSelector.slice(1)))) {
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}

export default tabs;