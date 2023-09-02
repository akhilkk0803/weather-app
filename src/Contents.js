import "./Contents.css";
import Image from "./Image";
import wind from "./images/images/wind.png";
import humidity from "./images/images/humidity.png";
import notfound from "./images/images/not found.jpg";
function Contents(props) {
  return (
    <div>
      {props.data == false && <p></p>}
      {props.data && (
        <div className="contents">
          <div>
            <Image weather={props.data.weather} />
            <div className="weather">
              <h1 className="degree">{props.data.temp}C</h1>
              <h3 className="city">{props.data.city}</h3>
              <div className="extra">
                <div>
                  <p>wind</p>
                  <img src={wind}></img>
                  <h4>{props.data.wind}km/h</h4>
                </div>
                <div>
                  <p>humidity</p> <img src={humidity}></img>
                  <h4>{props.data.humidity}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.data === null && <img src={notfound} className="error"></img>}
    </div>
  );
}

export default Contents;
