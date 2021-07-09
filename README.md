# Goal Manager

<img src="https://live.staticflickr.com/65535/51300718479_10407ab7f4_o.png" alt="Goal Manager" width="700px">
For demo, please visit at TODO

## Description

Goal Manager displays goals and relevant tasks added or modified on [Airtable](https://airtable.com/). By showing the deadline and the progress at each goal, users can use this app as a means of holding themselves accountable for their determinations. After completing all the tasks, a greyed-out checkmark next to the goal name will appear green to visualize completion.

💡 I got the idea for this project from Colby Fayock's [50 Projects for React and the Static Web](https://github.com/colbyfayock/50-projects-for-react-and-the-static-web/tree/master/Personal%20&%20Portfolio#goal-manager).

## Technologies Used

-   JavaScript
-   React
-   React Hooks
-   Semantic UI
-   [Airtable](https://airtable.com/)

## Getting Started

### Prerequisites

Make sure Node and npm are installed from the terminal

```bash
$ node -v
$ npm -v
```

---

### Installation

1. Fork this repo into your own GitHub

2. Clone the repo to your local machine

```bash
# Change to the desired directory
$ cd <desired-directory>

# Clone the repo
$ git clone https://github.com/emiribegic/goal-manager.git

# Change to the project directory
$ cd goal-manager
```

3. Install dependencies

```bash
$ npm install
```

4. Sign up for API keys at:

-   [Airtable](https://airtable.com/)

5. Set up [Airtable](https://airtable.com/)

    1. Add a base<br>
       Documentation: [Getting Started with Airtable](https://support.airtable.com/hc/en-us/sections/360003922433-Getting-started-with-Airtable)

    2. Install Airtable API<br>
       Documentation: [REST API](https://airtable.com/api)

    ```bash
    npm i airtable
    ```

6. Configure environment variables using dotenv package
    1. Install the dotenv package
    ```bash
    npm install dotenv
    ```
    2. Create a new `.env` file in the root of your project
    3. Fill the `.env` file with your API keys like this:
    ```bash
    REACT_APP_API_KEY=**************************
    REACT_APP_BASE_ID=**************************
    ```
7. Start the project

|    Command     |                            Action                            |
| :------------: | :----------------------------------------------------------: |
| `npm run prod` |                 Build project for deployment                 |
|  `npm start`   | Run project in the development mode at http://localhost:3000 |

### Deployment

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
