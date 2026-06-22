<template>
  <div id="app">

    <!-- HEADER -->
    <header :class="['header', { scrolled: isScrolled }]" id="site-header">
      <div class="container">
        <nav class="nav">
          <a href="#" class="nav-logo">Özcan Tağa</a>
          <ul class="nav-links">
            <li><a href="#showcase-hotel">Butik Otel</a></li>
            <li><a href="#showcase-restaurant">Restoran</a></li>
            <li><a href="#services">Hizmetler</a></li>
            <li><a href="#about">Hakkımda</a></li>
            <li>
              <a :href="whatsappLink" target="_blank" class="btn btn-whatsapp" style="padding: 0.6rem 1.4rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                İletişim
              </a>
            </li>
          </ul>
          <button class="menu-toggle" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Menü">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    </header>

    <!-- HERO SECTION -->
    <section class="hero" id="hero">
      <div class="hero-bg">
        <img src="/hotel_hero.png" alt="Alaçatı Butik Otel" />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="overline">Web Designer — Cyprus International University</span>
        <h1>Rezervasyon Getiren<br>Web Deneyimleri</h1>
        <p>Sadece güzel görünen değil, gerçekten rezervasyon ve müşteri kazandıran web siteleri tasarlıyorum. Butik oteller, restoranlar ve premium markalar için.</p>
        <div class="hero-cta-group">
          <a href="#showcase-hotel" class="btn btn-gold">Projeleri İncele</a>
          <a :href="whatsappLink" target="_blank" class="btn btn-outline-light">Teklif Al</a>
        </div>

        <!-- Inline Booking Form Demo -->
        <div class="booking-form">
          <div class="form-group">
            <label>Giriş Tarihi</label>
            <input type="date" />
          </div>
          <div class="form-group">
            <label>Çıkış Tarihi</label>
            <input type="date" />
          </div>
          <div class="form-group">
            <label>Misafir</label>
            <select>
              <option>2 Yetişkin</option>
              <option>1 Yetişkin</option>
              <option>3 Yetişkin</option>
              <option>4 Yetişkin</option>
            </select>
          </div>
          <button class="btn btn-gold">Müsaitlik Sorgula</button>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SHOWCASE: BOUTIQUE HOTEL
         ========================================== -->
    <section id="showcase-hotel" class="container">
      <div class="section-header fade-up">
        <span class="overline">Portfolyo — Butik Otel Teması</span>
        <h2>Deneyim Satıyoruz,<br>Oda Değil</h2>
        <div class="divider"></div>
        <p>İnsanlar oda değil, deneyim satın alıyor. İşte müşterilerinize sunabileceğiniz dünya.</p>
      </div>

      <!-- Experience Grid -->
      <div class="experience-grid fade-up">
        <div class="experience-card">
          <img src="/hotel_pool.png" alt="Havuz Deneyimi" />
          <div class="card-overlay">
            <div>
              <h3>Havuz & Wellness</h3>
              <p class="exp-desc">Ege'nin mavisiyle buluşan sonsuzluk havuzu</p>
            </div>
          </div>
        </div>
        <div class="experience-card">
          <img src="/hotel_breakfast.png" alt="Kahvaltı Deneyimi" />
          <div class="card-overlay">
            <div>
              <h3>Serpme Kahvaltı</h3>
              <p class="exp-desc">Bahçede taze organik kahvaltı keyfi</p>
            </div>
          </div>
        </div>
        <div class="experience-card">
          <img src="/hotel_sunset.png" alt="Gün Batımı" />
          <div class="card-overlay">
            <div>
              <h3>Teras Gün Batımı</h3>
              <p class="exp-desc">Şarap eşliğinde unutulmaz anlar</p>
            </div>
          </div>
        </div>
        <div class="experience-card">
          <img src="/alacati_streets.png" alt="Alaçatı Sokakları" />
          <div class="card-overlay">
            <div>
              <h3>Alaçatı Sokakları</h3>
              <p class="exp-desc">Renkli taş sokaklar ve butik dükkanlar</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROOM SHOWCASE -->
    <section style="padding: 0;">
      <div class="room-showcase fade-up">
        <div class="room-image">
          <img src="/hotel_room.png" alt="Deluxe Suite" />
        </div>
        <div class="room-details">
          <span class="overline">Oda Detayı</span>
          <h2>Deluxe Deniz Manzaralı Suite</h2>
          <p>Taş duvarlar, beyaz keten çarşaflar ve Ege denizine açılan özel balkon. Her detay huzur için düşünüldü.</p>
          <ul class="room-features">
            <li>Deniz Manzarası</li>
            <li>Özel Balkon</li>
            <li>King Size Yatak</li>
            <li>Rain Shower</li>
            <li>Mini Bar</li>
            <li>Ücretsiz Wi-Fi</li>
          </ul>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#" class="btn btn-gold">Müsaitlik Sorgula</a>
            <a href="#" class="btn btn-outline-light">360° Tur</a>
          </div>
        </div>
      </div>
    </section>

    <!-- AREA GUIDE / MAP -->
    <section class="container" style="padding-top: 6rem;">
      <div class="section-header fade-up">
        <span class="overline">Bölge Rehberi — SEO Güçlendirici</span>
        <h2>Alaçatı'yı Keşfedin</h2>
        <div class="divider"></div>
        <p>Bu bölüm hem misafirlerinize değer katar hem de SEO'da inanılmaz fark yaratır.</p>
      </div>
      <div class="area-guide fade-up">
        <div class="area-card">
          <div class="area-icon">🏖️</div>
          <h3>Plajlar</h3>
          <ul>
            <li>Alaçatı Surf Beach</li>
            <li>Ilıca Plajı</li>
            <li>Delikli Koy</li>
            <li>Pırlanta Plajı</li>
          </ul>
        </div>
        <div class="area-card">
          <div class="area-icon">☀️</div>
          <h3>Beach Club</h3>
          <ul>
            <li>Fly Inn Beach</li>
            <li>Aya Yorgi Beach</li>
            <li>Babylon Alaçatı</li>
            <li>Stay Beach</li>
          </ul>
        </div>
        <div class="area-card">
          <div class="area-icon">🍽️</div>
          <h3>Restoranlar</h3>
          <ul>
            <li>Agrilia</li>
            <li>Asma Yaprağı</li>
            <li>Köşe Kahve</li>
            <li>La Alacatienne</li>
          </ul>
        </div>
        <div class="area-card">
          <div class="area-icon">🌙</div>
          <h3>Gece Hayatı</h3>
          <ul>
            <li>Alaçatı Muhallebicisi</li>
            <li>4 Alaçatı</li>
            <li>Kırım Alaçatı</li>
            <li>Peregrine</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SHOWCASE: RESTAURANT
         ========================================== -->
    <section id="showcase-restaurant" class="restaurant-section">
      <div class="container">
        <div class="section-header fade-up">
          <span class="overline" style="color: var(--color-gold);">Portfolyo — Restoran Teması</span>
          <h2>Menü İlk Sayfada,<br>Her Şey Tek Tıkla</h2>
          <div class="divider"></div>
          <p style="color: var(--color-gray-400);">Restoranların yaptığı en büyük hata menüyü saklamak. Kullanıcı ilk olarak menüyü görmek istiyor.</p>
        </div>

        <div class="restaurant-grid fade-up">
          <!-- Restaurant Image + Food -->
          <div>
            <div class="restaurant-image" style="margin-bottom: 1.5rem;">
              <img src="/restaurant_interior.png" alt="Restoran İç Mekan" />
            </div>
            <div class="restaurant-image">
              <img src="/restaurant_food.png" alt="Gurme Yemek" />
            </div>
          </div>

          <!-- Menu Preview -->
          <div class="menu-preview">
            <div class="menu-category">
              <h3>Başlangıçlar</h3>
              <div class="menu-item">
                <div>
                  <div class="menu-item-name">Ahtapot Carpaccio</div>
                  <div class="menu-item-desc">Zeytinyağı, limon, kapari</div>
                </div>
                <div class="menu-item-price">₺420</div>
              </div>
              <div class="menu-item">
                <div>
                  <div class="menu-item-name">Keçi Peynirli Salata</div>
                  <div class="menu-item-desc">Roka, nar, ceviz, bal</div>
                </div>
                <div class="menu-item-price">₺320</div>
              </div>
              <div class="menu-item">
                <div>
                  <div class="menu-item-name">Levrek Ceviche</div>
                  <div class="menu-item-desc">Narenciye sosu, avokado</div>
                </div>
                <div class="menu-item-price">₺380</div>
              </div>
            </div>

            <div class="menu-category">
              <h3>Ana Yemekler</h3>
              <div class="menu-item">
                <div>
                  <div class="menu-item-name">Izgara Levrek</div>
                  <div class="menu-item-desc">Taze otlar, limonlu sos</div>
                </div>
                <div class="menu-item-price">₺650</div>
              </div>
              <div class="menu-item">
                <div>
                  <div class="menu-item-name">Kuzu Pirzola</div>
                  <div class="menu-item-desc">Biberiye, trüf püresi</div>
                </div>
                <div class="menu-item-price">₺720</div>
              </div>
              <div class="menu-item">
                <div>
                  <div class="menu-item-name">Risotto ai Funghi</div>
                  <div class="menu-item-desc">Mantar, parmesan, trüf yağı</div>
                </div>
                <div class="menu-item-price">₺480</div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="quick-actions">
              <a href="#" class="btn btn-gold">Rezervasyon Yap</a>
              <a :href="whatsappLink" target="_blank" class="btn btn-whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a href="#" class="btn btn-outline-light">Konum</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SERVICES / HAZIR TEMALAR
         ========================================== -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header fade-up">
          <span class="overline">Para Kazandıran Sistem</span>
          <h2>Hazır Tema Sistemi</h2>
          <div class="divider"></div>
          <p>Alaçatı, Çeşme, Urla için geliştirdiğim hazır altyapı. Her müşteriye sıfırdan site yerine, kanıtlanmış şablonları uyarlıyorum.</p>
        </div>

        <div class="services-grid fade-up">
          <div class="service-card">
            <span class="service-icon">🏨</span>
            <h3>Butik Otel</h3>
            <p>Tam ekran görseller, deneyim odaklı anlatım, anlık rezervasyon formu ve bölge rehberi.</p>
          </div>
          <div class="service-card">
            <span class="service-icon">🍷</span>
            <h3>Restoran</h3>
            <p>Menü ana sayfada, tek tıkla rezervasyon, WhatsApp entegrasyonu ve konum bilgisi.</p>
          </div>
          <div class="service-card">
            <span class="service-icon">🏖️</span>
            <h3>Beach Club</h3>
            <p>Etkinlik takvimi, VIP masa rezervasyonu, DJ programı ve sosyal medya entegrasyonu.</p>
          </div>
          <div class="service-card">
            <span class="service-icon">🏡</span>
            <h3>Villa Kiralama</h3>
            <p>Tarih bazlı müsaitlik, sanal tur, fiyat karşılaştırma ve anında onay sistemi.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         ABOUT
         ========================================== -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="fade-up">
          <span class="overline" style="color: var(--color-gold);">Hakkımda</span>
          <h2>Özcan Tağa</h2>
          <div class="divider"></div>
          <p>Cyprus International University mezunu. Sadece güzel tasarım değil, rezervasyon ve müşteri kazandıran web deneyimleri yaratıyorum. Alaçatı, Çeşme ve Urla bölgesindeki butik oteller ve restoranlar için uzmanlaşmış tema sistemleri geliştiriyorum.</p>

          <div class="stats-row">
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Tamamlanan Proje</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">4</span>
              <span class="stat-label">Hazır Tema</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">%300</span>
              <span class="stat-label">Ortalama Dönüşüm Artışı</span>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
            <a :href="whatsappLink" target="_blank" class="btn btn-whatsapp" style="border-radius: 0;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp ile İletişim
            </a>
            <a href="tel:+905000000000" class="btn btn-outline-light">Hemen Ara</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>Özcan Tağa</h3>
            <p>Ege'nin en güzel bölgelerindeki butik oteller ve restoranlar için, rezervasyon getiren web deneyimleri tasarlıyorum.</p>
          </div>
          <div class="footer-col">
            <h4>Temalar</h4>
            <ul>
              <li><a href="#services">Butik Otel</a></li>
              <li><a href="#services">Restoran</a></li>
              <li><a href="#services">Beach Club</a></li>
              <li><a href="#services">Villa Kiralama</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>İletişim</h4>
            <ul>
              <li><a :href="whatsappLink" target="_blank">WhatsApp</a></li>
              <li><a href="tel:+905000000000">Telefon</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2026 Özcan Tağa. Tüm hakları saklıdır.</span>
          <span>Cyprus International University</span>
        </div>
      </div>
    </footer>

    <!-- WhatsApp Floating Button -->
    <a :href="whatsappLink" target="_blank" class="whatsapp-float" aria-label="WhatsApp ile iletişim">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// SEO Head
useHead({
  title: 'Özcan Tağa — Web Designer | Butik Otel & Restoran Web Tasarımı',
  meta: [
    { name: 'description', content: 'Özcan Tağa, Alaçatı, Çeşme ve Urla bölgesindeki butik oteller ve restoranlar için rezervasyon getiren, yüksek performanslı web tasarımları geliştiren profesyonel web tasarımcı. Cyprus International University mezunu.' },
    { name: 'keywords', content: 'web tasarım, butik otel web sitesi, restoran web sitesi, Alaçatı, Çeşme, Urla, web designer, Özcan Tağa' },
    { property: 'og:title', content: 'Özcan Tağa — Web Designer' },
    { property: 'og:description', content: 'Butik oteller ve restoranlar için rezervasyon getiren web deneyimleri.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ]
})

// WhatsApp
const whatsappNumber = '905000000000' // Numaranızı buraya ekleyin
const whatsappMessage = encodeURIComponent('Merhaba Özcan, web tasarımı hakkında bilgi almak istiyorum.')
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

// Scroll detection for header
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 80
}

// Intersection Observer for fade-up animations
function setupObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setupObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
