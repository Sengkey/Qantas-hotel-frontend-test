import PropTypes from 'prop-types';
import style from "./Loading.module.scss";

const Loading = ({ isReady }) => {
  return <div className={`${style.Loading} ${isReady ? style.Hide : ""}`}>Loading...</div> 
}

export default Loading;

Loading.defaultProps = {
  isReady: false
}

Loading.propTypes = {
  isReady: PropTypes.bool
}
