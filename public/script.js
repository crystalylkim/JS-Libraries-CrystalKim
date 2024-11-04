document.addEventListener('DOMContentLoaded', function () {

  // Initialize AOS (Animate On Scroll)
  AOS.init();

  // Initialize Masonry layout
  var msnry = new Masonry('.grid', {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  // Set a fixed height for all grid items
  const gridItems = document.querySelectorAll('.grid-item');
  const fixedHeight = 250; // Desired height

  gridItems.forEach(function(item) {
    item.style.height = fixedHeight + 'px';
  });

  // Update Masonry layout
  msnry.layout();

  // Function to scroll to the top of the page smoothly
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Date input formatting
  var cleaveDate = new Cleave('.input-date', {
    date: true
  });

  // Numeral input formatting
  var cleaveNumeral = new Cleave('.input-numeral', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
  });

  // Phone number input formatting
  var cleaveCustom = new Cleave('.input-custom', {
    blocks: [3, 3, 4],
    delimiter: '-',
  });

});
