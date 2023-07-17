import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// const useAxios = async () => {
//   try {
//     const response = await axios({
//       url: "https://jsonplaceholder.typicode.com/albums",
//       //   method: "GET", //POST, GET, PUT, PATCH, DELETE
//       //   data: "",
//       //   headers: {},
//     });
//     const data = response.data;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

const defaultUpdateOptions = {
  headers: {},
};

/**
 * custom hook to get data
 * @param {string} url 
 * @param {object} [options] //opzionale con le quadre
 * @param {object} [options.headers]
 * @returns {[*, boolean, *, function]}
 */
const useAxios = (url, options = { ...defaultUpdateOptions }) => {
  options = { ...defaultUpdateOptions, ...options };

  const [_url, _setUrl] = useState(url);

  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  const update = async (url = undefined) => {
    if (url) {
      _setUrl(url);
      return;
    }
    setError(null);
    setData(null);
    try {
      const response = await axios({
        url: _url,
        method: "GET", //POST, GET, PUT, PATCH, DELETE
        ...options,
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  useEffect(() => {
    update();
  }, [_url]);

  return [data, data == null && error == null, error, update];
};

export default useAxios;

// const Test = () => {
//   const [page, setPage] = useState(1);

//   const [users, usersLoading, usersError, usersUpdate] = useAxios(
//     `https://jsonplaceholder.typicode.com/users?page=${page}`
//   );

//   const handleChangePage = (type = "NEXT") => {
//     if (type == "NEXT") {
//       setPage((_page) => _page + 1);
//     } else {
//       setPage((_page) => _page - 1);
//     }
//   };

//   useEffect(() => {
//     usersUpdate(`https://jsonplaceholder.typicode.com/users?page=${page}`);
//   }, [page]);

//   return (
//     <div>
//       {users != null &&
//         users.map((user) => {
//           return JSON.stringify(user);
//         })}
//       <button onClick={() => handleChangePage("PREV")}>Prev</button>
//       <button onClick={() => handleChangePage("NEXT")}>Next</button>
//     </div>
//   );
// };
