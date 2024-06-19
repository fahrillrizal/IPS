document.addEventListener("DOMContentLoaded", function() {
    const jumlahMatkulInput = document.getElementById('jumlahMatkul');
    const nilaiPredikatContainer = document.getElementById('nilaiPredikatContainer');
    const totalIPSInput = document.getElementById('totalIPS');
    const komentar = document.getElementById('komentar');

    jumlahMatkulInput.addEventListener('input', function() {
        const jumlahMatkul = parseInt(jumlahMatkulInput.value);

        nilaiPredikatContainer.innerHTML = '';

        for (let i = 1; i <= jumlahMatkul; i++) {
            const labelPredikat = document.createElement('label');
            labelPredikat.className = 'label-predikat';
            labelPredikat.textContent = `Nilai predikat matkul ke-${i}`;

            const inputPredikat = document.createElement('input');
            inputPredikat.type = 'text';
            inputPredikat.className = 'form-control';
            inputPredikat.placeholder = `Masukkan nilai`;
            inputPredikat.pattern = "[A-Za-z]+";
            inputPredikat.title = "Hanya huruf yang diperbolehkan";

            nilaiPredikatContainer.appendChild(labelPredikat);
            nilaiPredikatContainer.appendChild(inputPredikat);
        }
    });

    nilaiPredikatContainer.addEventListener('input', function() {
        const inputs = nilaiPredikatContainer.getElementsByTagName('input');
        let totalNilai = 0;
        let count = 0;

        for (let i = 0; i < inputs.length; i++) {
            const nilai = inputs[i].value.toUpperCase().trim();
            if (/^[A-Z]+$/.test(nilai)) {
                switch (nilai) {
                    case 'A':
                        totalNilai += 4;
                        count++;
                        break;
                    case 'AB':
                        totalNilai += 3.5;
                        count++;
                        break;
                    case 'B':
                        totalNilai += 3;
                        count++;
                        break;
                    case 'BC':
                        totalNilai += 2.5;
                        count++;
                        break;
                    case 'C':
                        totalNilai += 2;
                        count++;
                        break;
                    case 'D':
                        totalNilai += 1;
                        count++;
                        break;
                    case 'E':
                        totalNilai += 0;
                        count++;
                        break;
                    default:
                        break;
                }
            }
        }

        if (count > 0) {
            const IPS = totalNilai / count;
            totalIPSInput.value = IPS.toFixed(2);

            if (IPS >= 3.5) {
                komentar.textContent = "Wahh hebat, kamu cocok jadi dosen!";
            } else if (IPS >= 3 && IPS < 3.5) {
                komentar.textContent = "Sek aman, apik iku!";
            } else if (IPS >= 2.5 && IPS < 3) {
                komentar.textContent = "Syukuri!";
            } else {
                komentar.textContent = "Semangat!";
            }
        } else {
            totalIPSInput.value = '';
            komentar.textContent = '';
        }
    });
});