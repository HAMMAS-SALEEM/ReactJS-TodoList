import React from 'react';
import NavLinks from './NavLinks';

export default function AboutAuthor() {
  return (
    <>
      <NavLinks />
      <div className="about-author-container">
        <h2 className="about-author-title">About the author</h2>
        <p className="about-author-paragraph">
          This app was developed by Hammas Bin Saleem,
          a self taught web developer and a technical writer. He is opened to freelance Gig.
          So go ahead and connect with ibas on Twitter @ibaslogic.
        </p>
      </div>
    </>
  );
}
