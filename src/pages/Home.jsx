import { useSelector } from "react-redux";

const Home = () => {
  const token = useSelector((state) => state.auth.token)
  return <>{token}</>;
};

export default Home;
