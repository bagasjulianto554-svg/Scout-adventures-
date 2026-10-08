// ================================
// MENU HP
// ================================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


// ================================
// SANDI MORSE
// ================================

const morse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----."
};

const morseInput = document.getElementById("morseInput");
const morseBtn = document.getElementById("morseBtn");
const morseOutput = document.getElementById("morseOutput");

function translateMorse() {

  const text = morseInput.value
    .toUpperCase()
    .trim();

  if (!text) {
    morseOutput.textContent =
      "Silakan masukkan huruf atau kata terlebih dahulu.";

    return;
  }

  const result = text
    .split("")
    .map(character => {

      if (character === " ") {
        return "/";
      }

      return morse[character] || character;

    })
    .join(" ");

  morseOutput.textContent = result;
}

if (morseBtn) {
  morseBtn.addEventListener("click", translateMorse);
}

if (morseInput) {
  morseInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
      translateMorse();
    }

  });
}


// ================================
// BANK SOAL PRAMUKA
// ================================

const questions = [

  {
    question: "Apa kepanjangan dari Pramuka?",
    answer: "Praja Muda Karana",
    options: [
      "Praja Muda Karana",
      "Praktik Muda Karya",
      "Pemuda Rajin Berkarya",
      "Pramuka Muda Indonesia"
    ]
  },

  {
    question: "Tri Satya merupakan...",
    answer: "Janji anggota Pramuka",
    options: [
      "Janji anggota Pramuka",
      "Nama kegiatan",
      "Nama organisasi",
      "Peraturan sekolah"
    ]
  },

  {
    question: "Dasa Darma terdiri dari berapa butir?",
    answer: "10",
    options: [
      "5",
      "8",
      "10",
      "12"
    ]
  },

  {
    question: "Alat yang digunakan untuk mengetahui arah adalah...",
    answer: "Kompas",
    options: [
      "Peluit",
      "Kompas",
      "Tenda",
      "Tongkat"
    ]
  },

  {
    question: "Arah yang berlawanan dengan utara adalah...",
    answer: "Selatan",
    options: [
      "Timur",
      "Barat",
      "Selatan",
      "Tenggara"
    ]
  },

  {
    question: "Sandi Morse menggunakan simbol utama berupa...",
    answer: "Titik dan garis",
    options: [
      "Angka dan warna",
      "Titik dan garis",
      "Bendera dan peluit",
      "Gambar dan huruf"
    ]
  },

  {
    question: "Semaphore menggunakan...",
    answer: "Posisi dua bendera",
    options: [
      "Satu peluit",
      "Posisi dua bendera",
      "Kompas",
      "Tali"
    ]
  },

  {
    question: "Pioneering banyak menggunakan...",
    answer: "Tongkat dan tali",
    options: [
      "Kertas dan pensil",
      "Tongkat dan tali",
      "Bendera saja",
      "Kompas saja"
    ]
  },

  {
    question: "Simpul digunakan untuk...",
    answer: "Mengikat atau menyambung",
    options: [
      "Mengukur suhu",
      "Mengikat atau menyambung",
      "Menentukan arah",
      "Mencari air"
    ]
  },

  {
    question: "Kegiatan mendirikan tenda termasuk kegiatan...",
    answer: "Perkemahan",
    options: [
      "Perkemahan",
      "Administrasi",
      "Kesenian",
      "Penyiaran"
    ]
  },

  {
    question: "Sikap disiplin berarti...",
    answer: "Mematuhi aturan dan tanggung jawab",
    options: [
      "Mematuhi aturan dan tanggung jawab",
      "Datang sesuka hati",
      "Mengabaikan tugas",
      "Menunda semua kegiatan"
    ]
  },

  {
    question: "Contoh penerapan Dasa Darma adalah...",
    answer: "Menolong sesama",
    options: [
      "Menolong sesama",
      "Merusak lingkungan",
      "Mengejek teman",
      "Mengabaikan tugas"
    ]
  },

  {
    question: "Alat untuk memberi tanda suara adalah...",
    answer: "Peluit",
    options: [
      "Kompas",
      "Peluit",
      "Tenda",
      "Simpul"
    ]
  },

  {
    question: "Bakti sosial mencerminkan...",
    answer: "Kepedulian terhadap masyarakat",
    options: [
      "Kepedulian terhadap masyarakat",
      "Persaingan",
      "Kemalasan",
      "Keegoisan"
    ]
  },

  {
    question: "Tujuan latihan Pramuka salah satunya adalah...",
    answer: "Membentuk karakter dan keterampilan",
    options: [
      "Membentuk karakter dan keterampilan",
      "Menghindari kerja sama",
      "Mengurangi tanggung jawab",
      "Bermain saja"
    ]
  },

  {
    question: "Sebelum kegiatan lapangan sebaiknya...",
    answer: "Mempersiapkan perlengkapan",
    options: [
      "Berangkat tanpa persiapan",
      "Mempersiapkan perlengkapan",
      "Membawa barang sebanyak mungkin",
      "Mengabaikan aturan"
    ]
  },

  {
    question: "Kerja sama regu melatih...",
    answer: "Kekompakan dan tanggung jawab",
    options: [
      "Kekompakan dan tanggung jawab",
      "Keegoisan",
      "Persaingan",
      "Kemalasan"
    ]
  },

  {
    question: "Arah mata angin utama berjumlah...",
    answer: "4",
    options: [
      "2",
      "4",
      "6",
      "8"
    ]
  },

  {
    question: "Timur berlawanan dengan...",
    answer: "Barat",
    options: [
      "Utara",
      "Selatan",
      "Barat",
      "Tenggara"
    ]
  },

  {
    question: "Barat laut merupakan gabungan arah...",
    answer: "Barat dan utara",
    options: [
      "Barat dan utara",
      "Timur dan selatan",
      "Utara dan timur",
      "Selatan dan barat"
    ]
  },

  {
    question: "Tenda berfungsi sebagai...",
    answer: "Tempat berlindung",
    options: [
      "Alat navigasi",
      "Tempat berlindung",
      "Alat komunikasi",
      "Alat ukur"
    ]
  },

  {
    question: "Regu dalam Pramuka melatih...",
    answer: "Kerja sama dan tanggung jawab",
    options: [
      "Kerja sama dan tanggung jawab",
      "Persaingan tanpa aturan",
      "Bekerja sendiri",
      "Menghindari tugas"
    ]
  },

  {
    question: "Pemimpin regu harus memiliki sikap...",
    answer: "Bertanggung jawab",
    options: [
      "Bertanggung jawab",
      "Semena-mena",
      "Tidak peduli",
      "Mudah menyerah"
    ]
  },

  {
    question: "Menjaga kebersihan lingkungan merupakan bentuk...",
    answer: "Kepedulian terhadap lingkungan",
    options: [
      "Kepedulian terhadap lingkungan",
      "Pemborosan",
      "Persaingan",
      "Kecerobohan"
    ]
  },

  {
    question: "Saat teman membutuhkan bantuan, sebaiknya...",
    answer: "Membantu sesuai kemampuan",
    options: [
      "Mengabaikan",
      "Membantu sesuai kemampuan",
      "Menyalahkan",
      "Pergi tanpa memberi tahu"
    ]
  },

  {
    question: "Perlengkapan kegiatan sebaiknya diperiksa...",
    answer: "Sebelum kegiatan",
    options: [
      "Setelah hilang",
      "Sebelum kegiatan",
      "Saat sudah rusak",
      "Tidak perlu"
    ]
  },

  {
    question: "Dalam pertolongan pertama, keselamatan penolong...",
    answer: "Juga harus diperhatikan",
    options: [
      "Tidak penting",
      "Juga harus diperhatikan",
      "Boleh diabaikan",
      "Tidak perlu dipikirkan"
    ]
  },

  {
    question: "Jika cuaca membahayakan kegiatan luar ruangan...",
    answer: "Mengikuti arahan pembina dan mencari tempat aman",
    options: [
      "Tetap memaksa",
      "Mengikuti arahan pembina dan mencari tempat aman",
      "Berpisah dari kelompok",
      "Mengabaikan cuaca"
    ]
  },

  {
    question: "Salah satu manfaat belajar Morse adalah...",
    answer: "Melatih komunikasi menggunakan kode",
    options: [
      "Melatih komunikasi menggunakan kode",
      "Mengukur jarak",
      "Membuat tenda",
      "Menentukan cuaca"
    ]
  },

  {
    question: "Huruf E dalam Morse adalah...",
    answer: ".",
    options: [
      "-",
      "..",
      ".",
      "-."
    ]
  },

  {
    question: "Huruf T dalam Morse adalah...",
    answer: "-",
    options: [
      "-",
      "...",
      "..",
      "--"
    ]
  },

  {
    question: "Huruf S dalam Morse adalah...",
    answer: "...",
    options: [
      ".-",
      "...",
      "-..",
      "--"
    ]
  },

  {
    question: "Huruf O dalam Morse adalah...",
    answer: "---",
    options: [
      "---",
      "...",
      "--",
      ".-"
    ]
  },

  {
    question: "Angka 5 dalam Morse adalah...",
    answer: ".....",
    options: [
      ".....",
      "----.",
      "--...",
      "...--"
    ]
  },

  {
    question: "Dasa Darma mengajarkan anggota untuk memiliki...",
    answer: "Sikap dan perilaku yang baik",
    options: [
      "Sikap dan perilaku yang baik",
      "Sikap egois",
      "Ketidakdisiplinan",
      "Kebiasaan merugikan"
    ]
  },

  {
    question: "Komunikasi yang baik dalam regu berarti...",
    answer: "Menyampaikan informasi dengan jelas",
    options: [
      "Berbicara sendiri",
      "Menyampaikan informasi dengan jelas",
      "Tidak mendengarkan",
      "Menyalahkan teman"
    ]
  },

  {
    question: "Jika membutuhkan pertolongan, sebaiknya...",
    answer: "Meminta bantuan kepada orang yang tepat",
    options: [
      "Berjalan tanpa tujuan",
      "Meminta bantuan kepada orang yang tepat",
      "Menyembunyikan keadaan",
      "Mengabaikan risiko"
    ]
  },

  {
    question: "Kegiatan Pramuka dapat melatih...",
    answer: "Kemandirian",
    options: [
      "Kemandirian",
      "Kemalasan",
      "Keegoisan",
      "Ketidakpedulian"
    ]
  },

  {
    question: "Salah satu manfaat kegiatan perkemahan adalah...",
    answer: "Melatih kemandirian",
    options: [
      "Melatih kemandirian",
      "Menghindari tanggung jawab",
      "Mengurangi kerja sama",
      "Tidak perlu persiapan"
    ]
  },

  {
    question: "Dalam kegiatan kelompok, setiap anggota sebaiknya...",
    answer: "Menjalankan tugasnya",
    options: [
      "Menjalankan tugasnya",
      "Meninggalkan kelompok",
      "Mengabaikan aturan",
      "Bekerja sendiri"
    ]
  },

  {
    question: "Salah satu nilai penting dalam Pramuka adalah...",
    answer: "Tanggung jawab",
    options: [
      "Tanggung jawab",
      "Kecerobohan",
      "Keegoisan",
      "Kemalasan"
    ]
  }

];


