import React from 'react';
import './Details.css';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import configIcon from '../images/config.png';
import nextIcon from '../images/next_white.png';
import backIcon from '../images/back.png';
import discoverIcon from '../images/discover.png';
import arrowRight from '../images/arrow_right.png';

function Details() {
  const navigate = useNavigate();
  const { currentLectureId } = useSelector((store) => store.currentLecture);
  const { allLecture } = useSelector((state) => state.lecture);

  const { id } = currentLectureId;

  const currentLecture = allLecture.filter((lecture) => lecture.id === id);

  const { description } = currentLecture[0];
  const { imageUrl } = currentLecture[0];
  const { name } = currentLecture[0];
  const { price } = currentLecture[0];
  const { webLink } = currentLecture[0];

  return (

    <div className="container-main-details">

      <div className="container-details">
        <img src={imageUrl} className="imageUrl" alt="next icon" />
        <div className="card">

          <div className="title">
            {name}
            {' '}
          </div>
          <p>
            id
            {id}
          </p>
          <div className="description">
            {description}
          </div>

          <div className="price Text-Style-4">
            <div>Price</div>
            {' '}
            <div>{price}</div>
          </div>

          <div className="web-link">
            <a href={webLink} target="_blank" rel="noreferrer">web link</a>
          </div>

          <div className="discover-more">
            <div>Discover more classes </div>
            <img src={arrowRight} className="arrowRight-icon" alt="arrowRight icon" />
          </div>

          <img src={discoverIcon} className="discover-icon" alt="discover icon" />

          <button className="next-button" type="button" onClick={() => (0)}>
            <img src={configIcon} className="config-icon" alt="config icon" />
            <div className="color-white">Configure</div>
            <img src={nextIcon} className="next-icon" alt="next icon" />
          </button>
        </div>

      </div>

      <button className="back-button" type="button" onClick={() => navigate('/lectures')}>
        <img src={backIcon} className="back-icon" alt="back icon" />
      </button>

    </div>
  );
}

export default Details;
