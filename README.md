# 🐍 Snake Game

Versión web del clásico juego Snake, desarrollado con **React** y **canvas 2D**.  
El jugador controla una serpiente que debe comer para crecer, evitando colisionar consigo misma o con los bordes del escenario.

---

## 🚀 Características

- 🎮 Movimiento fluido y responsivo con teclas WASD
- 🍎 Comida aleatoria en cada partida
- 🧠 Colisión consigo mismo y con los bordes
- ⚡ Aumento de dificultad progresiva (la velocidad se incrementa al comer)
- 🪙 Puntuación en pantalla
- 🔁 Reinicio limpio del juego tras perder
- 🎨 Interfaz cuidada con imágenes, fondo y marco decorativo

---

## 📦 Tecnologías utilizadas

- [React](https://reactjs.org/)
- Canvas 2D API (HTML5)
- JavaScript
- CSS Modules

---

## 📸 Captura de pantalla

![Snake Menu screenshot](./public/preview1.png)
![Snake Game screenshot](./public/preview2.png)

---

## 🔧 Instalación y uso

```bash
# Clona el repositorio
git clone https://github.com/tuusuario/snake-game.git
cd snake-game

# Instala las dependencias
npm install

# Inicia el servidor local
npm run dev
```

Luego abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🎯 Controles

- `W` = Arriba
- `A` = Izquierda
- `S` = Abajo
- `D` = Derecha

---

## 📁 Estructura del proyecto

```
src/
│
├── assets/             → Imágenes del juego
├── components/         → Componentes visuales (Menu, GameCanvas, GameOver)
├── classes/            → Lógica de juego (Snake, Food)
├── utils/              → Funciones auxiliares (sonido, velocidad, canvas)
├── App.jsx             → Componente raíz y controlador de estado
├── main.jsx            → Entrada principal de React
└── index.css           → CSS de App.jsx

public/                 → Imágenes y sonidos accesibles desde el navegador
```

---

## 🧪 Próximas mejoras (planificadas)


- 🎨 Desbloqueo de skins
  Permitir al jugador cambiar el aspecto de la serpiente o el fondo al conseguir ciertos logros o puntos.

- 📈 Tabla de récords
  Mostrar los mejores puntajes locales, o incluso conectarse a un backend para rankings globales.

- 🎮 Niveles de dificultad
  Elegir entre varios modos antes de empezar: fácil, medio, difícil, velocidad incremental…

- 👤 Sistema de usuarios (requiere backend)
  Guardar el progreso, skins desbloqueadas y estadísticas de cada jugador.

- 🐍 Comportamiento aleatorio de la comida
  Que se mueva, desaparezca con el tiempo o aparezca en patrones especiales.

---

## 📝 Licencia

Este proyecto es de uso libre para fines educativos o personales.

---

Desarrollado con 💚 por Daniel Campón