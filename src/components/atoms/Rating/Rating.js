import PropTypes from 'prop-types';
import style from "./Rating.module.scss";

/**
* <Rating
*   value={3.5}
*   type="self"
*   total={5}
* />
 *
 * @prop {number} value rating value
 * @prop {string} type an optional conditional icon type e.g. for styling
 * @prop {number} total an optional define the total number of icons. Default value is 5
 */

const Rating = ({ value, type, total }) => {
  const count = Math.floor(value);
  const halfCount = count % value > 0;
  const remainingCount = count < total ? halfCount ? total - count - 1 : total - count : 0;
  const isSelfType = type === "self";
  return (
    <>
      {!isSelfType && (
        <div className={style.Container} title={`${value} ratings`}>
          {Array.from(Array(count), (e, i) => (
            <svg
              key={"s"+i}
              className={style.Icon}
              viewBox="0 0 24 24"
              title="rateIcon"
              fill="currentColor"
              width="14"
              height="14"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
          ))}
          {halfCount && (
            <svg
              className={style.Icon}
              viewBox="0 0 24 24"
              title="rateIcon"
              fill="currentColor"
              width="14"
              height="14"
            >
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
            </svg>
          )}
          {remainingCount > 0 && (
            Array.from(Array(remainingCount), (e, i) => (
              <svg
                key={"r"+i}  
                className={style.Icon}
                viewBox="0 0 24 24"
                title="rateIcon"
                fill="currentColor"
                width="14"
                height="14"
              >
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
              </svg>
            ))
          )}
        </div>
      )}
      {isSelfType && (
        <div className={style.Container} title={`${value} ratings`}>
          {Array.from(Array(count), (e, i) => (
            <svg
              key={"s"+i}  
              className={style.Icon}
              viewBox="0 0 24 24"
              title="rateIcon"
              fill="currentColor"
              width="14"
              height="14"
            >
              <path d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Z"></path>
            </svg>
          ))}
          {halfCount && (
            <svg
              className={style.Icon}
              viewBox="0 0 24 24"
              title="rateIcon"
              fill="currentColor"
              width="14"
              height="14"
            >
              <path d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm0,16.14V4.86a7.14,7.14,0,0,1,0,14.28Z"></path>
            </svg>
          )}
          {remainingCount > 0 && (
            Array.from(Array(remainingCount), (e, i) => (
              <svg
                key={"r"+i}  
                className={style.Icon}
                viewBox="0 0 24 24"
                title="rateIcon"
                fill="currentColor"
                width="14"
                height="14"
              >
                <path d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm0,16.2A7.2,7.2,0,1,1,19.2,12,7.21,7.21,0,0,1,12,19.2Z"></path>
              </svg>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Rating;

Rating.defaultProps = {
  total: 5
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string,
  total: PropTypes.number
}
