import React from 'react';
import PropTypes from 'prop-types';
import './Details.css';
import { useDispatch, useSelector } from 'react-redux';

function Details() {
  const dispatch = useDispatch();
  const { currentLectureId, status } = useSelector((store) => store.currentLecture);
  const { allLecture } = useSelector((state) => state.lecture);

  
  

  const {id} = currentLectureId;

  const currentLecture = allLecture.filter((lecture) => lecture.id === id) ;

  return (
    <div class="container"> 
    
       
     </div>
  );
}

export default Details;