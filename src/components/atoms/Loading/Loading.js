import style from "./Loading.module.scss";

const Loading = ({ isReady }) => {
  return <div className={`${style.Loading} ${isReady ? style.Hide : ""}`}>Loading...</div> 
}

export default Loading;