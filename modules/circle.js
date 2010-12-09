var Circle = {

  PI: 3.14,

  area: function (r) {
    return Circle.PI * r * r;
  },

  circumference: function (r) {
    return 2 * Circle.PI * r;
  }
};

exports.Circle = Circle;
