const decorateHero = async (block) => {
  /*  const grandChildren = block.querySelectorAll(':scope > div > div');

    while (block.firstChild) {
      block.removeChild(block.firstChild);
    }

    if (grandChildren) {
      Array.from(grandChildren).forEach((grandChild, index) => {
        if (index === 0) {
          const asset = grandChild.querySelector('img');
          if (asset) {
            asset.classList.add(
              ...['h-[500px]', 'object-cover', 'object-center'],
            );
          }
          grandChild.classList.add(
            ...[
              "before:content-['']",
              'absolute',
              'before:absolute',
              'before:bg-black/40',
              'before:inset-0',
              'inset-0',
            ],
          );
          block.append(grandChild);
        } else {
          const contentWrapper = document.createElement('div');
          contentWrapper.classList.add(
            ...['container', 'mx-auto', 'px-4', 'relative', 'z-10'],
          );
          grandChild.classList.add(...['max-w-xl']);

          const headingOne = grandChild.querySelector('h1, h2, h3');
          if (headingOne) {
            headingOne.classList.add(
              ...['font-bold', 'mb-4', 'text-5xl', 'text-white'],
            );
          }

          const paragraphs = grandChild.querySelectorAll('p');
          Array.from(paragraphs).forEach((paragraph) => {
            if (!paragraph.classList.contains('button-container')) {
              paragraph.classList.add(...['mb-6', 'text-xl', 'text-white']);
            }
          });

          const buttonContainers =
            grandChild.querySelectorAll('.button-container');
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

          contentWrapper.append(grandChild);
          block.append(contentWrapper);
        }
      });
    }
    block.classList.add(...['flex', 'h-[500px]', 'items-center', 'relative']); */
};

export default decorateHero;
