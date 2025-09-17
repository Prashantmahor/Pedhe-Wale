const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Dialogflow setup
const projectId = 'YOUR_PROJECT_ID';  // <-- Replace with your project ID
const sessionClient = new dialogflow.SessionsClient({ keyFilename: 'dialogflow-key.json' });

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    const sessionId = uuid.v4();
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'en-US',
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult.fulfillmentText;
        res.json({ reply: result });
    } catch (err) {
        console.error(err);
        res.status(500).send('Dialogflow error');
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
