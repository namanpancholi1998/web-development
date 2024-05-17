## How to setup Tailwind Css

Step 1 -> In terminal Run this Command

```
    npm install -D tailwindcss
    npx tailwindcss init
```

Step 2 -> Update tailwind.config.js file to include this line

```
    content: ["./src/**/*.{html,js}"],
```

Step 3 -> create src/input.css to include

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

step 4 -> Include the src/output.css file to your html file

```
    <link rel="stylesheet" href="src/output.css" />
```

step 5 -> Run the following command

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
