// src/components/FeedbackForm.js
import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted: " + feedback);
    setFeedback("");
  };

  return (
    <section className="feedback-section">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Your Feedback"
          required
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </section>
  );
};

export default FeedbackForm;
