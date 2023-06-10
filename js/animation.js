window.scrollTo({ top: 0, behavior: 'smooth' });

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    // set in :root too 
    document.documentElement.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

// register back to top button
var backToTop = document.getElementById("btt");
backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});