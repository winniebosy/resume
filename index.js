let toggleBtn = document.querySelector('#navbar-toggler');
let elem = document.querySelector('.navbar-nav'); //ul menu
let menuList = document.querySelectorAll('.navbar-list')

//user opens and closes the menu button on the basis of state
toggleBtn.addEventListener('click', function(e) {
        elem.setAttribute('data-state', elem.getAttribute('data-state') === 'closed' ? 'open' : 'closed');
        toggleBtn.setAttribute('aria-expanded', toggleBtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
    })
    //detect screen sizes below 760px
function detectScreen() {
    if (screen.width <= 760) {
        //close menu when user presses the escape key
        toggleBtn.addEventListener('keydown', function(e) {
            if (e.key === '27' || e.key === 'Escape') {
                elem.setAttribute('data-state', elem.getAttribute('data-state') === 'closed' ? 'open' : 'closed');
                toggleBtn.setAttribute('aria-expanded', toggleBtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
            }
        });
        //trap focus
        const trapFocus = () => {
            //select all elements needed to be focused
            let focusElements = document.querySelectorAll('button[id*="navbar-toggler"], a[class*="nav-link"]')
                //console.log(focusElements);
            let firstFocusElement = focusElements[0];
            let lastFocusElement = focusElements[focusElements.length - 1];

            focusElements.forEach(focusElement => {
                //listen to the keydown event in each node
                focusElement.addEventListener('keydown', function(e) {
                    if (e.shiftKey) /* shift + tab */ {
                        // focuses on last element
                        if (document.activeElement === firstFocusElement) {
                            lastFocusElement.focus();
                            e.preventDefault();

                        }
                    } else { /* if tab key is selected */
                        if (document.activeElement === lastFocusElement) {
                            // focuses on last element
                            firstFocusElement.focus();
                            e.preventDefault();
                        }

                    }
                });
            });
        }
        trapFocus()
    }
}

detectScreen()