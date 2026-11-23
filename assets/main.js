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
    alt: "Executive silver Mercedes sedan taxi parked on stone driveway for Ayodhya local and outstation travel",
    description: "Refined 4-seater AC Mercedes sedan suited for comfortable local darshan, railway station transfers, and quiet highway journeys.",
    availabilityNote: "Model subject to fleet availability at booking."
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
    alt: "White Swift Dzire compact sedan taxi ready for Ayodhya cab booking",
    description: "Practical, fuel-efficient compact sedan ideal for couples, solo travellers, and smooth navigation through Ayodhya city routes.",
    availabilityNote: "Model subject to fleet availability at booking."
  },
  {
    id: "maruti-ertiga",
    name: "Maruti Ertiga",
    category: "mpv",
    categoryLabel: "Family MPV",
    seats: "6–7 Passengers + Driver",
    ac: "Dual-Zone AC",
    luggage: "3–4 Bags",
    image: "assets/images/car-maruti-ertiga.png",
    alt: "White Maruti Ertiga 7-seater family MPV taxi with Ayodhya backdrop for group and family travel",
    description: "Versatile 7-seater family MPV offering generous legroom and balanced comfort for family pilgrimages and outstation trips.",
    availabilityNote: "Model subject to fleet availability at booking."
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
    alt: "Silver Honda Elevate SUV taxi parked for Ayodhya local and outstation travel",
    description: "Refined 4-seater + 1 driver AC SUV offering smooth highway stability, upright seating, and comfortable luggage space for Ayodhya and outstation trips.",
    availabilityNote: "Model subject to fleet availability at booking."
  },
  {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "mpv",
    categoryLabel: "Executive MPV",
    seats: "6–7 Passengers + Driver",
    ac: "Climate Control AC",
    luggage: "4–5 Bags",
    image: "assets/images/car-innova-crysta.jpg",
    alt: "Pearl white Toyota Innova Crysta executive MPV at heritage hotel portico",
    description: "Premium executive MPV featuring plush interiors and supportive seating for VIP guests, corporate visits, and long family tours.",
    availabilityNote: "Model subject to fleet availability at booking."
  },
  {
    id: "kia-carens",
    name: "Kia Carens",
    category: "mpv",
    categoryLabel: "Modern MPV",
    seats: "6–7 Passengers + Driver",
    ac: "Roof-Vented AC",
    luggage: "3–4 Bags",
    image: "assets/images/car-kia-carens.png",
    alt: "Royal blue Kia Carens modern 7-seater MPV for comfortable regional travel",
    description: "Contemporary 3-row MPV combining quiet cabin acoustics, easy third-row access, and refined comfort for family travel.",
    availabilityNote: "Model subject to fleet availability at booking."
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
    alt: "White AC Tempo Traveller tourist coach for group yatras and wedding guests in Ayodhya",
    description: "Spacious pushback-seat tourist coach tailored for joint families, pilgrimage yatras, corporate outings, and Baraat guest movement.",
    availabilityNote: "Seating configuration confirmed upon advance reservation."
  },
  {
    id: "wedding-cars",
    name: "Wedding Cars",
    category: "other",
    categoryLabel: "Wedding & Event Fleet",
    seats: "Luxury Sedans · SUVs · Baraat Fleet",
    ac: "AC & Floral Decor Options",
    luggage: "Flexible Capacity",
    image: "assets/images/wedding-car-fleet.jpg",
    alt: "Decorated white luxury wedding sedan and custom fleet arrangements in Ayodhya",
    description: "Dedicated wedding cars for Shubh Vivah, groom arrival sedans, VIP family vehicles, and coordinated guest shuttle arrangements across Ayodhya.",
    availabilityNote: "Arranged on request based on travel dates and group size."
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
  var text = encodeURIComponent(message || "Hello Ayodhyadham Tour Travels, I would like to enquire about a taxi booking.");
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
    errors.name = "Please enter your full name (at least 2 characters).";
  }

  var phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address or leave it blank.";
  }

  if (!serviceType) {
    errors.serviceType = "Please select a travel service.";
  }

  if (pickupLocation.length < 2) {
    errors.pickupLocation = "Please enter your pickup location.";
  }

  if (!travelDate) {
    errors.travelDate = "Please select your preferred travel date.";
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
    toggleBtn.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
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
          '<a class="btn btn-saffron btn-sm" href="' + escapeHtml(href) + '">Enquire for ' + escapeHtml(vehicle.name) + '</a>' +
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
      countEl.textContent = "Showing " + list.length + (list.length === 1 ? " category" : " categories");
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
    var today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
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
          actionFeedback.textContent = "Direct phone calling will be active once our contact number is published. Please submit the enquiry form or visit our Tedhi Bazar, Ayodhya office.";
        }
      }
    });
  }

  if (whatsappBtn) {
    var defaultWaHref = buildWhatsAppLink(
      SITE_CONFIG.whatsappNumber,
      "Hello Ayodhyadham Tour Travels, I would like to enquire about taxi / travel booking in Ayodhya."
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
          actionFeedback.textContent = "WhatsApp booking will be active once our phone number is added. Please submit the enquiry form beside this panel to send your request.";
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
        statusBox.textContent = "Please review and complete the highlighted required fields before submitting.";
      }
      var firstInvalid = form.querySelector(".is-invalid");
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    var summaryLines = [
      "Travel Enquiry — " + SITE_CONFIG.businessName,
      "Name: " + payload.name.trim(),
      "Mobile: " + payload.phone.trim(),
      "Service: " + payload.serviceType,
      "Preferred Vehicle: " + (payload.vehiclePreference || "Any Available"),
      "Pickup Location: " + payload.pickupLocation.trim(),
      "Travel Date: " + payload.travelDate,
      payload.notes.trim() ? "Notes: " + payload.notes.trim() : ""
    ].filter(Boolean).join("\n");

    var waHref = buildWhatsAppLink(SITE_CONFIG.whatsappNumber, summaryLines);
    var mailtoSubject = encodeURIComponent("Booking Enquiry from " + payload.name.trim() + " (" + payload.travelDate + ")");
    var mailtoBody = encodeURIComponent(summaryLines);
    var mailHref = "mailto:" + SITE_CONFIG.email + "?subject=" + mailtoSubject + "&body=" + mailtoBody;

    if (statusBox) {
      statusBox.hidden = false;
      statusBox.className = "form-status is-success";
      statusBox.innerHTML =
        "<strong>Enquiry details verified for " + escapeHtml(payload.name.trim()) + ".</strong> " +
        "Your request for <strong>" + escapeHtml(payload.vehiclePreference || payload.serviceType) + "</strong> on <span class=\"tabular-nums\">" + escapeHtml(payload.travelDate) + "</span> is ready. " +
        (waHref
          ? "Send directly via WhatsApp or email below for confirmation."
          : "You can send these details directly via email below or visit our Tedhi Bazar, Ayodhya office.") +
        '<div class="form-status-actions">' +
          (waHref
            ? '<a class="btn btn-whatsapp btn-sm" href="' + escapeHtml(waHref) + '" target="_blank" rel="noopener noreferrer">Send on WhatsApp</a>'
            : "") +
          '<a class="btn btn-outline-maroon btn-sm" href="' + escapeHtml(mailHref) + '">Send via Email</a>' +
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
