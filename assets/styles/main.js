:root{
  --green: #34A853;
  --blue: #1A73E8
  --bg: #FFFFFF;
  --muted: #F5F5F5;
  --text: #222;
  --container: 1200px;
  --radius: 10px;
  --shadow: 0 6px 18px rgba(30, 30, 30, 0.06);
  front-family: "Roboto", sans-serif;
}

* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  background: var(--muted);
  color: var(--text);
  line-height: 1.5;
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  background: var(--bg);
  border-bottom: 1px solid #e6e6e6;
  position: sticky;
  top: 0;
}
.logo a {
  color: var(--blue);
}
.nav a {
  color: var(--text);
}

.Contenidos {
  background: var(--bg);
  text-align: center;
}
.Contenidos li {
  background: #f0fbf4;
  color: var(--green);
}

.contacto {
  background: var(--muted);
  text-align: center;
}
.contacto input {
  border: 1px solid #ddd;
}
.contacto button {
  background: var(--green);
  color: #fff;
}

.footer {
  background: #333;
  color: #fff;
}
.footer a {
  color: #fff;
}
