// script.js

const yazarlar = {
    dostoyevski: {
        isim: "Fyodor Dostoyevski",
        hayat: "1821 yılında Moskova'da doğdu. Suç ve Ceza, Budala gibi eserleriyle insan ruhunun derinliklerini işledi.",
        kitaplar: [
            { ad: "Suç ve Ceza", kapak: "suç ve ceza.jpg" },
            { ad: "Karamazov Kardeşler", kapak: "karamazov.jpg" },
            { ad: "Yeraltından Notlar", kapak: "yeraltindan-notlar.jpg" }
        ],
        alinti: "İnsan kendini aşarak büyür.",
        timeline: [
            { yil: 1821, olay: "Doğdu" },
            { yil: 1866, olay: "Suç ve Ceza yayımlandı" },
            { yil: 1881, olay: "Vefat etti" }
        ]
    },
    sabahattin: {
        isim: "Sabahattin Ali",
        hayat: "1907 yılında doğdu. Kürk Mantolu Madonna gibi eserlerle Türk edebiyatında iz bıraktı.",
          kitaplar: [
            { ad: "Kürk Mantolu Madonna", kapak: "kurk-mantolu-madonna-on-kapak.jpg" },
            { ad: "kuyucaklı yusuf", kapak: "kuyucakliyusuf.jpg" },
            { ad: "İçimizdeki Şeytan", kapak: "içimizdeki şeytan.jpg" }
        ],
        alinti: "Bütün renkler aynı hızla kirleniyordu, birinciliği beyaza verdiler.",
        timeline: [
            { yil: 1907, olay: "Doğdu" },
            { yil: 1943, olay: "Kürk Mantolu Madonna yayımlandı" },
            { yil: 1948, olay: "Vefat etti" }
        ]
    },
    stephen: {
        isim: "Stephen Edwin King",
        hayat: "korku, doğaüstü kurgu, gerilim, polisiye, bilimkurgu ve fantezi türlerinde eserler üretmiştir.",
          kitaplar: [
            { ad: "Gece Yarısını Dört Geçe", kapak: "gece yarısını 4 gece.jpg" },
            { ad: "Göz", kapak: "göz.jpg" },
            { ad: "Uykusuzluk", kapak: "uykusuzluk.jpg" }
        ],
        alinti: "Geri kalan her şey sizi yarı yolda bıraktığında kütüphanenin yolunu tutun..",
        timeline: [
            { yil: 1947, olay: "Doğdu" },
            { yil: 1990, olay: "Gece Yarısını Dört Geçe" },
            { yil: 1999, olay: "Maça Kızı" }
        ]
    },

    Oguz_atay: {
        isim: "Oğuz Atay",
        hayat: "Eserlerinde düşle gerçeğin birbirine karışması, üstkurmacanın kurgunun ana ilkesi olması Oğuz Atay’ı postmodernist roman kategorisinde eser veren ilk Türk yazar yapmıştır.",
          kitaplar: [
            { ad: "Tutunamayanlar", kapak: "tutunamayanlar.jpg" },
            { ad: "Tehlikeli Oyunlar", kapak: "tehlikeli oyunlar.jpg" },
            { ad: "Korkuyu Beklerken", kapak: "korkuyu beklerken.jpg" }
        ],
        alinti: "Seni tanıdığıma çok sevindim kendi çapımda...",
        timeline: [
            { yil: 1934, olay: "Doğdu" },
            { yil: 1972, olay: "Tutunamayanlar'ı yazdı." },
            { yil: 1977, olay: "Öldü" }
        ]
    },

    halide: {
        isim: "Halide Edip Adıvar",
        hayat: " Eserlerinde kadının eğitilmesine ve toplum içindeki konumuna özellikle yer vermiş, yazıları ile kadın hakları savunuculuğu yapmıştır. Birçok kitabı sinemaya ve televizyon dizilerine uyarlanmıştır.",
          kitaplar: [
            { ad: "Tatarcık", kapak: "Halide_Edib_Adıvar-Tatarcık.jpg" },
            { ad: "Ateşten Gömlek", kapak: "Atesten_Gomlek.jpg" },
            { ad: "Handan", kapak: "Handan_Kapak.jpg" }
        ],
        alinti:"Ayrılmak biraz ölmektir.",
        timeline: [
            { yil: 1884, olay: "Doğdu" },
            { yil: 1972, olay: "Tatarcık'ı yazdı." },
            { yil: 1964, olay: "Öldü" }
        ]
    },
    ayse: {
        isim: "Ayşe Kulin",
        hayat: " Yayımladığı biyografik eserleri ve romanlar, Türkiye'de çok okunan kitaplar arasına girmiş ve birçok ödülde layık görülmüştür. Adı: Aylin kitabı ile büyük ün kazandı. Üslubundaki akıcılık ve yalınlıkla büyük övgü alan yazarın, birçok öykü ve kitabı senaryolaştırılıp beyazperdeye aktarıldı.",
          kitaplar: [
            { ad: "Adı: Aylin", kapak: "adıaylin.jpg" },
            { ad: "Umut", kapak: "Umut_kapak.jpg" },
            { ad: "Gizli Anların Yolcusu", kapak: "Gizli_Anların_Yolcusu_kitap_kapak.jpg" }
        ],
        alinti:"Acılar bile, özgür ortamlarda çekilmeliydi..",
        timeline: [
            { yil: 1941, olay: "Doğdu" },
            { yil: 1997, olay: "Adı:Aylin'i yazdı." },
            { yil: 2008, olay: "Umut'u yazdı." }
        ]
    },

    jane: {
        isim: "Jane Austen",
        hayat: " Jane Austen, dünyanın en ünlü yazarlarından biridir. Yaşadığı döneme ilişkin tasvirleri ve kahramanlarının karakterleri romanlarının klasikler arasında yer almasını sağlamıştır.İnsanların zaaflarını esprili bir anlayış ve zarif bir mizahla eserlerinde işlemiştir. Romanlarının başkahramanlarının hepsi kadındır ve romanlarının hepsi de mutlu bir evlilikle sona ermiştir.",
          kitaplar: [
            { ad: "Emma", kapak: "emma.jpg" },
            { ad: "Aşk ve Gurur", kapak: "aşk ve gurur.jpg" },
            { ad: "Gurur ve Önyargı", kapak: "gurur ve önyargı.jpg" }
        ],
        alinti:"Sevdiğim pek az kimse var , beğendiklerim ise daha da az. Dünyayı daha iyi tanıdıkça, hoşnutsuzluğum artıyor ve her geçen gün ,insan karakterinin kararsızlığına ve insanların görünüşlerine ne kadar az bel bağlanabileceğine olan inancımı doğruluyor.",
        timeline: [
            { yil: 1775, olay: "Doğdu" },
            { yil: 1885, olay: "Emma'yı yazdı." },
            { yil: 1817, olay: "Öldü." }
        ]
    },

    tomris: {
        isim: "Tomris Uyar",
        hayat: " Öykülerinde insanların umudun yarenliğinde bir çeşit hayat ve ahlak körlüğüne kapılmalarına karşı çıkar. Hayatın görülmeyen, konuşulmayan yüzünü, çirkinliklerini anlatır. İnsanların cafcaflı kisvelerini, afili unvanlarını, rengârenk makyajlarını kazıyarak altında gerçekten var olanı gösterir. Nitekim bu tavrını, “Yaşam sevinci vermeyi gene istiyorum, ama kötülükler, çirkinlikler, bayağılıklar, adiliklerin hepsi bilindikten sonra. Bunlar bilindikten sonra bir yaşama sevinci kalabilirse eğer –ki kalıyor ister istemez– o noktayı zorlamak istiyorum” diye açıklar.",
          kitaplar: [
            { ad: "Yürekte bukağı", kapak: "yürekte bukağı.jpg" },
            { ad: "Metal Yorgunluğu", kapak: "metalyorgunluğu.jpg" },
            { ad: "Aramızdaki şey", kapak: "aramızdakişey.jpg" }
        ],
        alinti:"Beni kendime ördüğüm kozanın dışına çıkarmaya çalışıyordun, farkındaydım. Senin çabanın işe yaradığı kuşkusuz da benimkinden o kadar emin değilim. Belki bazı kişilikler, kozadan çıkmak istemiyorlardır; o, ölüm kozası bile olsa. Kimin hakkı vardı kişiyi kozasından çıkartmaya?",
        timeline: [
            { yil: 1941, olay: "Doğdu" },
            { yil: 1979, olay: "Yürekte bukağı'yı yazdı." },
            { yil: 2003, olay: "Öldü." }
        ]
    },

    yasar: {
        isim: "Yaşar Kemal",
        hayat: " Yaşar Kemal , Kürt kökenli Türk romancı, senaryo ve öykü yazarı. Türk edebiyatının en önde gelen yazarlarından biridir. İlk öykü kitabı Sarı Sıcak'ta da yer alan Bebek öyküsü ile ilk romanı İnce Memed, Cumhuriyet'te tefrika edildi. İnce Memed, yaklaşık kırk dile çevrilerek yayımlandı. Kitaplarının yurt dışındaki baskısı yüz kırktan fazladır.",
          kitaplar: [
            { ad: "İnce Memed", kapak: "InceMemed.jpg" },
            { ad: "Teneke", kapak: "Teneke.jpg" },
            { ad: "Deniz Küstü", kapak: "deniz küstü.jpg" }
        ],
        alinti:"İnsan her şeyden kurtulur da içindeki kurttan kurtulamaz.",
        timeline: [
            { yil: 1923, olay: "Doğdu" },
            { yil: 1955, olay: "İnce Memed'i yazdı." },
            { yil: 2015, olay: "Öldü." }
        ]
    },
    elifsafak: {
        isim: "Elif Şafak",
        hayat: "Strasbourg doğumlu Elif Şafak, çocukluğunu ve gençliğini Ankara, Madrid, Amman, Köln, İstanbul, Boston, Michigan ve Arizona’da geçirdi. ODTÜ Uluslararası İlişkiler Bölümü’nü bitirdi, yüksek lisansını aynı üniversitede Kadın Çalışmaları Bölümü’nde, doktorasını ise Siyaset Bilimi alanında tamamladı. Türkiye, ABD ve İngiltere’de [üniversitelerde] öğretim üyesi olarak dersler verdi. 2018 yılında Oxford Üniversitesi’nde Karşılaştırmalı Avrupa Edebiyatı Weidenfeld Kürsüsü’ne misafir öğretim üyesi olarak edebiyat ve sanat seminerleri vermek üzere seçildi. Oxford/St. Anne’s College onursal üyesi oldu.  İlk kitabı Kem Gözlere Anadolu (öykü) 1994’te yayımlandı. İlk romanı Pinhan’la 1998 Mevlânâ Büyük ödülü’nü aldı. Bunu, Şehrin Aynaları (1999) ve Türkiye Yazarlar Birliği ödülü’nü kazandığı Mahrem izledi . Ardından her ikisi de çok satan ve geniş bir okur kitlesine sahip oldu.",
          kitaplar: [
            { ad: "Havva'nın 3 Kızı", kapak: "havva3kız.jpg" },
            { ad: "Sanma ki Yalnızsın", kapak: "sanmakiyalnızsın.jpg" },
            { ad: "10 Dakika 38 Saniye", kapak: "ondakka.jpg" }
        ],
        alinti:"Belki aşk sevgiliyi kazanmayı değil, kendini onda kaybetmeyi gerektirir..",
        timeline: [
            { yil: 1994, olay: "ilk kitabı Kem Gözlere Anadolu'yu yayınladı." },
            { yil: 2000, olay: "Türkiye Yazarlar Birliği ödülü’nü kazandığı Mahrem'i yayınladı." },
            { yil: 2019, olay: "On Dakika Otuz Sekiz Saniye romanı yayımlandı." }
        ]
    },
    murat: {
        isim: "Murat Gülsoy",
        hayat: " Murat GÜLSOY, yazar ve akademisyen. Mühendislik ve Psikoloji eğitimi gördü. 1993-2023 yılları arasında Boğaziçi Üniversitesi’nde öğretim üyesi olarak görev yaptı. 2004-2021 yılları arasında Boğaziçi Üniversitesi Yayınevi’nin yayın kurulu başkanlığını ve 2015-2023 yılları arasında Boğaziçi Üniversitesi Nâzım Hikmet Kültür ve Sanat Araştırma Merkezi müdürlüğü yaptı. 1992-2002 yılları arasında arkadaşlarıyla Hayalet Gemi dergisini çıkardığı günlerden bu yana akademisyenliğin yanı sıra edebiyatla ve sanatla ilişkisini profesyonel düzeyde sürdürdü.  Çeşitli dillere çevrilen öykü ve romanları birçok ulusal ödüle layık görüldü. 2001 Sait Faik Hikâye Armağanı, Bu Kitabı Çalın adlı kitabına, 2004 Yunus Nadi Roman Ödülü, Bu Filmin Kötü Adamı Benim, 2013 Notre Dame de Sion ödülü Baba Oğul ve Kutsal Roman, 2014 Sedat Simavi Edebiyat Ödülü Gölgeler ve Hayaller Şehrinde adlı romanlarına verildi. Son kitabı Kıyamet Sonrası Olağan Bir Gün 2024 yılında yayımlandı. 2003 yılından beri yaratıcı yazarlık eğitimi vermekte; yaratıcı yazarlık üzerine kaleme almış olduğu Büyübozumu: Yaratıcı Yazarlık bu alanda önde gelen kitap olma özelliğini taşımaktadır.",
          kitaplar: [
            { ad: "Diyaloglar", kapak: "diyaloglar.jpg" },
            { ad: "Ressam Vasıf’ın Gizli Aşklar Tarihi", kapak: "ressam.jpg" },
            { ad: "Gölgeler ve Hayaller Şehrinde", kapak: "gölgeler.jpg" }
        ],
        alinti:"İnsan her şeyden kurtulur da içindeki kurttan kurtulamaz.",
        timeline: [
            { yil: 2001, olay: " Sait Faik Hikâye Armağanı" },
            { yil: 2010, olay: "Tanrı Beni Görüyor mu? yayımlandı" },
            { yil: 2017, olay: "Öyle Güzel Bir Yer ki yayımlandı." }
        ]
    },
    sevgi: {
        isim: "Sevgi Soysal",
        hayat: " Sevgi Soysal'ın ilk dönem hikâyelerinde Varoluşçuluk akımının etkisinde olduğu görülür. Değişim dergisinde yayımlanan bu metinler, sonrasında Tutkulu Perçem adıyla basılmıştır. Bu metinlerde Soysal, gündelik hayatın birey üzerindeki izlenimlerini, izlerini şiirsel bir ifadeyle aktarır. Varlık, mekânda bir mesele olarak sunulur. Bu kitabın ardından yayımlanan Tante Rosa, başkahramanı Tante Rosa olan bir kadının hayatının farklı dönemlerinin anlatılmasıyla oluşmuştur. Tante Rosa'nın çocukluğundan ölümüne bir kadının olgunlaşma hikâyesinin anlatıldığı eserde Sevgi Soysal, yarattığı kahraman ile Türk edebiyatının kendisinden sonra gelen kadın yazar kuşağı üzerinde derin bir etki bırakmıştır. Tante Rosa'nın kendi yaşamını kurmak için verili ve dayatılan dünyadan uzaklaşarak kentin olanakları içinde yepyeni bir hayat kurması Türkiye'deki feminist kadın yazını içinde de özel bir yer edinmesini sağlamıştır.",
          kitaplar: [
            { ad: "Tante Rosa", kapak: "tante.jpg" },
            { ad: "Yenişehir'de Bir Öğle Vakti", kapak: "yenişehir.jpg" },
            { ad: "Yürümek", kapak: "yürü.jpg" }
        ],
        alinti:"Başkaldıran ayak uydurmaya çalışmamalı asla. Ayak uydurmaya çalıştığı an, ötekilerle arasında açılmış uçuruma, kendi açtığı uçuruma düşüverir.",
        timeline: [
             { yil: 1962, olay: "Tutkulu Perçem'i yazdı." },
             { yil: 1974, olay: "Yenişehir'de Bir Öğle Vakti yayımlandı." },
           
            { yil: 1976, olay: "Öldü." }
        ]
    },
   baris: {
        isim: "Barış Bıçakçı",
        hayat: " Geçen haftalardaydı, Tanıl Bora seveceğimi, hatta belki hakkında yazmak isteyeceğimi düşündüğü (Kürt meselesiyle ilgili) bir kitabı yayınevinden arkadaşlara yollasınlar diye tembihlemiş, sevindim; kendimi birden mühim bile hissetim, tabii derhal buharlaştı bu gelgeç his. Akşamına adres ve sair şeyler için Dila Ateş yazdı (artık içerdeki bağlantım o), heybeye Barış Bıçakçı’nın son romanını da koymasını rica ettim, kırmadı, birkaç güne iki kitap da geldi çalıştığım yayınevine. Kargo paketinden çıkıp da sere serpe masamdalar artık, Hobbes’un Leviathan’ını yayıma hazırlıyorum (neyime güveniyorsam), üstelik mübareğin derdi sanki beni tutmuş, son günlerde kafam cıvık çamur gibi, göz ucuyla arada bakıyorum yeni gelen derya kuzularına, pır pırlanıyorum, mesai bitimi atıp çantama birini çıkacağım, sonra ver elini Üsküdar! İyi de hangisini almalıyım yanıma: ikilemde kalıyor, tereddüt ediyorum; külkedisine dönmüş yüreğime bir parça sıcaklık yeter oysa...          ",
          kitaplar: [
            { ad: "Herkes Herkesle Dostmuş Gibi", kapak: "herkes.jpg" },
            { ad: "Bir Süre Yere Paralel Gittikten Sonra", kapak: "paralel.jpg" },
            { ad: "Sinek Isırıklarının Müellifi", kapak: "sinek.jpg" }
        ],
        alinti:"İnsan her şeyden kurtulur da içindeki kurttan kurtulamaz.",
        timeline: [
            { yil: 2006, olay: "Baharda Yine Geliriz'i yazdı." },
            { yil: 2011, olay: "Sinek Isırıklarının Müellifi'i yazdı." },
            { yil: 2024, olay: "Dünyaya Yeni Gelen Okurlar İçin'i yazdı." }
        ]
    },

       buket: {
        isim: "Buket Uzuner",
        hayat: "Buket Uzuner, Hacettepe Üniversitesi’nden Biyolog olarak mezun oldu (1976). Bergen Üniversitesi (Norveç, 1981) ve Michigan Üniversitesi’nde (ABD) çevrebilim konusunda lisansüstü çalışmalar yaptı. ODTÜ (1984-1985) ve Tampere Teknik Üniversitesi’nde (Finlandiya, 1986) öğretim görevlisi ve araştırmacı olarak çalıştı. Avrupa, Amerika, Akademik yaşamı bıraktıktan sonra yabancı dil, turizm ve reklam sektörlerinde çalıştı.",
          kitaplar: [
            { ad: "Uyumsuz Defne Kaman’ın Maceraları - Su ", kapak: "su.jpg" },
            { ad: "Uyumsuz Defne Kaman’ın Maceraları - Toprak ", kapak: "toprak.jpg" },
            { ad: " Uyumsuz Defne Kaman’ın Maceraları - Hava ", kapak: "hava.jpg" }
        ],
        alinti:" Ama her aşkın çilesi vardır. Mutlaka vardır. Gül pek güzeldir, velakin diken doludur. Dikenler de bülbülün kalbine batar, onu kanatır durur.",
        timeline: [
            { yil: 1992, olay: "Balık İzlerinin Sesi'ni yazdı." },
            { yil: 2007, olay: "İstanbullular'ı yazdı." },
            { yil: 2013, olay: "Bir Yılbaşı Hikayesi'ni yazdı." }
        ]
    }

};

function openModal(yazarKey) {
    const modal = document.getElementById('modal');
    const icerikDetay = document.getElementById('modal-icerik-detay');
    const yazar = yazarlar[yazarKey];

    let timelineHtml = '<h4>Hayatındaki Önemli Anlar:</h4><ul>';
    yazar.timeline.forEach(item => {
        timelineHtml += `<li><strong>${item.yil}:</strong> ${item.olay}</li>`;
    });
    timelineHtml += '</ul>';

    let kitaplarHtml = '<h3>Kitapları:</h3><div class="kitaplar">';
    yazar.kitaplar.forEach(kitap => {
        kitaplarHtml += `
            <div class="kitap">
                <img src="${kitap.kapak}" alt="${kitap.ad}">
                <p>${kitap.ad}</p>
            </div>
        `;
    });
    kitaplarHtml += '</div>';

    icerikDetay.innerHTML = `
        <h2>${yazar.isim}</h2>
        <p>${yazar.hayat}</p>
        ${kitaplarHtml}
        <blockquote>"${yazar.alinti}"</blockquote>
        ${timelineHtml}
    `;

    modal.style.display = "block";
}


function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}