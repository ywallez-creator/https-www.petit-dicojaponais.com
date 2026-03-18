// data.js — Dictionnaire japonais-français N5→N1
// 400+ mots couvrant les 5 niveaux JLPT

const WORDS = [
  // ═══════════════════════════════════════════
  // N5 — Noms
  // ═══════════════════════════════════════════
  { id:1, kanji:"日本語", reading:"にほんご", romaji:"nihongo", translation:"langue japonaise", level:"N5", category:"nom", examples:[{jp:"日本語が好きです。", fr:"J'aime la langue japonaise."}] },
  { id:2, kanji:"水", reading:"みず", romaji:"mizu", translation:"eau", level:"N5", category:"nom", examples:[{jp:"水を飲みます。", fr:"Je bois de l'eau."}] },
  { id:3, kanji:"火", reading:"ひ", romaji:"hi", translation:"feu", level:"N5", category:"nom", examples:[{jp:"火をつけてください。", fr:"Allumez le feu, s'il vous plaît."}] },
  { id:4, kanji:"山", reading:"やま", romaji:"yama", translation:"montagne", level:"N5", category:"nom", examples:[{jp:"山に登ります。", fr:"Je gravis la montagne."}] },
  { id:5, kanji:"川", reading:"かわ", romaji:"kawa", translation:"rivière, fleuve", level:"N5", category:"nom", examples:[{jp:"川で泳ぎます。", fr:"Je nage dans la rivière."}] },
  { id:6, kanji:"木", reading:"き", romaji:"ki", translation:"arbre, bois", level:"N5", category:"nom", examples:[{jp:"木の下で休みます。", fr:"Je me repose sous l'arbre."}] },
  { id:7, kanji:"人", reading:"ひと", romaji:"hito", translation:"personne, être humain", level:"N5", category:"nom", examples:[{jp:"あの人は誰ですか。", fr:"Qui est cette personne ?"}] },
  { id:8, kanji:"時間", reading:"じかん", romaji:"jikan", translation:"temps, heure", level:"N5", category:"nom", examples:[{jp:"時間がありません。", fr:"Je n'ai pas le temps."}] },
  { id:9, kanji:"今日", reading:"きょう", romaji:"kyou", translation:"aujourd'hui", level:"N5", category:"nom", examples:[{jp:"今日は月曜日です。", fr:"Aujourd'hui c'est lundi."}] },
  { id:10, kanji:"明日", reading:"あした", romaji:"ashita", translation:"demain", level:"N5", category:"nom", examples:[{jp:"明日また来ます。", fr:"Je reviendrai demain."}] },
  { id:11, kanji:"学校", reading:"がっこう", romaji:"gakkou", translation:"école", level:"N5", category:"nom", examples:[{jp:"学校に行きます。", fr:"Je vais à l'école."}] },
  { id:12, kanji:"先生", reading:"せんせい", romaji:"sensei", translation:"professeur, enseignant", level:"N5", category:"nom", examples:[{jp:"先生が教えます。", fr:"Le professeur enseigne."}] },
  { id:13, kanji:"友達", reading:"ともだち", romaji:"tomodachi", translation:"ami, camarade", level:"N5", category:"nom", examples:[{jp:"友達と遊びます。", fr:"Je joue avec mes amis."}] },
  { id:14, kanji:"家族", reading:"かぞく", romaji:"kazoku", translation:"famille", level:"N5", category:"nom", examples:[{jp:"家族と食事します。", fr:"Je prends le repas en famille."}] },
  { id:15, kanji:"電話", reading:"でんわ", romaji:"denwa", translation:"téléphone", level:"N5", category:"nom", examples:[{jp:"電話をかけます。", fr:"Je passe un appel téléphonique."}] },
  { id:16, kanji:"電車", reading:"でんしゃ", romaji:"densha", translation:"train, métro", level:"N5", category:"nom", examples:[{jp:"電車で行きます。", fr:"J'y vais en train."}] },
  { id:17, kanji:"本", reading:"ほん", romaji:"hon", translation:"livre", level:"N5", category:"nom", examples:[{jp:"本を読みます。", fr:"Je lis un livre."}] },
  { id:18, kanji:"食べ物", reading:"たべもの", romaji:"tabemono", translation:"nourriture, aliment", level:"N5", category:"nom", examples:[{jp:"日本の食べ物が好きです。", fr:"J'aime la nourriture japonaise."}] },
  { id:19, kanji:"飲み物", reading:"のみもの", romaji:"nomimono", translation:"boisson", level:"N5", category:"nom", examples:[{jp:"飲み物は何がいいですか。", fr:"Que voulez-vous boire ?"}] },
  { id:20, kanji:"名前", reading:"なまえ", romaji:"namae", translation:"nom, prénom", level:"N5", category:"nom", examples:[{jp:"お名前は何ですか。", fr:"Comment vous appelez-vous ?"}] },

  // N5 — Verbes
  { id:21, kanji:"食べる", reading:"たべる", romaji:"taberu", translation:"manger", level:"N5", category:"verbe", examples:[{jp:"ご飯を食べます。", fr:"Je mange du riz."}] },
  { id:22, kanji:"飲む", reading:"のむ", romaji:"nomu", translation:"boire", level:"N5", category:"verbe", examples:[{jp:"お茶を飲みます。", fr:"Je bois du thé."}] },
  { id:23, kanji:"行く", reading:"いく", romaji:"iku", translation:"aller", level:"N5", category:"verbe", examples:[{jp:"学校に行きます。", fr:"Je vais à l'école."}] },
  { id:24, kanji:"来る", reading:"くる", romaji:"kuru", translation:"venir", level:"N5", category:"verbe", examples:[{jp:"友達が来ます。", fr:"Mon ami vient."}] },
  { id:25, kanji:"見る", reading:"みる", romaji:"miru", translation:"voir, regarder", level:"N5", category:"verbe", examples:[{jp:"映画を見ます。", fr:"Je regarde un film."}] },
  { id:26, kanji:"聞く", reading:"きく", romaji:"kiku", translation:"écouter, entendre", level:"N5", category:"verbe", examples:[{jp:"音楽を聞きます。", fr:"J'écoute de la musique."}] },
  { id:27, kanji:"話す", reading:"はなす", romaji:"hanasu", translation:"parler", level:"N5", category:"verbe", examples:[{jp:"日本語で話します。", fr:"Je parle en japonais."}] },
  { id:28, kanji:"書く", reading:"かく", romaji:"kaku", translation:"écrire", level:"N5", category:"verbe", examples:[{jp:"手紙を書きます。", fr:"J'écris une lettre."}] },
  { id:29, kanji:"読む", reading:"よむ", romaji:"yomu", translation:"lire", level:"N5", category:"verbe", examples:[{jp:"新聞を読みます。", fr:"Je lis le journal."}] },
  { id:30, kanji:"買う", reading:"かう", romaji:"kau", translation:"acheter", level:"N5", category:"verbe", examples:[{jp:"本を買います。", fr:"J'achète un livre."}] },
  { id:31, kanji:"寝る", reading:"ねる", romaji:"neru", translation:"dormir, se coucher", level:"N5", category:"verbe", examples:[{jp:"早く寝ます。", fr:"Je me couche tôt."}] },
  { id:32, kanji:"起きる", reading:"おきる", romaji:"okiru", translation:"se lever, se réveiller", level:"N5", category:"verbe", examples:[{jp:"六時に起きます。", fr:"Je me lève à six heures."}] },

  // N5 — Adjectifs
  { id:33, kanji:"大きい", reading:"おおきい", romaji:"ookii", translation:"grand, gros", level:"N5", category:"adjectif", examples:[{jp:"大きい犬です。", fr:"C'est un grand chien."}] },
  { id:34, kanji:"小さい", reading:"ちいさい", romaji:"chiisai", translation:"petit", level:"N5", category:"adjectif", examples:[{jp:"小さい部屋です。", fr:"C'est une petite chambre."}] },
  { id:35, kanji:"新しい", reading:"あたらしい", romaji:"atarashii", translation:"nouveau, neuf", level:"N5", category:"adjectif", examples:[{jp:"新しいスマホを買いました。", fr:"J'ai acheté un nouveau téléphone."}] },
  { id:36, kanji:"古い", reading:"ふるい", romaji:"furui", translation:"vieux, ancien", level:"N5", category:"adjectif", examples:[{jp:"古い寺があります。", fr:"Il y a un vieux temple."}] },
  { id:37, kanji:"好き", reading:"すき", romaji:"suki", translation:"aimer, apprécier", level:"N5", category:"adjectif", examples:[{jp:"猫が好きです。", fr:"J'aime les chats."}] },
  { id:38, kanji:"嫌い", reading:"きらい", romaji:"kirai", translation:"détester, ne pas aimer", level:"N5", category:"adjectif", examples:[{jp:"虫が嫌いです。", fr:"Je déteste les insectes."}] },

  // ═══════════════════════════════════════════
  // N4 — Noms
  // ═══════════════════════════════════════════
  { id:40, kanji:"経験", reading:"けいけん", romaji:"keiken", translation:"expérience", level:"N4", category:"nom", examples:[{jp:"経験が大切です。", fr:"L'expérience est importante."}] },
  { id:41, kanji:"文化", reading:"ぶんか", romaji:"bunka", translation:"culture", level:"N4", category:"nom", examples:[{jp:"日本文化を学びます。", fr:"J'étudie la culture japonaise."}] },
  { id:42, kanji:"社会", reading:"しゃかい", romaji:"shakai", translation:"société", level:"N4", category:"nom", examples:[{jp:"社会に貢献します。", fr:"Je contribue à la société."}] },
  { id:43, kanji:"問題", reading:"もんだい", romaji:"mondai", translation:"problème, question", level:"N4", category:"nom", examples:[{jp:"問題を解きます。", fr:"Je résous un problème."}] },
  { id:44, kanji:"答え", reading:"こたえ", romaji:"kotae", translation:"réponse", level:"N4", category:"nom", examples:[{jp:"答えを探します。", fr:"Je cherche la réponse."}] },
  { id:45, kanji:"気持ち", reading:"きもち", romaji:"kimochi", translation:"sentiment, émotion", level:"N4", category:"nom", examples:[{jp:"気持ちを伝えます。", fr:"Je transmets mes sentiments."}] },
  { id:46, kanji:"場所", reading:"ばしょ", romaji:"basho", translation:"endroit, lieu", level:"N4", category:"nom", examples:[{jp:"この場所が好きです。", fr:"J'aime cet endroit."}] },
  { id:47, kanji:"方法", reading:"ほうほう", romaji:"houhou", translation:"méthode, façon", level:"N4", category:"nom", examples:[{jp:"よい方法があります。", fr:"Il y a une bonne méthode."}] },
  { id:48, kanji:"理由", reading:"りゆう", romaji:"riyuu", translation:"raison, motif", level:"N4", category:"nom", examples:[{jp:"理由を教えてください。", fr:"Expliquez-moi la raison."}] },
  { id:49, kanji:"予定", reading:"よてい", romaji:"yotei", translation:"plan, programme", level:"N4", category:"nom", examples:[{jp:"明日の予定は何ですか。", fr:"Quels sont vos plans pour demain ?"}] },
  { id:50, kanji:"準備", reading:"じゅんび", romaji:"junbi", translation:"préparation", level:"N4", category:"nom", examples:[{jp:"準備ができました。", fr:"La préparation est faite."}] },
  { id:51, kanji:"失敗", reading:"しっぱい", romaji:"shippai", translation:"échec, erreur", level:"N4", category:"nom", examples:[{jp:"失敗から学びます。", fr:"J'apprends de mes erreurs."}] },
  { id:52, kanji:"成功", reading:"せいこう", romaji:"seikou", translation:"succès, réussite", level:"N4", category:"nom", examples:[{jp:"成功を目指します。", fr:"Je vise la réussite."}] },

  // N4 — Verbes
  { id:60, kanji:"覚える", reading:"おぼえる", romaji:"oboeru", translation:"mémoriser, se souvenir", level:"N4", category:"verbe", examples:[{jp:"単語を覚えます。", fr:"Je mémorise du vocabulaire."}] },
  { id:61, kanji:"忘れる", reading:"わすれる", romaji:"wasureru", translation:"oublier", level:"N4", category:"verbe", examples:[{jp:"名前を忘れました。", fr:"J'ai oublié son nom."}] },
  { id:62, kanji:"続ける", reading:"つづける", romaji:"tsuzukeru", translation:"continuer", level:"N4", category:"verbe", examples:[{jp:"練習を続けます。", fr:"Je continue à m'entraîner."}] },
  { id:63, kanji:"始まる", reading:"はじまる", romaji:"hajimaru", translation:"commencer (intr.)", level:"N4", category:"verbe", examples:[{jp:"授業が始まります。", fr:"Le cours commence."}] },
  { id:64, kanji:"終わる", reading:"おわる", romaji:"owaru", translation:"finir, se terminer", level:"N4", category:"verbe", examples:[{jp:"仕事が終わりました。", fr:"Le travail est terminé."}] },
  { id:65, kanji:"決める", reading:"きめる", romaji:"kimeru", translation:"décider", level:"N4", category:"verbe", examples:[{jp:"計画を決めます。", fr:"Je décide du plan."}] },
  { id:66, kanji:"伝える", reading:"つたえる", romaji:"tsutaeru", translation:"transmettre, communiquer", level:"N4", category:"verbe", examples:[{jp:"気持ちを伝えます。", fr:"Je communique mes sentiments."}] },
  { id:67, kanji:"変える", reading:"かえる", romaji:"kaeru", translation:"changer, modifier", level:"N4", category:"verbe", examples:[{jp:"計画を変えました。", fr:"J'ai modifié le plan."}] },

  // N4 — Adjectifs / Adverbes
  { id:70, kanji:"便利", reading:"べんり", romaji:"benri", translation:"pratique, commode", level:"N4", category:"adjectif", examples:[{jp:"便利な道具です。", fr:"C'est un outil pratique."}] },
  { id:71, kanji:"大切", reading:"たいせつ", romaji:"taisetsu", translation:"important, précieux", level:"N4", category:"adjectif", examples:[{jp:"健康が大切です。", fr:"La santé est importante."}] },
  { id:72, kanji:"必要", reading:"ひつよう", romaji:"hitsuyou", translation:"nécessaire", level:"N4", category:"adjectif", examples:[{jp:"練習が必要です。", fr:"L'entraînement est nécessaire."}] },
  { id:73, kanji:"正しい", reading:"ただしい", romaji:"tadashii", translation:"correct, juste", level:"N4", category:"adjectif", examples:[{jp:"正しい答えです。", fr:"C'est la bonne réponse."}] },
  { id:74, kanji:"急に", reading:"きゅうに", romaji:"kyuuni", translation:"soudainement, brusquement", level:"N4", category:"adverbe", examples:[{jp:"急に雨が降りました。", fr:"Il s'est soudainement mis à pleuvoir."}] },
  { id:75, kanji:"もちろん", reading:"もちろん", romaji:"mochiron", translation:"bien sûr, évidemment", level:"N4", category:"adverbe", examples:[{jp:"もちろんいいですよ。", fr:"Bien sûr, pas de problème."}] },

  // ═══════════════════════════════════════════
  // N3 — Noms
  // ═══════════════════════════════════════════
  { id:80, kanji:"影響", reading:"えいきょう", romaji:"eikyou", translation:"influence, effet, impact", level:"N3", category:"nom", examples:[{jp:"環境の影響を受けます。", fr:"On subit l'influence de l'environnement."}] },
  { id:81, kanji:"状況", reading:"じょうきょう", romaji:"joukyou", translation:"situation, circonstances", level:"N3", category:"nom", examples:[{jp:"状況を説明します。", fr:"J'explique la situation."}] },
  { id:82, kanji:"関係", reading:"かんけい", romaji:"kankei", translation:"relation, rapport", level:"N3", category:"nom", examples:[{jp:"関係を築きます。", fr:"Je construis une relation."}] },
  { id:83, kanji:"目的", reading:"もくてき", romaji:"mokuteki", translation:"but, objectif", level:"N3", category:"nom", examples:[{jp:"目的を達成します。", fr:"J'atteins mon objectif."}] },
  { id:84, kanji:"結果", reading:"けっか", romaji:"kekka", translation:"résultat, conséquence", level:"N3", category:"nom", examples:[{jp:"結果を待ちます。", fr:"J'attends les résultats."}] },
  { id:85, kanji:"原因", reading:"げんいん", romaji:"gen'in", translation:"cause, origine", level:"N3", category:"nom", examples:[{jp:"原因を調べます。", fr:"J'enquête sur la cause."}] },
  { id:86, kanji:"機会", reading:"きかい", romaji:"kikai", translation:"occasion, opportunité", level:"N3", category:"nom", examples:[{jp:"機会を逃しません。", fr:"Je ne rate pas l'occasion."}] },
  { id:87, kanji:"能力", reading:"のうりょく", romaji:"nouryoku", translation:"capacité, compétence", level:"N3", category:"nom", examples:[{jp:"能力を高めます。", fr:"J'améliore mes compétences."}] },
  { id:88, kanji:"態度", reading:"たいど", romaji:"taido", translation:"attitude, comportement", level:"N3", category:"nom", examples:[{jp:"態度を改めます。", fr:"Je change d'attitude."}] },
  { id:89, kanji:"努力", reading:"どりょく", romaji:"doryoku", translation:"effort, travail", level:"N3", category:"nom", examples:[{jp:"努力が実ります。", fr:"Les efforts portent leurs fruits."}] },
  { id:90, kanji:"意見", reading:"いけん", romaji:"iken", translation:"opinion, avis", level:"N3", category:"nom", examples:[{jp:"意見を述べます。", fr:"J'exprime mon opinion."}] },
  { id:91, kanji:"立場", reading:"たちば", romaji:"tachiba", translation:"position, point de vue", level:"N3", category:"nom", examples:[{jp:"立場を考えます。", fr:"Je considère la position de chacun."}] },
  { id:92, kanji:"印象", reading:"いんしょう", romaji:"inshou", translation:"impression", level:"N3", category:"nom", examples:[{jp:"良い印象を与えます。", fr:"Je donne une bonne impression."}] },
  { id:93, kanji:"変化", reading:"へんか", romaji:"henka", translation:"changement, transformation", level:"N3", category:"nom", examples:[{jp:"大きな変化です。", fr:"C'est un grand changement."}] },

  // N3 — Verbes
  { id:100, kanji:"確認する", reading:"かくにんする", romaji:"kakunin suru", translation:"confirmer, vérifier", level:"N3", category:"verbe", examples:[{jp:"予約を確認します。", fr:"Je confirme ma réservation."}] },
  { id:101, kanji:"判断する", reading:"はんだんする", romaji:"handan suru", translation:"juger, décider", level:"N3", category:"verbe", examples:[{jp:"状況を判断します。", fr:"Je juge la situation."}] },
  { id:102, kanji:"比べる", reading:"くらべる", romaji:"kuraberu", translation:"comparer", level:"N3", category:"verbe", examples:[{jp:"二つを比べます。", fr:"Je compare les deux."}] },
  { id:103, kanji:"失う", reading:"うしなう", romaji:"ushinau", translation:"perdre (qqch d'abstrait)", level:"N3", category:"verbe", examples:[{jp:"自信を失いました。", fr:"J'ai perdu confiance en moi."}] },
  { id:104, kanji:"与える", reading:"あたえる", romaji:"ataeru", translation:"donner, accorder", level:"N3", category:"verbe", examples:[{jp:"影響を与えます。", fr:"Cela exerce une influence."}] },
  { id:105, kanji:"認める", reading:"みとめる", romaji:"mitomeru", translation:"reconnaître, admettre", level:"N3", category:"verbe", examples:[{jp:"間違いを認めます。", fr:"J'admets mon erreur."}] },

  // N3 — Adjectifs / Adverbes
  { id:110, kanji:"複雑", reading:"ふくざつ", romaji:"fukuzatsu", translation:"complexe, compliqué", level:"N3", category:"adjectif", examples:[{jp:"複雑な問題です。", fr:"C'est un problème complexe."}] },
  { id:111, kanji:"適切", reading:"てきせつ", romaji:"tekisetsu", translation:"approprié, adéquat", level:"N3", category:"adjectif", examples:[{jp:"適切な対応が大事です。", fr:"Une réponse appropriée est importante."}] },
  { id:112, kanji:"様々", reading:"さまざま", romaji:"samazama", translation:"divers, varié", level:"N3", category:"adjectif", examples:[{jp:"様々な意見があります。", fr:"Il existe des opinions diverses."}] },
  { id:113, kanji:"徐々に", reading:"じょじょに", romaji:"jojoni", translation:"progressivement, peu à peu", level:"N3", category:"adverbe", examples:[{jp:"徐々に上達します。", fr:"Je progresse peu à peu."}] },
  { id:114, kanji:"いずれ", reading:"いずれ", romaji:"izure", translation:"tôt ou tard, un jour", level:"N3", category:"adverbe", examples:[{jp:"いずれわかります。", fr:"Vous comprendrez tôt ou tard."}] },

  // N3 — Expressions
  { id:120, kanji:"〜に対して", reading:"〜にたいして", romaji:"~ni taishite", translation:"envers, par rapport à", level:"N3", category:"expression", examples:[{jp:"環境に対して責任を持つ。", fr:"Être responsable envers l'environnement."}] },
  { id:121, kanji:"〜によって", reading:"〜によって", romaji:"~ni yotte", translation:"selon, par, en fonction de", level:"N3", category:"expression", examples:[{jp:"人によって違います。", fr:"Cela varie selon les personnes."}] },

  // ═══════════════════════════════════════════
  // N2 — Noms
  // ═══════════════════════════════════════════
  { id:130, kanji:"概念", reading:"がいねん", romaji:"gainen", translation:"concept, notion", level:"N2", category:"nom", examples:[{jp:"抽象的な概念を学ぶ。", fr:"On apprend des concepts abstraits."}] },
  { id:131, kanji:"傾向", reading:"けいこう", romaji:"keikou", translation:"tendance, penchant", level:"N2", category:"nom", examples:[{jp:"増加する傾向があります。", fr:"Il y a une tendance à la hausse."}] },
  { id:132, kanji:"背景", reading:"はいけい", romaji:"haikei", translation:"arrière-plan, contexte", level:"N2", category:"nom", examples:[{jp:"歴史的な背景を理解する。", fr:"Comprendre le contexte historique."}] },
  { id:133, kanji:"矛盾", reading:"むじゅん", romaji:"mujun", translation:"contradiction, paradoxe", level:"N2", category:"nom", examples:[{jp:"矛盾を感じます。", fr:"Je ressens une contradiction."}] },
  { id:134, kanji:"根拠", reading:"こんきょ", romaji:"konkyo", translation:"fondement, base, preuve", level:"N2", category:"nom", examples:[{jp:"根拠を示してください。", fr:"Montrez-moi les preuves."}] },
  { id:135, kanji:"観点", reading:"かんてん", romaji:"kanten", translation:"point de vue, perspective", level:"N2", category:"nom", examples:[{jp:"様々な観点から考える。", fr:"Réfléchir sous différentes perspectives."}] },
  { id:136, kanji:"促進", reading:"そくしん", romaji:"sokushin", translation:"promotion, accélération", level:"N2", category:"nom", examples:[{jp:"理解の促進を図る。", fr:"On cherche à favoriser la compréhension."}] },
  { id:137, kanji:"恩恵", reading:"おんけい", romaji:"onkei", translation:"bienfait, grâce, bénéfice", level:"N2", category:"nom", examples:[{jp:"技術の恩恵を受ける。", fr:"Bénéficier des avantages de la technologie."}] },
  { id:138, kanji:"妥協", reading:"だきょう", romaji:"dakyou", translation:"compromis, concession", level:"N2", category:"nom", examples:[{jp:"妥協点を見つける。", fr:"Trouver un compromis."}] },
  { id:139, kanji:"懸念", reading:"けねん", romaji:"kenen", translation:"préoccupation, crainte", level:"N2", category:"nom", examples:[{jp:"安全への懸念があります。", fr:"Il y a des préoccupations concernant la sécurité."}] },
  { id:140, kanji:"途方", reading:"とほう", romaji:"tohou", translation:"direction, moyen (perdu)", level:"N2", category:"nom", examples:[{jp:"途方に暮れています。", fr:"Je suis perdu, je ne sais que faire."}] },
  { id:141, kanji:"見解", reading:"けんかい", romaji:"kenkai", translation:"opinion, point de vue (formel)", level:"N2", category:"nom", examples:[{jp:"専門家の見解を聞く。", fr:"On écoute l'avis des experts."}] },

  // N2 — Verbes
  { id:150, kanji:"捉える", reading:"とらえる", romaji:"toraeru", translation:"saisir, percevoir, appréhender", level:"N2", category:"verbe", examples:[{jp:"問題の本質を捉える。", fr:"Saisir l'essence du problème."}] },
  { id:151, kanji:"踏まえる", reading:"ふまえる", romaji:"fumaeru", translation:"se baser sur, prendre en compte", level:"N2", category:"verbe", examples:[{jp:"現状を踏まえて判断する。", fr:"Juger en se basant sur la situation actuelle."}] },
  { id:152, kanji:"見極める", reading:"みきわめる", romaji:"mikiwameru", translation:"discerner, jauger", level:"N2", category:"verbe", examples:[{jp:"真偽を見極める。", fr:"Discerner le vrai du faux."}] },
  { id:153, kanji:"促す", reading:"うながす", romaji:"unagasu", translation:"inciter, encourager, accélérer", level:"N2", category:"verbe", examples:[{jp:"行動を促します。", fr:"J'incite à l'action."}] },
  { id:154, kanji:"懸ける", reading:"かける", romaji:"kakeru", translation:"risquer, mettre en jeu", level:"N2", category:"verbe", examples:[{jp:"命を懸けて戦う。", fr:"Se battre au péril de sa vie."}] },
  { id:155, kanji:"妨げる", reading:"さまたげる", romaji:"samatageru", translation:"entraver, empêcher, gêner", level:"N2", category:"verbe", examples:[{jp:"進歩を妨げる。", fr:"Entraver la progression."}] },

  // N2 — Adjectifs / Adverbes
  { id:160, kanji:"曖昧", reading:"あいまい", romaji:"aimai", translation:"ambigu, vague, flou", level:"N2", category:"adjectif", examples:[{jp:"曖昧な表現は避ける。", fr:"On évite les expressions ambiguës."}] },
  { id:161, kanji:"緊迫", reading:"きんぱく", romaji:"kinpaku", translation:"tension, urgence", level:"N2", category:"adjectif", examples:[{jp:"緊迫した状況です。", fr:"La situation est tendue."}] },
  { id:162, kanji:"柔軟", reading:"じゅうなん", romaji:"juunan", translation:"flexible, souple", level:"N2", category:"adjectif", examples:[{jp:"柔軟な対応が必要です。", fr:"Une réaction flexible est nécessaire."}] },
  { id:163, kanji:"率直", reading:"そっちょく", romaji:"socchoku", translation:"franc, direct, sincère", level:"N2", category:"adjectif", examples:[{jp:"率直に言います。", fr:"Je vous parle franchement."}] },
  { id:164, kanji:"かつて", reading:"かつて", romaji:"katsute", translation:"autrefois, jadis", level:"N2", category:"adverbe", examples:[{jp:"かつてここは森でした。", fr:"Autrefois, c'était une forêt ici."}] },
  { id:165, kanji:"むしろ", reading:"むしろ", romaji:"mushiro", translation:"plutôt, de préférence", level:"N2", category:"adverbe", examples:[{jp:"むしろ、こちらの方がいい。", fr:"Plutôt, celui-ci est meilleur."}] },

  // N2 — Expressions
  { id:170, kanji:"〜に伴い", reading:"〜にともない", romaji:"~ni tomonai", translation:"avec, parallèlement à, au fur et à mesure", level:"N2", category:"expression", examples:[{jp:"経済成長に伴い物価が上がる。", fr:"Parallèlement à la croissance économique, les prix augmentent."}] },
  { id:171, kanji:"〜を踏まえ", reading:"〜をふまえ", romaji:"~wo fumaete", translation:"en tenant compte de, sur la base de", level:"N2", category:"expression", examples:[{jp:"議論を踏まえて結論を出す。", fr:"Tirer une conclusion en tenant compte du débat."}] },

  // ═══════════════════════════════════════════
  // N1 — Noms
  // ═══════════════════════════════════════════
  { id:180, kanji:"醸成", reading:"じょうせい", romaji:"jousei", translation:"formation graduelle (atmosphère, confiance)", level:"N1", category:"nom", examples:[{jp:"信頼関係の醸成が重要だ。", fr:"La formation progressive de liens de confiance est cruciale."}] },
  { id:181, kanji:"乖離", reading:"かいり", romaji:"kairi", translation:"divergence, écart, séparation", level:"N1", category:"nom", examples:[{jp:"理想と現実の乖離がある。", fr:"Il existe un écart entre idéal et réalité."}] },
  { id:182, kanji:"包括", reading:"ほうかつ", romaji:"houkatsu", translation:"inclusion, englobement, couverture globale", level:"N1", category:"nom", examples:[{jp:"包括的な政策が必要だ。", fr:"Une politique globale est nécessaire."}] },
  { id:183, kanji:"脆弱", reading:"ぜいじゃく", romaji:"zeijaku", translation:"vulnérabilité, fragilité", level:"N1", category:"nom", examples:[{jp:"制度の脆弱性を指摘する。", fr:"On pointe la vulnérabilité du système."}] },
  { id:184, kanji:"逸脱", reading:"いつだつ", romaji:"itsudatsu", translation:"déviation, écart par rapport à la norme", level:"N1", category:"nom", examples:[{jp:"規範からの逸脱は許されない。", fr:"S'écarter de la norme n'est pas toléré."}] },
  { id:185, kanji:"忖度", reading:"そんたく", romaji:"sontaku", translation:"inférer et agir selon les désirs implicites de qqn", level:"N1", category:"nom", examples:[{jp:"忖度が横行している。", fr:"L'inférence des désirs implicites est répandue."}] },
  { id:186, kanji:"瑕疵", reading:"かし", romaji:"kashi", translation:"vice, défaut, faille (juridique)", level:"N1", category:"nom", examples:[{jp:"契約に瑕疵があった。", fr:"Il y avait un vice dans le contrat."}] },
  { id:187, kanji:"懸隔", reading:"けんかく", romaji:"kenkaku", translation:"grand écart, fossé important", level:"N1", category:"nom", examples:[{jp:"両者の間に懸隔がある。", fr:"Il y a un grand fossé entre les deux parties."}] },
  { id:188, kanji:"帰趨", reading:"きすう", romaji:"kisuu", translation:"issue, aboutissement, dénouement", level:"N1", category:"nom", examples:[{jp:"事態の帰趨を見守る。", fr:"On surveille l'issue de la situation."}] },
  { id:189, kanji:"齟齬", reading:"そご", romaji:"sogo", translation:"désaccord, discordance, contradiction", level:"N1", category:"nom", examples:[{jp:"認識に齟齬が生じた。", fr:"Une discordance dans la compréhension est apparue."}] },
  { id:190, kanji:"蓋然性", reading:"がいぜんせい", romaji:"gaizensesei", translation:"probabilité, vraisemblance", level:"N1", category:"nom", examples:[{jp:"蓋然性が高い。", fr:"La probabilité est élevée."}] },
  { id:191, kanji:"逡巡", reading:"しゅんじゅん", romaji:"shunjun", translation:"hésitation, tergiversation", level:"N1", category:"nom", examples:[{jp:"逡巡することなく決断する。", fr:"Décider sans hésitation."}] },
  { id:192, kanji:"忌避", reading:"きひ", romaji:"kihi", translation:"évitement, récusation, aversion", level:"N1", category:"nom", examples:[{jp:"責任を忌避してはいけない。", fr:"Il ne faut pas fuir ses responsabilités."}] },
  { id:193, kanji:"顕在化", reading:"けんざいか", romaji:"kenzaika", translation:"émergence, manifestation visible", level:"N1", category:"nom", examples:[{jp:"問題が顕在化した。", fr:"Le problème s'est manifesté clairement."}] },

  // N1 — Verbes
  { id:200, kanji:"看過する", reading:"かんかする", romaji:"kanka suru", translation:"négliger, passer sous silence, ignorer", level:"N1", category:"verbe", examples:[{jp:"これ以上看過できない。", fr:"On ne peut plus ignorer cela davantage."}] },
  { id:201, kanji:"払拭する", reading:"ふっしょくする", romaji:"fusshoku suru", translation:"dissiper, effacer, lever (un doute)", level:"N1", category:"verbe", examples:[{jp:"不安を払拭する。", fr:"Dissiper les inquiétudes."}] },
  { id:202, kanji:"敷衍する", reading:"ふえんする", romaji:"fuen suru", translation:"développer, élaborer, expliciter", level:"N1", category:"verbe", examples:[{jp:"論点を敷衍する。", fr:"Développer les points argumentatifs."}] },
  { id:203, kanji:"帰着する", reading:"きちゃくする", romaji:"kichaku suru", translation:"aboutir à, en revenir à", level:"N1", category:"verbe", examples:[{jp:"問題は一点に帰着する。", fr:"Le problème aboutit à un seul point."}] },
  { id:204, kanji:"逸する", reading:"いっする", romaji:"issuru", translation:"manquer, rater, s'écarter de", level:"N1", category:"verbe", examples:[{jp:"機会を逸してしまった。", fr:"J'ai raté l'occasion."}] },
  { id:205, kanji:"擁護する", reading:"ようごする", romaji:"yougo suru", translation:"défendre, protéger, soutenir", level:"N1", category:"verbe", examples:[{jp:"人権を擁護する。", fr:"Défendre les droits de l'homme."}] },
  { id:206, kanji:"凌駕する", reading:"りょうがする", romaji:"ryouga suru", translation:"surpasser, dépasser", level:"N1", category:"verbe", examples:[{jp:"期待を凌駕する結果だった。", fr:"Les résultats ont dépassé les attentes."}] },
  { id:207, kanji:"顧慮する", reading:"こりょする", romaji:"koryo suru", translation:"prendre en considération, tenir compte de", level:"N1", category:"verbe", examples:[{jp:"周囲を顧慮して行動する。", fr:"Agir en tenant compte de son entourage."}] },

  // N1 — Adjectifs / Adverbes
  { id:210, kanji:"恣意的", reading:"しいてき", romaji:"shiiteki", translation:"arbitraire, capricieux", level:"N1", category:"adjectif", examples:[{jp:"恣意的な判断を避ける。", fr:"Éviter les jugements arbitraires."}] },
  { id:211, kanji:"暫定的", reading:"ざんていてき", romaji:"zanteiteki", translation:"provisoire, temporaire", level:"N1", category:"adjectif", examples:[{jp:"暫定的な措置を取る。", fr:"Prendre des mesures provisoires."}] },
  { id:212, kanji:"俯瞰的", reading:"ふかんてき", romaji:"fukanteki", translation:"vue d'ensemble, panoramique (métaphorique)", level:"N1", category:"adjectif", examples:[{jp:"俯瞰的な視点が必要だ。", fr:"Il faut une vision d'ensemble."}] },
  { id:213, kanji:"敢えて", reading:"あえて", romaji:"aete", translation:"délibérément, intentionnellement, osant", level:"N1", category:"adverbe", examples:[{jp:"敢えて反対意見を述べる。", fr:"J'ose exprimer une opinion contraire."}] },
  { id:214, kanji:"もとより", reading:"もとより", romaji:"motoyori", translation:"à plus forte raison, cela va de soi, bien sûr", level:"N1", category:"adverbe", examples:[{jp:"もとより承知のことです。", fr:"Cela va de soi, bien entendu."}] },
  { id:215, kanji:"ひいては", reading:"ひいては", romaji:"hiite wa", translation:"et par extension, et par conséquent", level:"N1", category:"adverbe", examples:[{jp:"個人の幸福、ひいては社会の発展。", fr:"Le bonheur individuel, et par extension, le développement de la société."}] },

  // N1 — Expressions
  { id:220, kanji:"〜をもって", reading:"〜をもって", romaji:"~wo motte", translation:"avec, au moyen de, à partir de (date)", level:"N1", category:"expression", examples:[{jp:"本日をもって退任します。", fr:"Je démissionne à compter d'aujourd'hui."}] },
  { id:221, kanji:"〜に即して", reading:"〜にそくして", romaji:"~ni sokushite", translation:"conformément à, selon, en accord avec", level:"N1", category:"expression", examples:[{jp:"事実に即して話す。", fr:"Parler conformément aux faits."}] },
  { id:222, kanji:"〜ならではの", reading:"〜ならではの", romaji:"~naradewa no", translation:"unique à, spécifique à, propre à", level:"N1", category:"expression", examples:[{jp:"日本ならではの文化です。", fr:"C'est une culture unique au Japon."}] },
  { id:223, kanji:"〜に鑑みて", reading:"〜にかんがみて", romaji:"~ni kangamite", translation:"à la lumière de, en tenant compte de", level:"N1", category:"expression", examples:[{jp:"現状に鑑みて判断する。", fr:"Juger à la lumière de la situation actuelle."}] },

  // ═══════════════════════════════════════════
  // Bonus — mots thématiques supplémentaires
  // ═══════════════════════════════════════════
  { id:230, kanji:"桜", reading:"さくら", romaji:"sakura", translation:"cerisier, fleur de cerisier", level:"N5", category:"nom", examples:[{jp:"桜がきれいです。", fr:"Les cerisiers en fleur sont beaux."}] },
  { id:231, kanji:"雪", reading:"ゆき", romaji:"yuki", translation:"neige", level:"N5", category:"nom", examples:[{jp:"雪が降っています。", fr:"Il neige."}] },
  { id:232, kanji:"空", reading:"そら", romaji:"sora", translation:"ciel", level:"N5", category:"nom", examples:[{jp:"空が青い。", fr:"Le ciel est bleu."}] },
  { id:233, kanji:"猫", reading:"ねこ", romaji:"neko", translation:"chat", level:"N5", category:"nom", examples:[{jp:"猫を飼っています。", fr:"J'ai un chat."}] },
  { id:234, kanji:"犬", reading:"いぬ", romaji:"inu", translation:"chien", level:"N5", category:"nom", examples:[{jp:"犬が好きです。", fr:"J'aime les chiens."}] },
  { id:235, kanji:"魚", reading:"さかな", romaji:"sakana", translation:"poisson", level:"N5", category:"nom", examples:[{jp:"魚を食べます。", fr:"Je mange du poisson."}] },
  { id:236, kanji:"料理", reading:"りょうり", romaji:"ryouri", translation:"cuisine, plat cuisiné", level:"N5", category:"nom", examples:[{jp:"料理が好きです。", fr:"J'aime la cuisine."}] },
  { id:237, kanji:"映画", reading:"えいが", romaji:"eiga", translation:"film, cinéma", level:"N5", category:"nom", examples:[{jp:"映画を見ます。", fr:"Je regarde un film."}] },
  { id:238, kanji:"音楽", reading:"おんがく", romaji:"ongaku", translation:"musique", level:"N5", category:"nom", examples:[{jp:"音楽が好きです。", fr:"J'aime la musique."}] },
  { id:239, kanji:"旅行", reading:"りょこう", romaji:"ryokou", translation:"voyage, excursion", level:"N5", category:"nom", examples:[{jp:"旅行に行きます。", fr:"Je pars en voyage."}] },
  { id:240, kanji:"仕事", reading:"しごと", romaji:"shigoto", translation:"travail, emploi", level:"N4", category:"nom", examples:[{jp:"仕事が忙しいです。", fr:"Mon travail est chargé."}] },
  { id:241, kanji:"会社", reading:"かいしゃ", romaji:"kaisha", translation:"entreprise, société", level:"N4", category:"nom", examples:[{jp:"会社に行きます。", fr:"Je vais au bureau."}] },
  { id:242, kanji:"政治", reading:"せいじ", romaji:"seiji", translation:"politique", level:"N3", category:"nom", examples:[{jp:"政治に興味があります。", fr:"Je m'intéresse à la politique."}] },
  { id:243, kanji:"経済", reading:"けいざい", romaji:"keizai", translation:"économie", level:"N3", category:"nom", examples:[{jp:"経済が成長しています。", fr:"L'économie est en croissance."}] },
  { id:244, kanji:"環境", reading:"かんきょう", romaji:"kankyou", translation:"environnement", level:"N3", category:"nom", examples:[{jp:"環境を守ります。", fr:"Je protège l'environnement."}] },
  { id:245, kanji:"技術", reading:"ぎじゅつ", romaji:"gijutsu", translation:"technique, technologie", level:"N3", category:"nom", examples:[{jp:"技術が進歩しています。", fr:"La technologie progresse."}] },
  { id:246, kanji:"科学", reading:"かがく", romaji:"kagaku", translation:"science", level:"N3", category:"nom", examples:[{jp:"科学の発展に貢献する。", fr:"Contribuer au développement de la science."}] },
  { id:247, kanji:"哲学", reading:"てつがく", romaji:"tetsugaku", translation:"philosophie", level:"N2", category:"nom", examples:[{jp:"哲学を学びます。", fr:"J'étudie la philosophie."}] },
  { id:248, kanji:"歴史", reading:"れきし", romaji:"rekishi", translation:"histoire (discipline)", level:"N3", category:"nom", examples:[{jp:"歴史から学びます。", fr:"On apprend de l'histoire."}] },
  { id:249, kanji:"芸術", reading:"げいじゅつ", romaji:"geijutsu", translation:"art, beaux-arts", level:"N3", category:"nom", examples:[{jp:"芸術が好きです。", fr:"J'aime l'art."}] },
  { id:250, kanji:"建築", reading:"けんちく", romaji:"kenchiku", translation:"architecture", level:"N3", category:"nom", examples:[{jp:"建築を勉強しています。", fr:"J'étudie l'architecture."}] },
  { id:251, kanji:"医療", reading:"いりょう", romaji:"iryou", translation:"médecine, soins médicaux", level:"N2", category:"nom", examples:[{jp:"医療が発達しています。", fr:"La médecine est avancée."}] },
  { id:252, kanji:"法律", reading:"ほうりつ", romaji:"houritsu", translation:"loi, droit", level:"N2", category:"nom", examples:[{jp:"法律を守ります。", fr:"Je respecte la loi."}] },
  { id:253, kanji:"権利", reading:"けんり", romaji:"kenri", translation:"droit, prérogative", level:"N2", category:"nom", examples:[{jp:"権利を主張します。", fr:"Je revendique mes droits."}] },
  { id:254, kanji:"義務", reading:"ぎむ", romaji:"gimu", translation:"obligation, devoir", level:"N2", category:"nom", examples:[{jp:"義務を果たします。", fr:"Je remplis mes obligations."}] },
  { id:255, kanji:"自由", reading:"じゆう", romaji:"jiyuu", translation:"liberté", level:"N3", category:"nom", examples:[{jp:"自由を大切にします。", fr:"Je chéris la liberté."}] },
  { id:256, kanji:"平和", reading:"へいわ", romaji:"heiwa", translation:"paix", level:"N3", category:"nom", examples:[{jp:"世界の平和を願います。", fr:"Je souhaite la paix dans le monde."}] },
  { id:257, kanji:"幸福", reading:"こうふく", romaji:"koufuku", translation:"bonheur, félicité", level:"N2", category:"nom", examples:[{jp:"幸福を追い求めます。", fr:"Je poursuis le bonheur."}] },
  { id:258, kanji:"孤独", reading:"こどく", romaji:"kodoku", translation:"solitude, isolement", level:"N2", category:"nom", examples:[{jp:"孤独を感じます。", fr:"Je me sens seul."}] },
  { id:259, kanji:"誠実", reading:"せいじつ", romaji:"seijitsu", translation:"sincérité, honnêteté", level:"N2", category:"adjectif", examples:[{jp:"誠実な人です。", fr:"C'est une personne sincère."}] },
  { id:260, kanji:"謙虚", reading:"けんきょ", romaji:"kenkyo", translation:"humilité, modestie", level:"N2", category:"adjectif", examples:[{jp:"謙虚な姿勢が大切です。", fr:"Une attitude humble est importante."}] },
  { id:261, kanji:"威厳", reading:"いげん", romaji:"igen", translation:"dignité, majesté, autorité", level:"N1", category:"nom", examples:[{jp:"威厳を保つ。", fr:"Maintenir sa dignité."}] },
  { id:262, kanji:"懐疑", reading:"かいぎ", romaji:"kaigi", translation:"scepticisme, doute", level:"N1", category:"nom", examples:[{jp:"懐疑的な目で見る。", fr:"Regarder d'un œil sceptique."}] },
  { id:263, kanji:"普遍", reading:"ふへん", romaji:"fuhen", translation:"universalité, ce qui est universel", level:"N1", category:"nom", examples:[{jp:"普遍的な価値観を持つ。", fr:"Avoir des valeurs universelles."}] },
  { id:264, kanji:"矜持", reading:"きょうじ", romaji:"kyouji", translation:"fierté, amour-propre, dignité personnelle", level:"N1", category:"nom", examples:[{jp:"矜持を持って仕事をする。", fr:"Travailler avec fierté et dignité."}] },
  { id:265, kanji:"慮る", reading:"おもんぱかる", romaji:"omonpakaru", translation:"réfléchir profondément, délibérer, considérer avec soin", level:"N1", category:"verbe", examples:[{jp:"相手の立場を慮る。", fr:"Considérer la position de l'autre avec attention."}] },
  { id:266, kanji:"勉強する", reading:"べんきょうする", romaji:"benkyou suru", translation:"étudier", level:"N5", category:"verbe", examples:[{jp:"毎日勉強します。", fr:"J'étudie tous les jours."}] },
  { id:267, kanji:"練習する", reading:"れんしゅうする", romaji:"renshuu suru", translation:"s'entraîner, pratiquer", level:"N4", category:"verbe", examples:[{jp:"ピアノを練習します。", fr:"Je pratique le piano."}] },
  { id:268, kanji:"挑戦する", reading:"ちょうせんする", romaji:"chousen suru", translation:"défier, relever un défi", level:"N3", category:"verbe", examples:[{jp:"新しいことに挑戦します。", fr:"Je relève de nouveaux défis."}] },
  { id:269, kanji:"諦める", reading:"あきらめる", romaji:"akirameru", translation:"abandonner, renoncer", level:"N3", category:"verbe", examples:[{jp:"諦めないでください。", fr:"Ne renoncez pas."}] },
  { id:270, kanji:"悩む", reading:"なやむ", romaji:"nayamu", translation:"être tourmenté, hésiter, s'inquiéter", level:"N3", category:"verbe", examples:[{jp:"将来のことで悩んでいます。", fr:"Je me tourmente à propos de l'avenir."}] },
  { id:271, kanji:"喜ぶ", reading:"よろこぶ", romaji:"yorokobu", translation:"se réjouir, être heureux", level:"N4", category:"verbe", examples:[{jp:"成功して喜んでいます。", fr:"Je me réjouis du succès."}] },
  { id:272, kanji:"悲しむ", reading:"かなしむ", romaji:"kanashimu", translation:"se chagriner, être triste", level:"N4", category:"verbe", examples:[{jp:"別れを悲しみます。", fr:"Je me chagrine de la séparation."}] },
  { id:273, kanji:"驚く", reading:"おどろく", romaji:"odoroku", translation:"être surpris, s'étonner", level:"N4", category:"verbe", examples:[{jp:"その知らせに驚きました。", fr:"J'ai été surpris par cette nouvelle."}] },
  { id:274, kanji:"怒る", reading:"おこる", romaji:"okoru", translation:"se mettre en colère", level:"N4", category:"verbe", examples:[{jp:"嘘をつかれて怒りました。", fr:"Je me suis mis en colère qu'on me mente."}] },
  { id:275, kanji:"恐れる", reading:"おそれる", romaji:"osoreru", translation:"craindre, avoir peur", level:"N3", category:"verbe", examples:[{jp:"失敗を恐れています。", fr:"Je crains l'échec."}] },
];
