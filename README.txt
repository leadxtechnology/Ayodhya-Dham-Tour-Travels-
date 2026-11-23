========================================================================
AYODHYADHAM TOUR TRAVELS — SHARED HOSTING DEPLOYMENT GUIDE
========================================================================

This website is built using pure HTML5, CSS3, and Vanilla JavaScript.
It requires NO Node.js, NO React, NO build commands, and NO database.
It works directly on cPanel, Hostinger, GoDaddy, Namecheap, or any standard
shared web hosting service.

------------------------------------------------------------------------
1. FILES TO UPLOAD TO YOUR SHARED HOSTING (public_html)
------------------------------------------------------------------------
Upload ONLY the following static website files and folders into the
"public_html" directory (or your domain's document root) via File Manager
or FTP:

  - index.html
  - about.html
  - vehicles.html
  - contact.html
  - assets/
      - style.css
      - main.js
      - images/
          - about-ayodhya-ghats.jpg
          - car-honda-elevate.jpg
          - car-innova-crysta.jpg
          - car-kia-carens.png
          - car-maruti-ertiga.png
          - car-sedan.jpg
          - car-swift-dzire.jpg
          - car-tempo-traveller.jpeg
          - hero-ayodhya-travel.jpg
          - logo.png
          - shri-ram-ji-ayodhya.jpg
          - wedding-car-fleet.jpg
  - README.txt (optional, for your reference)

Note: If previewing in a developer workspace containing package.json or
vite.config.ts, do NOT upload those developer files to public_html.

------------------------------------------------------------------------
2. STEP-BY-STEP UPLOAD INSTRUCTIONS (cPanel / Hostinger)
------------------------------------------------------------------------
1. Log in to your hosting control panel (cPanel or Hostinger hPanel).
2. Open "File Manager".
3. Navigate into the "public_html" folder.
4. Upload index.html, about.html, vehicles.html, contact.html, and the
   entire "assets" folder while keeping the folder structure intact.
5. Visit your domain name (e.g., https://yourdomain.com) in a browser
   to confirm all pages and images load cleanly.

------------------------------------------------------------------------
3. BUSINESS LOGO ASSET
------------------------------------------------------------------------
Your business logo is installed at:
  assets/images/logo.png
It is wired into the header, footer, and browser tab icon across
index.html, about.html, vehicles.html, and contact.html. To swap it in
the future, replace assets/images/logo.png with a new PNG or SVG file.

------------------------------------------------------------------------
4. HOW TO ADD PHONE NUMBER, WHATSAPP NUMBER & EMAIL
------------------------------------------------------------------------
Open assets/main.js and edit the SITE_CONFIG object at the top:

  var SITE_CONFIG = {
    businessName: "Ayodhyadham Tour Travels",
    address: "Tedhi Bazar, Ayodhya Railway Crossing, Pin – 224123, Uttar Pradesh, India",
    phoneDisplay: "+91 98XXX XXXXX",
    phoneTel: "+9198XXXXXXXX",
    whatsappNumber: "9198XXXXXXXX",
    email: "bookings@yourdomain.com",
    mapsUrl: "..."
  };

Save the file. Phone numbers, Call Now links, and WhatsApp booking
buttons across all pages will update automatically.

------------------------------------------------------------------------
5. HOW TO EDIT OR ADD VEHICLES
------------------------------------------------------------------------
Open assets/main.js and edit the VEHICLE_CATALOG array to update vehicle
names, passenger capacities, descriptions, images, or availability notes.

------------------------------------------------------------------------
Business Location:
Ayodhyadham Tour Travels
Tedhi Bazar, Ayodhya Railway Crossing, Pin – 224123, Uttar Pradesh, India
========================================================================
