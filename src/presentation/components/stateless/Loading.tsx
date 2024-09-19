import React, { useState, CSSProperties } from "react";
import ReactDOM from 'react-dom';
import BounceLoader from "react-spinners/BounceLoader";
import { Portal } from 'react-portal';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

/**
 * It renders the loading element based on Salla theme.
 */
export default function Loading() {
    return (
        <div style={{width: '100vw', left: '0', top: '0', height: '100%', position: 'fixed', zIndex: '100000000000000000000000000000000000000000000000', background: 'rgba(186, 242, 231, 0.5)', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <div style={{position: 'absolute', bottom: '5%'}} className="loading">
                <BounceLoader
                    color={'#004956'}
                    loading={true}
                    cssOverride={override}
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    speedMultiplier={2}
                />
            </div>
        </div>
    );
}