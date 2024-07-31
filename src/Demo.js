import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';


function FunctionOne() {
return (
<div className=" d-flex justify-content-center align-items-center ">
<Container className="container">
<Row className="mb-0">
<Col md={6}>
<Container className="card-container1">
<Card className="card">
<Card.Body>
<div style={{ display: "flex", alignItems: "center" }}>
<div>
<Card.Title className="card-title" style={{ marginBottom: "20px", color: "#9878de" }}>
<span style={{ fontSize: "30px", fontFamily: "Arial", fontWeight: "bold" }}>Cancer</span>
<br />
<span style={{ fontSize: "20px", fontFamily: "Arial", fontWeight: "bold" }}>Diagnosis</span>
</Card.Title>
<Card.Text className="card-text" style={{ textAlign: "justify" }}>
Artificial intelligence (AI), which is used to predict and automate many cancers, has emerged as a promising option for improving healthcare accuracy and patient outcomes.
</Card.Text>
<Link to="/cancer-diagnosis" 
style={{ textDecoration: 'none', color: '#9878de', fontSize: '15px', fontStyle: 'italic', fontWeight: 'bold', transition: 'color 0.3s ease', }}
onMouseEnter={(e) => e.target.style.color = '#6545a8'}
onMouseLeave={(e) => e.target.style.color = '#9878de'}>Click Here!</Link>
</div>
<div style={{ marginLeft: "50px" }}>
<img src="https://img.freepik.com/free-vector/autism-treatment-abstract-concept-vector-illustration-autism-therapy-applied-behavior-analysis-children-development-disorder-counseling-cognitive-disability-treatment-abstract-metaphor_335657-4086.jpg?t=st=1712127878~exp=1712131478~hmac=4c72d77321929c49c355baca7dca7faf7d094ee8f4295a1990a5f971305cce8d&w=740" alt="Logo" width="250" height="240" />
</div>
</div>
</Card.Body>
</Card>
</Container>
</Col>
    
<Col md={6}>
<Container className="card-container2">
<Card className="card">
<Card.Body>
<div style={{ display: "flex", alignItems: "center" }}>
<div>
<Card.Title className="card-title" style={{ marginBottom: "20px", color: "#d66da7" }}>
<span style={{ fontSize: "30px", fontFamily: "Arial", fontWeight: "bold" }}>Handling Pregnancy</span>
<br />
<span style={{ fontSize: "20px", fontFamily: "Arial", fontWeight: "bold" }}>Issues</span>
</Card.Title>
<Card.Text className="card-text" style={{ textAlign: "justify" }}>
AI has the potential to revolutionize prenatal and postnatal care by providing personalized, data-driven solutions that improve outcomes for both mothers and babies. 
</Card.Text>
<Link to="/pregnancy-diagnosis" style={{ textDecoration: 'none', color: '#d66da7', fontSize: '15px', fontStyle: 'italic', fontWeight: 'bold', transition: 'color 0.3s ease', }}
onMouseEnter={(e) => e.target.style.color = '#a73d7e'}
onMouseLeave={(e) => e.target.style.color = '#d66da7'}>Click Here!</Link>
</div>
<div style={{ marginLeft: "50px" }}>
<img src="https://img.freepik.com/premium-vector/mother-s-day-healthy-pregnancy-beautiful-pregnant-woman-hugs-her-belly_697837-442.jpg?w=740" alt="Logo" width="230" height="240" />
</div>
</div>
</Card.Body>
</Card>
</Container>
</Col>
</Row>

<Row className="mb-0">
<Col md={6}>
<Container className="card-container3">
<Card className="card">
<Card.Body>
<div style={{ display: "flex", alignItems: "center" }}>
<div>
<Card.Title className="card-title" style={{ marginBottom: "20px", color: "#5d9da7" }}>
<span style={{ fontSize: "30px", fontFamily: "Arial", fontWeight: "bold" }}>Audio</span>
<br />
<span style={{ fontSize: "20px", fontFamily: "Arial", fontWeight: "bold" }}>Diagnosis</span>
</Card.Title>
<Card.Text className="card-text" style={{ textAlign: "justify" }}>
AI to analyze various audio cues, such as heart and lung sounds, speech patterns, or fetal heartbeats, to detect abnormalities or patterns indicative of specific health issues.
</Card.Text>
<Link to="/audio-diagnosis" style={{ textDecoration: 'none', color: '#5d9da7', fontSize: '15px', fontStyle: 'italic', fontWeight: 'bold', transition: 'color 0.3s ease', }}
onMouseEnter={(e) => e.target.style.color = '#2e6b73'}
onMouseLeave={(e) => e.target.style.color = '#5d9da7'}>Click Here!</Link>
</div>
<div style={{ marginLeft: "50px" }}>
<img src="https://img.freepik.com/premium-vector/doctor-shows-patient-how-use-application-maintain-health-health-care-concept-3d-isometric_130740-21.jpg?w=900" alt="Logo" width="230" height="220" />
</div>
</div>
</Card.Body>
</Card>
</Container>
</Col>
         
<Col md={6}>
<Container className="card-container4">
<Card className="card">
<Card.Body>
<div style={{ display: "flex", alignItems: "center" }}>
<div>
<Card.Title className="card-title" style={{ marginBottom: "20px", color: "#468d61" }}>
<span style={{ fontSize: "30px", fontFamily: "Arial", fontWeight: "bold" }}>Radiograph</span>
<br />
<span style={{ fontSize: "20px", fontFamily: "Arial", fontWeight: "bold" }}>Diagnosis</span>
</Card.Title>
<Card.Text className="card-text" style={{ textAlign: "justify" }}>
AI to interpret medical images, particularly radiographs, with the goal of assisting healthcare providers in diagnosing and assessing various medical conditions.
</Card.Text>
<Link to="/radiograph-diagnosis" style={{ textDecoration: 'none', color: '#468d61', fontSize: '15px', fontStyle: 'italic', fontWeight: 'bold', transition: 'color 0.3s ease', }}
onMouseEnter={(e) => e.target.style.color = '#2e6443'}
onMouseLeave={(e) => e.target.style.color = '#468d61'}>Click Here!</Link>
</div>
<div style={{ marginLeft: "50px" }}>
<img src="https://img.freepik.com/free-vector/radiography-concept-illustration_114360-3467.jpg?t=st=1712134292~exp=1712137892~hmac=43bf8c958a68bfa20393a04db42c40b0352015268236a338bae507359c4071b9&w=740" alt="Logo" width="220" height="240" />
</div>
</div>
</Card.Body>
</Card>
</Container>
</Col>
</Row>
          
<Row className="mb-0">
<Col md={6}>
<Container className="card-container5">
<Card className="card">
<Card.Body>
<div style={{ display: "flex", alignItems: "center" }}>
<div>
<Card.Title className="card-title" style={{ marginBottom: "20px", color: "#c4915f" }}>
<span style={{ fontSize: "30px", fontFamily: "Arial", fontWeight: "bold" }}>Brain</span>
<br />
<span style={{ fontSize: "20px", fontFamily: "Arial", fontWeight: "bold" }}>Diagnosis</span>
</Card.Title>
<Card.Text className="card-text" style={{ textAlign: "justify" }}>
Brain diagnosis involves the identification and assessment of various neurological conditions and disorders affecting the brain. 
</Card.Text>
<Link to="/brain-diagnosis" style={{ textDecoration: 'none', color: '#c4915f', fontSize: '15px', fontStyle: 'italic', fontWeight: 'bold', transition: 'color 0.3s ease', }}
onMouseEnter={(e) => e.target.style.color = '#a76c39'}
onMouseLeave={(e) => e.target.style.color = '#c4915f'}>Click Here!</Link>
</div>
<div style={{ marginLeft: "50px" }}>
<img src="https://img.freepik.com/premium-vector/laboratory-scientist-group-study-human-brain-psychology-medical-research-microscope-head-tomography-chemical-experiment-diagnostics-development-hemisphere-flat-cartoon-vector-illustration_87771-6557.jpg?w=740" alt="Logo" width="250" height="240" />
</div>
</div>
</Card.Body>
</Card>
</Container>
</Col>

<Col md={6}>
<Container className="card-container6">
<Card className="card">
<Card.Body>
<div style={{ display: "flex", alignItems: "center" }}>
<div>
<Card.Title className="card-title" style={{ marginBottom: "20px", color: "#d46363" }}>
<span style={{ fontSize: "30px", fontFamily: "Arial", fontWeight: "bold" }}>Heart</span>
<br />
<span style={{ fontSize: "20px", fontFamily: "Arial", fontWeight: "bold" }}>Diagnosis</span>
</Card.Title>
<Card.Text className="card-text" style={{ textAlign: "justify" }}>
Heart diagnosis involves the identification and assessment of various cardiovascular conditions and disorders affecting the heart. 
</Card.Text>
<Link to="/heart-diagnosis" style={{ textDecoration: 'none', color: '#d46363', fontSize: '15px', fontStyle: 'italic', fontWeight: 'bold', transition: 'color 0.3s ease', }}
 onMouseEnter={(e) => e.target.style.color = '#a63232'}
 onMouseLeave={(e) => e.target.style.color = '#d46363'}>Click Here!</Link>
</div>
<div style={{ marginLeft: "50px" }}>
<img src="https://img.freepik.com/premium-vector/cardiology-cardiologist-examine-human-heart-doctor-treat-heart-disease-check-patient-heartbeat-pulse-cardiogram-diagnosis-stroke-medical-examination-cardiovascular-pressure_458444-526.jpg?w=900" alt="Logo" width="240" height="240" />
</div>
</div>
</Card.Body>
</Card>
</Container>
</Col>
</Row>
</Container>
</div>
);
}
    
export default FunctionOne;