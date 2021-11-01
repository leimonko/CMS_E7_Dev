function changeLanguage() {
  x = document.getElementById('languageDropdown');
  x.classList.toggle('show');
  if (x.classList.contains('show')) {
    document.getElementById('languageButton').style.background = '#EEEEEE';
  } else {
    document.getElementById('languageButton').style.background = '#FFFFFF';
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches('.jits-footer-dropbtn-language') &&
    !event.target.matches('.jits-footer-dropup-language-arrow')
  ) {
    var dropdowns = document.getElementsByClassName(
      'jits-footer-dropup-language-content'
    );
    var i;
    document.getElementById('languageButton').style.background = '#FFFFFF';
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
