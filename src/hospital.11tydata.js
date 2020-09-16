module.exports = {
  eleventyComputed: {
    hospitalData: {
      compras: (data) => {
        return data.compras.filter((compra) => compra.id === data.hospital.id);
      },
    }
  }
};
