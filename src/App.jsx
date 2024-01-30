import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeSliceactions } from "./store/HomeSlice";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/configuration?api_key=e27c5ca0e405a55deb0508c7b709cc2b"
    )
      .then((res) => res.json())
      .then((data) => {
        const url = {
          backdrop: data.images.secure_base_url + "original",
          poster: data.images.secure_base_url + "original",
          profile: data.images.secure_base_url + "original",
        };
        dispatch(homeSliceactions.getApiConfiguration(url));
      });
  }, []);

  
  // const generCall = async () => {
  //   let promises = [];
  //   let endPoints = ["tv", "movie"];
  //   let allGenres = {};
  //   endPoints.forEach((url) => {
  //     return promises.push(
  //       fetch(
  //         `https://api.themoviedb.org/3/genre/${url}/list?api_key=e27c5ca0e405a55deb0508c7b709cc2b`
  //       )
  //     );
  //   });
  //   const data = await Promise.all(promises);
  //   console.log(data);
  // };

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
