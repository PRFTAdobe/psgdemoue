const decorateLogo = (block) => {
  block.classList.add(...['flex', 'items-center', 'space-x-2']);
  const logoImage = block.querySelector('img');
  const brandName = block.querySelector('div:nth-child(2) > div > p');
  while (block.firstChild) {
    block.removeChild(block.firstChild);
  }

  if (logoImage) {
    logoImage.classList.add(...['h-8', 'w-8']);
    block.appendChild(logoImage);
  }

  if (brandName) {
    const anchor = document.createElement('a');
    anchor.classList.add(
      ...['font-bold', 'md:text-2xl', 'text-dsg-red', 'text-xl'],
    );
    anchor.setAttribute('href', '/');
    anchor.innerHTML = brandName.textContent;
    block.appendChild(anchor);
  }
};

export default decorateLogo;
