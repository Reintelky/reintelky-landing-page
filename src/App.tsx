export default function App() {
  const features = [
    ["🔎", "Commissioner Sale Search", "Upcoming and past sale records by county, date, property, appraisal, and source link."],
    ["🏠", "Public Property Data", "Parcel details, tax assessment, ownership history, property characteristics, and source records."],
    ["📄", "Title Transfer Activity", "Track deed transfers, LLC buyers, commissioner deeds, and off-market transactions."],
    ["📊", "Market Trends", "DOM, resale volume, price trends, auction discounts, buyer activity, and distress signals."],
    ["🔔", "Watchlists & Alerts", "Save properties, counties, ZIP codes, or investor activity and get notified when records update."],
    ["✅", "Verified Source Links", "Every record connects back to original county, court, clerk, or public data sources where available."],
  ];

  const customers = [
    "Real estate investors",
    "Wholesalers",
    "Investor-friendly agents",
    "Hard money lenders",
    "Title companies",
    "Asset managers",
  ];

  return (
    <div className="page">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Inter, Arial, sans-serif; background: #020617; color: white; }
        .page { min-height: 100vh; background: #020617; color: white; }
        .container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .header { border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(2,6,23,0.9); }
        .header-inner { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; max-width: 1180px; margin: 0 auto; }
        .brand { display: flex; align-items: center; gap: 12px; }
        .logo { width: 42px; height: 42px; border-radius: 14px; background: white; color: #020617; display: flex; align-items: center; justify-content: center; font-weight: 800; }
        .brand-title { font-size: 22px; font-weight: 700; }
        .brand-subtitle { font-size: 12px; color: #94a3b8; margin-top: 2px; }
        .nav { display: flex; gap: 28px; align-items: center; }
        .nav a { color: #cbd5e1; text-decoration: none; font-size: 14px; }
        .nav a:hover { color: white; }
        .button { border: 0; border-radius: 14px; padding: 13px 18px; background: white; color: #020617; font-weight: 700; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; }
        .button.secondary { background: transparent; color: white; border: 1px solid rgba(255,255,255,0.18); }
        .hero { position: relative; overflow: hidden; padding: 90px 0; }
        .hero::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at top right, rgba(59,130,246,0.25), transparent 35%), radial-gradient(circle at bottom left, rgba(16,185,129,0.16), transparent 30%); }
        .hero-grid { position: relative; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
        .pill { display: inline-flex; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.06); color: #cbd5e1; border-radius: 999px; padding: 9px 14px; font-size: 14px; margin-bottom: 24px; }
        h1 { font-size: 60px; line-height: 1.02; letter-spacing: -0.05em; margin: 0; max-width: 760px; }
        .hero p { color: #cbd5e1; font-size: 19px; line-height: 1.7; margin: 24px 0 0; max-width: 660px; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }
        .small-note { color: #94a3b8 !important; font-size: 14px !important; margin-top: 16px !important; }
        .dashboard-card { border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.09); border-radius: 28px; padding: 24px; box-shadow: 0 30px 80px rgba(0,0,0,0.35); backdrop-filter: blur(10px); }
        .dash-top { display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; margin-bottom: 20px; }
        .dash-label { font-size: 14px; color: #cbd5e1; }
        .dash-title { font-size: 26px; font-weight: 800; margin-top: 4px; }
        .badge { background: rgba(52,211,153,0.15); color: #bbf7d0; border-radius: 999px; padding: 8px 12px; font-size: 14px; white-space: nowrap; }
        .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .stat { background: rgba(15,23,42,0.85); border-radius: 18px; padding: 16px; }
        .stat-label { color: #94a3b8; font-size: 12px; }
        .stat-value { font-size: 32px; font-weight: 800; margin-top: 8px; }
        .property-list { display: grid; gap: 12px; margin-top: 20px; }
        .property-row { background: rgba(15,23,42,0.75); border-radius: 18px; padding: 16px; display: flex; justify-content: space-between; gap: 16px; align-items: center; }
        .property-name { font-weight: 700; }
        .property-detail, .property-sale { color: #94a3b8; font-size: 14px; }
        .split-section { border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(15,23,42,0.45); padding: 80px 0; }
        .split-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
        .dark-card { border: 1px solid rgba(255,255,255,0.1); background: #020617; border-radius: 28px; padding: 32px; }
        h2 { font-size: 42px; line-height: 1.1; letter-spacing: -0.03em; margin: 0; }
        .dark-card h2 { font-size: 32px; }
        .dark-card p, .section-subtitle { color: #cbd5e1; line-height: 1.7; font-size: 17px; }
        .features { padding: 90px 0; }
        .features-grid { margin-top: 42px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .feature-card { border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); border-radius: 26px; padding: 24px; }
        .icon { font-size: 28px; }
        .feature-card h3 { margin: 18px 0 10px; font-size: 21px; }
        .feature-card p { color: #94a3b8; line-height: 1.65; margin: 0; }
        .customers-section { background: white; color: #020617; padding: 90px 0; }
        .customers-section p { color: #475569; font-size: 18px; line-height: 1.7; }
        .customers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 36px; }
        .customer-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 18px; padding: 20px; font-weight: 700; }
        .early-access { padding: 90px 0; text-align: center; }
        .access-card { max-width: 820px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); border-radius: 30px; padding: 42px; }
        .access-card p { color: #cbd5e1; line-height: 1.7; font-size: 18px; max-width: 650px; margin: 18px auto 0; }
        .form-row { display: flex; gap: 12px; max-width: 580px; margin: 32px auto 0; }
        input { flex: 1; min-height: 52px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12); background: #0f172a; color: white; padding: 0 16px; font-size: 16px; outline: none; }
        .footer { border-top: 1px solid rgba(255,255,255,0.1); color: #64748b; font-size: 14px; text-align: center; padding: 30px 20px; }
        @media (max-width: 900px) {
          .nav { display: none; }
          .hero-grid, .split-grid, .features-grid, .customers-grid { grid-template-columns: 1fr; }
          h1 { font-size: 44px; }
          h2 { font-size: 34px; }
          .stats { grid-template-columns: 1fr; }
          .form-row { flex-direction: column; }
        }
      `}</style>

      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="logo">RI</div>
            <div>
              <div className="brand-title">ReIntelKY</div>
              <div className="brand-subtitle">Real Estate Intelligence for Kentucky</div>
            </div>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#customers">Who It’s For</a>
            <a href="#early-access">Early Access</a>
            <a href="#early-access" className="button">Request Access</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="pill">Kentucky MVP launching soon</div>
            <h1>Find distressed real estate opportunities before the market catches up.</h1>
            <p>
              ReIntelKY centralizes Kentucky master commissioner sales, public property records, title transfer activity, and local market trends into one searchable investor dashboard.
            </p>
            <div className="hero-actions">
              <a className="button" href="#early-access">Join the Early Access List →</a>
              <a className="button secondary" href="#features">View Sample Dashboard</a>
            </div>
            <p className="small-note">Built for investors, agents, lenders, wholesalers, title companies, and asset managers.</p>
          </div>

          <div className="dashboard-card">
            <div className="dash-top">
              <div>
                <div className="dash-label">Sample Market Dashboard</div>
                <div className="dash-title">Madison County, KY</div>
              </div>
              <div className="badge">18 New Records</div>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-label">Upcoming Sales</div>
                <div className="stat-value">12</div>
              </div>
              <div className="stat">
                <div className="stat-label">Avg. Discount</div>
                <div className="stat-value">24%</div>
              </div>
              <div className="stat">
                <div className="stat-label">DOM Trend</div>
                <div className="stat-value">+9%</div>
              </div>
            </div>
            <div className="property-list">
              <div className="property-row"><div><div className="property-name">111 Sample St</div><div className="property-detail">$142k appraisal</div></div><div className="property-sale">Sale: May 28</div></div>
              <div className="property-row"><div><div className="property-name">48 Market Ave</div><div className="property-detail">$98k appraisal</div></div><div className="property-sale">Sale: Jun 4</div></div>
              <div className="property-row"><div><div className="property-name">720 Ridge Rd</div><div className="property-detail">$215k appraisal</div></div><div className="property-sale">Sale: Jun 11</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="container split-grid">
          <div className="dark-card">
            <h2>The problem</h2>
            <p>Kentucky real estate data is scattered across county websites, court postings, clerk records, PVA databases, auction notices, and manual spreadsheets. Investors waste hours trying to understand whether a property is actually worth pursuing.</p>
          </div>
          <div className="dark-card">
            <h2>The solution</h2>
            <p>ReIntelKY brings distressed sale data, public home records, deed transfers, resale market activity, and trend analytics into one organized dashboard designed for real estate decision makers.</p>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Everything an investor needs to research faster.</h2>
          <p className="section-subtitle">Start with Kentucky commissioner sale intelligence, then expand into broader public property and market data.</p>
          <div className="features-grid">
            {features.map(([icon, title, copy]) => (
              <div className="feature-card" key={title}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="customers" className="customers-section">
        <div className="container">
          <h2>Built for people who need better real estate intelligence.</h2>
          <p>ReIntelKY helps users find opportunities, understand market movement, and act faster with better information.</p>
          <div className="customers-grid">
            {customers.map((customer) => <div className="customer-box" key={customer}>{customer}</div>)}
          </div>
        </div>
      </section>

      <section id="early-access" className="early-access">
        <div className="container">
          <div className="access-card">
            <div className="icon">📍</div>
            <h2>Get early access to the Kentucky launch.</h2>
            <p>Join the early access list to see sample records, request counties, and get notified when the MVP is ready.</p>
            <div className="form-row">
              <input placeholder="Email address" />
              <button className="button">Join Waitlist</button>
            </div>
            <p className="small-note">No spam. Early users will help shape county coverage and feature priority.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 ReIntelKY. Real estate data should be verified with original sources before purchase decisions.
      </footer>
    </div>
  );
}
