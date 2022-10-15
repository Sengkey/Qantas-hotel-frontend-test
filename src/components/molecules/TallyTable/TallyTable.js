import React from "react";
import orderBy from "lodash/orderBy";
import data from "./data.json";
import style from "./TallyTable.module.scss";
import Dropdown from "../../atoms/Dropdown";
import Ratings from "../../atoms/Ratings/Ratings";

const sortPriceOptions = [
  { label: "Default", value: "" },
  { label: "Price high-low", value: "desc" },
  { label: "Price low-high", value: "asc" },
];

type Props = {};

type State = {
  sortType: String,
};

export default class TallyTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sortType: undefined,
    };
  }

  handleSelect = (e) => {
    this.setState({ sortType: sortPriceOptions[e].value });
  };

  render() {
    const { sortType } = this.state;
    
    const { results } = data;
    
    const sortedData = sortType !== undefined && sortType !== "" ? orderBy(
      results,
      ["offer.displayPrice.amount"],
      [sortType]
    ) : results;

    return (
      <div className={style.TallyTable}>
        <div className={style.Header}>
          
          <div className={style.ResultText}>
            <strong>{sortedData.length}</strong> <em>hotels in</em>{" "}
            <strong>Sydney</strong>.
          </div>
          
          <div className={style.SortBy}>
            <span>Sort by</span>{" "}
            <Dropdown
              options={sortPriceOptions}
              itemLabel={(d) => d.label}
              onSelect={(e) => this.handleSelect(e)}
              selectedIndex={sortPriceOptions
                .map((d) => d.value)
                .indexOf(sortType)}
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
                    <a href="#" target="_blank">
                      <img src={url} alt={caption} />
                    </a>
                  </div>

                  <div className={style.ContentBox}>
                    <div className={style.ContentBody}>
                      
                      <div className={style.ContentTitle}>
                        <h3>
                          <span>{title}</span>
                          {rating !== null && <Ratings value={rating.ratingValue} type={rating.ratingType} />}
                        </h3>
                        <p className={style.Address}>
                          {address[0]}, {address[1]}
                        </p>
                      </div>
                      <p className={style.RoomName}>
                        <a href="#" target="_blank">
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
