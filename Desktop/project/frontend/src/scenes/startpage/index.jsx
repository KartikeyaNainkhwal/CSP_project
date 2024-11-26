import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "../../index.css"
// Navbar Component




import ashish from '../../assets/ashish.png';
import k from '../../assets/kartikeya.png';
import ab from '../../assets/ab2.png';
import './AboutUs.css'; 

const teamMembers = [
  { name: 'Ashish Ranjan', position: 'Frontend & Functionalities', image: ashish },
  { name: 'Kartikeya', position: 'Backend', image: k },
  { name: 'Arpit Bhomia', position: 'Frontend & Functionalities', image: ab }
];

const values = [
  'Innovation',
  'Integrity',
  'Customer First',
  'Quality',
];

function AboutUs() {
  return (
    <div className="about-us-container">
      <Container className="my-5">
        <Row className="hero-section text-center mb-5">
          <Col>
            <h1 className="display-4 hero-title">Welcome to Our Social Project</h1>
            <p className="lead hero-subtitle">
              We implemented a mini Social Platform to connect with friends
            </p>
            <div className="hero-divider"></div>
          </Col>
        </Row>

        <Row className="background-section mb-5">
          <Col>
            <h2 className="section-title">Our Vision</h2>
            <p className="section-description">
              It comes packed with a range of useful features, like securely hashing passwords, handling JWT authentication, and even sending emails to the creator. It's a simple yet powerful backend solution that covers all the essentials
            </p>
          </Col>
        </Row>

        <Row className="team-section mb-5 text-center">
          <Col>
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">The brilliant minds behind our project</p>
          </Col>
        </Row>
        
        <Row className="team-members justify-content-center">
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="team-member-card">
                <div className="member-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="member-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="member-details">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

       
      </Container>
    </div>
  );
}








function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Sociallytic</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/faqs">FAQs</Link>
            <Link className="nav-link" to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// FrontPage Component
function FrontPage() {
  return (
    <div className="frontpage">
      <Navbar />
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">Sociallytic</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            "Welcome to Sociallytic, your go-to platform for insightful articles, inspiring stories, and valuable resources across a range of topics. At Sociallytic, we aim to engage, inform, and inspire through content that sparks ideas and fosters connections. Join us on this journey to explore, learn, and grow together!"
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link to="/login" className="btn btn-primary btn-lg px-4 me-sm-3">
              User Access
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Features</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {[
            { title: "Diverse Topics", description: "Explore a wide range of topics that inform and inspire." },
            { title: "User-Friendly Design", description: "Navigate effortlessly with our clean and intuitive layout." },
            { title: "Community Engagement", description: "Share, comment, and connect with like-minded readers." },
            { title: "Regular Updates", description: "Stay updated with fresh content published regularly." },
            { title: "Responsive Design", description: "Enjoy a seamless experience on any device, anytime." },
            { title: "Personalized Content", description: "Receive recommendations based on your interests." },
          ].map((feature, index) => (
            <div className="col d-flex align-items-start" key={index}>
              <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="py-3 mt-4 bg-dark text-light">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to="a/about-us" className="nav-link px-2 text-light">About</Link></li>
          <li className="nav-item"><Link to="a/contact-us" className="nav-link px-2 text-light">Contact Us</Link></li>
          <li className="nav-item"><Link to="a/faqs" className="nav-link px-2 text-light">FAQs</Link></li>
        </ul>
        <p className="text-center text-light">© 2024 LazyKings, Inc</p>
      </footer>
    </div>
  );
}

// FAQs Component
function FAQs() {
  return (
    <div>
      <Navbar />
      <div className="container py-5" style={{ color: '#333', backgroundColor: '#f8f9fa' }}>
        <h1 className="text-center mb-4" style={{ color: '#222' }}>Frequently Asked Questions</h1>
        <div className="accordion accordion-flush" id="faqsAccordion">
          {[
            { question: 'What topics are covered on Sociallytic?', answer: 'Sociallytic covers a wide range of topics.' },
            { question: 'How often is new content published?', answer: 'We strive to publish fresh content regularly.' },
          ].map((faq, index) => (
            <div className="accordion-item border-2" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button className="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faqsAccordion">
                <div className="accordion-body" style={{ backgroundColor: '#e9ecef' }}>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ContactUs Component
function ContactUs() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/warranty/setup/contactus', formData);
      setFormData({ name: '', email: '', message: '' });
      alert('Message has been sent successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container my-5 d-flex justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg border-1 rounded-lg">
            <div className="card-header text-center bg-dark text-light">
              <h2>Contact Us</h2>
              <p className="mb-0">We're here to help you!</p>
            </div>
            <div className="card-body p-5 bg-light">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// App Component
export default function StartPage() {
  return (
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="a/faqs" element={<FAQs />} />
        <Route path="a/contact-us" element={<ContactUs />} />
        <Route path="a/about-us" element={<AboutUs></AboutUs>}></Route>
      </Routes>
  );
}
