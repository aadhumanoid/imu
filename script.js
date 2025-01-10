function generateFunction() {
  const mid = parseInt(document.getElementById("mid").value);
  const tolerance = parseInt(document.getElementById("tolerance").value);

  const leftLimit = (mid - tolerance + 360) % 360;
  const rightLimit = (mid + tolerance) % 360;
  const behind = (mid + 180) % 360;

  let condition;
  if (leftLimit > rightLimit) {
    condition = `if ((mag >= leftLimit) || (mag <= rightLimit)) {
  // Arah depan
}`;
  } else {
    condition = `if ((mag >= leftLimit) && (mag <= rightLimit)) {
  // Arah depan
}`;
  }

  let condition2;
  if (rightLimit < behind) {
    condition2 = `else if ((mag > rightLimit) && (mag < Behind)) {
  // Arah kanan
}`;
  } else {
    condition2 = `else if ((mag > rightLimit) || (mag < Behind)) {
  // Arah kanan
}`;
  }

  const functionCode = `int mid = ${mid};
int leftLimit = (mid - ${tolerance} + 360) % 360; // Batas awal arah lurus
int rightLimit = (mid + ${tolerance}) % 360;     // Batas akhir arah lurus
int Behind = (mid + 180) % 360;        // Batas akhir arah kanan

${condition}
${condition2}
else {
  // Arah kiri
}`;

  document.getElementById("output").value = functionCode;
}
