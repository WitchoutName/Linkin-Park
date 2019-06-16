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
    $("#none-d").hide("fast");
  });

  $("#ht-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").show("fast");
    $("#lt-d").hide("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").hide("fast");
    $("#none-d").hide("fast");
  });

  $("#lt-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").show("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").hide("fast");
    $("#none-d").hide("fast");
  });

  $("#m-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").hide("fast");
    $("#m-d").show("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").hide("fast");
    $("#none-d").hide("fast");
  });

  $("#mtm-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").hide("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").show("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").hide("fast");
    $("#none-d").hide("fast");
  });

  $("#oml-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").hide("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").show("fast");
    $("#thp-d").hide("fast");
    $("#none-d").hide("fast");
  });

  $("#thp-b").on('click', function () {
    $("#ats-d").hide("fast");
    $("#ht-d").hide("fast");
    $("#lt-d").hide("fast");
    $("#m-d").hide("fast");
    $("#mtm-d").hide("fast");
    $("#oml-d").hide("fast");
    $("#thp-d").show("fast");
    $("#none-d").hide("fast");
  });

  //         přepínání členů

  $("#m-s-p").hide();
  $("#m-s-d").hide();
  $("#b-d-p").hide();
  $("#b-d-d").hide();
  $("#d-f-p").hide();
  $("#d-f-d").hide();
  $("#j-h-p").hide();
  $("#j-h-d").hide();
  $("#r-b-d").hide();
  $("#ch-b-d").hide();
  $("#m-w-p").hide();
  $("#m-w-d").hide();

  $("#m-s-b").on('click', function () {
    $("#m-s-p").toggle();
    $("#m-s-d").toggle();
    $("#b-d-p").hide();
    $("#b-d-d").hide();
    $("#d-f-p").hide();
    $("#d-f-d").hide();
    $("#j-h-p").hide();
    $("#j-h-d").hide();
    $("#r-b-d").hide();
    $("#ch-b-d").hide();
    $("#m-w-p").hide();
    $("#m-w-d").hide();
  });

  $("#b-d-b").on('click', function () {
    $("#m-s-p").hide();
    $("#m-s-d").hide();
    $("#b-d-p").toggle();
    $("#b-d-d").toggle();
    $("#d-f-p").hide();
    $("#d-f-d").hide();
    $("#j-h-p").hide();
    $("#j-h-d").hide();
    $("#r-b-d").hide();
    $("#ch-b-d").hide();
    $("#m-w-p").hide();
    $("#m-w-d").hide();
  });

  $("#d-f-b").on('click', function () {
    $("#m-s-p").hide();
    $("#m-s-d").hide();
    $("#b-d-p").hide();
    $("#b-d-d").hide();
    $("#d-f-p").toggle();
    $("#d-f-d").toggle();
    $("#j-h-p").hide();
    $("#j-h-d").hide();
    $("#r-b-d").hide();
    $("#ch-b-d").hide();
    $("#m-w-p").hide();
    $("#m-w-d").hide();
  });

  $("#j-h-b").on('click', function () {
    $("#m-s-p").hide();
    $("#m-s-d").hide();
    $("#b-d-p").hide();
    $("#b-d-d").hide();
    $("#d-f-p").hide();
    $("#d-f-d").hide();
    $("#j-h-p").toggle();
    $("#j-h-d").toggle();
    $("#r-b-d").hide();
    $("#ch-b-d").hide();
    $("#m-w-p").hide();
    $("#m-w-d").hide();
  });

  $("#r-b-b").on('click', function () {
    $("#m-s-p").hide();
    $("#m-s-d").hide();
    $("#b-d-p").hide();
    $("#b-d-d").hide();
    $("#d-f-p").hide();
    $("#d-f-d").hide();
    $("#j-h-p").hide();
    $("#j-h-d").hide();
    $("#r-b-d").toggle();
    $("#ch-b-d").hide();
    $("#m-w-p").hide();
    $("#m-w-d").hide();
  });

  $("#ch-b-b").on('click', function () {
    $("#m-s-p").hide();
    $("#m-s-d").hide();
    $("#b-d-p").hide();
    $("#b-d-d").hide();
    $("#d-f-p").hide();
    $("#d-f-d").hide();
    $("#j-h-p").hide();
    $("#j-h-d").hide();
    $("#r-b-d").hide();
    $("#ch-b-d").toggle();
    $("#m-w-p").hide();
    $("#m-w-d").hide();
  });


  $("#m-w-b").on('click', function () {
    $("#m-s-p").hide();
    $("#m-s-d").hide();
    $("#b-d-p").hide();
    $("#b-d-d").hide();
    $("#d-f-p").hide();
    $("#d-f-d").hide();
    $("#j-h-p").hide();
    $("#j-h-d").hide();
    $("#r-b-d").hide();
    $("#ch-b-d").hide();
    $("#m-w-p").toggle();
    $("#m-w-d").toggle();
  });

  // Toggle informací o albu A Thousants Suns
  $("#ats-info-btn").on("click", function () {
    $("#ats-info-div").slideToggle();
    $("#ats-info-btn").html("<b>Informace</b>");
  });

  // Toggle informací o albu Hybrid Theory
  $("#ht-info-btn").on("click", function () {
    $("#ht-info-div").slideToggle();
    $("#ht-info-btn").html("<b>Informace</b>");
  });

  // Toggle informací o albu Living Things
  $("#lt-info-btn").on("click", function () {
    $("#lt-info-div").slideToggle();
    $("#lt-info-btn").html("<b>Informace</b>");
  });

  // Toggle informací o albu Meteora
  $("#m-info-btn").on("click", function () {
    $("#m-info-div").slideToggle();
    $("#m-info-btn").html("<b>Informace</b>");
  });

  // Toggle informací o albu Meteora
  $("#mtm-info-btn").on("click", function () {
    $("#mtm-info-div").slideToggle();
    $("#mtm-info-btn").html("<b>Informace</b>");
  });

  // Toggle informací o albu One More Light
  $("#oml-info-btn").on("click", function () {
    $("#oml-info-div").slideToggle();
    $("#oml-info-btn").html("<b>Informace</b>");
  });

  // Toggle informací o albu The Hunting Party
  $("#thp-info-btn").on("click", function () {
    $("#thp-info-div").slideToggle();
    $("#thp-info-btn").html("<b>Informace</b>");
  });


  // Datum posledního updatu
  $("#datum").html("13. 6. 2019");
});