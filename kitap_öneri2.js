
const books = [
  {
      id: 1,
      title: "Acımak",
      author: "Reşat Nuri Güntekin",
      year: 1928,
      genre: "Roman",
      description: "Küçük yaşta gördüğü kötü muamelelerden dolayı acıma duygusu olmayan bir öğretmeninin babasının vefatından sonra onun günlüğü okuyarak babası ve hayatı hakkındaki gerçekleri öğrenmesini konu alır. ",
      buyLink: "https://www.bkmkitap.com/acimak?srsltid=AfmBOoqWCdnJZwPBunto81YPbcWDxgfkKOm_ZDgFeYuePlWSRiy5gteH",
      cover:"../kitap önerileri/acımak.jpg",
      mood:"sad"
      
  },
  {
      id: 2,
      title: "Babalar ve oğullar",
      author: " İvan Turgenyev",
      year: "1862",
      genre: "Roman",
      description: "Romandaki baba ve oğul karakterleri iki Rus jenerasyonu arasındaki artan bölünmüşlüğü, Yevgeniy Bazarov ise nihilist görüşleri ve eski düzen karşıtlığı ile ilk Bolşevikleri temsil eder.",
      buyLink: "https://www.kitap.nl/dunya-klasikleri-babalar-ve-ogullar.htm",
      mood: "sad",
      cover: "../kitap önerileri/kitap kapak foto/babalar ve ogullar.jpg"
  },

  {
    id: 3,
    title: "Aşk-ı Memnu",
    author: "Halit Ziya Uşaklıgil",
    year: "1899",
    genre: "Roman",
    description: "Osmanlı İmparatorluğu'nun son döneminde, zengin Adnan Bey ile evlenen genç Bihter'in yasak aşkı ve bu ilişkinin tüm aileyi felakete sürükleyişi anlatılır.",
    buyLink: "https://www.bkmkitap.com/ask-i-memnu-gunumuz-turkcesiyle-442723?srsltid=AfmBOopgg2WZHuBMA04SvzuxVlFR-01KI_qmlAENKnb5B2NDYDzI-y-u",
    mood: "ask",
    cover:"kitap kapak foto/aşkı memnu.jpg"
},

{
    id: 4,
    title: " Bilinmeyen Bir Kadının Mektubu",
    author: "Stefan Zweig",
    year: "1922",
    genre: "Psikolojik",
    description: "Ünlü bir yazar, kendisine takıntılı bir şekilde âşık olan ve tüm hayatını ona adayan isimsiz bir kadının kaleme aldığı mektubu alır.",
    buyLink: "https://www.bkmkitap.com/bilinmeyen-bir-kadinin-mektubu-450008",
    mood: "sad",
    cover: "kitap kapak foto/bilinmeyen bir kadının mektubu.jpg"
},

{
    id: 5,
    title: "Ben, Kirke",
    author: "Madeline Miller",
    year: "2018",
    genre: "Roman",
    description: "Yunan mitolojisinin güçlü cadısı Kirke’nin gözünden tanrıların dünyasına ve kendi kimliğini bulma mücadelesine odaklanan modern bir mitolojik yeniden anlatım.",
    buyLink: "https://www.bkmkitap.com/ben-kirke?waw_keyword=ben%20kirke&_gl=1*1bk0cl7*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    mood: "energetic",
    cover: "kitap kapak foto/ben kirke.jpg"
},

{
    id: 6,
    title: "Bir Ömür Nasıl Yaşanır?",
    author: " İlber Ortaylı",
    year: "2019",
    genre: "Söyleşi",
    description: " Tarihçi İlber Ortaylı, yaşamdan öğrenmeye, seyahatten okumaya kadar pek çok konuda kendi birikim ve deneyimlerini paylaşarak dolu dolu bir hayatın nasıl yaşanacağını anlatır.",
    buyLink: "https://www.bkmkitap.com/bir-omur-nasil-yasanir?waw_keyword=Bir%20%C3%96m%C3%BCr%20Nas%C4%B1l%20Ya%C5%9Fan%C4%B1r&_gl=1*1bk0cl7*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    mood: "happy",
    cover: "../kitap önerileri/kitap kapak foto/bir ömür nasıl yaşanır.jpg"
},
{
    id: 7,
    title: " Anayurt Oteli",
    author: "Yusuf Atılgan",
    year: "1973",
    genre: "Roman",
    description: " Küçük bir kasabadaki Anayurt Oteli’nin içine kapanık ve yalnız katibi Zebercet’in iç dünyası, sıradan hayatının yavaşça trajediye dönüşmesiyle derinlemesine incelenir.",
    buyLink: "https://www.bkmkitap.com/anayurt-oteli-895932?waw_keyword=anayurt%20oteli&_gl=1*wezcuf*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    mood: "sad",
    cover: "../kitap önerileri/kitap kapak foto/anayurt oteli.jpg"
},
{
    id:8,
    title: "Suç ve Ceza",
    author: "Fyodor Dostoyevski",
    year: "1866",
    genre: "Roman",
    description: "Yoksul bir öğrenci olan Raskolnikov, üstün bir insan olduğunu kanıtlamak için bir tefeci kadını öldürür, ancak vicdan azabı ve suçluluk duygusu onu derin bir içsel çöküşe sürükler.",
    buyLink: "https://www.bkmkitap.com/suc-ve-ceza-ciltli?waw_keyword=Su%C3%A7%20ve%20Ceza&_gl=1*217xww*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    mood: "energetic",
    cover: "../kitap önerileri/kitap kapak foto/suç ve ceza.jpg"
},
{
    id: 9,
    title: " Dune",
    author: "Frank Herbert",
    year: "1965",
    genre: "Roman",
    description: "Uzak bir gelecekte, çöl gezegeni Arrakis'in kontrolü için imparatorluk, soylu aileler ve yerel halk arasında geçen güç mücadeleleri, Paul Atreides’in kaderini ve galaksinin geleceğini şekillendirir.",
    buyLink: "https://www.bkmkitap.com/dune-149980?waw_keyword=dune&_gl=1*217xww*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    mood: "happy",
    cover: "../kitap önerileri/kitap kapak foto/dune.jpg"
},
{
    id: 10,
    title: " Anna Karenina",
    author: " Lev Tolstoy",
    year: "1877",
    genre: "Roman",
    description: "Rusya aristokrasisinin katı ahlaki kuralları ve toplumsal baskıları arasında, evli bir kadın olan Anna Karenina'nın tutkulu bir aşk ilişkisi nedeniyle yaşadığı trajik çöküş anlatılır.",
    buyLink: "https://www.bkmkitap.com/anna-karenina-371987?waw_keyword=anne%20karenina&_gl=1*1o6glcc*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    mood: "ask",
    cover: "../kitap önerileri/kitap kapak foto/annakarenina.jpg"
},
{
    id: 11,
    title: "Aşkımız Eski Bir Roman",
    author: "Ahmet Ümit",
    year: "2019",
    genre: "Roman",
    description: " Başkomiser Nevzat’ın başrolde olduğu bu kitap, üç farklı polisiye öyküden oluşur. Adını taşıyan ilk öyküde, edebiyat karakterleriyle saplantılı bir ilişki kuran bir adamın gizemli ölümü çözülmeye çalışılır. İkinci öykü Overlokçu Kız, yoksul bir semtte işlenen cinayetin ardındaki sırları araştırır. Üçüncü öyküde ise, İstanbul’a gelen bir Rus bilim insanının kaybolmasıyla başlayan olaylar zinciri, uluslararası boyutta bir casusluk hikâyesine dönüşür.",

    buyLink: "https://www.bkmkitap.com/askimiz-eski-bir-roman",
    mood: "ask",
    cover: "../kitap önerileri/kitap kapak foto/aşkımız eski bir roman.jpg"
},
{
    id: 12,
    title: "Mai ve Siyah",
    author: "Halit Ziya Uşaklıgil",
    year: "1897",
    genre: "Roman",
    description: " Hayalleri ve idealleriyle dolu genç bir yazar olan Ahmet Cemil'in hayata dair umutları, aşkı ve sanatı arasındaki çatışmalar sonucunda karanlık bir hayal kırıklığına dönüşür.",
    buyLink: "https://www.bkmkitap.com/mai-ve-siyah-192938?waw_keyword=mai%20ve%20sa&_gl=1*rjkceh*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    mood: "happy",
    cover: "../kitap önerileri/kitap kapak foto/mai ve siyah.jpg"
},
{
    id: 13,
    title: " Yaşlı Adam ve Deniz",
    author: "Ernest Hemingway",
    year: "1952",
    genre: "Roman",
    description: "Kübalı yaşlı bir balıkçı olan Santiago, açık denizde dev bir kılıç balığıyla günlerce süren zorlu bir mücadele verir ve bu mücadele, insanın azim, onur ve yalnızlıkla olan ilişkisini simgeler.",
    buyLink: "https://www.bkmkitap.com/yasli-adam-ve-deniz-ihtiyar-balikci",
    mood: "happy",
    cover: "../kitap önerileri/kitap kapak foto/yaslı adam ve deniz.jpg"
},
{
    id: 15,
    title: "Dönüşüm",
    author: "Franz Kafka",
    year: "1915",
    genre: "Roman",
    description: "Genç bir satıcı olan Gregor Samsa, bir sabah dev bir böceğe dönüşmüş olarak uyanır ve bu fiziksel değişim, ailesiyle olan ilişkilerini ve insanlık değerlerini sorgulamasına yol açar.",
    buyLink: "https://www.bkmkitap.com/donusum-791015?waw_keyword=d%C3%B6n%C3%BC%C5%9F%C3%BCm&_gl=1*1gfencl*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    mood: "sad",
    cover: "../kitap önerileri/kitap kapak foto/dönüsüm.jpg"
},
{
    id: 14,
    title: "Sinekli Bakkal",
    author: "Halide Edib Adıvar",
    year: "1936",
    genre: "Roman",
    description: "Osmanlı İmparatorluğu'nun son döneminde, Sinekli Bakkal Mahallesi'nde yaşayan Rabia'nın sanata olan yeteneği ve bu yetenekle şekillenen hayatı, Doğu ve Batı kültürleri arasındaki çatışmayı gözler önüne serer.",
    buyLink: "https://www.bkmkitap.com/sinekli-bakkal?waw_keyword=sinekl&_gl=1*1gfencl*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    mood: "energetic",
    cover: "../kitap önerileri/kitap kapak foto/Halide_Edip_Adıvar-Sinekli_Bakkal.jpg"
},
{
    id: 16,
    title: " Cesur Yeni Dünya",
    author: "Aldous Huxley",
    year: "1932",
    genre: "Roman",
    description: "Teknolojinin ve toplum mühendisliğinin egemen olduğu bir gelecekte, bireysellik ve özgürlük yok olmuştur. İnsanlar genetik mühendislik ve sosyal sınıflandırma yoluyla yetiştirilirken, bir grup birey bu düzene karşı çıkmaya başlar.",
    buyLink: "https://www.bkmkitap.com/cesur-yeni-dunya",
    mood: "sad",
    cover: "../kitap önerileri/kitap kapak foto/cesur yeni dünya.jpg"
},
{
    id: 17,
    title: "Altın Gözde Yansımalar",
    author: " Carson McCullers",
    year: "1941",
    genre: "Roman",
    description: "Barış zamanında, ABD'nin güneydoğusundaki bir ordugâhta, beş karakterin bastırılmış duyguları, saplantıları ve yalnızlıkları etrafında gelişen trajik bir olay anlatılır.",
    buyLink: "https://www.bkmkitap.com/altin-gozde-yansimalar",
    mood: "energetic",
    cover: "../kitap önerileri/kitap kapak foto/altın gözde yansımalar.jpg"
},
{
    id: 18,
    title: "Eylül",
    author: "   Mehmet Rauf",
    year: "1900",
    genre: "Roman",
    description: " Eylül ayı, aşkın, sadakatsizliğin ve ruhsal bunalımların iç içe geçtiği bir dönemde, büyük bir aşkın gölgesinde geçen bir ilişkiyi ve bunun bireyler üzerindeki etkilerini anlatır.",
    mood: "ask",
    cover: "../kitap önerileri/kitap kapak foto/eylül.jpg",
    buyLink:"https://www.bkmkitap.com/eylul-460697?waw_keyword=eyl%C3%BCl&_gl=1*pikli3*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5"
},
{
    id: 19,
    title: " Hayvan Çiftliği",
    author: "George Orwell",
    year: "1945",
    genre: "Roman",
    description: "Bir çiftlikteki hayvanların, zalim insan sahiplerine karşı isyan ederek kendi yönetimlerini kurmaları, ancak kısa sürede yeni bir diktatörlük düzenine dönüşen bu yönetim aracılığıyla totaliter rejimlerin eleştirisi yapılır.",
    mood: "energetic",
    cover: "../kitap önerileri/kitap kapak foto/hayvan çiftliği.jpg ",
    buyLink:"https://www.bkmkitap.com/hayvan-ciftligi-819836?waw_keyword=hayvan%20%C3%A7i&_gl=1*15n97cz*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5"
},

{
    id: 20,
    title: "İkinci Uzay Destanı",
    author: "Arthur C. Clarke",
    year: "1982",
    genre: "Roman",
    description: "2001: Bir Uzay Destanının dokuz yıl sonrasında geçen bu romanda, Amerikalı ve Sovyet bilim insanlarından oluşan ortak bir ekip, Jüpiter yörüngesinde terk edilmiş Discovery One uzay gemisini ve HAL 9000 yapay zekâsını incelemek üzere yeni bir göreve çıkar. Bu yolculuk, insanlığın evrimi, yapay zekânın sınırları ve uzayda yaşam olasılıkları gibi derin temaları işler.",
    mood: "sad",
    cover: "../kitap önerileri/kitap kapak foto/ikinci uzay destanı.jpg",
    buyLink:"https://www.bkmkitap.com/2010-ikinci-uzay-destani?waw_keyword=ikinci%20uzay&_gl=1*kfrke7*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5"
},

{
    id: 21,
    title: "Sefiller",
    author: "Victor Hugo",
    year: "1862",
    buyLink:"https://www.bkmkitap.com/2010-ikinci-uzay-destani?waw_keyword=ikinci%20uzay&_gl=1*kfrke7*_gcl_aw*R0NMLjE3NDcwNjMzMTYuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJ4SEpCNU1SSTVMRmljS254RFhEdzVnZW16dlA1SHo3UmZQdmRnZ1dPclhZU1ZXU1ByQWh4b0NFVWdRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    genre: "Roman",
    description: "Fransız Devrimi sonrasında, eski mahkûm Jean Valjean’ın toplum içinde dürüst bir yaşam sürme mücadelesi, ahlaki kurtuluşu ve başkalarının hayatını değiştirme çabası anlatılır; aynı zamanda aşk, adalet ve özgürlük temaları işlenir.",
    mood: "sad",
    cover: "../kitap önerileri/kitap kapak foto/sefiller.jpg"
},

{
    id: 22,
    title: "İki Şehrin Hikayesi",
    buyLink:"https://www.bkmkitap.com/iki-sehrin-hikayesi-769014?waw_keyword=iki%20%C5%9Fehrin&_gl=1*1rhhqeq*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    author: "Charles Dickens",
    year: "1859",
    genre: "Roman",
    description: "  Fransız Devrimi sırasında Londra ve Paris arasında geçen romanda, aristokrat bir aile ile devrimci bir halk arasında yaşanan trajik olaylar ve bireylerin fedakârlık, aşk ve adalet arayışları anlatılır.",
    mood: "ask",
    cover: "../kitap önerileri/kitap kapak foto/iki şehrin hikayesi.jpg"
},

{
    id: 23,
    title: "İnsan Neyle Yaşar",
    buyLink:"https://www.bkmkitap.com/insan-neyle-yasar?waw_keyword=insan%20neyle%20ya%C5%9Far&_gl=1*1p6icio*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    author: "Lev Tolstoy",
    year: "1885",
    genre: "Roman",
    description: " Eylül ayı, aşkın, sadakatsizliğin ve ruhsal bunalımların iç içe geçtiği bir dönemde, büyük bir aşkın gölgesinde geçen bir ilişkiyi ve bunun bireyler üzerindeki etkilerini anlatır.",
    mood: "ask",
    cover: "../kitap önerileri/kitap kapak foto/insan neyle yaşar.jpg"
},

{
    id: 24,
    title: " Yalnızlık ",
    buyLink:"https://www.bkmkitap.com/yuzyillik-yalnizlik?waw_keyword=gabriel%20garcia&_gl=1*1l717t0*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    author: "Gabriel García Márquez",
    year: "1967",
    genre: "Roman",
    description: "  Bu başyapıt, Buendía ailesinin yedi kuşak boyunca süren yalnızlık ve trajedi dolu hikâyesini, Macondo adlı hayali bir kasabanın büyülü ve dramatik atmosferinde anlatır.",
    mood: "sad",
    cover: "../kitap önerileri/kitap kapak foto/yalnızız.jpg"
},

{
    id: 25,
    title: "Vatan Yahut Silistre",
    author: " Namık Kemal",
    buyLink:"https://www.bkmkitap.com/vatan-yahut-silistre-461771?waw_keyword=vatan%20yahut%20si&_gl=1*4vip4o*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    year: "1873",
    genre: "Roman",
    description: " Osmanlı-Rus Savaşı sırasında, Silistre Kalesi’ni savunmak için gönüllü olan İslam Bey ve onun peşinden gizlice cepheye giden sevgilisi Zekiye’nin vatan sevgisi ve fedakarlık dolu öyküsü anlatılır.",
    mood: "sad",
    cover: "../kitap önerileri/kitap kapak foto/vatan.yahut.silistre.jpg"
},

{
    id: 26,
    title: "Olağanüstü Bir Gece",
    buyLink:"https://www.bkmkitap.com/vatan-yahut-silistre-461771?waw_keyword=vatan%20yahut%20si&_gl=1*4vip4o*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    author: " Stefan Zweig",
    year: "1927",
    genre: "Roman",
    description: "Bir gece, bir kadın ve bir adamın tesadüfi bir şekilde yollarının kesişmesi, onların hayatlarında beklenmedik bir değişim yaratır. Kitap, tesadüflerin ve beklenmedik karşılaşmaların insan hayatındaki etkilerini işler.",
    mood: "happy",
    cover: "../kitap önerileri/kitap kapak foto/olağanüstübirgece.jpg"
},

{
    id: 27,
    title: "Şeker Portakalı",
    author: "José Mauro de Vasconcelos",
    buyLink:"https://www.bkmkitap.com/seker-portakali-346759?waw_keyword=%C5%9Feker%20portakal%C4%B1&_gl=1*wlrqip*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    year: "1968",
    genre: "Roman",
    description: " Küçük Zezé'nin, yoksul bir mahalledeki zor hayatına rağmen hayal gücüyle ve sevgisiyle büyümeye çalıştığı, çocukluk masumiyeti ve yaşamın zorlukları arasında geçen duygusal bir hikayeyi anlatır.",
    mood: "happy",
    cover: "../kitap önerileri/kitap kapak foto/şeker portakalı.jpg"
},

{
    id: 28,
    title: "Romeo ve juliet",
    buyLink:"https://www.bkmkitap.com/romeo-ve-juliet-31158",
    author: "William Shakespeare",
    year: "1597",
    genre: "Roman",
    description: " Verona'da iki düşman aile olan Montague ve Capulet'ler arasında geçen uzun süren bir nefrete rağmen, bu ailelerin çocukları Romeo ve Juliet arasında yasak bir aşkla başlayan ve trajik bir sona ulaşan aşk hikâyesi anlatılır.",
    mood: "ask",
    cover: "../kitap önerileri/kitap kapak foto/romea ve juliet.jpg"
},

{
    id: 29,
    title: "Karabibik",
    buyLink:"https://www.bkmkitap.com/karabibik-271495?waw_keyword=karabibik&_gl=1*1o18l2*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    author: "Nabizade Nazım",
    year: "1890",
    genre: "Roman",
    description: "Anadolu’nun yoksul köylerinden birinde yaşayan, köylü Karabibik’in hayatını ve yaşadığı toplumun zorluklarını anlatan bu eser, köy yaşamının acımasız gerçeklerini ve köylünün değişim karşısındaki çaresizliğini işler.",
    mood: "happy",
    cover: "../kitap önerileri/kitap kapak foto/karabibik.jpg"
},

{
    id: 30,
    title: "Otomatik Portakal",
    author: "Anthony Burgess ",
    buyLink:"https://www.bkmkitap.com/otomatik-portakal-379619?waw_keyword=otomatik%20portakal&_gl=1*1oehzgq*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    year: "1962",
    genre: "Roman",
    description: " Gelecekteki bir toplumda, genç Alex ve arkadaşları, şiddet ve suçla iç içe bir hayat sürerken, hükümetin insan davranışını kontrol altına almayı amaçlayan deneysel bir tedaviyle karşılaşır. Kitap, özgür irade, şiddet ve toplumsal düzen üzerine derin felsefi sorgulamalar yapar.",
    mood: "energetic",
    cover: "../kitap önerileri/kitap kapak foto/otomatik portakal.jpg"
},
{
    id: 31,
    title: "Aylak Adam",
    author: " Yusuf Atılgan ",
    buyLink:"https://www.bkmkitap.com/aylak-adam?waw_keyword=aylak%20adam%20yusuf%20at%C4%B1lgan&_gl=1*1gm6zxv*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    year: "1959",
    genre: "Roman",
    description: "Toplumun sıradan hayatının dışında kalan, varoluşsal bir boşluk içinde bocalayan ve kendisini hayata adapte etmekte güçlük çeken, bir türlü kimliğini bulamayan bir adamın içsel yolculuğu anlatılır.",
    mood: "sad",
    cover: "../kitap önerileri/kitap kapak foto/aylak adam.jpg"
},
{
    id: 32,
    title: "Bülbülü öldürmek",
    author: " Harper Lee",
    buyLink:"https://www.bkmkitap.com/bulbulu-oldurmek",
    year: "1960",
    genre: "Roman",
    description: "1930'larda Amerikan güneyinde, küçük bir kasabada büyüyen Scout Finch'in gözünden ırkçılık, adalet ve insan hakları üzerine derinlemesine bir bakış sunar. Babası, avukat Atticus Finch'in siyahi bir adamı haksız yere suçlanan bir davada savunmasıyla, toplumun adalet anlayışı sorgulanır.",
    mood: "sad",
    cover: "../kitap önerileri/kitap kapak foto/bülbülü öldürmek.jpg"
},
{
    id: 33,
    title: "Kumarbaz",
    author: " Fyodor Dostoyevski",
    buyLink:"https://www.bkmkitap.com/bulbulu-oldurmek",
    year: "1867",
    genre: "Roman",
    description: "Kumar bağımlılığı ve insanların zaafları üzerine bir inceleme olan bu romanda, genç bir Rus subayı olan Alexei Ivanovich'in kumar tutkusu ve bunun onu nasıl içsel ve toplumsal bir yıkıma sürüklediği anlatılır.",
    mood: "energetic",
    cover: "../kitap önerileri/kitap kapak foto/kumarbaz.jpg"
},
{
    id: 34,
    title: "Kürk Mantolu Madonna",
    buyLink:"https://www.bkmkitap.com/kurk-mantolu-madonna-433329?waw_keyword=k%C3%BCrk%20man&_gl=1*10x98ip*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    author: "Sabahattin Ali",
    year: "1943",
    genre: "Roman",
    description: "Almanya'da bir hastanede tanışan Raif Efendi ve Maria Puder arasındaki derin ama acılı aşkı konu alır. Raif'in, hayatında büyük bir boşluk bırakan bu ilişkiye dair içsel çatışmalarını ve yaşadığı yalnızlığı anlatırken, aşkın insan ruhu üzerindeki etkilerini işler.",
    mood: "ask",
    cover: "../kitap önerileri/kitap kapak foto/kürk mantolu madonna.jpg"
},

{
    id: 35,
    title: "Mutlu Prens",
    author: "Oscar Wilde",
    buyLink:"https://www.bkmkitap.com/mutlu-prens-arkadas-yayinlari?waw_keyword=mutlu%20prens&_gl=1*p5dqu5*_gcl_aw*R0NMLjE3NDcwNjcyMTMuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmJXXzFjODNWZ0dWSUZ4NEVHa0IyRUpwQ2F4RXlyemp6MXF3QWRyMlh1cFpOb0VFd2wyQ3NSb0NmdFFRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    year: "1888",
    genre: "Roman",
    description: "Zenginlik ve ihtişam içinde yaşayan Mutlu Prens, heykel olarak şehri izlerken, bir leylek ve bir yoksul çocuğun yardımlarıyla, şehri daha iyi bir yer haline getirmeye çalışır. Masal, özveri, sevgi ve toplumda adaletin sağlanması için fedakârlık yapmanın değerini anlatır.",
    mood: "energetic",
    cover: "../kitap önerileri/kitap kapak foto/mutlu prens.jpg"
},

{
    id: 36,
    title: "Sokrates'in Savunması",
    buyLink:"https://www.bkmkitap.com/sokratesin-savunmasi-242352?waw_keyword=sokra&_gl=1*ql1aep*_gcl_aw*R0NMLjE3NDcwNjgxODEuQ2p3S0NBand1SWJCQmhCdkVpd0FzTnlwdmZNTEtzRnNMYkZiLVN2V25Qb0k2dEZpemlWN1RtNjJ6VnItd01nYWc2N0c3cEYycWlSd3Bob0NZelVRQXZEX0J3RQ..*_gcl_au*MTg2NTU4MDk5NC4xNzQ3MDYzMzE5",
    author: "Platon",
    year: "MÖ 399",
    genre: "Roman",
    description: "Sokrates, Atina'da halkı yozlaştırmakla suçlanarak yargılanır. Platon'un kaleme aldığı bu eser, Sokrates'in savunma konuşmasını içerir. Sokrates, hakikat arayışı, erdem ve bilgi üzerine düşüncelerini savunarak, ölüm cezasına çarptırılmasına rağmen felsefi duruşunu korur.",
    mood: "sad",
    cover: "../kitap önerileri/kitap kapak foto/sokratesinsavunması.jpg"
}




  
];


