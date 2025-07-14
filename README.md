<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="VivaImpact - Empowering communities in Tanzania through inclusive programs and consultancy services." />
  <title>VivaImpact | Empowering Communities in Tanzania</title>
  <style>
    /* Reset and base styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  body {
      font-family: 'Open Sans', sans-serif;
      line-height: 1.6;
      color: #111;
      background-color: #fff;
      scroll-behavior: smooth;
    }

  .container {
      width: 90%;
      max-width: 1200px;
      margin: auto;
    }

   /* Navbar */
    .navbar {
      background-color: #000; /* black for strong header */
      color: white;
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 999;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    }

  .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  .logo {
      font-size: 1.8rem;
      font-weight: bold;
      color: #00bfa6; /* teal accent */
      text-decoration: none;
      letter-spacing: 2px;
    }

   .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
      align-items: center;
    }

  .nav-links li a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }

  .nav-links li a:hover,
    .nav-links li a.active {
      color: #00bfa6;
    }

  #nav-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 2rem;
      color: white;
      cursor: pointer;
    }

  /* Hero Section */
    .hero-section {
      background: url('https://via.placeholder.com/1200x500') center center/cover no-repeat;
      color: white;
      text-align: center;
      padding: 6rem 1rem 4rem 1rem;
      position: relative;
    }

  .hero-section::after {
      content: '';
      position: absolute;
      top:0; left:0; right:0; bottom:0;
      background-color: rgba(0,0,0,0.6);
      z-index: 1;
    }

   .hero-content {
      position: relative;
      z-index: 2;
      max-width: 700px;
      margin: 0 auto;
    }

  .hero-content h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      letter-spacing: 1.5px;
    }

   .hero-content p {
      font-size: 1.3rem;
      line-height: 1.5;
    }

   /* Sections */
    section.section {
      padding: 4rem 1rem;
    }

   section.dark-section {
      background-color: #000;
      color: #00bfa6;
    }

   section.dark-section ul {
      list-style: inside disc;
      margin-top: 1rem;
    }

  section ul {
      margin-top: 1rem;
      list-style: inside disc;
    }

  section ul li {
      margin-bottom: 0.7rem;
      font-size: 1.1rem;
    }

  section p {
      font-size: 1.1rem;
      max-width: 900px;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }

  /* Images in sections */
    section img {
      max-width: 100%;
      height: auto;
      margin-top: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.15);
    }

  /* Contact Section */
    .contact-section {
      background-color: #f9f9f9;
    }
    .contact-info {
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;
      margin-bottom: 3rem;
    }

   .contact-info > div {
      flex: 1 1 300px;
    }

   .contact-info h3 {
      color: #000;
      margin-bottom: 0.8rem;
      font-weight: 700;
    }

  .contact-info p a {
      color: #00bfa6;
      text-decoration: none;
    }

  .contact-info p a:hover {
      text-decoration: underline;
    }

   /* Contact form */
    form {
      max-width: 600px;
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 3px 15px rgba(0,0,0,0.1);
    }
    form label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #000;
    }
    form input[type="text"],
    form input[type="email"],
    form textarea {
      width: 100%;
      padding: 0.8rem;
      margin-bottom: 1.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

   form input[type="text"]:focus,
    form input[type="email"]:focus,
    form textarea:focus {
      border-color: #00bfa6;
      outline: none;
    }

  form textarea {
      resize: vertical;
      font-family: inherit;
    }

   form button {
      background-color: #00bfa6;
      color: white;
      border: none;
      padding: 0.85rem 2rem;
      font-size: 1.1rem;
      font-weight: 700;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

  form button:hover {
      background-color: #008f7f;
    }

  /* Footer */
    footer {
      background-color: #000;
      color: white;
      padding: 1.5rem 1rem;
      text-align: center;
      font-size: 0.9rem;
      margin-top: 4rem;
    }
    .footer-content {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
    }

   .footer-nav {
      list-style: none;
      display: flex;
      gap: 1.5rem;
    }

  .footer-nav li a {
      color: #00bfa6;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }

  .footer-nav li a:hover {
      color: #008f7f;
    }

  /* Responsive */
    @media (max-width: 768px) {
      .nav-links {
        position: absolute;
        top: 60px;
        right: 0;
        background-color: #000;
        flex-direction: column;
        width: 200px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        border-radius: 0 0 0 10px;
      }
    .nav-links.nav-open {
        transform: translateX(0);
      }
      .nav-links li {
        margin: 1.5rem 0;
        text-align: center;
      }
      #nav-toggle {
        display: block;
      }
      .footer-content {
        flex-direction: column;
        gap: 1rem;
      }
      .contact-info {
        flex-direction: column;
      }
    }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
</head>
<body>
  <header>
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="container">
        <a href="#home" class="logo">VivaImpact</a>
        <ul class="nav-links" id="nav-links">
          <li><a href="#home" class="nav-link active">Home</a></li>
          <li><a href="#ngo-arm" class="nav-link">NGO Arm</a></li>
          <li><a href="#consultancy" class="nav-link">Consultancy</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button id="nav-toggle" aria-label="Toggle navigation">&#9776;</button>
      </div>
    </nav>
  </header>

  <main>
    <section id="home" class="hero-section" aria-label="Welcome to VivaImpact">
      <div class="container hero-content">
        <h1>Welcome to VivaImpact</h1>
        <p>Empowering communities across Tanzania through inclusive programs and expert consultancy.</p>
      </div>
    </section>
    <section id="ngo-arm" class="section" aria-labelledby="ngo-arm-title">
      <div class="container">
        <h2 id="ngo-arm-title">Our NGO Arm</h2>
        <p>
          VivaImpact works to improve health, education, economic opportunities, and social equity across Tanzania.
          We prioritize women, youth, children, persons with disabilities, and the elderly through inclusive, rights-based programs.
        </p>
        <p>Our key focus areas include:</p>
        <ul>
          <li>Adolescent sexual and reproductive health</li>
          <li>Elderly care and child safeguarding</li>
          <li>Community-led climate resilience and sustainable livelihoods</li>
          <li>Promoting entrepreneurship, inclusive agriculture, and climate-smart innovations</li>
          <li>Advocating for social justice and systemic equity</li>
          <li>Building grassroots capacities for sustainable transformation</li>
        </ul>
        <img src="https://via.placeholder.com/600x350" alt="VivaImpact NGO team working with community" />
      </div>
    </section>
    <section id="consultancy" class="section dark-section" aria-labelledby="consultancy-title">
      <div class="container">
        <h2 id="consultancy-title">Our Consultancy Services</h2>
        <p>
          VivaImpact Consultancy offers expert advisory and capacity building to organizations aiming for social impact and sustainable development.
          We provide:
        </p>
        <ul>
          <li>Project design, monitoring, and evaluation</li>
          <li>Capacity building and training</li>
          <li>Research and data analysis</li>
          <li>Grant proposal development and donor engagement</li>
          <li>Gender, social inclusion, and safeguarding policy development</li>
          <li>Strategic planning and operational support</li>
        </ul>
        <p>Our consultancy draws on extensive sector expertise to help partners achieve measurable, lasting outcomes.</p>
        <img src="https://via.placeholder.com/600x350" alt="Consultancy meeting and training" />
      </div>
    </section>
    <section id="contact" class="section contact-section" aria-labelledby="contact-title">
      <div class="container">
        <h2 id="contact-title">Contact Us</h2>
        <p>We’d love to hear from you. Reach out to us through any of the following channels or send us a message directly.</p>
        <div class="contact-info">
          <div>
            <h3>Address</h3>
            <address>
              Ohio Street, Kivukoni ward, Ilala District,<br/>
              Dar es Salaam, Tanzania<br/>
              P.O. Box 12929
            </address>
          </div>
          <div>
            <h3>Social Media</h3>
            <p>
              Instagram: <a href="https://www.instagram.com/vivaimpact_tz" target="_blank" rel="noopener noreferrer">@vivaimpact_tz</a><br />
              LinkedIn: <a href="https://www.linkedin.com/company/107254206/admin/dashboard/" target="_blank" rel="noopener noreferrer">VivaImpact LinkedIn</a>
            </p>
          </div>
        </div>
        <form id="contact-form" action="https://formspree.io/f/mvovwvvr" method="POST" novalidate>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required autocomplete="name" />
          <label for="email">Email</label>
          <input type="email" id="email" name="_replyto" placeholder="Your email address" required autocomplete="email" />
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message here" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-content">
      <p>&copy; 2025 VivaImpact. All rights reserved.</p>
      <nav aria-label="Footer navigation">
        <ul class="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#ngo-arm">NGO Arm</a></li>
          <li><a href="#consultancy">Consultancy</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </footer>

  <script>
    // Responsive nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('nav-open');
    });

    // Smooth scroll & active nav link highlight
    const links = document.querySelectorAll('.nav-link');

    function setActiveLink() {
      let index = links.length;

      while (--index && window.scrollY + 60 < document.querySelector(links[index].getAttribute('href')).offsetTop) {}

      links.forEach((link) => link.classList.remove('active'));
      links[index].classList.add('active');
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    // Form submission feedback
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
      alert('Thank you for contacting VivaImpact! We will get back to you shortly.');
    });
  </script>
</body>
</html>
