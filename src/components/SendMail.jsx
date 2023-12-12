import React, { useState } from 'react';
import axios from 'axios';

const Invoice = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleSendEmail = () => {
    const { to, subject, text } = emailData;

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Proxy server URL
    const apiUrl = 'https://api.sendgrid.com/v3/mail/send'; // API URL

    axios.post(proxyUrl + apiUrl, {
      personalizations: [
        {
          to: [{ email: to }],
          subject: subject,
        },
      ],
      from: { email: 'quockhanh51201@gmail.com' },
      content: [{ type: 'text/plain', value: text }],
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="To"
        value={emailData.to}
        onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
      />
      <input
        type="text"
        placeholder="Subject"
        value={emailData.subject}
        onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
      />
      <textarea
        placeholder="Text"
        value={emailData.text}
        onChange={(e) => setEmailData({ ...emailData, text: e.target.value })}
      />
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default Invoice;