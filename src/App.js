import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Demo from './Demo';
import CancerDiagnosisMessage from './CancerDiagnosisMessage';
import HandlingPregnancyMessage from './HandlingPregnancyMessage';
import AudioDiagnosisMessage from './AudioDiagnosisMessage';
import RadiographDiagnosisMessage from './RadiographDiagnosisMessage';
import BrainDiagnosisMessage from './BrainDiagnosisMessage';
import HeartDiagnosisMessage from './HeartDiagnosisMessage';

function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Demo />} />
<Route path="/cancer-diagnosis" element={<CancerDiagnosisMessage />} />
<Route path="/pregnancy-diagnosis" element={<HandlingPregnancyMessage />} />
<Route path="/audio-diagnosis" element={<AudioDiagnosisMessage />} />
<Route path="/radiograph-diagnosis" element={<RadiographDiagnosisMessage />} />
<Route path="/brain-diagnosis" element={<BrainDiagnosisMessage />} />
<Route path="/heart-diagnosis" element={<HeartDiagnosisMessage />} />
</Routes>
</Router>
);
}

export default App;
