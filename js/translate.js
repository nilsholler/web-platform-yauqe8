$("#enButton").click(translateEnglish);
$("#deButton").click(translateGerman);

function translateEnglish() {
  $("#reservationHeading").html("Book a table at ...");
  $("#dateInput").attr("placeholder", "Select date");
  $("#firstName").attr("placeholder", "First name");
  $("#firstNameLabel").html("First name:");
  $("#lastName").attr("placeholder", "Last Name");
  $("#lastNameLabel").html("Last name:");
  $("#comment").attr("placeholder", "Comment");
  $("#submitButton").html("Submit");
  $("#privacyCheckboxLabel").html(
    'I accept the <a class="text-info" href="">information on data processing</a>.'
  );
  $("#backward").html('Back');
  $("#forward").html('Continue');
  $("#progress-step").html('Step ');
  $("#progress-of").html(' of ');
  
  
}

function translateGerman() {
  $("#reservationHeading").html("Reserviere einen Tisch bei ...");
  $("#dateInput").attr("placeholder", "Datum wählen");
  $("#firstName").attr("placeholder", "Vorname");
  $("#firstNameLabel").html("Vorname:");
  $("#lastName").attr("placeholder", "Nachname");
  $("#lastNameLabel").html("Nachname:");
  $("#comment").attr("placeholder", "Kommentar");
  $("#submitButton").html("Absenden");
  $("#privacyCheckboxLabel").html(
    'Ich akzeptiere die <a class="text-info" href="">Hinweise zur Datenverarbeitung</a>.'
  );
  $("#backward").html('Zurück');
  $("#forward").html('Weiter');
  $("#progress-step").html('Schritt ');
  $("#progress-of").html(' von ');
}
