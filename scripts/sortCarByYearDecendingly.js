function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // 1. buat variabel untuk menampung panjang dari array cars
  let p = result.length;

  // 2. buat perulangan i untuk mengulangi banyak nya result, lalu dikurangi 1, karena perbandingan dilakukan sebanyak jumlah data dikurangi 1
  for(let i = 0; i < p - 1; i++){

    // 3. buat perulangan j untuk membandingkan dan menukar posisi dua elemen yang berdekatan dalam array. lalu p - i - 1 dilakukan untuk tidak mengulangi perbandingan elemen yang telah dilakukan
    for(let j = 0; j < p - i - 1; j++){

        // 4. lakukan perbandingan jika tahun mobil saat ini (j[0]) lebih kecil daripada tahun mobil setelahnya (j[1]) - dan seterusnya. maka ditukar tempatnya
        if(result[j].year < result[j + 1].year){

            // buat variabel temp untuk menampung nilai variabel sementara sebelum ditukar
            let temp = result[j];
            result[j] = result[j + 1];
            result[j + 1] = temp;
        }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
