const productos = [
  {
    id: 1,
    nombre: "Audífonos Pro",
    precio: 29990,
    descripcion: "Sonido claro y cómodo para estudiar.",
    imagen: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    nombre: "Mouse Gamer",
    precio: 19990,
    descripcion: "Precisión ideal para trabajo y juego.",
    imagen: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    nombre: "Teclado Mecánico",
    precio: 49990,
    descripcion: "Respuesta rápida y diseño compacto.",
    imagen: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    nombre: "Monitor 24 pulgadas",
    precio: 129990,
    descripcion: "Pantalla full HD para productividad.",
    imagen: "https://picsum.photos/300/200?random=4",
  },
  {
    id: 5,
    nombre: "Notebook Base",
    precio: 699990,
    descripcion: "Equipo ideal para programación inicial.",
    imagen: "https://picsum.photos/300/200?random=5",
  },
  {
    id: 6,
    nombre: "Webcam HD",
    precio: 24990,
    descripcion: "Perfecta para clases y reuniones.",
    imagen: "https://picsum.photos/300/200?random=6",
  },
  {
    id: 7,
    nombre: "Parlante Bluetooth",
    precio: 35990,
    descripcion: "Audio portátil para cualquier lugar.",
    imagen: "https://picsum.photos/300/200?random=7",
  },
  {
    id: 8,
    nombre: "Hub USB-C",
    precio: 27990,
    descripcion: "Conecta múltiples dispositivos.",
    imagen: "https://picsum.photos/300/200?random=8",
  },
];

const contenedorProductos = document.getElementById("contenedorProductos");

function cargarProductos(){
    contenedorProductos.innerHTML = "";
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const card = document.createElement('article');
        card.classList.add("card");
        card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <div class="card-body">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p class="precio">${producto.precio}</p>
        </div>`;

        contenedorProductos.appendChild(card);
    }
}

cargarProductos();