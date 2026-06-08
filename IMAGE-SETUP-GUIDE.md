# Adding Images to Your GitHub Pages HKC Website

## Images You Need to Upload

Your updated website expects these 4 images from your backup. From the HKC-Images.zip folder you downloaded:

1. **XalatathKitty2.png** — Guild logo (displays on home page hero)
2. **crown-of-the-cosmos-kill-3_edited.jpg** — Raid kill screenshot (on progression page)
3. **raid schedule.png** — Guild raid schedule graphic (on home page)
4. **leadership.png** — Guild leadership photo (on members page)

## Step-by-Step: Upload Images to GitHub

### Step 1: Extract Your Images
1. Download **HKC-Images.zip** (if you haven't already)
2. Unzip it to find the images folder
3. Locate the 4 images listed above

### Step 2: Create an "images" Folder in GitHub
1. Go to your GitHub repo: `hkcsargeras.github.io`
2. Click **"Add file"** → **"Create new file"**
3. In the filename box, type: `images/placeholder.txt` (this creates the images folder)
4. Click **"Commit new file"**
5. Once created, delete that placeholder file (optional)

### Step 3: Upload Your Images
1. Go to your GitHub repo
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop these 4 images into the upload area:
   - XalatathKitty2.png
   - crown-of-the-cosmos-kill-3_edited.jpg
   - raid schedule.png
   - leadership.png
4. Make sure they upload to the **"images"** folder path
5. Click **"Commit changes"**

Your repo structure should look like:
```
hkcsargeras.github.io/
├── index.html
├── history.html
├── progression.html
├── members.html
├── styles.css
├── README.md
└── images/
    ├── XalatathKitty2.png
    ├── crown-of-the-cosmos-kill-3_edited.jpg
    ├── raid schedule.png
    └── leadership.png
```

### Step 4: Verify It Works
1. Wait 1-2 minutes for GitHub to update
2. Visit your website at `https://hkcsargeras.github.io` (or your custom domain)
3. You should see:
   - Guild logo on the home page
   - Raid schedule graphic on the home page
   - Raid kill screenshot on the progression page
   - Leadership photo on the members page

## Optional: Add More Images

You have 150+ other images from your Wix backup. You can add more by:

1. Finding images you like from HKC-Images folder
2. Uploading them to the images/ folder on GitHub
3. Updating the HTML to reference them

For example, to add boss kill screenshots to the progression page, edit `progression.html` and add:

```html
<img src="images/FILENAME.jpg" alt="Boss Name" class="tier-kill-image">
```

## Troubleshooting

**Images not showing?**
- Check the filenames match exactly (case-sensitive)
- Verify they're in the `images/` folder
- Wait 2-3 minutes for GitHub to update
- Hard refresh your browser (Ctrl+Shift+R)

**Can't find the images/ folder on GitHub?**
- GitHub hides empty folders
- Upload files directly to it by using the path `images/filename.jpg`
- GitHub will create the folder automatically

**Want to replace an image?**
1. Delete the old file from the images/ folder
2. Upload the new file with the same name
3. Commit changes

## Need More Help?

Each image in your backup has a descriptive filename (like "Twin Val'kyr.jpg", "Sapphiron_JPG.jpg", etc.) so you can easily identify which boss or moment each screenshot captures.

Feel free to customize further or add more images!
