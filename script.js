const questions = [
  {
    question: "Bir sabah uyandığında güne nasıl başlarsın?",
    answers: [
      { text: "Erken kalkar, hemen işe koyulurum", fruit: "Portakal" },
      { text: "Biraz uykusuz olurum ama hızla toparlarım", fruit: "Mango" },
      { text: "Yavaşça kalkarım ve kahvemi içerken huzurlu bir şekilde başlarım", fruit: "Elma" },
      { text: "Güne başlamak için çok uğraşmam, uyandığımda sakin olurum", fruit: "Kivi" },
      { text: "Günleri planlamadan başlamam, bazen uzun süre yataktan çıkmam", fruit: "Karpuz" }
    ]
  },
  {
    question: "Bir arkadaşın sana çok zor bir soru soruyor, ne yaparsın?",
    answers: [
      { text: "Hemen çözüm bulur, en hızlı şekilde cevap veririm", fruit: "Portakal" },
      { text: "Düşünürüm, mantıklı bir çözüm üretirim", fruit: "Elma" },
      { text: "Kafam karışır, birkaç kez sormadan doğru cevabı veremem", fruit: "Muz" },
      { text: "Durumun analizini yapar, çok zaman harcamadan basitçe cevap veririm", fruit: "Çilek" },
      { text: "Cevabı bulamam, biraz vakit geçmesi gerek", fruit: "Karpuz" }
    ]
  },
  {
    question: "Bir grup arkadaşınla dışarıda geziyorsun, hangisini yaparsın?",
    answers: [
      { text: "Herkesle çok eğlenir, sohbeti yönlendiririm", fruit: "Çilek" },
      { text: "Bazen sessizce kenarda dururum, ama yine de keyfimi çıkarırım", fruit: "Üzüm" },
      { text: "Aksiyon severim, neşelendirici bir şeyler öneririm", fruit: "Portakal" },
      { text: "Kendi başıma dolaşmak hoşuma gider, çok kalabalık olmamayı tercih ederim", fruit: "Karpuz" },
      { text: "Gözlem yapar, bir kenarda sakin kalırım", fruit: "Kivi" }
    ]
  },
  {
    question: "Yalnız bir tatile gitme şansın olsa, hangi tür bir tatil tercih edersin?",
    answers: [
      { text: "Dağda yürüyüş yapar, doğayla iç içe olurum", fruit: "Kivi" },
      { text: "Küçük bir tatil köyüne gider, denizin tadını çıkarırım", fruit: "Mango" },
      { text: "Farklı kültürler keşfederim, büyük şehirleri gezerim", fruit: "Portakal" },
      { text: "Kendi başıma sakin bir plajda dinlenirim", fruit: "Ananas" },
      { text: "Daha çok eğlence için büyük bir tatil destinasyonuna giderim", fruit: "Çilek" }
    ]
  },
  {
    question: "Bir hedefe ulaşmaya çalışırken nasıl hareket edersin?",
    answers: [
      { text: "Hedefi belirlerim ve hemen ona odaklanırım", fruit: "Portakal" },
      { text: "İlk adımı atar, sonra biraz duraklarım ve daha sonra tekrar devam ederim", fruit: "Mango" },
      { text: "Başka şeylerle ilgilenip bazen hedefe odaklanmakta zorlanırım", fruit: "Karpuz" },
      { text: "Biraz geç başlarım ama bir plan oluştururum", fruit: "Elma" },
      { text: "Biraz sabırlı olmalı, her şeyin zamanla gelişmesini izlerim", fruit: "Kivi" }
    ]
  },
  {
    question: "Sosyal bir etkinlikte yer alırken nasıl bir tutum sergilersin?",
    answers: [
      { text: "Herkesle tanışır, herkesi çok eğlendiririm", fruit: "Çilek" },
      { text: "Genelde kenarda gözlemler yaparım, bazen birini tanımak için cesaret bulurum", fruit: "Üzüm" },
      { text: "İnsanlara ilham verir, enerjimle çevremi etkilerim", fruit: "Portakal" },
      { text: "Bazen yalnız vakit geçirmeyi tercih ederim", fruit: "Karpuz" },
      { text: "Bazı insanlara derinlemesine sohbetler sunarım", fruit: "Elma" }
    ]
  },
  {
    question: "Bir zorlukla karşılaştığında ne şekilde yaklaşırısın?",
    answers: [
      { text: "Hızla çözüm bulurum, her şeyin üstesinden gelebilirim", fruit: "Portakal" },
      { text: "Biraz vakit geçirip, olayları sakinlikle çözmeye çalışırım", fruit: "Kivi" },
      { text: "Durumu analiz eder, aşama aşama ilerlerim", fruit: "Elma" },
      { text: "Bazen zorlanırım, ama çözmek için çabalarım", fruit: "Mango" },
      { text: "Hızlıca geçiş yapar, beklerim ve zamanla kendiliğinden çözülür", fruit: "Üzüm" }
    ]
  },
  {
    question: "Büyük bir grup içinde ne tür bir kişi olursun?",
    answers: [
      { text: "Herkesle kolayca iletişim kurar, her zaman neşeli olurum", fruit: "Portakal" },
      { text: "Bazılarıyla konuşur, daha çok gözlem yaparım", fruit: "Karpuz" },
      { text: "Bazen dışarıda kalırım ama kesinlikle aktif olurum", fruit: "Mango" },
      { text: "Sakin olur, gruptaki dengeleri sevmem", fruit: "Elma" },
      { text: "Gözlem yapar, genellikle grup dinamiğiyle uyum sağlamak isterim", fruit: "Kivi" }
    ]
  },
  {
    question: "Bir hedef belirlediğinde, nasıl ilerlersin?",
    answers: [
      { text: "Hedefime kararlı bir şekilde ulaşırım, hiç durmam", fruit: "Portakal" },
      { text: "Planlı bir şekilde ama bazen yavaş ilerlerim", fruit: "Kivi" },
      { text: "Biraz zaman kaybedebilirim ama sonunda iyi bir sonuç alırım", fruit: "Mango" },
      { text: "Hedefimi belirledikten sonra yavaşça hareket ederim", fruit: "Elma" },
      { text: "İçimde bir güven varsa, hızlıca başarıya ulaşırım", fruit: "Çilek" }
    ]
  },
  {
    question: "Bir tatlı yapman gerekse, nasıl bir tarif seçersin?",
    answers: [
      { text: "Hızlıca pratik ve tatlı bir tarif seçerim", fruit: "Portakal" },
      { text: "Şık bir tatlı, biraz karmaşık ve lezzetli olsun", fruit: "Mango" },
      { text: "Sade ama lezzetli bir şeyler yaparım", fruit: "Elma" },
      { text: "Yavaşça her malzemeyi ekleyip sabırla yaparım", fruit: "Karpuz" },
      { text: "İçinde meyve bulunan yaratıcı bir tatlı yaparım", fruit: "Kivi" }
    ]
  },
  {
    question: "Bir tat seçmen gerekse, neyi tercih edersin?",
    answers: [
      { text: "Tatlı ve asidik, hayat dolu", fruit: "Portakal" },
      { text: "Yumuşak, tatlı ve rahatlatıcı", fruit: "Mango" },
      { text: "Tatlı, ekşi ama çok doğal", fruit: "Elma" },
      { text: "Yoğun ve zengin tatlar", fruit: "Karpuz" },
      { text: "Farklı ve egzotik tatlar", fruit: "Kivi" }
    ]
  },
  {
    question: "Bir hedefe ulaşırken hangi yöntemleri uygularsın?",
    answers: [
      { text: "Hedefimi belirler, hızlıca aksiyona geçerim", fruit: "Portakal" },
      { text: "Her aşamayı detaylıca planlarım", fruit: "Elma" },
      { text: "Yavaşça ama istikrarlı ilerlerim", fruit: "Mango" },
      { text: "Hedefi birkaç kez gözden geçiririm ve ona göre ilerlerim", fruit: "Kivi" },
      { text: "Farklı alternatifler ararım", fruit: "Karpuz" }
    ]
  },
  {
    question: "Bir yerden ayrılman gerekse, nasıl karar verirsin?",
    answers: [
      { text: "Hızla karar veririm, bir an önce yeni bir şeylere yönelirim", fruit: "Portakal" },
      { text: "Yavaşça değerlendirme yapar, kararımı verirken dikkatli olurum", fruit: "Karpuz" },
      { text: "Anlık kararlarla hareket ederim, biraz sabırsızım", fruit: "Mango" },
      { text: "Düşünerek karar verir, sonra netleştiririm", fruit: "Elma" },
      { text: "Farklı açılardan değerlendirir, hemen geçiş yapmam", fruit: "Kivi" }
    ]
  }
];

