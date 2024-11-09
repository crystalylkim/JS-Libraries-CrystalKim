document.addEventListener('DOMContentLoaded', function () {
  initializeGallery();
  initializeAnimations();
  initializeInputs();
});

// Function to initialize the gallery
function initializeGallery() {
  const options = {
      aos: "fade-up", // AOS property value
      lightbox: "gallery" // Lightbox property value
  };

  // Array of image data
  const images = [
      { src: "assets/furniture1.jpg", alt: "Furniture 1" },
      { src: "assets/furniture2.jpg", alt: "Furniture 2" },
      { src: "assets/furniture3.jpg", alt: "Furniture 3" },
      { src: "assets/furniture4.jpg", alt: "Furniture 4" },
      { src: "assets/furniture5.jpg", alt: "Furniture 5" },
      { src: "assets/furniture6.jpg", alt: "Furniture 6" }
  ];

  const gallerySection = document.getElementById("gallery");
  images.forEach(image => {
      const gridItem = createGridItem(image, options);
      gallerySection.appendChild(gridItem);
  });

  // Initialize Masonry layout
  const msnry = new Masonry('.grid', {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
  });

  // Set a fixed height for all grid items
  const fixedHeight = 250; // Desired height
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
      item.style.height = fixedHeight + 'px';
  });

  // Update Masonry layout
  msnry.layout();
}

// Function to create a grid item
function createGridItem(image, options) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.setAttribute("data-aos", options.aos); // AOS setting

  const link = document.createElement("a");
  link.href = image.src;
  link.setAttribute("data-lightbox", options.lightbox); // Lightbox setting

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;

  link.appendChild(img);
  gridItem.appendChild(link);
  return gridItem;
}

// Function to initialize animations and AOS
function initializeAnimations() {
  AOS.init();
}

// Function to initialize input formatting
function initializeInputs() {
  new Cleave('.input-date', {
      date: true
  });

  new Cleave('.input-numeral', {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
  });

  new Cleave('.input-custom', {
    blocks: [3, 3, 4], // Format for XXX-XXX-XXXX
    delimiter: '-',    // Delimiter between blocks
    numericOnly: true, // Ensure only numeric input
  });

}

function submitForm() {
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const visitDate = document.getElementById('visit-date').value.trim();
  const estimatedAmount = document.getElementById('estimated-amount').value.trim();

  // Email validation regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (phone && email && visitDate && estimatedAmount) {
      if (emailPattern.test(email)) {
          alert('We will contact you shortly.');
      } else {
          alert('Please enter a valid email address.');
      }
  } else {
      alert('Please fill out all fields.');
  }
}
