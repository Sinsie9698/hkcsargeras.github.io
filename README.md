# Hello Kitty Club Website - GitHub Pages Setup Guide

## Files Included
- `index.html` - Home page
- `history.html` - Guild history
- `progression.html` - Raid progression
- `members.html` - Members page
- `styles.css` - All styling

## Step-by-Step Setup

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Click "Sign up" and follow the prompts
3. Verify your email address

### Step 2: Create Your Repository
1. After logging in, click the **+** icon in the top right
2. Select **"New repository"**
3. **Important:** Name it exactly: `hkcsargeras.github.io` (replace with your GitHub username if different)
4. Add description: "Hello Kitty Club Website"
5. Make it **Public** (required for free GitHub Pages)
6. Click **"Create repository"**

### Step 3: Upload Your Website Files
#### Option A: Using GitHub's Web Interface (Easiest)
1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop these files into the upload area:
   - index.html
   - history.html
   - progression.html
   - members.html
   - styles.css
3. Click **"Commit changes"**

#### Option B: Using Git Command Line
1. Open your terminal/command prompt
2. Navigate to the folder with your website files
3. Run these commands:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hkcsargeras.github.io.git
git push -u origin main
```

### Step 4: Verify GitHub Pages is Working
1. Go to your repository settings
2. Scroll to **"Pages"** section on the left
3. Confirm it says "Your site is live at: https://hkcsargeras.github.io"
4. Visit that URL to test your site

### Step 5: Point Your Custom Domain
#### Find Your Domain Registrar
Where did you buy `hkcsargeras.com`? (GoDaddy, Namecheap, etc.)

#### Update DNS Settings
1. Log into your domain registrar's account
2. Find the DNS settings (usually called "DNS Management" or "Advanced DNS")
3. Look for an option to edit records

You need to add a `CNAME` record:
- **Type:** CNAME
- **Name:** @ (or leave blank)
- **Value:** `hkcsargeras.github.io`

OR use GitHub's recommended A records:
- **Type:** A
- **Name:** @
- **Value:** `185.199.108.153`
- **Value:** `185.199.109.153`
- **Value:** `185.199.110.153`
- **Value:** `185.199.111.153`

(Add all 4 A records)

#### Configure GitHub Repository
1. Go back to your GitHub repository settings
2. Scroll to **"Pages"**
3. Under "Custom domain," enter: `hkcsargeras.com`
4. Click **"Save"**
5. Check **"Enforce HTTPS"** (wait 1-2 minutes for the option to appear)

#### Wait for DNS Propagation
- DNS changes take 5 minutes to 48 hours to fully propagate
- Your site should be live at `https://hkcsargeras.com` once complete
- Check progress at: [whatsmydns.net](https://www.whatsmydns.net/) (enter your domain)

### Step 6: Make Updates to Your Site
To update content:

1. In GitHub, open the file you want to edit (e.g., `index.html`)
2. Click the **pencil icon** to edit
3. Make your changes
4. Scroll down and click **"Commit changes"**
5. Changes are live in 1-2 minutes!

**Easy things to update:**
- Raid schedule times
- Links and URLs
- Text content
- Guild announcements

## Common Edits

### Update Raid Schedule (index.html)
Find this section and change the times:
```html
<div class="schedule-item">
    <h3>Tuesday</h3>
    <p>7:00 PM - 10:00 PM CT</p>
    <p class="schedule-type">Mythic Raid</p>
</div>
```

### Update Current Progression (progression.html)
Find this section and change the numbers:
```html
<div class="progress-box">
    <div class="progress-label">Mythic Progression</div>
    <div class="progress-bar">
        <div class="progress-fill" style="width: 100%;">9/9</div>
    </div>
</div>
```

### Add New Social Links
Find the socials section and add new links:
```html
<a href="YOUR-NEW-LINK" target="_blank" class="social-btn">Platform Name</a>
```

## Domain Registrar-Specific Instructions

### GoDaddy
1. Log in to your account
2. Go to **My Products** → **Domains**
3. Click on your domain
4. Under **Managing DNS**, find **Edit DNS**
5. Add your CNAME record as described above

### Namecheap
1. Log in and go to **Domain List**
2. Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Add your CNAME record as described above

### Other Registrars
The process is similar - look for "DNS Management" or "Advanced DNS Settings" in your account.

## Troubleshooting

**Site not showing up after 48 hours?**
1. Verify your CNAME/A records are correct at: [whatsmydns.net](https://www.whatsmydns.net/)
2. Check that "Enforce HTTPS" is enabled in GitHub Pages settings
3. Clear your browser cache and try again

**Images or styles not loading?**
- Check that all files (html, css, images) are in the same folder
- Verify file names match exactly (they're case-sensitive)

**Can't find DNS settings?**
- Contact your domain registrar's support
- They can help you set up the DNS records

## Need Help?

- **GitHub Pages Documentation:** [pages.github.com](https://pages.github.com/)
- **GitHub Support:** [GitHub Help](https://help.github.com)
- **Domain Configuration Help:** Contact your registrar's support team

## Tips for Success

1. **Always verify DNS changes** at [whatsmydns.net](https://www.whatsmydns.net/) before concluding there's an issue
2. **Keep backups** of important information (apply form link, social links, etc.)
3. **Test on mobile** - visit your site on a phone to ensure it looks good
4. **Update regularly** - let members know the site is active with current info

Good luck with your new HKC website! 🎮
