# Full Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, MongoDB, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and a contact form with database integration.

## 🚀 Features

- **Modern Design**: Clean, professional UI inspired by modern portfolio websites
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Framer Motion animations throughout the site
- **Contact Form**: Working contact form with MongoDB integration
- **CV Download**: Downloadable PDF resume functionality
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Database**: MongoDB with Prisma ORM
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Update the `.env.local` file with your MongoDB connection string:
\`\`\`env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority"
\`\`\`

5. Generate Prisma client and push schema:
\`\`\`bash
npm run db:generate
npm run db:push
\`\`\`

6. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `components/hero-section.tsx` - Name, tagline, and social links
- `components/about-section.tsx` - About description and highlights
- `components/footer.tsx` - Footer information and links
- `app/layout.tsx` - Meta tags and site title

### Projects
Update the projects array in `components/projects-section.tsx` with your actual projects.

### Skills
Modify the skills categories in `components/skills-section.tsx` to match your expertise.

### CV/Resume
Replace `public/cv.pdf` with your actual CV/resume file.

### Styling
- Colors and themes can be customized in `app/globals.css`
- Component styles use Tailwind CSS classes
- Dark/light mode variables are defined in the CSS custom properties

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1440px and up)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-website/issues).

## 📞 Support

If you have any questions or need help with setup, feel free to reach out!
