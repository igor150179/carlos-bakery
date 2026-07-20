/** Bolos personalizados — fotos reais da Carlo's Brasil */

const img = (file: string) => `/images/custom-cakes/${file}`;

export const CUSTOM_CAKE_IMAGES = {
  hero: img("bolo-personalizado-chanel.png"),
  wedding: img("bolo-personalizado-mandala.png"),
  birthday: img("bolo-personalizado-disney.png"),
  corporate: img("bolo-personalizado-chanel.png"),
  baptism: img("bolo-personalizado-chanel.png"),
  special: img("bolo-personalizado-harry-potter.png"),
  gallery: [
    img("bolo-personalizado-disney.png"),
    img("bolo-personalizado-chanel.png"),
    img("bolo-personalizado-hello-kitty.png"),
    img("bolo-personalizado-harry-potter.png"),
    img("bolo-personalizado-halloween.png"),
    img("bolo-personalizado-simpsons.png"),
    img("bolo-personalizado-mandala.png"),
  ],
} as const;
