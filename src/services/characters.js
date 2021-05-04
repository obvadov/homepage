export function getRandomCharacter() {
  return fetch(
    "https://us-central1-bsa-portfolio-api.cloudfunctions.net/character/random"
  ).then((data) => data.json());
}
