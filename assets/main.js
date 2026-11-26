/* ==========================================================================
   Ayodhyadham Tour Travels — Vanilla JavaScript
   Pure Vanilla JS | No dependencies | Shared-Hosting Ready

   HOW TO CUSTOMIZE:
   1. Update phoneDisplay, phoneTel, whatsappNumber, and email in SITE_CONFIG.
   2. Add or edit vehicles inside VEHICLE_CATALOG below.
   3. Place your business logo at "assets/images/logo.png".
   ========================================================================== */

var SITE_CONFIG = {
  businessName: "Ayodhyadham Tour Travels",
  hostName: "Shyam Gupta",
  address: "Tedhi Bazar, Ayodhya Railway Crossing, Pin – 224123, Uttar Pradesh, India",
  phoneDisplay: "+91 92782 14121",
  phoneTel: "+919278214121",
  whatsappNumber: "919278214121",
  topWhatsappNumber: "919120671665",
  topWhatsappMessage: "Namaste, mujhe Ayodhyadham Tour Travels se taxi booking ke baare mein jaankari chahiye.",
  email: "info@ayodhyadhamtourtravels.example", // Replace with your official business email
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tedhi+Bazar+Ayodhya+Railway+Crossing+224123+Uttar+Pradesh+India"
};

var SERVICE_AREAS = [
  "Ayodhya",
  "Lucknow",
  "Varanasi",
  "Prayagraj",
  "Gorakhpur",
  "Gonda",
  "Kanpur",
  "Delhi",
  "Agra",
  "Mathura",
  "Chitrakoot",
  "Naimisharanya"
];

/* Editable Fleet & Taxi Categories (4 Separate Categories)
   Note: Availability of specific models & seating depends on actual fleet booking schedule. */
