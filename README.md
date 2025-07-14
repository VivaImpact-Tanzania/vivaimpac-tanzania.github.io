<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VivaImpact | Home</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <style>
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background: #f5f5f5;
      color: #333;
    }
    header {
      background: #0f4c5c;
      padding: 1rem 2rem;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav a {
      color: white;
      margin-left: 1.5rem;
      text-decoration: none;
      font-weight: 600;
    }
    .hero {
      background: linear-gradient(to right, #ff7f50, #1abc9c);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
    }
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .section {
      padding: 3rem 2rem;
    }
    .arms-container {
      display: flex;
      gap: 2rem;
      justify-content: center;
      margin-top: 2rem;
    }
    .arm-box {
      background: white;
      border-left: 5px solid #f39c12;
      padding: 2rem;
      flex: 1;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    .arm-box:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    .arm-box h2 {
      color: #0f4c5c;
    }
    .footer {
      background: #2c3e50;
      color: white;
      padding: 2rem;
      text-align: center;
    }
    .contact-icons i {
      font-size: 1.2rem;
      margin: 0 0.5rem;
      color: #ff7f50;
    }
    .contact-info {
      margin-top: 1rem;
      font-size: 0.95rem;
    }
    .social-icons a {
      margin: 0 0.5rem;
      color: white;
      font-size: 1.3rem;
    }
    .section-title {
      text-align: center;
      color: #0f4c5c;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <header>
    <div><strong>VivaImpact</strong></div>
    <nav>
      <a href="#">Home</a>
      <a href="#arms">Our Work</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h1>Powering Impact. Driving Change.</h1>
    <p>VivaImpact exists to empower communities through inclusive development solutions and strategic consultancy.</p>
  </section>

  <section id="arms" class="section">
    <div class="section-title">Explore Our Two Focus Areas</div>
    <div class="arms-container">
      <div class="arm-box" onclick="location.href='#ngo';">
        <h2>NGO Arm</h2>
        <p>We focus on community-based interventions in gender, youth empowerment, and access to basic services in Tanzania.</p>
      </div>
      <div class="arm-box" onclick="location.href='#consultancy';">
        <h2>Consultancy Arm</h2>
        <p>We provide strategic advisory services to nonprofits, foundations, and businesses aiming for sustainable impact.</p>
      </div>
    </div>
  </section>

  <section id="ngo" class="section" style="background:#e6f0f1">
    <div class="section-title">NGO Arm</div>
    <p>
      Our NGO branch champions access to education, water and sanitation, gender justice, and inclusive economic empowerment. We prioritize collaboration with local actors and a rights-based, non-patronizing approach.
    </p>
  </section>

  <section id="consultancy" class="section" style="background:#fef5e7">
    <div class="section-title">Consultancy Arm</div>
    <p>
      VivaImpact offers practical, research-based, and people-centered consultancy services in M&E, gender, rural development, communications, microfinance, and institutional strengthening. Our goal is to support organizations to do good—better.
    </p>
  </section>

  <section id="about" class="section">
    <div class="section-title">About VivaImpact</div>
    <p>
      Founded in Tanzania, VivaImpact is a mission-driven organization operating through two complementary arms: an NGO and a consultancy. Though our programs are yet to launch, we are building partnerships and groundwork to ensure long-term impact.
    </p>
  </section>

  <section id="contact" class="section" style="background: #eaeaea">
    <div class="section-title">Contact Us</div>
    <div class="contact-icons">
      <p><i class="fas fa-envelope"></i> contact@viva-impact.org</p>
      <p><i class="fas fa-map-marker-alt"></i> Dar es Salaam, Tanzania</p>
    </div>
    <div class="social-icons">
      <a href="https://www.instagram.com/vivaimpact_tz" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/company/107254206/admin/dashboard/" target="_blank"><i class="fab fa-linkedin"></i></a>
    </div>
    <div class="contact-info">
      © 2025 VivaImpact. All rights reserved.
    </div>
  </section>

</body>
</html>
