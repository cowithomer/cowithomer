'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c42dbab856c5b5392b965bb6dbe7d1fa",
"assets/AssetManifest.bin.json": "967653871c9b0e6b6732e300afb57ac8",
"assets/assets/images/enemy/boss_1.png": "eb240f02dddbd3a49df62cbe88304b04",
"assets/assets/images/enemy/boss_2.png": "3c1ae5ecf433ac35bbfa23e83faacba3",
"assets/assets/images/enemy/boss_3.png": "9fba743eeaf9eedfbb7f86fdc5c014a6",
"assets/assets/images/enemy/enemy_1.png": "5a946bde1329036f82be88c846fd45bc",
"assets/assets/images/enemy/enemy_10.png": "34c9fcb70806fa8f2c4f7c268b6278ae",
"assets/assets/images/enemy/enemy_11.png": "ba849d12ef5a0472eb76af2973876002",
"assets/assets/images/enemy/enemy_12.png": "4aeafab5fa77ef42b592c53c49761ddf",
"assets/assets/images/enemy/enemy_2.png": "00301b158f656bcef832d00f2f3481a8",
"assets/assets/images/enemy/enemy_3.png": "b3c4c1676f71159c94fa66b10f08df2e",
"assets/assets/images/enemy/enemy_4.png": "f4eb4d6e6b8e495e2a60ccf4c8ba31ef",
"assets/assets/images/enemy/enemy_5.png": "5f95d60f34e96fef09e1b02cc640ff40",
"assets/assets/images/enemy/enemy_6.png": "719be5a31eefc704a849af8c218dddbb",
"assets/assets/images/enemy/enemy_7.png": "d4f0a26485f9b971771faabe4ee1f83d",
"assets/assets/images/enemy/enemy_8.png": "301bdf30a19ad6508bac58227a1c4965",
"assets/assets/images/enemy/enemy_9.png": "fd009911582bab1c0035c907e26da342",
"assets/assets/images/enemy/pow1.png": "5d69209d1e49a61144675fa750ae6a06",
"assets/assets/images/enemy/pow2.png": "19740bb7f338cfb6120b6dcd2e385dee",
"assets/assets/images/enemy/pow3.png": "331b29b7f016d570aac7186adc091e40",
"assets/assets/images/enemy/pow4.png": "93be15880f96b081b6626ec92335323a",
"assets/assets/images/enemy/pow5.png": "5d9b3a5835a8262a1b77fd499935102f",
"assets/assets/images/enemy/pow6.png": "07c2d3d4e586e5e589c3c4456b49be1c",
"assets/assets/images/enemy/pow7.png": "7581c9a0d01ccb1de0771f6065961c12",
"assets/assets/images/enemy/pow8.png": "2fcc6ae0b1b2903c0f3a137e8f970a0c",
"assets/assets/images/icons/appbarhome_bg.svg": "5f864193aeca561087c2adae36f40f0f",
"assets/assets/images/icons/archevements.png": "37714d07b28a23af9ae922db0e799f5a",
"assets/assets/images/icons/arti.png": "3664d57c61c35952baf8e238dbb7127b",
"assets/assets/images/icons/ayarlar.png": "8b31bae162198ee1803e0875203506c7",
"assets/assets/images/icons/back.png": "f10bd5f9a89df29743ff633f727992ea",
"assets/assets/images/icons/back_set.png": "9eb4996e0b0897ac10f0c3d5026e17f2",
"assets/assets/images/icons/bar_bg.png": "b6b40b89961867f76f6593a3cc01aacf",
"assets/assets/images/icons/bar_bg.svg": "60f61b06d29ca706329775700e6a4eac",
"assets/assets/images/icons/basarilar.png": "dfdc3f8c6190a497303ca13ef3cf9053",
"assets/assets/images/icons/bg.svg": "8d19e4f4b9ac45056803ed7884983b24",
"assets/assets/images/icons/blocker.png": "01ed15d0fe8db8bb219a17252419b4a4",
"assets/assets/images/icons/blue.png": "8aef90cd8bc22ed902564156e555fdf8",
"assets/assets/images/icons/bomb.png": "c80b9c882b9fac030cd33af231099b70",
"assets/assets/images/icons/btn1.png": "2a3340eb829b5b5d258a688ecbcc6ee7",
"assets/assets/images/icons/btn3.png": "0bfe5a1c598665dc6abee123c3b7d061",
"assets/assets/images/icons/cancel.png": "c517a4023337ba5057549faf6f8f0d4f",
"assets/assets/images/icons/character_danger.png": "37eac3a03a3a1d0d6f675d737091d8bd",
"assets/assets/images/icons/character_think.png": "8e7652f1887c62c78ed985850b3e16e5",
"assets/assets/images/icons/character_win.png": "91e6730b134d674da2d50795a61d6c64",
"assets/assets/images/icons/check.png": "7fd1b02e54cc9f3838209d66847ea5d4",
"assets/assets/images/icons/checko.png": "03bf85bdfc06e6296b0bb2434a6751e2",
"assets/assets/images/icons/chest_closed.png": "0c92476c8bc17a86da1327270252ba72",
"assets/assets/images/icons/chest_open.png": "814fb02fe7efd02e75c86f7809c57431",
"assets/assets/images/icons/cizim.png": "5e2ff4142a508a45998f13d5a692352e",
"assets/assets/images/icons/clock.png": "2074ffff0139de390297653160c1287a",
"assets/assets/images/icons/desc_bg.svg": "fc7b13312edb795f28658af8363e77a3",
"assets/assets/images/icons/desc_bg_home.svg": "0fd50b5cb007c1b7229b7f343677dfca",
"assets/assets/images/icons/down.png": "190383d2d258ddaef3aafa0978ad066d",
"assets/assets/images/icons/edgerative_elements.png": "3de6af129340a458d9260877453d9405",
"assets/assets/images/icons/false.png": "b910b38c2c5a3c5277a3bf1444d87616",
"assets/assets/images/icons/flash.png": "834a307ec31713e2899cce3f255251b3",
"assets/assets/images/icons/folder.png": "5c197d962380163321c02c34d92c7132",
"assets/assets/images/icons/game.png": "5986f0204c7031c664b1f7daf359d9dd",
"assets/assets/images/icons/gift_wheel.png": "e37a719f5c6e0d6ba56422180417accf",
"assets/assets/images/icons/Group%252067.svg": "823444447738e03f84036559d8f37ed0",
"assets/assets/images/icons/h1.png": "b94a8c05962339483e58ca3ef22fe0d8",
"assets/assets/images/icons/h2.png": "9aaaf597fc7a8f8e886ed89f3c5d1dbd",
"assets/assets/images/icons/h3.png": "d9aca0d3ea1f4640b2f769cb0e444ee4",
"assets/assets/images/icons/h4.png": "1aed6e5b1ed89b4aabe3838907eda025",
"assets/assets/images/icons/h5.png": "2d314b810b00b2d0495b6e2e31b49ca3",
"assets/assets/images/icons/hearth.png": "2adb461a58da77361ba536c4118d0c11",
"assets/assets/images/icons/hearth_empty.png": "2d517c91e1f96f11b52851a010964f69",
"assets/assets/images/icons/hesapmakinesi.png": "ec3e6aeaf1bf79445953436de3a7dfca",
"assets/assets/images/icons/hint.png": "42093d0f646466dfbe44cf7f9c66d07e",
"assets/assets/images/icons/ingilizce.svg": "98f336192794599656322ba7b66c0e0b",
"assets/assets/images/icons/istatistik.png": "5e66fb5d1064387c6e52dec93b47ade4",
"assets/assets/images/icons/key.png": "45040da372e0ce85a0cb06e752551c98",
"assets/assets/images/icons/klasik.svg": "13a2de3654e9abb198a6c7c8ed4f1561",
"assets/assets/images/icons/lang.png": "6888997cd5df1f63f89da9c89bea95b9",
"assets/assets/images/icons/lock.png": "3c4abad34c0b35b727123cbf3aaf0c9d",
"assets/assets/images/icons/logo_alt.png": "08bea739dc5744ae846a148d1b10aa7d",
"assets/assets/images/icons/modal_logo.png": "f4141002808dbb4d8520b969f1e2d9a1",
"assets/assets/images/icons/new/active_segment.png": "b434f80aa943f06c478604e3aaead3cf",
"assets/assets/images/icons/new/appbar.png": "e00e6926bc871a408dcd49d479ad968e",
"assets/assets/images/icons/new/appbar_bg.png": "9cbb52a28643db7d3adb5b12b1a6b1a0",
"assets/assets/images/icons/new/appbar_bg.svg": "18ce33bdde98981d1987c89a247874fa",
"assets/assets/images/icons/new/appbar_bg_1.png": "b65aea5417eb27a0c0b50961ba1a1b47",
"assets/assets/images/icons/new/appbar_bg_2.png": "eb3bc5ab692d31c0c5e02352e444c60a",
"assets/assets/images/icons/new/appbar_home.png": "1403e0b0c6caaa252a8e128440a1a7be",
"assets/assets/images/icons/new/b1.png": "82a07e542ad38498a63e87f0b9d891c9",
"assets/assets/images/icons/new/b2.png": "5d9ae0a329eec6a34839dede62eda1f8",
"assets/assets/images/icons/new/background.jpeg": "5fd828e57c7414a4b5142f8bd7222761",
"assets/assets/images/icons/new/background.jpg": "0ac9abbcd64a88c916a06536e1857eec",
"assets/assets/images/icons/new/background.svg": "e443d58d222d74e4df7ee31b9bf31d16",
"assets/assets/images/icons/new/back_button.png": "a848a36197cf6b5c732cef8398af5e2f",
"assets/assets/images/icons/new/block.png": "7ffff3f96073139b06f6b122748c70d9",
"assets/assets/images/icons/new/ChatGPT%2520Image%252020%2520Mar%25202026%252001_42_29-Photoroom.png": "1800465471517e45b5aff3723273448f",
"assets/assets/images/icons/new/close_button.png": "4b3bc727ec3e859f8389954a6392a1d4",
"assets/assets/images/icons/new/co1.png": "2ed0f80d23bb03ccfef00095d151b47a",
"assets/assets/images/icons/new/co2.png": "741215f69ade64e599afc7291e829229",
"assets/assets/images/icons/new/co3.png": "f2fc5d578b86e60c9f5dbf8aaa9e067b",
"assets/assets/images/icons/new/empty_track.png": "67cda82729b3053fc5b8a74ebb268484",
"assets/assets/images/icons/new/enemy_sheets.png": "621e7e73cb59d1c9f2925999fd07e99b",
"assets/assets/images/icons/new/game.png": "80ef83523a39d419a9ad23c052d031bf",
"assets/assets/images/icons/new/game_over_text.png": "80919d54274900da95005f5c13c8f588",
"assets/assets/images/icons/new/general_header.png": "b2b75fd6fa0748ce4576c7ad81cb7b39",
"assets/assets/images/icons/new/hint_area.png": "013555eed32e979e2da17565248bb9ef",
"assets/assets/images/icons/new/hint_area.svg": "69ab0a34986e66a73ffbf95ef46571dc",
"assets/assets/images/icons/new/hint_area_2.svg": "d19f9631e3bc990215ea9330dd8f72ca",
"assets/assets/images/icons/new/key.png": "19ba163bf74c2c5d2506676898da4a3d",
"assets/assets/images/icons/new/key0.png": "55f2bef6162a330a1bc1e550248e6a6a",
"assets/assets/images/icons/new/language.png": "d32e0fc278e271ad1473c3ac6dfcf578",
"assets/assets/images/icons/new/modal_background.png": "112c6ddb99b125ebb9c474ec51dc8a26",
"assets/assets/images/icons/new/modal_game_completed.png": "d0563f23046e9281ae34cff125de2993",
"assets/assets/images/icons/new/modal_game_over.png": "668dea801cd564bca0c2f6458c7eb22d",
"assets/assets/images/icons/new/modal_game_over_crossword.png": "134dd2962c55d1b49e2f3d5007af25fa",
"assets/assets/images/icons/new/modal_header.png": "e9dfa2c0ffb525069dd2a29c37de080f",
"assets/assets/images/icons/new/modal_how_to_play.png": "ce188427ec2c1b5a61f2f06284066b3b",
"assets/assets/images/icons/new/modal_how_to_play_1.png": "99b1e6f9b62841479e4f9b4273f841a2",
"assets/assets/images/icons/new/modal_how_to_play_2.png": "a5ad2a064c22bd1d44ff2a2ebfb44ff0",
"assets/assets/images/icons/new/modal_how_to_play_3.png": "878c65160e0b38a38befa814ab5f4e92",
"assets/assets/images/icons/new/modal_how_to_play_4.png": "202a26577d84fe51ac3308bfeb1a807f",
"assets/assets/images/icons/new/modal_how_to_play_crossword.png": "fbc55a3324b0adc4d2b3fafafb523bad",
"assets/assets/images/icons/new/modal_ok_text.png": "8345ced3c81a139f139f69b6137ecb19",
"assets/assets/images/icons/new/modal_reward.png": "5d5e9d4a46e2a433d6c194ee952b5491",
"assets/assets/images/icons/new/modal_reward_text.png": "7c46c2e343996fb95f8a7a40edbee368",
"assets/assets/images/icons/new/modal_score_text.png": "0fa18327b00c6b1f40523c9c41852b91",
"assets/assets/images/icons/new/modal_text.png": "0ec42178f240379caf2bcd6ee60c028f",
"assets/assets/images/icons/new/next_button.png": "cede5e8ee154a13457ff1ee53b5b165b",
"assets/assets/images/icons/new/off.png": "963881bd467aae6b3cb9980891eea508",
"assets/assets/images/icons/new/on.png": "aea74a6753d2d71921879565a65b1c8f",
"assets/assets/images/icons/new/oyun_hakki_kalmadi.png": "3f58e3fa9420cd1047f10f9691b78c6e",
"assets/assets/images/icons/new/plus_add.png": "fc05172e29ae207386ac72c7e5de5529",
"assets/assets/images/icons/new/premium.png": "a2f62b25e7bc777f663aadd09a1b33ce",
"assets/assets/images/icons/new/previous_button.png": "83dd21b217b4cac5361f1f66d5034ecb",
"assets/assets/images/icons/new/profile&language_card.png": "0b44af314643f19aabe52c442bc9dd34",
"assets/assets/images/icons/new/profile.png": "8fe876aba76fe192812b33e660e6b71f",
"assets/assets/images/icons/new/quick_buton.png": "626c24c3546fb32f0cf0a6d91170cae5",
"assets/assets/images/icons/new/restore.png": "f54451ed136a3ba330cce75e405f79aa",
"assets/assets/images/icons/new/retry_buton.png": "4654b4002aa9852625e08b1bfac0bdd5",
"assets/assets/images/icons/new/settings.png": "52c7176d921cf407f9a5cc8d781ea402",
"assets/assets/images/icons/new/settings_title.png": "2443071e005edf749bf227c660dce1b6",
"assets/assets/images/icons/new/speaker.png": "0ca3cb719ed41bbb091fd25a37a89ec6",
"assets/assets/images/icons/new/star.png": "9386b4da8de42cb131d64a2c197e1d63",
"assets/assets/images/icons/new/thumb.png": "210ecfe62ed9afbb7c5c296031efd9c2",
"assets/assets/images/icons/new/tutorial_ok_text.png": "fb9d28b33ece503237922010e0e42821",
"assets/assets/images/icons/new/understood.png": "c09e2d3f017aa15aff8afa8f099a9c19",
"assets/assets/images/icons/new/version_card.png": "48236cfc85bac13ce19fda89f4cdbd48",
"assets/assets/images/icons/new/volume.png": "2aeaf1fba8ddeb608ba1015ace306371",
"assets/assets/images/icons/new/volume_card.png": "ce244c1cf094352f1b9a4d877c2b7344",
"assets/assets/images/icons/new/wall.png": "b51cb2eb569137f91e775925f8bf1dd4",
"assets/assets/images/icons/next.png": "fc6b03b735b465df357d2a9e8b2d0950",
"assets/assets/images/icons/node_active.png": "2175e6f11b3a07172ec63d7dc68d135a",
"assets/assets/images/icons/node_completed.png": "e48814191fe894d91f30dfbe3537bc16",
"assets/assets/images/icons/node_locked.png": "7183e83f96679634ac9f30b4635a39b1",
"assets/assets/images/icons/po1.png": "f7439d39f91270bb0810f955d9b4a1ea",
"assets/assets/images/icons/po2.png": "75d6e8402a89366dbd80f460df1c677d",
"assets/assets/images/icons/po3.png": "0a98b84c66eb595008f5b6bc1bf8254b",
"assets/assets/images/icons/po_back.png": "1f104f9047eca27dacbc7056cddee43f",
"assets/assets/images/icons/rankaktif.png": "1e95d142e1241fe890dac101c0558aa8",
"assets/assets/images/icons/rankpasif.png": "a40b0bff8a15a0f842a4863fe8aca350",
"assets/assets/images/icons/remove.png": "0c02ee14cbd4e17928d9c297a30aa83a",
"assets/assets/images/icons/save.png": "278b94363a7bcfd1b8d2a2b9da259656",
"assets/assets/images/icons/scrolbar.png": "895192902c9d497e903e7633efb9c7e7",
"assets/assets/images/icons/search.png": "9dc84e163f8515f2a34f95c69fb3054b",
"assets/assets/images/icons/settings.png": "8f0d3a74629d4c38988564230f49f454",
"assets/assets/images/icons/sinav.svg": "b5fdc0ea7064e699ba7d8225727d69c7",
"assets/assets/images/icons/sound.png": "402f4a1966c35400ff61986699a79951",
"assets/assets/images/icons/star.png": "654b1c4e3d4900b6b933b0f5fbe92213",
"assets/assets/images/icons/stats.png": "f6baf0b5be8f1edb5f62887ff1a3a7be",
"assets/assets/images/icons/tac.png": "bf0f035d9116030559c0031d3669bcd1",
"assets/assets/images/icons/text_logo.png": "239fbd5ecedc2adc9b0d6156f92f06ae",
"assets/assets/images/icons/text_logo_yeni.png": "e0eae2ecc53cac027deaba83792e1c5b",
"assets/assets/images/icons/true.png": "baa7338bd5f11e7a92a5dd40705e240e",
"assets/assets/images/icons/turn.png": "d48eb96a1f492f1a3c2004c08f5caa65",
"assets/assets/images/icons/up.png": "5288d8b00eb80b6881de360d1a3845aa",
"assets/assets/images/icons/win-Photoroom.png": "8aaa0113aced31d37408cd8a7319e104",
"assets/assets/images/icons/x_appbar_bg.svg": "af2f4eb7c7ffef0f25b6cdc204f9c525",
"assets/assets/images/icons/x_hearth.png": "65e4b4a57f3720fb5fefbecb6253bf84",
"assets/assets/images/icons/yardim.png": "93cd19b3b2e3af2e82d26de9ae3e73fd",
"assets/assets/images/puzzle/puzzle1.png": "be13680ce67ddbddb31fbdb584f6a751",
"assets/assets/images/puzzle/puzzle2.png": "6658e6c5db56c92d97ead4dfcaca1adb",
"assets/assets/images/puzzle/puzzle3.png": "03488660684eb0e15f0c44bf7171acbc",
"assets/assets/images/tutorial/tutorial_arrow_panel.png": "9afcb1144018d42a9fd8b2bade6acd08",
"assets/assets/images/tutorial/tutorial_bubling.png": "0760500e1957ebc11f68d661792da229",
"assets/assets/images/tutorial/tutorial_hand.png": "371c157735d0412b1f81e22c5d5ef538",
"assets/assets/images/tutorial/tutorial_powerups_panel.png": "b0746dd7f23aa6b7bf9222f12b358e89",
"assets/assets/images/tutorial/tutorial_powerups_panel_crossword.png": "67c3c84c826da006a7bbed8591fa1f13",
"assets/assets/levels/level_1.json": "c7dd3c146358d5424d82c48e80d114cd",
"assets/assets/levels/level_tasarim.json": "92452807a0e66f3ba7d13647096164eb",
"assets/assets/sound/bgm.mp3": "8906ee3beff31ce4bced3de63b44a07f",
"assets/assets/sound/check.ogg": "4c063b519fe0b43ffb7c6555aa8ad22d",
"assets/assets/sound/drop.ogg": "a7fbcb59b45db1d2b998ea416bf52c62",
"assets/assets/sound/wrong.ogg": "ed97458c522ebd7161fb3044f70702ef",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "32401cecab565602c66a65aa1634d3f0",
"assets/NOTICES": "9eabb1e3593ddce29cd091b6d8197167",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "83de3081359fc67741e1b747b271988e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "486aabe6472d2fca16397cfc2a0bcbdb",
"/": "486aabe6472d2fca16397cfc2a0bcbdb",
"main.dart.js": "19c2c0cf5cfb8a565aa1e277e79b524a",
"manifest.json": "25f7303974da8b9dbaefca85cb078a18",
"version.json": "65e91c0c90639134158667aec8fdc188"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
