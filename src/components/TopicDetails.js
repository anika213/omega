import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TopicDetails.css';

function TopicDetails({ topics }) {
  const { topicIndex } = useParams(); // Extract topicIndex from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically

  const topic = topics[parseInt(topicIndex, 10)]; // Use topicIndex to fetch the correct topic

  // Handle invalid topicIndex
  if (!topic) {
    return <h1 style={{ color: "white", textAlign: "center" }}>Topic not found</h1>;
  }

  return (
    <div className="topic-details-container">
      <div
        className="topic-details-card"
        style={{ boxShadow: `0 0 15px ${topic.colorCode}, 0 0 30px ${topic.colorCode}` }}
      >
        <h1 className="topic-name">{topic.name}</h1>
        <div className="topic-section">
          <h2>Formula</h2>
          <img src={topic.formulaImage} alt={`${topic.name} Formula`} className="formula-image" />
        </div>
        <div className="topic-section">
          <h2>Tip</h2>
          <p className="topic-tip">{topic.tip}</p>
        </div>
        <div className="topic-section">
          <h2>Question</h2>
          <img src={topic.question} alt={`${topic.name} Question`} className="formula-image" />
        </div>
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate('/topics')}>
          Back to Topics
        </button>
    
      </div>
   
    </div>
  );
}

export default TopicDetails;
