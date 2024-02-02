/**
 * menu page
 */
let menu = [
	{
		id: 0,
		name: "Paket 1",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
	{
		id: 1,
		name: "Paket 2",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
	{
		id: 2,
		name: "Paket 3",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
	{
		id: 3,
		name: "Paket 4",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
	{
		id: 4,
		name: "Paket 5",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
	{
		id: 5,
		name: "Paket 6",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
	{
		id: 6,
		name: "Paket 7",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 10000,
	},
];

// add card menu
const mainMenu = document.querySelector(".main-menu");
let card = ``;

menu.map((data) => {
	card += kartu(data.name, data.desc, data.price, data.id);
	mainMenu.innerHTML = card;
});

function kartu(name, desc, price, id) {
	return `<div class="card">
	<img src="./images/example-product/indomie.jpg" alt="" class="" />
	<div class="content">
		<p class="menu-name">${name}</p>
		<p class="menu-desc">${desc}</p>
		<div class="card-order">
			<p>Rp.${price}</p>
			<button class="tambah" id="pesan${id}">pesan</button>
		</div>
	</div>
</div>`;
}

// order
menu.map((data) => {
	const pesan = document.getElementById(`pesan${data.id}`);
	pesan.addEventListener("click", function (event) {
		// event.preventDefault();
		const jumlahPesanan = prompt("Masukan jumlah pesanan:");
		// console.log(jumlahPesanan);
		// if (jumlahPesanan != null) {
		if (jumlahPesanan == "" || jumlahPesanan == 0) {
			alert("Jumlah tidak boleh kosong!");
		} else {
			console.log(jumlahPesanan);
			const total = data.price * jumlahPesanan; // Hitung subtotal hanya untuk item saat ini
			// console.log(total);
			localStorage.setItem("total", total);
			localStorage.setItem("jumlah", jumlahPesanan);
			localStorage.setItem("nama", data.name);
			localStorage.setItem("deskripsi", data.desc);
			window.location.href = "order.html";
		}
		// }
	});
});
