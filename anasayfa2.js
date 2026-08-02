function openPopup(bookId) {
    const details = {
        b1: {
            title: "Küçük Prens",
            description: "Yazarın sürdüğü uçağı birdenbire bozulur ve Sahra Çölü'ne iniş yapmak zorunda kalır. Çölde Küçük Prens ile karşılaşır. Küçük Prens yazara yaşadığı yeri, yaşadığı maceraları anlatmaya başlar. Anlattığına göre o, B-612 adlı bir asteroitte tek başına yaşayan bir prenstir. Gezegeninde çok sevdiği bir güle özenle bakar. Gülüne nasıl daha faydalı olabileceğinin yollarını araştırmak istediği için diğer gezegenleri gezmek zorunda kalır."
        },
        b2: {
            title: "Nutuk",
            description: "Nutuk, Mustafa Kemal Atatürk’ün 1919’da Samsun’a çıkışından başlayarak 1927’ye kadar geçen dönemi anlattığı, Türkiye Cumhuriyeti'nin kuruluş sürecini belgeleyen önemli bir eserdir. Bu kitapta, Kurtuluş Savaşı’nın zorlukları, cephelerdeki mücadeleler ve milli birliğin inşa süreci ayrıntılı bir biçimde aktarılır. Atatürk, sadece tarihsel olayları değil; aynı zamanda bu olaylardan çıkarılması gereken dersleri ve cumhuriyetin nasıl korunması gerektiğini de vurgular. Nutuk, bir tarih anlatısından öte, milletine seslenen bir liderin vizyonunu ve kararlılığını yansıtan temel bir belgedir."
        },
        b3: {
            title: "Yeraltından Notlar",
            description: "Ben hasta bir adamım… Kötü bir adamım. Suratsız bir adamım ben. Galiba karaciğerimden zorum var. Doğrusu hastalığımın ne olduğunun da farkında değilim ya, hatta neremin ağrıdığını bile iyice bilemiyorum. Tıbba ve doktorlara saygım olduğu halde tedavi olmuyorum ve asla olmayacağım. Bir yandan da aşırı ölçüde, mesela tıbba saygı besleyecek kadar boş inançlara bağlıyım. (Boş inançlara kapılmayacak kadar tahsil gördüm, ama inanıyorum işte.) Yok efendim, sadece inadımdan tedavi olmak istemiyorum. Siz herhalde bunu anlayamazsınız."
        },

        b4: {
            title: "Hyunam - Dong Kitabevi",
            description: "Youngju her şeyi doğru yapmıştır; üniversiteye gitmiş, düzgün bir adamla evlenmiş, saygın bir işe girmiştir. Sonra bir anda her şey altüst olur. Tükenmişlik hissiyle eski hayatını terk eder, zirvedeki kariyerini bırakır, kocasından boşanır ve hayalinin peşinden gider. Bir kitapçı dükkânı açar... Youngju ve müşterileri, Seul’ün şirin bir mahallesinde kitapların arasına sığınırlar. Yalnız bir baristadan evli ama mutsuz bir ev hanımına ve Youngju’da özel bir şeyler olduğunu gören yazara kadar hepsinin geçmişinde hayal kırıklıkları vardır. Hyunam-Dong Kitabevi zamanla onların, hayatı nasıl yaşamaları gerektiğini öğrendiği yer haline gelir."
        },
        b5: {
            title: "Çalkuşu",
            description: "Çalıkuşu romanı, zorluklarla dolu bir çocukluk geçiren Feride'nin, öğretmenlik yaptığı köyde karşılaştığı zorlukları ve aşkı arayışını anlatır. Feride, güçlü karakteri ve bağımsız ruhuyla kendi yolunu çizerken, aşk ve fedakarlık gibi evrensel temalarla yüzleşir."
        },
        b6: {
            title: "Kırmızı Saçlı Kadın",
            description: " İstanbul'un modern yaşamıyla geleneksel değerler arasındaki çatışmada bir gencin kimlik arayışını ve kişisel dönüşümünü inceler. Usta-çırak ilişkisi ve bir kadının sembolik anlamı etrafında dönen hikaye, okuyucuyu derin düşüncelere sevk eder."
        },
        b7: {
            title: "Tesirsiz Parçalar",
            description: "Tesirsiz Parçalar, Ali Lidar’ın iç dünyasını ve yaşam deneyimlerini yansıtan samimi bir deneme kitabıdır. Yazar, öğrencilik yıllarından öğretmenlik anılarına, popüler kültürden edebiyata kadar geniş bir yelpazede düşüncelerini okuyucuyla paylaşır. Metinlerdeki içten ve dürüst üslup, okuyucunun kendisinden bir parça bulmasını sağlar. Kitap, hem bireysel farkındalık hem de hayatın sıradan güzellikleri üzerine düşündüren bir eserdir."
        }
    };

    const content = details[bookId];
    document.getElementById('popup-details').innerHTML = `
        <h2>${content.title}</h2>
        <p>${content.description}</p>
    `;

    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Haritayı oluştur
const map = L.map('map').setView([40.0, 20.0], 2); // Orta dünya görünüm

// Harita katmanı (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap katkıcıları'
}).addTo(map);

// Kitaplar dizisi
const bookLocations = [
  { title: "Küçük Prens", author: "Saint-Exupéry", lat: 43.71, lon: 7.26 },
  { title: "Anna Karenina", author: "Tolstoy", lat: 55.75, lon: 37.61 },
  { title: "Sefiller", author: "Victor Hugo", lat: 48.85, lon: 2.35 },
  { title: "İnce Mehmet", author: "Yaşar Kemal", lat: 37.0, lon: 35.32 },
  { title: "Suç ve Ceza", author: "Dostoyevski", lat: 59.93, lon: 30.33 },
  { title: "Yabancı", author: "Camus", lat: 36.75, lon: 3.04 },
  { title: "Gazap Üzümleri", author: "Steinbeck", lat: 36.67, lon: -119.41 },
  { title: "Don Kişot", author: "Cervantes", lat: 40.41, lon: -3.70 },
  { title: "Uğultulu Tepeler", author: "Brontë", lat: 54.35, lon: -2.74 },
  { title: "Karamazov Kardeşler", author: "Dostoyevski", lat: 56.32, lon: 44.00 },
  { title: "Sineklerin Tanrısı", author: "Golding", lat: -17.71, lon: 178.06 },
  { title: "Tutunamayanlar", author: "Oğuz Atay", lat: 39.92, lon: 32.85 },
  { title: "Körlük", author: "Saramago", lat: 38.71, lon: -9.13 },
  { title: "Benim Adım Kırmızı", author: "Orhan Pamuk", lat: 41.00, lon: 28.97 },
  { title: "Yüzüklerin Efendisi", author: "Tolkien", lat: 51.75, lon: -1.25 },
  { title: "Yeraltından Notlar", author: "Dostoyevski", lat: 55.75, lon: 37.61 },
  { title: "Bülbülü Öldürmek", author: "Harper Lee", lat: 32.36, lon: -86.30 },
  { title: "Hayvan Çiftliği", author: "Orwell", lat: 51.50, lon: -0.12 },
  { title: "1984", author: "Orwell", lat: 51.50, lon: -0.12 },
  { title: "Frankenstein", author: "Mary Shelley", lat: 46.20, lon: 6.14 }
];

// Kitapları haritaya ekle
bookLocations.forEach(book => {
  L.marker([book.lat, book.lon])
    .addTo(map)
    .bindPopup(`<strong>${book.title}</strong><br>${book.author}`);
});

