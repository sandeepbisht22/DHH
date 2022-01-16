import React from "react";

const PersonalLinks = ({ size }) => {
  return (
    <div>
      <section className="mb-4 text-center">
        <a
          className="btn btn-outline-light m-1"
          href="https://www.facebook.com/sandeep.bisht.9212301/"
          target="_blank"
          role="button"
          rel="noreferrer noopener"
        >
          <i className={`fab fa-facebook-square fa-${size}x`}></i>
        </a>

        <a
          className="btn btn-outline-light m-1"
          href="https://twitter.com/Engg_hu_mai"
          role="button"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className={`fab fa-twitter-square fa-${size}x`}></i>
        </a>

        <a
          className="btn btn-outline-light m-1"
          href="https://www.instagram.com/sandeep0_obisht/"
          role="button"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className={`fab fa-instagram-square fa-${size}x`}></i>
        </a>

        <a
          className="btn btn-outline-light m-1"
          href="https://www.linkedin.com/in/sandeep-bisht-114429141/"
          role="button"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className={`fab fa-linkedin fa-${size}x`}></i>
        </a>

        <a
          className="btn btn-outline-light m-1"
          href="https://github.com/sandeepbisht22"
          role="button"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className={`fab fa-github-square fa-${size}x`}></i>
        </a>
      </section>
    </div>
  );
};

export default PersonalLinks;
