import { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Slide from './Slide';
import SliderDot from './SliderDot';
import Loader from './Loader';
import { ReactComponent as ArrowRightIcon } from '../img/SVG/chevron-right.svg';
import { ReactComponent as ArrowLeftIcon } from '../img/SVG/chevron-left.svg';
import { ReactComponent as ExpandIcon } from '../img/SVG/dots-three-horizontal.svg';
import { ReactComponent as CloseIcon } from '../img/SVG/cross.svg';
import { AppContext } from './../context/AppContext';

function Slider() {
  const { allProjects, loadingError, windowWidth } = useContext(AppContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [toggleDetails, setToggleDetails] = useState(false);
  const { type } = useParams();
  const counter = useRef(0);

  const projects = allProjects.filter((el) => el.lang === type);
  const slidesOnScreen = windowWidth >= 1200 ? 2 : 1;
  const lastSlide = projects.length - slidesOnScreen;

  const expandIconStyles = {
    transform: toggleDetails ? 'translate(-50%, -50%) scale(0)' : 'translate(-50%, -50%) scale(1)',
  };
  const closeIconStyles = {
    transform: toggleDetails ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
  };

  const ruleStyles = {
    opacity: toggleDetails ? '1' : '0',
    transitionDelay: toggleDetails ? '.4s' : '0s',
  };

  useEffect(() => {
    resetCurrentSlide();

    closeDetails();

    if (!isLoading) setIsLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const resetCurrentSlide = () => setCurrentSlide(0);

  const handleImageLoad = () => {
    counter.current += 1;
    if (counter.current >= projects.length) {
      setIsLoading(false);
      counter.current = 0;
    }
  };

  const handleToggleDetailsClick = () => setToggleDetails((prevState) => !prevState);
  const closeDetails = () => setToggleDetails(false);

  const handleCurSlideChange = (num) => {
    setCurrentSlide(num);
  };

  const handleMoveLeftClick = () => {
    currentSlide === 0 ? setCurrentSlide(lastSlide) : setCurrentSlide((prevState) => prevState - 1);
  };

  const handleMoveRightClick = () => {
    currentSlide === lastSlide ? setCurrentSlide(0) : setCurrentSlide((prevState) => prevState + 1);
  };

  return (
    <>
      {isLoading && !loadingError && <Loader />}
      <div
        className="slider mb-3"
        style={{
          display: isLoading ? 'none' : 'block',
        }}
      >
        {projects.map((project, i) => (
          <Slide
            key={project.name}
            numSlide={i}
            project={project}
            curSlide={currentSlide}
            toggleDetails={toggleDetails}
            onImageLoad={handleImageLoad}
          />
        ))}

        {projects.length > slidesOnScreen && (
          <button
            className="slider__btn slider__btn--left"
            onClick={() => {
              handleMoveLeftClick();
              closeDetails();
            }}
          >
            <ArrowLeftIcon className="slider__svg slider__svg--left" />
          </button>
        )}
        {projects.length > slidesOnScreen && (
          <button
            className="slider__btn slider__btn--right"
            onClick={() => {
              handleMoveRightClick();
              closeDetails();
            }}
          >
            <ArrowRightIcon className="slider__svg slider__svg--right" />
          </button>
        )}

        <button className="slider__btn slider__btn--expand" onClick={handleToggleDetailsClick}>
          <ExpandIcon className="slider__svg slider__svg--expand" style={expandIconStyles} />
          <CloseIcon className="slider__svg slider__svg--close" style={closeIconStyles} />
        </button>

        <div className="slider__dots">
          {projects.map((_, i) => (
            <SliderDot
              key={i}
              numSlide={i}
              curSlide={currentSlide}
              onCurSlideChange={handleCurSlideChange}
              closeDetails={closeDetails}
            />
          ))}
        </div>

        <div className="slider__big-rule" style={ruleStyles}></div>
      </div>
    </>
  );
}

export default Slider;
