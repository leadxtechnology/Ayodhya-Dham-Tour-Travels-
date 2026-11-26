import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const {
  SITE_CONFIG,
  SERVICE_AREAS,
  VEHICLE_CATALOG,
  filterVehicles,
  validateEnquiry,
  shouldShowReturnDate,
  buildEnquirySummary,
  buildWhatsAppLink,
  buildVehicleEnquiryHref,
  resolveCategoryBookingIntent,
  computeCursorLerp,
} = require('../assets/main.js');

test('SITE_CONFIG retains required business name, Tedhi Bazar address, call number, and distinct WhatsApp number', () => {
  assert.equal(SITE_CONFIG.businessName, 'Ayodhyadham Tour Travels');
  assert.equal(SITE_CONFIG.hostName, 'Shyam Gupta');
  assert.match(SITE_CONFIG.address, /Tedhi Bazar, Ayodhya Railway Crossing/i);
  assert.match(SITE_CONFIG.address, /224123/);
  assert.equal(SITE_CONFIG.phoneTel, '+919278214121');
  assert.match(SITE_CONFIG.phoneDisplay, /92782\s*14121/);
  assert.equal(SITE_CONFIG.whatsappNumber, '919120671665');
  assert.equal(SITE_CONFIG.topWhatsappNumber, '919120671665');
  assert.notEqual(SITE_CONFIG.topWhatsappNumber, SITE_CONFIG.phoneTel.replace(/\D/g, ''));
  assert.equal(
    buildWhatsAppLink(SITE_CONFIG.topWhatsappNumber, SITE_CONFIG.topWhatsappMessage),
    'https://wa.me/919120671665?text=Namaste%2C%20mujhe%20Ayodhyadham%20Tour%20Travels%20se%20taxi%20booking%20ke%20baare%20mein%20jaankari%20chahiye.'
  );
});

test('SERVICE_AREAS lists all 12 expected cities in exact sequence', () => {
  assert.deepEqual(SERVICE_AREAS, [
    'Ayodhya',
    'Lucknow',
    'Varanasi',
    'Prayagraj',
    'Gorakhpur',
    'Gonda',
    'Kanpur',
    'Delhi',
    'Agra',
    'Mathura',
    'Chitrakoot',
    'Naimisharanya',
  ]);
});

test('VEHICLE_CATALOG cleanly separates all 4 vehicle categories', () => {
  const names = VEHICLE_CATALOG.map((v: { name: string }) => v.name);
  for (const required of [
    'Maruti Swift Dzire',
    'Hyundai Aura',
    'Maruti Ertiga',
    'Toyota Fortuner Black',
    'Toyota Innova Crysta',
    'Kia Carens',
    'Honda Elevate',
    '12 Seater Tempo Traveller',
    '17 Seater Tempo Traveller',
    'Audi (Subject to Availability)',
    'Premium Sedan, SUVs & Innova Crysta (Wedding)',
  ]) {
    assert.ok(names.includes(required), `Missing vehicle: ${required}`);
  }
  const aura = VEHICLE_CATALOG.find((v: { name: string }) => v.name === 'Hyundai Aura');
  assert.equal(aura.image, '/assets/aistudio/Hyundai_Aura_White_Studio_Showcase_21869af2.png');
  assert.equal(aura.category, 'sedan');

  const fortuner = VEHICLE_CATALOG.find((v: { name: string }) => v.name === 'Toyota Fortuner Black');
  assert.equal(fortuner.image, 'assets/images/car-toyota-fortuner-black.jpg');
  assert.equal(fortuner.category, 'family');

  const elevate = VEHICLE_CATALOG.find((v: { name: string }) => v.name === 'Honda Elevate');
  assert.equal(elevate.seats, '4 Seater + 1 Driver');
  assert.equal(elevate.image, 'assets/images/car-honda-elevate.png');
  assert.equal(elevate.category, 'family');

  const ertiga = VEHICLE_CATALOG.find((v: { name: string }) => v.name === 'Maruti Ertiga');
  assert.equal(ertiga.image, 'assets/images/car-maruti-suzuki-ertiga.png');
  assert.equal(ertiga.category, 'family');

  const urbania = VEHICLE_CATALOG.find((v: { name: string }) => v.name === '17 Seater Tempo Traveller');
  assert.equal(urbania.image, 'assets/images/car-urbania-tempo-traveller.png');
  assert.equal(urbania.category, 'tempo');

  const audi = VEHICLE_CATALOG.find((v: { name: string }) => v.name === 'Audi (Subject to Availability)');
  assert.equal(audi.image, 'assets/images/wedding-audi.png');
  assert.equal(audi.category, 'wedding');
});

