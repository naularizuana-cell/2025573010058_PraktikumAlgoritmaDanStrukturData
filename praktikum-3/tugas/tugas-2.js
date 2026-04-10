// 1. Function rekursif pangkat
function pangkat(basis, eksponen) {
  if (eksponen === 0) return 1;
  return basis * pangkat(basis, eksponen - 1);
}

// Test
console.log("Pangkat:");
console.log(pangkat(2, 3)); // 8
console.log(pangkat(5, 2)); // 25

// 2. Function rekursif balikString
function balikString(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// Test
console.log("\nBalik String:");
console.log(balikString("halo")); // olah
console.log(balikString("level")); // level
