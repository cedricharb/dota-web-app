import HeroListComponent from "./heroList.component";
import { useSelector } from "react-redux";

const HeroListContainer = (props) => {
  // const [loading, setLoading] = useState(true);
  // const [heroList, setHeroList] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.opendota.com/api/heroStats")
  //     .then((response) => response.json())
  //     .then((result) => setHeroList(result))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);
  const { data, loading } = useSelector((store) => store.list);

  return <HeroListComponent heroList={data} laoding={loading} />;
};

export default HeroListContainer;
