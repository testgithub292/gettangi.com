

/*document.addEventListener("DOMContentLoaded", function() {
    // Display loading animation for 2 seconds
    setTimeout(function() {
        // Hide loading animation and show content
        document.getElementById('loading').style.display = 'none';
        //document.getElementById('content').style.display = 'block';
        document.body.style.overflow = 'auto'; // Enable scrolling after loading
    }, 2000); // Set delay to 2 seconds (2000 ms)
});*/

/*document.addEventListener("DOMContentLoaded", function() {
    // Check if the modal has already been shown
    if (!localStorage.getItem("modalShown")) {
        // Display loading animation for 2 seconds
        setTimeout(function() {
            // Hide loading animation and show content
            document.getElementById('loading').style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling after loading
            
            // Show the Bootstrap modal
            var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
                keyboard: true
            });
            myModal.show();

            // Set a flag in localStorage to indicate the modal has been shown
            localStorage.setItem("modalShown", "true");
        }, 2000); // Set delay to 2 seconds (2000 ms)
    } else {
        // Hide loading animation immediately if modal has already been shown
        document.getElementById('loading').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});*/

document.addEventListener("DOMContentLoaded", function() {
    // Display loading animation for 2 seconds
    setTimeout(function() {
        // Hide loading animation and show content
        document.getElementById('loading').style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling after loading

        // Trigger Bootstrap modal
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            keyboard: true
        });
        myModal.show();
    }, 2000); // Set delay to 2 seconds (2000 ms)
});

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

    // Získání reference na tlačítko
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    // Při scrollování stránky
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }

    // Při kliknutí na tlačítko se přesune na začátek stránky
    scrollTopBtn.onclick = function() {
        document.body.scrollTop = 0; // Pro Safari
        document.documentElement.scrollTop = 0; // Pro Chrome, Firefox, IE a Opera
    }


    /*document.addEventListener("DOMContentLoaded", function () {
        const incentivesDropdown = document.querySelector('.dropdown-submenu');
    
        incentivesDropdown.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevents the dropdown from closing
        });
    });*/
    



     // Function to handle intersection
 /* const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class to trigger animation
                }
            });
        };

        // Create an intersection observer
        const observer = new IntersectionObserver(handleIntersection);

        // Observe the heading and content
        observer.observe(document.getElementById('heading_section3'));
        observer.observe(document.getElementById('content_section3'));*/




        /*-------------------------------------------*/
         // JavaScript to stop the video when modal is closed
  document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
    var video = document.getElementById('modalVideo');
    video.pause();
    video.currentTime = 0; // Optional: Reset video to the beginning
  });


  
  // animation text

  // Function to handle the intersection observer
  const sections = document.querySelectorAll('.section');
  const options = {
      root: null, // Use the viewport as the container
      threshold: 0.1 // Trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Stop observing once it becomes visible
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section); // Observe each section
  });

 

// marqueee script

