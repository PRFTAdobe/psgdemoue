const decorateHero = async (block) => {
  const grandChildren = block.querySelectorAll(':scope > div > div');

  while (block.firstChild) {
    block.removeChild(block.firstChild);
  }

  let imageSize = 500;

  if (grandChildren) {
    const grandChildrenAsArray = Array.from(grandChildren);

    const grandChildImage = grandChildrenAsArray[0] || null;
    const grandChildContent = grandChildrenAsArray[1] || null;
    const grandChildImageSize = grandChildrenAsArray[2] || null;

    if (grandChildImageSize) {
      const paragraph = grandChildImageSize.querySelector('p');
      imageSize = parseInt(paragraph.textContent, 10);
    }

    if (grandChildImage) {
      const asset = grandChildImage.querySelector('img');
      if (asset) {
        asset.classList.add(
          ...[`h-[${imageSize}px]`, 'object-cover', 'object-center'],
        );
      }
      grandChildImage.classList.add(
        ...[
          "before:content-['']",
          'absolute',
          'before:absolute',
          'before:bg-black/40',
          'before:inset-0',
          'inset-0',
        ],
      );
      block.append(grandChildImage);
    }

    if (grandChildContent) {
      const contentWrapper = document.createElement('div');
      contentWrapper.classList.add(
        ...['container', 'mx-auto', 'px-4', 'relative', 'z-10'],
      );
      grandChildContent.classList.add(...['max-w-xl']);

      const headingOne = grandChildContent.querySelector('h1, h2, h3');
      if (headingOne) {
        headingOne.classList.add(
          ...['font-bold', 'mb-4', 'text-5xl', 'text-white'],
        );
      }

      const paragraphs = grandChildContent.querySelectorAll('p');
      Array.from(paragraphs).forEach((paragraph) => {
        if (!paragraph.classList.contains('button-container')) {
          paragraph.classList.add(...['mb-6', 'text-xl', 'text-white']);
        }
      });

      const buttonContainers =
        grandChildContent.querySelectorAll('.button-container');
      Array.from(buttonContainers).forEach((buttonContainer) => {
        const anchor = buttonContainer.querySelector('a');
        anchor.classList.add(
          ...[
            '[&_svg]:pointer-events-none',
            '[&_svg]:shrink-0',
            '[&_svg]:size-4',
            'bg-dsg-red',
            'disabled:opacity-50',
            'disabled:pointer-events-none',
            'focus-visible:outline-none',
            'focus-visible:ring-2',
            'focus-visible:ring-offset-2',
            'focus-visible:ring-ring',
            'font-medium',
            'gap-2',
            'h-10',
            'hover:bg-dsg-red/90',
            'inline-flex',
            'items-center',
            'justify-center',
            'px-4',
            'py-2',
            'ring-offset-background',
            'rounded-md',
            'text-sm',
            'text-white',
            'transition-colors',
            'whitespace-nowrap',
          ],
        );
        buttonContainer.replaceWith(anchor);
      });

      contentWrapper.append(grandChildContent);
      block.append(contentWrapper);
    }
  }

  block.classList.add(
    ...['flex', `h-[${imageSize}px]`, 'items-center', 'relative'],
  );
};

export default decorateHero;