// ================================
// FUNGSI ACAK
// ================================

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}


// ================================
// MEMBUAT KUIS
// ================================

const quiz = document.getElementById("quiz");
const submitQuiz = document.getElementById("submitQuiz");
const score = document.getElementById("score");

const selectedQuestions =
  shuffle(questions).slice(0, 20);


selectedQuestions.forEach((item, index) => {

  const questionBox =
    document.createElement("div");

  questionBox.className = "question";

  const options =
    shuffle(item.options);

  questionBox.innerHTML = `
    <h3>
      ${index + 1}. ${item.question}
    </h3>

    ${options.map(option => `
      <label class="option">
        <input
          type="radio"
          name="question${index}"
          value="${option}"
        >
        ${option}
      </label>
    `).join("")}
  `;

  quiz.appendChild(questionBox);

});


// ================================
// CEK NILAI
// ================================

submitQuiz.addEventListener("click", () => {

  let correct = 0;

  selectedQuestions.forEach((item, index) => {

    const selected =
      document.querySelector(
        `input[name="question${index}"]:checked`
      );

    if (
      selected &&
      selected.value === item.answer
    ) {
      correct++;
    }

  });

  const nilai =
    Math.round(
      (correct / selectedQuestions.length) * 100
    );

  score.hidden = false;

  score.innerHTML = `
    🎉 Nilaimu: <strong>${nilai}</strong>/100
    <br>
    <small>
      ${correct} dari ${selectedQuestions.length}
      jawaban benar.
    </small>
  `;

  score.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});