function showBookInfo(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  document.getElementById('modal-title').textContent = book.title;
  document.getElementById('modal-author').textContent = book.author;
  document.getElementById('modal-year').textContent = book.year;
  document.getElementById('modal-genre').textContent = book.genre;
  document.getElementById('modal-desc').textContent = book.description;
  document.getElementById('modal-link').href = book.buyLink;
  document.getElementById('modal-cover').src = book.cover;

  document.getElementById('book-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('book-modal').style.display = 'none';
}



document.querySelectorAll('.mood-option').forEach(option => {
  const button = option.querySelector('button');
  const resultDiv = option.querySelector('.mood-book-result');
  
  button.addEventListener('click', function() {
      const mood = this.parentElement.dataset.mood;
      const moodBooks = books.filter(b => b.mood === mood);
      
      // Önce tüm sonuçları gizle
      document.querySelectorAll('.mood-book-result').forEach(el => {
          el.classList.remove('show');
      });
      
      if (moodBooks.length > 0) {
          const randomBook = moodBooks[Math.floor(Math.random() * moodBooks.length)];
          resultDiv.innerHTML = `
              <div class="mood-book-cover" onclick="showBookInfo(${randomBook.id})">
                  <img src="${randomBook.cover}" alt="${randomBook.title}">
                  <span>${randomBook.title}</span>
              </div>
              <p></p>
          `;
          resultDiv.classList.add('show');
      } else {
          resultDiv.innerHTML = '<p>Bu ruh haline uygun kitap bulunamadı.</p>';
          resultDiv.classList.add('show');
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const bookshelf = document.querySelector('.bookshelf-card .book-covers');
  const popularSection = document.querySelector('.popular-books');
  
  books.forEach(book => {
      const bookElement = `
          <div class="book-cover" onclick="showBookInfo(${book.id})">
              <img src="${book.cover}" alt="${book.title}">
              <span>${book.title}</span>
          </div>
      `;
      
      bookshelf.innerHTML += bookElement;
      
   
      if (book.id <= 2) {
          popularSection.innerHTML += bookElement;
      }
  });
});
