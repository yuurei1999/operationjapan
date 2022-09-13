window.addEventListener('DOMContentLoaded', () => {
  const d = document;
  const $sections = document.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    //console.log("entries",entries);

    entries.forEach((entry)=>{
      //console.log("entry",entry);
      const id = entry.target.getAttribute('id');
      //console.log(id);
      if(entry.isIntersecting){
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).parentElement.classList.add('active');
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  };

  const observer = new IntersectionObserver(cb,{threshold:0,rootMargin: '0px 0px -90% 0px'});
  $sections.forEach(el => observer.observe(el));

  document.querySelectorAll('section[id]').forEach((section) => {
  observer.observe(section);
  });
  
  
});



