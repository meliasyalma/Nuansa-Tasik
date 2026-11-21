/* ==========================================
   DATA DESTINASI
   ========================================== */
const destinationsData = [
    { id:'galunggung', name:'Gunung Galunggung', category:'Pegunungan', district:'Sukaratu, Kab. Tasikmalaya', address:'Linggajati, Kec. Sukaratu, Kab. Tasikmalaya, Jawa Barat 46415', lat:-7.2564, lng:108.0768, price:15000, rating:4.9, hours:'07.00 - 17.00 WIB (Setiap Hari)', popular:true, image:'https://i.pinimg.com/736x/11/dd/23/11dd23582e222096e5a2f5884875d9a3.jpg', gallery:['https://i.pinimg.com/736x/9c/12/ff/9c12ff903f2ccd03c758c1a0fcabeabb.jpg','https://i.pinimg.com/736x/77/be/94/77be945c9566d5feb3428c77377280c9.jpg','https://i.pinimg.com/736x/fc/34/31/fc343176a70c7400ba219bb72d87d11d.jpg'], description:'Gunung berapi ikonik di Tasikmalaya yang menawarkan panorama kawah hijau memukau dengan danau kawah yang tenang. Pengunjung dapat menaiki 620 anak tangga menuju bibir kawah, berendam di pemandian air panas alami, hingga berkemah di area pinus.', attractions:['Kawah Hijau Galunggung','620 Anak Tangga Kawah','Pemandian Air Panas Cipanas','Curug Agung Galunggung'], facilities:['Area Parkir Luas','Warung Kuliner Lokal','Mushola & Toilet','Spot Foto Gardu Pandang','Area Camping'] },
    { id:'karang-tawulan', name:'Pantai Karang Tawulan', category:'Pantai', district:'Cikalong, Kab. Tasikmalaya', address:'Cimanuk, Kalapagenep, Kec. Cikalong, Kab. Tasikmalaya 46195', lat:-7.8077, lng:108.3016, price:10000, rating:4.8, hours:'24 Jam (Terbaik 06.00 - 18.00 WIB)', popular:true, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgf5Ouv840K9CZYRvOi5-AfxE3NlsiGKjaTO15jBdPg&s=10', gallery:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGTKooOq1RxoXqzIhFPuJgorAeTvkzXkWGDG-J1c9xw&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBemSdSG_XRO9O3Gw9Bb6iVYo9oGaR6BwY7xXD7e8eQ&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyGA9iEuiWNJVbnkUx5cmzH_vLGIdffAp7TTPkD9b0g&s=10'], description:'Dijuluki sebagai "Tanah Lot-nya Tasikmalaya", Pantai Karang Tawulan menyuguhkan tebing-tebing karang menjorok ke Samudra Hindia dengan deburan ombak dramatis serta pemandangan Pulau Nusa Manuk di kejauhan.', attractions:['Tebing Karang Eksotis','Panorama Pulau Nusa Manuk','Spot Sunrise & Sunset Samudra','Gazebo Pinggir Tebing'], facilities:['Gazebo Istirahat','Area Camping Tebing','Warung Kelapa Muda','Mushola & Toilet','Area Parkir'] },
    { id:'kampung-naga', name:'Kampung Adat Naga', category:'Budaya', district:'Salawu, Kab. Tasikmalaya', address:'Desa Neglasari, Kec. Salawu, Kab. Tasikmalaya 46471', lat:-7.3622, lng:107.9942, price:5000, rating:4.9, hours:'08.00 - 16.30 WIB (Setiap Hari)', popular:true, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MrZApZzQChRWWaCd1hRPx12qHFda_PreV21bt_SurA&s=10', gallery:['https://i.pinimg.com/736x/5d/a1/66/5da166788cd3ae61251cc874d146034a.jpg','https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80'], description:'Perkampungan adat Sunda yang masih memegang teguh tradisi leluhur di lembah hijau tepi Sungai Ciwulan. Seluruh rumah beratap ijuk dan anyaman bambu tersusun seragam tanpa listrik maupun teknologi modern.', attractions:['Arsitektur Rumah Adat Seragam','440 Anak Tangga Lembah','Kerajinan Anyaman Bambu','Edukasi Kearifan Lokal Sunda'], facilities:['Pemandu Lokal Resmi','Sentra Oleh-Oleh Kerajinan','Area Parkir & Rest Area','Mushola & Toilet','Warung Makan Sunda'] },
    { id:'tonjong-canyon', name:'Tonjong Canyon Cipatujah', category:'Alam', district:'Cipatujah, Kab. Tasikmalaya', address:'Nagrog, Kec. Cipatujah, Kab. Tasikmalaya 46189', lat:-7.7219, lng:108.0461, price:10000, rating:4.7, hours:'07.30 - 17.00 WIB (Setiap Hari)', popular:true, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMJIHitd-ZLRsr2DdqpPsq47ZTSTSnhKiR2wsr3qSgw&s', gallery:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasPyTsnsTksousM2F0eqI-VsABUDNtP1lZlqoTw0siA&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbtIcgBakeT8a1xPjUdqXbiP9pK1_x1B5X5-dnz70pw&s=10'], description:'Ngarai tersembunyi dengan tebing batu purba kecokelatan yang mengapit aliran sungai jernih berwarna hijau toska. Sangat cocok bagi pencinta petualangan alam, body rafting ringan, dan fotografi lanskap.', attractions:['Tebing Ngarai Purba','Aliran Sungai Jernih Toska','Spot Berenang Alami','Trekking Ringan Hutan'], facilities:['Penyewaan Pelampung','Pemandu Sungai','Warung Sederhana','Area Parkir Motor & Mobil'] },
    { id:'situ-gede', name:'Situ Gede Tasikmalaya', category:'Keluarga', district:'Mangkubumi, Kota Tasikmalaya', address:'Linggajaya, Kec. Mangkubumi, Kota Tasikmalaya 46181', lat:-7.3396, lng:108.1887, price:5000, rating:4.6, hours:'07.00 - 18.00 WIB (Setiap Hari)', popular:false, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2fAv687bg1ROmUXkGzr0V8o9YORRD1rQMcEyh_xdEg&s=10', gallery:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzkLMTgNXjLG6p04fs5d392UHFkVaVOxjAT3nJcJ56A&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lVwrIIJ-pNnM2yTXvKNkgswa3lG7j18z8rJy7fQWZw&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnivKcH0ltN2qaBhHz8CIxDTl1PyCEi6q9HgbkNEf9A&s=10'], description:'Danau alami seluas 47 hektar di tengah Kota Tasikmalaya yang dikelilingi pepohonan rindang dan memiliki pulau kecil di tengahnya. Destinasi favorit keluarga untuk naik perahu rakit dan menyantap ikan bakar.', attractions:['Perahu Rakit Keliling Danau','Pulau Ziarah Tengah Danau','Kuliner Ikan Bakar Tepi Situ','Jogging Track Rindang'], facilities:['Deretan Rumah Makan Lesehan','Dermaga Perahu Wisata','Masjid & Toilet Bersih','Area Bermain Anak','Parkir Luas'] },
    { id:'curug-dengdeng', name:'Curug Dengdeng', category:'Alam', district:'Pancatengah, Kab. Tasikmalaya', address:'Cikatomas, Tawang, Kec. Pancatengah, Kab. Tasikmalaya 46194', lat:-7.6481, lng:108.2345, price:10000, rating:4.7, hours:'07.00 - 17.00 WIB (Setiap Hari)', popular:false, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMUns85eWJ7glAue6kFsAPKr0UeuiPtg0pFV6UhNhgg&s=10', gallery:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMUns85eWJ7glAue6kFsAPKr0UeuiPtg0pFV6UhNhgg&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMUns85eWJ7glAue6kFsAPKr0UeuiPtg0pFV6UhNhgg&s=10'], description:'Air terjun bertingkat tiga yang lebar dan megah sehingga kerap dijuluki "Niagara Mini dari Tasikmalaya". Suasana pedesaan yang asri di sekitarnya membuat tempat ini sangat menenangkan.', attractions:['Air Terjun 3 Undakan Lebar','Kolam Alami di Bawah Curug','Panorama Sawah Terasering'], facilities:['Gazebo Bambu','Warung Kopi & Gorengan','Toilet & Kamar Bilas','Parkir Kendaraan'] },
    { id:'pantai-sindangkerta', name:'Pantai Sindangkerta', category:'Pantai', district:'Cipatujah, Kab. Tasikmalaya', address:'Sindangkerta, Kec. Cipatujah, Kab. Tasikmalaya 46189', lat:-7.7661, lng:108.0575, price:10000, rating:4.6, hours:'06.00 - 18.00 WIB (Setiap Hari)', popular:false, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSKmcd1OtwTScj2fOxeqfRDMRDfeWaCwoq8QeWLlidQ&s=10', gallery:['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'], description:'Pantai landai berpasir putih dengan taman laut dangkal (Lengsar) yang aman untuk bermain air saat air surut, serta kawasan konservasi penyu hijau yang edukatif bagi anak-anak.', attractions:['Taman Laut Dangkal Lengsar','Konservasi Penyu Hijau','Hamparan Pasir Putih Landai'], facilities:['Penangkaran Penyu','Saung Tepi Pantai','Kamar Bilas Air Tawar','Warung Seafood Segar'] },
    { id:'teejay-waterpark', name:'TeeJay Waterpark', category:'Keluarga', district:'Cihideung, Kota Tasikmalaya', address:'Komplek Plaza Asia, Jl. HZ. Mustofa No.326, Tugujaya, Kota Tasikmalaya', lat:-7.3442, lng:108.2165, price:35000, rating:4.5, hours:'09.00 - 17.00 WIB (Setiap Hari)', popular:false, image:'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=1000&q=80', gallery:['https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=1000&q=80'], description:'Taman rekreasi air terbesar di pusat Kota Tasikmalaya dengan beragam wahana seluncuran raksasa, kolam ombak, kolam arus, dan area bermain air khusus balita yang aman.', attractions:['Kolam Ombak Buatan','Seluncuran Spiral Tinggi','Kolam Arus Santai','Kiddy Pool Ember Tumpah'], facilities:['Loker & Ruang Bilas Modern','Food Court Lengkap','Penyewaan Ban & Gazebo','Akses Langsung Mall Plaza Asia'] }
];

