</script>

<!--
===========================================================
  MYSQL BACKEND SETUP (run this separately as server.js)
  npm install express mysql2 cors body-parser
===========================================================

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost', user: 'root',
  password: 'YOUR_PASSWORD', database: 'ts_group'
});

db.connect(err => {
  if (err) { console.log('DB Error:', err); return; }
  console.log('MySQL Connected!');
  db.query(`CREATE TABLE IF NOT EXISTS enquiries (
    id BIGINT PRIMARY KEY, timestamp VARCHAR(50),
    firstName VARCHAR(100), lastName VARCHAR(100),
    mobile VARCHAR(20), email VARCHAR(100),
    city VARCHAR(100), institution VARCHAR(200),
    course VARCHAR(200), message TEXT, status VARCHAR(50)
  )`);
});

app.get('/ping', (req, res) => res.json({ status: 'ok' }));

app.post('/enquiry', (req, res) => {
  const e = req.body;
  db.query('INSERT INTO enquiries VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [e.id,e.timestamp,e.firstName,e.lastName,e.mobile,e.email,e.city,e.institution,e.course,e.message,e.status],
    (err) => res.json({ success: !err, error: err?.message })
  );
});

app.get('/enquiries', (req, res) => {
  db.query('SELECT * FROM enquiries ORDER BY id DESC', (err, rows) => res.json(rows || []));
});

app.listen(3001, () => console.log('TS Group API running on http://localhost:3001'));

===========================================================
  TO RUN MYSQL BACKEND:
  1. node server.js
  2. Open http://localhost:3001/enquiries to see all data
  3. Import the CSV into Excel anytime from the form
===========================================================
-->
</body>
</html>

What's included in this version:
Real Branches — Every institution now shows actual real-world programs (e.g. Medical has MD in 12 specialties + MS in 5 + DM/MCh super-specialty; Engineering has 16 UG branches; Law has 9 LLM specializations, etc.)
AI Chatbot — Uses Claude API, knows all institution/fee/branch/admission info. Falls back to smart local answers if API is unavailable.
Database Integration:

All enquiry data auto-saves to localStorage (works offline)
Simultaneously tries to POST to your MySQL REST API at localhost:3001
The MySQL Node.js server code is pasted at the bottom as comments — just copy it to server.js and run node server.js
DB status indicator in the topbar shows Online/Offline

Export: CSV (opens directly in Excel) and JSON export buttons appear after the first submission.You are out of free messag
