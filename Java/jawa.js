// Schování při loadnutí
$(document).ready(function () {
  $("#ats-d").hide();
  $("#ht-d").hide();
  $("#lt-d").hide();
  $("#m-d").hide();
  $("#mtm-d").hide();
  $("#oml-d").hide();
  $("#thp-d").hide();
  $(".info-div").hide();



  $("#ats-b").on('click', function () {
    $("#ats-d").show("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").hide("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").hide("fast");
  });

  $("#ht-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").show("fast");
    $("#lt-d").hide("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").hide("fast");
  });

  $("#lt-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").show("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").hide("fast");
  });

  $("#m-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").hide("fast");
    $("#m-d").show("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").hide("fast");
  });

  $("#mtm-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").hide("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").show("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").hide("fast");
  });

  $("#oml-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").hide("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").show("fast");
    $("#thp-d").hide("fast");
  });

  $("#thp-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").hide("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").show("fast");
  });


// Toggle informací o albu A Thousants Suns
  $("#ats-info-btn").on("click", function () {
    $("#ats-info-div").slideToggle();
    $("#ats-info-btn").html("<b>Informace</b>");
  });

// Toggle informací o albu Hybrid Theory
  $("#ht-info-btn").on("click", function () {
    $("#ht-info-div").toggle();
    $("#ht-info-btn").html("<b>Informace</b>");
  });

// Toggle informací o albu Living Things
  $("#lt-info-btn").on("click", function () {
    $("#lt-info-div").toggle();
    $("#lt-info-btn").html("<b>Informace</b>");
  });

// Toggle informací o albu Meteora
  $("#m-info-btn").on("click", function () {
    $("#m-info-div").toggle();
    $("#m-info-btn").html("<b>Informace</b>");
  });

  // Toggle informací o albu Meteora
  $("#mtm-info-btn").on("click", function () {
    $("#mtm-info-div").toggle();
    $("#mtm-info-btn").html("<b>Informace</b>");
  });

// Datum posledního updatu
  $("#datum").html("13. 6. 2019");
 });