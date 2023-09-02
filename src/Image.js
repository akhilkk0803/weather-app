import sunny from "./images/images/clear.png";
import clouds from "./images/images/clouds.png";
import drizzle from "./images/images/drizzle.png";
import mist from "./images/images/mist.png";
import rain from "./images/images/rain.png";
import snow from "./images/images/snow.png";
import smoke from "./images/images/smoke.png";

function Image(props) {
  let image;
  switch (props.weather) {
    case "Sunny":
      image = sunny;
      break;
    case "Clouds":
      image = clouds;
      break;
    case "Drizzle":
      image = drizzle;
      break;
    case "Mist":
      image = mist;
      break;
    case "Rain":
    case "Thunderstorm":
      image = rain;
      break;
    case "Snow":
      image = snow;
      break;
    case "Smoke":
      image = smoke;
      break;

    default:
      image = sunny;
      break;
  }
  return <img src={image}></img>;
}

export default Image;
