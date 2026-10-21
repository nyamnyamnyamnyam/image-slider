import { Button } from '@heroui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Controls({ setCurrentIndex, total }) {
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === total - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? total - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-controls">
      <Button
        isIconOnly
        size="sm"
        variant="outline"
        className="navigation-button"
        aria-label="Előző kép"
        onPress={handlePrev}
      >
        <FiChevronLeft />
      </Button>
      <Button
        isIconOnly
        size="sm"
        variant="outline"
        className="navigation-button"
        aria-label="Következő kép"
        onPress={handleNext}
      >
        <FiChevronRight />
      </Button>
    </div>
  );
}

export default Controls;
