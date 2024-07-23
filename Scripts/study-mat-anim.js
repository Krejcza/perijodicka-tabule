const oneMenu = document.querySelectorAll('.one-menu-mobxtu .main-topyc');

        oneMenu.forEach((element, index) => {
            setTimeout(() => {
                // Reset all elements' background color
                oneMenu.forEach(el => el.style.background = '');

                // Set current element's background color to gradient
                element.style.background = 'linear-gradient(225deg,#fff, #000)';
            }, index * 2000);
        });

        // Restart the cycle
        setInterval(() => {
            oneMenu.forEach((element, index) => {
                setTimeout(() => {
                    // Reset all elements' background color
                    oneMenu.forEach(el => el.style.background = '');

                    // Set current element's background color to gradient
                    element.style.background = 'linear-gradient(225deg,#fff, #000)';
                }, index * 2000);
            });
        }, oneMenu.length * 2000);