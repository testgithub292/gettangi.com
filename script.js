

document.addEventListener("DOMContentLoaded", function() {
    // Display loading animation for 2 seconds
    setTimeout(function() {
        // Hide loading animation and show content
        document.getElementById('loading').style.display = 'none';
        //document.getElementById('content').style.display = 'block';
        document.body.style.overflow = 'auto'; // Enable scrolling after loading
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

    /*// Při kliknutí na tlačítko se přesune na začátek stránky
    scrollTopBtn.onclick = function() {
        document.body.scrollTop = 0; // Pro Safari
        document.documentElement.scrollTop = 0; // Pro Chrome, Firefox, IE a Opera
    }


    document.addEventListener("DOMContentLoaded", function () {
        const incentivesDropdown = document.querySelector('.dropdown-submenu');
    
        incentivesDropdown.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevents the dropdown from closing
        });
    });*/
    



     // Function to handle intersection
        const handleIntersection = (entries) => {
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
        observer.observe(document.getElementById('content_section3'));
