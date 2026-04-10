// 1. Array dataMahasiswa (minimal 6 data)
const dataMahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dina", nilai: 60 },
  { nama: "Eka", nilai: 75 },
  { nama: "Fajar", nilai: 50 },
];

// 2. Function hitungStatistik
function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce(
    (acc, curr) => {
      acc.total += 1;
      acc.jumlahNilai += curr.nilai;

      if (curr.nilai > acc.tertinggi) acc.tertinggi = curr.nilai;
      if (curr.nilai < acc.terendah) acc.terendah = curr.nilai;

      return acc;
    },
    {
      total: 0,
      jumlahNilai: 0,
      tertinggi: -Infinity,
      terendah: Infinity,
    },
  );

  hasil.rataRata = hasil.jumlahNilai / hasil.total;
  delete hasil.jumlahNilai;

  return hasil;
}

// 3. Function filterLulus
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter((mhs) => mhs.nilai >= batasLulus);
}

// 4. Function tambahGrade
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map((mhs) => {
    let grade;
    if (mhs.nilai >= 85) grade = "A";
    else if (mhs.nilai >= 75) grade = "B";
    else if (mhs.nilai >= 65) grade = "C";
    else if (mhs.nilai >= 50) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}

// 5. Panggil semua function
const statistik = hitungStatistik(dataMahasiswa);
const lulus = filterLulus(dataMahasiswa, 70);
const denganGrade = tambahGrade(dataMahasiswa);

// 6. Tampilkan hasil
console.log("=== Statistik ===");
console.log(statistik);

console.log("\n=== Mahasiswa Lulus ===");
lulus.forEach((mhs) => {
  console.log(`${mhs.nama} - ${mhs.nilai}`);
});

console.log("\n=== Data + Grade ===");
denganGrade.forEach((mhs) => {
  console.log(`${mhs.nama} - ${mhs.nilai} (${mhs.grade})`);
});
