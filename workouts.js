// workouts.js
const workoutProgram = {
  1: { // Pazartesi
    title: "Üst Vücut (İtme/Çekme)",
    focus: "Güçlenme & Hacim",
    warmup: "5 Dk Hafif Yürüyüş (Koşu Bandı)",
    cardio: "15-20 Dk Eliptik (Orta Direnç)",
    exercises: [
      { id: 'm1', name: "Chest Press Machine", sets: 3, reps: "10-12", note: "Oturarak, kolları ileri it", img: "chest_press_anim" },
      { id: 'm2', name: "Lat Pulldown", sets: 3, reps: "10-12", note: "Üstten göğüse çekiş", img: "lat_pull_anim" },
      { id: 'm3', name: "Dumbbell Shoulder Press", sets: 3, reps: "12", note: "Omuzdan baş üstüne itiş", img: "shoulder_press_anim" },
      { id: 'm4', name: "Seated Cable Row", sets: 3, reps: "12", note: "Yere yakın, karna çekiş", img: "row_anim" },
      { id: 'm5', name: "Dumbbell Bicep Curl", sets: 3, reps: "12-15", note: "Ayakta dambıl kaldırma", img: "bicep_curl_anim" },
      { id: 'm6', name: "Triceps Pushdown", sets: 3, reps: "12-15", note: "Kablolu arka kol itiş", img: "tricep_push_anim" },
    ]
  },
  2: { // Salı
    title: "Alt Vücut & Karın",
    focus: "Bacak Kuvveti",
    warmup: "5 Dk Hafif Yürüyüş",
    cardio: "15-20 Dk Eliptik",
    exercises: [
      { id: 't1', name: "Leg Press", sets: 3, reps: "10-12", note: "Ayaklarla platformu it", img: "leg_press_anim" },
      { id: 't2', name: "Leg Extension", sets: 3, reps: "15", note: "Oturarak ön bacak uzatma", img: "leg_ext_anim" },
      { id: 't3', name: "Lying Leg Curl", sets: 3, reps: "12", note: "Yüzüstü arka bacak çekiş", img: "leg_curl_anim" },
      { id: 't4', name: "Goblet Squat", sets: 3, reps: "12", note: "Dambıl ile çökme", img: "squat_anim" },
      { id: 't5', name: "Plank", sets: 3, reps: "45-60 sn", note: "Karın statik duruş", img: "plank_anim" },
    ]
  },
  3: { // Çarşamba
    title: "Dinlenme (Aktif Toparlanma)",
    isRest: true,
    message: "Bugün ağırlık yok! Tam dinlenme veya hafif bir yürüyüş yapabilirsin.",
    img: "rest_anim"
  },
  4: { // Perşembe
    title: "Üst Vücut (Farklı Açılar)",
    focus: "Hipertrofi",
    warmup: "5 Dk Hafif Yürüyüş",
    cardio: "15-20 Dk Eliptik",
    exercises: [
      { id: 'th1', name: "Incline Dumbbell Press", sets: 3, reps: "10-12", note: "Eğimli sehpada üst göğüs", img: "incline_press_anim" },
      { id: 'th2', name: "Assisted Pull-Up", sets: 3, reps: "10", note: "Destekli barfiks", img: "pullup_anim" },
      { id: 'th3', name: "Lateral Raise", sets: 4, reps: "15", note: "Ayakta yana açış", img: "lat_raise_anim" },
      { id: 'th4', name: "Butterfly / Pec Deck", sets: 3, reps: "15", note: "Makinede kelebek", img: "butterfly_anim" },
      { id: 'th5', name: "Hammer Curl", sets: 3, reps: "12", note: "Çekiç tutuş pazu", img: "hammer_curl_anim" },
    ]
  },
  5: { // Cuma
    title: "Alt Vücut & Karın (Tekrar & Denge)",
    focus: "Dayanıklılık",
    warmup: "5 Dk Hafif Yürüyüş",
    cardio: "15-20 Dk Eliptik",
    exercises: [
      { id: 'f1', name: "Lunges", sets: 3, reps: "10 Adım", note: "Dambıl ile adım alma", img: "lunge_anim" },
      { id: 'f2', name: "Calf Raise", sets: 4, reps: "20", note: "Baldır yükseltme", img: "calf_anim" },
      { id: 'f3', name: "Leg Press (Geniş Ayak)", sets: 3, reps: "12", note: "Ayaklar daha geniş", img: "leg_press_wide_anim" },
      { id: 'f4', name: "Crunch Machine / Mekik", sets: 4, reps: "20", note: "Karın sıkıştırma", img: "crunch_anim" },
    ]
  },
  6: { // Cumartesi
    title: "Aktif Kardiyo (Toparlanma)",
    isCardio: true,
    message: "Açık hava tempolu yürüyüş, yüzme veya bisiklet. Süre: 45-60 dk.",
    img: "cardio_anim"
  },
  0: { // Pazar (JavaScript'te Pazar 0'dır)
    title: "Tam Dinlenme",
    isRest: true,
    message: "Bugün büyüme günü. Bol su iç, kaliteli beslen ve uyu.",
    img: "sleep_anim"
  }
};

export default workoutProgram;