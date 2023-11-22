// import './AddLecture.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LectureService from '../Service/classApi';
import showError from '../Ui/ErrorAlert';

const AddLecture = () => {
  const navigate = useNavigate();
  const [lectureName, setLectureName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [lectureDesctiption, setLectureDescription] = useState('');
  const [lectureWeb, setLectureWeb] = useState('');
  const [lecturePrice, setLecturePrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const obj = {
        name: lectureName,
        image_url: imageUrl,
        description: lectureDesctiption,
        web_link: lectureWeb,
        price: lecturePrice,
      };
      const response = await LectureService.createLectures(obj);
      if (response) {
        // notify("Lecture created successfully");
        setLectureName('');
        setImageUrl('');
        setLectureDescription('');
        setLectureWeb('');
        setLecturePrice('');
        navigate('/lectures');
      } else {
        showError('Something went wrong!, try again');
      }
    } catch (error) {
      showError('Lecture creation failed!', error);
    }
  };

  return (

    <section className="wrapper-add-lecture flex flex-col justify-evenly" id="contact">

      <h2 className="content text-center text-3xl font-bold py-3">
        Add a Lecture
      </h2>
      <form className="form-add-lecture flex flex-col mt-2 gap-2 items-center" onSubmit={handleSubmit}>
        <label className="label-size" htmlFor="item-1">
          <input
            id="item-1"
            className="items-form md:h-[2rem] h-[1.5rem]  rounded-[1rem] w-[55vw] sm:w-[55vw] md:mx-[5%] lg:w-[40rem] pb-[2rem] p-2"
            type="text"
            name="lecturename"
            placeholder="Lecture name"
            value={lectureName}
            onChange={(e) => setLectureName(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-2">
          <input
            id="item-2"
            className="items-form md:h-[2rem] h-[1.5rem]  rounded-[1rem] w-[55vw] sm:w-[55vw] md:mx-[5%] lg:w-[40rem] pb-[2rem] p-2"
            type="text"
            name="imageurl"
            placeholder="Image url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-3">
          <input
            id="item-3"
            className="items-form md:h-[2rem] h-[1.5rem]  rounded-[1rem] w-[55vw] sm:w-[55vw] md:mx-[5%] lg:w-[40rem] pb-[2rem] p-2"
            type="text"
            name="websitelink"
            placeholder="Website link"
            value={lectureWeb}
            onChange={(e) => setLectureWeb(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-4">
          <input
            id="item-4"
            className="items-form md:h-[2rem] h-[1.5rem] rounded-[1rem] w-[55vw] sm:w-[55vw] md:mx-[5%] lg:w-[40rem] pb-[2rem] p-2"
            type="number"
            name="price"
            placeholder="Price"
            value={lecturePrice}
            onChange={(e) => setLecturePrice(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-5">
          <textarea
            id="item-5"
            className="textarea md:h-[5rem] h-[3rem] rounded-[1rem] w-[55vw] sm:w-[55vw] md:mx-[5%] lg:w-[40rem] pb-[2rem] p-2"
            type="textarea"
            name="description"
            placeholder="Description"
            value={lectureDesctiption}
            onChange={(e) => setLectureDescription(e.target.value)}
            required
          />
        </label>
        <div>
          <button className="form-button hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center text-center w-[55vw] sm:w-[55vw] md:mx-[5%] lg:w-[40rem]" type="submit" id="btn-submit">
            Create Lecture
          </button>
        </div>
      </form>

    </section>

  );
};

export default AddLecture;
