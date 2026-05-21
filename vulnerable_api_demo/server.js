const express = require('express');
const cors = require('cors');
const app = express();

// VULNERABLE: Dynamic origin or '*' allows any site to read data
app.use(cors({ origin: '*' })); 

// UNDOCUMENTED SHADOW API: Should not be public
app.get('/api/v1/debug/stats', (req, res) => {
    res.json({ status: "ok", server_load: "low", secret_internal_ip: "10.0.0.5" });
});

// VULNERABLE: SQL Injection (String Concatenation)
app.get('/api/users/search', (req, res) => {
    const userId = req.query.id;
    const query = "SELECT * FROM users WHERE id = " + userId; 
    // real SQL execution logic would go here
    res.json({ message: "Executing: " + query });
});

// SHADOW ADMIN API
app.post('/admin/config/force-reload', (req, res) => {
    res.json({ message: "System settings reloaded." });
});

app.listen(3000, () => console.log('Vulnerable server running on port 3000'));
