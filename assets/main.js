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
  address: "Tedhi Bazar, Ayodhya Railway Crossing, Pin – 224123, Uttar Pradesh, India",
  phoneDisplay: "+91 92782 14121",
  phoneTel: "+919278214121",
  whatsappNumber: "919278214121",
  email: "info@ayodhyadhamtourtravels.example", // Replace with your official business email
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tedhi+Bazar+Ayodhya+Railway+Crossing+224123+Uttar+Pradesh+India"
};

/* Editable Fleet & Taxi Categories
   Note: Availability of specific models depends on booking schedule. */
var VEHICLE_CATALOG = [
  {
    id: "mercedes",
    name: "Mercedes",
    category: "sedan",
    categoryLabel: "Executive Sedan",
    seats: "4 Passengers + Driver",
    ac: "Full AC",
    luggage: "2–3 Bags",
    image: "assets/images/car-sedan.jpg",
    alt: "Ayodhya local aur outstation yatra ke liye silver Mercedes sedan taxi",
    description: "Local darshan, railway station pickup aur lambi highway yatra ke liye aaramdayak 4-seater AC Mercedes sedan.",
    availabilityNote: "Gaadi ki availability travel date ke hisaab se confirm karein."
  },
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    category: "sedan",
    categoryLabel: "Compact Sedan",
    seats: "4 Passengers + Driver",
    ac: "Full AC",
    luggage: "2 Bags",
    image: "assets/images/car-swift-dzire.jpg",
    alt: "Ayodhya cab booking ke liye white Swift Dzire compact sedan",
    description: "Couples, akele yatri aur local Ayodhya darshan ke liye achhi gaadi. AC seating ke saath city travel ke liye upyukt.",
    availabilityNote: "Gaadi ki availability travel date ke hisaab se confirm karein."
  },
  {
    id: "maruti-ertiga",
    name: "Maruti Ertiga",
    category: "mpv",
    categoryLabel: "Family 7-Seater",
    seats: "6–7 Passengers + Driver",
    ac: "Dual-Zone AC",
    luggage: "3–4 Bags",
    image: "assets/images/car-maruti-ertiga.png",
    alt: "Ayodhya family yatra ke liye white Maruti Ertiga 7-seater taxi",
    description: "Family aur group ke saath Ayodhya darshan aur doosre shehron ki yatra ke liye 3-row seating wali gaadi.",
    availabilityNote: "Gaadi ki availability travel date ke hisaab se confirm karein."
  },
  {
    id: "honda-elevate",
    name: "Honda Elevate",
    category: "mpv",
    categoryLabel: "Executive SUV",
    seats: "4 Seater + 1 Driver",
    ac: "Full AC",
    luggage: "3–4 Bags",
    image: "assets/images/car-honda-elevate.jpg",
    alt: "Ayodhya local aur outstation yatra ke liye silver Honda Elevate SUV taxi",
    description: "Ayodhya darshan aur outstation trips ke liye aaramdayak 4 seater + 1 driver AC SUV, jisme luggage ke liye achhi jagah milti hai.",
    availabilityNote: "Gaadi ki availability travel date ke hisaab se confirm karein."
  },
  {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "mpv",
    categoryLabel: "Executive Touring",
    seats: "6–7 Passengers + Driver",
    ac: "Climate Control AC",
    luggage: "4–5 Bags",
    image: "assets/images/car-innova-crysta.jpg",
    alt: "Family aur VIP yatra ke liye white Toyota Innova Crysta",
    description: "Lambi doori ki yatra aur parivaar ke saath safar ke liye spacious aur aaramdayak gaadi.",
    availabilityNote: "Gaadi ki availability travel date ke hisaab se confirm karein."
  },
  {
    id: "kia-carens",
    name: "Kia Carens",
    category: "mpv",
    categoryLabel: "Modern 7-Seater",
    seats: "6–7 Passengers + Driver",
    ac: "Roof-Vented AC",
    luggage: "3–4 Bags",
    image: "assets/images/car-kia-carens.png",
    alt: "Family yatra ke liye Kia Carens 7-seater car",
    description: "Family trip aur group travel ke liye modern 3-row seating wali gaadi, jisme safar ke dauran achhi jagah milti hai.",
    availabilityNote: "Gaadi ki availability travel date ke hisaab se confirm karein."
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    category: "group",
    categoryLabel: "Group Coach",
    seats: "12 / 17 / 20 Seater Options",
    ac: "High-Capacity AC",
    luggage: "Dedicated Carrier & Boot",
    image: "assets/images/car-tempo-traveller.jpeg",
    alt: "Group yatra ke liye white AC Tempo Traveller Ayodhya mein",
    description: "Bade parivaar, yatri mandali, senior citizen groups aur baraat ke mehmaanon ke liye pushback seats wala AC Tempo Traveller.",
    availabilityNote: "Advance booking par seating capacity confirm ki jati hai."
  },
  {
    id: "wedding-cars",
    name: "Wedding Cars",
    category: "other",
    categoryLabel: "Wedding & Shubh Vivah Fleet",
    seats: "Luxury Sedans · SUVs · Baraat Fleet",
    ac: "AC & Floral Decor Options",
    luggage: "Flexible Capacity",
    image: "assets/images/wedding-car-fleet.jpg",
    alt: "Shaadi-vivah ke liye saji hui white wedding car Ayodhya mein",
    description: "Shaadi mein dulha-dulhan ki car, parivaar ke liye gaadiyan aur baraat ke mehmaanon ke liye shuttle cars ki suvidha.",
    availabilityNote: "Travel dates aur zaroorat ke hisaab se book karein."
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

function buildVehicleEnquiryHref(vehicleName) {
  var base = "contact.html";
  if (!vehicleName) {
    return base + "#enquiry-form";
  }
  return base + "?vehicle=" + encodeURIComponent(vehicleName) + "#enquiry-form";
}

function buildWhatsAppLink(whatsappNumber, message) {
  var digits = String(whatsappNumber || "").replace(/\D/g, "");
  if (!digits) {
    return "";
  }
  var text = encodeURIComponent(message || "Namaste Ayodhyadham Tour Travels, mujhe Ayodhya mein taxi booking ke baare mein jaankari chahiye.");
  return "https://wa.me/" + digits + "?text=" + text;
}

function validateEnquiry(data) {
  var errors = {};
  var name = String((data && data.name) || "").trim();
  var phone = String((data && data.phone) || "").trim();
  var email = String((data && data.email) || "").trim();
  var serviceType = String((data && data.serviceType) || "").trim();
  var pickupLocation = String((data && data.pickupLocation) || "").trim();
  var travelDate = String((data && data.travelDate) || "").trim();

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
    errors.serviceType = "Kripya travel service chunein.";
  }

  if (pickupLocation.length < 2) {
    errors.pickupLocation = "Kripya pickup location likhein.";
  }

  if (!travelDate) {
    errors.travelDate = "Kripya apni yatra ki date chunein.";
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
  if (!toggleBtn || !drawer) {
    return;
  }

  function setDrawerState(open) {
    toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    toggleBtn.setAttribute("aria-label", open ? "Menu band karein" : "Menu kholein");
    toggleBtn.innerHTML = open
      ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
      : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
  }

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
  var grid = document.getElementById("vehicles-catalog-grid");
  var countEl = document.getElementById("fleet-count");
  var filterButtons = document.querySelectorAll(".filter-tab[data-filter]");
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

function initContactPage() {
  var form = document.getElementById("enquiry-form");
  var callBtn = document.getElementById("call-now-btn");
  var whatsappBtn = document.getElementById("whatsapp-btn");
  var actionFeedback = document.getElementById("contact-action-feedback");
  var vehicleSelect = document.getElementById("vehicle-preference");

  if (vehicleSelect) {
    var params = new URLSearchParams(window.location.search);
    var requestedVehicle = params.get("vehicle");
    if (requestedVehicle) {
      var match = Array.prototype.find.call(vehicleSelect.options, function (opt) {
        return opt.value.toLowerCase() === requestedVehicle.toLowerCase();
      });
      if (match) {
        vehicleSelect.value = match.value;
      }
    }
  }

  var dateInput = document.getElementById("travel-date");
  if (dateInput) {
    var now = new Date();
    var yyyy = String(now.getFullYear());
    var mm = String(now.getMonth() + 1).padStart(2, "0");
    var dd = String(now.getDate()).padStart(2, "0");
    dateInput.setAttribute("min", yyyy + "-" + mm + "-" + dd);
  }

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
      travelDate: "error-date"
    };
    var fieldIds = {
      name: "customer-name",
      phone: "customer-phone",
      email: "customer-email",
      serviceType: "service-type",
      pickupLocation: "pickup-location",
      travelDate: "travel-date"
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
      name: form.elements.name.value,
      phone: form.elements.phone.value,
      email: form.elements.email.value,
      serviceType: form.elements.serviceType.value,
      vehiclePreference: form.elements.vehiclePreference.value,
      pickupLocation: form.elements.pickupLocation.value,
      travelDate: form.elements.travelDate.value,
      notes: form.elements.notes.value
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

    var summaryLines = [
      "Travel Enquiry — " + SITE_CONFIG.businessName,
      "Naam: " + payload.name.trim(),
      "Mobile: " + payload.phone.trim(),
      "Service: " + payload.serviceType,
      "Pasand Ki Gaadi: " + (payload.vehiclePreference || "Koi Bhi Available"),
      "Pickup Location: " + payload.pickupLocation.trim(),
      "Travel Date: " + payload.travelDate,
      payload.notes.trim() ? "Khaas Jaankari: " + payload.notes.trim() : ""
    ].filter(Boolean).join("\n");

    var waHref = buildWhatsAppLink(SITE_CONFIG.whatsappNumber, summaryLines);
    var hasRealEmail = Boolean(SITE_CONFIG.email && !/\.example$/i.test(SITE_CONFIG.email));
    var mailtoSubject = encodeURIComponent("Booking Enquiry: " + payload.name.trim() + " (" + payload.travelDate + ")");
    var mailtoBody = encodeURIComponent(summaryLines);
    var mailHref = hasRealEmail ? ("mailto:" + SITE_CONFIG.email + "?subject=" + mailtoSubject + "&body=" + mailtoBody) : "";
    var telHref = SITE_CONFIG.phoneTel ? ("tel:" + SITE_CONFIG.phoneTel) : "";

    if (statusBox) {
      statusBox.hidden = false;
      statusBox.className = "form-status is-success";
      statusBox.innerHTML =
        "<strong>" + escapeHtml(payload.name.trim()) + " ji, aapki booking details taiyaar hain.</strong> " +
        "<strong>" + escapeHtml(payload.vehiclePreference || payload.serviceType) + "</strong> (<span class=\"tabular-nums\">" + escapeHtml(payload.travelDate) + "</span>) ke liye booking confirm karne ke liye neeche WhatsApp ya Call button par click karein." +
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
  initVehiclesCatalogPage();
  initContactPage();
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    SITE_CONFIG: SITE_CONFIG,
    VEHICLE_CATALOG: VEHICLE_CATALOG,
    filterVehicles: filterVehicles,
    validateEnquiry: validateEnquiry,
    buildWhatsAppLink: buildWhatsAppLink,
    buildVehicleEnquiryHref: buildVehicleEnquiryHref,
    computeCursorLerp: computeCursorLerp
  };
}
