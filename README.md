# Automation for Dynamics 365

This project contains automated tests for Dynamics 365 using Playwright and TypeScript. The tests are designed to verify various functionalities within the Dynamics 365 environment.

This project in future can also have Automation for 
E2E testing
Cross Browser Testing



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Nesaganesh/automation.d365.git
    cd automation.d365
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

### Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
DYN365_ORGURL=https://your-dynamics-365-url
DYN365_CLIENTID: ''
DYN365_CLIENTSECRET: ''
DYN365_USERNAME: ''
DYN365_PASSWORD: ''



