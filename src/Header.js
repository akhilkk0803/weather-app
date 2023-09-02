import { useRef } from "react";
import "./Header.css";
function Header(props) {
  const inpuref = useRef();
  async function submithandler(e) {
    e.preventDefault();
    const apikey = `f3d3fc3b525ba9d41875f2086db271cc`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inpuref.current.value}&appid=f3d3fc3b525ba9d41875f2086db271cc&units=metric`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("city not found");
      }
      const data = await response.json();
      props.getdata({
        wind: data.wind.speed,
        temp: data.main.temp,
        weather: data.weather[0].main,
        humidity: data.main.humidity,
        city:data.name,
      });
      inpuref.current.value="";
    } catch (error) {
      props.getdata(null);
    }
  }
  return (
    <header>
      <form onSubmit={submithandler}>
        <input
          type="text"
          placeholder="Enter the location"
          ref={inpuref}
        ></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="icon"
          onClick={submithandler}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </form>
    </header>
  );
}

export default Header;