test('filterVehicles filters accurately across sedan, family, tempo, and wedding categories', () => {
  const all = filterVehicles(VEHICLE_CATALOG, 'all');
  assert.equal(all.length, VEHICLE_CATALOG.length);

  const sedans = filterVehicles(VEHICLE_CATALOG, 'sedan');
  assert.equal(sedans.length, 2);
  assert.ok(sedans.every((v: { category: string }) => v.category === 'sedan'));

  const family = filterVehicles(VEHICLE_CATALOG, 'family');
  assert.equal(family.length, 5);
  assert.ok(family.every((v: { category: string }) => v.category === 'family'));

  const tempo = filterVehicles(VEHICLE_CATALOG, 'tempo');
  assert.equal(tempo.length, 2);
  assert.ok(tempo.every((v: { category: string }) => v.category === 'tempo'));

  const wedding = filterVehicles(VEHICLE_CATALOG, 'wedding');
  assert.equal(wedding.length, 2);
  assert.ok(wedding.every((v: { category: string }) => v.category === 'wedding'));
});

test('buildVehicleEnquiryHref and resolveCategoryBookingIntent encode and resolve category intent cleanly', () => {
  assert.equal(
    buildVehicleEnquiryHref('Toyota Innova Crysta'),
    'contact.html?vehicle=Toyota%20Innova%20Crysta#enquiry-form'
  );
  assert.equal(
    buildVehicleEnquiryHref('', 'Sedan Taxi'),
    'contact.html?category=Sedan%20Taxi#enquiry-form'
  );
  assert.equal(buildVehicleEnquiryHref(''), 'contact.html#enquiry-form');

  assert.deepEqual(resolveCategoryBookingIntent('Sedan Taxi'), {
    vehiclePreference: 'Sedan Taxi',
    serviceType: '',
  });
  assert.deepEqual(resolveCategoryBookingIntent('Big Family & SUV Car'), {
    vehiclePreference: 'Big Family & SUV Car',
    serviceType: '',
  });
  assert.deepEqual(resolveCategoryBookingIntent('Tempo Traveller'), {
    vehiclePreference: 'Tempo Traveller',
    serviceType: 'Tempo Traveller Booking',
  });
  assert.deepEqual(resolveCategoryBookingIntent('Wedding Cars'), {
    vehiclePreference: 'Wedding Cars',
    serviceType: 'Wedding Booking',
  });
});

test('buildWhatsAppLink handles unconfigured and configured numbers safely', () => {
  assert.equal(buildWhatsAppLink('', 'Hello'), '');
  assert.equal(
    buildWhatsAppLink('+91 98765-43210', 'Taxi enquiry'),
    'https://wa.me/919876543210?text=Taxi%20enquiry'
  );
});

test('shouldShowReturnDate returns true only for Round Trip Taxi', () => {
  assert.equal(shouldShowReturnDate('Round Trip Taxi'), true);
  assert.equal(shouldShowReturnDate('One Way Taxi'), false);
  assert.equal(shouldShowReturnDate('Local Ayodhya Darshan'), false);
  assert.equal(shouldShowReturnDate(''), false);
});