var VEHICLE_CATALOG = [
  {
    id: "maruti-swift-dzire",
    name: "Maruti Swift Dzire",
    category: "sedan",
    categoryLabel: "Sedan Taxi",
    seats: "4 Passengers + Driver",
    ac: "Full AC",
    luggage: "2 Bags",
    image: "assets/images/car-swift-dzire.jpg",
    alt: "Ayodhya Local Sightseeing Taxi aur station pickup ke liye Maruti Swift Dzire Sedan",
    description: "Ayodhya Darshan, Railway Station Pickup aur chhoti family trips ke liye aaramdayak aur saaf AC Sedan car.",
    availabilityNote: "Travel date ke hisaab se gaadi ki availability confirm karein."
  },
  {
    id: "maruti-aura",
    name: "Maruti Aura",
    category: "sedan",
    categoryLabel: "Sedan Taxi",
    seats: "4 Passengers + Driver",
    ac: "Full AC",
    luggage: "2–3 Bags",
    image: "assets/images/car-sedan.jpg",
    alt: "Airport transfer aur city darshan ke liye AC Sedan Taxi",
    description: "Airport Transfer, local sightseeing aur short outstation trips ke liye comfortable Sedan taxi suvidha.",
    availabilityNote: "Booking ke samay available Sedan model confirm kiya jata hai."
  },
  {
    id: "maruti-ertiga",
    name: "Maruti Ertiga",
    category: "family",
    categoryLabel: "Big Family & SUV",
    seats: "6–7 Passengers + Driver",
    ac: "Dual-Zone AC",
    luggage: "3–4 Bags",
    image: "assets/images/car-maruti-suzuki-ertiga.png",
    alt: "Badi family aur group travel ke liye Maruti Ertiga 7-seater car",
    description: "Parivaar aur group travel ke liye 3-row seating wali spacious 7-seater Maruti Ertiga gaadi.",
    availabilityNote: "Travel date ke hisaab se availability confirm karein."
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova",
    category: "family",
    categoryLabel: "Big Family & SUV",
    seats: "6–7 Passengers + Driver",
    ac: "Dual AC",
    luggage: "4 Bags",
    image: "assets/images/car-toyota-innova.jpg",
    alt: "Lambi doori aur family yatra ke liye Toyota Innova 7-seater",
    description: "Lambi doori ki yatra aur parivaar ke saath outstation travel ke liye mazboot aur aaramdayak Toyota Innova.",
    availabilityNote: "Travel date ke hisaab se availability confirm karein."
  },
  {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "family",
    categoryLabel: "Big Family & SUV",
    seats: "6–7 Passengers + Driver",
    ac: "Climate Control AC",
    luggage: "4–5 Bags",
    image: "assets/images/car-innova-crysta.jpg",
    alt: "Outstation Taxi from Ayodhya aur family trips ke liye Toyota Innova Crysta",
    description: "Zyada jagah, smooth highway ride aur comfortable captain seats ke saath Toyota Innova Crysta.",
    availabilityNote: "Travel date ke hisaab se availability confirm karein."
  },
  {
    id: "kia-carens",
    name: "Kia Carens",
    category: "family",
    categoryLabel: "Big Family & SUV",
    seats: "6–7 Passengers + Driver",
    ac: "Roof-Vented AC",
    luggage: "3–4 Bags",
    image: "assets/images/car-kia-carens.png",
    alt: "Family yatra aur Ayodhya darshan ke liye Kia Carens 7-seater car",
    description: "Modern 3-row seating aur comfortable interior ke saath family darshan aur outstation trips ke liye Kia Carens.",
    availabilityNote: "Travel date ke hisaab se availability confirm karein."
  },
  {
    id: "honda-elevate",
    name: "Honda Elevate",
    category: "family",
    categoryLabel: "Big Family & SUV",
    seats: "4 Seater + 1 Driver",
    ac: "Full AC",
    luggage: "3–4 Bags",
    image: "assets/images/car-honda-elevate.png",
    alt: "Family trips aur outstation yatra ke liye Honda Elevate SUV",
    description: "Chhoti family aur highway comfort ke liye spacious SUV boot space aur smooth driving experience.",
    availabilityNote: "Anya available family gaadiyon ke saath date par confirm karein."
  },
  {
    id: "tempo-12-seater",
    name: "12 Seater Tempo Traveller",
    category: "tempo",
    categoryLabel: "AC Tempo Traveller",
    seats: "12 Passengers + Driver",
    ac: "Full AC",
    luggage: "Roof Carrier & Boot",
    image: "assets/images/car-tempo-traveller.jpeg",
    alt: "Poore parivaar aur darshan group ke liye 12 Seater AC Tempo Traveller",
    description: "10–12 logon ke family group aur mandir darshan yatra ke liye comfortable pushback AC seating.",
    availabilityNote: "Actual fleet availability advance enquiry par confirm ki jati hai."
  },
  {
    id: "tempo-17-seater",
    name: "17 Seater Tempo Traveller",
    category: "tempo",
    categoryLabel: "AC Tempo Traveller",
    seats: "17 Passengers + Driver",
    ac: "High-Capacity AC",
    luggage: "Dedicated Carrier & Boot",
    image: "assets/images/car-urbania-tempo-traveller.png",
    alt: "Yatri mandali aur bade group ke liye 17 Seater AC Tempo Traveller",
    description: "Bade parivaar, yatri mandali aur outstation group tours ke liye Force Urbania / 17-seater AC Tempo Traveller option.",
    availabilityNote: "Seating & model availability booking date par confirm ki jati hai."
  },
  {
    id: "wedding-audi",
    name: "Audi (Subject to Availability)",
    category: "wedding",
    categoryLabel: "Wedding Cars",
    seats: "4 Passengers + Driver",
    ac: "Luxury AC",
    luggage: "2–3 Bags",
    image: "assets/images/wedding-audi.png",
    alt: "Shaadi aur dulha-dulhan ki entry ke liye Audi wedding car",
    description: "Dulha-dulhan ki shahi entry ke liye Audi wedding car — sirf actual availability hone par hi confirm ki jati hai.",
    availabilityNote: "Shaadi ki date par actual availability confirm karna zaroori hai."
  },
  {
    id: "wedding-fleet",
    name: "Premium Sedan, SUVs & Innova Crysta (Wedding)",
    category: "wedding",
    categoryLabel: "Wedding Cars",
    seats: "Sedans · SUVs · Baraat Fleet",
    ac: "AC & Floral Decor Options",
    luggage: "Flexible Capacity",
    image: "assets/images/wedding-car-fleet.jpg",
    alt: "Shaadi, baraat aur wedding guests ke liye Premium Sedan aur SUV wedding cars",
    description: "Shaadi, Baraat aur wedding guests ke transportation ke liye Premium Sedan Cars, SUVs aur Innova Crysta ki booking.",
    availabilityNote: "Availability ke hisaab se anya wedding gaadiyan bhi arrange ki jati hain."
  }
];

/* --------------------------------------------------------------------------
   Pure Helper Functions (Testable & Side-Effect Free)
   -------------------------------------------------------------------------- */

function filterVehicles(catalog, category) {
  if (!Array.isArray(catalog)) {
    return [];
  }
  if (!category || category === "all") {
    return catalog.slice();
  }
  return catalog.filter(function (item) {
    return item.category === category;
  });
}

function buildVehicleEnquiryHref(vehicleName, categoryName) {
  var base = "contact.html";
  var query = [];
  if (vehicleName) {
    query.push("vehicle=" + encodeURIComponent(vehicleName));
  }
  if (categoryName) {
    query.push("category=" + encodeURIComponent(categoryName));
  }
  if (!query.length) {
    return base + "#enquiry-form";
  }
  return base + "?" + query.join("&") + "#enquiry-form";
}

function resolveCategoryBookingIntent(categoryParam) {
  var raw = String(categoryParam || "").trim().toLowerCase();
  if (!raw) {
    return { vehiclePreference: "", serviceType: "" };
  }
  if (raw.indexOf("sedan") !== -1) {
    return { vehiclePreference: "Sedan Taxi", serviceType: "" };
  }
  if (raw.indexOf("family") !== -1 || raw.indexOf("suv") !== -1) {
    return { vehiclePreference: "Big Family & SUV Car", serviceType: "" };
  }
  if (raw.indexOf("tempo") !== -1) {
    return { vehiclePreference: "Tempo Traveller", serviceType: "Tempo Traveller Booking" };
  }
  if (raw.indexOf("wedding") !== -1) {
    return { vehiclePreference: "Wedding Cars", serviceType: "Wedding Booking" };
  }
  return { vehiclePreference: String(categoryParam).trim(), serviceType: "" };
}

