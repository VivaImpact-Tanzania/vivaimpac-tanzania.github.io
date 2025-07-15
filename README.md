<!DOCTYPE html>
<html lang="en">

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: #f4f7f9; /* light grey */
  color: #333;
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header {
  background: linear-gradient(90deg, #00796b, #f57c00);
  color: white;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

header img {
  max-width: 120px;
  margin-bottom: 0.5rem;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
}

header p {
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1.1rem;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

/* Navigation */
nav {
  display: flex;
  justify-content: center;
  background: #004d40;
  padding: 0.8rem 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
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
  box-shadow: 0 2px 6px rgba(245,124,0,0.6);
}

/* Main content */
.section {
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
}

/* Sections */
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

/* Arms Section */
.arms {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.arm-box {
  background: white;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  flex: 1 1 300px;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.arm-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 12px rgba(245,124,0,0.5);
}

.arm-box a {
  color: #00796b;
  font-weight: 700;
  text-decoration: none;
}

.arm-box a:hover {
  text-decoration: underline;
}

/* Projects, Team, Join Us */
.project-section p,
.team-list .team-member,
.join-box p {
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.07);
  color: #444;
}

/* Team Members */
.team-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.team-member {
  flex: 1 1 280px;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  color: #333;
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

/* Join Box */
.join-box {
  background: #00796b;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
}

/* Footer */
footer {
  background: #004d40;
  color: white;
  text-align: center;
  padding: 1.5rem 1rem;
  margin-top: auto;
  font-size: 0.9rem;
  box-shadow: 0 -3px 8px rgba(0,0,0,0.1);
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

/* Icons in footer */
.icons {
  margin-right: 0.4rem;
}

/* Job Listings */
.job-listing {
  background: white;
  padding: 1rem 1.5rem;
  margin-bottom: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: background 0.3s ease;
}

.job-listing:hover {
  background: #e0f2f1;
}

/* Slideshow Placeholder */
.slideshow-placeholder {
  background: #00796b;
  color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  font-style: italic;
  margin-top: 2rem;
  box-shadow: 0 5px 15px rgba(0,121,107,0.4);
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 0.8rem;
  }

  .arms {
    flex-direction: column;
  }

  .team-list {
    flex-direction: column;
  }
}



<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VivaImpact | Empowering Lives. Delivering Excellence</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="stylesheet" href="/styles.css" />
</head>

<body>
  <header>
    <img src="/assets/logo-placeholder.png" alt="VivaImpact Logo" />
    <h1 style="color: white;">Welcome to VivaImpact</h1>
    <p style="color: white;">EMPOWERING LIVES. DELIVERING EXCELLENCE</p>
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
        <p>We welcome passionate professionals and volunteers to be part of our mission. Visit our <a href="/pages/careers.html">Careers</a> page for opportunities.</p>
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
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VivaImpact | NGO Arm</title>
  <link rel="stylesheet" href="../styles.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</head>

<body>
  <header>
    <img src="../assets/logo-placeholder.png" alt="VivaImpact Logo" />
    <h1>NGO Arm</h1>
    <p>EMPOWERING LIVES. DELIVERING EXCELLENCE</p>
  </header>

  <nav>
    <a href="../index.html">Home</a>
    <a href="ngo-arm.html" class="active">NGO Arm</a>
    <a href="consultancy-arm.html">Consultancy Arm</a>
    <a href="careers.html">Careers</a>
  </nav>

  <main class="section">
    <section>
      <h2>Mission</h2>
      <p>To promote sustainable community development by empowering individuals with dignity, equity, and opportunity.</p>
    </section>

    <section>
      <h2>Vision</h2>
      <p>To build thriving communities where everyone has access to resources and can participate fully in social and economic life.</p>
    </section>

    <section>
      <h2>Key Projects</h2>
      <ul>
        <li><strong>Gender Equality Initiatives:</strong> Promoting women’s leadership and economic empowerment.</li>
        <li><strong>Entrepreneurship Programs:</strong> Training and resources to support small businesses.</li>
        <li><strong>WASH (Water, Sanitation, Hygiene):</strong> Improving access to clean water and sanitation facilities.</li>
        <li><strong>Digital Development:</strong> Enhancing digital literacy and access for underserved communities.</li>
      </ul>
    </section>

    <section>
      <h2>Success Stories</h2>
      <p>Through our programs, many beneficiaries have launched successful businesses, improved family health, and gained new skills to sustain their livelihoods.</p>
      <p><em>“VivaImpact helped me start my tailoring business, and now I support my family fully.” – Amina, beneficiary</em></p>
    </section>

    <section>
      <h2>Donors and Partners</h2>
      <div class="partners">
        <img src="../assets/partner1-placeholder.png" alt="Partner 1" />
        <img src="../assets/partner2-placeholder.png" alt="Partner 2" />
        <img src="../assets/partner3-placeholder.png" alt="Partner 3" />
      </div>
      <p>We collaborate with local and international organizations committed to development and social justice.</p>
    </section>

    <section>
      <h2>Our Team</h2>
      <div class="team-list">
        <div class="team-member">
          <img src="../assets/team1-placeholder.png" alt="Jane Doe" />
          <strong>Jane Doe</strong><br />
          Founder & Director<br />
          Jane has over 10 years of experience leading community development programs.
        </div>
        <div class="team-member">
          <img src="../assets/team2-placeholder.png" alt="John Smith" />
          <strong>John Smith</strong><br />
          Programs Lead<br />
          Expert in rural development and monitoring & evaluation.
        </div>
        <div class="team-member">
          <img src="../assets/team3-placeholder.png" alt="Fatima Abbas" />
          <strong>Fatima Abbas</strong><br />
          Gender Advisor<br />
          Specialist in gender equality and policy advisory.
        </div>
      </div>
    </section>

    <section>
      <h2>Gallery</h2>
      <div class="slideshow-placeholder">
        <!-- Image slideshow placeholder for NGO projects -->
        <p>Image slideshow will appear here</p>
      </div>
    </section>
  </main>

  <footer>
    <p>Contact us: <i class="fas fa-envelope icons"></i> info@viva-impact.org | <i class="fas fa-phone icons"></i> +255 123 456 789</p>
    <p>
      <a href="https://www.instagram.com/vivaimpact_tz" target="_blank"><i class="fab fa-instagram icons"></i> Instagram</a>
      &nbsp;&nbsp;
      <a href="https://www.linkedin.com/company/107254206/admin/dashboard/" target="_blank"><i class="fab fa-linkedin icons"></i> LinkedIn</a>
    </p>
  </footer>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VivaImpact | Consultancy Arm</title>
  <link rel="stylesheet" href="../styles.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</head>

<body>
  <header>
    <img src="../assets/logo-placeholder.png" alt="VivaImpact Logo" />
    <h1>Consultancy Arm</h1>
    <p>EMPOWERING LIVES. DELIVERING EXCELLENCE</p>
  </header>

  <nav>
    <a href="../index.html">Home</a>
    <a href="ngo-arm.html">NGO Arm</a>
    <a href="consultancy-arm.html" class="active">Consultancy Arm</a>
    <a href="careers.html">Careers</a>
  </nav>

  <main class="section">
    <section>
      <h2>Mission</h2>
      <p>To provide expert consultancy that supports organizations in delivering impactful, sustainable solutions across sectors.</p>
    </section>

    <section>
      <h2>Vision</h2>
      <p>To be recognized as a trusted partner for innovative and effective consultancy services driving positive change.</p>
    </section>

    <section>
      <h2>Areas of Expertise</h2>
      <ul>
        <li>Project Design and Management</li>
        <li>Monitoring and Evaluation</li>
        <li>Gender Mainstreaming and Social Inclusion</li>
        <li>Rural Development Strategies</li>
        <li>Microfinance and Economic Empowerment</li>
        <li>Communications and Donor Engagement</li>
      </ul>
    </section>

    <section>
      <h2>Success Stories</h2>
      <p>We have supported NGOs and government agencies to improve program quality, meet donor requirements, and increase community impact.</p>
      <p><em>“VivaImpact’s consultancy helped us refine our M&E system and strengthen our funding proposals.” – Client Organization</em></p>
    </section>

    <section>
      <h2>Clients and Partners</h2>
      <div class="partners">
        <img src="../assets/client1-placeholder.png" alt="Client 1" />
        <img src="../assets/client2-placeholder.png" alt="Client 2" />
        <img src="../assets/client3-placeholder.png" alt="Client 3" />
      </div>
      <p>Our clients range from local NGOs to international agencies, committed to social development and innovation.</p>
    </section>

    <section>
      <h2>Our Team</h2>
      <div class="team-list">
        <div class="team-member">
          <img src="../assets/team1-placeholder.png" alt="Jane Doe" />
          <strong>Jane Doe</strong><br />
          Founder & Director<br />
          Extensive experience in project design and development consultancy.
        </div>
        <div class="team-member">
          <img src="../assets/team4-placeholder.png" alt="Mark Wilson" />
          <strong>Mark Wilson</strong><br />
          Senior Consultant<br />
          Specialist in M&E and impact assessment.
        </div>
        <div class="team-member">
          <img src="../assets/team5-placeholder.png" alt="Sophia Kim" />
          <strong>Sophia Kim</strong><br />
          Gender and Social Inclusion Expert<br />
          Provides advisory services on gender mainstreaming.
        </div>
      </div>
    </section>

    <section>
      <h2>Gallery</h2>
      <div class="slideshow-placeholder">
        <!-- Image slideshow placeholder for consultancy projects -->
        <p>Image slideshow will appear here</p>
      </div>
    </section>
  </main>

  <footer>
    <p>Contact us: <i class="fas fa-envelope icons"></i> info@viva-impact.org | <i class="fas fa-phone icons"></i> +255 123 456 789</p>
    <p>
      <a href="https://www.instagram.com/vivaimpact_tz" target="_blank"><i class="fab fa-instagram icons"></i> Instagram</a>
      &nbsp;&nbsp;
      <a href="https://www.linkedin.com/company/107254206/admin/dashboard/" target="_blank"><i class="fab fa-linkedin icons"></i> LinkedIn</a>
    </p>
  </footer>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VivaImpact | Careers</title>
  <link rel="stylesheet" href="../styles.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</head>

<body>
  <header>
    <img src="../assets/logo-placeholder.png" alt="VivaImpact Logo" />
    <h1>Careers</h1>
    <p>EMPOWERING LIVES. DELIVERING EXCELLENCE</p>
  </header>

  <nav>
    <a href="../index.html">Home</a>
    <a href="ngo-arm.html">NGO Arm</a>
    <a href="consultancy-arm.html">Consultancy Arm</a>
    <a href="careers.html" class="active">Careers</a>
  </nav>

  <main class="section">
    <section>
      <h2>Join Us</h2>
      <p>
        At VivaImpact, we value passion, dedication, and a drive to make a difference. Our culture is collaborative, inclusive, and focused on delivering impact. Whether you are seeking a career or volunteer opportunity, you will find a welcoming place here.
      </p>
    </section>

    <section>
      <h2>Current Job Openings</h2>
      <div class="job-listing">
        <h3>Project Coordinator</h3>
        <p>Lead and oversee project implementation across various sectors. Requires strong organizational skills and experience in development projects.</p>
        <p><strong>Deadline:</strong> August 31, 2025</p>
        <p><strong>How to Apply:</strong> Send your CV and cover letter to <a href="mailto:careers@viva-impact.org">careers@viva-impact.org</a></p>
      </div>

      <div class="job-listing">
        <h3>Monitoring and Evaluation Officer</h3>
        <p>Support program monitoring, data collection, and reporting. Experience with M&E frameworks preferred.</p>
        <p><strong>Deadline:</strong> September 15, 2025</p>
        <p><strong>How to Apply:</strong> Email your CV and a brief statement of interest to <a href="mailto:careers@viva-impact.org">careers@viva-impact.org</a></p>
      </div>
    </section>

    <section>
      <h2>Volunteer Opportunities</h2>
      <p>We welcome volunteers interested in community engagement, research, communications, and more. Contact us to explore current opportunities.</p>
    </section>

    <section>
      <h2>How to Apply</h2>
      <p>
        Please send all applications by email with the job title in the subject line. Include your CV and a cover letter detailing your relevant experience and motivation to join VivaImpact.
      </p>
    </section>

    <section class="slideshow-placeholder">
      <h2>Team at Work</h2>
      <p>Image slideshow placeholder showing our vibrant team and workplace.</p>
    </section>
  </main>

  <footer>
    <p>Contact us: <i class="fas fa-envelope icons"></i> info@viva-impact.org | <i class="fas fa-phone icons"></i> +255 123 456 789</p>
    <p>
      <a href="https://www.instagram.com/vivaimpact_tz" target="_blank"><i class="fab fa-instagram icons"></i> Instagram</a>
      &nbsp;&nbsp;
      <a href="https://www.linkedin.com/company/107254206/admin/dashboard/" target="_blank"><i class="fab fa-linkedin icons"></i> LinkedIn</a>
    </p>
  </footer>
</body>

</html>
