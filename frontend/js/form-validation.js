// Wait for the DOM to be ready
$(document).ready(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#registration").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      CName: {
          required: true
      },
      CAge: {
          required: true,
          digit: true
      },
      Ser_off_name: {
          required: true
      },
      NRIC: {
        required: true,
        digit: true
    },
      regTime: {
          required: true
      },
      branchCode: {
        required: true,
        digit: true
    },
      productType: {
        required: true,
        digit: true
    },
    },
    // Specify validation error messages
    messages: {
      CName: {
          required: "Please enter customer name",
          maxlength: "Customer Name must not exceed 64 characters."
      },
      CAge: {
          required: "Customers must be at least 18 years of age.",
      },
      Ser_off_name: {
        required: "Please enter service officer name",
        maxlength: "Service Officer Name must not exceed 64 characters."
      },
      NRIC: {
          required: "Please enter a valid email address",
          maxlength: "NRIC must be in uppercase and only have 7 numeric numbers."
      },
      branchCode: "Branch Code should be a valid DBS branch code.",
      productType: ""
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});


function nricFunction() {
  var nric = document.getElementById("nric");
  nric.value = nric.value.toUpperCase();
}

