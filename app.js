// app.js - Pogung PathFinder Application Script

document.addEventListener('DOMContentLoaded', function() {
  console.log('Pogung PathFinder loaded');
  
  // Inisialisasi elemen-elemen interaktif
  initApplication();
  
  // Tambahkan event listener untuk tombol
  setupEventListeners();
});

function initApplication() {
  // Fungsi inisialisasi aplikasi
  console.log('Initializing Pogung PathFinder...');
  
  // Update tanggal terakhir secara dinamis
  updateLastUpdated();
  
  // Tambahkan animasi hover untuk card
  animateCards();
}

function updateLastUpdated() {
  // Update tanggal terakhir secara otomatis
  const lastUpdatedElement = document.querySelector('.alert-warning strong');
  if (lastUpdatedElement) {
    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('id-ID', options);
    lastUpdatedElement.textContent = `Update Terakhir: ${formattedDate}`;
  }
}

function animateCards() {
  // Tambahkan efek hover pada card
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });
  });
}

function setupEventListeners() {
  // Setup semua event listener
  console.log('Setting up event listeners...');
  
  // Tambahkan event listener untuk tombol admin
  const adminBtn = document.querySelector('.btn');
  if (adminBtn) {
    adminBtn.addEventListener('click', function(e) {
      console.log('Admin button clicked');
      // Anda bisa menambahkan tracking atau logika lain di sini
    });
  }
  
  // Tambahkan event listener untuk QR code
  const qrCode = document.querySelector('.qr-code');
  if (qrCode) {
    qrCode.addEventListener('click', function() {
      console.log('QR Code clicked');
      // Bisa ditambahkan fungsi untuk memperbesar QR code
    });
  }
}

// Fungsi untuk menangani resize window
window.addEventListener('resize', function() {
  console.log('Window resized');
  // Anda bisa menambahkan logika responsive di sini
});

// Fungsi tambahan untuk fitur yang mungkin dikembangkan
function showMapDetails() {
  // Fungsi untuk menampilkan detail peta
  console.log('Showing map details...');
}

function reportPortalChange() {
  // Fungsi untuk melaporkan perubahan portal
  console.log('Preparing portal change report...');
  // Implementasi bisa ditambahkan untuk form laporan
}