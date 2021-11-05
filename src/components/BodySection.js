import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
const BodySection = (props) => {


  return (
    <div>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-3 mb-5 py-3">
        <div className="container mt-5">
          <div className="row">
            {props.rates && props.rates.map((rate) => {
              return (
                <div className="col-lg-3 col-sm-6" key={rate.id}>
                  <div className="card-box">
                    <div className="inner">
                      <h3>{rate.quote_rate}</h3>
                      <p>
                        {rate.contract_name} ({rate.contract_ticker_symbol})
                      </p>
                    </div>
                    <div className="icon">
                      <i
                        className="fas fa-hand-holding-usd"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <a href="/" className="card-box-footer">
                      View More <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>


      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
        <div className="row">
          <div className="col-sm-6">
            <div>
              <Line data={props.chartData} />
            </div>
          </div>
          <div className="col-6">
            <div>
              <Bar data={props.quoteData} />
            </div>

          </div>
        </div>
      </section>

      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-2" id="tokenTable">
        <div className="row py-3">
          <h1 style={{ color: "white", textAlign: "center" }}>Top 10 DAO Token Holders</h1>
          <div className="col-sm-4 py-3">
            {props.holders && props.holders.map((holder) => {
              return (
                <div className="address-sec" key={holder.id}>
                  <div className="address-box">
                    <div className="inner">
                      <p className="address">
                        {holder.address}
                      </p>
                      <h6>
                        {holder.block_height}
                      </h6>
                    </div>
                    <div className="icon">
                      <i
                        className="fas fa-wallet"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>

              );
            })}
          </div>
          <div className="col-sm-8">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "#f2b92c" }}>tx_hash</th>
                    <th scope="col" style={{ color: "#f2b92c" }}>price</th>
                  </tr>
                </thead>
                {props.tokens && props.tokens.map((token) => {
                  return (
                    <tbody key={token.id}>
                      <tr>
                        <td>
                          <i
                            className="fas fa-address-book" style={{ color: "rgb(242, 185, 44)", margin: "10px" }}
                            aria-hidden="true"
                          ></i>
                          {token.tx_hash}</td>
                        <td>{token.gas_price}</td>
                      </tr>

                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>

      </section>

      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <Line data={props.pieData} width={300} height={150} />
      </section>

      <footer class="page-footer font-small mt-5">
        <div class="footer-copyright text-center py-3 ">
          <a href="#! ">© 2021 - AE & Team </a>
        </div>

      </footer>
    </div>
  );
};

export default BodySection;