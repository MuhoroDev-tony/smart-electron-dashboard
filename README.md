
# ShopCart - Modern E-commerce Platform

ShopCart is a comprehensive e-commerce platform built with modern web technologies, providing both customer-facing storefront and admin dashboard functionalities.

## Features

### Customer Storefront
- **Product Browsing**: Browse products by categories (Phones, Laptops, Headphones, TVs)
- **Shopping Cart**: Add items to cart and manage purchases
- **Responsive Design**: Optimized for all device sizes

### Admin Dashboard
- **Analytics**: Track sales, revenue, and user metrics
- **Product Management**: Add, edit, and manage product inventory
- **Order Management**: Process and track customer orders
- **User Management**: Manage customer accounts and permissions
- **Settings**: Configure store settings and preferences

## Technology Stack

This project is built with:

- **Vite**: Fast build tool and development server
- **TypeScript**: Type-safe JavaScript
- **React**: UI component library
- **React Router**: For navigation and routing
- **shadcn/ui**: High-quality UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Tanstack Query**: Data fetching and state management
- **Recharts**: Composable charting library

## Getting Started

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <REPOSITORY_URL>

# Navigate to the project directory
cd shopcart

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173/`

## Project Structure

- `/src`: Source code
  - `/admin`: Admin dashboard components and pages
    - `/components`: Admin-specific UI components
    - `/layouts`: Admin layout templates
    - `/pages`: Admin page components
  - `/components`: Shared UI components
    - `/ui`: shadcn/ui components
  - `/pages`: Customer-facing page components
    - `/category`: Product category pages
  - `/hooks`: Custom React hooks
  - `/lib`: Utility functions and helpers

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Unsplash](https://unsplash.com/) for high-quality product images