function buildWhatsAppLink(whatsappNumber, message) {
  var digits = String(whatsappNumber || "").replace(/\D/g, "");
  if (!digits) {
    return "";
  }
  var text = encodeURIComponent(message || "Namaste Ayodhyadham Tour Travels, mujhe Ayodhya mein taxi booking ke baare mein jaankari chahiye.");
  return "https://wa.me/" + digits + "?text=" + text;
}

function shouldShowReturnDate(serviceType) {
  return String(serviceType || "").trim() === "Round Trip Taxi";
}

function buildEnquirySummary(payload, businessName) {
  var name = String((payload && payload.name) || "").trim();
  var phone = String((payload && payload.phone) || "").trim();
  var serviceType = String((payload && payload.serviceType) || "").trim();
  var pickupLocation = String((payload && payload.pickupLocation) || "").trim();
  var destination = String((payload && payload.destination) || "").trim();
  var travelDate = String((payload && payload.travelDate) || "").trim();
  var returnDate = String((payload && payload.returnDate) || "").trim();
  var passengers = String((payload && payload.passengers) || "").trim();
  var vehiclePreference = String((payload && payload.vehiclePreference) || "").trim();
  var notes = String((payload && payload.notes) || "").trim();

  var lines = [
    "Travel Enquiry — " + (businessName || SITE_CONFIG.businessName),
    "Naam: " + name,
    "Mobile: " + phone,
    "Booking Type: " + serviceType,
    "Pickup Location: " + pickupLocation,
    "Destination: " + destination,
    "Travel Date: " + travelDate,
    shouldShowReturnDate(serviceType) && returnDate ? "Return Date: " + returnDate : "",
    passengers ? "Number of Passengers: " + passengers : "",
    "Preferred Vehicle: " + (vehiclePreference || "Koi Bhi Available"),
    notes ? "Khaas Jaankari: " + notes : ""
  ];

  return lines.filter(Boolean).join("\n");
}

function validateEnquiry(data) {
  var errors = {};
  var name = String((data && data.name) || "").trim();
  var phone = String((data && data.phone) || "").trim();
  var email = String((data && data.email) || "").trim();
  var serviceType = String((data && data.serviceType) || "").trim();
  var pickupLocation = String((data && data.pickupLocation) || "").trim();
  var destination = String((data && data.destination) || "").trim();
  var travelDate = String((data && data.travelDate) || "").trim();
  var returnDate = String((data && data.returnDate) || "").trim();
  var passengersRaw = String((data && data.passengers) || "").trim();

  if (name.length < 2) {
    errors.name = "Kripya apna poora naam likhein (kam se kam 2 akshar).";
  }

  var phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = "Kripya sahi 10-digit mobile number likhein.";
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Kripya sahi email address likhein ya ise khali chhodein.";
  }

  if (!serviceType) {
    errors.serviceType = "Kripya batayein aapko kis tarah ki taxi chahiye.";
  }

  if (pickupLocation.length < 2) {
    errors.pickupLocation = "Kripya pickup location likhein.";
  }

  if (destination.length < 2) {
    errors.destination = "Kripya destination (kahan jaana hai) likhein.";
  }

  if (!travelDate) {
    errors.travelDate = "Kripya apni travel date chunein.";
  }

  if (shouldShowReturnDate(serviceType)) {
    if (!returnDate) {
      errors.returnDate = "Round Trip Taxi ke liye return date chunein.";
    } else if (travelDate && returnDate < travelDate) {
      errors.returnDate = "Return date travel date ke barabar ya uske baad ki chunein.";
    }
  }

  if (passengersRaw) {
    var passengerNum = Number(passengersRaw);
    if (!Number.isInteger(passengerNum) || passengerNum < 1 || passengerNum > 100) {
      errors.passengers = "Kripya sahi passengers ki sankhya likhein (1–100).";
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors: errors
  };
}

function computeCursorLerp(current, target, factor) {
  var t = typeof factor === "number" ? Math.min(1, Math.max(0, factor)) : 0.18;
  return current + (target - current) * t;
}

/* --------------------------------------------------------------------------
   DOM Controllers
   -------------------------------------------------------------------------- */

function initIntroCurtain() {
  var curtain = document.getElementById("intro-curtain");
  if (!curtain) {
    return;
  }

  var skipBtn = document.getElementById("intro-skip-btn");
  var params = new URLSearchParams(window.location.search);
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function dismissCurtain(immediate) {
    if (immediate) {
      curtain.classList.add("is-done");
      curtain.setAttribute("aria-hidden", "true");
      return;
    }
    if (curtain.classList.contains("is-exiting") || curtain.classList.contains("is-done")) {
      return;
    }
    curtain.classList.add("is-exiting");
    curtain.setAttribute("aria-hidden", "true");
    window.setTimeout(function () {
      curtain.classList.add("is-done");
    }, 750);
  }

  if (reduceMotion || params.get("autostart") === "1") {
    dismissCurtain(true);
    return;
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", function () {
      dismissCurtain(false);
    });
  }

  window.setTimeout(function () {
    dismissCurtain(false);
  }, 2850);
}

