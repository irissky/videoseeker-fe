import React from 'react';


function Footer() {
    return (
      <small>
        <hr />
        <p className="text-center">
          Full source code available at this
          {' '}
          <a href="https://github.com/syuan00/my-app">
            CS5224 VideoSeeker
          </a>
        </p>
      </small>
    );
  }

export default function Page() {
  return (
    <div>
      <Footer />
    </div>
  );
}