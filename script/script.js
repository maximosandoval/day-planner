//Use moment to set up date in header
//Event listner for savebtn - text value is input and displayed
//Store text value into local storage (setItem)
//Repopulate textarea from local storage (getItem)
//Link css past, present, future to time/date stamp of moment

//MomentJS Timestamp
const currentDate = moment().format("dddd MMMM Do YYYY");
$("#currentDay").text(currentDate);
console.log(currentDate);

//Event listner for the save button to grab the text value and store in local input.
$(".saveBtn").on("click", function () {
  // Get nearby values of the description in JQuery
  const text = $(this).siblings(".description").val();
  time = $(this).parent().attr("id");

  // Save text to machine local storage
  localStorage.setItem(time, text);
});

//jQuery to repopulate text into the each textarea after ther browser is refreshed
$("#hour-9a .description").val(localStorage.getItem("hour-9a"));
$("#hour-10a .description").val(localStorage.getItem("hour-10a"));
$("#hour-11a .description").val(localStorage.getItem("hour-11a"));
$("#hour-12p .description").val(localStorage.getItem("hour-12p"));
$("#hour-1p .description").val(localStorage.getItem("hour-1p"));
$("#hour-2p .description").val(localStorage.getItem("hour-2p"));
$("#hour-3p .description").val(localStorage.getItem("hour-3p"));
$("#hour-4p .description").val(localStorage.getItem("hour-4p"));
$("#hour-5p .description").val(localStorage.getItem("hour-5p"));

// Function which changes the colors on past, present and future classes
$(".time-block").each(function () {
  // HTML id to get the row information
  const timeHr = $(this).attr("id");
  console.log(this);
  let times = parseInt($(this).children(".description").attr("id"));
  console.log(times);
  let momentHr = parseInt(moment().format("HH"));
  console.log(momentHr);
  // Checking time aganist MomentJS to make sure it is past, present or future
  console.log($(this).children(".description"));
  if (times < momentHr) {
    console.log(`${times} < ${momentHr}`);
    // Color change for classes
    $(this).children(".description").addClass("past");
  } else if (times == momentHr) {
    console.log(`${times} == ${momentHr}`);
    $(this).children(".description").addClass("present");
  } else if (times > momentHr) {
    console.log(`${times} > ${momentHr}`);
    $(this).children(".description").addClass("future");
  }
});
