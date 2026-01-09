# Özelleştirme Rehberi

Bu rehber, pointercrate-example'ı kendi demonlist siteniz için özelleştirmenize yardımcı olur.

## ⚠️ Önemli: Bu Pointercrate.com'un Tam Kopyası Değil

Bu repository **pointercrate.com'un tam kopyası değildir**. İçerir:
- ✅ Demonlist sayfaları
- ✅ User account sistemi
- ✅ API endpoints

İçermez:
- ❌ Ana sayfa (home page)
- ❌ API dokümantasyonu
- ❌ Demonlist kuralları/guidelines

## 🔧 Özelleştirme Adımları

### 1. Logo ve Görseller

**Dosya:** `pointercrate-example/src/main.rs` (satır 196)

```rust
let nav_bar = NavigationBar::new("/static/images/path/to/your/logo.png")
```

**Yapılacaklar:**
1. Logo dosyanızı `pointercrate-example/static/images/` klasörüne ekleyin
2. Yolu güncelleyin: `/static/example/images/logo.png`

### 2. Website Adı ve Metadata

**Dosya:** `pointercrate-example/src/main.rs` (satır 252-256)

```rust
PageConfiguration::new("<your website name here>", nav_bar, footer)
    .author("your name")
    .keywords("Your SEO keywords here")
```

**Örnek:**
```rust
PageConfiguration::new("Canada Demon List", nav_bar, footer)
    .author("Canada Demon List Team")
    .keywords("geometry dash, demon list, canada, extreme demons")
```

### 3. Footer Metinleri

**Dosya:** `pointercrate-example/src/main.rs` (satır 226-231)

```rust
let footer = Footer::new(html! {
    "© Copyright <year> <your website>"
    br;
    "All rights reserved"
    br;
    "<your website> and <your demonlist> are in no way affiliated with RobTopGamesAB ® or pointercrate.com"
})
```

**Örnek:**
```rust
let footer = Footer::new(html! {
    "© Copyright 2024 Canada Demon List"
    br;
    "All rights reserved"
    br;
    "Canada Demon List is not affiliated with RobTopGamesAB ® or pointercrate.com"
})
```

### 4. Social Media Linkleri

**Dosya:** `pointercrate-example/src/main.rs` (satır 249)

```rust
.with_link("https://twitter.com/stadust1971", tr("footer-tweet.developer"));
```

**Örnek:**
```rust
.with_link("https://twitter.com/canadademonlist", tr("footer-tweet.developer"))
.with_link("https://discord.gg/your-invite", "Discord")
```

### 5. Hardcoded pointercrate.com URL'lerini Değiştirme

#### A. Overview Page (Demonlist Ana Sayfası)

**Dosya:** `pointercrate-demonlist-pages/src/overview.rs`

**Satır 55, 63, 71, 82:** `https://pointercrate.com` → Kendi domain'iniz

```rust
// ÖNCE:
"@id": "https://pointercrate.com/",
"@id": "https://pointercrate.com/demonlist/",
"url": "https://pointercrate.com/demonlist/"
link ref = "canonical" href = "https://pointercrate.com/demonlist/";

// SONRA (örnek):
"@id": "https://canadademonlist.com/",
"@id": "https://canadademonlist.com/demonlist/",
"url": "https://canadademonlist.com/demonlist/"
link ref = "canonical" href = "https://canadademonlist.com/demonlist/";
```

#### B. Demon Page (Tekil Demon Sayfası)

**Dosya:** `pointercrate-demonlist-pages/src/demon_page.rs`

**Satır 85, 92, 99, 106, 245:** `https://pointercrate.com` → Kendi domain'iniz

Aynı şekilde tüm `pointercrate.com` referanslarını kendi domain'inizle değiştirin.

#### C. Twitch Player Parent Domain

**Dosya:** `pointercrate-demonlist-pages/static/js/modules/demonlist.js`

**Satır 33:**
```javascript
// ÖNCE:
"https://player.twitch.tv/?autoplay=false&parent=pointercrate.com&video=" +

// SONRA:
"https://player.twitch.tv/?autoplay=false&parent=canadademonlist.com&video=" +
```

### 6. Discord Webhook (Opsiyonel)

**Dosya:** Environment variables

Record submission bildirimleri için Discord webhook ekleyin:

```bash
DISCORD_WEBHOOK=https://discord.com/api/webhooks/your-webhook-url
```

### 7. List Integration Discord Link

**Dosya:** `pointercrate-example/src/main.rs` (satır 151)

```rust
.with_page(ListIntegrationTab("https://discord.gg/tMBzYP77ag"))
```

Kendi Discord sunucu linkinizle değiştirin.

## 📝 Özelleştirme Checklist

- [ ] Logo dosyası eklendi ve yolu güncellendi
- [ ] Website adı değiştirildi
- [ ] Author ve keywords güncellendi
- [ ] Footer metinleri özelleştirildi
- [ ] Social media linkleri güncellendi
- [ ] Tüm `pointercrate.com` URL'leri kendi domain'inizle değiştirildi
- [ ] Twitch player parent domain güncellendi
- [ ] Discord webhook ayarlandı (opsiyonel)
- [ ] List integration Discord linki güncellendi

## 🎨 Ek Özelleştirmeler

### CSS Özelleştirme

CSS dosyaları şu klasörlerde:
- `pointercrate-core-pages/static/css/`
- `pointercrate-demonlist-pages/static/css/`
- `pointercrate-user-pages/static/css/`

### Çeviriler (Localization)

Çeviri dosyaları:
- `pointercrate-core-pages/static/ftl/`
- `pointercrate-demonlist-pages/static/ftl/`
- `pointercrate-user-pages/static/ftl/`

Türkçe çeviri eklemek için `tr-tr/` klasörü oluşturabilirsiniz.

## ⚠️ Yasal Uyarı

Bu framework'ü kullanırken:
- Pointercrate.com ile ilişkili olmadığınızı belirtin
- RobTopGamesAB ile ilişkili olmadığınızı belirtin
- Kendi branding'inizi kullanın
- Tüm placeholder'ları değiştirin

## 🚀 Deploy Sonrası

Deploy ettikten sonra:
1. Tüm sayfaları kontrol edin
2. SEO metadata'yı doğrulayın
3. Logo ve görsellerin yüklendiğinden emin olun
4. Footer ve navigation'ın doğru göründüğünü kontrol edin

## 📞 Yardım

Sorun yaşarsanız:
- Repository'nin issue'larına bakın
- Rocket framework dokümantasyonunu inceleyin
- Maud templating engine dokümantasyonunu inceleyin

