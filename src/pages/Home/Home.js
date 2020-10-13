/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./Home.css";
import { withApollo } from "react-apollo";
import {
  useSwatchStore,
  useSwatchDispatch,
} from "../../state/context/swatchContext";
import SwatchList from "../../components/SwatchList/SwatchList.tsx";
import Button from "../../components/Button/Button.tsx";
import { SET_SWATCHES } from "../../state/constants";
import { LOAD_SWATCHES } from "../../state/apollo/queries";

const Home = (props) => {
  const swatches = useSwatchStore();
  const dispatch = useSwatchDispatch();

  const [colors, setColors] = useState(swatches);
  const [isLoading, setIsLoading] = useState(false);

  const loadSwatches = useCallback(async () => {
    try {
      setIsLoading(true);
      const { client } = props;
      const { data } = await client.query({
        query: LOAD_SWATCHES,
        variables: { numResults: colors.length + 7 },
      });

      if (data && data.colors.length > 0) {
        dispatch({ type: SET_SWATCHES, swatches: data.colors });
        setColors(data.colors);
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Error loading swatches ", err);
      setIsLoading(false);
    }
  }, [dispatch, props, colors.length]);

  useEffect(() => {
    if (!window.localStorage.getItem("swatches")) {
      loadSwatches();
    } else {
      const swatchColors = JSON.parse(window.localStorage.getItem("swatches"));
      setColors(swatchColors);
    }
  }, [loadSwatches]);

  return (
    <div className="home-page">
      {isLoading && <p>Loading...</p>}
      <SwatchList swatches={colors} />
      <Button text="Load More" handleClick={loadSwatches} />
    </div>
  );
};

Home.propTypes = {
  client: PropTypes.shape({
    query: PropTypes.func.isRequired,
  }).isRequired,
};

export default withApollo(Home);
