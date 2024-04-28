# To install puppeteer
# deno run -A --unstable https://deno.land/x/puppeteer@16.2.0/install.ts
$Env:PUPPETEER_PRODUCT = "chrome"
deno run --allow-env --allow-net --allow-read --allow-run --allow-write `
    generate.ts $Args[1..-1]