import React from 'react';
import './TopicCard.css';

function TopicCard({ topic, onClick }) {
  return (
    <div
      className="topic-card"
      style={{ boxShadow: `0 0 15px ${topic.colorCode}, 0 0 30px ${topic.colorCode}` }}
      onClick={onClick}
    >
      <h2 className="topic-name">{topic.name}</h2>
      <p className="topic-description">{topic.description}</p>
    </div>
  );
}

export default TopicCard;
