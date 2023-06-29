import axios from "axios";
import { useEffect, useState } from "react";

const defaultOptions = {
  method: "GET",
  data: {},
  headers: {},
};

const useFetch = (url, options = { ...defaultOptions }) => {
  options = { ...defaultOptions, ...options };

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [_url, _setUrl] = useState(url);

  const update = async (url) => {
    if (url) {
      _setUrl(url);
      return;
    }
    setError(null);
    try {
      const response = await axios({
        url: _url,
        ...options,
      });
      setData(response.data);
    } catch (error) {
      setData(null);
      setError(error.message);
    }
  };

  useEffect(() => {
    update();
  }, [_url]);

  return [data, error, update];
};

export default useFetch;