function initHeaderScroll() {
  var header = document.querySelector(".site-header");
  if (!header) {
    return;
  }
  function onScroll() {
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileDrawer() {
  var toggleBtn = document.getElementById("mobile-menu-toggle");
  var drawer = document.getElementById("mobile-drawer");
  var siteHeader = document.querySelector(".site-header");
  if (!toggleBtn || !drawer) {
    return;
  }

  function updateDrawerOffset() {
    if (!siteHeader) {
      return;
    }
    var rect = siteHeader.getBoundingClientRect();
    drawer.style.top = Math.max(0, Math.round(rect.bottom)) + "px";
  }

  function setDrawerState(open) {
    if (open) {
      updateDrawerOffset();
    }
    toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    toggleBtn.setAttribute("aria-label", open ? "Menu band karein" : "Menu kholein");
    toggleBtn.innerHTML = open
      ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
      : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
  }

  window.addEventListener("scroll", function () {
    if (drawer.classList.contains("is-open")) {
      updateDrawerOffset();
    }
  }, { passive: true });

  window.addEventListener("resize", function () {
    if (drawer.classList.contains("is-open")) {
      updateDrawerOffset();
    }
  });

  toggleBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    var isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    setDrawerState(!isOpen);
  });

  drawer.addEventListener("click", function (event) {
    if (event.target && event.target.tagName === "A") {
      setDrawerState(false);
    }
  });

  document.addEventListener("click", function (event) {
    if (
      toggleBtn.getAttribute("aria-expanded") === "true" &&
      !drawer.contains(event.target) &&
      !toggleBtn.contains(event.target)
    ) {
      setDrawerState(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggleBtn.getAttribute("aria-expanded") === "true") {
      setDrawerState(false);
      toggleBtn.focus();
    }
  });
}

function initLogoSlots() {
  var slots = document.querySelectorAll(".brand-logo-slot");
  slots.forEach(function (slot) {
    var img = slot.querySelector(".brand-logo-img");
    var placeholder = slot.querySelector(".brand-logo-placeholder");
    if (!img || !placeholder) {
      return;
    }

    function showPlaceholder() {
      img.hidden = true;
      placeholder.hidden = false;
      slot.classList.remove("has-logo");
    }

    function showImage() {
      img.hidden = false;
      placeholder.hidden = true;
      slot.classList.add("has-logo");
    }

    img.addEventListener("error", showPlaceholder);
    img.addEventListener("load", function () {
      if (img.naturalWidth > 0) {
        showImage();
      } else {
        showPlaceholder();
      }
    });

    if (img.complete) {
      if (img.naturalWidth > 0) {
        showImage();
      } else {
        showPlaceholder();
      }
    }
  });
}

function initScrollReveals() {
  var revealNodes = document.querySelectorAll("[data-reveal]");
  if (!revealNodes.length) {
    return;
  }

  var params = new URLSearchParams(window.location.search);
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || params.get("autostart") === "1" || !("IntersectionObserver" in window)) {
    revealNodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
    return;
  }

  document.documentElement.classList.add("reveal-ready");

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = entry.target.getAttribute("data-reveal-delay");
          if (delay) {
            entry.target.style.transitionDelay = delay + "ms";
          }
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px 60px 0px" }
  );

  revealNodes.forEach(function (node) {
    var rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      node.classList.add("is-visible");
    } else {
      observer.observe(node);
    }
  });
}