let currentQuestion = 0;
const scores = {};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.onclick = () => {
      scores[answer.fruit] = (scores[answer.fruit] || 0) + 1;
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    answersEl.appendChild(btn);
  });
}

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  let topFruit = null;
  let max = 0;
  for (const fruit in scores) {
    if (scores[fruit] > max) {
      max = scores[fruit];
      topFruit = fruit;
    }
  }
  resultEl.classList.remove("hidden");
  resultEl.textContent =` 
  Meyve Açıklaması:   
  ${getFruitDescription(topFruit)}`
}

function getFruitDescription(fruit) {
  switch(fruit) {
    case "Portakal":
      return "Sen bir Portakalsın! Enerjik, neşeli ve her zaman pozitif insanlarsın. Girdiğin her ortamda ışık saçarsın!";
    case "Mango":
      return "Sen bir Mangosun! Egzotik, dikkat çekici ve maceraperestsin. Sürekli yeni şeyler keşfetmek istersin!";
    case "Elma":
      return "Sen bir Elmasın! Dengeli, sakin ve düşünen bir kişiliğin var. Zorlukları mantıklı şekilde çözersin.";
    case "Kivi":
      return "Sen bir Kivisin! Sakin ve huzurlu bir kişiliğe sahipsin. Zorluklar seni korkutmaz!";
    case "Karpuz":
      return "Sen bir Karpuzsun! Yavaş ve düşünceli bir şekilde hareket eder, bazen yalnız kalmayı tercih edersin.";
    case "Çilek":
      return "Sen bir Çileksin! Sosyal, neşeli ve insanları etrafında toplamakta ustasın!";
    default:
      return "Sen bir meyvesin!";
  }
}

showQuestion();
