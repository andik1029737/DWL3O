function contohIfElse(){
	let nilai = prompt("Inputkan Nilai Akhir :");
	let grade = "";

	if(nilai>=80) grade ="A"
		else if(nilai >=70) grade ="B"
			else if(nilai >=60) grade ="C"
				else if(nilai >=60) grade ="D"
					else grade ="E";
	//OUTUPUT
	document.write("Nilai Akhir Anda : "+grade);

}
function contohSwitchCase(){
let bulan = prompt("Inputkan Urutan :");
	let hasil = "";

	switch(bulan)
	{
		case "1":
		hasil ="januari";
		break;
		case "2":
		hasil ="Febuari";
		break;
		case "3":
		hasil ="Maret";
		break;
		case "4":
		hasil ="April";
		break;
		default:
		hasil = "Urutan Tidak Ditentukan";
	}
	document.write("Anda Memilih bulan <b>"+hasil+"</b>");
}