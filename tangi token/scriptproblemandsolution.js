  /*---second section 3-------------------------------------------------------------*/

   // Create an intersection observer
   const observer = new IntersectionObserver(handleIntersection);

   // Observe the heading and content
   observer.observe(document.getElementById('heading_section3'));
   observer.observe(document.getElementById('content_section3'));