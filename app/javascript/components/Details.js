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
  console.log('currentLecture',currentLecture)
  return (
    <div class="container"> 
  
     <p>{currentLecture[0].id}</p>
     <p>{currentLecture[0].description}</p>
     <p>{currentLecture[0].imageUrl}</p>
     <p>{currentLecture[0].name}</p>
     <p>{currentLecture[0].price}</p>
     <p>{currentLecture[0].webLink}</p>
     
    
     </div>
  );
}

export default Details;