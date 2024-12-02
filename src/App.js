import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Topics} from './pages/Topics';
import {topics} from './pages/Topics';
import Landing from './pages/Landing';
import TopicDetails from './components/TopicDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topic/:topicIndex" element={<TopicDetails topics={topics} />} />
      </Routes>
    </Router>
  );
}

export default App;
