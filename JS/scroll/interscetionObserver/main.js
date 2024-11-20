window.onload = () => {
    observeLogo();
};

function observeLogo() {
    const $logo = document.body.querySelector("#logo");

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting){
              $logo.classList.replace("right","left")
            }else{
              $logo.classList.replace("left","right")
            }
        });
    };
    
    let options = {
        root: null,
        rootMargin: `0px 0px ${-1 * window.innerHeight + 62}px 0px`,
        threshold: 0,
    };

    let observer = new IntersectionObserver(callback, options);
    const target = document.body.querySelector("#content");
    observer.observe(target);
}
