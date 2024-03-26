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
  
  const submitForm = () => {
    let formData = {};
    formData.first_name = $("#first_name").val();
    formData.last_name = $("#last_name").val();
    formData.password = $("#password").val();
    formData.email = $("#email").val();
    console.log("Form Data Submitted: ", formData);
  };
  
  const addCards = (items) => {
    items.forEach((item) => {
      let itemToAppend =
        '<div class="col s4 center-align" style="background-color: inherit;">' +
        '<div class="card">' +
        '<div class="card-image waves-effect waves-block waves-light">' +
        '<img class="activator" src="' +
        item.image +
        '">' +
        "</div>" +
        '<div class="card-content">' +
        '<span class="card-title activator grey-text text-darken-4">' +
        item.title +
        '<i class="material-icons right">more_vert</i></span>' +
        '<p><a href="#">' +
        item.link +
        "</a></p>" +
        "</div>" +
        '<div class="card-reveal">' +
        '<span class="card-title grey-text text-darken-4">' +
        item.title +
        '<i class="material-icons right">close</i></span>' +
        '<p class="card-text">' +
        item.description +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>";
  
      // Append cards to the container with class "cards-container"
      $(".cards-container").append(itemToAppend);
    });
  };
  
  
  $(document).ready(function () {
    $(".materialboxed").materialbox();
  
    // Initialize modals only once
    $('.modal').modal();
  
    $("#formSubmit").click(() => {
      submitForm();
    });
  
    // Add cards only once when the page is loaded
    addCards(cardList);
  
    $("#clickMeButton").click(() => {
      // Trigger form modal
      $('#modal1').modal('open');
    });
  });
  