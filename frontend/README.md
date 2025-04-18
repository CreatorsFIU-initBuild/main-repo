# Frontend – CreatorsFIU

This folder contains the React.js codebase for the user-facing part of CreatorsFIU – the virtual marketplace built for the FIU community.

---

## 📁 Structure

```
frontend/
├── public/             Static assets (favicon, images)
├── src/
│   ├── components/     Reusable React components (e.g., Navbar, Footer, Cards)
│   ├── pages/          Main page components (e.g., HomePage, LoginPage)
│   ├── styles/         Tailwind CSS files and custom styling
│   ├── App.js          App root component
│   └── index.js        Entry point for React DOM rendering
└── package.json        Project dependencies and scripts
```

---

## 🛠️ Technologies Used

- React.js  
- Tailwind CSS  
- JavaScript (ES6+)  
- HTML/CSS

---

## 🚀 Getting Started

To run the frontend locally:

1. **Navigate to the folder:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

The app will be running at:  
[http://localhost:3000](http://localhost:3000)

---

## 🎨 Styling with Tailwind

We’re using [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.  
All custom styles and overrides are located in the `styles/` folder.  
For consistent design, refer to the `/docs/style-guide.md`.

To modify the Tailwind config, edit:

```bash
tailwind.config.js
```

---

