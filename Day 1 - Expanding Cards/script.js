const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel');
let activePanel = document.querySelector('.active');

const onClick = (e) => {
  if (!e.target.classList.contains('active') && e.target.classList.contains('panel')) {
    if (activePanel) {
      activePanel.classList.remove('active');
    }
    activePanel = e.target;
    e.target.classList.add('active');
  }
};

container.addEventListener('click', onClick);