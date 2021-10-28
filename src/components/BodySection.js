import React, { useEffect } from "react";
// import { Link} from "react-router-dom";
// import PropTypes from "prop-types";
// import { useHistory } from "react-router";
const BodySection = (props) => {
  // const history = useHistory();
  // history.go(0)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-3">
        <div className="container">
          <div className="row">
            {props.rates.map((rate) => {
              return (
                <div className="col-lg-3 col-sm-6">
                  <div className="card-box">
                    <div className="inner">
                      <h3>{rate.quote_rate}</h3>
                      <p>{rate.contract_name} ({rate.contract_ticker_symbol})</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-hand-holding-usd" aria-hidden="true"></i>
                    </div>
                    <a href="/" className="card-box-footer">
                      View More <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}

            {/* <div className="col-lg-3 col-sm-6">
              <div className="card-box bg-green">
                <div className="inner">
                  <h3> ₹185358 </h3>
                  <p> Today’s Collection </p>
                </div>
                <div className="icon">
                  <i className="fa fa-money" aria-hidden="true"></i>
                </div>
                <a href="/" className="card-box-footer">
                  View More <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-sm-6">
              <div className="card-box bg-orange">
                <div className="inner">
                  <h3> 5464 </h3>
                  <p> New Admissions </p>
                </div>
                <div className="icon">
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                </div>
                <a href="/" className="card-box-footer">
                  View More <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-sm-6 boxes">
              <div className="card-box bg-red">
                <div className="inner">
                  <h3> 723 </h3>
                  <p> Faculty Strength </p>
                </div>
                <div className="icon">
                  <i className="fa fa-users"></i>
                </div>
                <a href="/" className="card-box-footer">
                  View More <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="tokenTable">
        <div className="my-4 w-100" id="myChart"></div>
        <h2>Top 10 Covalent Token Holders</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm table-hover">
            <thead>
              <tr>
                <th scope="col">Address</th>
                <th scope="col">Ticker Symbol</th>
                <th scope="col">Balance</th>
                <th scope="col">Total Supply</th>
              </tr>
            </thead>
            {props.holders.map((holder) => {
              return (
                <tbody>
                  <tr>
                    <td>{holder.address}</td>
                    <td>{holder.contract_ticker_symbol}</td>
                    <td>{holder.balance}</td>
                    <td>{holder.total_supply}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </section>
    </div>
  );
};

// BodySection.propTypes = {
//   image: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   rate: PropTypes.number,
//   price: PropTypes.number,
// };

// BodySection.defaultProps = {
//   image: "",
//   title: "Product Name",
//   description: "This is the description",
//   rate: 3.5,
//   price: 22,
// };

export default BodySection;
