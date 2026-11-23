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
  buildWhatsAppLink,
  buildVehicleEnquiryHref,
  computeCursorLerp,
} = require('../assets/main.js');

test('SITE_CONFIG retains required business name, Tedhi Bazar address, call number, and distinct WhatsApp number', () => {
  assert.equal(SITE_CONFIG.businessName, 'Ayodhyadham Tour Travels');
  assert.equal(SITE_CONFIG.hostName, 'Shyam Gupta');
  assert.match(SITE_CONFIG.address, /Tedhi Bazar, Ayodhya Railway Crossing/i);
  assert.match(SITE_CONFIG.address, /224123/);
  assert.equal(SITE_CONFIG.phoneTel, '+919278214121');
  assert.match(SITE_CONFIG.phoneDisplay, /92782\s*14121/);
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

test('VEHICLE_CATALOG includes all required vehicle categories', () => {
  const names = VEHICLE_CATALOG.map((v: { name: string }) => v.name);
  for (const required of [
    'Mercedes',
    'Swift Dzire',
    'Maruti Ertiga',
    'Honda Elevate',
    'Toyota Innova Crysta',
    'Kia Carens',
    'Tempo Traveller',
    'Wedding Cars',
  ]) {
    assert.ok(names.includes(required), `Missing vehicle: ${required}`);
  }
  const elevate = VEHICLE_CATALOG.find((v: { name: string }) => v.name === 'Honda Elevate');
  assert.equal(elevate.seats, '4 Seater + 1 Driver');
  assert.equal(elevate.image, 'assets/images/car-honda-elevate.jpg');
  const ertiga = VEHICLE_CATALOG.find((v: { name: string }) => v.name === 'Maruti Ertiga');
  assert.equal(ertiga.image, 'assets/images/car-maruti-ertiga.png');
});

test('filterVehicles filters accurately by category and returns full list on "all"', () => {
  const all = filterVehicles(VEHICLE_CATALOG, 'all');
  assert.equal(all.length, VEHICLE_CATALOG.length);

  const sedans = filterVehicles(VEHICLE_CATALOG, 'sedan');
  assert.equal(sedans.length, 2);
  assert.ok(sedans.every((v: { category: string }) => v.category === 'sedan'));

  const mpvs = filterVehicles(VEHICLE_CATALOG, 'mpv');
  assert.equal(mpvs.length, 4);

  const group = filterVehicles(VEHICLE_CATALOG, 'group');
  assert.equal(group.length, 1);
  assert.equal(group[0].name, 'Tempo Traveller');
});

test('buildVehicleEnquiryHref encodes vehicle name cleanly', () => {
  assert.equal(
    buildVehicleEnquiryHref('Toyota Innova Crysta'),
    'contact.html?vehicle=Toyota%20Innova%20Crysta#enquiry-form'
  );
  assert.equal(buildVehicleEnquiryHref(''), 'contact.html#enquiry-form');
});

test('buildWhatsAppLink handles unconfigured and configured numbers safely', () => {
  assert.equal(buildWhatsAppLink('', 'Hello'), '');
  assert.equal(
    buildWhatsAppLink('+91 98765-43210', 'Taxi enquiry'),
    'https://wa.me/919876543210?text=Taxi%20enquiry'
  );
});

test('validateEnquiry rejects empty/invalid inputs and accepts valid enquiries', () => {
  const emptyResult = validateEnquiry({
    name: '',
    phone: '123',
    email: 'invalid-email',
    serviceType: '',
    pickupLocation: '',
    travelDate: '',
  });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.phone);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.serviceType);
  assert.ok(emptyResult.errors.pickupLocation);
  assert.ok(emptyResult.errors.travelDate);

  const validResult = validateEnquiry({
    name: 'Rajesh Sharma',
    phone: '+91 9876543210',
    email: 'rajesh@example.com',
    serviceType: 'Local Ayodhya Taxi',
    pickupLocation: 'Ayodhya Dham Junction',
    travelDate: '2026-12-01',
  });
  assert.equal(validResult.valid, true);
  assert.deepEqual(validResult.errors, {});
});

test('computeCursorLerp interpolates and clamps factor cleanly', () => {
  assert.equal(computeCursorLerp(0, 100, 0.2), 20);
  assert.equal(computeCursorLerp(50, 100, 2), 100);
  assert.equal(computeCursorLerp(50, 100, -1), 50);
});
