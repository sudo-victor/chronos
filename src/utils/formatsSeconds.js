// Converte os segundos no formato min:seg
export default function secondsToMinutes(value) {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    const maskedMinutes = String(minutes).padStart(2, "0");
    const maskedSeconds = String(seconds).padStart(2, "0");

    return `${maskedMinutes}:${maskedSeconds}`;
}
