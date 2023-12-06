import openai from "../../utils/openai";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { addGptMovieResult } from "../../utils/gptSlice";
import { searchMovieTMDB } from "../../utils/helper";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const [isUnderDevelopment, setisUnderDevelopment] = useState(false);

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // // Make an API call to GPT API and get Movie Results

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) {
    //   // TODO: Write Error Handling
    // }

    // console.log(gptResults.choices?.[0]?.message?.content);

    // // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    setisUnderDevelopment(true);
    const gptMovies = [
      "Hera Pheri",
      "Golmaal",
      "Chupke Chupke",
      "Padosan",
      "Andaz Apna Apna",
    ];

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full m-2 md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={
            lang[langKey].gptSearchPlaceholder +
            " Funny Indian Movies.. Hit Search"
          }
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
        {isUnderDevelopment && (
          <h1 className="text-white col-span-9 text-center text-xl pl-2 pb-2">
            Apologies😞.... limit for OpenAI tokens has been exhausted, you can
            view the below recommendations till then!!
          </h1>
        )}
      </form>
    </div>
  );
};
export default GptSearchBar;