/* ==========================================
   DATA KULINER
   ========================================== */
const culinaryData = [
    { name:'Nasi Tutug Oncom', category:'Makanan Berat', price:'Rp 15.000 - Rp 20.000', place:'Warung Nasi T.O Benhil 2.96 di Jl. Dadaha, Cikalang, Kecamatan Tawang', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTLtcnT33acfOXiEqAQ8T1zbeMYnsitJzlcL6WUNbIQ&s=10', description:' Nasi hangat yang diaduk dengan oncom berbumbu, biasanya disajikan bersama lauk seperti ayam goreng, tahu, tempe, sambal, dan lalapan' },
    { name:'Soto Ayam Pataruman', category:'Makanan Berat', price:'Rp 25.000 - Rp 30.000', place:'warung Nasi Cikur Teh Rena/Utep di Jl. Panyerutan, Nagarawangi, Kecamatan Cihideung', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpkI_GrBeYkNgeYG96rdKEmEgAxHkJxbW1cp-_b4aN0g&s=10', description:'Soto legendaris sejak tahun 1960-an dengan kuah santan kuning kental yang dimasak menggunakan arang. Berisi suwiran ayam kampung empuk, telur muda, uritan, dan taburan bawang goreng melimpah.' },
    { name:'Kupat Tanjung', category:'Makanan Berat', price:'Rp 12.000 - Rp 18.000', place:'Kawasan Tanjung, Kawalu & Jl. HZ Mustofa', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HjSnEsl3WiCkAHINFPA8yBkf5qYLkH1c_7NfqXZRjw&s=10', description:'Menu sarapan favorit warga Tasikmalaya berupa potongan ketupat lembut yang disiram sayur labu siam bersantan gurih, taburan serundeng kelapa manis-gurih, dan kerupuk merah.' },
    { name:'Nasi Cikur', category:'Makanan Berat', price:'Rp 15.000 - Rp 20.000', place:'Jl. Empang No. 27, Empangsari, Kecamatan Cihideung', image:'https://foodnesia.net/wp-content/uploads/2019/11/nasi-cikur-khas-tasikmalaya.jpg', description:'Nasi dengan campuran bumbu kencur (cikur) yang harum, sering disantap dengan lauk seperti ayam, paru, empal, ikan asin, atau telur' },
    { name:'Nasi Pecel', category:'Makanan Berat', price:'Rp 12.000 - Rp 18.000 ', place:'Jl. Empang No. 27, Empangsari, Kecamatan Cihideung', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVK3cdUzaUd7_RCICz9glcH_dc3aAWFms9kteymZiAoQ&s=10', description:'nasi putih yang disajikan bersama aneka sayuran rebus seperti kol, kacang panjang, dan tauge, yang kemudian diguyur dengan saus kacang khas yang kaya rempah.' },
    { name:'Bubur Ayam Kalektoran', category:'Makanan Berat', price:'Rp 15.000 - Rp 25.000 ', place:'Jl. R. Ikik Wiradikarta No. 33, Tawangsari, Kecamatan Tawang', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepy4uZMBmkVj77c-mDEe71keiK9yjJaw5uEjBwqenXw&s=10', description:'salah satu warung bubur ayam tertua dan paling legendaris di kota ini. Keunikan bubur ini terletak pada cara penyajiannya yang tanpa kuah, tetapi dengan topping yang sangat berlimpah mulai dari ayam suwir, cakwe, bawang goreng, kacang, hingga kerupuk. Teksturnya lebih padat dibandingkan bubur ayam pada umumnya.' },
    { name:'Comro', category:'Sarapan & Jajanan', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTLtcnT33acfOXiEqAQ8T1zbeMYnsitJzlcL6WUNbIQ&s=10', description:' Gorengan berbahan singkong parut yang diisi tumisan oncom berbumbu. Bagian luarnya renyah, sedangkan bagian dalamnya lembut dengan rasa gurih dan pedas.' },
    { name:'Misro', category:'Sarapan & Jajanan', image:'https://images.openai.com/static-rsc-4/P4vhTv3SecW_UypghDMYLtKVlJgSvW50EYulGeRWJr1gYWbikaPEaGv-oZXsPnm8IGPqSoVcJKd93eSpFbEUs9pg8cC8Cx88s8MHBgpnaCJCl71qeWqYlFJKHMrXSOUpKf1f0CRIG98EMBe16_OOnIrfMzDZM5dSbtSTFBMVk5I8-0mCFzGRcTT8-37l9WcL?purpose=inline', description:' Jajanan tradisional berbahan singkong parut yang diisi gula merah, kemudian digoreng hingga matang. Memiliki rasa manis dengan tekstur renyah di luar dan lembut di dalam.' },
    { name:'Surabi Oncom', category:'Sarapan & Jajanan', image:'https://images.openai.com/static-rsc-4/uRwBj_wq8NTBu6MNVxuY3diEOQPtbZcUkYM7Lzwmjl4VJXeC3CJa1DIZPv3wMP2oeolrfmEfXF0KqIjzKKLJa4rdYtQkDDTqhaogAM-msUU8tqEAPhRLUWfWfxHfQ_UfWQLCh8wEtfIvo15bi79VH9gT8djk1-NprCibiLXj13qkwXyAzvJUXda-afip25zj?purpose=fullsize', description:' Jajanan tradisional berbahan tepung beras dan santan yang dimasak menggunakan cetakan tanah liat. Disajikan dengan topping oncom berbumbu yang memberikan rasa gurih dan sedikit pedas.' },
    { name:'Es bojong' , category:'Sarapan & Jajanan', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3b9gHXGiYU8ZW-b-LWqijSfcBQPQv3I9WSvDRlRv1OA&s=10', description:' jajanan khas Tasik yang layak untuk dicicipi. Salah satunya adalah es bojong. Potongan cincau hitam, alpukat, nangka, nanas, dan durian di dalam gelas dicampur dengan santan dan sirup. Tambahan es batu dan kental manisnya menambah kenikmatan ketika menyeruput minuman ini di siang hari.' },
    { name:' Opak Ketan  ', category:'Oleh-Oleh', price:'Rp10.000–Rp20.000 / kemasan', place:'Cibeureum', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGKL7qtUrGQKIbD6fUTsttCozYpXgumIy1YO-6rtAPw&s=10', description:' Makanan ringan berbahan dasar beras ketan yang dibentuk pipih, dikeringkan, kemudian dipanggang atau diolah hingga renyah. Memiliki cita rasa gurih dan aroma khas.' },
    { name:' Kolontong    ', category:'Oleh-Oleh', price:'Rp11.000 / 500 gram', place:'Tasikmalaya', image:'https://images.openai.com/static-rsc-4/tRgTL0AyP8hjMsLK1ymGj5iUFO0KEqG9kaBHjEy44HdfL4v7mgZ83pcUxSq9f2kJuUDncxg8_Ax950Hhrt1IL0Ix_8AntKMADzeInhJXqnBfpsFfuUM2ya8kM73F2RK1MpN4x49K3ApHyLNVVOK8mMHZKN98Y9xwebKLKxkZJtoSivq3rhOg2OgiutvPZzuY?purpose=fullsize', description:' Camilan tradisional berbahan ketan yang diolah hingga kering dan memiliki tekstur renyah. Rasanya manis dengan perpaduan gula yang melekat pada bagian luarnya.'},
    { name:' Rengginang Oyek     ', category:'Oleh-Oleh', price:'Rp10.000–Rp30.000 / kemasan', place:'Tasikmalaya', image:'https://down-id.img.susercontent.com/file/sg-11134201-22100-k96v87dm5civ07', description:' Camilan tradisional berbahan ketan yang diolah hingga kering dan memiliki tekstur renyah. Rasanya manis dengan perpaduan gula yang melekat pada bagian luarnya.'},
    { name:' Kue Aci     ', category:'Oleh-Oleh', price:'Rp10.000–Rp30.000 / kemasan', place:'Tasikmalaya', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdleG0m94C0hDzmk55AWKjmYspvBH__tTNVf4nhPc7w&s=10', description:' Jajanan berbahan tepung tapioka atau aci yang diolah menjadi camilan dengan tekstur khas. Tersedia dalam beberapa varian rasa dan bentuk.'}
];

/* ==========================================
   DATA ARTIKEL
   ========================================== */
const articlesData = [
    { id:'art-1', title:'Menjaga Harmoni Alam: Filosofi Hidup Masyarakat Adat Kampung Naga', category:'Budaya Sunda', date:'12 November 2026', readTime:'5 Menit Baca', image:'https://i.pinimg.com/736x/8d/c3/6f/8dc36fb70a270c5a5d3f1f8cb3e81ccc.jpg', excerpt:'Bagaimana masyarakat Kampung Naga mempertahankan 113 bangunan adat di tengah arus modernisasi tanpa menolak tamu yang datang berkunjung.', content:'<p>Terletak di sebuah lembah subur di Kecamatan Salawu, Kabupaten Tasikmalaya, Kampung Naga merupakan bukti nyata bagaimana kearifan lokal Sunda mampu menjaga kelestarian alam selama berabad-abad.</p><p>Masyarakat Kampung Naga memegang teguh prinsip <em>"Pamali"</em> yang sejatinya adalah bentuk konservasi ekologi. Hutan larangan (Leuweung Larangan) di atas bukit tidak boleh dimasuki sembarangan sehingga mata air di bawahnya tetap jernih sepanjang tahun.</p><p><strong>Etika Berkunjung bagi Wisatawan:</strong> Pastikan Anda menggunakan jasa pemandu lokal resmi, tidak memotret area terlarang seperti Bumi Ageung, menjaga ketenangan, serta tidak membuang sampah sekecil apa pun di kawasan lembah.</p>' },
    { id:'art-2', title:'Panduan Lengkap Mendaki Kawah Gunung Galunggung untuk Pemula', category:'Tips Liburan', date:'04 November 2026', readTime:'4 Menit Baca', image:'https://i.pinimg.com/736x/1c/36/2e/1c362e1336a6f78ad4b8b38aab2c03a0.jpg', excerpt:'Tips waktu terbaik berkunjung, persiapan fisik menaklukkan 620 anak tangga, hingga rekomendasi pakaian hangat saat kabut turun.', content:'<p>Gunung Galunggung adalah destinasi ramah keluarga sekaligus favorit para pencinta alam karena aksesnya yang sangat tertata menuju bibir kawah.</p><p><strong>1. Datang Pagi Hari (06.30 - 09.00 WIB):</strong> Pada jam ini kabut belum turun menutupi danau kawah hijau, dan sinar matahari pagi memberikan pencahayaan terbaik untuk berfoto.</p><p><strong>2. Siapkan Stamina & Air Minum:</strong> Terdapat dua jalur tangga dengan sekitar 620 anak tangga. Berjalanlah santai dan manfaatkan pos istirahat di tengah jalur.</p><p><strong>3. Jangan Lewatkan Cipanas:</strong> Setelah turun dari kawah, rilekskan otot kaki Anda di pemandian air panas alami yang mengandung belerang ringan.</p>' },
    { id:'art-3', title:'Jejak Sejarah Kerajinan Payung Geulis & Kelom Geulis Tasikmalaya', category:'Sejarah', date:'25 Oktober 2026', readTime:'6 Menit Baca', image:'https://i.pinimg.com/736x/23/7e/01/237e0194c02c632d0d6b66e8c34a3d74.jpg', excerpt:'Mengenal lebih dekat mahakarya seni kriya khas Tasikmalaya yang telah menjadi ikon kebanggaan Jawa Barat sejak era 1930-an.', content:'<p>Selain pesona alamnya, Tasikmalaya tersohor sebagai pusat industri kreatif kerajinan tangan di Priangan Timur. Dua di antaranya yang paling ikonik adalah Payung Geulis dan Kelom Geulis.</p><p><strong>Payung Geulis</strong> awalnya dibuat menggunakan rangka bambu dan kertas semen yang dilukis motif bunga secara manual dengan kuas. Kini kain parasut dan katun warna-warni turut memperkaya estetika payung hias ini.</p><p>Wisatawan dapat mengunjungi sentra kerajinan di kawasan Panyingkiran, Indihiang untuk melihat langsung proses melukis payung dan membawanya pulang sebagai buah tangan eksklusif.</p>' }
];

/* ==========================================
   STATE
   ========================================== */
let favorites = JSON.parse(localStorage.getItem('Nuansa Tasikmalaya_favorites')) || [];
let plannerItems = JSON.parse(localStorage.getItem('Nuansa Tasikmalaya_planner')) || [];

/* ==========================================
   HELPERS
   ========================================== */
function formatRupiah(num) { return 'Rp ' + Number(num).toLocaleString('id-ID'); }
function getQueryParam(name) { return new URLSearchParams(location.search).get(name); }
function showToast(msg) {
    const t = document.getElementById('toast-notification');
    if (!t) return;
    document.getElementById('toast-message').textContent = msg;
    t.classList.remove('translate-y-24', 'opacity-0');
    setTimeout(() => t.classList.add('translate-y-24', 'opacity-0'), 3200);
}

/* ==========================================
   FAVORIT
   ========================================== */
function updateFavBadge() {
    const b = document.getElementById('fav-badge');
    if (b) b.textContent = favorites.length;
}
function toggleFavorite(id, ev = null) {
    if (ev) ev.stopPropagation();
    const d = destinationsData.find(x => x.id === id);
    if (!d) return;
    if (favorites.includes(id)) {
        favorites = favorites.filter(x => x !== id);
        showToast(d.name + ' dihapus dari Favorit');
    } else {
        favorites.push(id);
        showToast(d.name + ' disimpan ke Favorit!');
    }
    localStorage.setItem('Nuansa Tasikmalaya_favorites', JSON.stringify(favorites));
    updateFavBadge();
    if (typeof refreshCurrentView === 'function') refreshCurrentView();
    const fm = document.getElementById('favorites-modal');
    if (fm && !fm.classList.contains('hidden')) renderFavoritesModalList();
}
function toggleFavoritesModal() {
    const m = document.getElementById('favorites-modal');
    if (!m) return;
    if (m.classList.contains('hidden')) {
        renderFavoritesModalList();
        m.classList.remove('hidden'); m.classList.add('flex');
    } else {
        m.classList.add('hidden'); m.classList.remove('flex');
    }
    lucide.createIcons();
}
function renderFavoritesModalList() {
    const c = document.getElementById('favorites-list-container');
    if (!c) return;
    if (favorites.length === 0) {
        c.innerHTML = `<div class="text-center py-10"><i data-lucide="heart-off" class="w-12 h-12 text-slate-300 mx-auto mb-3"></i><p class="text-slate-500 text-sm">Belum ada destinasi favorit yang disimpan.</p><a href="wisata.html" class="inline-block mt-4 px-5 py-2.5 rounded-xl bg-emeraldNature text-white text-xs font-semibold">Jelajahi Destinasi</a></div>`;
        lucide.createIcons(); return;
    }
    c.innerHTML = favorites.map(id => {
        const d = destinationsData.find(x => x.id === id);
        if (!d) return '';
        return `<div class="flex items-center justify-between gap-3 p-3 rounded-2xl bg-creamLight border border-slate-100">
            <a href="detail-wisata.html?id=${d.id}" onclick="toggleFavoritesModal()" class="flex items-center gap-3 cursor-pointer flex-grow min-w-0">
                <img src="${d.image}" alt="${d.name}" class="w-14 h-14 rounded-xl object-cover shrink-0">
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase text-emeraldNature">${d.category}</span>
                    <h4 class="font-heading font-bold text-forest text-sm truncate">${d.name}</h4>
                    <p class="text-xs text-slate-500">${formatRupiah(d.price)}</p>
                </div>
            </a>
            <button onclick="toggleFavorite('${d.id}')" class="p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 shrink-0"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
        </div>`;
    }).join('');
    lucide.createIcons();
}

/* ==========================================
   KARTU DESTINASI
   ========================================== */
function createDestinationCard(dest) {
    const isFav = favorites.includes(dest.id);
    return `<a href="detail-wisata.html?id=${dest.id}" class="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-slate-100 flex flex-col cursor-pointer hover:-translate-y-1.5">
        <div class="relative h-52 overflow-hidden">
            <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.src='https://placehold.co/800x600/27866C/FFFFFF?text=${encodeURIComponent(dest.name)}'">
            <div class="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent"></div>
            <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-forest text-xs font-bold shadow-sm">${dest.category}</span>
            <button onclick="event.preventDefault(); toggleFavorite('${dest.id}', event)" class="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-transform active:scale-90">
                <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'text-red-500 fill-red-500' : 'text-slate-600'}"></i>
            </button>
            <div class="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                <span class="flex items-center gap-1 font-medium truncate"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-amberWarm shrink-0"></i>${dest.district}</span>
                <span class="flex items-center gap-1 bg-forest/80 px-2 py-0.5 rounded-lg font-bold text-amberWarm shrink-0"><i data-lucide="star" class="w-3 h-3 fill-amberWarm"></i>${dest.rating}</span>
            </div>
        </div>
        <div class="p-5 flex flex-col flex-grow justify-between">
            <div>
                <h3 class="font-heading font-bold text-lg text-forest group-hover:text-emeraldNature transition-colors mb-1.5">${dest.name}</h3>
                <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">${dest.description}</p>
            </div>
            <div class="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <div><span class="text-[11px] text-slate-400 block">Tiket Masuk</span><span class="font-heading font-bold text-emeraldNature text-sm">${formatRupiah(dest.price)}</span></div>
                <span class="px-3.5 py-2 rounded-xl bg-mintSoft group-hover:bg-forest text-forest group-hover:text-white text-xs font-semibold transition-colors inline-flex items-center gap-1">Detail <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i></span>
            </div>
        </div>
    </a>`;
}

/* ==========================================
   NAVBAR & UI GLOBAL
   ========================================== */
function toggleMobileMenu() { document.getElementById('mobile-menu').classList.toggle('hidden'); }

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.1 });
function observeReveals() { document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el)); }

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    updateFavBadge();
    const currentPage = document.body.dataset.page || 'home';
    const navbar = document.getElementById('navbar');
    function updateNav() {
        if (!navbar) return;
        const isScrolled = window.scrollY > 40;
        const isHeroPage = currentPage === 'home';
        if (!isHeroPage || isScrolled) {
            navbar.classList.remove('bg-transparent', 'py-4');
            navbar.classList.add('bg-forest/95', 'backdrop-blur-md', 'shadow-lg', 'py-3');
        } else {
            navbar.classList.add('bg-transparent', 'py-4');
            navbar.classList.remove('bg-forest/95', 'backdrop-blur-md', 'shadow-lg', 'py-3');
        }
    }
    updateNav();
    window.addEventListener('scroll', updateNav);
    document.querySelectorAll('[data-nav]').forEach(el => {
        if (el.dataset.nav === currentPage) el.classList.add('bg-amberWarm', 'text-forest', 'font-bold');
    });
    observeReveals();
});