function syncDynamicContactText() {
  var phoneElements = document.querySelectorAll("[data-phone-display]");
  phoneElements.forEach(function (el) {
    el.textContent = SITE_CONFIG.phoneDisplay;
  });

  var phoneLinkElements = document.querySelectorAll("[data-phone-link]");
  phoneLinkElements.forEach(function (el) {
    if (SITE_CONFIG.phoneTel) {
      el.setAttribute("href", "tel:" + SITE_CONFIG.phoneTel);
    }
  });

  var topWaHref = buildWhatsAppLink(SITE_CONFIG.topWhatsappNumber, SITE_CONFIG.topWhatsappMessage);
  var topWaLinks = document.querySelectorAll("[data-top-whatsapp-link]");
  topWaLinks.forEach(function (el) {
    if (topWaHref) {
      el.setAttribute("href", topWaHref);
    }
  });

  var addressElements = document.querySelectorAll("[data-address-display]");
  addressElements.forEach(function (el) {
    el.textContent = SITE_CONFIG.address;
  });

  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createVehicleCardMarkup(vehicle, idx) {
  var href = buildVehicleEnquiryHref(vehicle.name);
  var delayStyle = typeof idx === "number" ? ' style="animation-delay:' + (idx * 55) + 'ms"' : "";
  return (
    '<article class="vehicle-card vehicle-card-animate" data-category="' + escapeHtml(vehicle.category) + '"' + delayStyle + '>' +
      '<div class="vehicle-media">' +
        '<img src="' + escapeHtml(vehicle.image) + '" alt="' + escapeHtml(vehicle.alt) + '" loading="lazy" referrerpolicy="no-referrer" />' +
      '</div>' +
      '<div class="vehicle-body">' +
        '<div class="vehicle-meta">' +
          '<span>' + escapeHtml(vehicle.categoryLabel) + '</span>' +
          '<span aria-hidden="true">·</span>' +
          '<span class="tabular-nums">' + escapeHtml(vehicle.seats) + '</span>' +
          '<span aria-hidden="true">·</span>' +
          '<span>' + escapeHtml(vehicle.ac) + '</span>' +
        '</div>' +
        '<h3 class="vehicle-title">' + escapeHtml(vehicle.name) + '</h3>' +
        '<p class="vehicle-desc">' + escapeHtml(vehicle.description) + '</p>' +
        '<div class="vehicle-specs">' +
          '<p class="vehicle-availability">' + escapeHtml(vehicle.availabilityNote) + ' Luggage: ' + escapeHtml(vehicle.luggage) + '.</p>' +
          '<a class="btn btn-saffron btn-sm" href="' + escapeHtml(href) + '">' + escapeHtml(vehicle.name) + ' Book Karein</a>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

function initVehiclesCatalogPage() {
  var categorySections = document.querySelectorAll(".vehicle-category-section[data-category-section]");
  var countEl = document.getElementById("fleet-count");
  var filterButtons = document.querySelectorAll(".filter-tab[data-filter]");

  if (categorySections.length && filterButtons.length) {
    function applySectionFilter(selected) {
      var visibleCount = 0;
      categorySections.forEach(function (sec) {
        var cat = sec.getAttribute("data-category-section");
        var show = !selected || selected === "all" || cat === selected;
        sec.hidden = !show;
        if (show) {
          visibleCount += 1;
        }
      });
      if (countEl) {
        countEl.textContent = visibleCount + (visibleCount === 1 ? " category dikh rahi hai" : " categories dikh rahi hain");
      }
    }

    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var selected = btn.getAttribute("data-filter") || "all";
        filterButtons.forEach(function (other) {
          var active = other === btn;
          other.classList.toggle("is-active", active);
          other.setAttribute("aria-pressed", active ? "true" : "false");
        });
        applySectionFilter(selected);
      });
    });

    applySectionFilter("all");
    return;
  }

  var grid = document.getElementById("vehicles-catalog-grid");
  if (!grid || !filterButtons.length) {
    return;
  }

  function renderCategory(category) {
    var list = filterVehicles(VEHICLE_CATALOG, category);
    grid.innerHTML = list.map(function (vehicle, idx) {
      return createVehicleCardMarkup(vehicle, idx);
    }).join("");
    if (countEl) {
      countEl.textContent = list.length + (list.length === 1 ? " category dikh rahi hai" : " categories dikh rahi hain");
    }
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var selected = btn.getAttribute("data-filter") || "all";
      filterButtons.forEach(function (other) {
        var active = other === btn;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-pressed", active ? "true" : "false");
      });
      renderCategory(selected);
    });
  });

  renderCategory("all");
}

function initBookingIntentLinks() {
  var intentLinks = document.querySelectorAll("[data-booking-type], [data-route-destination]");
  if (!intentLinks.length) {
    return;
  }
  intentLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      try {
        var bookingType = link.getAttribute("data-booking-type");
        var routeDest = link.getAttribute("data-route-destination");
        var routePickup = link.getAttribute("data-route-pickup");
        if (bookingType) {
          window.sessionStorage.setItem("ayodhya_booking_type", bookingType);
        }
        if (routeDest) {
          window.sessionStorage.setItem("ayodhya_route_destination", routeDest);
        }
        if (routePickup) {
          window.sessionStorage.setItem("ayodhya_route_pickup", routePickup);
        }
      } catch (e) {
        // Ignore storage errors in restricted browsing contexts
      }
    });
  });
}

