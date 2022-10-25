import React from "react";
import PropTypes from 'prop-types';
import orderBy from "lodash/orderBy";
import Dropdown from "../../atoms/Dropdown";
import Rating from "../../atoms/Rating/Rating";

import style from "./TallyTable.module.scss";

const sortPriceOptions = [
  { label: "Default", value: "" },
  { label: "Price high-low", value: "desc" },
  { label: "Price low-high", value: "asc" },
];

export default class TallyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "",
    };
  }

  handleSelect = (value) => {
    this.setState({ sortType: value });
  };

  render() {

    const { data } = this.props;

    if(data.length <= 0) return null;

    const { sortType } = this.state;
    
    const { results } = data;
    
    const sortedData = sortType !== "" ? orderBy(
      results,
      ["offer.displayPrice.amount"],
      [sortType]
    ) : results;

    return (
      <div className={style.TallyTable}>
        <div className={style.Header}>
          
          <div className={style.ResultText}>
            <strong>{sortedData.length}</strong> <em>{`${sortedData.length > 1 ? "hotels in":"hotel in"}`}</em>{" "}
            <strong>Sydney</strong>.
          </div>
          
          <div className={style.SortBy}>
            <span>Sort by</span>{" "}
            <Dropdown
              options={sortPriceOptions}
              onSelect={(e) => this.handleSelect(e)}
              selectedValue={sortType}
            />
          </div>

        </div>

        {sortedData !== undefined && sortedData.length > 0 && (
          <div className={style.Body}>
            
            {sortedData.map((item, i) => {

              const { title, previewImage, address, rating } = item.property;
              
              const {
                name,
                cancellationOption,
                promotion,
                displayPrice,
                savings,
              } = item.offer;
              
              const { url, caption } = previewImage;
              const { cancellationType } = cancellationOption;
              const { amount, currency } = displayPrice;

              return (
                <article key={i}>

                  <div className={style.Image}>
                    <span className={style.PromoLabel}>{promotion.title}</span>
                    <a href="https://www.qantas.com/au/en.html" target="_blank" rel="noreferrer">
                      <img src={url} alt={caption} />
                    </a>
                  </div>

                  <div className={style.ContentBox}>
                    <div className={style.ContentBody}>
                      
                      <div className={style.ContentTitle}>
                        <h3>
                          <span>{title}</span>
                          {rating !== null && <Rating value={rating.ratingValue} type={rating.ratingType} />}
                        </h3>
                        <p className={style.Address}>
                          {address[0]}, {address[1]}
                        </p>
                      </div>
                      <p className={style.RoomName}>
                        <a href="https://www.qantas.com/au/en.html" target="_blank" rel="noreferrer">
                          {name}
                        </a>
                      </p>
                      <p className={style.Cancellation}>
                        {cancellationType === "FREE_CANCELLATION" &&
                          "Free cancellation"}
                      </p>
                    </div>

                    <div className={style.ContentPrice}>
                      
                      <small className={style.NightTotal}>
                        <strong>1</strong> night total ({currency})
                      </small>
                      <div className={style.Amount}>
                        <sup>$</sup>
                        {amount}
                      </div>
                      <p className={style.Save}>
                        {savings !== null && `Save $${savings.amount}~`}
                      </p>

                    </div>
                  </div>

                </article>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

TallyTable.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}
