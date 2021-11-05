### This is based on FoudationPress, which is now archived. The main difference is the entire build system is based on **Webpack 5**.

Currently: Foundation 6.7.4

**Tested on Node 16.8+ and NPM 7.21+**

**Note: As below the build commands will be different from the original FoundationPress.**

### config-default.json file (src/build/config-default.json)
FoundationPress includes a `config-default.json` file. You can make changes directly to this file. However, if you are working in a team environment you can also duplicate this file and name it `config-local.json`. The `config-local.json` file is ignored by git so that each environment can use a different configuration with the same git repo.

At the start of the build process a check is done to see if a `config-local.json` file exists. If `config-local.json` exists, the configuration will be loaded. If it does not exist, `config-default.json` will be used.

### Building

```
npm run dev
```

Will compile scss and js with sourcemaps and copy from "src" to "dist."

```
npm run start
```

Will launch browsersync and watch changes in php, scss and js files. `Be sure to change your local dev url in src/build/config-default.json` .

```
npm run build
```

Will minify all the files and remove sourcemaps and copy to the "dist" directory. Images in assets will be optimized, and app.js and app.css will be asset hashed for cachebusting.

By default revisioning/cachebusting is set to false. If you want it go to 'src/build/config-default.json' and set to true.

Note: Depending on how many images you have it may take awhile on first run.


--------------------------------------Archived FoundationPress------------------------------------

Find archived FoundationPress and additional documentation here:

https://github.com/olefredrik/FoundationPress
