window.addEventListener("load", function(){
    const loader = this.document.querySelector(".loader");
    loader.className += " hidden"; // class first load then hidden
})

/*
setTimeout(() => {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
      }, 2000);
*/