# Eslam Mohamed | Portfolio

Plain HTML, CSS and JavaScript. No build step, nothing to install.

## Run it in VS Code
1. Unzip the folder and open it in VS Code (File > Open Folder).
2. Install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.
   (Opening `index.html` directly in a browser also works.)

## Folder structure
```
portfolio/
  index.html        page content (name, about, skills, contact links)
  css/style.css     all styling and colours (see :root at the top)
  js/data.js        YOUR PROJECTS AND ASSIGNMENTS LIVE HERE
  js/main.js        animations, menu, card rendering
  assignments/      one folder per assignment (assignment-1/index.html ...)
  projects/         one folder per practice project
```

## Personalise it
- **Email and GitHub:** in `index.html`, change `your.email@example.com` and `https://github.com/your-username` in the Contact section.
- **Skills / About text:** edit `index.html`.
- **Colours:** change the variables at the top of `css/style.css`.

## Add a project or assignment
1. Put its files in `projects/my-project/` or `assignments/assignment-3/` (each needs an `index.html`).
2. Open `js/data.js` and copy an existing `{ ... }` block into the right list, then edit the title, description, tags and `demo` path.
3. Save. The card appears automatically.

## Upload to GitHub
1. Create an account at github.com, then click **New repository**. Name it `portfolio`, keep it **Public**, and do not add a README.
2. In VS Code open the terminal (Ctrl + `) in the project folder and run:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```
(Git must be installed: git-scm.com.) Later updates: `git add .`, `git commit -m "Add assignment 3"`, `git push`.

## Deploy online (free)
**GitHub Pages**
1. On your repository go to **Settings > Pages**.
2. Under **Branch** pick `main` and `/ (root)`, then **Save**.
3. After about a minute your site is live at `https://YOUR-USERNAME.github.io/portfolio/`.

**Vercel**
1. Sign in at vercel.com with GitHub and click **Add New > Project**.
2. Import your `portfolio` repository and click **Deploy** (leave all settings as default).
3. Copy the `.vercel.app` link it gives you.

Submit either the GitHub repository link or the deployed website link to your professor.
