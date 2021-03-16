/* eslint-disable camelcase */
$(document).ready(() => {
  // Getting references to our form and input
  const bookingBtns = $(".book_class");
  // Add eventlistener for all booking buttons
  if (bookingBtns) {
    $(bookingBtns).click(e => {
      e.preventDefault();
      // Grabs the id of the element that goes by the name, "id"
      const class_Id = e.target.getAttribute("data-id");
      console.log("HIIIIII");
      $.post("/api/booking", {
        classId: "aaa",
        startTime: "bbb",
        endTime: "ccc"
      }).then(response => {
        // Check that the response is all good
        // Reload the page so the user can see the devoured burger in the 'Devoured' list
        if (response.ok) {
          console.log("You have successfully made the booking!");
          location.reload("/");
        } else {
          alert("something went wrong!");
        }
      });
    });
  }
});
