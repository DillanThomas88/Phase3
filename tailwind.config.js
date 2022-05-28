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
        appear: 'appear .25s forwards',
        disapear: 'appear .25s reverse forwards',
        grow: 'scale .25s forwards',
        right1: 'moveRight1 .25s forwards',
        right2: 'moveRight2 .25s forwards',
        right3: 'moveRight3 .25s forwards',
        left1: 'moveLeft1 .25s forwards',
        left2: 'moveLeft2 .25s forwards',
        left3: 'moveLeft3 .25s forwards',
      },
      keyframes: {
        appear: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scale: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.5)' },
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


      },
    },
  },
  plugins: [],
}
