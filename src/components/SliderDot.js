function SliderDot({ numSlide, curSlide, onCurSlideChange, closeDetails }) {
  return (
    <button
      className={numSlide === curSlide ? 'slider__dot slider__dot--active' : 'slider__dot'}
      data-slide={numSlide}
      onClick={(e) => {
        onCurSlideChange(+e.target.dataset.slide);
        closeDetails();
      }}
    ></button>
  );
}

export default SliderDot;
