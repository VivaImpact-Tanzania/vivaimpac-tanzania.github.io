<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VivaImpact</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    body {
      background: linear-gradient(to right, #f9f9f9, #f2f2f2);
      color: #222;
    }

    header {
      background-color: #000;
      padding: 20px;
      color: #fff;
      text-align: center;
    }

    nav {
      background-color: #222;
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 10px 0;
    }

    nav a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
    }

    .hero {
      background-color: #004d4d;
      color: #fff;
      padding: 60px 20px;
      text-align: center;
    }

    .section {
      padding: 40px 20px;
      background-color: #fff;
      border-bottom: 2px solid #eee;
    }

    .section.dark {
      background-color: #111;
      color: #f1f1f1;
    }

    .highlight {
      color: #ff6600;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    footer {
      background-color: #000;
      color: #fff;
      padding: 20px;
      text-align: center;
    }

    .social-icons a {
      color: #fff;
      margin: 0 10px;
      text-decoration: none;
    }

    .image-placeholder {
      width: 100%;
      height: 200px;
      background-color: #ccc;
    }
  </style>
</head>

<body>
  <header>
    <h1>VivaImpact</h1>
    <p>Empowering Progress. Driving Change.</p>
  </header>

  <nav>
    <a href="#home">Home</a>
    <a href="#ngo">NGO Arm</a>
    <a href="#consultancy">Consultancy Arm</a>
    <a href="#contact">Contact</a>
  </nav>

  <section class="hero" id="home">
    <h2>Welcome to VivaImpact</h2>
    <p>We are a purpose-driven organization building impactful solutions through partnerships, research and hands-on action in Tanzania.</p>
  </section>

  <section class="section">
    <h2>General Overview</h2>
    <p>VivaImpact works to address critical social and development challenges through two pillars: our NGO arm, which runs transformative community programs, and our consultancy arm, which supports organizations, donors, and governments to deliver stronger results across sectors.</p>
  </section>

  <section class="section dark" id="ngo">
    <h2>NGO Arm</h2>
    <p>Our NGO work is centered on empowering underserved communities in Tanzania, especially women and youth. We design and implement programs that improve access to health, education, livelihoods, and dignity.</p>

    <div class="grid">
      <div>
        <div class="image-placeholder"></div>
        <h3>Our Approach</h3>
        <p>Locally driven, data-informed and partnership-based. We co-create solutions with communities, not for them.</p>
      </div>
      <div>
        <div class="image-placeholder"></div>
        <h3>Our Values</h3>
        <p>Integrity, dignity, equity, collaboration, and accountability shape everything we do.</p>
      </div>
    </div>
  </section>

  <section class="section" id="consultancy">
    <h2>Consultancy Arm</h2>
    <p>Through VivaImpact Consultancy, we help development actors work smarter. Our team brings deep expertise in gender, youth, rural development, M&E, communications and more to help partners deliver practical, people-focused results.</p>

    <div class="grid">
      <div>
        <div class="image-placeholder"></div>
        <h3>Services</h3>
        <p>We offer program design, evaluations, strategic planning, training, facilitation and research tailored to your needs.</p>
      </div>
      <div>
        <div class="image-placeholder"></div>
        <h3>Who We Work With</h3>
        <p>International and local NGOs, foundations, donors, community-based groups and social enterprises across Tanzania and the region.</p>
      </div>
    </div>
  </section>

  <section class="section dark" id="contact">
    <h2>Contact Us</h2>
    <p>Email: hello@viva-impact.org</p>
    <p>Instagram: <a href="https://www.instagram.com/vivaimpact_tz" style="color: #ff6600;">@vivaimpact_tz</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/company/107254206" style="color: #ff6600;">VivaImpact</a></p>
  </section>

  <footer>
    <p>&copy; 2025 VivaImpact. All rights reserved.</p>
    <div class="social-icons">
      <a href="https://www.instagram.com/vivaimpact_tz" target="_blank">Instagram</a>
      <a href="https://www.linkedin.com/company/107254206" target="_blank">LinkedIn</a>
    </div>
  </footer>
</body>

</html>
