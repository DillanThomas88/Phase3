module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        default: ['Montserrat']
      },
      gridTemplateColumns: {
        // custom grid setup
        '50': 'repeat(50, minmax(0, 1fr))',
      },
      animation: {
        appear: 'appear .5s forwards',
        slideleft: 'slidein .50s forwards',
        slideright: 'slidein .50s reverse forwards',
        slideup: 'slide .50s forwards',
        slidedown: 'slide .25s reverse forwards',
        disapear: 'appear .25s reverse forwards',
        grow: 'scale .25s forwards',
        right1: 'moveRight1 .25s forwards',
        right2: 'moveRight2 .25s forwards',
        right3: 'moveRight3 .25s forwards',
        left1: 'moveLeft1 .25s forwards',
        left2: 'moveLeft2 .25s forwards',
        left3: 'moveLeft3 .25s forwards',
        open: 'slidedown .25s forwards',
        backdrop: 'partialappear .50s forwards'
      },
      keyframes: {
        appear: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slidein: {
          from: {opacity: 0, transform: 'translateX(30px)'},
          to: {opacity: 1, transform: 'translateX(0px)'}
        },
        slide: {
          from: {opacity: 0, transform: 'translateY(10px)'},
          to: {opacity: 1, transform: 'translateY(0px)'}
        },
        scale: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.25)' },
        },
        moveRight1: {
          from: { transform: 'translateX(0px)' },
          to: { transform: 'translateX(60px)' },
        },
        moveRight2: {
          from: { transform: 'translateX(60px)' },
          to: { transform: 'translateX(120px)' },
        },
        moveRight3: {
          from: { transform: 'translateX(0px)' },
          to: { transform: 'translateX(120px)' },
        },
        moveLeft1: {
          from: { transform: 'translateX(120px)' },
          to: { transform: 'translateX(60px)' },
        },
        moveLeft2: {
          from: { transform: 'translateX(60px)' },
          to: { transform: 'translateX(0px)' },
        },
        moveLeft3: {
          from: { transform: 'translateX(120px)' },
          to: { transform: 'translateX(0px)' },
        },
        slidedown: {
          from: { transform: 'translateY(-500px)', opacity: 1 },
          to: { transform: 'translateY(0px)', opacity: 1  },
        },
        partialappear: {
          from: {opacity: 0},
          to: {opacity: .50}
        }


      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
