import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import "./CryptoList.css";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // State to keep track of the current page
  const perPage = 10; // Number of cryptocurrencies to display per page

  useEffect(() => {
    setLoading(true); // Set loading to true whenever page changes
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: perPage,
          page: page, // Use dynamic page value
          sparkline: true,
          price_change_percentage: "1h,24h",
        },
      })
      .then((response) => {
        setCryptos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the cryptocurrency data:", error);
        setLoading(false);
      });
  }, [page]); // Re-run the effect when `page` changes

  // Function to handle the "Next" button click
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Function to handle the "Previous" button click
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) {
    return <p>Loading cryptocurrencies...</p>;
  }

  return (
    <div className="crypto-container" id="crypto-list">
      <h2 className="crypto-heading">LIVE PRICES</h2>
      <div className="crypto-list">
        <ul>
          {cryptos.map((crypto) => (
            <li key={crypto.id} className="crypto-item">
              <div className="crypto-name">
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="crypto-icon"
                />
                <span>
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </span>
              </div>
              <div className="crypto-details">
                <span className="crypto-price">
                  ${crypto.current_price.toLocaleString()}
                </span>
                <span
                  className={`crypto-change ${
                    crypto.price_change_percentage_1h_in_currency >= 0
                      ? "positive"
                      : "negative"
                  }`}
                >
                  1h: {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                  %
                </span>
                <span
                  className={`crypto-change ${
                    crypto.price_change_percentage_24h_in_currency >= 0
                      ? "positive"
                      : "negative"
                  }`}
                >
                  24h:{" "}
                  {crypto.price_change_percentage_24h_in_currency.toFixed(2)}%
                </span>
                <div className="crypto-sparkline">
                  <Sparklines
                    data={crypto.sparkline_in_7d.price}
                    width={100}
                    height={30}
                  >
                    <SparklinesLine color="#00d8ff" />
                  </Sparklines>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button onClick={handlePrevPage} disabled={page === 1}>
            Previous
          </button>
          <span>Page {page}</span>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CryptoList;