test('validateEnquiry handles One Way and Round Trip Taxi rules cleanly', () => {
  const emptyResult = validateEnquiry({
    name: '',
    phone: '123',
    email: 'invalid-email',
    serviceType: '',
    pickupLocation: '',
    destination: '',
    travelDate: '',
  });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.phone);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.serviceType);
  assert.ok(emptyResult.errors.pickupLocation);
  assert.ok(emptyResult.errors.destination);
  assert.ok(emptyResult.errors.travelDate);

  const oneWayResult = validateEnquiry({
    name: 'Rajesh Sharma',
    phone: '+91 9876543210',
    email: 'rajesh@example.com',
    serviceType: 'One Way Taxi',
    pickupLocation: 'Ayodhya Dham Junction',
    destination: 'Lucknow',
    travelDate: '2026-12-01',
    passengers: '4',
  });
  assert.equal(oneWayResult.valid, true);
  assert.deepEqual(oneWayResult.errors, {});

  const roundTripMissingReturn = validateEnquiry({
    name: 'Rajesh Sharma',
    phone: '+91 9876543210',
    serviceType: 'Round Trip Taxi',
    pickupLocation: 'Ayodhya',
    destination: 'Varanasi',
    travelDate: '2026-12-05',
    returnDate: '',
  });
  assert.equal(roundTripMissingReturn.valid, false);
  assert.ok(roundTripMissingReturn.errors.returnDate);

  const roundTripEarlierReturn = validateEnquiry({
    name: 'Rajesh Sharma',
    phone: '+91 9876543210',
    serviceType: 'Round Trip Taxi',
    pickupLocation: 'Ayodhya',
    destination: 'Varanasi',
    travelDate: '2026-12-05',
    returnDate: '2026-12-04',
  });
  assert.equal(roundTripEarlierReturn.valid, false);
  assert.ok(roundTripEarlierReturn.errors.returnDate);

  const roundTripValid = validateEnquiry({
    name: 'Rajesh Sharma',
    phone: '+91 9876543210',
    serviceType: 'Round Trip Taxi',
    pickupLocation: 'Ayodhya',
    destination: 'Varanasi',
    travelDate: '2026-12-05',
    returnDate: '2026-12-07',
    passengers: '6',
  });
  assert.equal(roundTripValid.valid, true);

  const badPassengers = validateEnquiry({
    name: 'Rajesh Sharma',
    phone: '+91 9876543210',
    serviceType: 'One Way Taxi',
    pickupLocation: 'Ayodhya',
    destination: 'Kanpur',
    travelDate: '2026-12-05',
    passengers: '0',
  });
  assert.equal(badPassengers.valid, false);
  assert.ok(badPassengers.errors.passengers);
});

test('buildEnquirySummary formats complete Hinglish WhatsApp enquiry and omits empty optional fields', () => {
  const oneWayMsg = buildEnquirySummary({
    name: 'Amit Verma',
    phone: '9876543210',
    serviceType: 'One Way Taxi',
    pickupLocation: 'Tedhi Bazar, Ayodhya',
    destination: 'Lucknow Airport',
    travelDate: '2026-12-10',
    returnDate: '2026-12-15',
    passengers: '3',
    vehiclePreference: 'Honda Elevate',
    notes: 'Morning pickup',
  });
  assert.equal(
    oneWayMsg,
    [
      'Namaste Ayodhyadham Tour Travels!',
      'Mujhe taxi booking ke liye enquiry karni hai.',
      'Name: Amit Verma',
      'Mobile Number: 9876543210',
      'Booking Type: One Way Taxi',
      'Pickup Location: Tedhi Bazar, Ayodhya',
      'Destination: Lucknow Airport',
      'Travel Date: 2026-12-10',
      'Passengers: 3',
      'Preferred Vehicle: Honda Elevate',
      'Additional Requirements: Morning pickup',
      'Please mujhe booking aur fare ki details batayein.',
      'Thank you!',
    ].join('\n\n')
  );
  assert.doesNotMatch(oneWayMsg, /Return Date:/);

  const waUrl = buildWhatsAppLink(SITE_CONFIG.whatsappNumber, oneWayMsg);
  assert.ok(waUrl.startsWith('https://wa.me/919120671665?text='));
  assert.equal(decodeURIComponent(waUrl.split('?text=')[1]), oneWayMsg);

  const roundTripMinimalMsg = buildEnquirySummary({
    name: 'Amit Verma',
    phone: '9876543210',
    serviceType: 'Round Trip Taxi',
    pickupLocation: 'Ayodhya',
    destination: 'Varanasi',
    travelDate: '2026-12-10',
    returnDate: '2026-12-12',
    passengers: '',
    vehiclePreference: '',
    notes: '',
  });
  assert.match(roundTripMinimalMsg, /Booking Type: Round Trip Taxi/);
  assert.match(roundTripMinimalMsg, /Return Date: 2026-12-12/);
  assert.doesNotMatch(roundTripMinimalMsg, /Passengers:/);
  assert.doesNotMatch(roundTripMinimalMsg, /Preferred Vehicle:/);
  assert.doesNotMatch(roundTripMinimalMsg, /Additional Requirements:/);
  assert.doesNotMatch(roundTripMinimalMsg, /undefined/);
});

test('computeCursorLerp interpolates and clamps factor cleanly', () => {
  assert.equal(computeCursorLerp(0, 100, 0.2), 20);
  assert.equal(computeCursorLerp(50, 100, 2), 100);
  assert.equal(computeCursorLerp(50, 100, -1), 50);
});
