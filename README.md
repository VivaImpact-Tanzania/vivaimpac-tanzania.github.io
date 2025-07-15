<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VivaImpact | Empowering Lives. Delivering Excellence</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="stylesheet" href="/styles.css" />
  <style>
    /* Consolidated internal styles for GitHub copy-paste convenience */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      background: #f4f7f9;
      color: #333;
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    header {
      background: linear-gradient(90deg, #00796b, #f57c00);
      color: white;
      padding: 1.5rem 1rem;
      text-align: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    header img {
      max-width: 120px;
      margin-bottom: 0.5rem;
    }

    header h1, header p {
      color: #fff;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
    }

    nav {
      display: flex;
      justify-content: center;
      background: #004d40;
      padding: 0.8rem 0;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    }

    nav a {
      color: #fff;
      text-decoration: none;
      margin: 0 1.5rem;
      font-weight: 600;
      font-size: 1.1rem;
      padding: 0.3rem 0.7rem;
      border-radius: 4px;
      transition: background 0.3s ease;
    }

    nav a:hover,
    nav a.active {
      background: #f57c00;
      color: #004d40;
      box-shadow: 0 2px 6px rgba(245, 124, 0, 0.6);
    }

    .section {
      max-width: 960px;
      margin: 2rem auto;
      padding: 0 1rem;
    }

    h2 {
      color: #00796b;
      margin-bottom: 1rem;
      font-size: 2rem;
      border-bottom: 3px solid #f57c00;
      padding-bottom: 0.3rem;
    }

    h3 {
      color: #f57c00;
      margin-bottom: 0.6rem;
    }

    .arms {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }

    .arm-box {
      background: white;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
      flex: 1 1 300px;
      padding: 1.5rem;
      border-radius: 8px;
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .arm-box:hover {
      transform: translateY(-8px);
      box-shadow: 0 6px 12px rgba(245, 124, 0, 0.5);
    }

    .arm-box a {
      color: #00796b;
      font-weight: 700;
      text-decoration: none;
    }

    .arm-box a:hover {
      text-decoration: underline;
    }

    .project-section p,
    .team-member,
    .join-box p {
      background: white;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);
      color: #444;
    }

    .team-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }

    .team-member {
      flex: 1 1 280px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      font-size: 0.95rem;
      transition: background 0.3s ease;
    }

    .team-member strong {
      display: block;
      font-size: 1.15rem;
      color: #00796b;
      margin-bottom: 0.3rem;
    }

    .team-member:hover {
      background: #fbe9e7;
    }

    .join-box {
      background: #00796b;
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1.1rem;
      text-align: center;
    }

    footer {
      background: #004d40;
      color: white;
      text-align: center;
      padding: 1.5rem 1rem;
      margin-top: auto;
      font-size: 0.9rem;
      box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.1);
    }

    footer a {
      color: #f57c00;
      text-decoration: none;
      margin: 0 0.5rem;
      font-weight: 700;
    }

    footer a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 0.8rem;
      }

      .arms, .team-list {
        flex-direction: column;
      }
    }
  </style>
</head>

<body>
  <header>
    <img src="/assets/logo-placeholder.png" alt="VivaImpact Logo" />
    <h1>Welcome to VivaImpact</h1>
    <p>EMPOWERING LIVES. DELIVERING EXCELLENCE</p>
  </header>

  <nav>
    <a href="/index.html">Home</a>
    <a href="/pages/ngo-arm.html">NGO Arm</a>
    <a href="/pages/consultancy-arm.html">Consultancy Arm</a>
    <a href="/pages/careers.html">Careers</a>
  </nav>

  <main class="section">
    <section>
      <h2>About Us</h2>
      <p>VivaImpact is dedicated to advancing inclusive development through strategic programs and consultancy. We focus on real change, clear impact, and people-centered solutions.</p>
    </section>

    <section>
      <h2>Our Vision</h2>
      <p>To become a leading force in creating equitable opportunities and sustainable solutions for all.</p>
    </section>

    <section>
      <h2>Our Mission</h2>
      <p>To empower individuals and communities through evidence-based interventions, capacity building, and tailored consultancy services.</p>
    </section>

    <section class="arms">
      <div class="arm-box">
        <h3>NGO Arm</h3>
        <p>Working with communities to implement development projects that promote dignity, equity, and opportunity. <a href="/pages/ngo-arm.html">Learn more</a></p>
      </div>
      <div class="arm-box">
        <h3>Consultancy Arm</h3>
        <p>Delivering technical expertise to organizations and institutions across sectors. <a href="/pages/consultancy-arm.html">Learn more</a></p>
      </div>
    </section>

    <section class="project-section">
      <h2>Our Projects</h2>
      <p>We are preparing impactful projects in areas such as gender equality, entrepreneurship, WASH, and digital development.</p>
    </section>

    <section>
      <h2>Our Team</h2>
      <div class="team-list">
        <div class="team-member">
          <strong>Jane Doe</strong><br />Founder & Director<br />Jane has over 10 years of experience in project management and community development.
        </div>
        <div class="team-member">
          <strong>John Smith</strong><br />Programs Lead<br />Expert in rural development and M&E with a passion for grassroots impact.
        </div>
        <div class="team-member">
          <strong>Fatima Abbas</strong><br />Gender Advisor<br />Specialist in gender mainstreaming and policy advisory.
        </div>
        <div class="team-member">
          <strong>David Kimaro</strong><br />Monitoring & Evaluation Lead<br />Experienced in designing results frameworks and managing development data.
        </div>
        <div class="team-member">
          <strong>Mary Paul</strong><br />Communications & Engagement Officer<br />Specialist in outreach strategy and donor relations.
        </div>
      </div>
    </section>

    <section>
      <h2>Join Us</h2>
      <div class="join-box">
        <p>We welcome passionate professionals and volunteers to be part of our mission. Visit our <a href="/pages/careers.html" style="color: #fff; text-decoration: underline;">Careers</a> page for opportunities.</p>
      </div>
    </section>
  </main>

  <footer>
    <p><i class="fas fa-envelope icons"></i> info@viva-impact.org | <i class="fas fa-phone icons"></i> +255 123 456 789</p>
    <p>
      <a href="https://www.instagram.com/vivaimpact_tz" target="_blank"><i class="fab fa-instagram icons"></i> Instagram</a>
      &nbsp;&nbsp;
      <a href="https://www.linkedin.com/company/107254206/admin/dashboard/" target="_blank"><i class="fab fa-linkedin icons"></i> LinkedIn</a>
    </p>
  </footer>
</body>

</html>
