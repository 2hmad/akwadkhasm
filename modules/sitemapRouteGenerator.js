const sitemapRouteGenerator = function () {
  this.nuxt.hook("generate:done", async (context) => {
    const routesToExclude = [];
    const allRoutes = await Array.from(context.generatedRoutes);
    const routes = await allRoutes.filter(
      (route) => !routesToExclude.includes(route)
    );
    this.nuxt.options.sitemap.routes = await [...routes];
  });
};
export default sitemapRouteGenerator;
