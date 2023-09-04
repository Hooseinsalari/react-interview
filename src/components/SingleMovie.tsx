import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

// component
import OptionForm from "./shared/OptionForm";

// interface
import { Data, FormData, Genre } from "../models";

const SingleMovie: React.FC = () => {
  const [data, setData] = useState<Data>();
  const [options, setOptions] = useState<Genre[]>();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    year: 0,
    rating: 0,
    director: "",
    genre: [],
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`http://localhost:5000/movies/${id}`);
      setData(data.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setOptions(data.genre);

      setFormData({
        title: data.title,
        year: data.year,
        rating: data.rating,
        director: data.director,
        genre: data.genre,
      });
    }
  }, [data]);

  useEffect(() => {
    setFormData({ ...formData, genre: options });
  }, [options]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/movies/${id}`,
        formData
      );
      console.log("Successfully", response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={formData?.title}
          name="title"
          onChange={inputHandler}
        />
      </div>
      <hr />
      <div>
        <label htmlFor="year">year</label>
        <input
          type="text"
          value={formData.year}
          name="year"
          onChange={inputHandler}
        />
      </div>
      <hr />
      <div>
        <label htmlFor="rating">rating</label>
        <input
          type="text"
          value={formData.rating}
          name="rating"
          onChange={inputHandler}
        />
      </div>
      <hr />
      <div>
        <label htmlFor="director">director</label>
        <input
          type="text"
          value={formData?.director}
          name="director"
          onChange={inputHandler}
        />
      </div>
      <hr />
      <OptionForm options={options} setOptions={setOptions} />
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SingleMovie;
