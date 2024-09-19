
###Installation

Clone the repository:

```bash
git clone https://github.com/irfanurislam/formsHandle-client
cd formsHandle-client
```

## Usage
```bash
npm install

```
## Run
```bash
npm run dev

```
### Backend

1. **Clone the Repository:**

   ```bash
   git clonehttps://github.com/irfanurislam/formsHandle-server.git
   cd formsHandle-server
   ```
2. ** install **
    ```bash
    npm install
    ```
3. ** Run **
   ```bash
   npm start
   ```

### Form Data Transfer Application
This application allows users to submit a form via forms.app. The data is received by a webhook on the backend, then forwarded to 123FormBuilder via their API to create a new form. The frontend displays the logs of the submissions.

## Key Technologies
  1.Frontend: React, Tailwind CSS
  2.Backend: Node.js, Express, Axios
  3. Integration: forms.app (Webhook), 123FormBuilder API

## Features
1. Receive form submissions via webhook.
2. Send received data to 123FormBuilder API.
3. Display logs of submitted forms on the frontend.
