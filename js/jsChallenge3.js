document.getElementById('ch3form').addEventListener('submit', function(event) {
    let standingChecked = false;
    let gradDateChecked = false;

    let standingRadios = document.getElementsByName('standing');
    let gradDateRadios = document.getElementsByName('gradDate');

    for (let i = 0; i < standingRadios.length; i++) {
      if (standingRadios[i].checked) {
        standingChecked = true;
        break;
      }
    }

    for (let i = 0; i < gradDateRadios.length; i++) {
      if (gradDateRadios[i].checked) {
        gradDateChecked = true;
        break;
      }
    }

    if (!standingChecked || !gradDateChecked) {
      alert("Please select both options before submitting.");
      event.preventDefault();
    }
  });
