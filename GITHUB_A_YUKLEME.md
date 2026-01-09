# 📤 GitHub'a Yükleme Rehberi

## 🎯 EN KOLAY YOL: GitHub Desktop (Önerilen!)

**Hiçbir komut yazmaya gerek yok!** Sadece tıklayın!

### Adım 1: GitHub Desktop İndir

1. **https://desktop.github.com** adresine gidin
2. "Download for Windows" tıklayın
3. İndirin ve kurun (2 dakika)

### Adım 2: GitHub Hesabı

1. **https://github.com** adresine gidin
2. Hesap oluşturun (eğer yoksa)
3. GitHub Desktop'ta "Sign in to GitHub.com" tıklayın
4. Giriş yapın

### Adım 3: Repository Oluştur

1. GitHub Desktop'ta "File" > "New Repository"
2. **Name:** `CanadaDemonList` ✅ (Evet, klasör adınız bu!)
3. **Local Path:** `C:\Users\QP\Desktop\CanadaDemonList` (otomatik olabilir)
4. **Description:** (opsiyonel - boş bırakabilirsiniz)
5. **Git ignore:** `Rust` seçin ✅ (Rust projesi olduğu için)
6. **License:** `None` seçin ✅ (Zaten LICENSE dosyanız var, yeni oluşturmaya gerek yok)
7. ❌ "Initialize this repository with a README" işaretlemeyin (zaten dosyalar var)
8. "Create Repository" tıklayın

### Adım 4: Dosyaları Ekle

1. GitHub Desktop otomatik olarak tüm dosyaları gösterir
2. Sol tarafta "Changes" sekmesine bakın
3. Tüm dosyalar listede görünür
4. Alt kısımda "Summary" yazın: `Initial commit`
5. "Commit to main" tıklayın

### Adım 5: GitHub'a Yükle

1. Üst kısımda "Publish repository" butonuna tıklayın
2. ✅ "Keep this code private" işaretleyin (veya işaretlemeyin - istediğiniz gibi)
3. "Publish repository" tıklayın
4. **Bitti!** 🎉

**Hepsi bu kadar!** Hiçbir komut yazmadınız! ✅

---

## 🚀 Alternatif: GitHub Web (Dosya Yükleme)

Eğer GitHub Desktop kullanmak istemiyorsanız:

### Adım 1: Yeni Repository

1. **https://github.com** → "New repository"
2. Repository adı: `CanadaDemonList`
3. Public veya Private seçin
4. ✅ "Initialize with README" işaretlemeyin
5. "Create repository" tıklayın

### Adım 2: Dosyaları Yükle

1. Repository sayfasında "uploading an existing file" linkine tıklayın
2. Veya "Add file" > "Upload files" tıklayın
3. **Tüm klasörü sürükleyip bırakın** (drag & drop)
4. "Commit changes" tıklayın

**Not:** Bu yöntem çok fazla dosya varsa yavaş olabilir.

---

## 💻 Alternatif: Git Komutları (Hızlı)

Eğer Git zaten kuruluysa (PowerShell veya CMD'de):

### Adım 1: Git Kurulumu (Sadece bir kere)

1. **https://git-scm.com/download/win** adresine gidin
2. İndirin ve kurun (varsayılan ayarlarla)
3. Kurulum sonrası PowerShell'i yeniden başlatın

### Adım 2: Repository Oluştur

1. PowerShell'i açın
2. Klasöre gidin:
   ```powershell
   cd C:\Users\QP\Desktop\CanadaDemonList
   ```

### Adım 3: Git Başlat

```powershell
git init
```

### Adım 4: Tüm Dosyaları Ekle

```powershell
git add .
```

### Adım 5: Commit

```powershell
git commit -m "Initial commit"
```

### Adım 6: GitHub'a Bağla

1. GitHub'da yeni repository oluşturun (boş)
2. Repository URL'ini kopyalayın (örn: `https://github.com/kullaniciadi/CanadaDemonList.git`)

3. PowerShell'de:
```powershell
git remote add origin https://github.com/KULLANICIADI/CanadaDemonList.git
```

(KULLANICIADI yerine kendi GitHub kullanıcı adınızı yazın)

### Adım 7: Yükle

```powershell
git push -u origin main
```

GitHub kullanıcı adı ve şifre isteyecek (veya token).

**Bitti!** 🎉

---

## 🎯 HANGİ YÖNTEMİ SEÇMELİYİM?

### ✅ GitHub Desktop (ÖNERİLEN!)
- ✅ En kolay
- ✅ Hiçbir komut yok
- ✅ Görsel arayüz
- ✅ Otomatik

### ⚠️ GitHub Web (Upload)
- ✅ Kolay
- ⚠️ Çok dosya varsa yavaş
- ⚠️ Her seferinde tekrar yükleme gerekir

### 💻 Git Komutları
- ✅ Hızlı
- ✅ Profesyonel
- ⚠️ Komut yazmak gerekir
- ⚠️ Git kurulumu gerekir

---

## 📋 ÖZET

**En kolay:** GitHub Desktop kullanın!

1. GitHub Desktop indir → Kur
2. GitHub'a giriş yap
3. New Repository → Klasörü seç
4. Commit → Publish
5. **Bitti!** 🎉

**Hiçbir komut yazmaya gerek yok!** Sadece tıklayın! 🖱️

---

## 🆘 Sorun mu Var?

### GitHub Desktop Bulamıyor
- Klasör yolunu manuel girin: `C:\Users\QP\Desktop\CanadaDemonList`

### Dosyalar Görünmüyor
- `.gitignore` dosyası varsa kontrol edin
- Büyük dosyalar ignore edilmiş olabilir

### Push Hatası
- GitHub kullanıcı adı/şifre doğru mu?
- Repository URL'i doğru mu?

