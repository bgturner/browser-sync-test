# Browser-Sync Sandbox

This is just a little repo for me to try out the browser-sync node module:

[browsersync.io](http://browsersync.io)

A couple of things, most of which are covered on the above site.

## Setup

Browser-sync is a node module, so you need that. If you have node setup,
installing and launching from command line is simple:

```
cd path/to/static/web/files
npm install -g browser-sync
browser-sync start --server --files "css/*.css"
```

That last command basically tells browser-sync to start a new server in the
current directory, and watch for any changes to CSS files in the `css` directory.
Changes that are detected are merged into any browser that visits the URL that
is created when browser-sync starts (usually something like: `192.168.0.60:3000`).

## Gulp Integration

In this repo I'm using Gulp with some [pointers from browser-sync.io](http://www.browsersync.io/docs/gulp/), however
there are [instructions for Grunt](http://www.browsersync.io/docs/grunt/).

For me it's important to compile Sass and have the style changes propagate out.

Using this sandbox repo, run `gulp` to start serving the site found in `site`.

## Proxy server

Lastly, browser-sync can be used to co-ordinate views of a site that is already
being served by your machine (think via MAMP/WAMP/XAMP or Vagrant).

I often use [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV), so setting
up this gulpfile to watch and coordinate my theme development is simply updating
`server` to `proxy`:

```
gulp.task('browser-sync', function () {
  browserSync({
    notify: false,
    server: {
      baseDir: ['site']
    }
  });
});
```

to

```
gulp.task('browser-sync', function () {
  browserSync({
    notify: false,
    proxy: "local.wordpress.dev"
  });
});
```