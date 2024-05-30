# Ticketmaster Clone

Welcome to the Ticketmaster Clone app! This project is a full-featured web application that mimics the functionality of Ticketmaster, allowing users to browse, purchase, and manage event tickets.

## Table of Contents

- [Ticketmaster Clone](#ticketmaster-clone)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Overview

The Ticketmaster Clone app provides an intuitive platform for users to discover events, buy tickets, and manage their bookings. It includes both user-facing features and administrative functionalities to handle events and ticket sales efficiently.

## Features

- **User Authentication:** Secure login and registration system.
- **Event Browsing:** Users can browse and search for events by categories, dates, and locations.
- **Ticket Purchase:** Seamless ticket buying process with secure payment integration.
- **Order Management:** Users can view their order history and manage their bookings.
- **Admin Dashboard:** Admins can create, update, and delete events, as well as manage ticket sales.

## Technologies Used

- **Frontend:**
  - React.js
  - Redux
  - Tailwind CSS (via daisyUI)
- **Backend:**
  - Node.js
  - Express.js
- **Database:**
  - MongoDB
- **Authentication:**
  - JWT (JSON Web Tokens)
- **Containerization:**
  - Docker
- **CI/CD:**
  - GitHub Actions
- **Others:**
  - Kubernetes for orchestration
  - Stripe for payment processing

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- Docker
- MongoDB (local or cloud instance)
- Stripe account for payment processing

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/sptres/ticketmaster-clone.git
   cd ticketmaster-clone
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   MONGO_URI=<your_mongo_uri>
   JWT_KEY=<your_jwt_secret>
   STRIPE_KEY=<your_stripe_key>
   ```

### Running the Application

1. **Start the application:**

   ```sh
   npm run dev
   ```

2. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`, or set up ticketing.dev to connect to localhost.

## Usage

- **Browse Events:** Navigate through the homepage to discover various events.
- **Purchase Tickets:** Select an event, choose your tickets, and proceed to checkout.
- **Manage Orders:** Visit your profile to view and manage your past orders.
- **Admin Functions:** Log in as an admin to access the dashboard for event management.

## Contributing

We welcome contributions from the community. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Name:** Seung Hyuk Park
- **Email:** shawnpark2397@gmail.com
- **GitHub:** [https://github.com/sptres](https://github.com/sptres)
