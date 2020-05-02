# Minimal Slim 4 starter project with webpack



## To install:
   


Run this command from the directory in which you want to install your new Slim Framework application.

```bash
composer create-project heithemmoumni/slim-skeleton-webpack my-project-name
cd my-project-name

```

Test using the PHP built-in server:

```bash
php -S 0.0.0.0:8888 -t public/
```

Or you can use `docker-compose` to run the app with `docker`, so you can run these commands:
```bash
cd [my-app-name]
docker-compose up -d
```
After that, open `http://localhost:8080` in your browser.

Run this command in the application directory to run the webpack

```bash
npm run dev
```

That's it! Now go build something cool.
