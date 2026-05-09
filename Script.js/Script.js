// hidden
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  
// 🔵 NEW Observer for left and right animations
const observerSides = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-side');
    } else {
      entry.target.classList.remove('show-side');
    }
  });
});

const hiddenSides = document.querySelectorAll('.hidden-left, .hidden-right');
hiddenSides.forEach((el) => observerSides.observe(el));