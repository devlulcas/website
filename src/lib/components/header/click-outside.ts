type ClickOutsideOptions = {
  onOutsideClick?: (event: MouseEvent) => void;
};

export function clickOutside(node: HTMLElement, options: ClickOutsideOptions = {}) {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (node && !node.contains(target) && !event.defaultPrevented) {
      options.onOutsideClick?.(event);
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
}
