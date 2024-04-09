$(document).ready(function () {
    // Initialize Materialize components
    $('.materialboxed').materialbox();
    $('.modal').modal();

    // Function to submit form data
    const submitForm = () => {
        let formData = {
            first_name: $("#first_name").val(),
            last_name: $("#last_name").val(),
            password: $("#password").val(),
            email: $("#email").val()
        };

        // Send form data to the server
        fetch('http://localhost:3000/api/cats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to submit form data');
            }
            console.log('Form Data Submitted Successfully');
        })
        .catch(error => {
            console.error('Error submitting form data:', error);
        });
    };

    // Function to add cards
    const addCards = (items) => {
        items.forEach((item) => {
            let itemToAppend =
                '<div class="col s4 center-align">' +
                '<div class="card">' +
                '<div class="card-image waves-effect waves-block waves-light">' +
                `<img class="activator" src="${item.image}">` +
                "</div>" +
                '<div class="card-content">' +
                `<span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>` +
                `<p><a href="#">${item.link}</a></p>` +
                "</div>" +
                `<div class="card-reveal">` +
                `<span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>` +
                `<p class="card-text">${item.description}</p>` +
                "</div>" +
                "</div>" +
                "</div>";

            // Append cards to the container with class "cards-container"
            $(".cards-container").append(itemToAppend);
        });
    };

    // Array of card data
    const cardList = [
        {
            title: "Kitten 1",
            image: "images/kitten1.jpg",
            link: "About Kitten 1",
            description: "Demo description about kitten 1",
        },
        {
            title: "Kitten 2",
            image: "images/kitten2.jpg",
            link: "About Kitten 2",
            description: "Demo description about kitten 2",
        },
        {
            title: "Kitten 3",
            image: "images/kitten3.jpg",
            link: "About Kitten 3",
            description: "Demo description about kitten 3",
        },
    ];

    // Click event for the form submit button
    $("#formSubmit").click(() => {
        submitForm();
    });

    // Add cards when the page is loaded
    addCards(cardList);

    // Click event for the "Click Me" button
    $("#clickMeButton").click(() => {
        // Trigger form modal
        $('#modal1').modal('open');
    });
});
