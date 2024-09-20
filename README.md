# sveltekit-auth-psql

Sveltekit user auth template using lucia, drizzle, psql, and pico css
[TypeScript](https://www.typescriptlang.org/), [Svelte](https://svelte.dev), [SvelteKit](https://kit.svelte.dev), [Lucia](https://lucia-auth.com/), [Drizzle](https://orm.drizzle.team/), and [Pico CSS](https://picocss.com/).

## Get started

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/moolenbeek/sveltekit-auth.git sveltekit-auth-psql
cd sveltekit-auth-psql
```

If you would like to remove existing `.git` repository and re-initialize Git locally:

```bash
rm -rf .git
git init
```

Once you've cloned the project, install dependencies with NPM:

```bash
npm install # or `npm i`
```

Add the following database parameters to your `.env` without the square brackets:

```bash
DATABASE_URL="postgres://[user]:[password]@[host]:[port_number]/[db_name]"
```
Generate database

```bash
npm run generate
```

Migrate database

```bash
npm run migrate
```

Start development server:

```bash
npm run dev
```

Drizzle studio

```bash
npm run studio
```

