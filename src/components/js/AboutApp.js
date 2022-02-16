import React from 'react';

export default function AboutApp() {
  return (
    <div className="about-app-container">
      <h2 className="about-app-title">About the app</h2>
      <p className="about-app-paragraph">
        In this app, you can add, delete, submit and edit items.
        To edit items, simply double click on it. Once you are done,
        press the enter key to resubmit. This app will persist your
        data in the browser local storage. So whether you reload, close
        your app or reopened it, you still have access to your to-dos items.
      </p>
    </div>
  );
}
