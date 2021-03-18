/* eslint-disable cambookMsgcase */
$(document).ready(() => {
  const bookingBtns = $(".book-withdraw");
  const formEl = $("form");
  // old
  // const bookingBtns = $(".book_class");
  const notificationEl = $("#notification");
  // $(bookingBtns).each(function(i) {
  //   // Grab class Id
  //   const class_Id = this.getAttribute("data-id");
  //   $(this).click(e => {
  //     e.preventDefault();
  //     // Switch button class attribute and display
  //     const action = $(this).text();
  //     if (action === "Book Now") {
  //       withdrawBtn(class_Id);
  //       $.post("/api/booking", {
  //         classId: thisClassId
  //       }).done(() => {
  //         consol.log("Booking confirmed");
  //       });
  //     } else {
  //       bookBtn(class_Id);
  //     }
  //   });

  //   InitialClass(class_Id);
  // });

  // function InitialClass(thisClassId) {
  //   $.getJSON("api/user_data").then(data => {
  //     // Get current userId-classId combination
  //     const thisUserClass = data.user.id + "-" + thisClassId;
  //     // Get all userId-classId combinations and compare to the current combination
  //     $.get("/userclasses").then(res => {
  //       for (i = 0; i < res.results.length; i++) {
  //         const existingUserClass =
  //           res.results[i].userId + "-" + res.results[i].classId;
  //         console.log(existingUserClass, thisUserClass);
  //         if (existingUserClass === thisUserClass) {
  //           bookBtn(thisClassId);
  //           return;
  //         }
  //       }
  //       $.post("/api/booking", {
  //         classId: thisClassId
  //       }).done(() => {
  //         withdrawBtn(thisClassId);
  //       });
  //     });
  //   });
  // }

  // // Clear withdraw class and append book class
  // function bookBtn(id) {
  //   $("[data-id =" + id + "]")
  //     .text("Book Now")
  //     .removeClass("withdraw")
  //     .addClass("book");
  // }
  // // Clear book class and append withdraw class
  // function withdrawBtn(id) {
  //   $("[data-id =" + id + "]")
  //     .text("Withdraw Booking")
  //     .removeClass("book")
  //     .addClass("withdraw");
  // }

  if (bookingBtns) {
    $(bookingBtns).click(e => {
      e.preventDefault();
      // Grabs the id for the button clicked
      const class_Id = e.target.getAttribute("data-id");
      console.log(class_Id);
      // Get existing bookings and show as userId-classId combinations
      bookClass(class_Id);
    });
    function bookClass(thisClassId) {
      $.getJSON("api/user_data").then(data => {
        // Get current userId-classId combination
        const thisUserClass = data.user.id + "-" + thisClassId;
        console.log("This user", thisUserClass);
        // Get all userId-classId combinations and compare to the current combination
        $.get("/userclasses").then(res => {
          for (i = 0; i < res.results.length; i++) {
            const existingUserClass =
              res.results[i].userId + "-" + res.results[i].classId;
            console.log(existingUserClass, thisUserClass);
            if (existingUserClass === thisUserClass) {
              bookingNotification("Already booked!", "golden rod", 4000);
              return;
            }
          }
          $.post("/api/booking", {
            classId: thisClassId
          }).done(() => {
            bookingNotification("Booking confirmed :D!", "lightgreen", 4000);
          });
        });
      });
    }
  // function checkExisting ();
  // function checkExisting () {

  // }
  // Getting references to our form and input

  // Add eventlistener for all booking buttons
  if (bookingBtns) {
    $(bookingBtns).click(e => {
      e.preventDefault();
      // Grabs the id of the bookMsgement that goes by the name, "id"
      const class_Id = e.target.getAttribute("data-id");
      console.log("hi");
      bookClass(class_Id);
    });
  }
  function bookClass(thisClassId) {
    $.getJSON("api/user_data").then(data => {
      // Get current userId-classId combination
      const thisUserClass = data.user.id + "-" + thisClassId;
      console.log("This user", thisUserClass);
      // Get all userId-classId combinations and compare to the current combination
      $.get("/userclasses").then(res => {
        for (i = 0; i < res.results.length; i++) {
          const existingUserClass =
            res.results[i].userId + "-" + res.results[i].classId;
          console.log(existingUserClass, thisUserClass);
          if (existingUserClass === thisUserClass) {
            bookingNotification("Already booked!", "goldenrod", 4000);
            return;
          }
        }
        $.post("/api/booking", {
          classId: thisClassId
        }).done(() => {
          bookingNotification("Booking confirmed :D!", "lightgreen", 4000);
        });
      });
    });
  }

  function bookingNotification(text, colour, duration) {
    const message = $(
      `<div id="bookSuccess" style="position: fixed; background: ${colour};">${text}</div>`
    );
    $(notificationEl).append(message);
    setTimeout(() => {
      $(message).remove();
    }, duration);
  }
   }
});
