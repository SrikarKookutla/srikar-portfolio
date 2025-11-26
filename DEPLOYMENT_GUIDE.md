# 🚀 GitHub Pages Deployment Guide

## Your Portfolio is Ready to Deploy!

Follow these simple steps to host your portfolio on GitHub Pages for **FREE 24/7 access**.

---

## 📋 Step-by-Step Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `srikar-portfolio`
   - **Description**: "Professional QA Engineer Portfolio"
   - **Visibility**: Public ✅
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

### Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/srikar-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Example:**
If your GitHub username is `srikarkookutla`, the command would be:
```bash
git remote add origin https://github.com/srikarkookutla/srikar-portfolio.git
```

### Step 3: Deploy to GitHub Pages

Once your code is pushed to GitHub, run:

```bash
npm run deploy
```

This command will:
- Build your production-ready portfolio
- Create a `gh-pages` branch
- Deploy your site automatically

### Step 4: Enable GitHub Pages (One-time setup)

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **"Save"**

### Step 5: Access Your Live Portfolio! 🎉

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/srikar-portfolio/
```

**Example:**
```
https://srikarkookutla.github.io/srikar-portfolio/
```

⏱️ **Note:** It may take 2-5 minutes for the site to go live after the first deployment.

---

## 🔄 Updating Your Portfolio

Whenever you make changes to your portfolio:

1. **Save your changes**
2. **Commit to git:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. **Redeploy:**
   ```bash
   npm run deploy
   ```

Your live site will update in 1-2 minutes!

---

## 🎯 Quick Commands Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Run locally for development |
| `npm run build` | Build production version |
| `npm run deploy` | Deploy to GitHub Pages |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Commit changes |
| `git push` | Push to GitHub |

---

## 📱 Share Your Portfolio

Once live, you can:
- ✅ Add the link to your **LinkedIn profile**
- ✅ Include it in your **resume**
- ✅ Share it with **recruiters and HR**
- ✅ Add it to your **email signature**

---

## 🆘 Troubleshooting

**Issue: Page shows 404**
- Make sure you selected `gh-pages` branch in Settings → Pages
- Wait 2-5 minutes after first deployment

**Issue: Styles not loading**
- Check that `base: '/srikar-portfolio/'` is in `vite.config.js`
- The repository name must match the base path

**Issue: Deploy command fails**
- Make sure you ran `npm install` first
- Check that you have internet connection
- Verify you're logged into GitHub

---

## 🎨 Customization Tips

To update your information:
1. Edit `src/data.jsx` - Update your personal info, skills, projects
2. Edit `src/index.css` - Change colors, fonts, styles
3. Run `npm run deploy` to publish changes

---

## 💡 Pro Tips

1. **Custom Domain**: You can use a custom domain (like `srikarkookutla.com`) by adding a CNAME file
2. **Analytics**: Add Google Analytics to track visitors
3. **SEO**: The portfolio is already optimized for search engines
4. **Updates**: Keep your portfolio updated with new projects and skills

---

**🎉 Congratulations! Your portfolio is now accessible 24/7 for free!**

Need help? Check the [GitHub Pages Documentation](https://docs.github.com/en/pages)
