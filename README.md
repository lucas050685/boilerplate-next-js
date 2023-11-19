# Boilerplate Nextjs
This is a [Next.js](https://nextjs.org/) project

## Getting Started

First, install all dependencies:

```bash
yanr install
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development patterns

This project uses ESLint to ensure the good practice of code quality.

To get a better development experience please enable the eslint auto save. It will prettify your code always when a file is saved. So follow these steps:

1 - If you're using VS Code, please install the [ESLint]() plugin;

2 - In VS Code open the file [`~/.config/Code/User/settings.json`](vscode://~/.config/Code/User/settings.json);

3 - Add the following lines:
```json
{
  ...
  
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"],
  "eslint.enable": true,
  "eslint.format.enable": true
}
```
4 - Restart VS Code if needed.

## References

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

This boileplate provides a built-in script to enable the deployment via pipeline.

The script lives in `./scripts/vercel-deployment.sh` file, and you can run it via a package script.

This script requires a the VERCEL_TOKEN exposed in the shell.
```bash
export VERCEL_TOKEN=<my vercel token>
yarn deploy
```
