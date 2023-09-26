/*
Write a function, which takes a non-negative integer (seconds)
as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

function humanReadable (seconds) {
  const HH = parseInt(seconds / (60 * 60))
  const MM = parseInt(seconds / 60 % 60)
  const SS = parseInt(seconds % 60)
 // TODO: No need for toString
  return ("0" + HH.toString()).slice(-2) + ':' + ("0" + MM.toString()).slice(-2) + ':' + ("0" + SS.toString()).slice(-2)
}
console.log(humanReadable(359999))