function initContactPage() {
  var form = document.getElementById("enquiry-form");
  var callBtn = document.getElementById("call-now-btn");
  var whatsappBtn = document.getElementById("whatsapp-btn");
  var actionFeedback = document.getElementById("contact-action-feedback");
  var vehicleSelect = document.getElementById("vehicle-preference");
  var serviceSelect = document.getElementById("service-type");
  var returnDateGroup = document.getElementById("return-date-group");
  var returnDateInput = document.getElementById("return-date");
  var returnDateError = document.getElementById("error-return-date");
  var dateInput = document.getElementById("travel-date");
  var pickupInput = document.getElementById("pickup-location");
  var destinationInput = document.getElementById("destination");

  var params = new URLSearchParams(window.location.search);
  var requestedCategory = params.get("category");
  var categoryIntent = resolveCategoryBookingIntent(requestedCategory);

  if (vehicleSelect) {
    var requestedVehicle = params.get("vehicle") || categoryIntent.vehiclePreference;
    if (requestedVehicle) {
      var match = Array.prototype.find.call(vehicleSelect.options, function (opt) {
        return opt.value.toLowerCase() === requestedVehicle.toLowerCase();
      });
      if (match) {
        vehicleSelect.value = match.value;
      }
    }
  }

  var now = new Date();
  var yyyy = String(now.getFullYear());
  var mm = String(now.getMonth() + 1).padStart(2, "0");
  var dd = String(now.getDate()).padStart(2, "0");
  var todayIso = yyyy + "-" + mm + "-" + dd;

  if (dateInput) {
    dateInput.setAttribute("min", todayIso);
  }
  if (returnDateInput) {
    returnDateInput.setAttribute("min", todayIso);
  }

  function syncReturnDateVisibility() {
    if (!serviceSelect || !returnDateGroup || !returnDateInput) {
      return;
    }
    var isRoundTrip = shouldShowReturnDate(serviceSelect.value);
    returnDateGroup.hidden = !isRoundTrip;
    if (isRoundTrip) {
      returnDateInput.setAttribute("required", "required");
      var minDate = (dateInput && dateInput.value) ? dateInput.value : todayIso;
      returnDateInput.setAttribute("min", minDate);
    } else {
      returnDateInput.removeAttribute("required");
      returnDateInput.value = "";
      returnDateInput.classList.remove("is-invalid");
      returnDateInput.removeAttribute("aria-invalid");
      if (returnDateError) {
        returnDateError.textContent = "";
      }
    }
  }

  if (serviceSelect) {
    var requestedService = params.get("service") || params.get("bookingType") || categoryIntent.serviceType;
    if (!requestedService) {
      try {
        requestedService = window.sessionStorage.getItem("ayodhya_booking_type") || "";
        window.sessionStorage.removeItem("ayodhya_booking_type");
      } catch (e) {
        requestedService = "";
      }
    }
    if (requestedService) {
      var serviceMatch = Array.prototype.find.call(serviceSelect.options, function (opt) {
        return opt.value.toLowerCase() === requestedService.toLowerCase();
      });
      if (serviceMatch) {
        serviceSelect.value = serviceMatch.value;
      }
    }
    serviceSelect.addEventListener("change", syncReturnDateVisibility);
  }

  if (pickupInput || destinationInput) {
    try {
      var storedPickup = window.sessionStorage.getItem("ayodhya_route_pickup");
      var storedDest = window.sessionStorage.getItem("ayodhya_route_destination");
      if (storedPickup && pickupInput && !pickupInput.value) {
        pickupInput.value = storedPickup;
      }
      if (storedDest && destinationInput && !destinationInput.value) {
        destinationInput.value = storedDest;
      }
      window.sessionStorage.removeItem("ayodhya_route_pickup");
      window.sessionStorage.removeItem("ayodhya_route_destination");
    } catch (e) {
      // Ignore storage errors
    }
  }

  if (dateInput && returnDateInput) {
    dateInput.addEventListener("change", function () {
      var minVal = dateInput.value || todayIso;
      returnDateInput.setAttribute("min", minVal);
    });
  }

  syncReturnDateVisibility();

  if (callBtn) {
    if (SITE_CONFIG.phoneTel) {
      callBtn.setAttribute("href", "tel:" + SITE_CONFIG.phoneTel);
    }
    callBtn.addEventListener("click", function (event) {
      if (!SITE_CONFIG.phoneTel) {
        event.preventDefault();
        if (actionFeedback) {
          actionFeedback.hidden = false;
          actionFeedback.textContent = "Phone calling abhi chalu nahi hai. Kripya enquiry form bharein ya Tedhi Bazar, Ayodhya office par aayein.";
        }
      }
    });
  }

  if (whatsappBtn) {
    var defaultWaHref = buildWhatsAppLink(
      SITE_CONFIG.whatsappNumber,
      "Namaste Ayodhyadham Tour Travels, mujhe Ayodhya mein taxi booking ke baare mein jaankari chahiye."
    );
    if (defaultWaHref) {
      whatsappBtn.setAttribute("href", defaultWaHref);
      whatsappBtn.setAttribute("target", "_blank");
      whatsappBtn.setAttribute("rel", "noopener noreferrer");
    }

    whatsappBtn.addEventListener("click", function (event) {
      if (!SITE_CONFIG.whatsappNumber) {
        event.preventDefault();
        if (actionFeedback) {
          actionFeedback.hidden = false;
          actionFeedback.textContent = "WhatsApp number abhi update kiya ja raha hai. Kripya enquiry form bharkar apni details bhejein.";
        }
      }
    });
  }

  if (!form) {
    return;
  }

  var statusBox = document.getElementById("form-status");

  function clearFieldErrors() {
    var fields = form.querySelectorAll(".form-input, .form-select, .form-textarea");
    fields.forEach(function (field) {
      field.classList.remove("is-invalid");
      field.removeAttribute("aria-invalid");
    });
    var errorEls = form.querySelectorAll(".field-error");
    errorEls.forEach(function (el) {
      el.textContent = "";
    });
  }

  function applyFieldErrors(errors) {
    var map = {
      name: "error-name",
      phone: "error-phone",
      email: "error-email",
      serviceType: "error-service",
      pickupLocation: "error-pickup",
      destination: "error-destination",
      travelDate: "error-date",
      returnDate: "error-return-date",
      passengers: "error-passengers"
    };
    var fieldIds = {
      name: "customer-name",
      phone: "customer-phone",
      email: "customer-email",
      serviceType: "service-type",
      pickupLocation: "pickup-location",
      destination: "destination",
      travelDate: "travel-date",
      returnDate: "return-date",
      passengers: "passenger-count"
    };

    Object.keys(errors).forEach(function (key) {
      var errEl = document.getElementById(map[key]);
      var inputEl = document.getElementById(fieldIds[key]);
      if (errEl) {
        errEl.textContent = errors[key];
      }
      if (inputEl) {
        inputEl.classList.add("is-invalid");
        inputEl.setAttribute("aria-invalid", "true");
      }
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearFieldErrors();

    var payload = {
      name: form.elements.name ? form.elements.name.value : "",
      phone: form.elements.phone ? form.elements.phone.value : "",
      email: form.elements.email ? form.elements.email.value : "",
      serviceType: form.elements.serviceType ? form.elements.serviceType.value : "",
      vehiclePreference: form.elements.vehiclePreference ? form.elements.vehiclePreference.value : "",
      pickupLocation: form.elements.pickupLocation ? form.elements.pickupLocation.value : "",
      destination: form.elements.destination ? form.elements.destination.value : "",
      travelDate: form.elements.travelDate ? form.elements.travelDate.value : "",
      returnDate: form.elements.returnDate ? form.elements.returnDate.value : "",
      passengers: form.elements.passengers ? form.elements.passengers.value : "",
      notes: form.elements.notes ? form.elements.notes.value : ""
    };

    var result = validateEnquiry(payload);
    if (!result.valid) {
      applyFieldErrors(result.errors);
      if (statusBox) {
        statusBox.hidden = false;
        statusBox.className = "form-status is-error";
        statusBox.textContent = "Kripya laal rang se dikhaye gaye zaroori fields sahi se bharein.";
      }
      var firstInvalid = form.querySelector(".is-invalid");
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    var summaryLines = buildEnquirySummary(payload, SITE_CONFIG.businessName);
    var waHref = buildWhatsAppLink(SITE_CONFIG.whatsappNumber, summaryLines);
    var hasRealEmail = Boolean(SITE_CONFIG.email && !/\.example$/i.test(SITE_CONFIG.email));
    var mailtoSubject = encodeURIComponent("Booking Enquiry: " + payload.name.trim() + " — " + payload.serviceType + " (" + payload.travelDate + ")");
    var mailtoBody = encodeURIComponent(summaryLines);
    var mailHref = hasRealEmail ? ("mailto:" + SITE_CONFIG.email + "?subject=" + mailtoSubject + "&body=" + mailtoBody) : "";
    var telHref = SITE_CONFIG.phoneTel ? ("tel:" + SITE_CONFIG.phoneTel) : "";
    var routeText = payload.pickupLocation.trim() + " se " + payload.destination.trim();
    var dateSummary = shouldShowReturnDate(payload.serviceType) && payload.returnDate
      ? payload.travelDate + " se " + payload.returnDate
      : payload.travelDate;

    if (statusBox) {
      statusBox.hidden = false;
      statusBox.className = "form-status is-success";
      statusBox.innerHTML =
        "<strong>" + escapeHtml(payload.name.trim()) + " ji, aapki booking enquiry details taiyaar hain.</strong> " +
        "<strong>" + escapeHtml(payload.serviceType) + "</strong> (" + escapeHtml(routeText) + ", <span class=\"tabular-nums\">" + escapeHtml(dateSummary) + "</span>) ke liye hamari team se baat karne aur availability confirm karne ke liye neeche WhatsApp ya Call button par click karein." +
        '<div class="form-status-actions">' +
          (waHref
            ? '<a class="btn btn-whatsapp btn-sm" href="' + escapeHtml(waHref) + '" target="_blank" rel="noopener noreferrer">WhatsApp Par Bhejein</a>'
            : "") +
          (mailHref
            ? '<a class="btn btn-outline-maroon btn-sm" href="' + escapeHtml(mailHref) + '">Email Bhejein</a>'
            : (telHref
              ? '<a class="btn btn-outline-maroon btn-sm" href="' + escapeHtml(telHref) + '">Call Karein: ' + escapeHtml(SITE_CONFIG.phoneDisplay) + '</a>'
              : "")) +
        "</div>";
    }

    form.reset();
    syncReturnDateVisibility();
  });
}

function initCursorAnimation() {
  var finePointer = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!finePointer || reduceMotion || !document.body) {
    return;
  }
  if (document.querySelector(".cursor-halo")) {
    return;
  }

  var halo = document.createElement("div");
  halo.className = "cursor-halo";
  halo.setAttribute("aria-hidden", "true");

  var dot = document.createElement("div");
  dot.className = "cursor-dot";
  dot.setAttribute("aria-hidden", "true");

  document.body.appendChild(halo);
  document.body.appendChild(dot);

  var targetX = -100;
  var targetY = -100;
  var haloX = -100;
  var haloY = -100;
  var dotX = -100;
  var dotY = -100;
  var hasMoved = false;
  var isPressed = false;
  var rafId = 0;
  var lastSparkTime = 0;
  var lastSparkX = -100;
  var lastSparkY = -100;
  var activeSparks = 0;

  var interactiveSelector = "a, button, input, select, textarea, label, .vehicle-card, .bento-card, .highlight-card, .filter-tab, .btn";

  function renderFrame() {
    haloX = computeCursorLerp(haloX, targetX, 0.16);
    haloY = computeCursorLerp(haloY, targetY, 0.16);
    dotX = computeCursorLerp(dotX, targetX, 0.48);
    dotY = computeCursorLerp(dotY, targetY, 0.48);

    var haloScale = isPressed ? " scale(0.82)" : "";
    halo.style.transform = "translate3d(" + haloX.toFixed(2) + "px, " + haloY.toFixed(2) + "px, 0)" + haloScale;
    dot.style.transform = "translate3d(" + dotX.toFixed(2) + "px, " + dotY.toFixed(2) + "px, 0)";

    var haloSettled = Math.abs(targetX - haloX) < 0.2 && Math.abs(targetY - haloY) < 0.2;
    var dotSettled = Math.abs(targetX - dotX) < 0.2 && Math.abs(targetY - dotY) < 0.2;

    if (!haloSettled || !dotSettled) {
      rafId = window.requestAnimationFrame(renderFrame);
    } else {
      rafId = 0;
    }
  }

  function scheduleRender() {
    if (!rafId) {
      rafId = window.requestAnimationFrame(renderFrame);
    }
  }

  function spawnSpark(x, y) {
    if (activeSparks >= 14) {
      return;
    }
    activeSparks += 1;
    var spark = document.createElement("span");
    spark.className = "cursor-trail-spark";
    spark.setAttribute("aria-hidden", "true");
    var dx = (Math.random() - 0.5) * 18;
    var dy = -6 - Math.random() * 12;
    spark.style.setProperty("--cx", x.toFixed(1) + "px");
    spark.style.setProperty("--cy", y.toFixed(1) + "px");
    spark.style.setProperty("--dx", dx.toFixed(1) + "px");
    spark.style.setProperty("--dy", dy.toFixed(1) + "px");
    document.body.appendChild(spark);

    window.setTimeout(function () {
      if (spark.parentNode) {
        spark.parentNode.removeChild(spark);
      }
      activeSparks = Math.max(0, activeSparks - 1);
    }, 540);
  }

  function spawnClickRipple(x, y) {
    var ripple = document.createElement("span");
    ripple.className = "cursor-click-ripple";
    ripple.setAttribute("aria-hidden", "true");
    ripple.style.setProperty("--cx", x.toFixed(1) + "px");
    ripple.style.setProperty("--cy", y.toFixed(1) + "px");
    document.body.appendChild(ripple);

    window.setTimeout(function () {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 500);
  }

  document.addEventListener("mousemove", function (event) {
    targetX = event.clientX;
    targetY = event.clientY;

    if (!hasMoved) {
      hasMoved = true;
      haloX = dotX = targetX;
      haloY = dotY = targetY;
    }

    var targetEl = event.target instanceof Element ? event.target : null;
    var overIframe = Boolean(targetEl && targetEl.closest("iframe"));
    halo.classList.toggle("is-visible", !overIframe);
    dot.classList.toggle("is-visible", !overIframe);

    var isInteractive = Boolean(targetEl && targetEl.closest(interactiveSelector));
    halo.classList.toggle("is-hovering", isInteractive && !overIframe);

    var now = Date.now();
    var dist = Math.hypot(targetX - lastSparkX, targetY - lastSparkY);
    if (!overIframe && dist >= 14 && now - lastSparkTime >= 32) {
      lastSparkTime = now;
      lastSparkX = targetX;
      lastSparkY = targetY;
      spawnSpark(targetX, targetY);
    }

    scheduleRender();
  }, { passive: true });

  document.addEventListener("mousedown", function (event) {
    isPressed = true;
    halo.classList.add("is-pressed");
    if (hasMoved) {
      spawnClickRipple(event.clientX, event.clientY);
    }
    scheduleRender();
  });

  document.addEventListener("mouseup", function () {
    isPressed = false;
    halo.classList.remove("is-pressed");
    scheduleRender();
  });

  document.addEventListener("mouseleave", function () {
    halo.classList.remove("is-visible", "is-hovering", "is-pressed");
    dot.classList.remove("is-visible");
  });

  window.addEventListener("blur", function () {
    isPressed = false;
    halo.classList.remove("is-visible", "is-hovering", "is-pressed");
    dot.classList.remove("is-visible");
  });
}

function initApp() {
  initIntroCurtain();
  initHeaderScroll();
  initMobileDrawer();
  initLogoSlots();
  initScrollReveals();
  initCursorAnimation();
  syncDynamicContactText();
  initBookingIntentLinks();
  initVehiclesCatalogPage();
  initContactPage();
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SITE_CONFIG: SITE_CONFIG,
    SERVICE_AREAS: SERVICE_AREAS,
    VEHICLE_CATALOG: VEHICLE_CATALOG,
    filterVehicles: filterVehicles,
    validateEnquiry: validateEnquiry,
    shouldShowReturnDate: shouldShowReturnDate,
    buildEnquirySummary: buildEnquirySummary,
    buildWhatsAppLink: buildWhatsAppLink,
    buildVehicleEnquiryHref: buildVehicleEnquiryHref,
    resolveCategoryBookingIntent: resolveCategoryBookingIntent,
    computeCursorLerp: computeCursorLerp
  };
}
