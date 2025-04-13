const compliments = [
  "You have the kindest soulthat no body deserves.",
  "Your smile can light up all the darkness that exixts.",
  "You are pure sunshine on a cloudy day.",
  "You’re the kind of person people write poetry about, such as me.",
  "You make ordinary moments special.",
  "You bring warmth wherever you go.",
  "You are effortlessly graceful.",
  "You have the most calming presence.",
  "Your modesty makes you glow the most.",
  "The way you care is truly rare.",
  "You make 'being kind' looks easy.",
  "You’re more lovely than the word ‘lovely’ itself.",
  "You handle everything with such politeness and grace.",
  "You inspire calm in chaos.",
  "You have a voice that soothes storms.",
  "You listen like you really hear people.",
  "You are the definition of soft strength.",
  "You are elegance in human form.",
  "Your sincerity is like poetry.",
  "You make silence feel beautiful.",
  // Add up to 200 compliments here later 🌷
];

function showCompliment() {
  const index = Math.floor(Math.random() * compliments.length);
  document.getElementById('compliment').textContent = compliments[index];
}
